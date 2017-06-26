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
                max: 10,
                step: 0.02
              }}
              methods={{
                value:[]
              }}
              events={{
                change: function() {console.log('value changed')},
                spin: function() {console.log('number spinned')}
              }}
              triggerEvents={['onFocus']}
              unbindEvents={['select']} />
          </div>
      </div>
    );
  }
}

export default App;
