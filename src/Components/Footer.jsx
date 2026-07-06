import React from 'react'
import { Link } from "react-router-dom";
const MainLogo = mediaUrl("assets/images/Wealll_new.png");
const ReviewImage1 = mediaUrl("assets/images/f-clutch-review_result.webp");
const ReviewImage2 = mediaUrl("assets/images/f-glassdoor-review_result.webp");
const ReviewImage3 = mediaUrl("assets/images/f-google-review_result.webp");
const GoogleStar = mediaUrl("assets/images/star-google_result.webp");
const AmbitionBox = mediaUrl("assets/images/ambitionbox.png");
import { mediaUrl } from "../config/media";


const Footer = () => {
    return (
        <>
            <footer className='footerForm position-relative'>
                <div className='container'>
                    <div className='row custom-mar-footer'>
                        <div className='col-xl-3 col-lg-5 col-md-6 col-sm-12 col-12 mobile-set-line order-xl-1 order-lg-1 order-md-1 order-sm-1 order-1'>
                            <div className='phoneWrap'>
                                <div className='ptf-animated-block'>
                                    <h6 className="footerTitle">Address</h6>
                                    <div className="mainBlk">
                                        <p>Unit 8A, 4th Floor, Tower 1, Globsyn Crystal, Salt Lake Electronics Complex, Street No. 17, EP Block, Sector V, Kolkata – 700091, West Bengal, India
                                        </p>
                                    </div>

                                    <div className='footer_contact_info'>
                                        <h6 className="footerTitle">Connect Us</h6>
                                        <ul>
                                            <li>
                                                <span className='contact_icon'><i className="fa-solid fa-phone-volume"></i> </span>
                                                <a href="tel:+91 82408 58613">+91 82408 58613</a>
                                            </li>
                                            <li>
                                                <span className='contact_icon'><i className="fa-brands fa-whatsapp"></i> </span>
                                                <a href="https://wa.me/918240858613?" target='_blank'>+91 82408 58613</a>
                                            </li>
                                            <li>
                                                <span className='contact_icon'><i className="fa-regular fa-envelope"></i></span>
                                                <a href="mailto:amit@wealll.com">amit@wealll.com</a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>



                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 order-xl-2 order-lg-3 order-md-1 order-sm-2 order-2 hire_col">

                            <div className="addWrap-2">
                                <h5 className="footerTitle">Hire Us</h5>
                                <div className='hire_links'>
                                    <ul className="footer_menu-1">
                                        <li><a href="#">Hire Digital Marketing Expert </a></li>
                                        <li><a href="#">Hire Social Media Expert</a></li>
                                        <li><a href="#">Hire SEO Expert</a></li>
                                        <li><a href="#">Hire Logo Designer </a></li>
                                        <li><a href="#">Hire UI/UX Designer </a></li>
                                        <li><a href="#">Hire Mern Stack Developer </a></li>
                                        <li><a href="#">Hire Ecommerce Developer </a></li>
                                    </ul>
                                    <ul className="footer_menu-1">
                                        <li><a href="#">Hire Digital Marketing Expert </a></li>
                                        <li><a href="#">Hire Social Media Expert</a></li>
                                        <li><a href="#">Hire SEO Expert</a></li>
                                        <li><a href="#">Hire Logo Designer </a></li>
                                        <li><a href="#">Hire UI/UX Designer </a></li>
                                        <li><a href="#">Hire Mern Stack Developer </a></li>
                                        <li><a href="#">Hire Ecommerce Developer </a></li>
                                    </ul>
                                </div>




                            </div>

                        </div>



                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5 col-6 order-xl-4 order-lg-4 order-md-4 order-sm-5 order-5">

                            <div className="socialWrap">

                                <h5 className="footerTitle">Social Media</h5>

                                <div className="social-links d-flex align-items-center justify-content-lg-start justify-content-center">

                                    <ul>
                                        <li> <a href="https://www.linkedin.com/company/we-alll/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                        <li> <a href="https://www.facebook.com/people/We-Alll/61556163594429/" target="_blank"><i className="fa-brands fa-facebook"></i></a></li>
                                        <li> <a href="https://www.instagram.com/wealll_official/" target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
                                        <li> <a href="https://www.youtube.com/@WeAlll-Digital" target="_blank"><i className="fa-brands fa-youtube"></i></a></li>
                                        <li> <a href="https://g.co/kgs/y7nFvQc" target="_blank"><i className="fa-solid fa-location-dot"></i></a></li>

                                    </ul>

                                </div>

                                <div className="review-box-inner">
                                    <ul>
                                        <li>
                                            <a href="#" target="_blank">
                                                <img src={ReviewImage1} alt="F Clutch Review Result" loading="lazy" />
                                                <div className="replte-inner">
                                                    <div className="replte-star">
                                                        <img src={GoogleStar} alt="Star Google Result" loading="lazy" />
                                                    </div>
                                                    <div className="replte-count">
                                                        <h5>(4.9/5)</h5>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <img src={ReviewImage2} alt="F Glassdoor Review Result" loading="lazy" />
                                                <div className="replte-inner">
                                                    <div className="replte-star">
                                                        <img src={GoogleStar} alt="Star Google Result" loading="lazy" />
                                                    </div>
                                                    <div className="replte-count">
                                                        <h5>(4.9/5)</h5>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <img src={ReviewImage3} alt="F Google Review Result" loading="lazy" />
                                                <div className="replte-inner">
                                                    <div className="replte-star">
                                                        <img src={GoogleStar} alt="Star Google Result" loading="lazy" />
                                                    </div>
                                                    <div className="replte-count">
                                                        <h5>(4.9/5)</h5>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <img src={AmbitionBox} alt="Ambition Box" loading="lazy" />
                                                <div className="replte-inner">
                                                    <div className="replte-star">
                                                        <img src={GoogleStar} alt="Star Google Result" loading="lazy" />
                                                    </div>
                                                    <div className="replte-count">
                                                        <h5>(4.9/5)</h5>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                        </div>


                    </div>

                    <div className="container footer-padding-3">

                        <div className="row align-items-center foooter-pad-btm">

                            <div className="col-lg-4 col-md-4 col-sm-12 col-12 order-lg-1 order-md-1 order-sm-1 order-1">

                                <div className="footer-logo">

                                    <a href="/" className="w--current">
                                        <img className="footer-logo" src={MainLogo} alt="" loading="lazy" /></a>

                                </div>

                            </div>

                            <div className="col-lg-4 col-md-5 col-sm-12 col-12 order-lg-1 order-md-1 order-sm-3 order-3">

                                <p className="copyright"> ©2023-{new Date().getFullYear()} We Alll. All Rights Reserved. <span style={{ marginLeft: "5px", fontWeight: "600", opacity: 0.8 }}>{__APP_VERSION__}</span></p>

                            </div>

                            <div className="col-lg-4 col-md-3 col-sm-12 col-12 order-lg-2 order-md-2 order-sm-2 order-2">

                                <div className="footer__menu">

                                    <nav>
                                        <ul>
                                            <li className="active"><Link to="/terms">Terms</Link></li>
                                            <li><Link to="/privacy-policy">Privacy</Link></li>
                                        </ul>

                                    </nav>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer