import { Component } from "react";
import MovieList from "./MovieList";

class UserList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/api-user")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((movies) => {
        this.setState({ movies: movies.user });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <>
        {/*<!-- PRODUCTS LIST -->*/}
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="h3 text-center mb-2 text-gray-800">
                Usuarios de la Base de Datos
              </h1>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col">
              {/*<!-- DataTales Example -->*/}
              <div className="card shadow mb-4">
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      className="table table-bordered"
                      id="dataTable"
                      width="100%"
                      cellSpacing="0"
                    >
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Nombre</th>
                          <th>Apellido</th>
                          <th>Email</th>
                          <th>Fecha Creacion</th>
                        </tr>
                      </thead>
                      <tbody>
                        {console.log(this.state.movies)}
                        {this.state.movies.map((movie, index) => {
                          return <MovieList {...movie} key={index} />;
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default UserList;
