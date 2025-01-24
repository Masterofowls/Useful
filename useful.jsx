import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div>
    <div>
      <h1>Useful</h1>
      <h2>Wget</h2>
      <ul>
        <li> wget --wait=2 --level=inf --limit-rate=20K --recursive --page-requisites --user-agent=Mozilla --no-parent --convert-links --adjust-extension --no-clobber -e robots=off https://spaces.w3schools.com</li>
      </ul>
    </div>
    <div>
      <h2>Curl</h2>
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));