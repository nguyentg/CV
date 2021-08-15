import './../css/App.css';
import HeaderTop from './HeaderTop';
import Menu from './Menu';
import Search from './Search';
import Carousel from './Carousel';
import JobContent from './JobContent';
import Pagination from './Pagination';

function App() {
  return (
    <div className="App">
      <HeaderTop/>
      <Menu/>
      <Search/>
      <Carousel/>
      <JobContent/>
      <Pagination/>
    </div>
  );
}

export default App;
