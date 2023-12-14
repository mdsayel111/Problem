import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Fotter = () => {
  return (
    <footer className="footer footer-center p-10 bg-theme mt-8 text-primary-content rounded-2xl">
      <aside>
        <h1 className="text-3xl font-bold mb-6 txt-theme">
          My <span className="hov-theme">Protfolio</span>
        </h1>
        <p>Copyright © 2023 - M.E.R.N Stack reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/profile.php?id=100068803511119"
          >
            <FaFacebook className="text-3xl txt-theme" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/mdsayel111?tab=repositories"
          >
            <FaGithub className="text-3xl txt-theme" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Fotter;
