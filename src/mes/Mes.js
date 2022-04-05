import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { ReactComponent as Svg } from "./delete-svgrepo-com.svg";

const Mes = (props) => {
  function getTime(date) {
    return `${date.getHours()} : ${date.getMinutes()}`;
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = () => {
    props.deleteMes(props.item.time);
    handleClose();
  };

  return (
    <>
      {props.item.type == "img" ? (
        <div className="mes">
          <div>
            <img src={props.item.url} />
          </div>
          <div>
            <Svg className="svg" onClick={handleShow} />
            <span className="time">{getTime(props.item.time)}</span>
          </div>
        </div>
      ) : (
        <div className="mes">
          <div>{props.item.text}</div>
          <div>
            <Svg className="svg" onClick={handleShow} />
            <span className="time">{getTime(props.item.time)}</span>
          </div>
        </div>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          Вы действительно хотите удалить данное сообщение?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Нет
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Да
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Mes;
