import { useState } from "react"
import { LetterSpacingSVG, MinusSVG, PlusSVG, RefreshSVG } from "../../assets/icons/index.js"
import { CALCULATED_CONST_ACCESSIBILITY, CONST_ACCESSIBILITY_RULES } from "../../utils/ConstAccessibility.js"
import { AccessibilityControls_LetterSpacingWrapper } from "./styles/AccessibilityControls_LetterSpacingWrapper.js"

export const AccessibilityControls_LetterSpacing = ({ setLetterSpacing }) => {
  const [initialStep, setInitialStep] = useState(-1)
  const [defaultValue, setDefaultValue] = useState(CONST_ACCESSIBILITY_RULES.letterSpacing.default)

  // console.log("CALCULATED_CONST_ACCESSIBILITY.letterSpacing:", CALCULATED_CONST_ACCESSIBILITY.letterSpacing)

  const UP = () => {
    console.log("initialStep:", initialStep)
    console.log(
      "CALCULATED_CONST_ACCESSIBILITY.letterSpacing.length:",
      CALCULATED_CONST_ACCESSIBILITY.letterSpacing.data.length
    )
    if (initialStep < CALCULATED_CONST_ACCESSIBILITY.letterSpacing.data.length - 1) {
      setLetterSpacing(CALCULATED_CONST_ACCESSIBILITY.letterSpacing.data[initialStep + 1])

      setInitialStep((prevState) => prevState + 1)
    }
  }

  const DOWN = () => {
    if (initialStep > 0) {
      setLetterSpacing(CALCULATED_CONST_ACCESSIBILITY.letterSpacing.data[initialStep - 1])

      setInitialStep((prevState) => prevState - 1)
    }
  }

  const DEFAULT = () => {
    setLetterSpacing(CONST_ACCESSIBILITY_RULES.letterSpacing.default)
    setInitialStep(-1)
  }

  return (
    <AccessibilityControls_LetterSpacingWrapper>
      <span>
        <LetterSpacingSVG />
      </span>
      <div>
        <span onClick={DOWN}>
          <MinusSVG />
        </span>

        <span>{initialStep === -1 ? defaultValue : initialStep}</span>

        <span onClick={UP}>
          <PlusSVG />
        </span>
      </div>

      <span onClick={DEFAULT}>
        <RefreshSVG />
      </span>
    </AccessibilityControls_LetterSpacingWrapper>
  )
}
