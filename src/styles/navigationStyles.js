import styled from "styled-components"
import { motion } from "framer-motion"

export const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.red};
  color: #000;
  z-index: 100;
  overflow: hidden;
`
export const NavHeader = styled.div`
  position: relative;
  top: 72px;
  h2 {
    color: ${({ theme }) => theme.background};
  }
`

export const NavList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  ul {
    padding: 0;
    li {
      list-style: none;
      font-size: 3rem;
      text-transform: uppercase;
      height: 96px;
      line-height: 96px;
      font-weight: 900;
      overflow: hidden;
      .link {
        color: ${({ theme }) => theme.background};
        position: relative;
        display: flex;
        align-items: center;
        .arrow {
          height: 76px;
          margin-right: 8px;
          svg {
            width: 100px;
            path {
              fill: ${({ theme }) => theme.background};
            }
          }
        }
      }
    }
  }
`

export const NavFooter = styled.div``

export const NavVideos = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 28%;
  z-index: -1;
  height: 100%;
  width: 100%;
  background: #000;
  .reveal {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background: ${props => props.theme.red};
  }

  .video {
    position: absolute;
    height: 100%;
    margin: 0;
    background: #000;
    z-index: -1;
    video {
      height: 100%;
    }
  }
`

export const CloseNav = styled.div`
  button {
    transform-origin: center;
    border: none;
    background: none;
    padding: 20px;

    span {
      width: 36px;
      height: 8px;
      display: block;
      background: ${({ theme }) => theme.background};
      margin: 8px;
    }
  }
`
