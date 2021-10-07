import React, { useState } from 'react';
import Modal from 'react-modal';
import Brand from './Brand';

Modal.setAppElement('#root');

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className='tokyo_tm_about'>
        <div className='about_image '>
          <img src='assets/img/slider/about.jpg' alt='about' />
        </div>
        {/* <div className="o-video">
          <iframe src="https://www.youtube.com/embed/0yW7w8F2TVA"></iframe>
        </div> */}
        {/* END ABOUT IMAGE */}
        <div className='description'>
          <h3 className='name'>Matthew Justice</h3>
          <h6>Web Developer</h6>
          <br />
          <div className='description_inner'>
            <div className='left'>
              <p>
                Welcome! My name is Matthew Justice and I am a pet loving, US
                based, full stack web developer. I am passionate about all
                things coding and technology and love opportunities to learn
                more about either. Please feel free to look through my projects
                and/or contact me directly!
              </p>
              <div className='tokyo_tm_button'>
                <button onClick={toggleModal} className='ib-button'>
                  Learn More
                </button>
              </div>
              {/* END TOKYO BUTTON */}
            </div>
            {/* END LEFT */}
            <div className='right'>
              <ul>
                <li>
                  <p>
                    <span>Birthday:</span>07.06.1991
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email:</span>
                    <a href='mailto:matthewajustice@gmail.com'>
                      matthewajustice@gmail.com
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Phone:</span>
                    <a href='tel:+14076875652'>+1 (407) 687-5652</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Education:</span>Lambda School
                  </p>
                </li>
              </ul>
              {/* END UL */}
            </div>
            {/* END RIGHT */}
          </div>
          {/* END DESCRIPTION INNER */}
        </div>
      </div>

      {/* START ABOUT POPUP BOX */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel='My dialog'
        className='mymodal'
        overlayClassName='myoverlay'
        closeTimeoutMS={500}
      >
        <div className='tokyo_tm_modalbox_about'>
          <button className='close-modal' onClick={toggleModal}>
            <img src='assets/img/svg/cancel.svg' alt='close icon' />
          </button>
          {/* END POPUP CLOSE BUTTON */}
          <div className='box-inner'>
            <div className='description_wrap scrollable'>
              <div className='my_box'>
                <div className='left'>
                  <div className='about_title'>
                    <h3>Web Development</h3>
                  </div>
                  {/* END ABOUT TITLE */}

                  <div className='tokyo_progress'>
                    <div className='progress_inner' data-value='95'>
                      <span>
                        <span className='label'>React</span>
                        <span className='number'>95%</span>
                      </span>
                      <div className='background'>
                        <div className='bar'>
                          <div
                            className='bar_in'
                            style={{ width: 95 + '%' }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className='progress_inner' data-value='80'>
                      <span>
                        <span className='label'>Next.js</span>
                        <span className='number'>75%</span>
                      </span>
                      <div className='background'>
                        <div className='bar'>
                          <div
                            className='bar_in'
                            style={{ width: 75 + '%' }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className='progress_inner' data-value='80'>
                      <span>
                        <span className='label'>Node</span>
                        <span className='number'>80%</span>
                      </span>
                      <div className='background'>
                        <div className='bar'>
                          <div
                            className='bar_in'
                            style={{ width: 80 + '%' }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className='progress_inner' data-value='90'>
                      <span>
                        <span className='label'>Git</span>
                        <span className='number'>90%</span>
                      </span>
                      <div className='background'>
                        <div className='bar'>
                          <div
                            className='bar_in'
                            style={{ width: 90 + '%' }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className='progress_inner' data-value='90'>
                      <span>
                        <span className='label'>React-Native</span>
                        <span className='number'>60%</span>
                      </span>
                      <div className='background'>
                        <div className='bar'>
                          <div
                            className='bar_in'
                            style={{ width: 60 + '%' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* END PROGRESS */}
                </div>
                {/* END LEFT */}

                <div className='right'>
                  <div className='about_title'>
                    <h3>Languages</h3>
                  </div>
                  {/* END TITLE */}
                  <div className='tokyo_progress'>
                    <div className='progress_inner' data-value='95'>
                      <span>
                        <span className='label'>Javascript</span>
                        <span className='number'>95%</span>
                      </span>
                      <div className='background'>
                        <div className='bar'>
                          <div
                            className='bar_in'
                            style={{ width: 95 + '%' }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className='progress_inner' data-value='90'>
                      <span>
                        <span className='label'>Python</span>
                        <span className='number'>55%</span>
                      </span>
                      <div className='background'>
                        <div className='bar'>
                          <div
                            className='bar_in'
                            style={{ width: 55 + '%' }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className='progress_inner' data-value='85'>
                      <span>
                        <span className='label'>PHP</span>
                        <span className='number'>10%</span>
                      </span>
                      <div className='background'>
                        <div className='bar'>
                          <div
                            className='bar_in'
                            style={{ width: 10 + '%' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* EDN TOKYO PROGRESS */}
                </div>
                {/* END RIGHT */}
              </div>
              {/* END MYBOX */}

              {/* <div className='counter'>
                <div className='about_title'>
                  <h3>Fun Facts</h3>
                </div>
                <ul>
                  <li>
                    <div className='list_inner'>
                      <h3>3</h3>
                      <span>Very strange pets</span>
                    </div>
                  </li>
                  <li>
                    <div className='list_inner'>
                      <h3>1</h3>
                      <span>Beautiful Wife</span>
                    </div>
                  </li>
                  <li>
                    <div className='list_inner'>
                      <h3>0</h3>
                      <span>Broken Bones</span>
                    </div>
                  </li>
                </ul>
              </div> */}
              {/* END COUNTER CONTENT */}
              {/* END COUNTER */}
              {/* END PARTNER SLIDER */}
            </div>
          </div>
        </div>
      </Modal>
      {/* END ABOUT POPUP BOX */}
    </>
  );
};

export default About;
