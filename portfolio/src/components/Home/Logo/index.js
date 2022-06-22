import './index.scss'
import Logok from '../../../assets/images/logok.png'
import { useEffect, useRef } from 'react'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap-trial'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()
  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)
    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })
    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  })

  return (
    <>
    <div className="logo-container">
      <img className="solid-logo" src={Logok} alt="K" />
      <svg
        width="550pt"
        height="879pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlnsXlink="http://www.w3.org/200/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1-.1)"
          fill="none"
        ></g>
      </svg>
    </div>
    </>
  )
}
export default Logo
