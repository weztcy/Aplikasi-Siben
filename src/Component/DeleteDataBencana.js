import React from "react";
import { useDispatch } from "react-redux";
import { fetchDisasters } from "../redux/actions/disasterActions";
import axios from "axios";
import Button from "react-bootstrap/Button";

function DeleteDataBencana({ id }) {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      await axios.delete(`https://siben.inihikam.my.id/disasters/${id}`);
      dispatch(fetchDisasters());
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <Button variant="danger" onClick={handleDelete}>
      Delete
    </Button>
  );
}

export default DeleteDataBencana;