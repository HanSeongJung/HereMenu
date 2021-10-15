import styled from 'styled-components'

export default styled.div`
    width:100%;
    height: 163px;
    background-size:     cover;                     
    background-repeat:   no-repeat;
    background-position: center center;  
    background-image: url("${props => props.src}");
`