"use client"
import Link from "next/link"
import AccountLogo from "@modules/common/icons/logo"
import LogoFacebook from "@modules/common/icons/facebook"
import LogoInstagram from "@modules/common/icons/instagram"

const FooterNav = () => {
  return (
    <div className="small:content-container-tablet medium:content-container content-container-mobile flex flex-col gap-y-8 py-16">
      <div className="grid xsmall:grid-cols-2 small:grid-cols-4 grid-cols-1 gap-x-7 gap-y-5">
        <div className="flex flex-col gap-4">
          <div>
            <AccountLogo size={50} />
          </div>
          <div className="text-theme-dark medium:text-[14.5px] small:text-[12.5px] text-[14.5px] font-light">
            Gravida massa volutpat aenean odio. Amet, turpis erat nullam
            fringilla elementum diam in. Nisi, purus vitae, ultrices nunc. Sit
            ac sit suscipit hendrerit.
          </div>
          <div className="flex flex-row items-center gap-5">
            <Link href="/fb">
              <LogoFacebook />
            </Link>
            <Link href="/insta">
              <LogoInstagram />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-theme-dark font-normal small:text-[16.5px] text-[19px] tracking-[0.4px] uppercase small:mt-3">
            Quick links
          </div>
          <div className=" text-[12px] flex flex-col">
            <Link
              href="/"
              className="uppercase hover:underline tracking-[0.8px]"
            >
              Home
            </Link>
            <Link
              href="/"
              className="uppercase hover:underline tracking-[0.8px]"
            >
              Women
            </Link>
            <Link
              href="/"
              className="uppercase hover:underline tracking-[0.8px]"
            >
              Men
            </Link>
            <Link
              href="/"
              className="uppercase hover:underline tracking-[0.8px]"
            >
              Home
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-theme-dark font-normal small:text-[16.5px] text-[19px] tracking-[0.4px] uppercase mt-3">
            Help & info
          </div>
          <div className=" text-[12px] flex flex-col">
            <Link
              href="/"
              className="uppercase hover:underline tracking-[0.8px]"
            >
              F.A.Q
            </Link>
            <Link
              href="/"
              className="uppercase hover:underline tracking-[0.8px]"
            >
              terms and conditions
            </Link>
            <Link
              href="/"
              className="uppercase hover:underline tracking-[0.8px]"
            >
              privacy policy
            </Link>
            <Link
              href="/"
              className="uppercase hover:underline tracking-[0.8px]"
            >
              contact
            </Link>
            <Link
              href="/"
              className="uppercase hover:underline tracking-[0.8px]"
            >
              about littu
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-theme-dark font-normal small:text-[16.5px] text-[19px] tracking-[0.4px] uppercase small:mt-3">
            contact us
          </div>
          <div className="font-light small:flex flex-col gap-2 hidden">
            <div className="text-theme-dark font-light xsmall:text-[14px] flex flex-col">
              <span> Any questions?</span>
              <span> Feel free to contact us at</span>
              <Link
                href="/account/login"
                className="hover:underline font-normal"
              >
                info@littu.sk
              </Link>
            </div>
            <div className="text-theme-dark font-light xsmall:text-[14px] flex flex-col">
              <span> Or call us at</span>
              <Link
                href="/account/login"
                className="hover:underline font-normal"
              >
                +421 948 808 666
              </Link>
            </div>
          </div>
          <div className="font-light small:hidden flex-col gap-2 flex">
            <div className="text-theme-dark flex flex-col font-light text-[14px]">
              <span> Do you have any questions or suggestions?</span>
              <Link
                href="/account/login"
                className="hover:underline font-normal ml-1"
              >
                info@littu.sk
              </Link>
            </div>
            <div className="text-theme-dark flex flex-col font-light text-[14px]">
              <span> Do you need support? Give us a call</span>
              <Link
                href="/account/login"
                className="hover:underline font-normal ml-1"
              >
                +421 948 808 666
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterNav
