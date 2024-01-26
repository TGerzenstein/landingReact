import './Section.css';
import Button from '../Button/Button';

export default function Section({title, subheading, content }) {
    return (
        <div className='container-section'>
          <h2>{title}</h2>
          <h3>{subheading}</h3>
          <p>{content}</p>
          <Button></Button>
        </div>
    );
  
};