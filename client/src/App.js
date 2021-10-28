import React from 'react';
import { Route } from 'react-router-dom';
import Calendar from './components/calendarComponet/Calendar';
import NavbarComponent from './components/NavbarComponent';
import ProjectComponent from './components/ProjectComponent';


class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <NavbarComponent/>
        <div className="container-md" style={{marginTop: '70px'}}>
          <Route exact path="/events" component={Calendar}/>
          <Route exact path="/projects" component={ProjectComponent}/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
