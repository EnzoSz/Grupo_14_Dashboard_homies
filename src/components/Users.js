import React, { useEffect, useState } from "react";
import SmallCard from "./SmallCard";

let productsInDb = {
  title: "Cantidad de Productos",
  color: "primary",
  icon: "fa-clipboard-list",
};

let quantity = {
  title: "Stock",
  color: "success",
  valor: 5,
  icon: "fa-award",
};

let user = {
  title: "Total de Usuarios",
  color: "warning",
  icon: "fa-user-check",
};

function Users() {
  const [users, setUsersInDb] = useState(user);

  useEffect(() => {
    fetch("http://localhost:3000/api-user")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsersInDb({
          ...users,
          valor: data.length,
        });
      })
      .catch((error) => console.log(error));
  }, []);

  const [products, setProductsInDb] = useState(productsInDb);

  useEffect(() => {
    fetch("http://localhost:3000/api-products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProductsInDb({
          ...products,
          valor: data.length,
          
        });
      })
      .catch((error) => console.log(error));
  }, []);

  let cardProps = [products, users, quantity];

  return (
    <div className="row">
      {cardProps.map((product, i) => {
        return <SmallCard {...product} key={i} />;
      })}
    </div>
  );
}

export default Users;
