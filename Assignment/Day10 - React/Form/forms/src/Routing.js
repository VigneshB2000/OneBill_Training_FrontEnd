import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Form from './components/Form'
import Display from './components/Display'

const routing = (
  <Router>
    <div>
      <Link to="/">Form</Link>
    </div>
    <div>
      <Link to="/display">Display</Link>
    </div>
    <div>
      <Route path="/" component={Form}></Route>
      <Route path="/Display" component={Display}></Route>
    </div>
  </Router>
);

export default routing