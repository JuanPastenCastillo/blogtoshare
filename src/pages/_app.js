import Head from "next/head"
import { Fragment, useState } from "react"
import { Layout } from "../../components/Layout"
import { HeightNavbarContext_Provider } from "../../context/HeightNavbarContext"
import { UserView_Provider } from "../../context/UserViewContext"
import { CALCULATED_CONST_ACCESSIBILITY, CONST_ACCESSIBILITY_RULES } from "../../utils/ConstAccessibility"
import { GlobalStyle } from "../styles/GlobalStyle"

export default function App({ Component, pageProps }) {
  const [fontSize, setFontSize] = useState({
    p: CALCULATED_CONST_ACCESSIBILITY.p[CONST_ACCESSIBILITY_RULES.textHowMuchChanges.initialValueIndex],
    h1: CALCULATED_CONST_ACCESSIBILITY.h1[CONST_ACCESSIBILITY_RULES.textHowMuchChanges.initialValueIndex],
    h2: CALCULATED_CONST_ACCESSIBILITY.h2[CONST_ACCESSIBILITY_RULES.textHowMuchChanges.initialValueIndex],
    h3h4h5h6: CALCULATED_CONST_ACCESSIBILITY.h3h4h5h6[CONST_ACCESSIBILITY_RULES.textHowMuchChanges.initialValueIndex],
  })

  const [letterSpacing, setLetterSpacing] = useState(CALCULATED_CONST_ACCESSIBILITY.letterSpacing.default)

  const [wordSpacing, setWordSpacing] = useState(CALCULATED_CONST_ACCESSIBILITY.wordSpacing.default)

  const [lineHeight, setLineHeight] = useState(CALCULATED_CONST_ACCESSIBILITY.lineHeight.default)

  const [marginIniline, setMarginIniline] = useState(CALCULATED_CONST_ACCESSIBILITY.marginInline.default)

  const [fontFamily, setFontFamily] = useState(CONST_ACCESSIBILITY_RULES.fontFamily.sansSerif)

  return (
    <Fragment>
      <Head>
        <title>Blog - JUAN PASTÉN CASTILLO</title>
      </Head>

      <HeightNavbarContext_Provider>
        <UserView_Provider>
          <Layout
            setFontSize={setFontSize}
            setLetterSpacing={setLetterSpacing}
            setWordSpacing={setWordSpacing}
            setLineHeight={setLineHeight}
            setMarginIniline={setMarginIniline}
            setFontFamily={setFontFamily}>
            <GlobalStyle
              fontSize={fontSize}
              letterSpacing={letterSpacing}
              wordSpacing={wordSpacing}
              lineHeight={lineHeight}
              marginIniline={marginIniline}
              fontFamily={fontFamily}
            />
            <Component {...pageProps} />
          </Layout>
        </UserView_Provider>
      </HeightNavbarContext_Provider>
    </Fragment>
  )
}
