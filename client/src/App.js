import React from 'react';
import { Route } from 'react-router-dom';
import Calendar from './components/calendarComponet/Calendar';
import NavbarComponent from './components/NavbarComponent';
import ProjectComponent from './components/ProjectComponent';
import FooterComponent from './components/calendarComponet/FooterComponent';
import EventsComponent from './components/EventsComponent';


class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <NavbarComponent/>
        <div className="container-md" style={{marginTop: '70px'}}>
          <Route exact path="/events" component={Calendar}/>
          <Route exact path="/projects" component={ProjectComponent}/>
          <Route exact path="/events/:id" component={EventsComponent}/>
        </div>
        <FooterComponent/>
      </React.Fragment>
    );
  }
}

export default App;
