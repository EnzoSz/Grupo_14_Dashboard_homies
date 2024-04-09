function MovieList(props) {
    return (
      <tr>
        <td>{props.id}</td>
        <td>{props.first_name}</td>
        <td>{props.last_name }</td>
        <td>{props.price || props.email }</td>
        <td>{props.created_at}</td>
      </tr>
    );
  }
  
  export default MovieList;