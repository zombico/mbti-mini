import React, { Component } from 'react'
import axios from "axios";
import RadioRow from './components/RadioRow'
import Results from './components/Results'
import './components/Questions-Page.css';

class App extends Component {
  state={
    email: '',
    q01: '',
    q02: '',
    q03: '',
    q04: '',
    q05: '',
    q06: '',
    q07: '',
    q08: '',
    q09: '',
    q10: '',
  }

  handleQ(q, answer) {  
    this.setState({[q]: answer})
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault()
    const obj = this.state
    const answers = Object.keys(obj).map(i => obj[i])
    answers.shift()
    console.log(answers)
    if (answers.length > 8) {    
      try {      
        const email = this.state.email      
        await axios.post('/seeresult/signup', { email, answers  })
      } catch(e) {
        console.error(e)
      }
    } else alert('Please answer all the questions')
  }

render() {
  const options = [1,2,3,4,5,6,7]
  return (
    <div className="App">
      <Results />
      <section className="intro">
        <h1>Discover Your Perspective</h1>
        <h2>Complete the 7 min test and get a detailed report of your lenses on the world.</h2>
      </section>
      <section className="all-questions">
        
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <RadioRow
          id="q01" 
          options={options}
          handleQ={(q, a) => this.handleQ(q, a)}
          title="You find it takes effort to introduce yourself to other people."
        />
        <RadioRow 
          id="q02" 
          options={options}
          handleQ={(q, a) => this.handleQ(q, a)}
          title="You consider yourself more practical than creative."
        />
        <RadioRow 
          id="q03" 
          options={options}
          handleQ={(q, a) => this.handleQ(q, a)}
          title="Winning a debate matters less to you than making sure no one gets upset."
        />
        <RadioRow 
          id="q04" 
          options={options}
          handleQ={(q, a) => this.handleQ(q, a)}
          title="You get energized going to social events that involve many interactions."
        />
        <RadioRow 
          id="q05" 
          options={options}
          handleQ={(q, a) => this.handleQ(q, a)}
          title="You often spend time exploring unrealistic and impractical yet intriguing ideas."
        />
        <RadioRow 
          id="q06" 
          options={options}
          handleQ={(q, a) => this.handleQ(q, a)}
          title="Deadlines seem to you to be of relative rather than absolute importance."
        />
        <RadioRow 
          id="q07" 
          options={options}
          handleQ={(q, a) => this.handleQ(q, a)}
          title="Logic is usually more important than heart when it comes to making important decisions."
        />
        <RadioRow 
          id="q08" 
          options={options}
          handleQ={(q, a) => this.handleQ(q, a)}
          title="Your home and work environments are quite tidy."
        />
        <RadioRow 
          id="q09" 
          options={options}
          handleQ={(q, a) => this.handleQ(q, a)}
          title="You do not mind being at the center of attention."
        />
        <RadioRow 
          id="q10" 
          options={options}
          handleQ={(q, a) => this.handleQ(q, a)}
          title="Keeping your options open is more important than having a to-do list."
        />
        <section className="question-container">
        <label htmlFor="email">Your Email</label>
        <input 
          type="email"
          onChange={this.handleChange}
          name="email"
          className="emailbox"
          placeholder="you@example.com"
          required
        />
        </section>
        <button
          type="submit"
          className="submit"      
        >Save & Continue
        </button>
        </form>
      </section>
      
      

      
    </div>
    )
  }  
}

export default App;
