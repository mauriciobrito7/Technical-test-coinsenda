import { useState } from "react";
import Modal from "../Modal";
import { connect } from "react-redux";
import { setToken, setError } from "../../redux/activity/activity.actions";
import { Message, Label, Input, Button } from "./ErrorModal.styles";

function ErrorModal({ isOpen, setToken, setError }) {
  const [tokenInput, setTokenInput] = useState();

  const handleSave = (token) => {
   if(token !== undefined){
    setToken(token);
    setError(null);
   }
  };

  const handleChange = (e) => {
    setTokenInput(e.target.value);
  };

  return (
    <Modal isOpen={isOpen}>
      <Message>Su token ha expirado o no es válido</Message>
      <Label htmlFor="token">Ingresar token</Label>
      <Input
        placeholder="Ingrese nuevo token"
        onChange={handleChange}
        name="token"
        id="token"
        type="text"
      />
      <Button onClick={() => handleSave(tokenInput)}>Guardar</Button>
    </Modal>
  );
}
const mapDispatchToProps = (dispatch) => ({
  setToken: (token) => dispatch(setToken(token)),
  setError: (error) => dispatch(setError(error)),
});

export default connect(null, mapDispatchToProps)(ErrorModal);
