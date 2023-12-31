import { Facebook, GitHub, Instagram, LinkedIn, Mail, Twitter } from '@material-ui/icons'
import React from 'react'

const Footer = () => {
  return (<>
    <footer className="footer custom-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mb-3">
            <h3>Let's connect! </h3>
            <p>Feel free to reach out via any of the platforms below.</p>
            <div className="social-icons">
              <a href="mailto:my.madhuriyadav97@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail />
              </a>
              <a href="https://www.linkedin.com/in/madhuri-yadav-629023169/" target="_blank" rel="noopener noreferrer">
                <LinkedIn />
              </a>
              <a href="https://github.com/madhuriy7" target="_blank" rel="noopener noreferrer">
                <GitHub />
              </a>
              <a href="https://www.facebook.com/username" target="_blank" rel="noopener noreferrer">
                <Facebook />
              </a>
              <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">
                <Twitter />
              </a>
              <a href="https://www.instagram.com/accounts/onetap/?next=%2F" target="_blank" rel="noopener noreferrer">
                <Instagram />
              </a>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <h5>Library</h5>
            <p>REACT JS</p>
          </div>
          <div className="col-md-3 col-6">
            <h5>Frameworks</h5>
            <p>Bootstrap</p>
            <p>Sass</p>
            <p>Material-UI / Core</p>
            <p>Material-UI / Icon</p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <h6 className='text-center'>Developed By - Madhuri Yadav</h6>
          </div>
        </div>
      </div>
    </footer>
  </>)
}

export default Footer