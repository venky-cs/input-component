import './App.css';
import styled from 'styled-components'
import Input from './Input'
import PhoneIcon from '@material-ui/icons/Phone';
import LockIcon from '@material-ui/icons/Lock';

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
const FlexRow =styled.div`
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
        <Flex className="errorFocus">
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
        <FlexRow>
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
        </FlexRow>
      </Row>
      <br />


      <Row>
        <FlexRow>
          <Flex>
            <p>{'<Input startIcon/>'}</p>
            <Label>Label</Label>
            <div className='position'>
            <PhoneIcon className="icon-start"/>
            </div>
            <Input placeholder="Placeholder" type='title-start'></Input>
          </Flex>
          <Flex>
            <p>{'<Input endIcon/>'}</p>
            <Flex>
              <Label>Label</Label>
              <div className='position'>
              <LockIcon className="icon-end"/>
              </div>
              <Input placeholder="Placeholder" type='title-end'></Input>
            </Flex>
          </Flex>
        </FlexRow>
      </Row>
      <br />

      <Row>
        <p>{'<Input value="text"/>'}</p>
        <Flex>
          <Label>Label</Label>
          <Input placeholder="Placeholder" type='title' value="Text"></Input>
        </Flex>
      </Row>
      <br />

      <Row>
        <FlexRow>
          <Flex>
            <p>{'<Input size="sm"/>'}</p>
            <Label>Label</Label>
            <Input placeholder="Placeholder" size='sm'></Input>
          </Flex>
          <Flex>
            <p>{'<Input size="md"/>'}</p>
            <Flex>
              <Label>Label</Label>
              <Input placeholder="Placeholder" size='md'></Input>
            </Flex>
          </Flex>
        </FlexRow>
      </Row>
      <br />

      <Row>
        <p>{'<Input fullWidth />'}</p>
        <Flex>
          <Label>Label</Label>
          <Input placeholder="Placeholder" size="full"></Input>
        </Flex>
      </Row>
      <br />

      <Row>
        <p>{'<Input multiline row="4"/>'}</p>
        <Flex>
          <Label>Label</Label>
          <textarea rows="4" placeholder="placeholder"></textarea>
        </Flex>
      </Row>
      <br />

      <footer>
        <p>venky-cs @ DevChallenges.io</p>
      </footer>
    </div>
  );
}

export default App;
