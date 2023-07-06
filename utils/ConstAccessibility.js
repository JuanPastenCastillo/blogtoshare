import { arrayForTextOnlyNumbers, arrayForTextWithDefaultValue } from "./arraysForText"

export const TEXT_SIZE = [8, 12, 16, 20, 24, 28, 32, 36, 40, 44]
export const CONST_ACCESSIBILITY_RULES = {
  p: {
    default: 16,
    valueToUse: "px"
  },
  h1: {
    default: 32,
    valueToUse: "px"
  },
  h2: {
    default: 24,
    valueToUse: "px"
  },
  h3h4h5h6: {
    default: 19,
    valueToUse: "px"
  },
  textHowMuchChanges: {
    min: 0,
    max: 9,
    initialValueIndex: 2,
    steps: 4
  },
  letterSpacing: {
    default: "normal",
    from: 0.12,
    to: 0.4,
    steps: 9,
    valueToUse: "em",
    name: "letterSpacing"
  },
  wordSpacing: {
    default: "normal",
    from: 0.5,
    to: 2,
    steps: 8,
    valueToUse: "em",
    name: "wordSpacing"
  },
  lineHeight: {
    default: "normal",
    from: 1.6,
    to: 2.6,
    steps: 3,
    valueToUse: "em",
    name: "lineHeight"
  },
  fontFamily: {
    "Courier New": "Courier New",
    "sans-serif": "sans-serif",
    "Space Grotesk": "Space Grotesk",
    "system-ui": "system-ui",
    "calibri": "calibri",
    "monospace": "monospace",
    "serif": "serif",
  },
  marginInline: {
    default: 0,
    from: 50,
    to: 200,
    steps: 3,
    valueToUse: "px",
    name: "marginInline"
  }
}

export const CALCULATED_CONST_ACCESSIBILITY = {
  p: arrayForTextOnlyNumbers(
    CONST_ACCESSIBILITY_RULES.p.default,
    CONST_ACCESSIBILITY_RULES.textHowMuchChanges.initialValueIndex,
    CONST_ACCESSIBILITY_RULES.textHowMuchChanges.max,
    CONST_ACCESSIBILITY_RULES.textHowMuchChanges.steps,
    CONST_ACCESSIBILITY_RULES.p.valueToUse
  ),
  h1: arrayForTextOnlyNumbers(
    CONST_ACCESSIBILITY_RULES.h1.default,
    CONST_ACCESSIBILITY_RULES.textHowMuchChanges.initialValueIndex,
    CONST_ACCESSIBILITY_RULES.textHowMuchChanges.max,
    CONST_ACCESSIBILITY_RULES.textHowMuchChanges.steps,
    CONST_ACCESSIBILITY_RULES.h1.valueToUse
  ),
  h2: arrayForTextOnlyNumbers(
    CONST_ACCESSIBILITY_RULES.h2.default,
    CONST_ACCESSIBILITY_RULES.textHowMuchChanges.initialValueIndex,
    CONST_ACCESSIBILITY_RULES.textHowMuchChanges.max,
    CONST_ACCESSIBILITY_RULES.textHowMuchChanges.steps,
    CONST_ACCESSIBILITY_RULES.h2.valueToUse
  ),
  h3h4h5h6: arrayForTextOnlyNumbers(
    CONST_ACCESSIBILITY_RULES.h3h4h5h6.default,
    CONST_ACCESSIBILITY_RULES.textHowMuchChanges.initialValueIndex,
    CONST_ACCESSIBILITY_RULES.textHowMuchChanges.max,
    CONST_ACCESSIBILITY_RULES.textHowMuchChanges.steps,
    CONST_ACCESSIBILITY_RULES.h3h4h5h6.valueToUse
  ),
  letterSpacing: arrayForTextWithDefaultValue(
    CONST_ACCESSIBILITY_RULES.letterSpacing.default,
    CONST_ACCESSIBILITY_RULES.letterSpacing.from,
    CONST_ACCESSIBILITY_RULES.letterSpacing.to,
    CONST_ACCESSIBILITY_RULES.letterSpacing.steps,
    CONST_ACCESSIBILITY_RULES.letterSpacing.valueToUse,
    CONST_ACCESSIBILITY_RULES.letterSpacing.name,

  ),
  wordSpacing: arrayForTextWithDefaultValue(
    CONST_ACCESSIBILITY_RULES.wordSpacing.default,
    CONST_ACCESSIBILITY_RULES.wordSpacing.from,
    CONST_ACCESSIBILITY_RULES.wordSpacing.to,
    CONST_ACCESSIBILITY_RULES.wordSpacing.steps,
    CONST_ACCESSIBILITY_RULES.wordSpacing.valueToUse,
    CONST_ACCESSIBILITY_RULES.wordSpacing.name,
  ),
  lineHeight: arrayForTextWithDefaultValue(
    CONST_ACCESSIBILITY_RULES.lineHeight.default,
    CONST_ACCESSIBILITY_RULES.lineHeight.from,
    CONST_ACCESSIBILITY_RULES.lineHeight.to,
    CONST_ACCESSIBILITY_RULES.lineHeight.steps,
    CONST_ACCESSIBILITY_RULES.lineHeight.valueToUse,
    CONST_ACCESSIBILITY_RULES.lineHeight.name,
  ),
  marginInline: arrayForTextWithDefaultValue(
    CONST_ACCESSIBILITY_RULES.marginInline.default,
    CONST_ACCESSIBILITY_RULES.marginInline.from,
    CONST_ACCESSIBILITY_RULES.marginInline.to,
    CONST_ACCESSIBILITY_RULES.marginInline.steps,
    CONST_ACCESSIBILITY_RULES.marginInline.valueToUse,
    CONST_ACCESSIBILITY_RULES.marginInline.name,
  ),
  fontFamily: CONST_ACCESSIBILITY_RULES.fontFamily,
}
