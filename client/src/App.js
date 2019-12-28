import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavigationBar from './components/layout/NavigationBar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectPage from './components/project/ProjectPage'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/project/CreateProject'

class App extends Component {
  render(){
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar/>
				<Switch>
					<Route exact path='/' component={SignUp}/> 
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
