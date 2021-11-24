import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import BankStatementAnalysis from "./components/bankanalysis"
import FileUploadPage from "./components/Input/fileupload"
import login from "./components/Input/login"
import BankChart from "./formLayout/formelements/chart"

const App = () => (
  <div >
  <Router>
      <Switch>
        <Route exact path="/" component={login} />
        <Route exact path="/fileupload" component={FileUploadPage} />
        <Route exact path="/bankAnalysis" component={BankStatementAnalysis} />
      </Switch>
  </Router>
  </div>
)

export default App
