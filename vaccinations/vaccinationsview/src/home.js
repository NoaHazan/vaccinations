import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
 
  componentDidMount() {
    this.render();
  }

  render() {    
    return (
      <div class="home-main">
          Hello, please choose an action
      </div>
    );
  }
}

export default Home;