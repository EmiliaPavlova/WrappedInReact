import React, { Component } from 'react';
import NumericTextBox from './components/NumericTextBox';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
          <h2>Numeric TextBox</h2>
          <div className='App'>
            <p className='App-intro'> Add new product </p>

            <NumericTextBox
              options={{
                format: 'c0', //'c', 'p0', 'c0'
                placeholder: 'Select A Value',
                min: 0,
                max: 30,
                step: 1
              }}
              methods={{
                value:[]
              }}
              events={{
                change: () => {},
                spin: () => {}
              }}
              triggerEvents={['onFocus']}
              unbindEvents={['select']} />
          </div>
      </div>
    );
  }
}

export default App;
