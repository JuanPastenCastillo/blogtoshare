import { createContext, useContext, useState } from "react"
import { CALCULATED_CONST_ACCESSIBILITY, CONST_ACCESSIBILITY_RULES, TEXT_SIZE } from "../utils/ConstAccessibility"

const ResizeText_Ctx = createContext(null)

export const ResizeText_Provider = ({ children }) => {
  // const [paragraphSize, setParagraphSize] = useState(TEXT_SIZE)
  // const [textRules, setTextRules] = useState(CONST_ACCESSIBILITY_RULES.textHowMuchChanges)
  const [trackIndex, setTrackIndex] = useState(CONST_ACCESSIBILITY_RULES.textHowMuchChanges.initialValueIndex)
  const [maxStep, setMaxStep] = useState(CONST_ACCESSIBILITY_RULES.textHowMuchChanges.max)
  const [pCalc, setPCalc] = useState(CALCULATED_CONST_ACCESSIBILITY.p)
  const [H1Calc, setH1Calc] = useState(CALCULATED_CONST_ACCESSIBILITY.h1)
  const [H2Calc, setH2Calc] = useState(CALCULATED_CONST_ACCESSIBILITY.h2)
  const [H3H4H5H6Calc, setH3H4H5H6Calc] = useState(CALCULATED_CONST_ACCESSIBILITY.h3h4h5h6)

  const [array, setArray] = useState(TEXT_SIZE)

  // const [valuesCalculated, setValuesCalculated] = useState(CALCULATED_CONST_ACCESSIBILITY)

  return (
    <ResizeText_Ctx.Provider
      value={{
        trackIndex,
        setTrackIndex,
        maxStep,
        setMaxStep,
        pCalc,
        setPCalc,
        H1Calc,
        setH1Calc,
        H2Calc,
        setH2Calc,
        H3H4H5H6Calc,
        setH3H4H5H6Calc,
        array,
        setArray
      }}>
      {children}
    </ResizeText_Ctx.Provider>
  )
}

export const useResizeText_Ctx = () => {
  return useContext(ResizeText_Ctx)
}
