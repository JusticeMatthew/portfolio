import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SimpleReactLightbox from 'simple-react-lightbox';
import Modal from 'react-modal';

const Portfolio = () => {
  const [isOpen3, setIsOpen3] = useState(false);

  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }

  return (
    <>
      <SimpleReactLightbox>
        <div className='tokyo_tm_portfolio'>
          <div className='tokyo_tm_title'>
            <div className='title_flex'>
              <div className='left'>
                <span>Portfolio</span>
                <h3>Development Portfolio</h3>
              </div>
            </div>
          </div>
          {/* END TOKYO_TM_TITLE */}

          <div className='portfolio_filter'>
            <Tabs>
              <TabList>
                <Tab>All</Tab>
                {/* All */}
              </TabList>
              {/* END TABLIST */}

              <div className='list_wrapper'>
                <TabPanel>
                  <ul className='portfolio_list'>
                    <li>
                      <div className='inner'>
                        <div className='entry tokyo_tm_portfolio_animation_wrap'>
                          <img
                            src='assets/img/portfolio/6.jpg'
                            alt='Details'
                            onClick={toggleModalThree}
                          />
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                    {/* <li>
                      <div className='inner'>
                        <div className='entry tokyo_tm_portfolio_animation_wrap'>
                          <img
                            src='assets/img/portfolio/7.jpg'
                            alt='Details'
                            onClick={toggleModalFour}
                          />
                        </div>
                      </div>
                    </li> */}
                    {/* END DETAILS */}
                  </ul>
                  {/* END PORTFOLIO LIST */}
                </TabPanel>
                {/* END ALL All */}

                <TabPanel>
                  <ul className='portfolio_list'>
                    <li>
                      <div className='inner'>
                        <div className='entry tokyo_tm_portfolio_animation_wrap'>
                          <img
                            src='assets/img/portfolio/6.jpg'
                            alt='Details'
                            onClick={toggleModalThree}
                          />
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                    {/* <li>
                      <div className='inner'>
                        <div className='entry tokyo_tm_portfolio_animation_wrap'>
                          <img
                            src='assets/img/portfolio/7.jpg'
                            alt='Details'
                            onClick={toggleModalFour}
                          />
                        </div>
                      </div>
                    </li> */}
                    {/* END DETAILS */}
                  </ul>
                  {/* END DETAILS GALLERY */}
                </TabPanel>
                {/* END Details Gallery */}
              </div>
              {/* END LIST WRAPPER */}
            </Tabs>
          </div>
        </div>
      </SimpleReactLightbox>

      {/* all modal video and popup goes here */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel='My dialog'
        className='mymodal'
        overlayClassName='myoverlay'
        closeTimeoutMS={500}
      >
        <div className='tokyo_tm_modalbox_news portfolio_tm_modalbox'>
          <button className='close-modal' onClick={toggleModalThree}>
            <img src='assets/img/svg/cancel.svg' alt='close icon' />
          </button>
          {/* END CLOSE ICON */}
          <div className='box_inner'>
            <div className='description_wrap scrollable'>
              <div className='image'>
                <img src='assets/img/thumbs/4-3.jpg' alt='tumb' />
                <div
                  className='main'
                  style={{
                    backgroundImage: 'url(assets/img/portfolio/6.jpg)',
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className='portfolio_main_title'>
                <h3>Company Website for B&C Pest Control</h3>
                <span>Details</span>
              </div>
              {/* END portfolio_main_title */}
              <div className='main_details'>
                <div className='textbox'>
                  <p>
                    Designed and developed a basic react website for a local
                    small business. This was a solo project so I had full
                    control over the design, with recommendations and requests
                    from the client. I chose to use Tailwind CSS for all of the
                    styling involved and utilized AWS for all hosting and DNS
                    requirements.
                  </p>
                  <br />
                  <h6>Tech Stack</h6>
                  <p>React + Tailwind CSS + AWS</p>
                </div>
                <div className='detailbox'>
                  <ul>
                    <li>
                      <span className='first'>Client</span>
                      <span>B&C Pest Control</span>
                    </li>
                    <li>
                      <span className='first'>Project</span>
                      <span>
                        <a
                          href='https://www.bandcpestcontrol.com/'
                          target='blank'
                          id='projectlink'
                        >
                          bandcpestcontrol.com
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      {/* <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel='My dialog'
        className='mymodal'
        overlayClassName='myoverlay'
        closeTimeoutMS={500}
      >
        <div className='tokyo_tm_modalbox_news portfolio_tm_modalbox'>
          <button className='close-modal' onClick={toggleModalFour}>
            <img src='assets/img/svg/cancel.svg' alt='close icon' />
          </button>

          <div className='box_inner'>
            <div className='description_wrap scrollable'>
              <div className='image'>
                <img src='assets/img/thumbs/4-3.jpg' alt='tumb' />
                <div
                  className='main'
                  style={{
                    backgroundImage: 'url(assets/img/portfolio/7.jpg)',
                  }}
                ></div>
              </div>

              <div className='portfolio_main_title'>
                <h3>Ave Simone</h3>
                <span>Details</span>
              </div>

              <div className='main_details'>
                <div className='textbox'>
                  <p>
                    We live in a world where we need to move quickly and iterate
                    on our ideas as flexibly as possible. Building mockups
                    strikes the ideal balance between true-life representation
                    of the end product and ease of modification.
                  </p>
                  <p>
                    Mockups are useful both for the creative phase of the
                    project - for instance when you're trying to figure out your
                    user flows or the proper visual hierarchy - and the
                    production phase when they will represent the target
                    product. Making mockups a part of your creative and
                    development process allows you to quickly and easily ideate.
                  </p>
                </div>
                <div className='detailbox'>
                  <ul>
                    <li>
                      <span className='first'>Client</span>
                      <span>Alvaro Morata</span>
                    </li>
                    <li>
                      <span className='first'>Category</span>
                      <span>Details</span>
                    </li>
                    <li>
                      <span className='first'>Date</span>
                      <span>March 07, 2021</span>
                    </li>
                    <li>
                      <span className='first'>Share</span>
                      <Social />
                    </li>
                  </ul>
                </div>
              </div>

              <div className='additional_images'>
                <ul className='gallery_zoom'>
                  <li>
                    <div className='list_inner'>
                      <div className='my_image'>
                        <img src='img/thumbs/4-2.jpg' alt='thumb' />
                        <div
                          className='main'
                          style={{
                            backgroundImage: 'url(assets/img/portfolio/6.jpg)',
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className='list_inner'>
                      <div className='my_image'>
                        <img src='img/thumbs/4-2.jpg' alt='thumb' />
                        <div
                          className='main'
                          style={{
                            backgroundImage: 'url(assets/img/portfolio/5.jpg)',
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className='list_inner'>
                      <div className='my_image'>
                        <img src='img/thumbs/4-2.jpg' alt='thumb' />
                        <div
                          className='main'
                          style={{
                            backgroundImage: 'url(assets/img/portfolio/4.jpg)',
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal> */}
    </>
  );
};

export default Portfolio;
