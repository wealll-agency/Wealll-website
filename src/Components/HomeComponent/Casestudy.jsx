import React from 'react'
const testimonalImage = mediaUrl("assets/images/testimonal-bg.webp");
const brandimage1 = mediaUrl("assets/images/brand-identity.jpeg");
const brandimage2 = mediaUrl("assets/images/packaging.jpeg");
const brandimage3 = mediaUrl("assets/images/key-visual.jpeg");
const brandimage4 = mediaUrl("assets/images/POSM.jpeg");
const brandimage5 = mediaUrl("assets/Video/Wealll-Website-Creative-Section.mp4");
const brandimage6 = mediaUrl("assets/images/web-design.jpeg");
const brandimage7 = mediaUrl("assets/images/ecommerce-development.png");
const brandimage8 = mediaUrl("assets/images/personal-branding.png");
const brandimage9 = mediaUrl("assets/images/social-media-manage.jpeg");
const brandimage10 = mediaUrl("assets/images/barter-collaboration.jpeg");
const brandimage11 = mediaUrl("assets/images/paid-collaboration.jpeg");
const brandimage12 = mediaUrl("assets/images/podcast-collaboration.jpeg");
const brandimage13 = mediaUrl("assets/images/ugc-ads.jpeg");
import { mediaUrl } from "../../config/media";


