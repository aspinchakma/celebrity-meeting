import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Celebrities from './components/Celebrities/Celebrities';
import Error from './components/Error/Error';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import InviteReview from './components/InviteReview/InviteReview';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/inviteCelebrity">
            <Celebrities></Celebrities>
          </Route>
          <Route path="/inviteReview">
            <InviteReview></InviteReview>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
