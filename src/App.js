import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Loading from './pages/Loading';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)


// Pages
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));
const AdminPage = React.lazy( () => import('./pages/admin/Home'));
const EmployeePage = React.lazy( () => import('./pages/employee/Home'));

class App extends Component {

  render() {
    return (
      <Router>
      <React.Suspense fallback={loading} >
        <div className="App">
          <Switch>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
            <Route path="/admin">
              <AdminPage/>
            </Route>
            <Route path="/employee">
              <EmployeePage/>
            </Route>
            <Route path="">
              <Loading/>
            </Route>
          </Switch>
      </div>
      </React.Suspense>
      </Router>
    );
  }
}
     // <HashRouter>
      //     <React.Suspense fallback={loading}>
      //       <Switch>
      //         <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
      //         <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
      //         <Route path="/djf" name="Home" render={props => <AdminPage {...props}/>} />
      //         <Route path="/" name="employee page" render={props => <EmployeePage {...props}/>} />
      //         <Route exact path="/" name="Register Page" render={props => <Register {...props}/>} />
      //       </Switch>
      //     </React.Suspense>
      // </HashRouter>
export default App;