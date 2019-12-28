import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavigationBar from './components/layout/NavigationBar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectPage from './components/project/ProjectPage'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/project/CreateProject'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render(){
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar/>
        <ToastContainer
          hideProgressBar
          autoClose={2000}
          />
				<Switch>
					<Route exact path='/' component={SignIn}/> 
          <Route path='/project/:id' component={ProjectPage}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/createproject' component={CreateProject}/>
				</Switch>
      </div>
    </BrowserRouter>
  );
  }
}

export default App;
