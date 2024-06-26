import { About, Technologies, Project, Education, Contact, Story } from './components';

const Home = () => {
  return (
    <div className="bg--100 w-screen h-screen overflow-x-hidden">
      <div id="#about">
        <About />
      </div>
      <div>
        <Story />
      </div>
      <div id="tech">
        <Technologies />
      </div>
      <div id="project">
        <Project />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  )
}

export default Home;