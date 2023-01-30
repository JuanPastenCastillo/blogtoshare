import Link from "next/link.js"
import { BackSVG } from "../../../../assets/icons/index.js"
import  HowToFounderWrapper  from "./styles/HowToFounderWrapper.js"

const HowToFounder = (parameters) => {
  return (
    <HowToFounderWrapper>
      <BackSVG/>
      <h2>Information to learn about the Founder role on a StartUp</h2>
      <p>This entry have three parts:</p>
      <p>
        Introduction: <Link href="howto-founder/introduction">reflexive perspective about the role Founder</Link>.
      </p>
      <p>
        Content: <Link href="howto-founder/content">specific information about the role Founder</Link>.
      </p>
      <p>
        Stress management: <Link href="howto-founder/stress">learn how to manage the mental and physical stress</Link>.
      </p>
    </HowToFounderWrapper>
  )
}
export default HowToFounder