const Casestudy = () => {

    const bgStyle = {
        backgroundImage: `url(${testimonalImage})`,
    };


    return (
        <>
            {/* Case Study Slider Start Desktop */}

            <div className="scroll-wrapper d-lg-block d-md-none d-none">

                <div>

                    <div className="section creative container bg-black bx-shadow-none" style={bgStyle}>

                        <div className="row align-items-center">

                            <div className="col-lg-6 order-lg-1 order-md-2 order-2">

                                <div className="left-panel1">

                                    <h2 className="creativeTxt">We Alll <span className="textGrad ">Creative</span> </h2>

                                    <ul id="points" className="nav nav-tabs" role="tablist">

                                        <li className="nav-item">

                                            <a className='nav-link active' data-bs-toggle="tab" href="#menu1">Brand Identity</a>

                                        </li>

                                        <li className='nav-item'>
                                            <a className='nav-link' data-bs-toggle="tab" href="#menu2">Packaging</a>
                                        </li>

                                        <li className='nav-item'>
                                            <a className='nav-link' data-bs-toggle="tab" href="#menu3"> Key Visuals & Communication </a>
                                        </li>

                                        <li className='nav-item'>
                                            <a className='nav-link' data-bs-toggle="tab" href="#menu4">POSM & Print</a>
                                        </li>

                                        <li className='nav-item'>
                                            <a className='nav-link' data-bs-toggle="tab" href="#menu5">Video & Animation</a>
                                        </li>

                                    </ul>

                                    <div id="progress-bar-container">

                                        <div className="progress-bar" id="progress-bar"></div>

                                    </div>

                                </div>

                            </div>

                            <div className="col-lg-6  order-lg-1 order-md-1 order-1">

                                <div className="right-panel1">
                                    <div className="tab-content">
                                        <div id="menu1" className="tab-pane active">
                                            <img src={brandimage1} alt="" loading="lazy" />
                                        </div>
                                        <div id="menu2" className="tab-pane fade">
                                            <img src={brandimage2} alt="" loading="lazy" />
                                        </div>
                                        <div id="menu3" className="tab-pane fade">
                                            <img src={brandimage3} alt="" loading="lazy" />
                                        </div>
                                        <div id="menu4" className="tab-pane fade">
                                            <img src={brandimage4} alt="" loading="lazy" />
                                        </div>
                                        <div id="menu5" className="tab-pane fade">
                                            <video src={brandimage5} autoPlay loop muted playsInline preload="metadata"></video>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="section creative container bg-black" style={bgStyle}>
                        <div className="row align-items-center">

                            <div className="col-lg-6 order-lg-1 order-md-2 order-2">

                                <div className="left-panel1">

                                    <h2 className="creativeTxt">We Alll <span className="textGrad redgrad">Technology</span>

                                    </h2>


                                    <ul id="points" className="nav nav-tabs" role="tablist">

                                        <li className="nav-item">
                                            <a className='nav-link active' data-bs-toggle="tab" href="#menu6">Web Design</a>
                                        </li>

                                        <li className='nav-item'>
                                            <a className='nav-link' data-bs-toggle="tab" href="#menu7">eCommerce Development</a>
                                        </li>

                                    </ul>

                                    <div id="progress-bar-container">

                                        <div className="progress-bar" id="progress-bar"></div>

                                    </div>

                                </div>

                            </div>

                            <div className="col-lg-6 order-lg-1 order-md-1 order-1">

                                <div className="right-panel1">
                                    <div className="tab-content">
                                        <div id="menu6" className="tab-pane active">
                                            <img src={brandimage6} alt="" loading="lazy" />
                                        </div>
                                        <div id="menu7" className="tab-pane fade">
                                            <img src={brandimage7} alt="" loading="lazy" />
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="section creative container bg-black" style={bgStyle}>
                        <div className="row align-items-center">

                            <div className="col-lg-6 order-lg-1 order-md-2 order-2">

                                <div className="left-panel1">

                                    <h2 className="creativeTxt">We Alll <span className="textGrad redgrad">Media</span>

                                    </h2>


                                    <ul id="points" className="nav nav-tabs" role="tablist">

                                        <li className="nav-item">
                                            <a className='nav-link active' data-bs-toggle="tab" href="#menu8">Personal Branding</a>
                                        </li>

                                        <li className='nav-item'>
                                            <a className='nav-link' data-bs-toggle="tab" href="#menu9">Social Media Management</a>
                                        </li>

                                    </ul>

                                    <div id="progress-bar-container">

                                        <div className="progress-bar" id="progress-bar"></div>

                                    </div>

                                </div>

                            </div>

                            <div className="col-lg-6 order-lg-1 order-md-1 order-1">

                                <div className="right-panel1">
                                    <div className="tab-content">
                                        <div id="menu8" className="tab-pane active">
                                            <img src={brandimage8} alt="" loading="lazy" />
                                        </div>
                                        <div id="menu9" className="tab-pane fade">
                                            <img src={brandimage9} alt="" loading="lazy" />
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="section creative container bg-black" style={bgStyle}>
                        <div className="row align-items-center">

                            <div className="col-lg-6 order-lg-1 order-md-2 order-2">

                                <div className="left-panel1">

                                    <h2 className="creativeTxt">We Alll <span className="textGrad redgrad">Collaboration</span>

                                    </h2>


                                    <ul id="points" className="nav nav-tabs" role="tablist">

                                        <li className="nav-item">
                                            <a className='nav-link active' data-bs-toggle="tab" href="#menu10">Barter Collaboration</a>
                                        </li>

                                        <li className='nav-item'>
                                            <a className='nav-link' data-bs-toggle="tab" href="#menu11">Paid Collaboration</a>
                                        </li>

                                        <li className='nav-item'>
                                            <a className='nav-link' data-bs-toggle="tab" href="#menu12">Podcast Collaboration</a>
                                        </li>

                                        <li className='nav-item'>
                                            <a className='nav-link' data-bs-toggle="tab" href="#menu13">UGC Ads</a>
                                        </li>

                                    </ul>

                                    <div id="progress-bar-container">

                                        <div className="progress-bar" id="progress-bar"></div>

                                    </div>

                                </div>

                            </div>

                            <div className="col-lg-6 order-lg-1 order-md-1 order-1">

                                <div className="right-panel1">
                                    <div className="tab-content">
                                        <div id="menu10" className="tab-pane active">
                                            <img src={brandimage10} alt="" loading="lazy" />
                                        </div>
                                        <div id="menu11" className="tab-pane fade">
                                            <img src={brandimage11} alt="" loading="lazy" />
                                        </div>

                                        <div id="menu12" className="tab-pane fade">
                                            <img src={brandimage12} alt="" loading="lazy" />
                                        </div>
                                        <div id="menu13" className="tab-pane fade">
                                            <img src={brandimage13} alt="" loading="lazy" />
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>


                </div>

            </div>

            {/* Case Study Slider End Desktop */}

            {/* Case Study Slider Start Mobile */}

            <section className="mobileCasestudy d-lg-none d-md-block d-block">

                <div className="container">

                    <div className="row">

                        <div className="col-lg-12">

                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">

                                <li className="nav-item" role="presentation">

                                    <button className="nav-link active" id="pills-creative-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-creative" type="button" role="tab"
                                        aria-controls="pills-creative" aria-selected="true">

                                        <div className="tabName crea-tab">

                                            <h5><span className="tab-1">Creative</span> </h5>

                                        </div>

                                    </button>

                                </li>

                                <li className="nav-item" role="presentation">

                                    <button className="nav-link" id="pills-tech-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-tech" type="button" role="tab" aria-controls="pills-tech"
                                        aria-selected="false">

                                        <div className="tabName tech-tab">

                                            <h5><span className="tab-2">Technology</span></h5>

                                        </div>

                                    </button>

                                </li>

                                <li className="nav-item" role="presentation">

                                    <button className="nav-link" id="pills-media-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-media" type="button" role="tab" aria-controls="pills-media"
                                        aria-selected="false">

                                        <div className="tabName med-tab">

                                            <h5><span className="tab-3">Media</span></h5>

                                        </div>

                                    </button>

                                </li>

                            </ul>

                            <div className="tab-content" id="pills-tabContent">

                                <div className="tab-pane fade show active" id="pills-creative" role="tabpanel"
                                    aria-labelledby="pills-creative-tab">

                                    <div className="section creative bg-black">

                                        <div className="container">

                                            <div className="row align-items-center">

                                                <div className="col-lg-6 order-lg-1 order-md-2 order-2">

                                                    <div className="left-panel1">

                                                        <h2 className="creativeTxt">We Alll <span className="textGrad ">Creative</span> </h2>

                                                        <ul id="points" className="nav nav-tabs" role="tablist">

                                                            <li className="nav-item">

                                                                <a className='nav-link active' data-bs-toggle="tab" href="#mobilemenu1">Brand Identity</a>

                                                            </li>

                                                            <li className='nav-item'>
                                                                <a className='nav-link' data-bs-toggle="tab" href="#mobilemenu2">Packaging</a>
                                                            </li>

                                                            <li className='nav-item'>
                                                                <a className='nav-link' data-bs-toggle="tab" href="#mobilemenu3"> Key Visuals & Communication </a>
                                                            </li>

                                                            <li className='nav-item'>
                                                                <a className='nav-link' data-bs-toggle="tab" href="#mobilemenu4">POSM & Print</a>
                                                            </li>

                                                            <li className='nav-item'>
                                                                <a className='nav-link' data-bs-toggle="tab" href="#mobilemenu5">Video & Animation</a>
                                                            </li>

                                                        </ul>

                                                        <div id="progress-bar-container">

                                                            <div className="progress-bar" id="progress-bar"></div>

                                                        </div>

                                                    </div>

                                                </div>

                                                <div className="col-lg-6  order-lg-1 order-md-1 order-1">

                                                    <div className="right-panel1">
                                                        <div className="tab-content">
                                                            <div id="mobilemenu1" className="tab-pane active">
                                                                <img src={brandimage1} alt="" loading="lazy" />
                                                            </div>
                                                            <div id="mobilemenu2" className="tab-pane fade">
                                                                <img src={brandimage2} alt="" loading="lazy" />
                                                            </div>
                                                            <div id="mobilemenu3" className="tab-pane fade">
                                                                <img src={brandimage3} alt="" loading="lazy" />
                                                            </div>
                                                            <div id="mobilemenu4" className="tab-pane fade">
                                                                <img src={brandimage4} alt="" loading="lazy" />
                                                            </div>
                                                            <div id="mobilemenu5" className="tab-pane fade">
                                                                <video src={brandimage5} autoPlay loop muted playsInline preload="metadata"></video>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className="tab-pane fade" id="pills-tech" role="tabpanel" aria-labelledby="pills-tech-tab">

                                    <div className="ttab-content-item">

                                        <div className="section creative bg-black">

                                            <div className="container">

                                                <div className="row align-items-center">

                                                    <div className="col-lg-6 order-lg-1 order-md-2 order-2">

                                                        <div className="left-panel1">

                                                            <h2 className="creativeTxt">We Alll <span className="textGrad redgrad">Technology</span></h2>

                                                            <ul id="points" className="nav nav-tabs" role="tablist">

                                                                <li className="nav-item">
                                                                    <a className='nav-link active' data-bs-toggle="tab" href="#mobilemenu6">Web Design</a>
                                                                </li>

                                                                <li className='nav-item'>
                                                                    <a className='nav-link' data-bs-toggle="tab" href="#mobilemenu7">eCommerce Development</a>
                                                                </li>

                                                            </ul>

                                                            <div id="progress-bar-container">

                                                                <div className="progress-bar" id="progress-bar"></div>

                                                            </div>

                                                        </div>

                                                    </div>

                                                    <div className="col-lg-6 order-lg-1 order-md-1 order-1">

                                                        <div className="right-panel1">
                                                            <div className="tab-content">
                                                                <div id="mobilemenu6" className="tab-pane active">
                                                                    <img src={brandimage6} alt="" loading="lazy" />
                                                                </div>
                                                                <div id="mobilemenu7" className="tab-pane fade">
                                                                    <img src={brandimage7} alt="" loading="lazy" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className="tab-pane fade" id="pills-media" role="tabpanel"
                                    aria-labelledby="pills-media-tab">

                                    <div className="ttab-content-item">

                                        <div className="section creative bg-black">

                                            <div className="container">

                                                <div className="row align-items-center">

                                                    <div className="col-lg-6 order-lg-1 order-md-2 order-2">

                                                        <div className="left-panel1">

                                                            <h2 className="creativeTxt">We Alll <span className="textGrad redgrad">Media</span></h2>

                                                            <ul id="points" className="nav nav-tabs" role="tablist">

                                                                <li className="nav-item">
                                                                    <a className='nav-link active' data-bs-toggle="tab" href="#mobilemenu8">Personal Branding</a>
                                                                </li>

                                                                <li className='nav-item'>
                                                                    <a className='nav-link' data-bs-toggle="tab" href="#mobilemenu9">Social Media Management</a>
                                                                </li>

                                                            </ul>

                                                            <div id="progress-bar-container">

                                                                <div className="progress-bar" id="progress-bar"></div>

                                                            </div>

                                                        </div>

                                                    </div>

                                                    <div className="col-lg-6 order-lg-1 order-md-1 order-1">

                                                        <div className="right-panel1">
                                                            <div className="tab-content">
                                                                <div id="mobilemenu8" className="tab-pane active">
                                                                    <img src={brandimage8} alt="" loading="lazy" />
                                                                </div>
                                                                <div id="mobilemenu9" className="tab-pane fade">
                                                                    <img src={brandimage9} alt="" loading="lazy" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Case Study Slider Start Mobile */}

        </>
    )
}

export default Casestudy