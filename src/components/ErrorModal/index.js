import { useState } from "react";
import Modal from "../Modal";
import { connect } from "react-redux";
import { setToken, setError } from "../../redux/activity/activity.actions";

function ErrorModal({ isOpen, onCloseModal, onOpenModal, setToken, setError }) {
  const [tokenInput, setTokenInput] = useState();

  const handleSave = (token) => {
    setToken(token);
    setError(null);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setTokenInput(e.target.value);
  };

  return (
    <Modal isOpen={isOpen}>
      <label>Ingresar token</label>
      <input onChange={handleChange} type="text" />
      <button onClick={() => handleSave(tokenInput)}>Guardar</button>
    </Modal>
  );
}
const mapDispatchToProps = (dispatch) => ({
  setToken: (token) => dispatch(setToken(token)),
  setError: (error) => dispatch(setError(error)),
});

export default connect(null, mapDispatchToProps)(ErrorModal);
