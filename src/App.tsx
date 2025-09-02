import { useState } from "react";
import "./App.css";
import { Circle, Rectangle, Square } from "./components/components.tsx";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        minWidth:"700px",
        height: "100vh",
        padding:"2%"
      }}
    >
      <div
        style={{ display: "flex",gap:"2px", height: "60%", width: "100%" }}
      >
        <div style={{ height: "100%", width: "30%" }}>
          <Rectangle
            orientation="vertical"
            color="orange"
            width="100%"
            height="100%"
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "70%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems:"center",
              width: "100%",
              height: "50%",
            }}
          >
            <Circle color="red" width="50%" height="80%" />
            <Square color="red" width="30%" height="70%" />
            <Rectangle
              orientation="horizontal"
              color="blue"
              width="33%"
              height="60%"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems:"center",
              width: "100%",
              height: "50%",
            }}
          >
            <Rectangle
              orientation="horizontal"
              color="green"
              width="150%"
              height="100%"
            />
            <Circle color="red" width="20%" height="50%" />
            <Circle color="green" width="20%" height="50%" />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems:"center",
          height: "20%",
          width: "100%",
        }}
      >
        <Rectangle
          orientation="horizontal"
          color="blue"
          width="100%"
          height="100%"
        />
        <Circle color="green" width="30%" height="100%" />
        <Rectangle
          orientation="horizontal"
          color="blue"
          width="100%"
          height="100%"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems:"center",
          height: "20%",
          width: "100%",
        }}
      >
        <Circle color="blue" width="25%" height="100%" />
        <Rectangle
          orientation="horizontal"
          color="red"
          width="100%"
          height="100%"
        />
        <Circle color="blue" width="25%" height="100%" />
      </div>
    </div>
  );
}

export default App;
