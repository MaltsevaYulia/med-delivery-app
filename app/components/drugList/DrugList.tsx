import React from "react";
interface IDrug {
    id: string;
  name: string;
  img?: string;
  price: number;
}

const drugs: IDrug[] = [
  { id: "1", name: "Paracetamot", price: 225 },
  { id: "2", name: "Amrocsol", price: 500 },
];

const DrugList = () => {
    return <ul>{drugs.map(({ name,id }) => <li key={id}>{name }</li>)}</ul>;
};

export default DrugList;
