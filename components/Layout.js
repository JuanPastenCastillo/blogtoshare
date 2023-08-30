import { Footer } from "./Footer"
import { Navbar } from "./Navbar"
import { AccessibilityControls } from "./accessibility-controls/AccessibilityControls"

export const Layout = ({ children, setFontSize, setLetterSpacing, setWordSpacing }) => {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <AccessibilityControls
        setFontSize={setFontSize}
        setLetterSpacing={setLetterSpacing}
        setWordSpacing={setWordSpacing}

      />

      <Footer />
    </>
  )
}
