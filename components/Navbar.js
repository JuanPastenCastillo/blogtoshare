import Link from "next/link.js"
import { useRouter } from "next/router.js"
import { useEffect, useState } from "react"
import { BarResponsiveMenuSVG } from "../assets/icons/index.js"
import { NavbarWrapper } from "./styles/NavbarWrapper.js"

export const Navbar = () => {
  const [navExpanded, setNavExpanded] = useState(false)

  const handleNavExpanded = (e) => {
    setNavExpanded((prevState) => !prevState)
  }

  const router = useRouter()
  const { pathname } = router

  const checkPathnameAll = /[All]\/\w|[All]/.test(pathname) ? "active" : null

  const [prevScrollY, setPrevScrollY] = useState(0)
  const [mustShow, setMustShow] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > prevScrollY && prevScrollY >= 46) {
        setMustShow(false)
      } else {
        setMustShow(true)
      }

      setPrevScrollY(currentScrollY)
    }

    // attach scroll event listener
    window.addEventListener("scroll", handleScroll)

    // remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [prevScrollY])


  return (
    <NavbarWrapper
      navExpanded={navExpanded}
      mustShow={mustShow}
      className={mustShow ? "mustShow" : "mustHide"}
      shouldSticky={prevScrollY < 51 && "shouldSticky"}
    >
      <BarResponsiveMenuSVG onClick={handleNavExpanded} />
      <ul>
        <li className={pathname === "/" ? "active" : null}>
          <Link href="/"> About this page</Link>
        </li>
        <li className={checkPathnameAll}>
          <Link href="/All">All Content</Link>
        </li>
        <li className={pathname === "/Contact" ? "active" : null}>
          <Link href="/Contact">Contact</Link>
        </li>
      </ul>
    </NavbarWrapper>
  )
}
