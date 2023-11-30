import Rating from "@modules/common/components/star-rating"
import Image from "next/image"
import Input from "@modules/common/components/input"
import { useState } from "react"
import "../../../../styles/common/customCheckbox.css"
import ButtonBlack from "@modules/common/components/button-black"

export const ReviewSection = ({ reviews }: any) => {
  const onSubmit = () => {}
  const [agree, setAgree] = useState(false)

  const handleAgreeCheckboxChange = () => {
    setAgree(!agree)
  }

  return (
    <>
      <div className="grid uxsmall:grid-cols-2 gap-8 text-[14px]">
        {reviews.map((review: any) => (
          <div key={review.id} className="grid grid-cols-12 gap-3">
            <Image
              src={review.imgSrc}
              alt={review.name}
              className="col-span-4 xsmall:col-span-3 h-[100px] w-[100px]"
            />
            <div className="col-span-8 uxsmall:col-span-9">
              <Rating rat={review.rating} readOnly={true} />
              <div className="inline-block">
                <span className="uppercase font-normal tracking-[0.72px] text-typography">
                  {review.name}
                </span>
                <span className="tracking-[0.16px]"> - {review.date}</span>
              </div>
              <p className="tracking-[0.16px]">{review.content}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="mt-10 mb-3 text-[22px] font-normal uppercase tracking-wide">
        Add a review
      </h2>
      <p className="tracking-[0.16px] text-typography">
        Your email address will not be published. Required fields are marked *
      </p>
      <form
        className="w-full mt-3 grid uxsmall:grid-cols-2 gap-x-10 gap-y-5"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-5">
          <div>
            <label className="">Your rating *</label>
            <Rating />
          </div>
          <div>
            <label>Your review *</label>
            <textarea
              name="review"
              className="px-2 max-h-[135px] min-h-[135px] py-2.5 block w-full mt-0 bg-transparent font-light border appearance-none focus:outline-none focus:ring-0 focus:border-theme border-theme-dark"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <label className="">Your name *</label>
            <Input label="Name" name="" />
          </div>
          <div>
            <label className="">Your email *</label>
            <Input label="Email" name="" />
          </div>
          <label className="inline-flex items-center mt-4 container">
            <span className="text-theme-dark font-light tracking-[0.18px] text-[13px] xsmall:text-[15px] mt-[-2.5px] xsmall:mt-[-2px]">
              Save my name, email, and website in this browser for the next
              time.
            </span>
            <input
              type="checkbox"
              checked={agree}
              onChange={handleAgreeCheckboxChange}
            />
            <span className="checkmark"></span>
          </label>
          <ButtonBlack className="uxsmall:mt-6 w-[50%]">Submit</ButtonBlack>
        </div>
      </form>
    </>
  )
}
