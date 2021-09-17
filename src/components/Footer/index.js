import React from 'react'
import "./style.css"
/**
* @author
* @function Footer
**/

const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="grid">
                <div className="footer__wrapper">
                    <div className="footer__content">
                        <div className="col l-2 m-2 c-12">
                            <span className="footer__heading">STORE</span>
                            <ul className="footer__list">
                                <li className="footer__item"><a className="footer__link" href="#">Shop All</a></li>
                                <li className="footer__item"><a className="footer__link" href="#">Shipping &amp; Returns</a></li>
                                <li className="footer__item"><a className="footer__link" href="#">Store Policy</a></li>
                                <li className="footer__item"><a className="footer__link" href="#">FAQ</a></li>
                            </ul>
                        </div>
                        <div className="col l-3 m-3 c-12">
                            <span className="footer__heading">ADDRESS</span>
                            <ul className="footer__list">
                                <li className="footer__item">Sh500 Terry Francois Street</li>
                                <li className="footer__item">San Francisco, CA 94158</li>
                            </ul>
                        </div>
                        <div className="col l-3 m-3 c-12">
                            <span className="footer__heading">OPENING HOURS</span>
                            <ul className="footer__list">
                                <li className="footer__item">Mon - Fri: 7am - 10pm</li>
                                <li className="footer__item">Saturday: 8am - 10pm</li>
                                <li className="footer__item">Sunday: 8am - 11pm</li>
                            </ul>
                        </div>
                        <div className="col l-4 m-4 c-12">
                            <span className="footer__heading">GET IT FRESH</span>
                            <label className="footer__email" htmlFor="email">Email*</label>
                            <input type="email" id="email" className="footer__input-email" />
                            <button className="footer__btn">SUBSCRIBE NOW</button>
                        </div>
                    </div>
                    <div className="footer__text">
                        <div className="col l-8 m-8 c-12">
                            <span className="text__new">© 2023 by Fresh Market. Proudly created with <a href="#">Abc.com</a></span>
                        </div>
                        <div className="col l-4 m-4 c-12">
                            <ul className="list__icon">
                                <li><a href="#"><i className="fab fa-youtube" /></a></li>
                                <li><a href="#"><i className="fab fa-instagram" /></a></li>
                                <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )

}

export default Footer