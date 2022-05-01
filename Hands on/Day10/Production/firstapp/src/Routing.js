import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import About from './components/about/About'
import contact from './components/contact/Contact'
import home from './components/home/home'
const routing = ( 
<Router>
    <div><Link to='/about'>About</Link></div>
     <div><Link to='/home'>Home</Link></div>
     <div><Link to='/contact'>Contact</Link></div>
    <div>
        <Route path = '/about' component = {About}></Route>
        {/* <Route exact path = '/' component = {About}></Route> so it displays About only when it is only /  */}
        <Route path = '/home' component = {home}></Route>
        <Route path = '/contact' component = {contact}></Route>
    </div>

    </Router>
)
export default routing

