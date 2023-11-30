import LogoFacebook from "@modules/common/icons/facebook"
import LogoInstagram from "@modules/common/icons/instagram"
import Link from "next/link"

const FooterMenu = () => {
  return (
    <div className="flex flex-col w-full items-center fixed bg-white bottom-0 h-20 mt-8 gap-2">
      
      <div className="flex flex-row items-center gap-5">
        <Link href="/fb">
          <LogoFacebook />
        </Link>
        <Link href="/insta">
          <LogoInstagram />
        </Link>
      </div>
      <div className="w-full py-2 text-[14px] text-center" style={{fontFamily:'sans-serif !important'}}>
        2023 littu boutique
      </div>
    </div>
  )
}

export default FooterMenu
