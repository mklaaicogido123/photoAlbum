import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import ImageUpload from "./pages/ImageUpload";
import GalleryAlbum from "./pages/Gallery/GalleryAlbum";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/gallery" exact component={GalleryAlbum} />
        <Route path="/imageUpload" exact component={ImageUpload} />
      </Switch>
    </Router>
  );
}

export default App;
