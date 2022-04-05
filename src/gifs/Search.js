import { Form, OverlayTrigger, Popover } from "react-bootstrap";
import "./gif.css";
import { ReactComponent as Svg } from "./question-svgrepo-com.svg";

const Search = (props) => {
  function handleInput(e) {
    e.preventDefault();
    let search = e.currentTarget.children[0].value;
    props.setData(null);
    props.makeRequest(search);
  }

  return (
    <Form onSubmit={handleInput} style={{ position: "relative" }}>
      <Form.Control
        required
        type="text"
        value={props.req}
        onChange={(e) => props.setReq(e.target.value)}
        style={{ paddingLeft: "45px" }}
      />
      <span className="gradient">/gif</span>
      <OverlayTrigger
        trigger={["hover", "hover"]}
        placement="right"
        overlay={
          <Popover>
            <Popover.Body>
              Введи слово запроса после<strong> /gif </strong>и нажми
              <strong> Enter.</strong> Ты получишь результат с гифками по запросу!
            </Popover.Body>
          </Popover>
        }
      >
        <Svg className="ques"/>
      </OverlayTrigger>
    </Form>
  );
};

export default Search;
