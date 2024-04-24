// Write your code here
import './index.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'

const Header = () => {
  return (
    <div className="nav">
      <div className="nav-content">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
            alt="website logo"
          />
        </Link>
        <Popup
          modal
          trigger={
            <button>
              <GiHamburgerMenu size="30" data-testid="hamburgerIconButton" />
            </button>
          }
          className="popup-content"
        >
          {close => (
            <div className="modal-container">
              <button
                onClick={() => close()}
                className="lol"
                data-testid="closeButton"
              >
                <IoMdClose size="30" />
              </button>
              <ul>
                <li>
                  <Link to="/" onClick={() => close()}>
                    <AiFillHome size="30" className="bol" />
                    <p>Home</p>
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={() => close()}>
                    <BsInfoCircleFill size="30" className="bol" />
                    <p>About</p>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </Popup>
      </div>
    </div>
  )
}
export default withRouter(Header)
