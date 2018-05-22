import styled from "styled-components"

export default styled.div `
overflow-x:${props=>(props.axeX?'auto':'hidden')}
overflow-y:${props=>(props.axeY?'auto':'hidden')}
/* width */
::-webkit-scrollbar {
    width: 0;
}

/* Track */
::-webkit-scrollbar-track {
    background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: transparent;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: transparent;
}
`;
