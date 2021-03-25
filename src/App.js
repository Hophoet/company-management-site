import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)


// Pages
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));
const AdminPage = React.lazy( () => import('./pages/admin/Home'));

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route path="/" name="Home" render={props => <AdminPage {...props}/>} />
              <Route exact path="/" name="Register Page" render={props => <Register {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;