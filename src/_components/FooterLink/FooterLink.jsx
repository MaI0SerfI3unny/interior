import { Link, useLocation } from "react-router-dom";

export const FooterLink = ({ id, children }) => {
  const location = useLocation();

  const handleClick = e => {
    if (location.pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -120;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <Link to={`/#${id}`} onClick={handleClick}>
      {children}
    </Link>
  );
};
