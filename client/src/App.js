import React from 'react';
import { Route } from 'react-router-dom';
import Calendar from './components/calendarComponet/Calendar';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';
import EventsComponent from './components/EventsComponent';
import ProjectComponent from './components/ProjectComponent';
import ProjectDetail from './components/ProjectDetail';
import Home from './components/Home';
class App extends React.Component {
  render(){
    // className="container-md" style={{marginTop: '70px'}}
    return (
      <React.Fragment>
        <NavbarComponent/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/events" component={Calendar}/>
          <Route exact path="/projects" component={ProjectComponent}/>
          <Route exact path="/events/:id" component={EventsComponent}/>
          <Route exact path="/projects/:id" component={ProjectDetail}/>
        {/* <FooterComponent/> */}
      </React.Fragment>
    );
  }
}

export default App;
