import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';
import Themes from "./site/Themes";
import Results from './site/Results';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Lorem Ipsum Themes Extravaganza</h2>
      </header>
      <div className='main'>
        <Row>
          <Col className='form'>
            <Themes />
              {/* <FormGroup>
                <Label for='theme'>Select Theme</Label>
                <Input id='theme' name='themechoice' type='select'>
                  <option>Star Wars Opening Crawl</option>
                  <option>Ewok</option>
                  <option>Wookie</option>
                  <option>Countries of the World</option>
                  <option>Puns</option>
                  <option>Fun Facts</option>
                  <option>Pulp Fiction Quotes</option>
                  <option>Transformers</option>
                  <option>Constitution</option>
                  <option>Drag Queens</option>
                  <option>Binary</option>
                  <option>We Just Decided To</option>
                  <option>Dungeons & Dragons</option>
                </Input>
              </FormGroup> */}
              {/* <FormGroup tag='fieldset'>
                <legend>Themes</legend>
                <FormGroup check>
                  <Input name='1' type='radio'></Input>
                  <Label check>Star Wars Opening Crawl</Label>
                </FormGroup>
                <FormGroup check>
                  <Input name='2' type='radio'></Input>
                  <Label check>Ewok</Label>
                </FormGroup>
                <FormGroup check>
                  <Input name='3' type='radio'></Input>
                  <Label check>Wookie</Label>
                </FormGroup>
                <FormGroup check>
                  <Input name='4' type='radio'></Input>
                  <Label check>Countries of the World</Label>
                </FormGroup>
                <FormGroup check>
                  <Input name='5' type='radio'></Input>
                  <Label check>Animaniacs Song Lyrics</Label>
                </FormGroup>
                <FormGroup check>
                  <Input name='6' type='radio'></Input>
                  <Label check>Puns</Label>
                </FormGroup>
                <FormGroup check>
                  <Input name='7' type='radio'></Input>
                  <Label check>Fun Facts</Label>
                </FormGroup>
                <FormGroup check>
                  <Input name='8' type='radio'></Input>
                  <Label check>Pulp Fiction Quotes</Label>
                </FormGroup>
                <FormGroup check>
                  <Input name='9' type='radio'></Input>
                  <Label check>Transformers</Label>
                </FormGroup>
                <FormGroup check>
                  <Input name='10' type='radio'></Input>
                  <Label check>Binary</Label>
                </FormGroup>
                <FormGroup check>
                  <Input name='11' type='radio'></Input>
                  <Label check>Constitution</Label>
                </FormGroup>
                <FormGroup check>
                  <Input name='12' type='radio'></Input>
                  <Label check>Drag Queens</Label>
                </FormGroup>
                <FormGroup check>
                  <Input name='13' type='radio'></Input>
                  <Label check>We Just Decided To</Label>
                </FormGroup>
                <FormGroup check>
                  <Input name='14' type='radio'></Input>
                  <Label check>Dungeons & Dragons</Label>
                </FormGroup>
              </FormGroup>
              <FormGroup>
                <Label for='paragraphs'># of Paragraphs</Label>
                <Input for='paragraphs' id='paragraphs' name='paragraphnumber' type='select'>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </Input>
              </FormGroup>
              <Button type='submit'>Submit</Button>
            </Form> */}
          </Col>
          <Col className='results'>
            <Results />
          </Col>
        </Row>
        <p>something to see</p>
      </div>
    </div>
  );
};

export default App;
