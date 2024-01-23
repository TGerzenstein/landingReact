import './HeroSection.css';

export default function HeroSection({title, text, img }){
    return(
      <div className='hero-section'>
        <h1 className='hero-title'>{title}</h1>
        <p className='hero-text'>{text}</p>
        <img src={img} alt="" />
      </div>      
    );
};