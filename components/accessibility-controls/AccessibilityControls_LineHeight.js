import { useEffect, useState } from "react"
import { LineHeightSVG, MinusSVG, PlusSVG, RefreshSVG } from "../../assets/icons/index.js"
import { CALCULATED_CONST_ACCESSIBILITY, CONST_ACCESSIBILITY_RULES } from "../../utils/ConstAccessibility.js"
import { AccessibilityControls_LineHeightWrapper } from "./styles/AccessibilityControls_LineHeightWrapper.js"

export const AccessibilityControls_LineHeight = ({ setLineHeight, clickOnDefaultEverything }) => {
  const [initialStep, setInitialStep] = useState(-1)
  const [defaultValue, setDefaultValue] = useState(CONST_ACCESSIBILITY_RULES.lineHeight.default)

  const UP = (e) => {
    if (e.type === "click" || e.code === "Enter") {
      if (initialStep < CALCULATED_CONST_ACCESSIBILITY.lineHeight.data.length - 1) {
        setLineHeight(CALCULATED_CONST_ACCESSIBILITY.lineHeight.data[initialStep + 1])

        setInitialStep((prevState) => prevState + 1)
      }
    }
  }

  const DOWN = (e) => {
    if (e.type === "click" || e.code === "Enter") {
      if (initialStep > 0) {
        setLineHeight(CALCULATED_CONST_ACCESSIBILITY.lineHeight.data[initialStep - 1])

        setInitialStep((prevState) => prevState - 1)
      }
    }
  }

  const DEFAULT = (e) => {
    if (e.type === "click" || e.code === "Enter" || e === "useEffect") {
      setLineHeight(CONST_ACCESSIBILITY_RULES.lineHeight.default)
      setInitialStep(-1)
    }
  }

  useEffect(() => {
    DEFAULT("useEffect")
  }, [clickOnDefaultEverything])

  return (
    <AccessibilityControls_LineHeightWrapper>
      <span>
        <LineHeightSVG />
      </span>

      <div>
        <span
          onClick={DOWN}
          onKeyDown={DOWN}
          tabIndex={0}>
          <MinusSVG />
        </span>

        <span>{initialStep === -1 ? defaultValue : initialStep + 1}</span>

        <span
          onClick={UP}
          onKeyDown={UP}
          tabIndex={0}>
          <PlusSVG />
        </span>
      </div>

      <span
        onClick={DEFAULT}
        onKeyDown={DEFAULT}
        tabIndex={0}>
        <RefreshSVG />
      </span>
    </AccessibilityControls_LineHeightWrapper>
  )
}
