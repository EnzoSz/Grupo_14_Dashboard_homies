import React, {useEffect, useState} from "react";

function Products() {
  const [ productsInDb, setProductsInDb ] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api-products')
    .then(response => response.json())
    .then(data => { setProductsInDb(data) })
    .catch(error => console.log(error));
  }, [])

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Products
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {productsInDb.length === 0 
              ? <div className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">Cargando...</div>
                  </div>
                </div>
              : productsInDb.product.map((product,i) => {
                return (
                  <React.Fragment key={i}>
                    <div className="col-lg-6 mb-4">
                      <div className="card bg-dark text-white shadow">
                        <div className="card-body">{product.name}</div>
                      </div>
                    </div>
                  </React.Fragment>
                  )
                })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;