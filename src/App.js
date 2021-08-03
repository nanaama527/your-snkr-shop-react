import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import './App.css';
import Brands from './Brands';
import Sneakers from './Sneakers';
import Header from './Header';
import SneakerNew from './SneakerNew';


function App() {
  return (
    <Router>
      <Nav/>
      <Header/>
      <SneakerNew />
      <div className="container">
        <Switch>
          {/* <Route exact path="/" component={ Home } /> */}
          <Route exact path="/sneakers/new" component={SneakerNew} />
          <Route exact path="/sneakers" component={Sneakers} />
          <Route exact path="/brands" component={Brands} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
