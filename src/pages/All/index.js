import Link from "next/link"
import  AllContentWrapper  from "./styles/AllContentWrapper.js"

const AllContent = () => {
  return (
    <AllContentWrapper>
      <h2>Here you can find all the content of this blog. The topics are:</h2>

      <ul>
        <li>
          <Link href="/All/howto-founder">How To Founder</Link>

        </li>
      </ul>
    </AllContentWrapper>
  )
}
export default AllContent
