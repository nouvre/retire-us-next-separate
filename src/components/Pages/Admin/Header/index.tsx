import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import { signOut } from '@/store/auth/action'
import { FillButton } from '@/components/Buttons/WhiteButtons'
import { cx } from '@/util/helpers'
import { Menu, Dropdown } from 'antd'
import ChevronDown from '@2fd/ant-design-icons/lib/ChevronDown'
import Image from '@/components/common/Image'
import { useRouter } from 'next/router'

const Header: React.FC = (props: any) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const [isBlueVersion, setIsBlueVersion] = useState<boolean>(false)

  useEffect(() => {
    const onScroll = (e) => {
      const scrollTop = e.target.documentElement.scrollTop
      if (scrollTop > 40) {
        setIsBlueVersion(true)
      } else {
        setIsBlueVersion(false)
      }
    }

    window.addEventListener('scroll', onScroll)
  }, [])

  const userMenu = (
    <Menu>
      <Menu.Item>
        <Link
          href={{
            pathname: `/admin/users`,
            query: { user_type: 'registered' },
          }}
          className="no-underline"
        >
          Registered
        </Link>
      </Menu.Item>
      {/* <Menu.Item>
                <Link
                    href={{
                        pathname: `/users`,
                        query: { user_type: "onboarding" },
                    }}
                    className="no-underline"
                >
                    Onboarding
                </Link>
            </Menu.Item> */}
      <Menu.Item>
        <Link
          href={{
            pathname: `/admin/users`,
            query: { user_type: 'intro' },
          }}
          className="no-underline"
        >
          Intro
        </Link>
      </Menu.Item>
    </Menu>
  )

  return (
    <div
      className={cx(
        'fixed w-full top-0 z-[100] transition duration-300',
        isBlueVersion ? 'bg-white' : '',
      )}
      style={{
        boxShadow: isBlueVersion ? '0px 3px 5px rgba(0, 0, 0, 0.05)' : '',
      }}
    >
      <div className="w-full max-w-[1448px] px-6 py-4 h-[86px] flex justify-between items-center m-auto box-border">
        <Link href={'/'}>
          <Image src="/assets/images/logo-blue.svg" alt="Logo Blue" />
        </Link>
        <div className="h-10 flex items-center text-sm md:text-base lg:text-lg text-[#001F55] gap-10">
          <Link href={`/admin/dashboard`} className="no-underline">
            Dashboard
          </Link>
          <Dropdown overlay={userMenu}>
            <div
              className="ant-dropdown-link flex items-center gap-2"
              // onClick={(e) => e.preventDefault()}
            >
              Users <ChevronDown />
            </div>
          </Dropdown>
          <Link href={`/admin/stripe`} className="no-underline">
            Plan settings
          </Link>
          <Link href={`/admin/data-collection`} className="no-underline">
            Data Collection
          </Link>
        </div>
        <FillButton
          onClick={() => dispatch(signOut())}
          className="w-max py-2 md:py-3 lg:py-4 px-6"
          blue
        >
          <div className="flex items-center gap-4">
            Logout<span>&#183;&#183;</span>
          </div>
        </FillButton>
      </div>
    </div>
  )
}

export default Header
