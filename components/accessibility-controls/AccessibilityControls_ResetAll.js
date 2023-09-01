import { AccessibilityControls_ResetAllWrapper } from "./styles/AccessibilityControls_ResetAllWrapper.js"

export const AccessibilityControls_ResetAll = ({ setFontSize, setLetterSpacing, setWordSpacing, setLineHeight, setMarginIniline, setFontFamily, setClickOnDefaultEverything }) => {
  const DEFAULT = (e) => {
    if (e.type === "click" || e.code === "Enter") {
      setClickOnDefaultEverything(prevState => !prevState)
    }
  }

  return (
    <AccessibilityControls_ResetAllWrapper
      onClick={DEFAULT}
      onKeyDown={DEFAULT}
      tabIndex={0}>
      Reset All
    </AccessibilityControls_ResetAllWrapper>
  )
}
