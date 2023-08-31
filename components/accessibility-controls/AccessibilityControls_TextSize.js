import { useState } from "react"
import { FontSizeSVG, MinusSVG, PlusSVG, RefreshSVG } from "../../assets/icons/index.js"
import { CALCULATED_CONST_ACCESSIBILITY, CONST_ACCESSIBILITY_RULES } from "../../utils/ConstAccessibility.js"
import { AccessibilityControls_TextSizeWrapper } from "./styles/AccessibilityControls_TextSizeWrapper.js"

export const AccessibilityControls_TextSize = ({
  // value,
  // setValue,
  // paragraphCalculated,
  // setParagraphCalculated,
  // textRules,
  // setTextRules,
  setFontSize,
  refToFirstAccessibilityControl
}) => {
  const [initialStep, setInitialStep] = useState(CONST_ACCESSIBILITY_RULES.textHowMuchChanges.initialValueIndex)

  const UP = (e) => {
    if (e.type === "click" || e.code === "Enter") {
      if (initialStep < CONST_ACCESSIBILITY_RULES.textHowMuchChanges.max - 1) {
        setFontSize({
          p: CALCULATED_CONST_ACCESSIBILITY.p[initialStep + 1],
          h1: CALCULATED_CONST_ACCESSIBILITY.h1[initialStep + 1],
          h2: CALCULATED_CONST_ACCESSIBILITY.h2[initialStep + 1],
          h3h4h5h6: CALCULATED_CONST_ACCESSIBILITY.h3h4h5h6[initialStep + 1],
        })

        setInitialStep((prevState) => prevState + 1)
      }
    }
  }
  const DOWN = (e) => {
    if (e.type === "click" || e.code === "Enter") {
      if (initialStep > CONST_ACCESSIBILITY_RULES.textHowMuchChanges.min) {
        setFontSize({
          p: CALCULATED_CONST_ACCESSIBILITY.p[initialStep - 1],
          h1: CALCULATED_CONST_ACCESSIBILITY.h1[initialStep - 1],
          h2: CALCULATED_CONST_ACCESSIBILITY.h2[initialStep - 1],
          h3h4h5h6: CALCULATED_CONST_ACCESSIBILITY.h3h4h5h6[initialStep - 1],
        })

        setInitialStep((prevState) => prevState - 1)
      }
    }
  }

  const DEFAULT = (e) => {
    if (e.type === "click" || e.code === "Enter") {
      setFontSize({
        p: CALCULATED_CONST_ACCESSIBILITY.p[CONST_ACCESSIBILITY_RULES.textHowMuchChanges.initialValueIndex],
        h1: CALCULATED_CONST_ACCESSIBILITY.h1[CONST_ACCESSIBILITY_RULES.textHowMuchChanges.initialValueIndex],
        h2: CALCULATED_CONST_ACCESSIBILITY.h2[CONST_ACCESSIBILITY_RULES.textHowMuchChanges.initialValueIndex],
        h3h4h5h6: CALCULATED_CONST_ACCESSIBILITY.h3h4h5h6[CONST_ACCESSIBILITY_RULES.textHowMuchChanges.initialValueIndex],
      })

      setInitialStep(CONST_ACCESSIBILITY_RULES.textHowMuchChanges.initialValueIndex)
    }
  }

  return (
    <AccessibilityControls_TextSizeWrapper>
      <span>
        <FontSizeSVG />
      </span>

      <div>
        <span
          onClick={DOWN}
          onKeyDown={DOWN}
          tabIndex={0}
          ref={refToFirstAccessibilityControl}
        >
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
    </AccessibilityControls_TextSizeWrapper>
  )
}
