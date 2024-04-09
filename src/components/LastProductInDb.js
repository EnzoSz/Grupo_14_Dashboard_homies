import React, {useEffect, useState} from "react";

function LastProductInDb(){
    let [lastMovie, setLastMovie] = useState()

    useEffect(()=>{

        fetch('http://localhost:3000/api-products/last')
        .then(res =>{
                return res.json()
        })
        .then(data =>{
            setLastMovie(data.product)
            console.log(data)
        })
        
    },[])
    
    return(
        
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo Producto Creado</h5>
                </div>
                <div className="card-body">
                    <p>{lastMovie?.name}</p>
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 + 'rem'}} src={'http://localhost:3000/assets/images/products/' + lastMovie?.images[0].image} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <h5>Descripción</h5>
                    <p>{lastMovie?.description}</p>
                   {/*  <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View product detail</a> */}
                </div>
            </div>
        </div>
    )
}

export default LastProductInDb;
