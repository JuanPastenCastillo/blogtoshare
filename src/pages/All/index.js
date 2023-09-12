import Link from "next/link"
import AllContentWrapper from "./styles/AllContentWrapper.js"

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

/* 

Use this code to make the buttons

https://codi.link/PGFydGljbGU+CiAgPGltZyBzcmM9J2h0dHBzOi8vaS5pbWd1ci5jb20vWVBRbHRoOC5qcGcnIC8+CiAgPGltZyBzcmM9J2h0dHBzOi8vaS5pbWd1ci5jb20vMnUzRVhDWC5wbmcnIC8+CjwvYXJ0aWNsZT4=|YXJ0aWNsZSB7CiAgcG9zaXRpb246IHJlbGF0aXZlOwogIHdpZHRoOiAyNTBweDsKICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7Cn0KCmFydGljbGUgaW1nOmZpcnN0LWNoaWxkIHsKICBib3gtc2hhZG93OiAwIDYwcHggNjBweCAtNjBweCByZ2JhKDAsIDMwLCAyNTUsIDAuNSk7CiAgYm9yZGVyLXJhZGl1czogNHB4OwogIG9iamVjdC1maXQ6IGNvdmVyOwogIHdpZHRoOiAxMDAlOwp9CgphcnRpY2xlIGltZzpsYXN0LWNoaWxkIHsKICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgd2lkdGg6IDIwMHB4OwogIGJvdHRvbTogMDsKICBsZWZ0OiAwOwogIHJpZ2h0OiAwOwogIG1hcmdpbjogYXV0bzsKICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjUlKTsKICB0cmFuc2l0aW9uOiAuM3MgZWFzZTsKICBvcGFjaXR5OiAwOwp9CgphcnRpY2xlOmhvdmVyIHsKICB0cmFuc2Zvcm06CiAgICBwZXJzcGVjdGl2ZSgyNTBweCkKICAgIHJvdGF0ZVgoMTBkZWcpCiAgICB0cmFuc2xhdGVZKC01JSkKICAgIHRyYW5zbGF0ZVooMCk7Cn0KCmFydGljbGU6OmJlZm9yZSB7CiAgY29udGVudDogJyc7CiAgcG9zaXRpb246IGFic29sdXRlOwogIGJvdHRvbTogMDsKICBoZWlnaHQ6IDEwMCU7CiAgd2lkdGg6IDEwMCU7CiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KAogICAgdG8gYm90dG9tLAogICAgdHJhbnNwYXJlbnQgMTAlLAogICAgcmdiYSgwLCAwLCAwLCAwLjUpIDUwJSwKICAgIHJnYmEoMCwgMCwgMCkgOTUlCiAgKTsKICBvcGFjaXR5OiAwOwogIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTsKfQoKYXJ0aWNsZTpob3Zlcjo6YmVmb3JlIHsKICBvcGFjaXR5OiAxOwp9CgphcnRpY2xlOmhvdmVyIGltZzpsYXN0LWNoaWxkIHsKICBvcGFjaXR5OiAxOwogIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMCUpOwp9CgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgpib2R5IHsKICBiYWNrZ3JvdW5kOiAjMDAwOwogIHBhZGRpbmc6IDM2cHg7CiAgYm94LXNpemluZzogYm9yZGVyLWJveDsKfQ==|
*/
