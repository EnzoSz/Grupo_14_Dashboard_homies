import React from "react";
import PropTypes from 'prop-types';

function SmallCard(props){
    // const [ userImage, setUserImage ] = useState([]);

    // useEffect(() => {
    //   fetch('http://localhost:3000/api-images/user/user-1712517609301.png')
    //   .then(response => setUserImage(response.url))
    //   .catch(error => console.log(error));
    // }, []);

    return(
        <div className="col-auto mb-4">
            <div className={`card border-left-${props.color} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${props.color} text-uppercase mb-1`}> {props.title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.cuantity}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`fas ${props.icon} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                    <PropCard {...props}/>
                </div>
            </div>
        </div>
        
    )
}

function PropCard(props){
    switch (props.title) {
        case "Productos":
            return  (
                props.data === undefined 
                ?
                <div>Loading...</div>
                :
                props.data.map((product,i) => {
                    return (
                      <React.Fragment key={i}>
                            <div className="m-2">{product.name}</div>
                      </React.Fragment>
                    )
                }))

            case "Categorias":
                return (
                    <>
                        <div className="m-2">Hombre</div>
                        <div className="m-2">Mujer</div>
                        <div className="m-2">Kids</div>
                        <div className="m-2">Sale</div>
                        <div className="m-2">All</div>
                    </>
                    )

            case "Usuarios":
                return  (
                    props.data === undefined 
                    ?
                    <div>Loading...</div>
                    :
                    props.data.map((user,i) => {
                        return (
                          <React.Fragment key={i}>
                                { user.image_profile === null
                                ? <img alt="" src="/default-image.png" width={100}></img>
                                : <Image url={`http://localhost:3000/api-images/user/${user.image_profile}.jpg`} />}
                                <div>{user.first_name + user.last_name}</div>
                                <div  className="mb-2">{user.email}</div>
                          </React.Fragment>
                        )
                    }))

                    default:
    }
}

const Image = (props) => {
    return (
      <img alt="" width={100} src={props.url}/>
    );
  }

/* DEFINICIÓN DE PROPIEDADES POR DEFAULT */

SmallCard.defaultProps = {
    title: 'No Title',
    color: 'success',
    cuantity: 'No cuatity',
    icon: 'fa-clipboard-list'
}

/* PROPTYPES */

SmallCard.propTypes = {
    atritutes: PropTypes.shape({
        title: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        cuantity: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        icon: PropTypes.string.isRequired
    })
}



export default SmallCard;