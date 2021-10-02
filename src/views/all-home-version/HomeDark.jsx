import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';
import Home from '../../components/Home';
import About from '../../components/About';
import Portfolio from '../../components/Portfolio';
import Contact from '../../components/Contact';
import AnimatedCursor from 'react-animated-cursor';

const HomeDark = () => {
  document.body.classList.add('dark');
  return (
    <>
      <AnimatedCursor
        innerSize={12}
        outerSize={50}
        color='255, 255, 255'
        outerAlpha={0.2}
        innerScale={0.41}
        outerScale={1}
      />
      <Tabs>
        <TabList>
          {/* START LEFT MENU CONTENT */}
          <div className='leftpart'>
            <div className='leftpart_inner'>
              <div className='logo'>
                <Link className='navbar-brand' to='/'>
                  <img src='/assets/img/logo/dark.png' alt='brand' />
                </Link>
              </div>
              {/* END LOGO */}

              <div className='menu'>
                <ul>
                  <Tab>
                    <img
                      className='svg'
                      src='/assets/img/svg/home.svg'
                      alt='house'
                    />
                    <span className='menu_content'>Home</span>
                  </Tab>
                  <Tab>
                    <img
                      className='svg'
                      src='/assets/img/svg/user.svg'
                      alt='user icon'
                    />
                    <span className='menu_content'>About</span>
                  </Tab>
                  <Tab>
                    <img
                      className='svg'
                      src='/assets/img/svg/code.svg'
                      alt='code brackets'
                    />
                    <span className='menu_content'>Projects</span>
                  </Tab>
                  <Tab>
                    <img
                      className='svg'
                      src='/assets/img/svg/mail.svg'
                      alt='mail'
                    />
                    <span className='menu_content'> Contact</span>
                  </Tab>
                </ul>
              </div>
              {/* END MENU */}
            </div>
          </div>
          {/* END LEFT MENU CONTENT */}
        </TabList>
        {/* END SIDEBAR TABLIST */}

        {/* START RIGHT PART CONTENT */}
        <div className='rightpart'>
          <div className='rightpart_in'>
            <div className='tokyo_tm_section'>
              <div className='container'>
                <TabPanel>
                  <Home />
                </TabPanel>
                {/* END HOME MENU TAB CONTENT */}

                <TabPanel>
                  <About />
                </TabPanel>
                {/* END ABOUT MENU TAB CONTENT */}

                <TabPanel>
                  <Portfolio />
                </TabPanel>
                {/* END PORTFOLIO MENU TAB CONTENT */}

                <TabPanel>
                  <Contact />
                </TabPanel>
                {/* END CONTACT MENU TAB CONTENT */}
              </div>
            </div>
          </div>
        </div>
        {/* END RIGHT PART CONTENT */}
      </Tabs>
      {/* END TABS */}
    </>
  );
};

export default HomeDark;
