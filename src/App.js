import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Header from './components/Header';
import NotesPage from './pages/NotesPage';
import Notes from './pages/Note';

import './App.css';

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Route component={NotesPage} path="/" exact />
          <Route component={Notes} path="/note/:id" />
        </div>
        
      </div>
    </Router>
  );
}

export default App;
