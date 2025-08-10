import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { LuShoppingBag } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { BsList } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar
      fluid
      rounded
      className="!bg-white !text-black  h-[70px] mt-4  "
    >
      <NavbarBrand href="/">
        <span className="self-center whitespace-nowrap text-3xl font-sans text-black">
          NorthStar
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink as={Link} to="/" className="!text-black" active>
          Home
        </NavbarLink>
        <NavbarLink  to="/about" className="!text-black">
          About
        </NavbarLink>
        {/* <NavbarLink as={Link} to="/contact" className="!text-black">
          Contact Us
        </NavbarLink> */}
      </NavbarCollapse>
      <div className="flex flex-row justify-end items-end gap-4 text-black">
        <CgProfile size={20} />
        <LuShoppingBag  size={20} />
        <BsList size={20} />
      </div>
    </Navbar>
  );
}

export default Header;
