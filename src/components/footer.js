import React from 'react';
import {Helmet} from 'react-helmet';
import TUMI_LOGO from '../images/tumi-logo.png';
import {Link} from 'gatsby';

const Footer = _ => {
    return (
        <>
            <div className="footer-container">                
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
                                        <li><Link to="/connections">Contact Us</Link></li>
                                    </ul>
                                </div>
                                <div className="small-4 medium-6 large-8 columns float-right">
                                    <ul className="utility-links text-uppercase">
                                        <ul id="menu-footer" className="menu">
                                            <li id="menu-item-106" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-106"><Link to="/">Home</Link></li>
                                            <li id="menu-item-361" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-361"><Link to="/services">Services</Link></li>
                                            <li id="menu-item-109" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-109"><Link to="/compliance">Compliance</Link></li>
                                            <li id="menu-item-1458" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1458"><Link to="/employment">Employment</Link></li>
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