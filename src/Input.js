import styled from 'styled-components'

const Input = styled.input`
width:150px;
height:50px;
border-radius:12px;
padding:10px;
border:none;

&:hover{
border:none;
}
&:focus{
    outline:none;
}

${props => () => {

    if (props.type == 'default') {
        return `
        border:2px solid grey;

           &:hover{
             border:2px solid black;
             }

          &:focus{
           outline:none;
           border:2px solid blue;
           }
        `
    }
        if (props.type == 'error') {
            return `
        border:2px solid red;

        &:hover{
            border:2px solid black;
        }
        &:focus{
            border:2px solid red;
        }
        `
        }

        if(props.type == 'disabled'){
            return `
            border:none;
            background-color:lightgrey;
            cursor:default;
            `
        }
    }}
`


export default Input