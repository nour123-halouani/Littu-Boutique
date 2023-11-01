import React from "react"

const Newsletter = () => {
  return (
    <>
      <div className="small:flex flex-col hidden gap-6 mb-32 my-32 small:content-container-tablet medium:content-container justify-center">
        <div className="text-center text-[28px] uppercase tracking-wider w-[100%]">
          Sign up for newsletter
        </div>
        <div className="flex flex-row w-[65%] self-center">
          <input
            name="email"
            placeholder="Your email address"
            className="p-4 block mt-0 bg-transparent font-light border appearance-none 
          focus:outline-none focus:ring-0 focus:border-theme border-bg-dark w-[75%]"
          />
          <button
            className="uppercase bg-black text-bg-light flex items-center justify-center w-[25%]
        disabled:opacity-50 font-semibold tracking-[2px]"
          >
            Sign up
          </button>
        </div>
      </div>
      <div className="small:hidden flex-col flex gap-6 mb-16 py-16 justify-center bg-bg px-4 mt-[-35px]">
        <div className="text-center text-[22px] uppercase tracking-wider w-[100%]">
          Sign up for newsletter
        </div>
        <div className="flex flex-col gap-3 w-full ">
          <input
            name="email"
            placeholder="Your email address"
            className="p-4 block mt-0 bg-white font-light border appearance-none 
          focus:outline-none focus:ring-0 focus:border-theme border-bg-dark"
          />
          <button
            className="uppercase bg-black text-bg-light flex items-center justify-center
        disabled:opacity-50 font-semibold tracking-[2px] py-3"
          >
            Sign up
          </button>
        </div>
      </div>
    </>
  )
}

export default Newsletter
