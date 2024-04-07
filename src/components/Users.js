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

    /* <!-- products --> */

    let products = {
        title: 'Productos',
        color: 'primary', 
        cuantity: productsInDb.length,
        icon: 'fa-clipboard-list'
    }
    
    /* <!-- category --> */
    
    let category = {
        title:'Categorias', 
        color:'success', 
        cuantity: "5",
        icon:'fa-award'
    }
    
    /* <!-- usuarios --> */
    
    let users = {
        title: "Usuarios" ,
        color:'warning',
        cuantity: usersInDb.length,
        icon:'fa-user-check'
    }

    let cartProps = [products, category, users];

    return (
    
        <div className="row">
            
            {cartProps.map( (product, i) => {
                return <SmallCard {...product} key={i}/>
            
            })}

        </div>
    )
}

export default Users;