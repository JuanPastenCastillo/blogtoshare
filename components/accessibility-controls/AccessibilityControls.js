import { useEffect, useRef, useState } from "react"
import { TextPreferencesSVG } from "../../assets/icons/index.js"
import { AccessibilityControls_LetterSpacing } from './AccessibilityControls_LetterSpacing.js'
import { AccessibilityControls_TextSize } from "./AccessibilityControls_TextSize.js"
import { AccessibilityControlsWrapper } from "./styles/AccessibilityControlsWrapper.js"

const nameToCloseTheFilters = "nameToCloseTheFilters-AccessibilityControls"

export const AccessibilityControls = ({ setFontSize, setLetterSpacing }) => {
  const [show, setShow] = useState(false)
  const handleShow = () => {
    setShow((prevState) => !prevState)
  }

  const [widthParent, setWidthParent] = useState()
  const getWidthRef = useRef(null)
  const widthElementToShowAndHide = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      const width = getWidthRef.current.offsetWidth
      setWidthParent(width)
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const width = getWidthRef.current.offsetWidth
    setWidthParent(width)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (show && !event.target.closest(`.${nameToCloseTheFilters}`)) {
        setShow(false)
      }
    }

    const handleScroll = () => {
      if (show) {
        setShow(false)
      }
    }

    window.addEventListener("mousedown", handleClickOutside)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousedown", handleClickOutside)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [show])

  return (
    <AccessibilityControlsWrapper
      show={show}
      ref={getWidthRef}
      widthParent={widthParent}
      widthElementToShowAndHide={widthElementToShowAndHide.current?.clientWidth}
      className={nameToCloseTheFilters}>

      <AccessibilityControls_TextSize setFontSize={setFontSize} />

      <AccessibilityControls_LetterSpacing setLetterSpacing={setLetterSpacing}
      />

      {/* <p>Letter spacing [plus and less]</p>
      <p>Word spacing [plus and less]</p>
      <p>Line height [plus and less]</p>
      <p>Content width [plus and less] </p>
      <p>Font-style: ...</p>
      <p>Colors: light, dark, sepia (others maybe)</p> */}
      <button
        onClick={handleShow}
        ref={widthElementToShowAndHide}>
        <TextPreferencesSVG />
      </button>
    </AccessibilityControlsWrapper>
  )
}
