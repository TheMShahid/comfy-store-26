import { NavLink } from "react-router-dom";

const links = [
  {
    id: 1,
    href: "/",
    text: "home",
  },
  {
    id: 2,
    href: "about",
    text: "about",
  },
  {
    id: 3,
    href: "products",
    text: "products",
  },
  {
    id: 4,
    href: "cart",
    text: "cart",
  },
  {
    id: 5,
    href: "checkout",
    text: "checkout",
  },
  {
    id: 6,
    href: "orders",
    text: "orders",
  },
];

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, href, text } = link;
        return (
          <li key={id}>
            <NavLink className="capitalize" to={href}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};
export default NavLinks;
