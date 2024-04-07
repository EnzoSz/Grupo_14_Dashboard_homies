import React, {useEffect, useState} from "react";


function Chart (){
    const [ productsInDb, setProductsInDb ] = useState([])

    useEffect(() => {
      fetch('http://localhost:3000/api-products')
      .then(response => response.json())
      .then(data => { setProductsInDb(data) })
      .catch(error => console.log(error));
    }, []);
    
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Descripcion</th>
                                <th>Precio</th>
                                <th>Agregado</th>                               
                            </tr>
                        </thead>
                        <tfoot>
                            {productsInDb.length === 0 
                                ? <div className="col-lg-6 mb-4">
                                    <div className="card bg-dark text-white shadow">
                                        <div className="card-body">Cargando...</div>
                                    </div>
                                    </div>
                                : productsInDb.product.map((product,i) => {
                                    return (
                                    <React.Fragment key={i}>
                                        <tr>
                                            <th>{product.name}</th>
                                            <th>{product.description}</th>
                                            <th>{product.price}</th>
                                            <th>{product.created_at}</th>
                                        </tr>
                                    </React.Fragment>
                                    )
                                    })
                                };
                        </tfoot>
                        
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;