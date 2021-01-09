import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, Form, Button, Row } from 'react-bootstrap'
import './navbar.css'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return (
            <div>
                <Nav
                    className="Navbar"
                >
                    <h3 className="navTitle">Game Deals</h3>
                    {/* <Nav.Item>
                        <NavLink
                            className="navbarLink"
                            activeClassName=""
                            exact
                            to="/"
                        >
                            Home
                        </NavLink>
                    </Nav.Item> */}
                </Nav>
            </div >
        )
    }

}


export default Navbar