import { Card } from "react-bootstrap";
import Mes from "./Mes";
import MesType from "./MesType";
import "./mes.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const MesContainer = (props) => {
  let data = props.data.map((element, index) => (
    <CSSTransition classNames="example" timeout={200} key={index}>
      <Mes item={element} deleteMes={props.deleteMes}/>
    </CSSTransition>
  ));
  

  return (
    <Card className="card">
      <Card.Body className="bodyy" style={{ height: "80%" }}>
        <TransitionGroup className="messages">{data}</TransitionGroup>
      </Card.Body>
      <Card.Footer>
        <MesType setMes={props.setMes} setWindow={props.setWindow}/>
      </Card.Footer>
    </Card>
  );
};

export default MesContainer;
