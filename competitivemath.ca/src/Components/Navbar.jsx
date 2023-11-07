import PropTypes from "prop-types";
import { useMatch, useResolvedPath } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="bg-blue-800 text-white sticky top-0 z-10 shadow-xl">
      <div className="p-4 flex justify-start items-center">
        <a href="/" className="flex items-center">
          <img
            src="../../images/CM Logo.svg"
            className="float-left w-16 l-16"
          />
          <h1 className="float-left font-bold text-3xl">competitivemath.ca</h1>
        </a>
        {/* Header above */}
        <ul
          className="hidden xl:flex list-none gap-3 text-lg ml-16"
          aria-label="main"
        >
          <NavBtn href="/">Home</NavBtn>
          <NavBtn href="/problems">Problems</NavBtn>
          <NavBtn href="/contests">Contests</NavBtn>
          <NavBtn href="/community">Community</NavBtn>
          <NavBtn href="/about">About</NavBtn>
        </ul>
        {/* Mobile Open Button */}
        <button className="text-3xl ml-auto xl:hidden focus:outline-none">
          &#9776;
        </button>
        <a
          href="/profile"
          className="hidden xl:inline-flex items-center ml-auto"
        >
          <img src="../../images/Default PFP.svg" className="w-14 l-14" />
        </a>
      </div>
    </header>
  );
}

function NavBtn({ href, children, ...props }) {
  const resolvedPath = useResolvedPath(href);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li>
      <a
        href={href}
        className="h-full inline-flex items-center px-5"
        {...props}
      >
        {children}
      </a>
      {isActive && <hr className="border-t-4 border-white" />}
    </li>
  );
}


NavBtn.propTypes = {
    href: PropTypes.string,
    children: PropTypes.node,
}

