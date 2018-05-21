import styled from "styled-components";

export default styled.div `
min-height:5vh;
background-color: rgba(98,205,245,.6);
margin-left: ${props=>(props.menuDisplay?"20rem":"0")};
margin-right: ${props=>(props.RightDrawerDisplay?"20rem":"0")};
transition: margin-left .15s;
transition: margin-right .15s;
pointer-events: ${props=>(props.menuDisplay?"auto":"auto")};
color: rgba(250,250,250,1);
display: flex;
flex-flow: row nowrap;
align-items: center;
padding: 0.3rem 1rem;
h1{
  font-size:2rem;
  margin : 0 2rem;
}
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`;
