import React from "react";
import { IDrug } from "../drugList/DrugList";
import styles from "./CartList.module.css";

const cartDrugs: IDrug[] = [
  { id: "1", name: "Paracetamot", price: 225 },
  { id: "2", name: "Amrocsol", price: 500 },
];

const CartList = () => {
  return (
    <div className={styles.box}>
      <ul className={styles.list}>
        {cartDrugs.map(({ id, name, price }) => (
          <li key={id} className={styles.item}>
            <p>{name}</p>
            <p>{price}</p>
            <input type="number" name="amount" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartList;
