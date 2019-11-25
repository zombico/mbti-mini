import React from "react";
import {
  BrowserRouter as Router,  
  Route  
} from "react-router-dom";
import QuestionPage from './components/QuestionPage'
import Results from './components/Results'

function App() {
  return (
    <Router>
      <Route 
        exact path="/"
        render={() => <QuestionPage />}
      />
      <Route 
        path="/results"
        render={() => <Results />}
      />
    </Router>
  )
}

export default App;