import React from 'react';
import {Helmet} from 'react-helmet';
import TUMI_LOGO from '../images/tumi-logo.png';
import {Link} from 'gatsby';

const Footer = _ => {
    return (
        <>
            <div className="footer-container">
                <section className="latest-news">
                    <div className="row hide-for-large">
                        <div className="small-10 small-centered medium-4 columns">
                            <Link id="site-logo" className='Tumi-logo' to="/">
                                <img src={TUMI_LOGO} alt="Tumi Staffing, Inc."/>
                            </Link>
                        </div>
                        <div className="column">
                            <hr className="black"/>
                        </div>
                    </div>
                    <div className="row clearfix heading-row">
                        <div className="small-6 columns">
                            <h4>Latest News</h4>
                        </div>
                        <div className="small-6 columns text-uppercase text-right">
                            <p><a href="https://www.whitelodging.com/news-events/">News &amp; Events</a></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="news-release">
                            <p><a href="https://www.whitelodging.com/white-lodging-announces-general-manager-for-new-austin-marriott-downtown/"><time datetime="2019-05-30">05.30.2019</time></a></p>
                            <p>White Lodging is excited to introduce David Meisner as the general manager for the Austin Marriott Downtown, which is slated to open its doors in summer 2020. David is currently&hellip;</p>
                        </div>
                        <div className="news-release">
                            <p><a href="https://www.whitelodging.com/springhill-suites-by-marriott-opens-doors-in-westfield-indiana/"><time datetime="2019-05-22">05.22.2019</time></a></p>
                            <p>Guests can expect the unexpected at the new 150-suite hotel
                                Marriott International announced today that the SpringHill Suites by Marriott in Westfield, Indiana is now open. The 150-suite hotel, located&hellip;
                            </p>
                        </div>
                        <div className="news-release">
                            <p><a href="https://www.whitelodging.com/white-lodging-names-kevin-croy-general-manager-of-the-new-hampton-inn-suites-fort-wayne-downtown/"><time datetime="2019-05-13">05.13.2019</time></a></p>
                            <p>White Lodging has named Kevin Croy to lead the Hampton Inn &amp; Suites Fort Wayne Downtown team as general manager. The new 136-room Hampton Inn &amp; Suites is scheduled to&hellip;</p>
                        </div>
                    </div>
                </section>
                <footer id="site-footer">
                    <div className="row">
                        <div className="small-12 large-3 columns show-for-large">
                            <Link id="site-logo" className='Tumi-logo' to="/">
                                <img src={TUMI_LOGO} alt="Tumi Staffing, Inc."/>
                            </Link>
                        </div>
                        <div className="small-12 large-offset-1 large-8 columns">
                            <div className="row">
                                <div className="small-8 medium-6 large-4 columns text-uppercase">
                                    <ul className="menu simple">
                                        <li><a href="https://www.whitelodging.com/contact/">Contact us</a></li>
                                    </ul>
                                </div>
                                <div className="small-4 medium-6 large-8 columns float-right">
                                    <ul className="utility-links text-uppercase">
                                        <ul id="menu-footer" className="menu">
                                            <li id="menu-item-106" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-106"><a href="https://www.whitelodging.com/careers/">Careers</a></li>
                                            <li id="menu-item-361" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-361"><a href="https://www.whitelodging.com/news-events/">Media</a></li>
                                            <li id="menu-item-109" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-109"><a href="https://www.whitelodging.com/sitemap/">Sitemap</a></li>
                                            <li id="menu-item-1458" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1458"><a href="https://www.whitelodging.com/privacy-policy/">Privacy Policy</a></li>
                                        </ul>
                                    </ul>
                                </div>
                                <div className="small-8 medium-6 columns two-column-text" data-mh="footer-columns">
                                    <p>701 E 83rd Avenue<br />
                                        Merrillville, Indiana 46410
                                    </p>
                                    <p>(219) 472-2900</p>
                                </div>
                                <div className="small-12 medium-6 columns">
                                    <div className="row">
                                        <div className="small-10 small-centered medium-6 medium-uncentered columns text-center medium-text-left" data-mh="footer-columns">
                                            <p><a href="/" target="_blank">&copy;</a> 2019 TUMI Staffing, Inc. All rights reserved</p>
                                        </div>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            <Helmet>
                <script src={'js/app-original.js'} />
                <script src={'js/app.js'} />
            </Helmet>
        </>
    );
}

export default Footer;