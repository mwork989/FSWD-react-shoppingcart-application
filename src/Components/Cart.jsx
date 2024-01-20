import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Store/cartSlice";
const Cart = () => {
    const dispatch = useDispatch(remove);
    const  productsInCart = useSelector((state)=> state.cart);
    
    const removeItem =(id)=>{
        dispatch(remove(id))
    }

    const cards = productsInCart?.map((product, index) => (
        <div className="col-md-3" key={index}>
             <Card style={{ width: "18rem"}}>
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
            <Card.Footer style={{backgroundColor:'lightgrey', textAlign:'center'}}>
                 <Button variant="danger" onClick={()=>removeItem(product.id)}>remove</Button>
        </Card.Footer>
            </Card>
    </div>
    ))
    return ( 
        <>
        <h2>Cart Page</h2>
        {cards}
      </>
     );
}
 
export default Cart;