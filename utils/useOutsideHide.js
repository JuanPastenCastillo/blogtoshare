import { useEffect } from "react"

export const useOutsideHide = (ref, handleStateOutside, howMuchDelay = 0) => {
  useEffect(() => {
    setTimeout(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          handleStateOutside(false)
        }
      }

      document.addEventListener("mousedown", handleClickOutside)

      return () => {
        document.removeEventListener("mousedown", handleClickOutside)

      }
    }, howMuchDelay)
  }, [ref])
}
