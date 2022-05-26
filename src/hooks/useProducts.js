import { useEffect, useState } from "react";

const useProducts = productId => {
  const [product, setProduct] = useState({});
  useEffect( () => {
    fetch(`https://fast-scrubland-78671.herokuapp.com/product/${productId}`)
    .then(res => res.json())
    .then(data => setProduct(data))
  },[productId]);
  return [product];
}

export default useProducts;