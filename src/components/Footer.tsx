import { FaFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="container">
          <div className="footer-container">
            <div className="footer-section">
                <h3 className="footer-section-title">Categories</h3>
                <Link to={`/category/Vegetarian`} className="footer-item">Vegetarian</Link>
                <Link to={`/category/Beef`} className="footer-item">Beef</Link>
                <Link to={`/category/Miscellaneous`} className="footer-item">Beef</Link>
                <Link to={`/category/Seafood`} className="footer-item">Seafood</Link>
                <Link to={`/category/Pork`} className="footer-item">Pork</Link>
                <Link to={`/category/ Dessert`} className="footer-item">Dessert</Link>
            </div>
            <div className="footer-section">
                <h3 className="footer-section-title">Customer Service</h3>
                <Link to='#' className="footer-item">Contact Us</Link>
                <Link to='#' className="footer-item">Shipping Policy</Link>
                <Link to='#' className="footer-item">Returns and Exchanges</Link>
                <Link to='#' className="footer-item">FAQs</Link>
            </div>
            <div className="footer-section">
                <h3 className="footer-section-title">About Us</h3>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
            </div>
            <div className="footer-section">
                <h3 className="footer-section-title">Follow US</h3>
                <p className="footer-item"><strong>Email:</strong> <a href="mailto:nbmblueeye@gmail.com">nbmblueeye@gmail.com</a></p>
                <p className="footer-item"><strong>Phone:</strong><a href="tel:+932300415">0932300415</a></p>
                <div className="footer-item-box">
                  <Link to='#' className="footer-item media facebook"><FaFacebook size={24}/></Link>
                  <Link to='#' className="footer-item media twitter"><FaTwitterSquare size={24}/></Link>
                  <Link to='#' className="footer-item media instagram"><FaInstagram size={24}/></Link>
                  <Link to='#' className="footer-item media youtube"><FaYoutube size={24}/></Link>
                </div>
            </div>
          </div>
          <div className="footer-section-coppy-right">
              <p>&copy; CopyRight {`${new Date().getFullYear()} nbmblueeye@gmail.com`}</p>
          </div>
      </div>
    </div>
  )
}

export default Footer