import ProjectCard from "../../components/ProjectCard/ProjectCard";
import photo from "../../assets/photo-frederico_cassola.png";

import "./Home.css";
import TechCard from "../../components/TechCard/TechCard";

export default function Home() {
  return (
    <div className="home">
      <section id="home" className="home-section">
        <p>
          Hello, I’m Frederico Cassola a <span>Full-Stack Web Developer</span>
          who turns ideas into reality.
        </p>
        <TechCard/>
      </section>
      <section id="projects" className="projects-section">
        <h2 className="section-title">Projects</h2>
        <ProjectCard />
      </section>
      <section id="about" className="about-section">
        <h2 className="section-title">About</h2>
        <div className="content-container">
          <div className="description-container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias perferendis molestiae non reprehenderit porro sint in
              nam, et eveniet consequatur dolores aliquid dicta libero
              cupiditate fugit. Pariatur cum quis iure!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias perferendis molestiae non reprehenderit porro sint in
              nam, et eveniet consequatur dolores aliquid dicta libero
              cupiditate fugit. Pariatur cum quis iure!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias perferendis molestiae non reprehenderit porro sint in
              nam, et eveniet consequatur dolores aliquid dicta libero
              cupiditate fugit. Pariatur cum quis iure!
            </p>
          </div>
          <div className="photo-container">
            <img
              className="photo"
              src={photo}
              alt="Frederico Cassola"
              width="911px"
              height="840px"
            />
          </div>
        </div>
      </section>
      <section id="contact" className="contact-section">
        <h2 className="section-title">Contact</h2>
        <form action="">
          <label htmlFor="">
            Name
            <input type="text" />
          </label>
          <label htmlFor="">
            Name
            <input type="email" />
          </label>
          <label htmlFor="">
            Name
            <textarea />
          </label>
        </form>
      </section>
    </div>
  );
}
