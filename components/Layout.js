import { useEffect, useState } from "react"
import { AccessibilityControls } from "./accessibility-controls/AccessibilityControls"
import { Navbar } from "./navbar/Navbar"

export const Layout = ({ children, setFontSize, setLetterSpacing, setWordSpacing, setLineHeight, setMarginIniline, setFontFamily }) => {
  const [isClientSide, setIsClientSide] = useState(false)

  useEffect(() => {
    setIsClientSide(true)
  }, [])

  if (!isClientSide) return null
  console.log("isClientSide:", isClientSide)

  return (
    <>
      <Navbar />

      <main>{children}</main>

      <AccessibilityControls
        setFontSize={setFontSize}
        setLetterSpacing={setLetterSpacing}
        setWordSpacing={setWordSpacing}
        setLineHeight={setLineHeight}
        setMarginIniline={setMarginIniline}
        setFontFamily={setFontFamily}
      />

      {/* <Footer /> */}
    </>
  )
}
