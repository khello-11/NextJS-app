import Link from "next/link";
import classes from "../styles/Navbar.module.css";
// interface navbar {
//   home: undefined;
//   about: () => void;
//   contact: () => void;
// }

const Navbar: any = () => {
  return (
    <div className={classes.navbar}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/posts">Posts</Link>
    </div>
  );
};

export default Navbar;
