import React, {useEffect, useState} from "react";
import SmallCard from './SmallCard';


function Users(){

    const [ usersInDb, setUsersInDb ] = useState([]);
    const [ productsInDb, setProductsInDb ] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3000/api-user')
      .then(response => response.json())
      .then(data => { setUsersInDb(data)
        console.log(data);
    })
      .catch(error => console.log(error));
    }, []);


    useEffect(() => {
      fetch('http://localhost:3000/api-products')
      .then(response => response.json())
      .then(data => { setProductsInDb(data) })
      .catch(error => console.log(error));
    }, []);


    let products = {
        title: 'Productos',
        color: 'primary', 
        cuantity: productsInDb.length,
        icon: 'fa-clipboard-list',
        data: productsInDb.product
    }

    

    let category = {
        title:'Categorias', 
        color:'success', 
        cuantity: "5",
        icon:'fa-award',
        data: undefined
    }

    

    let users = {
        title: "Usuarios" ,
        color:'warning',
        cuantity: usersInDb.length,
        icon:'fa-user-check',
        data: usersInDb.user
    }

    let cartProps = [products, users, category];

    return (

        <div className="row">

            {cartProps.map( (product, i) => {
                return <SmallCard {...product} key={i}/>
            })};

        </div>
    )
}

export default Users;