"use client"
import ButtonBlack from "@modules/common/components/button-black"
import newCollection from "../../../../../public/images/new-collection.png"
import Image from "next/image"

const NewCollection = () => {
  return (
    <>
      <div className="small:grid grid-cols-2 mb-12 hidden">
        <Image src={newCollection} alt="new-collection" className="h-[100%]" />
        <div className="bg-bg meduim:px-28 small:px-16 py-12 flex flex-col justify-center align-center h-[100%] gap-6">
          <div className="uppercase text-[50px] leading-tight tracking-[2.64px] max-w-[100%]">
            autumn <br /> collection '23
          </div>
          <div className="font-light text-[15px] mt-[-20px] max-w-[100%]">
            Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus,
            gravida orci, fringilla a. Ac sed eu fringilla odio mi. Consequat
            pharetra at magna imperdiet cursus ac faucibus sit libero. Ultricies
            quam nunc, lorem sit lorem urna, pretium aliquam ut. In vel, quis
            donec dolor id in. Pulvinar commodo mollis diam sed facilisis at
            magna.
          </div>
          <ButtonBlack className="max-w-[45%] w-[30%]">Show Now</ButtonBlack>
        </div>
      </div>
      <div className="small:hidden flex flex-col bg-bg py-10 px-4">
        <Image
          src={newCollection}
          alt="new-collection"
          className="h-[45vh] w-full object-fill"
        />
        <div className="bg-white p-4 flex flex-col gap-6">
          <div className="uppercase text-[18px] tracking-[0.8px] max-w-[100%]">
            autumn collection '23
          </div>
          <div className="font-light text-[15px] mt-[-20px] max-w-[100%]">
            Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus,
            gravida orci, fringilla a. Ac sed eu fringilla odio mi. Consequat
            pharetra at magna imperdiet cursus ac faucibus sit libero.
          </div>
          <ButtonBlack className="max-w-[50%] tracking-widest">Shop Now</ButtonBlack>
        </div>
      </div>
    </>
  )
}

export default NewCollection
