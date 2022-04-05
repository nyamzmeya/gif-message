import { GiphyFetch } from "@giphy/js-fetch-api";
import GifGallery from "./GifGallery";
import Search from "./Search";
import React, { useRef, useState } from "react";
import { Card } from "react-bootstrap";
import "./gif.css";
import Loading from "../common/Loading";
import ErrorSearch from "../common/ErrorSearch";

const GifContainer = (props) => {
  let [data, setData] = useState(null);

  let ref = useRef(null);

  let [req, setReq] = useState("");

  async function makeRequest(value) {
    const gf = new GiphyFetch("I0eyTk4ItlxQAS0X6ZpqCpdWaIx3PRou");
    let responce = await gf.search(value);
    setData(responce.data);
  }

  function getBody() {
    if (!data) {
      return <Loading />;
    }

    if (data.length == 0) {
      return <ErrorSearch resetReq={() => setReq("")} />;
    }

    return (
      <GifGallery
      setWindow={props.setWindow}
        gifs={data}
        width={
          ref.current.clientWidth -
          parseInt(getComputedStyle(ref.current).paddingRight)
        }
        setImage={props.setImage}
      />
    );
  }

  return (
    <Card className="card">
      <Card.Body ref={ref} id="bodyy">
        {getBody()}
      </Card.Body>
      <Card.Footer>
        <Search
          makeRequest={makeRequest}
          setData={setData}
          req={req}
          setReq={setReq}
        />
      </Card.Footer>
    </Card>
  );
};

export default GifContainer;
