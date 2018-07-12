import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  from { transform: rotate(0deg); } 
  to { transform: rotate(360deg); }
`;

const lol = keyframes`
    0% { transform: scale(0.2, 0.2); }
    100% { transform: scale(1,1); }
`;

const Avetar = styled.div`
  background-image: url(${props => props.image});
  border-radius: 50%;
  background-color: ${props => props.color || '#342e37'};
  width: ${props => props.size || '400px' };
  height: ${props => props.size || '400px' };
  box-shadow: 0 3px 6px 0 hsla(0, 0%, 0%, 0.5);
  ${props=> props.loading ? `animation: ${lol} 1s cubic-bezier(0.45, 1.57, 0.46, 0.74) 0s 1;` : null}
  ${
    props => props.clicked ? `
    animation-name: ${spin};
    animation-duration: 1000ms;
    animation-iteration-count: 1;
    animation-timing-function: linear;
    ` : null
  }
  
  
 
  
`;

export default Avetar;

