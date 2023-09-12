import Link from "next/link"
import AllContentWrapper from "./styles/AllContentWrapper.js"

/* 

[ts] Already included file name 
'f:/JuanEnEfe/Informática/Practicando/blog/src/pages/All/styles/AllContentWrapper.js' differs from file name 'f:/JuanEnEfe/Informática/Practicando/blog/src/pages/all/styles/AllContentWrapper.js' only in casing.
  The file is in the program because:
    Imported via "./styles/AllContentWrapper.js" from file 'f:/JuanEnEfe/Informática/Practicando/blog/src/pages/All/index.js'
    Root file specified for compilation
*/

const AllContent = () => {

  return (
    <AllContentWrapper>
      <h2>Check this exciting topics</h2>

      <ul>
        <li>
          <Link href="/All/philosophical-reflection">Philosophical Reflection</Link>
        </li>
        <li>
          <Link href="/All/leadership">How is Leadership According to Research?</Link>
        </li>
        <li>
          <Link href="/All/founders-interviews">Founders Interviews</Link>
        </li>
        <li>
          <Link href="/All/stress-management">Stress Management</Link>
        </li>
      </ul>


    </AllContentWrapper>
  )
}
export default AllContent

