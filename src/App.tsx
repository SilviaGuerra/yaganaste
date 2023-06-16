import React from "react";
import { store } from "./components/store/store";
import { Provider } from "react-redux";
import "./App.css";
import CardBank from "./components/Card";
import Body from "./components/Body";

function App() {
  return (
    <Provider className="App" store={store}>
      <Body />
      <CardBank />
    </Provider>
  );
}

export default App;
