import React from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./actions/store";
import DCandidates from "./components/DCandidates";
import { Container } from "@material-ui/core";
import { ToastProvider } from "react-toast-notifications";
import Header from "./Header";
import Menu from "./Menu";
import Dashboard from "./Dashboard";
import Footer from "./Footer";

function App() {
  return (
    <Provider class="wrapper" store={store}>
      <ToastProvider autoDismiss={true}>
        <Container maxWidth="lg">
          <Header/>
          <Menu/>
          <Dashboard/>
          <DCandidates/>
          <Footer/>
          
        </Container>
      </ToastProvider>
    </Provider>
  );
}

export default App;
