/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './experience.css';

const Experience = () => {
    const[toggleState, setToggleState] = useState(false);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <div className="section experience section" id="experience">
        <h2 className="section__title">Experience 💼</h2>
        <span className="section__subtitle">What I work as</span>

        <div className="exp__container container grid">
            <div className="exp__content">
                <div>
                    <i className="uil uil-briefcase-alt exp__icon"></i>
                    <h3 className="exp__title">Intern <br /> ERP & CMS Departments</h3>
                </div>

                <div>
                    <span className="exp__comp">Pakistan Oilfields Limited (POL)</span>
                </div>

                <span className="exp__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 1 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">Intern – ERP & CMS Departments <br /> Jul'25 - Aug'25</h3>
                        <p className="exp__modal-description">
                            Pakistan Oilfields Limited (POL) | Morgah, Rawalpindi
                        </p>

                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Worked with Oracle E-Business Suite (EBS) modules including General Ledger, Payables, Receivables, Inventory, and Asset Management.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Assisted in website development using React (frontend) and MySQL (backend).</p>
                            </li>

                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Troubleshot PCs, installed operating systems & software, and configured network devices.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Designed a network layout diagram for POL, mapping switches and connectivity with other stations.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="exp__content">
                <div>
                    <i className="uil uil-search-alt exp__icon"></i>
                    <h3 className="exp__title">SEO <br /> Executive</h3>
                </div>

                <div>
                    <span className="exp__comp">99 Technologies</span>
                </div>

                <span className="exp__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 2 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">SEO Executive <br /> Jun'24 - Dec'24</h3>
                        <p className="exp__modal-description">
                            99 Technologies | Islamabad, Pakistan
                        </p>

                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Specialized in Search Engine Optimization within digital marketing sector for six months.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Contributed to growth of company through effective SEO strategies and techniques.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Performed on-page optimizations such as meta tags, page titles, internal linking, to maximize SEO performance.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <i className="uil uil-check-circle exp__modal-icon"></i>
                                <p className="exp__modal-info">Contributed to off-page optimization activities such as link building, link reclamation and outreach.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience