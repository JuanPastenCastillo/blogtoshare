import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { BackSVG } from "../../assets/icons"
import { BackComponentWrapper } from "./styles/BackComponentWrapper.js"

export const BackComponent = (parameters) => {
  const router = useRouter()
  const { asPath } = router

  const [routeToPush, setRouteToPush] = useState(asPath)

  useEffect(() => {
    const routeFormatted = routeToPush.split("/").slice(0, -1).join("/")
    setRouteToPush(routeFormatted)
  }, [])

  const handlePush = (e) => {
    if (e.key === "Enter") {
      router.push(routeToPush)
    } else if (e.type === "click") {
      router.push(routeToPush)
    }
  }

  return (
    <BackComponentWrapper
      onClick={handlePush}
      tabIndex={0}
      onKeyDown={handlePush}>
      <BackSVG />
    </BackComponentWrapper>
  )
}
