import React from 'react';

import GGWA_LOGO_WHITE from '../images/GGWA_WINNER_Logo_2019_White.png';
import GGWA_LOGO_DARK from '../images/GGWA_WINNER_Logo_2019_Dark.png';
import landing_slide from '../images/landing-slide.jpg';
import op_supervisor_dulce from '../images/Operations-Supervisor_Dulce-Falfan-1280x945-1.jpg';
import join_our_team from '../images/A005_C055_1011I9-640x320.jpg';
import corporate_hq from '../images/Corporate_HQ-640x320.jpg';

import pic_jasmine from '../images/Jasmine-640x550-640x520.jpg';
import pic_brant from '../images/Brandt-640x550-640x520.jpg';
import moxy_chicago from '../images/Moxy-Chicago-Exterior-Composite-1600x1200-640x520.jpg';
import ac_lem from '../images/AC-LeM-1600x1200-640x520.jpg';
import zombie_taco from '../images/46A5106_2-640x520.jpg';
import conners_pancakes from '../images/Conners_Pancakes-640x520.jpg';

const MainContent = _ => {
    return (
        <>
            <div id="smoothstate-wrapper">
                <div className="smoothstate-container">
                    <section className="banner-container show-for-large">
                        <div className="video-background">
                            <video poster={landing_slide} id="bg-vid" playsinline autoplay muted loop>
                                <source src="https://player.vimeo.com/external/272654335.sd.mp4?s=da06a84b2e11ef5772dc14248459a2c96a62fcaf&profile_id=165" type="video/mp4" />
                            </video>
                            <div className="banner-overlay"></div>
                        </div>
                        <div className="banner-content">
                            <h1 className="h2">PASSION WORKS HERE</h1>
                        </div>
                        <div className="wl-award-block show-for-large">
                            <img src={GGWA_LOGO_WHITE} alt="Galup Great Workplace Award 2019"/>
                            <div className="wl-award-block-btn">
                                <a href="https://www.whitelodging.com/white-lodging-named-one-of-gallups-great-workplaces-for-second-straight-year">Learn More</a>
                            </div>
                        </div>
                        <a className="scroll-indicator show-for-large" href="#main-container">Scroll<span className="icon-arrow-down"></span></a>
                    </section>
                    <main id="main-container" className="homepage-container" role="main" data-waypoint-trigger>
                        <section className="section-container mobile-intro-section">
                            <div className="mobile-section-bg">
                                <img width="1280" height="945" src={op_supervisor_dulce} className="image-cover object-fit" alt="" />	
                            </div>
                            <div className="row vertical-center">
                                <div className="small-12 medium-centered medium-text-center columns">
                                    <h1 className="h2">Passion Works Here</h1>
                                    <div className="wl-award-block hide-for-large inverted">
                                        <img src={GGWA_LOGO_DARK} alt="GGWA Winner 2019 Dark"/>
                                        <div className="wl-award-block-btn">
                                            <a href="https://www.whitelodging.com/white-lodging-named-one-of-gallups-great-workplaces-for-second-straight-year" target="_blank">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="control-container">
                                <div className="page-controls">
                                    <div className="page-control">
                                        <a className="prev-page" href="https://www.whitelodging.com/gallery/"><span className="link-label">Gallery</span></a>
                                    </div>
                                    <div className="page-label">
                                        <span className="current-page">Home</span>
                                    </div>
                                    <div className="page-control">
                                        <a className="next-page" href="https://www.whitelodging.com/careers/"><span className="link-label">Careers</span></a>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section-container text-section white-bg">
                            <div className="row">
                                <div className="small-12 large-4 large-offset-1 columns">
                                    <div className="row">
                                        <div className="small-12 medium-10 medium-centered large-12 columns">
                                            <h2 className="h1">WELCOME TO<br />WHITE LODGING</h2>
                                            <p className="show-for-large"><a href="https://www.whitelodging.com/story/" className="border-btn">About Us</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="small-12 large-5 large-offset-1 columns end">
                                    <div className="row">
                                        <div className="small-12 medium-10 medium-centered large-12 columns">
                                            <p>White Lodging has been one of the fastest-growing hotel ownership, development and management companies in America since it&#8217;s inception in 1985. We consistently deliver superior results and returns on investment.</p>
                                            <p>Mid-size and large-scale owners look to us for an array of services to drive sustained growth, including:</p>
                                            <ul>
                                                <li>Hotel and Restaurant Operational Services</li>
                                                <li>Support Services</li>
                                                <li>Real Estate Investment &amp; Development</li>
                                                <li>Organizational Resources for Hotel Property Management</li>
                                            </ul>
                                            <p className="hide-for-large"><a href="https://www.whitelodging.com/story/" className="border-btn">About Us</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section-container book-ends white-bg">
                            <div className="row no-padding collapse">
                                <div className="small-12 medium-6 columns">
                                    <a href="https://css-whitelodging-prd.inforcloudsuite.com/hcm/CandidateSelfService/controller.servlet?dataarea=hcm&context.session.key.JobBoard=EXTERNAL&context.session.key.HROrganization=75#">
                                    <span className="border-btn white">Join Our Team</span>
                                    <img width="640" height="320" src={join_our_team} className="attachment-640x320 size-640x320" alt="" /><img className="duotone" src={join_our_team} width="640" height="320" aria-hidden />
                                    </a>
                                </div>
                                <div className="small-12 medium-6 columns">
                                    <a href="https://www.whitelodging.com/news-events/">
                                    <span className="border-btn white">What's New</span>
                                    <img width="640" height="320" src={corporate_hq} className="attachment-640x320 size-640x320" alt="An exterior shot of White Lodging&#039;s Corporate HQ." /><img className="duotone" src={corporate_hq} width="640" height="320" aria-hidden />
                                    </a>
                                </div>
                            </div>
                        </section>
                        <section className="section-container text-section white-bg">
                            <div className="row">
                                <div className="small-12 large-4 large-offset-1 columns">
                                    <div className="row">
                                        <div className="small-12 medium-10 medium-centered large-12 columns">
                                            <h2 className="h1">STEP UP.<br/>STAND OUT.</h2>
                                            <p className="show-for-large"><a href="https://www.whitelodging.com/careers/" className="border-btn">Learn More</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="small-12 large-5 large-offset-1 columns end">
                                    <div className="row">
                                        <div className="small-12 medium-10 medium-centered large-12 columns">
                                            <p>Passionate. Driven. Motivated. That&#8217;s who we are.  We&#8217;re looking for people who can see the qualities of White Lodging reflected in their own character.</p>
                                            <p>Jobs in hospitality were made for people who love to serve and succeed.<br />
                                                Sound good? White Lodging is the perfect place for you.
                                            </p>
                                            <p className="hide-for-large"><a href="https://www.whitelodging.com/careers/" className="border-btn">Learn More</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section-container block-links white-bg">
                            <div className="row no-padding collapse">
                                <div className="small-12 medium-6 columns">
                                    <a href="https://www.whitelodging.com/success-story/success-story-3/">
                                        <h3>Jasmine Reed</h3>
                                        <span className="border-btn white">Read her story</span>
                                        <img width="640" height="520" src={pic_jasmine} className="attachment-rectangle size-rectangle" alt="Human Resources Manager Jasmine Reed stands in the hotel lobby of Louisville Marriott Downtown, with plush armchairs and lantern lights in the background." />	<img className="duotone" src={pic_jasmine} width="640" height="520" aria-hidden />
                                    </a>
                                </div>
                                <div className="small-12 medium-6 columns">
                                    <a href="https://www.whitelodging.com/success-story/success-story/">
                                        <h3>Brandt Tiffany</h3>
                                        <span className="border-btn white">Read his story</span>
                                        <img width="640" height="520" src={pic_brant} className="attachment-rectangle size-rectangle" alt="Brandt Tiffany, General Manager at Aloft Louisville Downtown, smiles for the camera in the hotel’s restaurant." /><img className="duotone" src={pic_brant} width="640" height="520" aria-hidden />
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
                                        <p>&#8220;Our value comes from our people. Our people make us who we are. Every goal we have at white lodging is achieved through the passion, commitment, and talent of our associates.&#8221;</p>
                                        <cite>Ken Barrett, President & CEO</cite>
                                    </blockquote>
                                </div>
                            </div>
                        </section>
                        <section className="section-container text-section white-bg">
                            <div className="row">
                                <div className="small-12 large-4 large-offset-1 columns">
                                    <div className="row">
                                        <div className="small-12 medium-10 medium-centered large-12 columns">
                                            <h2 className="h1">Investment & Development</h2>
                                            <p className="show-for-large"><a href="https://www.whitelodging.com/services/" className="border-btn">Learn more</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="small-12 large-5 large-offset-1 columns end">
                                    <div className="row">
                                        <div className="small-12 medium-10 medium-centered large-12 columns">
                                            <p>White Lodging is one of America&#8217;s most experienced and most strategic hotel developers.  More than 130 premium branded new builds representing over $3.5 billion in investments have been completed over the last 25 years.</p>
                                            <p className="hide-for-large"><a href="https://www.whitelodging.com/services/" className="border-btn">Learn more</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section-container block-links white-bg">
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
                        </section>
                    </main>
                </div>
            </div>
            <div className="transition-slide"></div>
            <div className="page-cta-wrapper">
                <a className="page-cta" href="https://css-whitelodging-prd.inforcloudsuite.com/hcm/CandidateSelfService/controller.servlet?dataarea=hcm&context.session.key.JobBoard=EXTERNAL&context.session.key.HROrganization=75" target="_blank">Apply Now</a>
                <a className="top-link" href="#top">
                    <svg role="img" title="Arrow Up" viewBox="0 0 100 100">
                        <use href="#arrow-up-small" />
                    </svg>
                </a>
            </div>
        </>
    )
};

export default MainContent;