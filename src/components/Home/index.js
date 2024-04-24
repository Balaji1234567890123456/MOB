// Write your code here
import './index.css'
import Header from '../Header'
const Home = () => {
  return (
    <>
      <Header />
      <div className="mol">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
          className="img2"
          alt="home"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
          className="img2"
          alt="home"
        />
      </div>
    </>
  )
}
export default Home
