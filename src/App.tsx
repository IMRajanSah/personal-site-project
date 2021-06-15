import React from 'react';
import './App.css';
import{BrowserRouter, Route, Switch} from "react-router-dom";

import main from './pages/main';
import AddQuery from './pages/AddQuery';
import EditQuery from './pages/EditQuery';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Switch>
          
          <Route exact path="/" component={main} />
          <Route exact path="/add-query" component={AddQuery} />
          <Route exact path="/edit-query/:id" component={EditQuery} />
          <Route path="*">
           <h3> 404 page not found !</h3>
          </Route>
         </Switch>
       </BrowserRouter>
      
    </div>
  );
}

export default App;
