import { Row, Col, FormGroup, Form, Input, Label, Button } from 'reactstrap';

const Themes = () => {
    return (
        <Form className='themes'>
            <Row>
                <Col md={8}>            
                <FormGroup tag='fieldset'>
                    <legend>Themes</legend>
                    <FormGroup check>
                        <Input name='theme' type='radio'></Input>
                        <Label check>Star Wars Opening Crawl</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input name='theme' type='radio'></Input>
                        <Label check>Ewok</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input name='theme' type='radio'></Input>
                        <Label check>Wookie</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input name='theme' type='radio'></Input>
                        <Label check>Countries of the World</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input name='theme' type='radio'></Input>
                        <Label check>Animaniacs Song Lyrics</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input name='theme' type='radio'></Input>
                        <Label check>Puns</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input name='theme' type='radio'></Input>
                        <Label check>Fun Facts</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input name='theme' type='radio'></Input>
                        <Label check>Pulp Fiction Quotes</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input name='theme' type='radio'></Input>
                        <Label check>Transformers</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input name='theme' type='radio'></Input>
                        <Label check>Binary</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input name='theme' type='radio'></Input>
                        <Label check>Constitution</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input name='theme' type='radio'></Input>
                        <Label check>Drag Queens</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input name='theme' type='radio'></Input>
                        <Label check>We Just Decided To</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input name='theme' type='radio'></Input>
                        <Label check>Dungeons & Dragons</Label>
                    </FormGroup>
                </FormGroup>
                </Col>
                <Col md={3}>
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
                </Col>
            </Row>
        </Form>
    );
};

export default Themes;


//Radio Buttons instead of traditional---also demonstrates onClick functions

// import React, { useState } from 'react';
// import { Button, ButtonGroup } from 'reactstrap';

// function Themes(props) {
// const [cSelected, setCSelected] = useState([]);
// const [rSelected, setRSelected] = useState(null);

// const onCheckboxBtnClick = (selected) => {
//   const index = cSelected.indexOf(selected);
//   if (index < 0) {
//     cSelected.push(selected);
//   } else {
//     cSelected.splice(index, 1);
//   }
//   setCSelected([...cSelected]);
// };
// return (
//   <div>
//     <h5>Radio Buttons</h5>
//     <ButtonGroup>
//       <Button
//         color="primary"
//         outline
//         onClick={() => setRSelected(1)}
//         active={rSelected === 1}
//       >
//         Radio 1
//       </Button>
//       <Button
//         color="primary"
//         outline
//         onClick={() => setRSelected(2)}
//         active={rSelected === 2}
//       >
//         Radio 2
//       </Button>
//       <Button
//         color="primary"
//         outline
//         onClick={() => setRSelected(3)}
//         active={rSelected === 3}
//       >
//         Radio 3
//       </Button>
//     </ButtonGroup>
//     <p>Selected: {rSelected}</p>
//     </div>
//   );
// }

// export default Themes;