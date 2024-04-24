// Write your code here
import './index.css'
import Header from '../Header'
const About = () => {
  return (
    <>
      <Header />
      <div className="dol">
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
          className="img"
          alt="about"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
          className="img"
          alt="about"
        />
      </div>
    </>
  )
}
export default About
