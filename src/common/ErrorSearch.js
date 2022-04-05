import { Card, Button } from "react-bootstrap";

const ErrorSearch = (props) => {
  return (
    <>
      <Card.Img
        variant="top"
        src="https://media.giphy.com/media/2zdnl4CB3OygOHe1kX/giphy.gif"
      />
      <Card.Body>
        <Card.Title>
          Гифок по данному запросу не найдено! Попробуйте другое слово
        </Card.Title>
        <Button variant="outline-info" onClick={() => props.resetReq()}>Обнулить запрос</Button>
      </Card.Body>
    </>
  );
};

export default ErrorSearch;
