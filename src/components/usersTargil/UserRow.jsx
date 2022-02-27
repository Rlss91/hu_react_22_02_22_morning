const UserRow = (props) => {
  const handleClickDelete = () => {
    props.onDelete(props.id);
  };
  return (
    <tr>
      <th scope="row">{props.name}</th>
      <td>{props.email}</td>
      <td>{props.password}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleClickDelete}
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
