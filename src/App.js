import './App.css';
import styled from 'styled-components'
import Input from './Input'

const Heading = styled.h3`
margin:100px 0 30px 0;
width:93px;
height:36px;
font-family: 'Poppins', sans-serif;
font-size:24px;
line-height:36px;
`;

const Label = styled.label`
padding:5px 0;
`

const Row = styled.div`
margin-left:10%;`

const Flex = styled.div`
display:flex;
flex-direction:column;
padding-right:100px;

`
const Flexr =styled.div`
display:flex;
`

function App() {
  return (
    <div className="App">
      <Heading>Inputs</Heading>
      <Row>
        <p>{'<Input />'}</p>
        <Flex className="primary">
          <Label>Label</Label>
          <Input placeholder="Placeholder" type="default"></Input>
        </Flex>
      </Row>
      <br />

      <Row>
        <p>{'<Input error/>'}</p>
        <Flex className="errorf">
          <Label>Label</Label>
          <Input placeholder="Placeholder" type='error'></Input>
        </Flex>
      </Row>
      <br />

      <Row>
        <p>{'<Input disabled/>'}</p>
        <Flex>
          <Label>Label</Label>
          <Input placeholder="Placeholder" type='disabled'></Input>
        </Flex>
      </Row>
      <br />

      <Row>
        <Flexr>
        <Flex>
        <p>{'<Input helperText="Some interesting text"/>'}</p>
          <Label>Label</Label>
          <Input placeholder="Placeholder" type='title'></Input>
          <p>Some interesting text</p>
        </Flex>
          <Flex>
        <p>{'<Input helperText="Some interesting text"/>'}</p>
          <Flex className="error">
          <Label>Label</Label>
          <Input placeholder="Placeholder" type='title-error'></Input>
          <p>Some interesting text</p>
          </Flex>
        </Flex>
        </Flexr>
      </Row>
      <br />
    </div>
  );
}

export default App;
