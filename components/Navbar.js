import Link from "next/link.js"
import { useState } from "react"
import { BarResponsiveMenuSVG } from "../assets/index.js"
import { NavbarWrapper } from "./styles/NavbarWrapper.js"

export const Navbar = () => {
  const [navExpanded, setNavExpanded] = useState(false)

  const handleNavExpanded = (e) => {
    setNavExpanded((prevState) => !prevState)
  }

  return (
    <NavbarWrapper navExpanded={navExpanded}>
      <BarResponsiveMenuSVG onClick={handleNavExpanded} />
      <ul>
        <Link href="/">
          <li>About this page</li>
        </Link>
        <Link href="/All">
          <li>All Content</li>
        </Link>
        <Link href="/Contact">
          <li>Contact</li>
        </Link>
      </ul>
    </NavbarWrapper>
  )
}
