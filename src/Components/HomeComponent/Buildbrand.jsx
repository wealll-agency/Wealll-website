import React, { useEffect } from 'react'

const Buildbrand = () => {

    useEffect(() => {
        let spanAnimated = false;
        function runAnimationsIfVisible() {
            let scrollPosition = $(window).scrollTop() + $(window).height();
            let $spanSection = $(".head-animtion");
            if ($spanSection.length) {
                let spanOffset = $spanSection.offset().top;
                if (scrollPosition >= spanOffset && !spanAnimated) {
                    spanAnimated = true;
                    let $spans = $(".head-animtion b span");
                    let index = 0;
                    setInterval(() => {
                        $spans.removeClass("active");
                        index = (index + 1) % $spans.length;
                        $spans.eq(index).addClass("active");
                    }, 3000);
                }
            }
        }
        $(window).on("scroll", runAnimationsIfVisible);
        runAnimationsIfVisible();
    }, [])


    useEffect(() => {
        var elementSelector = $('.count');
        elementSelector.each(function () {
            elementSelector.appear(function (e) {
                var el = this;
                var updateData = $(el).attr("data-count");
                var od = new Odometer({
                    el: el,
                    format: 'd',
                    duration: 5000
                });
                od.update(updateData);
            });
        });

    }, [])

    return (
        <>
            <section className="gnt-build-brands">
                <div className="container">
                    <div className='row justify-content-center'>
                        <div className='col-lg-12'>
                            <div className="title head-animtion">
                                <h2>We build brands for
                                    <b> <span className="">Billion-Dollar Goals</span>
                                        <span className="">Boardrooms</span>
                                        <span className="">Conglomerates</span>
                                        <span className="active">Corporates</span>
                                        <span className="">Enterprises</span>
                                        <span className="">Industrial Giants</span>
                                        <span className="">Serious Growth</span>
                                        <span className="">Strategic Impact</span> </b>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className='row brand_row'>
                        <div className='col-lg-5'>
                            <div className="brands-count-main">
                                <div className="brands-count-box">
                                    <h3>
                                        <span className="count" data-count="80">80</span>
                                        <span>+</span>
                                    </h3>
                                    <p>Creative minds</p>
                                </div>
                                <div className="brands-count-box">
                                    <h3>
                                        <span className="count" data-count="35">35</span>
                                        <span>+</span>
                                    </h3>
                                    <p>Industries</p>
                                </div>
                                <div className="brands-count-box">
                                    <h3>
                                        <span className="count" data-count="450">450</span>
                                        <span>+</span>
                                    </h3>
                                    <p>Granthalaya Community</p>
                                </div>
                                <div className="brands-count-box">
                                    <h3>
                                        <span className="count" data-count="550">550</span>
                                        <span>+</span>
                                    </h3>
                                    <p>Clients served from 25+ countries</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-7'>
                            <div className="brands-main">
                                <div className="brands-box">
                                    <h4>B2B-First Philosophy</h4>
                                    <p>We specialize in complex buying cycles, layered stakeholders, and trust-based decision-making.</p>
                                </div>
                                <div className="brands-box">
                                    <h4>Industry Expertise</h4>
                                    <p>Pharma, Infrastructure, Enterprise Tech, Manufacturing, Financial Services, and more.</p>
                                </div>
                                <div className="brands-box">
                                    <h4>Built for Scale &amp; Structure</h4>
                                    <p>We thrive in regulated, process-driven corporate environments.</p>
                                </div>
                                <div className="brands-box">
                                    <h4>Creative Meets Corporate</h4>
                                    <p>From high level boardroom strategy to current social media trends, we do it all.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Buildbrand