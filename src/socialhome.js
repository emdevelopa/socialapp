import slack from './slack.png';
import github from './github.png';
import ingressive from './ingressive.png';
import React, { useState } from 'react';
function Socialhome() {
  const [file, setFile] = useState();
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
    return (
      <>
        <div className="mainappcontainer">
          
          <div className="profilecontainer">
         
            <input type='file' accept="image/*" onChange={handleChange} id='inputpic' />
            <label for='inputpic'>
              <div className="pic-cont">
                <img src={file} alt='' width='200px' height='200px'className="psic" />
              </div>
            </label>
            <div className='dots'><p>...</p></div>
          </div>
          <div className='link-section'>
            <a href='https://twitter.com/@EMWRLD999'><div>Twitter link</div></a>
            <a href='/'><div>Zuri Team</div></a>
            <a href='/'><div>Zuri Books</div></a>
            <a href='/'><div>Background Check For Coders</div></a>
            <a href='/'><div>Python</div></a>
            <a href='/'><div>Design</div></a>
            <a href='/contact'><div>Contact</div></a>
          </div>
          <div className="partnerpics">
            <a href='/'><img src={slack} alt='slack'/></a>
            <a href='https://github.com/emdevelopa'><img src={github} alt='github'/></a>
          </div>
          <footer>
            <div><p>ZURI<span></span>INTERNSHIP</p></div>
            <div><p>HNG INTERNSHIP 9 FRONTEND TASK</p></div>
            <div><img src={ingressive} alt='ingressive'/></div>
          </footer>
        </div>
      </>
    )
  };
export default Socialhome;
