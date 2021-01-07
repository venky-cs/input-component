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

    if (props.type === 'default') {
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
        if (props.type === 'error') {
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

        if(props.type === 'disabled'){
            return `
            border:none;
            background-color:lightgrey;
            cursor:default;
            `
        }

        if(props.type === 'title'){
            return `
            border:2px solid grey;
             &:hover{
            border:2px solid grey;
              }
            `
        }
        if(props.type === 'title-error'){
            return `
            border:2px solid red;
             &:hover{
            border:2px solid red;
              }
            `
        }
        if(props.type === 'title-start'){
            return `
            border:2px solid grey;
            padding-left:30px;
             &:hover{
            border:2px solid grey;
              }
            `
        }
        if(props.type === 'title-end'){
            return `
            border:2px solid grey;
             &:hover{
            border:2px solid grey;
              }
            `
        }
    if (props.size === 'sm') {
        return `
            border:2px solid grey;
            width:130px;
            height:40px;
             &:hover{
            border:2px solid grey;
              }
            `
    }
    if (props.size === 'md') {
        return `
            border:2px solid grey;
            width:180px;
            height:60px;
             &:hover{
            border:2px solid grey;
              }
            `
    }

    if (props.size === 'full') {
        return `
            border:2px solid grey;
            width:100%;
             &:hover{
            border:2px solid grey;
              }
            `
    }
    }}
    
`


export default Input