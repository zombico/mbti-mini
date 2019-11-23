import React, { Component } from 'react'
import RadioRow from './components/RadioRow'
import './App.css';

class App extends Component {
  state={
    email: '',
    q1: ''
  }

  handleQ(q, answer) {
    console.log(q, answer)
    this.setState({[q]: answer})
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

render() {
  const options = [1,2,3,4,5,6,7]
  return (
    <div className="App">
      <section className="intro">
        <h1>Discover Your Perspective</h1>
        <h2>Complete the 7 min test and get a detailed report of your lenses on the world.</h2>
      </section>
      <section className="all-questions">
        <RadioRow
          id="q1" 
          options={options}
          handleQ={(q, a) => this.handleQ(q, a)}
          title="You find it takes effort to introduce yourself to other people."
        />
        <RadioRow 
          id="q2" 
          options={options}
          handleQ={(q, a) => this.handleQ(q, a)}
          title="You consider yourself more practical than creative."
        />
        <section className="question-container">
        <label for="email">Your Email</label>
        <input 
          type="email"
          onChange={this.handleChange}
          name="email"
          className="emailbox"
          placeholder="you@example.com"
        />
        </section>
        <button
         className="submit"      
        >Save & Continue
        </button>
      </section>
      
      

      
    </div>
    )
  }  
}

export default App;
