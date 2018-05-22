import styled from "styled-components";

export default styled.div `
min-height:5vh;
background-color: rgba(98,205,245,.6);
margin-left: ${props=>(props.isOpen?"15rem":"0")};
transition: margin-left .15s;
transition: margin-right .15s;
color: rgba(250,250,250,1);
display: flex;
flex-flow: row nowrap;
align-items: center;
padding: 0.3rem 1rem;
h1{
  font-size:2rem;
  margin : 0 2rem;
}
box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);

`;
