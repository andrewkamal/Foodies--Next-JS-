import Image from "next/image";
import LogoImg from "@/assets/logo.png";
import cssClasses from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import Link from "next/link";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={cssClasses.header}>
        <Link className={cssClasses.logo} href="/">
          <Image src={LogoImg} alt="logo" priority />
          NextLevel Food
        </Link>
        <nav className={cssClasses.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
