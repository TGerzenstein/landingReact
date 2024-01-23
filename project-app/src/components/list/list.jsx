import './list.css';

export default function List({ listTitles }) {
    
    let listado;

    listado = listTitles.map(element =>
          <li key={element}>
            <a className='items'>{element}</a>
          </li>
        )
    
    return(
          <div className='box'>          
            <div className='container-list'>
              <ul>
                {listado}
              </ul>
            </div>
          </div>
    );
};
