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
          >
            <GlobalStyle
              fontSize={fontSize}
              letterSpacing={letterSpacing}
              wordSpacing={wordSpacing}
            />
            <Component {...pageProps} />
          </Layout>
        </UserView_Provider>
      </HeightNavbarContext_Provider>
    </Fragment>
  )
}
