import styled from 'styled-components'

const Input = styled.input`
width:150px;
height:50px;
border-radius:12px;
padding:10px;
border:2px solid grey;

&:hover{
border:2px solid black;
}
&:focus{
    outline:none;
    border:2px solid blue;
}
`


export default Input