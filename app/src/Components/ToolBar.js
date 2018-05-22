import styled, {css} from "styled-components"

const Selected = css `

color: rgb(93,93,93);
background-color: rgba(250,102,102,.73);

`


export default styled.div `
display: flex;
position: relative;
min-height: 56px;
align-items: center;
padding-left: 24px;
padding-right: 24px;
background-color:inherit

${props => (
 props.selected
 ? Selected
 : '')}
`;
