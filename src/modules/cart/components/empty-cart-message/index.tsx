// import UnderlineLink from "@modules/common/components/underline-link"

const EmptyCartMessage = () => {
  return (
    <div className="bg-theme-light px-8 py-24 flex flex-col justify-center items-center text-center">
      <h1 className="font-normal text-4xl uppercase">Your shopping bag is empty</h1>
      <p className="font-light text-[14px] mt-4 mb-6 max-w-[32rem]">
        You don&apos;t have anything in your bag. Let&apos;s change that, use
        the link below to start browsing our products.
      </p>
      <div>
        {/* <UnderlineLink href="/store">Explore products</UnderlineLink> */}
      </div>
    </div>
  )
}

export default EmptyCartMessage
