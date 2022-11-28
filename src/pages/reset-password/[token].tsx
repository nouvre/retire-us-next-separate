import React from 'react'
import { Form, Input, Button } from 'antd'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { resetPassword } from '@/store/auth/action'
import Header from '@/components/Pages/Header'
import { Toast } from '@/components/common/notification'
import { useRouter } from 'next/router'

interface FormData {
  password: string
  password_confirmation: string
}

const ResetPassword: React.FC = (props: any) => {
  const router = useRouter()
  const { token } = router.query
  const [form] = Form.useForm()
  const dispatch = useDispatch()

  const handleSubmit = (): void => {
    if (token) {
      form.validateFields().then((data: FormData) => {
        dispatch(resetPassword({ ...data, token: token }))
      })
    } else {
      Toast('', 'Something went wrong please check the email again', 'danger')
    }
  }

  return (
    <>
      <Header opacity={false} />
      <div className="auth_container bg-[#F3F5F9]">
        <div
          className="form_container bg-white top-[50px] absolute lg:mt-[144px] md:mt-[132px] rounded-none shadow-none"
          style={{ boxShadow: 'none' }}
        >
          <div className="title">Reset your password</div>
          <Form form={form} layout={'vertical'} requiredMark={false}>
            <Form.Item
              name={'password'}
              label={'Password'}
              rules={[
                {
                  required: true,
                  message: 'Password is required.',
                },
              ]}
            >
              <Input placeholder={'Enter password'} type={'password'} />
            </Form.Item>
            <Form.Item
              name={'password_confirmation'}
              label={'Confirm Password'}
              rules={[
                {
                  required: true,
                  message: 'The two passwords that you entered do not match!',
                },
                ({ getFieldValue }: any) => ({
                  validator(_: any, value: any) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject(
                      new Error(
                        'The two passwords that you entered do not match!',
                      ),
                    )
                  },
                }),
              ]}
            >
              <Input placeholder={'Confirm password'} type={'password'} />
            </Form.Item>
            <Form.Item>
              <Button
                type={'primary'}
                className={'w-100 btn-signin'}
                onClick={() => {
                  handleSubmit()
                }}
              >
                Reset password
              </Button>
            </Form.Item>
            <div className="flex justify-end">
              <Link className={'forgot-pass'} href="/signin">
                Login
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}
export default ResetPassword
