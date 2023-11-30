import OrderOverview from "../components/order-overview"

const OrdersTemplate = () => {
  return (
    <div className="w-full small:px-0 px-2">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="small:text-[27px] text-[22px] uppercase font-medium tracking-wider">Orders</h1>
        <p className="font-light text-[12px] small:text-[14px]">
          View your previous orders and their status. You can also create
          returns or exchanges for your orders if needed.
        </p>
      </div>
      <div>
        <OrderOverview />
      </div>
    </div>
  )
}

export default OrdersTemplate
