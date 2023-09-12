import Link from "next/link"
import AllContentWrapper from "./styles/AllContentWrapper.js"

const AllContent = () => {

  return (
    <AllContentWrapper>
      <h2>Check this exciting topics</h2>

      <ul>
        <li>
          <Link href="/all/philosophical-reflection">Philosophical Reflection</Link>
        </li>
        <li>
          <Link href="/all/leadership">How is Leadership According to Research?</Link>
        </li>
        <li>
          <Link href="/all/founders-interviews">Founders Interviews</Link>
        </li>
        <li>
          <Link href="/all/stress-management">Stress Management</Link>
        </li>
      </ul>


    </AllContentWrapper>
  )
}
export default AllContent

