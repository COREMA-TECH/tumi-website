import React from "react"

import GGWA_LOGO_WHITE from '../images/GGWA_WINNER_Logo_2019_White.png';

const NavBlock = _ => {
    return (
        <>
            <nav id="site-menu" className="top-bar">
                <div className="row clearfix collapse">
                    <div className="small-6 columns">
                        <a id="site-logo" href="https://www.whitelodging.com">
                            <svg className="logo-mark" role="img" title="White Lodging Logo Mark" viewBox="0 0 31.39 27.95">
                                <use href="#logo-mark">
                            </svg>
                            <span className="logo-text-wrapper">
                                <svg className="logo-text" role="img" title="White Lodging Logo Type" viewBox="0 0 230 18">
                                    <use href="#logo-text"> 
                                </svg>
                            </span>
                        </a>
                    </div>
                    <div className="small-6 columns text-right">
                        <div className="cta-wrapper apply-now-wrapper">
                            <a className="border-btn" href="https://css-whitelodging-prd.inforcloudsuite.com/hcm/CandidateSelfService/controller.servlet?dataarea=hcm&context.session.key.JobBoard=EXTERNAL&context.session.key.HROrganization=75" target="_blank">Apply Now</a>
                        </div>
                        <a id="menu-toggle" data-toggle="site-body">
                            <span className="menu-inner"></span>
                            <p className="menu-title">Menu</p>
                        </a>
                    </div>
                </div>
                <div className="expanded-content">
                    <div className="navigation-container row large-collapse clearfix">
                        <div className="wl-award-block show-for-large">
                            <img src={GGWA_LOGO_WHITE} alt=""/>
                            <div className="wl-award-block-btn">
                                <a href="https://www.whitelodging.com/white-lodging-named-one-of-gallups-great-workplaces-for-second-straight-year" target="_blank">Learn More</a>
                            </div>
                        </div>
                        <div className="small-12 large-9 columns">
                            <div className="row large-collapse">
                                <div className="small-12 large-4 columns">
                                    <nav id="primary">
                                        <ul className="menu vertical">
                                            <li className="menu-item-page-cta"><a href="https://css-whitelodging-prd.inforcloudsuite.com/hcm/CandidateSelfService/controller.servlet?dataarea=hcm&context.session.key.JobBoard=EXTERNAL&context.session.key.HROrganization=75"  target="_blank">Apply Now</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                                                <a href="https://www.whitelodging.com/careers/">Careers<span className="expand-toggle"></span></a>
                                                <ul className="sub-menu">
                                                    <li><a href="https://www.whitelodging.com/careers/#why-white-lodging">Why White Lodging</a></li>
                                                    <li><a href="https://www.whitelodging.com/careers/#success-stories">Success Stories</a></li>
                                                    <li><a href="https://www.whitelodging.com/careers/#locations">LOCATIONS</a></li>
                                                    <li><a href="https://www.whitelodging.com/careers/#apply">APPLY</a></li>
                                                    <li><a href="https://www.whitelodging.com/careers/#new-grads-interns">New Grads & Interns</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                                                <a href="https://www.whitelodging.com/story/">Story<span className="expand-toggle"></span></a>
                                                <ul className="sub-menu">
                                                    <li><a href="https://www.whitelodging.com/story/#chairmans-message">chairmans message</a></li>
                                                    <li><a href="https://www.whitelodging.com/story/#history">History</a></li>
                                                    <li><a href="https://www.whitelodging.com/story/#team">Team</a></li>
                                                    <li><a href="https://www.whitelodging.com/story/#responsibility">Responsibility</a></li>
                                                    <li><a href="https://www.whitelodging.com/story/#milestones">milestones</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                                                <a href="https://www.whitelodging.com/services/">Services<span className="expand-toggle"></span></a>
                                                <ul className="sub-menu">
                                                    <li><a href="https://www.whitelodging.com/services/#investment-development">Investment Development</a></li>
                                                    <li><a href="https://www.whitelodging.com/services/#hotel-developments">Hotel Developments</a></li>
                                                    <li><a href="https://www.whitelodging.com/services/#f-b-innovation">F&B Innovation</a></li>
                                                    <li><a href="https://www.whitelodging.com/services/#f-b-concepts">F&B Concepts</a></li>
                                                    <li><a href="https://www.whitelodging.com/services/#management">management</a></li>
                                                </ul>
                                            </li>
                                            <li className='menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-has-children'>
                                                <a href='https://www.whitelodging.com/portfolio/hotels/'>Portfolio<span className="expand-toggle"></span></a>
                                                <ul className='sub-menu'>
                                                    <li className='menu-item menu-item-type-post_type menu-item-object-page'><a href='https://www.whitelodging.com/portfolio/hotels/'>Hotels</a></li>
                                                    <li className='menu-item menu-item-type-post_type menu-item-object-page'><a href='https://www.whitelodging.com/portfolio/restaurants/'>Restaurants</a></li>
                                                </ul>
                                            </li>
                                            <li className='menu-item menu-item-type-post_type menu-item-object-page'><a href='https://www.whitelodging.com/contact/'>Contact</a></li>
                                            <li className='menu-item menu-item-type-post_type menu-item-object-page'><a href='https://www.whitelodging.com/news-events/'>News &#038; Events</a></li>
                                            <li className='menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-has-children'>
                                                <a href='https://www.whitelodging.com/gallery/gallery-1/'>Gallery<span className="expand-toggle"></span></a>
                                                <ul className='sub-menu'>
                                                    <li className='menu-item menu-item-type-post_type menu-item-object-page'><a href='https://www.whitelodging.com/gallery/gallery-1/'>Portfolio</a></li>
                                                    <li className='menu-item menu-item-type-post_type menu-item-object-page'><a href='https://www.whitelodging.com/gallery/video-gallery/'>Video Gallery</a></li>
                                                    <li className='menu-item menu-item-type-post_type menu-item-object-page'><a href='https://www.whitelodging.com/whitelodgingeats/'>White Lodging Eats</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="wl-award-block hide-for-large">
                                        <img src={GGWA_LOGO_WHITE} alt="Galup Great Workplace Award 2019"/>
                                        <div className="wl-award-block-btn">
                                            <a href="https://www.whitelodging.com/white-lodging-named-one-of-gallups-great-workplaces-for-second-straight-year" target="_blank">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="show-for-large large-3 columns">
                            <div className="row collapse">
                                <div className="column">
                                    <h4>What To Watch</h4>
                                    <div className="pretty-embed" data-pe-videoid="YxrYGofYwhU" data-pe-fitvids="true"></div>
                                </div>
                            </div>
                            <div className="row collapse">
                                <div className="column">
                                    <h4>Latest News</h4>
                                    <div className="news-release">
                                        <p><a href="https://www.whitelodging.com/white-lodging-announces-general-manager-for-new-austin-marriott-downtown/"><time datetime="2019-05-30">05.30.2019</time></a></p>
                                        <p>White Lodging is excited to introduce David Meisner as the general manager for the Austin Marriott Downtown, which is slated to open its doors in summer 2020. David is currently&hellip;</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tweet row collapse">
                                <div className="column">
                                    <h4>From Twitter</h4>
                                    <p>We're excited to announce David Meisner as GM for the Austin Marriott Downtown, opening summer 2020. https://t.co/NUNSUQSueO <a href="http://twitter.com/whitelodging/status/1136271549714055168" target="_blank">https://t.co/deWHW0plSb</a> <time datetime="2019-06-05">- June 05, 2019 02:00PM</time></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="social">
                        <li><a className="icon-twitter" href="https://twitter.com/whitelodging"><span>twitter</span></a></li>
                        <li><a className="icon-instagram-filled" href="https://instagram.com/whitelodging"><span>instagram-filled</span></a></li>
                        <li><a className="icon-linkedin" href="http://www.linkedin.com/company/white-lodging-services"><span>linkedin</span></a></li>
                        <li><a className="icon-facebook" href="https://www.facebook.com/whitelodgingservices"><span>facebook</span></a></li>
                    </ul>
                </div>
            </nav>
            <div className="nav-bg">
                <div className="row rule-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div hidden className="hide">
                <svg xmlns="http://www.w3.org/2000/svg">
                    <symbol id="arrow-down-small" viewBox="0 0 10.49 14.06">
                        <polygon points="9 6.9 6.26 9.94 6.26 0 4.26 0 4.26 9.98 1.49 6.9 0 8.23 5.24 14.06 10.49 8.23 9 6.9"/>
                    </symbol>
                    <symbol id="arrow-down" viewBox="0 0 21.41 24.41">
                        <polygon points="20 12.29 11.71 20.59 11.71 0 9.71 0 9.71 20.59 1.41 12.29 0 13.71 10.71 24.41 21.41 13.71 20 12.29"/>
                    </symbol>
                    <symbol id="arrow-left-small" viewBox="0 0 14.06 10.49">
                        <polygon points="14.06 4.22 4.13 4.22 7.16 1.49 5.83 0 0 5.24 5.83 10.49 7.16 9 4.08 6.22 14.06 6.22 14.06 4.22"/>
                    </symbol>
                    <symbol id="arrow-left" viewBox="0 0 24.41 21.42">
                        <polygon points="10.7 21.42 12.12 20 3.82 11.71 24.41 11.71 24.41 9.71 3.82 9.71 12.12 1.42 10.7 0 0 10.71 10.7 21.42"/>
                    </symbol>
                    <symbol id="arrow-right-small" viewBox="0 0 14.06 10.49">
                        <polygon points="0 6.26 9.94 6.26 6.9 9 8.23 10.49 14.06 5.24 8.23 0 6.9 1.49 9.98 4.26 0 4.26 0 6.26"/>
                    </symbol>
                    <symbol id="arrow-right" viewBox="0 0 24.41 21.42">
                        <polygon points="13.71 0 12.29 1.42 20.59 9.71 0 9.71 0 11.71 20.59 11.71 12.29 20 13.71 21.42 24.41 10.71 13.71 0"/>
                    </symbol>
                    <symbol id="arrow-up-small" viewBox="0 0 10.49 14.06">
                        <polygon points="1.49 7.16 4.23 4.12 4.23 14.06 6.23 14.06 6.23 4.08 9 7.16 10.49 5.83 5.25 0 0 5.83 1.49 7.16"/>
                    </symbol>
                    <symbol id="arrow-up" viewBox="0 0 21.41 24.41">
                        <polygon points="1.41 12.12 9.7 3.82 9.7 24.41 11.7 24.41 11.7 3.82 20 12.12 21.41 10.7 10.7 0 0 10.7 1.41 12.12"/>
                    </symbol>
                    <symbol id="chevron-down" viewBox="0 0 10.69 7.28">
                        <polygon points="5.34 7.28 0 1.34 1.49 0 5.34 4.29 9.2 0 10.69 1.34 5.34 7.28"/>
                    </symbol>
                    <symbol id="close" viewBox="0 0 18.38 18.38">
                        <polygon points="18.39 1.41 16.97 0 9.19 7.78 1.41 0 0 1.41 7.78 9.19 0 16.97 1.41 18.39 9.19 10.61 16.97 18.39 18.39 16.97 10.61 9.19 18.39 1.41"/>
                    </symbol>
                    <symbol id="facebook" viewBox="0 0 20 20">
                        <path d="M18.9,0H1.1A1.1,1.1,0,0,0,0,1.1V18.9A1.1,1.1,0,0,0,1.1,20h9.58V12.25H8.08v-3h2.61V7a3.64,3.64,0,0,1,3.88-4,21.39,21.39,0,0,1,2.33.12v2.7H15.3c-1.25,0-1.5.6-1.5,1.47V9.24h3l-.39,3H13.8V20h5.1A1.1,1.1,0,0,0,20,18.9V1.1A1.1,1.1,0,0,0,18.9,0"/>
                    </symbol>
                    <symbol id="file" viewBox="0 0 14 18">
                        <path d="M10.33,0H0V18H14V4.8Zm-1,2,2.29,3H9V2ZM12,16H2V2H7V7h5Z"/>
                    </symbol>
                    <symbol id="instagram-filled" viewBox="0 0 20.23 20.16">
                        <path d="M20.16,5.11a6.8,6.8,0,0,0-.42-2.28,3.81,3.81,0,0,0-.92-1.41A3.81,3.81,0,0,0,17.4.5,6.8,6.8,0,0,0,15.12.07C13.82,0,13.44,0,10.15,0s-3.67,0-5,.07A6.8,6.8,0,0,0,2.9.5a3.81,3.81,0,0,0-1.41.92A3.81,3.81,0,0,0,.57,2.83,6.8,6.8,0,0,0,.14,5.11c-.06,1.3-.07,1.69-.07,5s0,3.67.07,5a6.8,6.8,0,0,0,.42,2.28,3.81,3.81,0,0,0,.92,1.41,3.81,3.81,0,0,0,1.41.92,6.8,6.8,0,0,0,2.28.42c1.3.06,1.69.07,5,.07s3.67,0,5-.07a6.8,6.8,0,0,0,2.28-.42,4.07,4.07,0,0,0,2.33-2.33A6.8,6.8,0,0,0,20.16,15c.06-1.3.07-1.69.07-5S20.22,6.41,20.16,5.11ZM10.41,14.2a3.86,3.86,0,1,1,3.86-3.86A3.86,3.86,0,0,1,10.41,14.2Zm5.36-7.83A1.39,1.39,0,1,1,17.16,5,1.39,1.39,0,0,1,15.77,6.37Z"/>
                    </symbol>
                    <symbol id="instagram" viewBox="0 0 24 23.99">
                        <path d="M23.92,7.05a8.81,8.81,0,0,0-.56-2.91A5.88,5.88,0,0,0,22,2,5.88,5.88,0,0,0,19.86.63,8.81,8.81,0,0,0,16.95.07C15.67,0,15.26,0,12,0S8.33,0,7.05.07A8.81,8.81,0,0,0,4.14.63,5.88,5.88,0,0,0,2,2,5.88,5.88,0,0,0,.63,4.14,8.81,8.81,0,0,0,.08,7.05C0,8.33,0,8.74,0,12s0,3.67.07,4.95a8.81,8.81,0,0,0,.56,2.91A5.88,5.88,0,0,0,2,22a5.88,5.88,0,0,0,2.12,1.38,8.81,8.81,0,0,0,2.91.56C8.33,24,8.74,24,12,24s3.67,0,4.95-.07a8.81,8.81,0,0,0,2.91-.56,6.13,6.13,0,0,0,3.51-3.51,8.81,8.81,0,0,0,.56-2.91C24,15.66,24,15.25,24,12S24,8.33,23.92,7.05Zm-2.16,9.79a6.64,6.64,0,0,1-.41,2.23,4,4,0,0,1-2.28,2.28,6.64,6.64,0,0,1-2.23.41c-1.26.06-1.64.07-4.85.07s-3.58,0-4.85-.07a6.64,6.64,0,0,1-2.23-.41,3.72,3.72,0,0,1-1.38-.9,3.72,3.72,0,0,1-.9-1.38,6.64,6.64,0,0,1-.41-2.23c-.06-1.26-.07-1.64-.07-4.85s0-3.58.07-4.85a6.64,6.64,0,0,1,.41-2.23,3.72,3.72,0,0,1,.9-1.38,3.72,3.72,0,0,1,1.38-.9,6.64,6.64,0,0,1,2.23-.41C8.42,2.17,8.8,2.16,12,2.16s3.58,0,4.85.07a6.64,6.64,0,0,1,2.23.41,3.72,3.72,0,0,1,1.38.9,3.72,3.72,0,0,1,.9,1.38,6.64,6.64,0,0,1,.41,2.23c.06,1.26.07,1.64.07,4.85S21.82,15.58,21.76,16.84ZM12,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.4,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.4,4.15Z"/>
                    </symbol>
                    <symbol id="link" viewBox="0 0 14 14">
                        <path d="M7.73,10.17l-.92.92A2.74,2.74,0,0,1,2.95,7.22l.92-.92A.82.82,0,0,0,2.7,5.14l-.92.92A4.38,4.38,0,0,0,8,12.25l.91-.92a.82.82,0,0,0,0-1.17A.84.84,0,0,0,7.73,10.17ZM9.67,4.37a.82.82,0,0,0-.58-.24.67.67,0,0,0-.58.24L4.3,8.57A.82.82,0,0,0,5.46,9.74L9.67,5.53a.82.82,0,0,0,0-1.16Zm2.52-2.52a4.39,4.39,0,0,0-6.2,0l-.92.92A.82.82,0,0,0,6.24,3.93L7.15,3A2.74,2.74,0,0,1,11,6.88l-.92.92A.82.82,0,1,0,11.27,9L12.19,8A4.39,4.39,0,0,0,12.19,1.85Z"/>
                    </symbol>
                    <symbol id="linkedin" viewBox="0 0 24 24.04">
                        <path d="M22.22,0H1.77A1.75,1.75,0,0,0,0,1.75V22.29A1.75,1.75,0,0,0,1.77,24H22.22A1.76,1.76,0,0,0,24,22.29V1.75A1.75,1.75,0,0,0,22.22,0ZM7.12,20.47H3.56V9H7.12Zm-1.78-13A2.06,2.06,0,1,1,7.4,5.39,2.06,2.06,0,0,1,5.34,7.45Zm15.11,13H16.89V14.9c0-1.33,0-3-1.85-3s-2.14,1.45-2.14,2.94v5.67H9.35V9h3.41v1.57h0a3.74,3.74,0,0,1,3.37-1.85c3.6,0,4.27,2.37,4.27,5.46Z"/>
                    </symbol>
                    <symbol id="logo-mark" viewBox="0 0 31.39 27.95">
                        <path d="M0,0,0,22.1c.22,6.24,6.12,5.09,6.12,5.09L6.12,4C5-.77,0,0,0,0ZM9.56,0l0,22.65c.22,6.39,6.12,5.22,6.12,5.22l0-23.77C14.53-.78,9.56,0,9.56,0ZM31.35,21.73l-6.1,0L25.23,0s-5-.78-6.11,4.06V15.72l0,12.24h10C31.87,27.73,31.35,21.73,31.35,21.73Z"/>
                    </symbol>
                    <symbol id="logo-text" viewBox="0 0 230 18">
                        <path d="M87.6,15.81H79.71V10H85.6a.77.77,0,0,0,.88-.84V8.67a.77.77,0,0,0-.88-.84H79.71V2.19h7.43A.77.77,0,0,0,88,1.35V.84Q88,0,87.14,0H78q-.88,0-.88.84V17.16q0,.84.88.84H87.6q.88,0,.88-.84v-.51Q88.47,15.81,87.6,15.81ZM41.24,0h-.83a.75.75,0,0,0-.83.84V7.93H30.32V.84A.74.74,0,0,0,29.48,0h-.81a.74.74,0,0,0-.83.84V17.16a.74.74,0,0,0,.83.84h.81a.74.74,0,0,0,.83-.84V10.1h9.26v7.06a.75.75,0,0,0,.83.84h.83a.73.73,0,0,0,.81-.84V.84A.73.73,0,0,0,41.24,0ZM22.32,0h-.89a.89.89,0,0,0-1,.74L17.25,13.21c-.24,1-.37,1.91-.37,1.91h-.05a15.72,15.72,0,0,0-.42-1.91L13,.71A.85.85,0,0,0,12.05,0h-.73a.89.89,0,0,0-1,.71L6.93,13.21a19.62,19.62,0,0,0-.44,1.91H6.44a17.32,17.32,0,0,0-.34-1.91L3,.74a.89.89,0,0,0-1-.74H1.16C.53,0,.27.33.4.92L4.66,17.26a.91.91,0,0,0,1,.74H7.06a.91.91,0,0,0,1-.71l3-11c.31-1.15.57-2.55.57-2.55h.08a25.52,25.52,0,0,0,.57,2.55l3,11a.9.9,0,0,0,.94.71h1.44a.89.89,0,0,0,1-.71L23.07.92C23.21.33,22.92,0,22.32,0Zm29.2,0h-.93q-1,0-1,.84V17.16q0,.84,1,.84h.93q1,0,1-.84V.84Q52.47,0,51.52,0ZM69.69,0H57.07q-.8,0-.8.84v.51a.74.74,0,0,0,.8.84h5.12v15c0,.56.27.84.78.84h.8a.74.74,0,0,0,.8-.84v-15h5.12c.51,0,.78-.31.78-.84V.84C70.47.28,70.21,0,69.69,0Zm42.58,15.81h-7.13V.84a.74.74,0,0,0-.83-.84h-.8a.74.74,0,0,0-.83.84V17.16a.74.74,0,0,0,.83.84h8.76a.75.75,0,0,0,.83-.84v-.51A.75.75,0,0,0,112.28,15.81ZM206.06,0h-.81a.75.75,0,0,0-.83.84V11.7c0,1,.15,2.6.15,2.6h-.05s-.83-1.63-1.46-2.6L195.48.56a1,1,0,0,0-1-.56h-1a.74.74,0,0,0-.83.84V17.16a.74.74,0,0,0,.83.84h.81a.74.74,0,0,0,.83-.84V6.32c0-1-.15-2.63-.15-2.63h.05s.83,1.63,1.46,2.63l7.61,11.12a1,1,0,0,0,1,.56h1a.74.74,0,0,0,.83-.84V.84A.74.74,0,0,0,206.06,0Zm22.75,9h-3.44a.74.74,0,0,0-.82.81v.49a.73.73,0,0,0,.82.81h2v2.44a6.62,6.62,0,0,1-5,2.24c-3.61,0-6.38-2.84-6.38-6.81a6.35,6.35,0,0,1,6.51-6.71,8,8,0,0,1,4.3,1.23A.76.76,0,0,0,228,3.25l.35-.52a.72.72,0,0,0-.17-1.11A10.36,10.36,0,0,0,222.43,0a8.76,8.76,0,0,0-8.91,9,8.61,8.61,0,0,0,8.58,9,7.35,7.35,0,0,0,5.39-2.17h0s0,.25,0,.54V17c0,.42.3.69.82.69h.47a.72.72,0,0,0,.82-.81V9.76A.73.73,0,0,0,228.82,9ZM185.1,0h-.93q-1,0-1,.84V17.16q0,.84,1,.84h.93q1,0,1-.84V.84Q186.05,0,185.1,0ZM146.2,0h-4.82q-.79,0-.79.84V17.16q0,.84.79.84h4.82c5.16,0,8.59-3.31,8.59-9S151.36,0,146.2,0ZM146,15.81h-3.1V2.19H146c3.79,0,6.31,2.37,6.31,6.78S149.84,15.81,146,15.81ZM176.66,9H173a.76.76,0,0,0-.86.81v.49a.75.75,0,0,0,.86.81h2.15v2.44a7.15,7.15,0,0,1-5.27,2.24A6.6,6.6,0,0,1,163.15,9,6.53,6.53,0,0,1,170,2.24a8.86,8.86,0,0,1,4.56,1.23.84.84,0,0,0,1.2-.22l.37-.52A.69.69,0,0,0,176,1.63,11.43,11.43,0,0,0,169.9,0c-5.42,0-9.43,3.9-9.43,9a8.85,8.85,0,0,0,9.09,9,8,8,0,0,0,5.71-2.17h.05s0,.25,0,.54V17c0,.42.31.69.86.69h.5q.86,0,.86-.81V9.76A.75.75,0,0,0,176.66,9ZM125,0a8.74,8.74,0,0,0-9,8.88,9,9,0,1,0,18,0A8.72,8.72,0,0,0,125,0Zm0,15.76a6.54,6.54,0,0,1-6.48-6.88,6.47,6.47,0,1,1,12.94,0C131.41,12.77,128.68,15.76,125,15.76Z"/>
                    </symbol>
                    <symbol id="mail" viewBox="0 0 28 20">
                        <path d="M22.74,5.57,14,10.94,5.26,5.57l-.52.85,5.2,3.19L7.06,12.26l.68.74,3.08-2.84,3.18,2,3.18-2L20.26,13l.68-.74L18.07,9.62l5.2-3.19ZM27,1.1A3.53,3.53,0,0,0,24.52,0H3.46A3.7,3.7,0,0,0,0,3.4V16.6A3.67,3.67,0,0,0,3.48,20H24.62a3.36,3.36,0,0,0,2.27-1A3.41,3.41,0,0,0,28,16.6V3.41A3.31,3.31,0,0,0,27,1.1ZM26,16.6a1.41,1.41,0,0,1-.48,1,1.43,1.43,0,0,1-1,.41h-21A1.68,1.68,0,0,1,2,16.6V3.4A1.74,1.74,0,0,1,3.48,2h21a1.58,1.58,0,0,1,1,.51A1.36,1.36,0,0,1,26,3.4Z"/>
                    </symbol>
                    <symbol id="search" viewBox="0 0 15.12 15.12">
                        <path d="M15.12,13.71,10.31,8.9A5.68,5.68,0,1,0,8.9,10.31l4.81,4.81ZM2,5.67A3.67,3.67,0,1,1,5.67,9.33,3.67,3.67,0,0,1,2,5.67Z"/>
                    </symbol>
                    <symbol id="twitter" viewBox="0 0 30 24">
                        <path d="M26.46,3.8A6.09,6.09,0,0,0,29.17.44a12.44,12.44,0,0,1-3.91,1.47A6.19,6.19,0,0,0,20.77,0a6.11,6.11,0,0,0-6.16,6.06,6,6,0,0,0,.16,1.38A17.57,17.57,0,0,1,2.09,1.11a6,6,0,0,0-.83,3A6,6,0,0,0,4,9.2a6.2,6.2,0,0,1-2.79-.76v.08a6.09,6.09,0,0,0,4.94,5.94,6.27,6.27,0,0,1-2.78.1,6.15,6.15,0,0,0,5.75,4.21,12.47,12.47,0,0,1-7.64,2.59A12.72,12.72,0,0,1,0,21.28,17.62,17.62,0,0,0,9.43,24,17.25,17.25,0,0,0,26.95,6.76q0-.39,0-.78A12.4,12.4,0,0,0,30,2.84,12.45,12.45,0,0,1,26.46,3.8Z"/>
                    </symbol>
                    <symbol id="white-lodging" viewBox="0 0 535.65 147.94">
                        <path d="M202.32,142.79H184.71v-13.5h13.15a1.76,1.76,0,0,0,2-2v-1.19a1.76,1.76,0,0,0-2-2H184.71V111h16.6a1.76,1.76,0,0,0,2-2v-1.19a1.74,1.74,0,0,0-2-2H180.85a1.74,1.74,0,0,0-2,2v38.07a1.73,1.73,0,0,0,2,2h21.47a1.73,1.73,0,0,0,2-2v-1.19A1.73,1.73,0,0,0,202.32,142.79Zm59.24-.67H244.66V107.2a1.74,1.74,0,0,0-2-2h-1.9a1.74,1.74,0,0,0-2,2v38.07a1.73,1.73,0,0,0,2,2h20.76a1.76,1.76,0,0,0,2-2v-1.19A1.76,1.76,0,0,0,261.55,142.11ZM118.92,105.91H117a1.74,1.74,0,0,0-2,2v38.07a1.73,1.73,0,0,0,2,2h1.9a1.73,1.73,0,0,0,2-2V107.87A1.74,1.74,0,0,0,118.92,105.91Zm-22.43,0h-2a1.76,1.76,0,0,0-2,2v16.54H70.74V107.87a1.74,1.74,0,0,0-2-2h-1.9a1.74,1.74,0,0,0-2,2v38.07a1.73,1.73,0,0,0,2,2h1.9a1.73,1.73,0,0,0,2-2V129.46H92.57v16.48a1.76,1.76,0,0,0,2,2h2a1.72,1.72,0,0,0,1.9-2V107.87A1.72,1.72,0,0,0,96.5,105.91Zm68.82,0H134.51a1.74,1.74,0,0,0-2,2v1.19a1.76,1.76,0,0,0,2,2H147v34.92a1.72,1.72,0,0,0,1.9,2h2a1.76,1.76,0,0,0,2-2V111h12.49a1.74,1.74,0,0,0,1.9-2v-1.19A1.72,1.72,0,0,0,165.32,105.91ZM50,105.91H48a2,2,0,0,0-2.2,1.73l-7.32,29.09c-.54,2.26-.83,4.46-.83,4.46h-.12a37.59,37.59,0,0,0-1-4.46l-7.79-29.15a1.94,1.94,0,0,0-2.14-1.67H24.94a2,2,0,0,0-2.2,1.67l-7.79,29.15c-.65,2.32-1,4.46-1,4.46h-.12a41.22,41.22,0,0,0-.77-4.46l-7-29.09a2,2,0,0,0-2.2-1.73H1.8c-1.43,0-2,.77-1.72,2.14l9.7,38.13A2.08,2.08,0,0,0,12,147.9h3.27a2.08,2.08,0,0,0,2.2-1.67l6.9-25.58c.71-2.68,1.31-5.95,1.31-5.95h.18a60.73,60.73,0,0,0,1.31,5.95L34,146.24a2.06,2.06,0,0,0,2.14,1.67h3.27a2,2,0,0,0,2.2-1.67L51.71,108A1.57,1.57,0,0,0,50,105.91Zm360.4,20.21h-8.27a1.79,1.79,0,0,0-2,2v1.19a1.76,1.76,0,0,0,2,2H407v5.89a15.9,15.9,0,0,1-12,5.41c-8.68,0-15.35-6.84-15.35-16.42,0-9,6-16.18,15.64-16.18a19.25,19.25,0,0,1,10.35,3c1.13.6,2,.53,2.74-.54l.83-1.25a1.73,1.73,0,0,0-.42-2.68,24.85,24.85,0,0,0-13.8-3.93c-12.31,0-21.41,9.4-21.41,21.83,0,12.61,9.28,21.59,20.64,21.59a17.66,17.66,0,0,0,13-5.23h.12s-.06.59-.06,1.31v1.55c0,1,.71,1.67,2,1.67h1.13a1.73,1.73,0,0,0,2-2V128.07A1.76,1.76,0,0,0,410.38,126.11Zm20.34-20.88h-1.9a1.74,1.74,0,0,0-2,2v38.07a1.74,1.74,0,0,0,2,2h1.9a1.73,1.73,0,0,0,2-2V107.2A1.74,1.74,0,0,0,430.73,105.23Zm50.2,0H479a1.76,1.76,0,0,0-2,2v25.34c0,2.32.36,6.07.36,6.07h-.12s-2-3.81-3.45-6.07l-17.9-26a2.46,2.46,0,0,0-2.38-1.31h-2.26a1.74,1.74,0,0,0-2,2v38.07a1.74,1.74,0,0,0,2,2h1.9a1.73,1.73,0,0,0,2-2V120c0-2.38-.36-6.13-.36-6.13h.12s2,3.81,3.45,6.13l18,25.94a2.37,2.37,0,0,0,2.32,1.31h2.26a1.73,1.73,0,0,0,2-2V107.2A1.74,1.74,0,0,0,480.93,105.23Zm52.76,20.88h-8.27a1.79,1.79,0,0,0-2,2v1.19a1.76,1.76,0,0,0,2,2h4.88v5.89a15.9,15.9,0,0,1-12,5.41c-8.68,0-15.35-6.84-15.35-16.42,0-9,6-16.18,15.64-16.18a19.25,19.25,0,0,1,10.35,3c1.13.6,2,.53,2.74-.54l.83-1.25a1.73,1.73,0,0,0-.42-2.68,24.85,24.85,0,0,0-13.8-3.93c-12.31,0-21.41,9.4-21.41,21.83,0,12.61,9.28,21.59,20.64,21.59a17.66,17.66,0,0,0,13-5.23h.12s-.06.59-.06,1.31v1.55c0,1,.71,1.67,2,1.67h1.13a1.73,1.73,0,0,0,2-2V128.07A1.76,1.76,0,0,0,533.69,126.11ZM291.42,104.52c-12.49,0-21.59,9.34-21.59,21.41,0,12.37,9.1,22,21.59,22s21.53-9.64,21.53-22C312.95,113.86,303.91,104.52,291.42,104.52Zm0,38c-8.92,0-15.53-7.2-15.53-16.6,0-9.1,6.6-16,15.53-16s15.47,6.9,15.47,16C306.88,135.33,300.34,142.53,291.42,142.53Zm49.43-37.3h-12a1.74,1.74,0,0,0-2,2v38.07a1.74,1.74,0,0,0,2,2h12c12.79,0,21.3-7.73,21.3-21.06S353.63,105.23,340.85,105.23Zm-.42,36.88h-7.67V110.35h7.67c9.4,0,15.64,5.53,15.64,15.82S349.89,142.11,340.43,142.11ZM292.79,80.6v0l11.38,0c8.21-.64,6.7-17.91,6.7-17.91l-17.88,0L292.91.13S278.35-2.11,275,11.81l0,33.56-.1,35.23ZM249.88.13l-.08,64.62c.64,18.23,17.91,14.88,17.91,14.88l.08-67.82C264.44-2.11,249.88.13,249.88.13Zm-7.36,79.5.08-67.82C239.24-2.11,224.69.13,224.69.13l-.08,64.62C225.25,83,242.52,79.63,242.52,79.63Z"/>
                    </symbol>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg">
                    <filter id="duotone">
                        <feColorMatrix type="matrix" values="-0.01171875 0 0 0 0.12890625 0.234375 0 0 0 0.375 0.1953125 0 0 0 0.70703125 0 0 0 1 0"/>
                    </filter>
                </svg>
            </div>
        </>
    );
}

export default NavBlock;