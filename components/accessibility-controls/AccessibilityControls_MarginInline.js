import { useState } from 'react'
import { MarginInlineSVG, MinusSVG, PlusSVG, RefreshSVG } from '../../assets/icons/index.js'
import { CALCULATED_CONST_ACCESSIBILITY, CONST_ACCESSIBILITY_RULES } from '../../utils/ConstAccessibility.js'
import { AccessibilityControls_MarginInlineWrapper } from './styles/AccessibilityControls_MarginInlineWrapper.js'

export const AccessibilityControls_MarginInline = ({ setMarginIniline }) => {
  const [initialStep, setInitialStep] = useState(-1)

  const UP = () => {
    if (initialStep < CALCULATED_CONST_ACCESSIBILITY.marginInline.data.length - 1) {
      setMarginIniline(CALCULATED_CONST_ACCESSIBILITY.marginInline.data[initialStep + 1])

      setInitialStep((prevState) => prevState + 1)
    }
  }

  const DOWN = () => {
    if (initialStep > 0) {
      setMarginIniline(CALCULATED_CONST_ACCESSIBILITY.marginInline.data[initialStep - 1])

      setInitialStep((prevState) => prevState - 1)
    }
  }

  const DEFAULT = () => {
    setMarginIniline(CONST_ACCESSIBILITY_RULES.marginInline.default)
    setInitialStep(-1)
  }

  return (
    <AccessibilityControls_MarginInlineWrapper>
      <span>
        <MarginInlineSVG />
      </span>

      <div>
        <span onClick={DOWN}>
          <MinusSVG />
        </span>

        <span>{initialStep + 1}</span>

        <span onClick={UP}>
          <PlusSVG />
        </span>
      </div>

      <span onClick={DEFAULT}>
        <RefreshSVG />
      </span>
    </AccessibilityControls_MarginInlineWrapper>
  )
}