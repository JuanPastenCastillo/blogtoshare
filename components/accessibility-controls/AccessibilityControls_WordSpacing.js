import { useState } from 'react'
import { MinusSVG, PlusSVG, RefreshSVG, WordSpacingSVG } from '../../assets/icons/index.js'
import { CALCULATED_CONST_ACCESSIBILITY, CONST_ACCESSIBILITY_RULES } from '../../utils/ConstAccessibility.js'
import { AccessibilityControls_WordSpacingWrapper } from './styles/AccessibilityControls_WordSpacingWrapper.js'

export const AccessibilityControls_WordSpacing = ({ setWordSpacing }) => {
  const [initialStep, setInitialStep] = useState(-1)
  const [defaultValue, setDefaultValue] = useState(CONST_ACCESSIBILITY_RULES.wordSpacing.default)

  const UP = () => {
    if (initialStep < CALCULATED_CONST_ACCESSIBILITY.wordSpacing.data.length - 1) {
      setWordSpacing(CALCULATED_CONST_ACCESSIBILITY.wordSpacing.data[initialStep + 1])

      setInitialStep((prevState) => prevState + 1)
    }
  }

  const DOWN = () => {
    if (initialStep > 0) {
      setWordSpacing(CALCULATED_CONST_ACCESSIBILITY.wordSpacing.data[initialStep - 1])

      setInitialStep((prevState) => prevState - 1)
    }
  }

  const DEFAULT = () => {
    setWordSpacing(CONST_ACCESSIBILITY_RULES.wordSpacing.default)
    setInitialStep(-1)
  }


  return (
    <AccessibilityControls_WordSpacingWrapper>
      <span>
        <WordSpacingSVG />
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
    </AccessibilityControls_WordSpacingWrapper>
  )
}