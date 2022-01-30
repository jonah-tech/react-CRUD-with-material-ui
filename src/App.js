import React from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./actions/store";
import DCandidates from "./components/DCandidates";
import { Container } from "@material-ui/core";
//import DCandidateForm from "./components/DCandidateForm";

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
        <DCandidates />
      </Container>
    </Provider>
  );
}

export default App;
