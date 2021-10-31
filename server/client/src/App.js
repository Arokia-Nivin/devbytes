import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Calendar from './components/calendarComponet/Calendar';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';
import EventsComponent from './components/EventsComponent';
import ProjectComponent from './components/ProjectComponent';
import AboutUsComponent from './components/AboutUsComponent';
import Home from './components/Home';
import NotFound from './components/NotFound';
import UpComingEvents from './components/UpComingEvents';
class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <NavbarComponent/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/events" component={Calendar}/>
            <Route exact path="/projects" component={ProjectComponent}/>
            <Route exact path="/events/upcoming" component={UpComingEvents}/>
            <Route exact path="/events/:id" component={EventsComponent}/>
            
            <Route exact path="/aboutus" component={AboutUsComponent}/>
            <Route component={NotFound}/>
        </Switch>
        <FooterComponent/>
      </React.Fragment>
    );
  }
}

export default App;
