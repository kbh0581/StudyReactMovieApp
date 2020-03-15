import React from 'react';
import {HashRouter,Route} from "react-router-dom"
import About from "./routes/About"
import Home from "./routes/Home"
import Detail from "./routes/Detail"

import Navigation from "./component/Navigation"

const App = () => {
  return (
    <HashRouter>
      <Navigation/>
      <Route path="/about" component={About}>
      </Route>
      <Route exact={true} path="/" component={Home}>
      </Route>

      <Route exact={true} path="/movie:id" component={Detail}>
      </Route>
    </HashRouter>
  )

}

export default App;