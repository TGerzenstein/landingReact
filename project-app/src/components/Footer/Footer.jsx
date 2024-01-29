import './Footer.css';

export default function Footer(){

  return (
      <div className='container-footer d-flex'>
        <ul className='box1'>
          <li className='box'>Contact</li>
          <li className='box'>About</li>
          <li className='box'>Blog</li>
          <li className='box'>Articles</li>
        </ul>
        <div className="icons-social-media d-flex flex-wrap justify-content-center">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
        </div>
      </div>
  )
}


