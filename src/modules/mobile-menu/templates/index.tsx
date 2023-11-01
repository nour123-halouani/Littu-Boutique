import CategoriesList from "../components/categories-list"
import Container from "../components/container"
import FooterMenu from "../components/footer-menu"

const MobileMenu = () => {
  return (
    <Container>
      <CategoriesList />
      <FooterMenu />
    </Container>
  )
}

export default MobileMenu
