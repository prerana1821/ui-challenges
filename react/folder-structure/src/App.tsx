import * as React from "react";
import { files } from "./data";
import Folder from "./Folder";
import "./App.css";

export default function App() {
  return (
    <div style={{ height: "100vh", backgroundColor: "#18181b" }}>
      <div
        style={{
          width: "35%",
          backgroundColor: "#27272a",
          height: "100%",
          overflowX: "scroll",
          padding: "10px",
          color: "#fff",
        }}
      >
        <Folder files={files} />
      </div>
    </div>
  );
}
