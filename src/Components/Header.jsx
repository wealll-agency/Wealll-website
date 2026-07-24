import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const MainLogo = mediaUrl("assets/images/Wealll_new.png");
const MiniLogo = mediaUrl("assets/images/Wealll_mini.png");
const navCall = mediaUrl("assets/images/nav-call.svg");
const menuImg = mediaUrl("assets/images/menu.svg");
const menuclose = mediaUrl("assets/images/close-m.svg");

const megamenu1 = mediaUrl("assets/images/megamenu1.png");
const megamenu2 = mediaUrl("assets/images/megamenu2.png");
const megamenu3 = mediaUrl("assets/images/megamenu3.png");
const megamenu4 = mediaUrl("assets/images/megamenu4.png");
const megamenu5 = mediaUrl("assets/images/megamenu5.png");
const megamenu6 = mediaUrl("assets/images/megamenu6.png");
const megamenu7 = mediaUrl("assets/images/megamenu7.png");
const megamenu8 = mediaUrl("assets/images/megamenu8.png");
import { mediaUrl } from "../config/media";

const Header = () => {
  useEffect(() => {
    $(".menu-item-has-children > a").on("click", function (e) {
      if ($(window).width() <= 991) {
        e.preventDefault();
        e.stopPropagation();
        let $li = $(this).parent("li");
        let $submenu = $(this).siblings("div");
        if ($li.hasClass("open-menu")) {
          $li.removeClass("open-menu");
          $submenu.slideUp("slow");
        } else {
          $(".menu-item-has-children").removeClass("open-menu");
          $(".menu-item-has-children div").slideUp("slow");
          $li.addClass("open-menu");
          $submenu.slideDown("slow");
        }
      }
    });
    if ($(window).width() <= 991) {
      $(".menu-item-has-children>.mega-menu-inner .nav-tab > li").removeClass(
        "show",
      );
    }
    $(".menu-item-has-children .mega-menu-inner .nav-tab > li > a").on(
      "click",
      function (e) {
        e.preventDefault(); // prevent navigation
        e.stopPropagation();
        let $parent = $(this).parent("li");
        if ($parent.hasClass("show")) {
          $parent.removeClass("show");
        } else {
          $parent.siblings().removeClass("show");
          $parent.addClass("show");
        }
      },
    );

    $(".mega-menu-inner .nav-box .menu-item a").on("click", function () {
      if ($(window).width() <= 991) {
        $(".nav-close").trigger("click");
      }
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="nav-group">
          <div className="navbar">
            <div className="navlogo-full-wrap w-inline-block">
              <div className="navlogo-full-mask">
                <Link to="/">
                  <img src={MainLogo} alt="Logo" className="navlogo-full" loading="lazy" />
                </Link>
              </div>
              <Link to="/">
                <img src={MiniLogo} alt="Logo" className="navlogo-mark" loading="lazy" />
              </Link>
            </div>

            <div className="navbar-menu">
              <div className="navbar-menu-inner">
                <div className="navbar-link-item w-inline-block ">
                  <Link to="/about" className="navbar-link-text">
                    About Us
                  </Link>
                </div>

                <div className="navbar-link-item w-inline-block">
                  <div className="navbar-link-text position-relative menu-item-has-children hover-mnu-reveal">
                    <a href="#/" onClick={(e) => e.preventDefault()}>
                      Services
                    </a>

                    <div className="mega-menu-inner">
                      <ul className="mega-menu">
                        <li>
                          <ul className="nav-tab">
                            <li className="show">
                              <a href="#">
                                <img src={megamenu4} alt="" loading="lazy" />
                                <span>Digital Marketing</span>
                              </a>
                              <ul className="nav-box">
                                <li className="menu-item">
                                  <Link to="/digital-marketing">
                                    <span>Digital Marketing</span>
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/social-media-marketing">
                                    <span>Social Media Marketing</span>
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/seo-services">
                                    <span>Search Engine Optimisation</span>
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/whatsapp-marketing">
                                    <span>WhatsApp Marketing</span>
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/email-marketing">
                                    <span>Email Marketing</span>
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/360-marketing">
                                    360° Marketing
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">
                                <img src={megamenu1} alt="" loading="lazy" />
                                <span>Content Creation</span>
                              </a>
                              <ul className="nav-box">
                                <li className="menu-item">
                                  <Link to="/content-marketing">
                                    <span>Content Marketing</span>
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/script-writing">
                                    <span>Script Writing</span>
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/blogs">
                                    <span>Blog Writing</span>
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/article-writing">
                                    <span>Article Writing</span>
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/mailers">
                                    <span>Mails Content Writing</span>
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/ecommerce-product-description">
                                    <span>Product description</span>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">
                                <img src={megamenu3} alt="" loading="lazy" />
                                <span>Experience Design</span>
                              </a>
                              <ul className="nav-box">
                                <li className="menu-item">
                                  <Link to="/logo-designing">
                                    Logo Designing
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/portfolio-design">
                                    Portfolio design
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/presentation">Presentation</Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/advertising-campaign-assets">
                                    Advertising campaign assets
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/product-packaging">
                                    Product Packaging
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/event-branding-assets">
                                    Event branding assets
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/investors-deck">
                                    Investor&#8217;s deck
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/branding-design">
                                    Branding Design
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">
                                <img src={megamenu2} alt="" loading="lazy" />
                                <span>Video Production</span>
                              </a>
                              <ul className="nav-box">
                                <li className="menu-item">
                                  <Link to="/ad-films">
                                    Ad films (Promotionals &#038; Portfolio)
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/corporate-films-documentaries">
                                    Corporate Films/Documentaries
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/exhibition-videos">
                                    Exhibition videos
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/platform-explanatory-videos">
                                    Platform explanatory videos
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/platform-flagship-videos">
                                    Platform flagship videos
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/product-faq-videos">
                                    Product FAQ videos
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/success-stories">
                                    Success stories
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/television-commercials">
                                    Television Commercials
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/testimonial-videos">
                                    Testimonial videos
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">
                                <img src={megamenu7} alt="" loading="lazy" />
                                <span>PR Services</span>
                              </a>
                              <ul className="nav-box">
                                <li className="menu-item">
                                  <Link to="/crisis-management">
                                    Crisis Management
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/media-relations">
                                    Media Relations
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/press-release">
                                    Press releases (Print/Digital)
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/reputation-management">
                                    Reputation Management
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">
                                <img src={megamenu8} alt="" loading="lazy" />
                                <span>Influencer Marketing</span>
                              </a>
                              <ul className="nav-box">
                                <li className="menu-item">
                                  <Link to="/barter-collaboration">
                                    Barter Collaboration
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/paid-collaboration">
                                    Paid Collaboration
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/podcast-collaboration">
                                    Podcast Collaboration
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/affiliate-collaboration">
                                    Affiliate Collaboration
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/ugc-collaboration">
                                    UGC Collaboration
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/instagram-reel-collaboration">
                                    Instagram Collaboration
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/youtube-integration-collaboration">
                                    YouTube Collaboration
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">
                                <img src={megamenu5} alt="" loading="lazy" />
                                <span>Development</span>
                              </a>
                              <ul className="nav-box">
                                {/* <li className="menu-item">
                                  <Link to="/ui-development">
                                    UI/UX Development
                                  </Link>
                                </li> */}
                                <li className="menu-item">
                                  <Link to="/website-development">
                                    Website Development
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/wordpress-developer">
                                    WordPress Development
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/ecommerce-development">
                                    E-commerce Development
                                  </Link>
                                </li>

                                <li className="menu-item">
                                  <Link to="/woocommerce-development">
                                    Woocommerce Development
                                  </Link>
                                </li>

                                <li className="menu-item">
                                  <Link to="/shopify-development">
                                    Shopify Development
                                  </Link>
                                </li>

                                <li className="menu-item">
                                  <Link to="/mern-stack-development">
                                    Mern Stack Development
                                  </Link>
                                </li>

                                <li className="menu-item">
                                  <Link to="/laravel-developer">
                                    Laravel Development
                                  </Link>
                                </li>

                                <li className="menu-item">
                                  <Link to="/mobile-app-development">
                                    Mobile App Development
                                  </Link>
                                </li>

                                {/* <li className="menu-item">
                                  <Link to="/html-developers">
                                    HTML, CSS, JS Development
                                  </Link>
                                </li> */}
                              </ul>
                            </li>
                            <li>
                              <a href="#">
                                <img src={megamenu6} alt="" loading="lazy" />
                                <span>Page Recovery</span>
                              </a>
                              <ul className="nav-box">
                                <li className="menu-item">
                                  <Link to="/facebook-page-recovery">Facebook Page Recovery</Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/gmb-suspension">GMB Suspension</Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/ownership-recovery">
                                    Ownership Recovery
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                    {/* <div className="dropdown">

                                    <ul className="list-unstyled">

                                        <li>

                                            <a href="branding-agency-kolkata">Branding</a>

                                        </li>

                                        <li> <a href="web-design-company-kolkata">Web Design</a>

                                        </li>

                                        <li> <a href="digital-marketing-agency-kolkata">Digital Marketing</a>

                                        </li>

                                    </ul>

                                </div> */}
                  </div>
                </div>

                <div className="navbar-link-item w-inline-block ">
                  <Link to="/blog" className="navbar-link-text">
                    Blog
                  </Link>
                </div>

                <div className="navbar-link-item w-inline-block ">
                  <Link to="/career" className="navbar-link-text">
                    Careers
                  </Link>
                </div>

                <div className="navbar-link-item w-inline-block ">
                  <Link to="/contact" className="navbar-link-text">
                    Contact Us
                  </Link>
                </div>
              </div>

              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className="btn-wrap greentowhite nav-btn w-inline-block"
              >
                <div className="btn-inner navbnt">
                  <div className="btn-main greentowhite nav-ani">
                    <div className="btn-text">DISCUSS A PROJECT</div>
                  </div>
                </div>
              </a>
            </div>

            <div className="nav-mobile">
              <div className="navbody">
                <a
                  data-w-id="c81135b2-e306-3de0-cea8-a4d8f2746292"
                  href="#"
                  className="nav-menu-logo-link w-inline-block"
                >
                  <img src={MainLogo} alt="Logo" className="navlogo-full" loading="lazy" />
                </a>

                <div
                  data-w-id="bfc164ca-3c26-14ba-d6b1-6177cde85246"
                  className="nav-close"
                >
                  <img
                    src={menuclose}
                    loading="lazy"
                    alt="Icon Close X"
                    className="navclose-icon"
                  />
                </div>

                {/* 
                        <div className="nav-item-link mobile-drop w-inline-block">

                            <div className="nav-item-text">

                                Services

                                <span className="dropdown-icon"><i className="ri-add-line"></i></span>

                                <span className="dropdown-icon"><i className="ri-subtract-fill"></i></span>


                            </div>

                            <div className="dropdown-mob">

                                <ul className="list-unstyled">

                                    <li><a href="branding-agency-kolkata">Branding</a></li>

                                    <li><a href="web-design-company-kolkata">Web Design</a></li>

                                    <li><a href="digital-marketing-agency-kolkata">Digital Marketing</a></li>

                                </ul>

                            </div>

                        </div> */}

                <ul
                  id="menu-main-menu navbar-menu"
                  className="navbar-nav mx-auto"
                >
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-224152 nav-item">
                    <a href="#" className="nav-item-link">
                      Services
                    </a>
                    <div className="mega-menu-inner">
                      <ul className="mega-menu">
                        <li>
                          <ul className="nav-tab">
                            <li className="show">
                              <a href="#">
                                <img src={megamenu4} alt="" loading="lazy" />
                                <span>Digital Marketing</span>
                              </a>

                              <ul className="nav-box">
                                <li className="menu-item">
                                  <Link to="/digital-marketing">
                                    <span>Digital Marketing</span>
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/social-media-marketing">
                                    <span>Social Media Marketing</span>
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/seo-services">
                                    <span>Search Engine Optimisation</span>
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/whatsapp-marketing">
                                    <span>WhatsApp Marketing</span>
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/email-marketing">
                                    <span>Email Marketing</span>
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/360-marketing">
                                    360° Marketing
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">
                                <img src={megamenu1} alt="" loading="lazy" />
                                <span>Content Creation</span>
                              </a>
                              <ul className="nav-box">
                                <li className="menu-item">
                                  <Link to="/content-marketing">
                                    <span>Content Marketing</span>
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/script-writing">
                                    <span>Script Writing</span>
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/blogs">
                                    <span>Blog Writing</span>
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/article-writing">
                                    <span>Article Writing</span>
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/mailers">
                                    <span>Mails Content Writing</span>
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/ecommerce-product-description">
                                    <span>Product description</span>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">
                                <img src={megamenu3} alt="" loading="lazy" />
                                <span>Experience Design</span>
                              </a>
                              <ul className="nav-box">
                                <li className="menu-item">
                                  <Link to="/logo-designing">
                                    Logo Designing
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/portfolio-design">
                                    Portfolio design
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/presentation">Presentation</Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/advertising-campaign-assets">
                                    Advertising campaign assets
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/product-packaging">
                                    Product Packaging
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/event-branding-assets">
                                    Event branding assets
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/investors-deck">
                                    Investor&#8217;s deck
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/branding-design">
                                    Branding Design
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">
                                <img src={megamenu2} alt="" loading="lazy" />
                                <span>Video Production</span>
                              </a>
                              <ul className="nav-box">
                                <li className="menu-item">
                                  <Link to="/ad-films">
                                    Ad films (Promotionals &#038; Portfolio)
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/corporate-films-documentaries">
                                    Corporate Films/Documentaries
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/exhibition-videos">
                                    Exhibition videos
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/platform-explanatory-videos">
                                    Platform explanatory videos
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/platform-flagship-videos">
                                    Platform flagship videos
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/product-faq-videos">
                                    Product FAQ videos
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/success-stories">
                                    Success stories
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/television-commercials">
                                    Television Commercials
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/testimonial-videos">
                                    Testimonial videos
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">
                                <img src={megamenu7} alt="" loading="lazy" />
                                <span>PR Services</span>
                              </a>
                              <ul className="nav-box">
                                <li className="menu-item">
                                  <Link to="/crisis-management">
                                    Crisis Management
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/media-relations">
                                    Media Relations
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/press-release">
                                    Press releases (Print/Digital)
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/reputation-management">
                                    Reputation Management
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">
                                <img src={megamenu8} alt="" loading="lazy" />
                                <span>Influencer Marketing</span>
                              </a>
                              <ul className="nav-box">
                                <li className="menu-item">
                                  <Link to="/barter-collaboration">
                                    Barter Collaboration
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/paid-collaboration">
                                    Paid Collaboration
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/podcast-collaboration">
                                    Podcast Collaboration
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/affiliate-collaboration">
                                    Affiliate Collaboration
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/ugc-collaboration">
                                    UGC Collaboration
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/instagram-reel-collaboration">
                                    Instagram Collaboration
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/youtube-integration-collaboration">
                                    YouTube Collaboration
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">
                                <img src={megamenu5} alt="" loading="lazy" />
                                <span>Development</span>
                              </a>
                              <ul className="nav-box">
                                {/* <li className="menu-item">
                                  <Link to="/ui-development">
                                    UI/UX Development
                                  </Link>
                                </li> */}
                                <li className="menu-item">
                                  <Link to="/website-development">
                                    Website Development
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/wordpress-developer">
                                    WordPress Development
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/ecommerce-development">
                                    E-commerce Development
                                  </Link>
                                </li>

                                <li className="menu-item">
                                  <Link to="/woocommerce-development">
                                    Woocommerce Development
                                  </Link>
                                </li>

                                <li className="menu-item">
                                  <Link to="/shopify-development">
                                    Shopify Development
                                  </Link>
                                </li>

                                <li className="menu-item">
                                  <Link to="/mern-stack-development">
                                    Mern Stack Development
                                  </Link>
                                </li>

                                <li className="menu-item">
                                  <Link to="/laravel-developer">
                                    Laravel Development
                                  </Link>
                                </li>

                                <li className="menu-item">
                                  <Link to="/mobile-app-development">
                                    Mobile App Development
                                  </Link>
                                </li>


                                {/* <li className="menu-item">
                                  <Link to="/html-developers">
                                    HTML, CSS, JS Development
                                  </Link>
                                </li> */}
                              </ul>
                            </li>
                            <li>
                              <a href="#">
                                <img src={megamenu6} alt="" loading="lazy" />
                                <span>Page Recovery</span>
                              </a>
                              <ul className="nav-box">
                                <li className="menu-item">
                                  <Link to="/facebook-page-recovery">Facebook Page Recovery</Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/gmb-suspension">GMB Suspension</Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/ownership-recovery">
                                    Ownership Recovery
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className="menu-item">
                    <Link to="/about" className="nav-item-link w-inline-block">
                      <div className="nav-item-text">About Us</div>
                    </Link>
                  </li>

                  <li className="menu-item">
                    <Link to="/career" className="nav-item-link w-inline-block">
                      <div className="nav-item-text">Careers</div>
                    </Link>
                  </li>

                  <li className="menu-item">
                    <Link to="/contact" className="nav-item-link w-inline-block">
                      <div className="nav-item-text">Contact Us</div>
                    </Link>
                  </li>

                  <li className="menu-item">
                    <Link to="/blog" className="nav-item-link w-inline-block">
                      <div className="nav-item-text">Blog</div>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/career" className="nav-item-link w-inline-block">
                      <div className="nav-item-text">Careers</div>
                    </Link>
                  </li>
                </ul>
              </div>

              <div
                data-w-id="3381c287-9947-e365-7067-fd4935256394"
                className="navbtn-wrap mobile-tab-none"
              >
                <img
                  src={menuImg}
                  loading="lazy"
                  alt=""
                  className="navbtn-icon"
                />
              </div>

              <a href="tel:+919007295096">
                <div
                  data-w-id="3381c287-9947-e365-7067-fd4935256394"
                  className="navbtn-wrap dk-show"
                >
                  <img
                    src={navCall}
                    loading="lazy"
                    alt=""
                    className="navbtn-icon"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div
          data-w-id="50ab8146-de5b-2d73-65a6-48e823c948ec"
          className="topmarker"
        ></div>
      </div>
    </>
  );
};

export default Header;
