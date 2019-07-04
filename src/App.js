import React, { Component } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';


let marked = require('marked');

class App extends Component {

  state = {
    markdown: ""
  }
  updateMarkDown = function(markdown){
    this.setState({markdown});
  }

  render() {
    let { markdown } = this.state;
    console.log(markdown);

    return (
      <div className="App container">
        <div>
          <Form.Group controlId="formControlsTextarea">
            <Form.Label>
              MarkDown Input
          </Form.Label>
            <Form.Control
              componentClass="textarea"
              placeholder="Enter Markdown"
              value={markdown} onChange={(event) => this.updateMarkDown(event.target.value)}
            >

            </Form.Control>
          </Form.Group>

        </div>
        <div>
          <h1>Markdown Output</h1>
          <div dangerouslySetInnerHTML = {{__html: marked(markdown)/** zobrazeni html */}}>
      
          </div>
        </div>
      </div>
    );
  }
}

export default App;
