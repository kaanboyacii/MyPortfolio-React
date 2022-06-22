import './index.sass'
import Loader from 'react-loaders'
const About = () => {
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>About Me</h1>
          <p>
            Hi I'm student at Karabuk University. My Department is Computer
            Engineering
          </p>
        </div>
      </div>
      <Loader type="square-spin" />
    </>
  )
}
export default About
