import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Store/productSlice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Alert } from "react-bootstrap";
import { add } from "../Store/cartSlice";

const Product = () => {
  const dispatch = useDispatch();
  const {data :products,status} = useSelector(state =>state.products)

  useEffect(()=>{
    dispatch(getProducts())
  },[])

  if(status === 'loading'){
    return <p>Loading...</p>
}

if(status === 'error'){
    return <Alert key="danger" variant="danger">Some error occured</Alert>
}

const addToCart = (product) =>{
    dispatch(add(product))
}

  const cards = products?.map((product, index) => (
    <div className="col-md-3" key={index} >
      <Card style={{ width: "18rem" }}>
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ height: "150px", width: "150px" }}
          />
        </div>
        <Card.Body>
          <Card.Title className="text-center">{product.title} Title</Card.Title>

          <Card.Text>{product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{backgroundColor:'lightgrey',textAlign:'center'}}>
                 <Button variant="primary" onClick={()=>addToCart(product)}>Buy Now</Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <section>
      <h3>Products Page</h3>
      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>    {cards}</div>
  
    </section>
  );
};

export default Product;
