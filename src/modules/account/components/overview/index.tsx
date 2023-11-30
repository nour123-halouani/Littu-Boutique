import { Customer, Order } from "@medusajs/medusa"
import ChevronDown from "@modules/common/icons/chevron-down"
import Open from "@modules/common/icons/open"
import { formatAmount } from "medusa-react"
import Link from "next/link"

type OverviewProps = {
  orders?: Order[]
  customer?: Omit<Customer, "password_hash">
}

const Overview = ({ orders, customer }: OverviewProps) => {
  return (
    <div>
      <div className="small:hidden px-5">
        <div className="text-[25px] font-medium uppercase mb-9">
          Hello {customer?.first_name}
        </div>
        <ul>
          <li>
            <Link
              href="/account/profile"
              className="flex items-center justify-between py-4 border-b border-gray-200"
            >
              <span className="font-medium text-[14px] uppercase tracking-[0.9px]">
                Profile
              </span>
              <Open />
            </Link>
          </li>
          <li>
            <Link
              href="/account/addresses"
              className="flex items-center justify-between border-b border-gray-200 py-4"
            >
              <span className="font-medium text-[14px] uppercase tracking-[0.9px]">
                Addresses
              </span>
              <Open />
            </Link>
          </li>
          <li>
            <Link
              href="/account/orders"
              className="flex items-center justify-between py-4"
            >
              <span className="font-medium text-[14px] uppercase tracking-[0.9px]">
                Orders
              </span>
              <Open />
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden small:block">
        <div className="text-[25px] font-medium uppercase grid pb-4 border-b border-gray-200">
          <span>Hello {customer?.first_name}</span>
          <span className="text-small-regular text-gray-700">
            Signed in as:{" "}
            <span className="font-semibold">{customer?.email}</span>
          </span>
        </div>
        <div className="flex flex-col py-8 ">
          <div className="flex flex-col gap-y-4 h-full col-span-1 row-span-2 flex-1">
            <div className="flex items-start gap-x-16 mb-6">
              <div className="flex flex-col gap-y-4">
                <h3 className="text-large-semi uppercase">Profile</h3>
                <div className="flex items-end gap-x-2">
                  <span className="text-3xl-semi tracking-[0.72px] leading-none">
                    {getProfileCompletion(customer)}%
                  </span>
                  <span className="uppercase text-base-regular text-gray-500">
                    Completed
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-y-4">
                <h3 className="text-large-semi uppercase">Addresses</h3>
                <div className="flex items-end gap-x-2">
                  <span className="text-3xl-semi leading-none">
                    {customer?.shipping_addresses?.length || 0}
                  </span>
                  <span className="uppercase text-base-regular text-gray-500">
                    Saved
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-y-4">
              <h3 className="text-large-semi uppercase mt-3">Recent orders</h3>
              <ul className="flex flex-col gap-y-4">
                {orders ? (
                  orders.slice(0, 5).map((order) => {
                    return (
                      <li key={order.id}>
                        <Link href={`/order/details/${order.id}`}>
                          <div className="bg-theme-light flex justify-between items-center p-4">
                            <div className="grid grid-cols-3 grid-rows-2 text-small-regular gap-x-4 flex-1">
                              <span className="uppercase font-medium">Date placed</span>
                              <span className="uppercase font-medium">
                                Order number
                              </span>
                              <span className="uppercase font-medium">
                                Total amount
                              </span>
                              <span>
                                {new Date(order.created_at).toDateString()}
                              </span>
                              <span>#{order.display_id}</span>
                              <span>
                                {formatAmount({
                                  amount: order.total,
                                  region: order.region,
                                  includeTaxes: false,
                                })}
                              </span>
                            </div>
                            <button
                              className="flex items-center justify-between"
                              onClick={close}
                            >
                              <span className="sr-only">
                                Go to order #{order.display_id}
                              </span>
                              <ChevronDown className="-rotate-90" />
                            </button>
                          </div>
                        </Link>
                      </li>
                    )
                  })
                ) : (
                  <span>No recent orders</span>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const getProfileCompletion = (customer?: Omit<Customer, "password_hash">) => {
  let count = 0

  if (!customer) {
    return 0
  }

  if (customer.email) {
    count++
  }

  if (customer.first_name && customer.last_name) {
    count++
  }

  if (customer.phone) {
    count++
  }

  if (customer.billing_address) {
    count++
  }

  return (count / 4) * 100
}

export default Overview
