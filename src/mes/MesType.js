import { Form, OverlayTrigger, Popover } from "react-bootstrap";
import "./mes.css";
import { ReactComponent as Svg } from "../gifs/question-svgrepo-com.svg";
import { ReactComponent as Gif } from "./gif.svg";

const MesType = (props) => {
  function handleInput(e) {
    e.preventDefault();
    let mes = e.currentTarget.children[0].value;
    props.setMes({ type: "mes", text: mes, time: new Date() });
  }
  return (
    <Form onSubmit={handleInput} style={{ position: "relative" }}>
      <Form.Control required type="text" placeholder="Напишите сообщение..." />
      <OverlayTrigger
        trigger={["hover", "hover"]}
        placement="right"
        overlay={
          <Popover>
            <Popover.Body>
              Ты можешь отправить <strong>текстовое сообщение</strong> или{" "}
              <strong>гифку</strong>
            </Popover.Body>
          </Popover>
        }
      >
        <Svg className="ques" />
      </OverlayTrigger>

      <OverlayTrigger
        trigger={["hover", "hover"]}
        placement="right"
        overlay={
          <Popover>
            <Popover.Body>
              Нажми для выбора<strong> гифок</strong>
            </Popover.Body>
          </Popover>
        }
      >
        <Gif className="back" onClick={() => props.setWindow("gif")}/>
      </OverlayTrigger>
    </Form>
  );
};

export default MesType;
