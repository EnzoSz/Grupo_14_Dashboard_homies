import React from 'react';
import LastProductInDb from './LastProductInDb';
import Products from './Products';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Product in DB -->*/}
            <LastProductInDb />
            {/*<!-- End content row last product in Data Base -->*/}

            {/*<!-- Products in DB -->*/}
            <Products />

        </div>
    )
}

export default ContentRowCenter;