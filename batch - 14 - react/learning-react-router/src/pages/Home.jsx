import { Link } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <h1>Home page</h1>
      <Link to="/about">About page</Link>
      <br />
      <br />
      <Link to="/contact-us">Contact us page</Link>
      <br />
      <br />

      <Link to="/services">Services page</Link>
    </>
  );
}

export default Home;
