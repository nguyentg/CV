import { BrowserRouter as Router} from "react-router-dom";
import RouterURL from '../routers/RouterURL';
import './../css/App.css';
import HeaderTop from './HeaderTop';
import Menu from './Menu';
import Search from './Search';
import Carousel from './Carousel';
import Footer
 from "./Footer";
function App() {
  return (
    <Router>
      <HeaderTop/>
      <Menu/>
      <Search/>
      <Carousel/>
      <RouterURL/>
      <Footer/>
    </Router>
  );
}

export default App;
