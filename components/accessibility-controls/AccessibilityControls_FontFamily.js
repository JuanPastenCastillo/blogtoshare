import { useState } from "react"
import { AccessibilityControls_FontFamilyWrapper } from "./styles/AccessibilityControls_FontFamilyWrapper.js"

const VARIABLES = {
  sansSerif: "sans-serif",
  serif: "serif",
  activeFont: "activeFont",
}

export const AccessibilityControls_FontFamily = ({ setFontFamily }) => {
  const [activeFont, setActiveFont] = useState(VARIABLES.sansSerif)

  const handleActiveFont = (e, whichIsActive) => {
    if (e.type === "click" || e.code === "Enter") {
      if (whichIsActive === VARIABLES.sansSerif) {
        setActiveFont(VARIABLES.sansSerif)
        setFontFamily(VARIABLES.sansSerif)
      } else if (whichIsActive === VARIABLES.serif) {
        setActiveFont(VARIABLES.serif)
        setFontFamily(VARIABLES.serif)
      }
    }
  }

  return (
    <AccessibilityControls_FontFamilyWrapper activeFont={activeFont}>
      <div
        className={activeFont === VARIABLES.sansSerif ? `${VARIABLES.activeFont} ${VARIABLES.sansSerif}` : VARIABLES.sansSerif}
        onClick={(e) => handleActiveFont(e, VARIABLES.sansSerif)}
        onKeyDown={(e) => handleActiveFont(e, VARIABLES.sansSerif)}
        tabIndex={0}>
        <p>Sans-serif</p>
        <p>Aa</p>
      </div>
      <div
        // className="serif"
        className={activeFont === VARIABLES.serif ? `${VARIABLES.activeFont} ${VARIABLES.serif}` : VARIABLES.serif}
        onClick={(e) => handleActiveFont(e, VARIABLES.serif)}
        onKeyDown={(e) => handleActiveFont(e, VARIABLES.serif)}
        tabIndex={0}>
        <p>Serif</p>
        <p>Aa</p>
      </div>
    </AccessibilityControls_FontFamilyWrapper>
  )
}
