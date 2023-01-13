import { useState } from 'react';

export default MyGrid = props => {

  const [showGrid, setShowGrid] = useState(true);
  const myGrid = [];
  const style = {
    global: {
      width: "100%",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "fixed",
      top: 0,
      zIndex: 999,
      pointerEvents: "none"
    },
    wrap: {
      width: props.width,
      height: "100vh",
      margin: "auto",
      display: "grid",
      gridTemplateColumns: "repeat(" + props.columns + ", 1fr)",
      position: "absolute",
      top: 0,
    },
    options: {
      padding: "2px 8px",
      border: "1px solid #000",
      borderRadius: "4px",
      backgroundColor: "#fff",
      fontFamily: "consolas",
      fontSize: "20px",
      color: "#000",
      position: "absolute",
      left: 30,
      bottom: 20,
      cursor: "pointer",
      userSelect: "none",
      pointerEvents: "all",
      checkbox: {
        margin: "0 0 0 7px"
      }
    },
    block: {
      borderLeft: "1px solid " + props.color
    },
    lastBlock: {
      borderRight: "1px solid " + props.color
    }
  };
  for (let i = 0; i < props.columns; i++) myGrid.push(i);
  return (
    <div style={style.global}>
      <div style={style.options}
        onClick={() => setShowGrid(showGrid ? false : true)}
      >
        GRID
        <input
          style={style.options.checkbox}
          type="checkbox"
          checked={showGrid}
          readOnly
        />
      </div>
      <div style={style.wrap}>
        {showGrid
          ? myGrid.map(column => (
            <div style={
              column !== myGrid.length - 1
                ? { ...style.block }
                : { ...style.block, ...style.lastBlock }
            } key={column}></div>
          ))
          : null
        }
      </div>
    </div>
  );
};
