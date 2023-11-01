import Newsletter from "@modules/common/components/newsletter"
import BestSellers from "@modules/home/components/best-sellers"
import Categories from "@modules/home/components/categories"
import Hero from "@modules/home/components/hero"
import NewArrivals from "@modules/home/components/new-arrivals"
import NewArrivalsMobile from "@modules/home/components/new-arrivals-mobile"
import NewCollection from "@modules/home/components/new-collection"
import Services from "@modules/home/components/services"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description: "Home",
}

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <NewArrivals />
      <NewArrivalsMobile />
      <BestSellers />
      <NewCollection />
      <Services />
      <Newsletter />
    </>
  )
}

export default Home
