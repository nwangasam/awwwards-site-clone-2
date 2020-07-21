import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderNav = styled(motion.div)`
    position: absolute;
    z-index: 99;
    left: 0;
    right: 0;
    top: 72px;
    width: 100%;
    height: 0;
`

export const Logo = styled.div`
    a {
        font-size: 1.8rem;
        font-weight: 800;
        color: ${props => props.theme.text}
    }
    
    span {
        position: relative;
        bottom: 2px;
        display: inline-block;
        margin: 0 4px;
        width: 1rem;
        height: 1rem;
        border-radius: 100%;
        background: ${props => props.theme.red}
    }
    
`;

export const Menu = styled.div`
    button {
        border: none;
        outline: none;
        background: none;
        transform-origin: center;
        padding: 20px;
        margin: 8px;

        span {
            width: 36px;
            display: block;
            height: 8px;
            margin: 8px;
            background: ${props => props.theme.text}
        }
    }
`;