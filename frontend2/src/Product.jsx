import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();

  return (
    <div>
      <h1>{id}</h1>
      {/* render product information */}
    </div>
  );
}

export default Product;
