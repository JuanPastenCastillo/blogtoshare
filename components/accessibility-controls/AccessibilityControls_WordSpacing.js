import { useEffect, useState } from "react"
import { MinusSVG, PlusSVG, RefreshSVG, WordSpacingSVG } from "../../assets/icons/index.js"
import { CALCULATED_CONST_ACCESSIBILITY, CONST_ACCESSIBILITY_RULES } from "../../utils/ConstAccessibility.js"
import { AccessibilityControls_WordSpacingWrapper } from "./styles/AccessibilityControls_WordSpacingWrapper.js"

export const AccessibilityControls_WordSpacing = ({ setWordSpacing, clickOnDefaultEverything }) => {
  const [initialStep, setInitialStep] = useState(-1)
  const [defaultValue, setDefaultValue] = useState(CONST_ACCESSIBILITY_RULES.wordSpacing.default)

  const UP = (e) => {
    if (e.type === "click" || e.code === "Enter") {
      if (initialStep < CALCULATED_CONST_ACCESSIBILITY.wordSpacing.data.length - 1) {
        setWordSpacing(CALCULATED_CONST_ACCESSIBILITY.wordSpacing.data[initialStep + 1])

        setInitialStep((prevState) => prevState + 1)
      }
    }
  }

  const DOWN = (e) => {
    if (e.type === "click" || e.code === "Enter") {
      if (initialStep > 0) {
        setWordSpacing(CALCULATED_CONST_ACCESSIBILITY.wordSpacing.data[initialStep - 1])

        setInitialStep((prevState) => prevState - 1)
      }
    }
  }

  const DEFAULT = (e) => {
    if (e.type === "click" || e.code === "Enter" || e === "useEffect") {
      setWordSpacing(CONST_ACCESSIBILITY_RULES.wordSpacing.default)
      setInitialStep(-1)
    }
  }

  useEffect(() => {
    DEFAULT("useEffect")
  }, [clickOnDefaultEverything])

  return (
    <AccessibilityControls_WordSpacingWrapper>
      <span>
        <WordSpacingSVG />
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
    </AccessibilityControls_WordSpacingWrapper>
  )
}
