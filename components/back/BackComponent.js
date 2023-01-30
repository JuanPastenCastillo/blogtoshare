import { useRouter } from "next/router"

export const BackComponent = (parameters) => {
  const router = useRouter()
  const {asPath} = router
  
  
  return (
    <div>
      BackComponent
    </div>
  )
}