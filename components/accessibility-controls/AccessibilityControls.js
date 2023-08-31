import { useEffect, useRef, useState } from "react"
import { TextPreferencesSVG } from "../../assets/icons/index.js"
import { useOutsideHide } from "../../utils/useOutsideHide.js"
import { AccessibilityControls_FontFamily } from "./AccessibilityControls_FontFamily.js"
import { AccessibilityControls_LetterSpacing } from "./AccessibilityControls_LetterSpacing.js"
import { AccessibilityControls_LineHeight } from "./AccessibilityControls_LineHeight.js"
import { AccessibilityControls_MarginInline } from "./AccessibilityControls_MarginInline.js"
import { AccessibilityControls_TextSize } from "./AccessibilityControls_TextSize.js"
import { AccessibilityControls_WordSpacing } from "./AccessibilityControls_WordSpacing.js"
import { AccessibilityControlsWrapper } from "./styles/AccessibilityControlsWrapper.js"

const nameToCloseTheFilters = "nameToCloseTheFilters-AccessibilityControls"

export const AccessibilityControls = ({ setFontSize, setLetterSpacing, setWordSpacing, setLineHeight, setMarginIniline, setFontFamily }) => {
  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow((prevState) => !prevState)
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.shiftKey && event.key.toLowerCase() === 'a' || event.key === 'F1') {
        handleShow()
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };



  }, [])

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

  useOutsideHide(getWidthRef, setShow)

  return (
    <AccessibilityControlsWrapper
      show={show}
      ref={getWidthRef}
      widthParent={widthParent}
      widthElementToShowAndHide={widthElementToShowAndHide.current?.clientWidth}
      className={nameToCloseTheFilters}>
      <AccessibilityControls_TextSize setFontSize={setFontSize} />

      <AccessibilityControls_LetterSpacing setLetterSpacing={setLetterSpacing} />

      <AccessibilityControls_WordSpacing setWordSpacing={setWordSpacing} />

      <AccessibilityControls_LineHeight setLineHeight={setLineHeight} />

      <AccessibilityControls_MarginInline setMarginIniline={setMarginIniline} />

      <AccessibilityControls_FontFamily setFontFamily={setFontFamily}
      />



      {/* 
      //!FH0
      Create the different font-styles
      */}

      {/* 
      <p>✅Letter spacing [plus and less]</p>
      <p>✅Word spacing [plus and less]</p>
      <p>✅Line height [plus and less]</p>
      <p>✅Content width [plus and less] </p>
      <p>👀Font-style: ...</p>
      <p>Colors: light, dark, sepia (others maybe)</p> */}
      <button
        onClick={handleShow}
        ref={widthElementToShowAndHide}>
        <TextPreferencesSVG />
      </button>
    </AccessibilityControlsWrapper>
  )
}
