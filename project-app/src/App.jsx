import './App.css';
import Section from './components/section/Section';
import NavBar from './components/nav/NavBar';
import HeroSection from './components/heroSection/HeroSection';
import image from './assets/image.png';
import List from './components/list/list';



function App() {

  const itemsMenu = ["Home", "Web design", "SEO", "About", "Articles"];
  const list = ["Landing page 1", "Landing page 2", "Landing page 3"];

  return ( 
    <div className='container'>
      <NavBar listSections={itemsMenu} />

      <HeroSection title="The Breakdown of a Website’s Page Structure"
                   text="Landing pages are ideal for digital ad campaigns. The goal of a landing page is to convert visitors, so it’s an essential tool to have at your disposal for all types of marketing campaigns."
                   img={image} 
      ></HeroSection>
      <List listTitles={list}></List>

      <Section title="Landing Page 1"
               subheading="What makes a homepage different from a landing page? "
               content="More links. On a typical homepage, you can find at least 10 links. There's often a navigational menu at the top, links in the footer, and many in the page’s content. On a well-optimized landing page, though, you'll usually find fewer links, and sometimes only one—the link that allows your users to convert."
      ></Section>

      <Section title="Landing Page 2"
               subheading="What makes a homepage different from a landing page? "
               content="More links. On a typical homepage, you can find at least 10 links. There's often a navigational menu at the top, links in the footer, and many in the page’s content. On a well-optimized landing page, though, you'll usually find fewer links, and sometimes only one—the link that allows your users to convert."
      ></Section>

      <Section title="Landing Page 3"
               subheading="What makes a homepage different from a landing page? "
               content="More links. On a typical homepage, you can find at least 10 links. There's often a navigational menu at the top, links in the footer, and many in the page’s content. On a well-optimized landing page, though, you'll usually find fewer links, and sometimes only one—the link that allows your users to convert."
      ></Section>
    </div>
  );
};

export default App
