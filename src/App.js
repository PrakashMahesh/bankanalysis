import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


import ProductDisplay from "./pages/ProductDisplay/productdisplay"
const App = () => (
  <div >
  <Router>
      <Switch>
        <Route exact path="/" component={ProductDisplay} />
       
      </Switch>
  </Router>
  </div>
)

export default App
