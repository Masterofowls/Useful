import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div>
    <h1>Useful Web Examples</h1>
    <h2>
    <ul>
      <li> wget --wait=2 --level=inf --limit-rate=20K --recursive --page-requisites --user-agent=Mozilla --no-parent --convert-links --adjust-extension --no-clobber -e robots=off https://spaces.w3schools.com</li>
    </ul>
    </h2>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
