import React from "react";
import CartList from "../components/cartList/CartList";
import CartForm from "../components/form/CartForm";
import styles from "./cartPage.module.css";

const Cart = () => {
  return (
    <div className={styles.box}>
      <CartForm />
      <CartList />
    </div>
  );
};

export default Cart;
