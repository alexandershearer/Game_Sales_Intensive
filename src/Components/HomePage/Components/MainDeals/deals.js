import React, { Component } from 'react'
import { Media, Col } from 'react-bootstrap'
import './maindeals.css'

class MainDeals extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    getDeals() {
        let dealArray = this.props.deals
        return mainDeals.map((deals, i) => {
            <div key={i} >

            </div>
        )
    })

}

render() {
    if (!this.props.maindeals) {
        return <h1>Loading...</h1>
    } else {
        return (

            )
    }

}
}

export default MainDeals