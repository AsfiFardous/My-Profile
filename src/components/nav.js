import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={['intro', 'first', 'second', 'cta']} currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <a href="#">About Me</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="first">
                    <a href="#">Projects</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="second">
                    <a href="#">Publication</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="cta">
                    <a href="#">Contact</a>
                </Scroll>
            </li>
            <li>
                <a href="https://docs.google.com/document/d/e/2PACX-1vTBh9rVqhm7EmDQB8zqnphLReV99sQ2-rDIuTwviGeypkaSdwfj1zv6FdmTARMAKpwjLNGpngSKjmK_/pub">View CV</a>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav