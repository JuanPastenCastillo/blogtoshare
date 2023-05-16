import { useEffect, useRef, useState } from "react"
import { AccessibilityIconSVG } from "../../assets/icons/index.js"
import { textSize } from "../../utils/AccessibilityConst.js"
import { AccessibilityControlsWrapper } from "./styles/AccessibilityControlsWrapper.js"

const nameToCloseTheFilters = "nameToCloseTheFilters-AccessibilityControls"

export const AccessibilityControls = () => {
  const [show, setShow] = useState(false)
  const handleShow = () => {
    setShow((prevState) => !prevState)
  }

  const [widthParent, setWidthParent] = useState()
  const getWidthRef = useRef(null)
  useEffect(() => {
    const width = getWidthRef.current.offsetWidth
    setWidthParent(width)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (show && !event.target.closest(`.${nameToCloseTheFilters}`)) {
        setShow(false)
      }
    }

    const handleScroll = () => {
      if (show) {
        setShow(false)
      }
    }

    window.addEventListener("mousedown", handleClickOutside)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousedown", handleClickOutside)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [show])

  /* 
  !FH0
  Create accessibility feature
  Use as reference firefox and edge reader tools. I like most the edge browser tool.
  Add always a "set to default" button or something
  
  - Make the toggle disappear y the user scroll when is open
  */

  const [value, setValue] = useState(textSize)

  function handleChange(event) {
    setValue(event.target.value)
  }
  useEffect(() => {
    console.log("value:", textSize[value])
  }, [value])

  return (
    <AccessibilityControlsWrapper
      show={show}
      accessibilityIconWidth={AccessibilityIconSVG().props.width}
      ref={getWidthRef}
      width={widthParent}
      className={nameToCloseTheFilters}>
      <div>
        <label>Text size</label>
        <input
          type="range"
          min="0"
          max={textSize.length - 1}
          step="1"
          onChange={handleChange}
        />
        <p>Actual size: {textSize[value]}</p>
      </div>

      <p>Text spacing (toggle)</p>
      <p>Line height → right plus, left less (should have a limit)</p>
      <p>Font-style: toggles with the name. Candidates: Calibri, Sitka, Comic sans, sans-serif, Serif</p>
      <p>Margin x-axis → right plus, left less (should have a limit) </p>
      <p>Zoom in, Zoom out → right plus, left less (should have a limit) </p>
      <p>Colors: light, dark, sepia (others maybe)</p>
      <button onClick={handleShow}>
        <AccessibilityIconSVG />
      </button>
    </AccessibilityControlsWrapper>
  )
}
