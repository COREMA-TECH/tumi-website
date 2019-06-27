import React from 'react';
import {Helmet} from 'react-helmet';
import TUMI_LOGO from '../images/tumi-logo-white.png';
import SMBS_LOGO from '../images/smbs-white-logo.png';
import {Link} from 'gatsby';

const Footer = _ => {
    return (
        <>
            <div className="footer-container">                
                <footer id="site-footer" className="Footer">
                    <div className="row">
                        <div className="small-12 large-3 columns show-for-large">
                            <Link id="site-logo" className='Tumi-logo' to="/">
                                <img src={TUMI_LOGO} alt="Tumi Staffing, Inc."/>
                            </Link>
                        </div>
                        <div className="small-12 large-offset-1 large-8 columns">
                            <div className="row">
                                <div className="small-12 columns text-center">
                                    <ul className="utility-links text-uppercase">
                                        <ul id="menu-footer" className="menu">
                                            <li id="menu-item-106" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-106"><Link to="/">Home</Link></li>
                                            <li id="menu-item-361" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-361"><Link to="/services">Services</Link></li>
                                            <li id="menu-item-109" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-109"><Link to="/compliance">Compliance</Link></li>
                                            <li id="menu-item-109" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-109"><Link to="/about-us">About Us</Link></li>
                                            <li id="menu-item-1458" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1458"><Link to="/connections">Connections</Link></li>
                                            <li id="menu-item-1458" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1458"><Link to="/employment">Employment</Link></li>
                                        </ul>
                                    </ul>
                                </div>
                                <div className="small-12 columns text-right" data-mh="footer-columns">
                                    <p>&copy; 2012 Tumi Staffing, Inc PO Box 592715 San Antonio, TX 78259</p>
                                    <p>(512) 772-4090</p>
                                    <p><a href="mailto:info@tumistaffing.com">info@tumistaffing.com</a></p>
                                </div>                                
                            </div>
                        </div>
                    </div>
                    <div className="row Smbs">
                        <div className="small-12 columns">
                            <div className="text-center Smbs-copyright">
                                <p>Powered by Smbs Solutions &copy;</p>
                            </div>
                            <a id="smbs-logo" className='Smbs-logo' href="http://smbssolutions.com/" target="_blank" rel="noopener noreferrer">
                                <img className='Tumi-img-responsive' src={SMBS_LOGO} alt="SMBS"/>
                            </a>                            
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