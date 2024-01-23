import './NavBar.css';

export default function NavBar({ listSections }) {
    
    let menu;

    menu = listSections.map(element =>
          <li className='nav-li' key={element}>
            <a href="#Home">{element}</a>
          </li>
        )
    
    return(
      <nav className='container-nav'>
          <ul>
            {menu}
          </ul>
      </nav>
    );
};