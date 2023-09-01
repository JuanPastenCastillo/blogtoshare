import { useEffect, useState } from "react"
import { MarginInlineSVG, MinusSVG, PlusSVG, RefreshSVG } from "../../assets/icons/index.js"
import { CALCULATED_CONST_ACCESSIBILITY, CONST_ACCESSIBILITY_RULES } from "../../utils/ConstAccessibility.js"
import { AccessibilityControls_MarginInlineWrapper } from "./styles/AccessibilityControls_MarginInlineWrapper.js"

export const AccessibilityControls_MarginInline = ({ setMarginIniline, clickOnDefaultEverything }) => {
  const [initialStep, setInitialStep] = useState(-1)

  const UP = (e) => {
    if (e.type === "click" || e.code === "Enter") {
      if (initialStep < CALCULATED_CONST_ACCESSIBILITY.marginInline.data.length - 1) {
        setMarginIniline(CALCULATED_CONST_ACCESSIBILITY.marginInline.data[initialStep + 1])

        setInitialStep((prevState) => prevState + 1)
      }
    }
  }

  const DOWN = (e) => {
    if (e.type === "click" || e.code === "Enter") {
      if (initialStep > 0) {
        setMarginIniline(CALCULATED_CONST_ACCESSIBILITY.marginInline.data[initialStep - 1])

        setInitialStep((prevState) => prevState - 1)
      }
    }
  }

  const DEFAULT = (e) => {
    if (e.type === "click" || e.code === "Enter" || e === "useEffect") {
      setMarginIniline(CONST_ACCESSIBILITY_RULES.marginInline.default)
      setInitialStep(-1)
    }
  }

  useEffect(() => {
    DEFAULT("useEffect")
  }, [clickOnDefaultEverything])

  return (
    <AccessibilityControls_MarginInlineWrapper>
      <span>
        <MarginInlineSVG />
      </span>

      <div>
        <span
          onClick={DOWN}
          onKeyDown={DOWN}
          tabIndex={0}>
          <MinusSVG />
        </span>

        <span>{initialStep + 1}</span>

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
    </AccessibilityControls_MarginInlineWrapper>
  )
}
