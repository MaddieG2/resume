import React, { Component } from 'react'

class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div
                className="author-img"
                style={{
                  backgroundImage: 'url(https://media.licdn.com/dms/image/D4E03AQHwPhHlpLHZgw/profile-displayphoto-shrink_400_400/0/1719593576581?e=1725494400&v=beta&t=RNP5tD_M57Ztw9fE_bISlD3XHKzQZamdcoTFXE7PU0I)',
                  backgroundSize: 'cover', // Optional: cover the entire div
                  backgroundPosition: 'center' // Optional: center the image
                }}
              />

              <p id="colorlib-logo"><a href="index.html">Maddie G</a></p>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#skills" data-nav-section="skills">Skills</a></li>
                  <li><a href="#certifcations" data-nav-section="certifcations">Certifcations</a></li>
                  <li><a href="#education" data-nav-section="education">Education</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://github.com/MaddieG2" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/MaddieG/" target="_blank" rel="noopener noreferrer"><i className="icon-social-linkedin"></i></a></li>
              </ul>
            </nav>
            <br></br>
            <div className="colorlib-footer">
              <p><strong>
                <span className="email">maddiemk24@gmail.com</span>
                <span className="email">202-246-6794</span>
              </strong></p><br></br><br></br>
              <p><small>
                Your success will be determined by your own confidence and fortitude!
              </small></p>
            </div>

          </aside>
        </div>
      </div>
    )
  }
}

export default Sidebar;