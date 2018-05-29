import styled from "styled-components";

export default styled.th `
display: table-cell;
padding: 4px 56px 4px 24px;
border-bottom: 1px solid rgba(224, 224, 224, 1);
vertical-align: inherit;
color: rgba(0, 0, 0, 0.54);
font-size: 0.75rem;
font-weight: 500;
text-align: ${props=>(props.first?'left':'center')};
flex-direction: row-reverse;
cursor:${props=>(props.first?'pointer':'normal')};
`;
