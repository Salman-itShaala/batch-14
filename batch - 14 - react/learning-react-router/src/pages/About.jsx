import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  function navigateToServices() {
    console.log("Hii");
    navigate("/services");
  }

  return (
    <>
      <h1>About page</h1>
      <button onClick={() => navigateToServices()}>
        Try to go to Services
      </button>
    </>
  );
}

export default About;
