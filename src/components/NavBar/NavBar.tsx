import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navBarContainer">
      <ul className="list-container">
        <li className="list-item">
          <a href="#home">Home</a>
        </li>
        <li className="list-item">
          <a href="#projects">Projects</a>
        </li>
        <li className="list-item">
          <a href="#about">About</a>
        </li>
        <li className="list-item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
