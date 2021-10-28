import React from 'react';
import Calendar from './components/calendarComponet/Calendar';
import NavbarComponent from './components/NavbarComponent';


class App extends React.Component {
  render(){
    
    return (
      <React.Fragment>
        <NavbarComponent/>
        <div className="container-md" style={{marginTop: '70px'}}>
          <Calendar />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
