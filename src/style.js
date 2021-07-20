import styled from 'styled-components'

export const Box= styled.span`
    height:100px;
    width:100px;
    border-width:1px;
    border-style: solid;
    border-color: grey;
    display: flex;
    color: gold;
    justify-content: center;
    align-items: center;
    font-size:5em;

    ${props => props.pos==='l' && `
        border-left: none;
    `}
    ${props => props.pos==='r' && `
        border-right : none;
    `}
`;

export const Input=styled.input`

    :focus{
        box-shadow: inset 0 -1px 0 #fff;
        border: 1px solid #ced4da;
    }

    :active{
        border-color: none;
    }
`;
