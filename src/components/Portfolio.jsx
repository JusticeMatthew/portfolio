import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SimpleReactLightbox from 'simple-react-lightbox';
import Modal from 'react-modal';

const Portfolio = () => {
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
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
                          <h4 style={{ marginBottom: 18 }}>BudBud</h4>
                          <img
                            src='assets/img/portfolio/2.jpg'
                            alt='Details'
                            onClick={toggleModalFour}
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='inner'>
                        <div className='entry tokyo_tm_portfolio_animation_wrap'>
                          <h4 style={{ marginBottom: 18 }}>
                            B & C Pest Control
                          </h4>
                          <img
                            src='assets/img/portfolio/6.jpg'
                            alt='Details'
                            onClick={toggleModalThree}
                          />
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}

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
                            src='assets/img/portfolio/2.jpg'
                            alt='Details'
                            onClick={toggleModalFour}
                          />
                        </div>
                      </div>
                    </li>
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
                    border: '2px solid whitesmoke',
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
                      <span className='first'>Project Link</span>
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
      <Modal
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
                    border: '2px solid whitesmoke',
                  }}
                ></div>
              </div>

              <div className='portfolio_main_title'>
                <h3>Mobile App BudBud</h3>
                <span>Details</span>
              </div>

              <div className='main_details'>
                <div className='textbox'>
                  <p>
                    BudBud is a personal project under development by myself.
                    It's designed for medical marijuana patients to have an easy
                    time tracking various data about their medication, of which
                    there are hundreds of different types. Information they can
                    track includes the name of the strain, the type of medicine,
                    where they purchased it, various dosing information, and a
                    space for notes about how the medicine effected them. Users
                    are also able to set specific medication as a "favorite"
                    which can be tracked in a separate tab for easy locating.
                  </p>
                  <p>
                    Future development plans include a search/filter page to
                    allow users with a large amount of data to easily locate
                    specific medications and a profile page with various stats
                    about how much they have used the app.
                  </p>
                  <p>
                    If you would like to sample the application you will need to
                    download the EXPO app from you're devices respective app
                    store, follow the provided project link to the right, and
                    then finally scan the QR code using the EXPO app.
                  </p>
                  <br />
                  <h6>Tech Stack</h6>
                  <p>React-native + styled-components + Firebase & Firestore</p>
                </div>
                <div className='detailbox'>
                  <ul>
                    <li>
                      <span className='first'>Project Link</span>
                      <span>
                        <a
                          href='https://expo.dev/@justicematthew/BudBud'
                          target='blank'
                          id='projectlink'
                        >
                          BudBud
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Portfolio;
