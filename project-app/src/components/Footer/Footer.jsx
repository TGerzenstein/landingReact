import './Footer.css';

export default function Footer(){

  return (
      <div className='container-footer d-flex'>
        <div className='box1'>                    
          <ul>
            <li className='box-footer'>Contact</li>
            <li className='box-footer'>About</li>
            <li className='box-footer'>Blog</li>
            <li className='box-footer'>Articles</li>
          </ul>    
        </div>  
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


