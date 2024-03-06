import React from 'react'

interface IShop {
    id: string;
    name:string
}

const shops:IShop[]=[{id:"1", name:"Drug 24"}, {id:"2",name:"Pharmacy"}]

const ShopsList = () => {
    return (
      <ul>
        {shops.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    );
}

export default ShopsList