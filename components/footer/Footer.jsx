/* eslint-disable no-unused-vars */
import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">&lt;Syed Mustafa Hussain/&gt;</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://instagram.com/mustafa__shahjee?igshid=OGQ5ZDc2ODk2ZA==" className="footer__social-link" target="_blank">
                    <i className="bx bxl-instagram"></i>
                </a>

                <a
                    href="https://www.facebook.com/profile.php?id=100009203236248&mibextid=ZbWKwL"
                    className="footer__social-link" target="_blank" rel="noreferrer"
                    >
                    <i className="bx bxl-facebook"></i>
                    </a>


                <a href="https://github.com/SYED-MUSTAFA5" className="footer__social-link" target="_blank">
                    <i className="bx bxl-github"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; Syed Mustafa. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer