import { useEffect, useRef, useState } from "react"
import { TextPreferencesSVG } from "../../assets/icons/index.js"
import { useOutsideHide } from "../../utils/useOutsideHide.js"
import { AccessibilityControls_FontFamily } from "./AccessibilityControls_FontFamily.js"
import { AccessibilityControls_LetterSpacing } from "./AccessibilityControls_LetterSpacing.js"
import { AccessibilityControls_LineHeight } from "./AccessibilityControls_LineHeight.js"
import { AccessibilityControls_MarginInline } from "./AccessibilityControls_MarginInline.js"
import { AccessibilityControls_ResetAll } from "./AccessibilityControls_ResetAll.js"
import { AccessibilityControls_TextSize } from "./AccessibilityControls_TextSize.js"
import { AccessibilityControls_WordSpacing } from "./AccessibilityControls_WordSpacing.js"
import { AccessibilityControlsWrapper } from "./styles/AccessibilityControlsWrapper.js"

export const AccessibilityControls = ({
  setFontSize,
  setLetterSpacing,
  setWordSpacing,
  setLineHeight,
  setMarginIniline,
  setFontFamily
}) => {
  const [show, setShow] = useState(false)

  const handleShow = (e) => {
    if (e.type === "click" || e.code === "F1" || e.code === "Enter" || e.key === "Enter") {
      setShow((prevState) => !prevState)
    }
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      if ((event.shiftKey && event.key.toLowerCase() === "a") || event.key === "F1") {
        handleShow(event)
      }

      if (event.key === "Escape") {
        setShow(false)
      }
    }

    document.addEventListener("keydown", handleKeyPress)

    return () => {
      document.removeEventListener("keydown", handleKeyPress)
    }
  }, [])

  const [widthParent, setWidthParent] = useState()
  const getWidthRef = useRef(null)
  const widthElementToShowAndHide = useRef(null)

  const refToFirstAccessibilityControl = useRef(null)

  useEffect(() => {
    if (show && refToFirstAccessibilityControl.current) {
      refToFirstAccessibilityControl.current.focus()
    }
  }, [show, refToFirstAccessibilityControl])

  useEffect(() => {
    if (!getWidthRef.current) return
    const resizeObserver = new ResizeObserver(() => {
      const width = getWidthRef.current.offsetWidth
      setWidthParent(width)
    })
    resizeObserver.observe(getWidthRef.current)
    return () => resizeObserver.disconnect()
  }, [])

  useOutsideHide(getWidthRef, setShow)

  const [clickOnDefaultEverything, setClickOnDefaultEverything] = useState(false)

  return (
    <AccessibilityControlsWrapper
      show={show}
      ref={getWidthRef}
      widthParent={widthParent}
      widthElementToShowAndHide={widthElementToShowAndHide?.current?.offsetWidth}>
      <AccessibilityControls_TextSize
        setFontSize={setFontSize}
        refToFirstAccessibilityControl={refToFirstAccessibilityControl}
        clickOnDefaultEverything={clickOnDefaultEverything}
      />

      <AccessibilityControls_LetterSpacing
        setLetterSpacing={setLetterSpacing}
        clickOnDefaultEverything={clickOnDefaultEverything}
      />

      <AccessibilityControls_WordSpacing
        setWordSpacing={setWordSpacing}
        clickOnDefaultEverything={clickOnDefaultEverything}
      />

      <AccessibilityControls_LineHeight
        setLineHeight={setLineHeight}
        clickOnDefaultEverything={clickOnDefaultEverything}
      />

      <AccessibilityControls_MarginInline
        setMarginIniline={setMarginIniline}
        clickOnDefaultEverything={clickOnDefaultEverything}
      />

      <AccessibilityControls_FontFamily
        setFontFamily={setFontFamily}
        clickOnDefaultEverything={clickOnDefaultEverything}
      />

      <AccessibilityControls_ResetAll setClickOnDefaultEverything={setClickOnDefaultEverything} />

      <button
        onClick={handleShow}
        tabIndex={0}
        ref={widthElementToShowAndHide}>
        <TextPreferencesSVG />
      </button>
    </AccessibilityControlsWrapper>
  )
}
