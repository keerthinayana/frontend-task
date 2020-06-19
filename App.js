import React,{Component} from 'react'
import Login from '../src/Components/LoginSignupform'

class App extends Component {
  render() {
    return (
      <div className = "App">
        <Login />
        <div style = {{"margin-top" : "200px" }}>
        </div>
      </div>
    );
  }
}
export default App;