import { useState } from "react";
import GifContainer from "./gifs/GifContainer";
import MesContainer from "./mes/MesContainer";
import "./index.css";


function App() {
  let [data, setData] = useState([]);
  let [window, setWindow] = useState("mes");

  function setNewData(img) {
    setData((prevState) => [...prevState, img]);
  }

  function deleteData(time) {
    setData((prevState) => prevState.filter((m) => m.time != time));
  }
  return (
    <>
      <div className="App">
        <h3 className="header">Мессенджер с гифками</h3>
        {window == "gif" ? (
          <GifContainer setImage={setNewData} setWindow={setWindow} />
        ) : (
          <MesContainer
            data={data}
            setMes={setNewData}
            deleteMes={deleteData}
            setWindow={setWindow}
          />
        )}
      </div>
    </>
  );
}

export default App;
