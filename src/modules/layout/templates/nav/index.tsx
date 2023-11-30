"use client"
import { useMobileMenu } from "@lib/context/mobile-menu-context"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import DropdownMenu from "@modules/layout/components/dropdown-menu"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import User from "@modules/common/icons/user"
import AccountLogo from "@modules/common/icons/logo"
import Search from "@modules/common/icons/search"
import X from "@modules/common/icons/x"
import MenuIcon from "@modules/common/icons/menu-icon"

const Nav = () => {
  const pathname = usePathname()
  const [isHome, setIsHome] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(true)
  const [isPathSlide, setIsPathSlide] = useState(false)

  useEffect(() => {
    let pathSlide: string = pathname
    pathname.startsWith("/products-list") ||
    pathSlide === "/contact-us" ||
    pathSlide === "/faq"
      ? setIsPathSlide(true)
      : setIsPathSlide(false)
    pathname === "/" ? setIsHome(true) : setIsHome(false)
  }, [pathname])

  useEffect(() => {
    if (isHome || isPathSlide) {
      const detectScrollY = () => {
        if (window.scrollY > 5) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }

      window.addEventListener("scroll", detectScrollY)
      return () => {
        window.removeEventListener("scroll", detectScrollY)
      }
    }
  }, [isHome, isPathSlide])

  const { toggle } = useMobileMenu()

  useEffect(() => {
    setMenuOpen(!menuOpen)
  }, [toggle])

  const storedArrayString = localStorage.getItem("wishlist")
  let storedArray = JSON.parse(storedArrayString ? storedArrayString : "")
  const arrayLength = storedArray.length

  return (
    <div
      className={clsx("sticky top-0 inset-x-0 z-50 group", {
        "!fixed": isHome || isPathSlide,
      })}
    >
      <header
        className={`relative h-[60px] small:px-8 px-3 py-1 mx-auto transition-colors duration-200 small:group-hover:bg-white small:group-hover:border-gray-200 
          ${
            (isHome && !isScrolled) || (isPathSlide && !isScrolled)
              ? "bg-transparent border-gray-200 border-opacity-20 border-b-[1px]"
              : "bg-white border-b-[1px] border-gray-200"
          }
          `}
      >
        <nav
          className={`text-gray-900 small:grid small:grid-cols-3 small:gap-4 flex items-center justify-between w-full h-full text-small-regular transition-colors duration-200 font-extralight hover:font-normal
          ${
            (isHome && !isScrolled) || (isPathSlide && !isScrolled)
              ? "text-white group-hover:text-gray-900 font-light"
              : "font-normal"
          } 
            `}
        >
          <div>
            <Link href="/">
              <AccountLogo size={60} />
            </Link>
          </div>

          <div className="hidden small:flex justify-center gap-9">
            <Link
              href="/"
              className="uppercase hover:underline tracking-[1.4px]"
            >
              Home
            </Link>
            <div className="hover:underline tracking-[1.4px]">
              <DropdownMenu menuItem="Women" subItem={testList} />
            </div>

            <div className="hover:underline tracking-[1.4px]">
              <DropdownMenu menuItem="Men" subItem={testList} />
            </div>

            <div className="hover:underline tracking-[1.4px]">
              <DropdownMenu menuItem="Kids" subItem={testList} />
            </div>
            <div className="uppercase hover:underline tracking-[1.4px]">
              <Link
                href="/contact-us"
                className="uppercase hover:underline tracking-[1.4px]"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden small:flex justify-end gap-[10px] medium:gap-7">
            <Link
              href="/wishlist"
              className="uppercase tracking-[1.4px] cursor-pointer"
            >
              Wishlist ({arrayLength})
            </Link>
            <div>
              <CartDropdown />
            </div>
            <div className="flex gap-[5px] medium:gap-3">
              <Link href="/account">
                <User />
              </Link>
              <DesktopSearchModal />
            </div>
          </div>
          <div className="small:hidden">
            <div className="flex flex-row gap-3 items-center">
              <Search size={35} color="black" />
              <Link href="/account">
                <User size={35} color="black" />
              </Link>
              {!menuOpen ? (
                <MenuIcon color="black" onClick={toggle} />
              ) : (
                <X size={18} onClick={toggle} />
              )}
            </div>
            {/* <div className="hidden small:block h-full"></div> */}
          </div>
        </nav>
        <MobileMenu />
      </header>
    </div>
  )
}

export default Nav

const testList = [
  {
    cat: "category #01",
    subsubCat: ["Subcategory Name", "Subcategory Name"],
  },
  {
    cat: "category #02",
    subsubCat: ["Subcategory Name", "Subcategory Name", "Subcategory Name"],
  },
  {
    cat: "category #03",
    subsubCat: [
      "Subcategory Name",
      "Subcategory Name",
      "Subcategory Name",
      "Subcategory Name",
      "Subcategory Name",
    ],
  },
  {
    cat: "category #04",
    subsubCat: [
      "Subcategory Name",
      "Subcategory Name",
      "Subcategory Name",
      "Subcategory Name",
      "Subcategory Name",
    ],
  },
]
