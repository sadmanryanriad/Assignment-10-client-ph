import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Cart = () => {

  const {person} = useContext(AuthContext);

  return (
    <div>
      <h2>This is cart: {person}</h2>
    </div>
  );
};

export default Cart;