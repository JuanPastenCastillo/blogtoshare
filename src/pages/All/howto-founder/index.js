import Link from "next/link.js"
import { BackComponent } from "../../../../components/back/BackComponent.js"
import HowToFounderWrapper from "./styles/HowToFounderWrapper.js"

const HowToFounder = () => {
  return (
    <HowToFounderWrapper>
      <BackComponent/>
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
