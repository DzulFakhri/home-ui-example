import React from 'react';
import './App.css';
import {Wrapper, Header, Section, Typography, Member, About, Footer} from './components';
import Logo from './media/gtd_logo.png';
import Lisa from './media/img_lisa_circle.png'
import Danielle from './media/img_danielle_circle.png'
import Brian from './media/img_brian_circle.png'

function App() {
  const [value, setValue] = React.useState<string>();
  return (
    <div className="App">
      <Header>
        <div className='container'>
          <Wrapper justify='between' align='center' wrap='none'>
            <div>
              <img src={Logo} alt="gtd" />
            </div>
          </Wrapper>
        </div>
      </Header>
      <Section>
        <div className='container'>
          <Wrapper justify='center' align='center' wrap='none'>
            <Typography variant='h1' hue='grey' space='overlap'>Hello, we’re gtd.</Typography>
          </Wrapper>
        </div>
      </Section>
      <About>
        <div className='container'>
          <div>
            <Member variant='overlap'>
              <img src={Lisa} alt="lisa gtd" className='photo' />
              <img src={Danielle} alt="danielle gtd" className='photo' />
              <img src={Brian} alt="brian gtd" className='photo' />
            </Member>
          </div>
          <Typography variant='h2' hue='yellow' space='none'>How it started</Typography>
          <Typography variant='p1' hue='grey' space='none'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris n isi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in c
            ulpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <Member variant='space'>
            <div style={{display: 'flex'}}>
              <img src={Lisa} alt="lisa gtd" className='image' />
              <div className='info'>
                <Typography variant='h4' hue='yellow' space='none'>Lisa</Typography>
                <Typography variant='p2' hue='grey' space='none'>lisa@gtd.co</Typography>
              </div>
            </div>
            <div style={{display: 'flex'}}>
              <img src={Danielle} alt="danielle gtd" className='image' />
              <div className='info'>
                <Typography variant='h4' hue='yellow' space='none'>Danielle</Typography>
                <Typography variant='p2' hue='grey' space='none'>danielle@gtd.co(123) 456-7890</Typography>
              </div>
            </div>
          </Member>
        </div>
      </About>
      <Footer>
        <div className='container'>
          <Wrapper justify='between' align='start' wrap='flex'>
            <div>
              <Typography variant='p1' hue='yellow' space='none'>Team</Typography>
              <ul>
                <li>
                  <a href="#">
                    <Typography variant='h4' hue='white' space='medium'>Lisa</Typography>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Typography variant='h4' hue='white' space='medium'>Danielle</Typography>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Typography variant='h4' hue='white' space='medium'>Brian</Typography>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <Typography variant='h4' hue='white' space='medium'>Join Us!</Typography>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <Typography variant='p1' hue='yellow' space='none'>Learn More</Typography>
              <ul>
                <li>
                  <a href="#">
                    <Typography variant='h4' hue='white' space='medium'>Manifesto</Typography>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Typography variant='h4' hue='white' space='medium'>Work</Typography>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Typography variant='h4' hue='white' space='medium'>Stories</Typography>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <Typography variant='p1' hue='yellow' space='none'>Meet Us</Typography>
              <ul>
                <li>
                  <a href="#">
                    <Typography variant='h4' hue='white' space='medium'>Studio</Typography>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Typography variant='h4' hue='white' space='medium'>Community</Typography>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Typography variant='h4' hue='white' space='medium'>Workshops</Typography>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <Typography variant='p1' hue='yellow' space='none'>Contact</Typography>
              <ul>
                <li>
                  <a href="#">
                    <Typography variant='h4' hue='white' space='medium'>Twitter</Typography>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Typography variant='h4' hue='white' space='medium'>Facebook</Typography>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Typography variant='h4' hue='white' space='medium'>Instagram</Typography>
                  </a>
                </li>
              </ul>
            </div>
          </Wrapper>
        </div>
      </Footer>
    </div>
  );
}

export default App;
