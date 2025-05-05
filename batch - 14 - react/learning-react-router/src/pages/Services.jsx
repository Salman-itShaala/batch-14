import { useParams } from "react-router-dom";

function Services() {
  const params = useParams(); // {id : 100}
  console.log(params);

  return (
    <>
      <h1>Services Page and id is {params.id}</h1>
    </>
  );
}

export default Services;
