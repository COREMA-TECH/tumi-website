import React from 'react';

import op_supervisor_dulce from '../images/Operations-Supervisor_Dulce-Falfan-1280x945-1.jpg';

import about_claudia_testimonial from '../images/about-claudia-robbins.png';
import about_stephen_testimonial from '../images/about-stephen-robbins.png';
import austin_skyline from '../images/austin-skyline.jpg';
import mobile_bg from '../images/housekeeping.jpg';

import {Link} from 'gatsby';

const MainContent = _ => {
    return (
        <>
            <div id="smoothstate-wrapper">
                <div className="smoothstate-container">
                    <section className="banner-container show-for-large home-banner">
                        <div className="video-background">                            
                            <div className="banner-overlay"></div>
                        </div>
                        <div className="banner-content">
                            <h1 className="h2 Tumi-uppercase">What you want to do and what you can do... <br/>Is limited only by what you can dream</h1>
                        </div>                        
                        <a className="scroll-indicator show-for-large" href="#main-container">Scroll<span style={{display: 'block', textAlign: 'center', padding: '8px'}} className=""><i class="fas fa-arrow-down"></i></span></a>
                    </section>
                    <main id="main-container" className="homepage-container" role="main" data-waypoint-trigger>
                        <section className="section-container mobile-intro-section">
                            <div className="mobile-section-bg">
                                <img width="1280" height="945" src={mobile_bg} className="image-cover object-fit" alt="" />	
                            </div>
                            <div className="row vertical-center">
                                <div className="small-12 medium-centered medium-text-center columns">
                                    <h1 className="h2">What you want to do and what you can do... <br/>Is limited only by what you can dream</h1>                                    
                                </div>
                            </div>                            
                        </section>
                        <section className="section-container text-section white-bg">
                            <div className="row">
                                <div className="small-12 large-4 large-offset-1 columns">
                                    <div className="row">
                                        <div className="small-12 medium-10 medium-centered large-12 columns">
                                            <h2 className="h1">WELCOME TO<br />TUMI STAFFING</h2>
                                            <p className="show-for-large"><Link className="border-btn" to='/about-us'>About Us</Link></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="small-12 large-5 large-offset-1 columns end">
                                    <div className="row">
                                        <div className="small-12 medium-10 medium-centered large-12 columns">                                            
                                            <p>
                                                Tumi Staffing is one of the nation's premier hospitality staffing providers. 
                                                Formed by hospitality professionals, we are dedicated to helping your hotel achieve greater customer satisfaction, increased QA scores, 
                                                boost efficiencies and reduce costs. With our background in the hospitality industry and our dedication to quality, we are uniquely positioned
                                                 to help your hotel achieve greater bottom line profits while increasing guest satisfaction. 
                                            </p>
                                            <p>
                                                Staffing for hotels has very unique requirements including the need for service oriented people, as well as technical skills
                                                and a work ethic that makes our employees successful in the hotel environment. In our interview process, we screen for these
                                                characteristics that lead to long term success in the hospitality industry. Tumi Staffing is committed to your success, and custom tailors our staffing solutions to fit your needs.
                                            </p>                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="small-12 large-10 large-offset-1 columns end">
                                    <p>
                                        Our commitment doesn′t stop at the end of your work day. 
                                        We are working behind the scenes, scheduling employees, processing time and attendance data, and working with your management
                                        team 24 hours a day to ensure that our employees merge with your operations in a seamless partnership. Tumi Staffing provides
                                        you with a dedicated Service Manager who is on call 24 hours a day. This dedication provides you with peace of mind, by knowing
                                        that with a single phone call, we are able to assist you in mobilizing workforce changes to meet the changing needs of your hotel.
                                    </p>                                    
                                </div>
                            </div>                            
                        </section>
                        <section className="section-container book-ends white-bg">
                            <div className="row no-padding collapse">
                                <div className="small-12 columns">
                                    <a href="http://orion-dev-web.us-east-2.elasticbeanstalk.com/employment-application"  rel="noopener noreferrer" target="_blank">
                                    <span className="border-btn white">Join Our Team</span>
                                    <img src={austin_skyline} alt="" className="attachment-640x320 size-640x320" alt="" /><img className="duotone" src={austin_skyline} aria-hidden />
                                    </a>                               
                                </div>
                            </div>
                        </section>
                        {/* <section className="section-container text-section white-bg">
                            <div className="row">
                                <div className="small-12 large-4 large-offset-1 columns">
                                    <div className="row">
                                        <div className="small-12 medium-10 medium-centered large-12 columns">
                                            <h2 className="h1">JOIN THE FAMILY.</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="small-12 large-5 large-offset-1 columns end">
                                    <div className="row">
                                        <div className="small-12 medium-10 medium-centered large-12 columns">
                                            <p>
                                                Our commitment doesn't stop at the end of your work day. We are working behind the scenes, scheduling employees, processing time and attendance data, and working with your management team 24 hours a day to ensure that our employees merge with your operations in a seamless partnership.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section-container block-links white-bg">
                            <div className="row no-padding collapse">
                                <div className="small-12 medium-6 columns">
                                    <Link to="/claudia-robbins">                                    
                                        <h3>Claudia Robbins</h3>
                                        <span className="border-btn white">Read her story</span>
                                        <img width="640" height="520" src={about_claudia_testimonial} className="attachment-rectangle size-rectangle" alt="Claudia Robbins." />	<img className="duotone" src={about_claudia_testimonial} width="640" height="520" aria-hidden />
                                    </Link>                                    
                                </div>
                                <div className="small-12 medium-6 columns">
                                    <Link to='/stephen-robbins'>
                                        <h3>Stephen Robbins</h3>
                                        <span className="border-btn white">Read his story</span>
                                        <img width="640" height="520" src={about_stephen_testimonial} className="attachment-rectangle size-rectangle" alt="Stephen Robbins." /><img className="duotone" src={about_stephen_testimonial} width="640" height="520" aria-hidden />                                    
                                    </Link>                                    
                                </div>
                            </div>
                        </section>
                        <section className="section-container blockquote-section Tumi-backishBg">
                            <div className="section-bg">
                            </div>
                            <div className="row">
                                <div className="small-12 medium-10 medium-centered column">
                                    <blockquote>
                                        <p>&#8220;I saw the angel on the marble and carved until I set him free&#8221;</p>
                                        <cite>Michaelangelo</cite>
                                    </blockquote>
                                </div>
                            </div>
                        </section>
                        <section className="section-container text-section white-bg">
                            <div className="row">
                                <div className="small-12 large-4 large-offset-1 columns">
                                    <div className="row">
                                        <div className="small-12 medium-10 medium-centered large-12 columns">
                                            <h2 className="h1">Employment</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="small-12 large-5 large-offset-1 columns end">
                                    <div className="row">
                                        <div className="small-12 medium-10 medium-centered large-12 columns">
                                            <p>We understand the value of a smiling face and a kind word to the guests.</p>
                                            <p>
                                                We are dedicated to providing the highest level of guest service and hospitality for our hotel guests, and a commitment to quality in every aspect of our jobs, creating even more opportunities for our employees.
                                                If you are looking for an opportunity to prove yourself, and your abilities, and you enjoy working with others, come join the Tumi Staffing hospitality team!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section> */}
                        {/* <section className="section-container block-links white-bg">
                            <div className="row no-padding collapse">
                                <div className="small-12 medium-6 columns">
                                    <a href="https://www.whitelodging.com/case-studies/moxy-hotel-chicago/">
                                        <h3>Moxy Hotel <br />Chicago, IL</h3>
                                        <span className="border-btn white">Fact Sheet</span>
                                        <img width="640" height="520" src={moxy_chicago} className="attachment-rectangle size-rectangle" alt="" /><img className="duotone" src={moxy_chicago} width="640" height="520" aria-hidden />
                                    </a>
                                </div>
                                <div className="small-12 medium-6 columns">
                                    <a href="https://www.whitelodging.com/case-studies/le-meridienac-hotels-denver-downtown/">
                                        <h3>AC Hotel and Le Meridien <br />Denver, CO</h3>
                                        <span className="border-btn white">Fact Sheet</span>
                                        <img width="640" height="520" src={ac_lem} className="attachment-rectangle size-rectangle" alt="An evening shot of the AC Hotel and Le Meridien in Denver Colorado, two of our hotel development company’s properties." /><img className="duotone" src={ac_lem} width="640" height="520" aria-hidden />
                                    </a>
                                </div>
                            </div>
                        </section>
                        <section className="section-container blockquote-section">
                            <div className="section-bg">
                            </div>
                            <div className="row">
                                <div className="small-12 medium-10 medium-centered column">
                                    <blockquote>
                                        <p>&#8220;Our platform is one where we don&#8217;t have to, nor are we interested in, seeking growth for growth&#8217;s sake. Our focus remains on creating value for our shareholders and associates in a sustainable fashion over the long term.&#8221;</p>
                                        <cite>Deno Yiankes, President & CEO, Investments and Development</cite>
                                    </blockquote>
                                </div>
                            </div>
                        </section>
                        <section className="section-container text-section white-bg">
                            <div className="row">
                                <div className="small-12 large-4 large-offset-1 columns">
                                    <div className="row">
                                        <div className="small-12 medium-10 medium-centered large-12 columns">
                                            <h2 className="h1">A Hunger to Lead</h2>
                                            <p className="show-for-large"><a href="https://www.whitelodging.com/services/#f-b-innovation" className="border-btn">Learn More</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="small-12 large-5 large-offset-1 columns end">
                                    <div className="row">
                                        <div className="small-12 medium-10 medium-centered large-12 columns">
                                            <p>You&#8217;ve never seen hotel Food &amp; Beverage like this before. That&#8217;s because we&#8217;re reinventing it with every property we manage.</p>
                                            <p>Dedicated research and development, award-winning chefs and original ideas come together to form some of the industry&#8217;s highest performing dining destinations. Our portfolio and exceptional Food &amp; Beverage margins will show you that performance means profit.</p>
                                            <p className="hide-for-large"><a href="https://www.whitelodging.com/services/#f-b-innovation" className="border-btn">Learn More</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section-container block-links white-bg">
                            <div className="row no-padding collapse">
                                <div className="small-12 medium-6 columns">
                                    <a href="https://www.whitelodging.com/case-studies/zombie-taco/">
                                        <h3>Zombie Taco<br />Chicago, IL</h3>
                                        <span className="border-btn white">Visit Case Study</span>
                                        <img width="640" height="520" src={zombie_taco} className="attachment-rectangle size-rectangle" alt="" /><img className="duotone" src={zombie_taco} width="640" height="520" aria-hidden />
                                    </a>
                                </div>
                                <div className="small-12 medium-6 columns">
                                    <a href="https://www.whitelodging.com/case-studies/conners-kitchen-bar/">
                                        <h3>Conner's<br />Kitchen + Bar<br />Indianapolis, IN</h3>
                                        <span className="border-btn white">Visit Case Study</span>
                                        <img width="640" height="520" src={conners_pancakes} className="attachment-rectangle size-rectangle" alt="" /><img className="duotone" src={conners_pancakes} width="640" height="520" aria-hidden />
                                    </a>
                                </div>
                            </div>
                        </section>
                        <section className="section-container blockquote-section">
                            <div className="section-bg">
                            </div>
                            <div className="row">
                                <div className="small-12 medium-10 medium-centered column">
                                    <blockquote>
                                        <p>&#8220;If hotel dining can compete with what&#8217;s happening in a specific marketplace in providing a differentiated, exciting offering and deliver it consistently, then hotel dining is no longer hotel dining&#8230; it is simply dining.&#8221;</p>
                                        <cite>Jean Luc Barone, Chief Operating Officer, Urban Lifestyle</cite>
                                    </blockquote>
                                </div>
                            </div>
                        </section> */}
                    </main>
                </div>
            </div>            
        </>
    )
};

export default MainContent;