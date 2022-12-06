import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { ApplicationState } from '@/store/index'
import { updateDisclosure, updateUser, updateProfileStep, choosePlanAgain } from '@/store/auth/action'
import Header from '@/components/Pages/Header'
import Signature from '@/components/Pages/Disclosure/Signature'
import TermsAndConditions from '@/components/common/TermsAndConditions'
import { StateCheckbox } from '@/components/Checkbox/StateCheckbox'
import Image from '@/components/common/Image'
import axios from "@/util/api";

declare global {
  interface Window {
    MozBlob: any
    WebKitBlob: any
  }

  interface Navigator {
    msSaveBlob?: (blob: any, defaultName?: string) => boolean
  }
}

const SignatureWrapper: React.FC = (props: any) => {
  const router = useRouter()
  const user = useSelector((state: ApplicationState) => state.auth.user)
  const pending = useSelector((state: ApplicationState) => state.common.pending)
  const ref2 = React.useRef<HTMLDivElement>(null)
  const [signatureImage, setSignatureImage] = useState<
    string | null | undefined
  >(null)
  const [visible, setvisible] = useState<boolean>(false)
  const [readFlag, setReadFlag] = useState<boolean>(false)
  const [download, setDownload] = useState<boolean>(
    user?.disclosure_agreements?.download_status || false,
  )
  const [reviewStatus, setReviewStatus] = useState<boolean>(
    user?.disclosure_agreements?.review_status || false,
  )
  const [agreeStatus, setAgreeStatus] = useState<boolean>(
    user?.disclosure_agreements?.agree_status || false,
  )
  const [saveAble, setSaveAble] = useState<boolean>(false)

  const dispatch = useDispatch()

  useEffect(() => {
    if (user) {
      if (!user.selected_plan?.plan_id && user.disclosure_agreements && user.disclosure_agreements.disclosure_pdf_link) {
        dispatch(updateProfileStep('back'))
        router.push('/checkpoint-result')
      }
      setSignatureImage(user.disclosure_agreements?.signature_image)
    }
  }, [user])

  const downloadDoc = async () => {
    setDownload(true)

    axios.get("download", {
      responseType: 'blob',
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'disclosure.pdf'); //or any other extension
      document.body.appendChild(link);
      link.click();
    });

    await dispatch(updateDisclosure({ type: 'download_status' }))
  }

  const reviewDoc = async () => {
    if (download && !reviewStatus) {
      setReviewStatus(true)
      await dispatch(updateDisclosure({ type: 'review_status' }))
    }
  }

  const agreeTerms = async () => {
    if (download && readFlag && !agreeStatus) {
      setAgreeStatus(true)
      await dispatch(updateDisclosure({ type: 'agree_status' }))
    }
  }

  const uploadSignature = () => {
    if (!pending)
      dispatch(
        updateDisclosure({
          type: 'signature_status',
          data: signatureImage,
        }),
      )
  }

  const handleScroll = () => {
    if (ref2.current) {
      const { scrollTop, scrollHeight, clientHeight } = ref2.current
      if (scrollTop + clientHeight >= scrollHeight - 1) {
        setReadFlag(true)
      }
    }
  }

  const handleChange = (e) => {
    dispatch(updateUser(user?.id, e))
  }

  const handleSubmit = (e) => {
    setSignatureImage(e)
    setvisible(false)
    setSaveAble(true)
  }

  return (
    <div className="w-full relative">
      <Header opacity={false} />
      <div className="w-full px-[24px] min-h-[100vh] relative font-Lato">
        <div className="w-full max-w-[476px] py-[90px] md:py-[125px] mx-auto">
          <div className="w-full text-[24px] md:text-[38px] text-center font-bold font-Lato mb-[24px] md:mb-[32px]">
            Disclosures and E-signature
          </div>
          <div className="w-full mb-[24px]">
            <button
              className="w-full text-white text-[18px] flex justify-center py-[16px] px-[24px] bg-[#001F55] rounded-full"
              onClick={() => {
                downloadDoc()
              }}
            >
              Download Disclosure
              <Image
                src="/assets/images/ico-download-white.svg"
                alt="ico-download-white"
                className="ml-[20px]"
              />
            </button>
          </div>
          <div
            className={`w-full flex md:items-center mb-5 text-lg font-base ${download ? '' : 'text-gray-300'
              }`}
            onClick={() => {
              reviewDoc()
            }}
          >
            <input
              type="checkbox"
              className={`w-[32px] h-[32px] mr-[20px] form-checkbox bg-[#F7F9FC] text-[#0A2C75] border ${download ? 'border-[#181717]' : 'border-[#DDE3F0]'
                } rounded-[8px]`}
              checked={reviewStatus}
              disabled={!download}
            />
            <span
              className={`cursor-pointer text-[16px] md:text-[20px] text-[#000714] font-Lato ${download ? 'opacity-100' : 'opacity-30'
                }`}
            >
              I have downloaded and reviewed the disclosures.
            </span>
          </div>
          <div className="w-full mb-[24px]">
            {(user?.selected_plan || user?.current_plan) && (
              <TermsAndConditions
                ref={ref2}
                handleScroll={handleScroll}
                user={user}
              />
            )}
          </div>
          <div
            className={`w-full flex items-center mb-5 text-lg font-lg ${reviewStatus && readFlag ? '' : 'text-gray-300'
              }`}
            onClick={() => {
              agreeTerms()
            }}
          >
            <input
              type="checkbox"
              className={`w-[32px] h-[32px] mr-[20px] form-checkbox bg-[#F7F9FC] text-[#0A2C75] border ${reviewStatus && readFlag
                ? 'border-[#181717]'
                : 'border-[#DDE3F0]'
                } rounded-[8px]`}
              checked={agreeStatus && readFlag}
              disabled={!(reviewStatus && readFlag)}
            />
            <span
              className={`cursor-pointer text-[16px] md:text-[20px] text-[#000714] font-Lato ${reviewStatus && readFlag ? 'opacity-100' : 'opacity-30'
                }`}
            >
              I agree to the terms and conditions
            </span>
          </div>
          <div className="w-full text-base font-semibold p-[2px] mb-[24px]">
            <span className="mb-5 text-[16px] md:text-[20px] text-[#000714] font-bold font-Lato">
              State of residency
            </span>
            <StateCheckbox onChange={handleChange} />
          </div>
          <div className="w-full">
            <span className="text-[14px] md:text-[16px] text-[#434A59] p-[12px]">
              Signature
            </span>
            {signatureImage ? (
              <Image
                src={signatureImage}
                className="w-full mt-1"
                onClick={() => setvisible(true)}
                alt="signature"
              />
            ) : (
              <div
                className={'w-full p-2 box-border bg-[#DDE3F0] rounded-[12px]'}
                onClick={() => agreeStatus && setvisible(true)}
              >
                <div
                  className={`w-full max-w-[80px] px-[24px] py-[14px] rounded-[12px] text-center bg-white shadow-[0px_4px_32px_rgba(24,54,98,0.04)] ${agreeStatus ? 'cursor-pointer' : 'cursor-not-allowed'
                    }`}
                >
                  <Image
                    src="/assets/images/ico-download-blue.svg"
                    alt="ico-download-blue"
                  />
                  <span
                    className={'w-full text-center text-[16px] text-[#001F55]'}
                  >
                    Sign
                  </span>
                </div>
              </div>
            )}
            <div className="flex items-center justify-between gap-[12px] mt-[32px] md:mt-[40px]">
              <button
                className="flex-1 text-[#001F55] text-[18px] text-center font-bold border border-[#001F55] px-[24px] py-[16px] rounded-full"
                onClick={() => dispatch(choosePlanAgain())}
              >
                Cancel
              </button>
              <button
                className="flex-1 flex justify-center items-center text-white text-[18px] font-bold bg-[#00BB7A] disabled:bg-[#7ea195] px-[24px] py-[16px] rounded-full border border-[#00BB7A] disabled:border-[#7ea195]"
                onClick={uploadSignature}
                disabled={!saveAble}
              >
                Save&nbsp;&nbsp;
                <Image
                  src="/assets/images/ico-check-circle-white.svg"
                  alt="ico-check-circle-white"
                />
              </button>
            </div>
          </div>
        </div>
        {visible && (
          <Signature
            visible={visible}
            closeModal={() => setvisible(false)}
            handleSubmit={(e) => handleSubmit(e)}
          ></Signature>
        )}
      </div>
      <a
        href="storage/pdf/disclosure.pdf"
        id="docdown"
        className="hidden"
        download="disclosure.pdf"
        dangerouslySetInnerHTML={{ __html: 'foo' }}
      ></a>

      <Image
        src="/assets/images/signup-texture.png"
        alt="texture"
        className="absolute left-0 bottom-0 hidden md:block"
      />
      <Image
        src="/assets/images/ico-ellipse.svg"
        alt="ico-ellipse"
        className="absolute left-[5%] bottom-[50%] hidden md:block"
      />
      <Image
        src="/assets/images/ico-ellipse.svg"
        alt="ico-ellipse"
        className="absolute right-[5%] top-[20%] hidden md:block"
      />
    </div>
  )
}

export default SignatureWrapper
