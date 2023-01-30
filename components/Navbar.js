import Link from "next/link.js"
import { useRouter } from "next/router.js"
import { useState } from "react"
import { BarResponsiveMenuSVG } from "../assets/icons/index.js"
import { NavbarWrapper } from "./styles/NavbarWrapper.js"

export const Navbar = () => {
  const [navExpanded, setNavExpanded] = useState(false)

  const handleNavExpanded = (e) => {
    setNavExpanded((prevState) => !prevState)
  }
  
  const router = useRouter()
  const {pathname} = router

  return (
    <NavbarWrapper navExpanded={navExpanded}>
      <BarResponsiveMenuSVG onClick={handleNavExpanded} />
      <ul>
        <li className={pathname === "/" ? "active" : null}>
          <Link href="/"> About this page</Link>
        </li>
        <li className={pathname === "/All" ? "active" : null}>
          <Link href="/All">All Content</Link>
        </li>
        <li className={pathname === "/Contact" ? "active" : null}>
          <Link href="/Contact">Contact</Link>
        </li>
      </ul>
    </NavbarWrapper>
  )
}
