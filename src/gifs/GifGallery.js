import {
  CellMeasurerCache,
  createMasonryCellPositioner,
  CellMeasurer,
  Masonry,
} from "react-virtualized";
import "./gif.css";

const GifGallery = (props) => {
  const cache = new CellMeasurerCache({
    defaultHeight: 200,
    defaultWidth: 200,
    fixedWidth: true,
  });
  const cellPositioner = createMasonryCellPositioner({
    cellMeasurerCache: cache,
    columnCount: 3,
    columnWidth: 200,
    spacer: 10,
  });

  function cellRenderer(data) {
   
    const datum = props.gifs[data.index];

    return (
      <CellMeasurer cache={cache} index={data.index} key={datum.id} parent={data.parent}>
        <div style={data.style}>
          <img
          className="gif"
          onClick={() => {
            props.setImage({type: "img", url: datum.images.fixed_height.url, height: datum.images.fixed_width.height, width: datum.images.fixed_width.width, time: new Date})
            props.setWindow("mes");
          }}
            src={datum.images.fixed_height.url}
            style={{
              height: datum.images.fixed_width.height,
              width: datum.images.fixed_width.width,
            }}
          />
        </div>
      </CellMeasurer>
    );
  }



  return (
    <Masonry
    class="galery"
      cellCount={props.gifs.length}
      cellMeasurerCache={cache}
      cellPositioner={cellPositioner}
      cellRenderer={cellRenderer}
      height={document.getElementById('loading').clientHeight}
      width={props.width}
    />
  );
};



export default GifGallery;


