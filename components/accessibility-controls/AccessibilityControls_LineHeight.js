import { useState } from 'react'
import { LineHeightSVG, MinusSVG, PlusSVG, RefreshSVG } from '../../assets/icons/index.js'
import { CALCULATED_CONST_ACCESSIBILITY, CONST_ACCESSIBILITY_RULES } from '../../utils/ConstAccessibility.js'
import { AccessibilityControls_LineHeightWrapper } from './styles/AccessibilityControls_LineHeightWrapper.js'

export const AccessibilityControls_LineHeight = ({ setLineHeight }) => {
  const [initialStep, setInitialStep] = useState(-1)
  const [defaultValue, setDefaultValue] = useState(CONST_ACCESSIBILITY_RULES.lineHeight.default)

  const UP = () => {
    if (initialStep < CALCULATED_CONST_ACCESSIBILITY.lineHeight.data.length - 1) {
      setLineHeight(CALCULATED_CONST_ACCESSIBILITY.lineHeight.data[initialStep + 1])

      setInitialStep((prevState) => prevState + 1)
    }
  }

  const DOWN = () => {
    if (initialStep > 0) {
      setLineHeight(CALCULATED_CONST_ACCESSIBILITY.lineHeight.data[initialStep - 1])

      setInitialStep((prevState) => prevState - 1)
    }
  }

  const DEFAULT = () => {
    setLineHeight(CONST_ACCESSIBILITY_RULES.lineHeight.default)
    setInitialStep(-1)
  }


  return (
    <AccessibilityControls_LineHeightWrapper>
      <span>
        <LineHeightSVG />
      </span>

      <div>
        <span onClick={DOWN}>
          <MinusSVG />
        </span>

        <span>{initialStep === -1 ? defaultValue : initialStep + 1}</span>

        <span onClick={UP}>
          <PlusSVG />
        </span>
      </div>

      <span onClick={DEFAULT}>
        <RefreshSVG />
      </span>
    </AccessibilityControls_LineHeightWrapper>
  )
}