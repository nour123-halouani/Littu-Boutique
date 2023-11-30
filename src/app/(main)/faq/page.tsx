"use client"
import { Metadata } from "next"
import Image from "next/image"
import faq from "../../../../public/images/faq.png"
import Link from "next/link"
import LogoFacebook from "@modules/common/icons/facebook"
import LogoInstagram from "@modules/common/icons/instagram"
import Input from "@modules/common/components/input"
import ButtonBlack from "@modules/common/components/button-black"
import { useState } from "react"
import Close from "@modules/common/icons/close"
import Open from "@modules/common/icons/open"

export const metadata: Metadata = {
  title: "list",
  description: "Explore all of our products.",
}

export default function Faq() {
  const onSubmit = () => {}
  const questions = [
    {
      label: "Otázka #01",
      component: (
        <p>
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec
          nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit
          amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices
          nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate
          sem tristique cursus.
        </p>
      ),
    },
    {
      label: "Otázka #02",
      component: (
        <p>
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec
          nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit
          amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices
          nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate
          sem tristique cursus.
        </p>
      ),
    },
    {
      label: "Otázka #03",
      component: (
        <p>
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec
          nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit
          amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices
          nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate
          sem tristique cursus.
        </p>
      ),
    },
    {
      label: "Otázka #04",
      component: (
        <p>
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec
          nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit
          amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices
          nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate
          sem tristique cursus.
        </p>
      ),
    },
    {
      label: "Otázka #05",
      component: (
        <p>
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec
          nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit
          amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices
          nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate
          sem tristique cursus.
        </p>
      ),
    },
    {
      label: "Otázka #06",
      component: (
        <p>
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec
          nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit
          amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices
          nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate
          sem tristique cursus.
        </p>
      ),
    },
    {
      label: "Otázka #07",
      component: (
        <p>
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec
          nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit
          amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices
          nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate
          sem tristique cursus.
        </p>
      ),
    },
    {
        label: "Otázka #08",
        component: (
          <p>
            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
            Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec
            nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit
            amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices
            nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate
            sem tristique cursus.
          </p>
        ),
      },{
        label: "Otázka #09",
        component: (
          <p>
            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
            Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec
            nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit
            amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices
            nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate
            sem tristique cursus.
          </p>
        ),
      },
      {
        label: "Otázka #10",
        component: (
          <p>
            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
            Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec
            nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit
            amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices
            nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate
            sem tristique cursus.
          </p>
        ),
      },
  ]

  const [open, setOpen] = useState(Array(questions.length).fill(false))

  const handleClick = (index: number) => {
    const updatedOpen = [...open]
    updatedOpen[index] = !updatedOpen[index]
    setOpen(updatedOpen)
  }
  return (
    <div className="border-b-[1px] border-gray-200 mb-14">
      <div className="relative mt-[60px] small:mt-[0px] ">
        <Image
          src={faq}
          alt="slide"
          priority
          className="small:max-h-[500px] w-[100vw] small:h-[80vh] h-[40vh] object-fill"
        />
        <div className="absolute inset-0">
          <div className="flex text-white items-center justify-center text-[40px] h-full tracking-[3.28px] uppercase small:text-[60px]">
            FAQ
          </div>
        </div>
      </div>
      <div className="my-20 small:content-container content-container-mobile medium:content-container grid small:grid-cols-12 grid-cols-1 gap-8">
        <div className="small:col-span-8">
          <div className="uppercase text-[25px] tracking-wider font-normal">
            Frequently asked questions
          </div>
          <p className="font-light mt-3 text-[14px]">
            Malesuada nunc vel risus commodo viverra. Viverra accumsan in nisl
            nisi. Pretium nibh ipsum consequat nisl vel pr eti um. Tortor
            dignissim convallis aenean et tortor at risus viverra adipiscing.{" "}
          </p>
          <div className="w-full mt-8">
            <ul className="divide-y border-b w-full">
              {questions.map((question, index) => (
                <li key={index} className="cursor-pointer">
                  <div
                    className="flex flex-row gap-2 justify-between items-center py-3"
                    onClick={() => handleClick(index)}
                  >
                    <div
                      className={`font-medium text-[15px] tracking-[0.9px] ${
                        open[index] && "text-theme"
                      }`}
                    >
                      {question.label}
                    </div>
                    {open[index] ? <Close /> : <Open />}
                  </div>
                  {open[index] && (
                    <div className="text-[14px] font-light py-3">
                      {question.component}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="small:col-span-4">
          <div className="uppercase text-[25px] tracking-wider font-normal">
            have a question ?
          </div>
          <p className="font-light mt-3 text-[14px]">
            Zavolajte nám na
            <span className="text-theme cursor-pointer hover:underline">+421 900 123 456 </span>alebo nám
            napíšte správu na <span className="text-theme cursor-pointer hover:underline">info@littu.sk </span>
            .
          </p>
          <form className="w-full mt-3" onSubmit={onSubmit}>
            <div className="flex flex-col gap-4">
              <div>
                <label className="font-light text-[14px]">Your name *</label>
                <Input label="name" name="" />
              </div>
              <div>
                <label className="font-light text-[14px]">You e-mail *</label>
                <Input label="mail" name="" />
              </div>
              <div>
                <label className="font-light text-[14px]">Your message *</label>
                <textarea
                  name="message"
                  className="px-2 max-h-[135px] min-h-[135px] py-2.5 block w-full mt-0 bg-transparent font-light border appearance-none focus:outline-none focus:ring-0 focus:border-theme border-theme-dark"
                />
              </div>
              <ButtonBlack className="uxsmall:mt-3 w-[35%]">Submit</ButtonBlack>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
