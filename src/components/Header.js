import { FaGithub } from 'react-icons/fa';

export default function Header() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand h1">
          Sorting Visualiser
        </span>
        <div className="d-flex">
          <a
            className="github"
            href="https://github.com/george-swift"
            target="_blank"
            rel="noreferrer"
          >
            <span className="me-2">Github</span>
            <FaGithub />
          </a>
        </div>
      </div>
    </nav>
  );
}
