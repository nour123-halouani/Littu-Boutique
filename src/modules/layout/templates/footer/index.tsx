import FooterCopyright from "@modules/layout/components/footer-copyright"
import FooterNav from "@modules/layout/components/footer-nav"
import Instafeed from "@modules/layout/components/insta-feed"

const Footer = () => {
  return (
    <footer>
      <Instafeed />
      <FooterNav />
      <FooterCopyright />
    </footer>
  )
}

export default Footer
