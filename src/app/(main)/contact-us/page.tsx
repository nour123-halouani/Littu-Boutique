"use client"
import { Metadata } from "next"
import Image from "next/image"
import sliderOne from "../../../../public/images/hero_slider_two.png"
import Link from "next/link"
import LogoFacebook from "@modules/common/icons/facebook"
import LogoInstagram from "@modules/common/icons/instagram"
import Input from "@modules/common/components/input"
import ButtonBlack from "@modules/common/components/button-black"

export const metadata: Metadata = {
  title: "list",
  description: "Explore all of our products.",
}

export default function ContactUs() {
  const onSubmit = () => {}
  return (
    <div className="border-b-[1px] border-gray-200 mb-14">
      <div className="relative mt-[60px] small:mt-[0px]">
        <Image
          src={sliderOne}
          alt="slide"
          priority
          className="small:max-h-[500px] w-[100vw] small:h-[80vh] h-[40vh] object-fill"
        />
        <div className="absolute inset-0">
          <div className="flex text-white items-center justify-center text-[40px] h-full tracking-[3.28px] uppercase small:text-[60px]">
            contact
          </div>
        </div>
      </div>
      <div className="my-20 small:content-container content-container-mobile medium:content-container grid small:grid-cols-2 grid-cols-1 gap-4">
        <div>
          <div className="uppercase text-[25px] tracking-wider font-normal">
            Contact details
          </div>
          <p className="font-light mt-3 text-[14px]">
            Tortor dignissim convallis aenean et tortor at risus viverra
            adipiscing.
          </p>
          <div className="grid small:grid-cols-2 grid-cols-1 gap-5 mt-5">
            <div>
              <p className="uppercase tracking-widest mb-2 text-[14px] font-medium">
                Office
              </p>
              <p className="font-light text-[14px]">
                Adresa Vymyslená 123/45 <br />
                Mesto,123 45 <br />
                Slovensko <br />
                +421 900 123 456 <br />
                info@littu.sk
              </p>
            </div>
            <div>
              <p className="uppercase tracking-widest mb-2 text-[14px] font-medium">
                billing details
              </p>
              <p className="font-light text-[14px]">
                Adresa Vymyslená 123/45 <br />
                Mesto,123 45 <br />
                Slovensko <br />
                +421 900 123 456 <br />
                info@littu.sk
              </p>
            </div>
            <div>
              <p className="uppercase tracking-widest mb-2 text-[14px] font-medium">
                social
              </p>
              <div className="flex flex-row gap-6 items-center">
                <Link href="/fb">
                  <LogoFacebook size={9} />
                </Link>
                <Link href="/insta">
                  <LogoInstagram size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="uppercase text-[25px] tracking-wider font-normal">
            have a question ?
          </div>
          <p className="font-light mt-3 text-[14px]">
            Use the form below to get in touch with us.
          </p>
          <form className="w-full gap-x-10 gap-y-5 mt-3" onSubmit={onSubmit}>
            <div className="flex flex-col gap-5">
              <div className="grid small:grid-cols-2 grid-cols-1 gap-5">
                <div>
                  <label className="font-light text-[14px]">Your name *</label>
                  <Input label="Name" name="" />
                </div>
                <div>
                  <label className="font-light text-[14px]">Your email *</label>
                  <Input label="Email" name="" />
                </div>
              </div>
              <div className="grid small:grid-cols-2 grid-cols-1 gap-5">
                <div>
                  <label className="font-light text-[14px]">Phone</label>
                  <Input label="Phone" name="" />
                </div>
                <div>
                  <label className="font-light text-[14px]">Subject</label>
                  <Input label="Subject" name="" />
                </div>
              </div>
              <div>
                <label className="font-light text-[14px]">Your message *</label>
                <textarea
                  name="message"
                  className="px-2 max-h-[135px] min-h-[135px] py-2.5 block w-full mt-0 bg-transparent font-light border appearance-none focus:outline-none focus:ring-0 focus:border-theme border-theme-dark"
                />
              </div>
              <ButtonBlack className="uxsmall:mt-3 w-[30%]">Submit</ButtonBlack>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
