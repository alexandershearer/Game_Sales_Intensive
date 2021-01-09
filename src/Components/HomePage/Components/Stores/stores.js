import React, { Component } from 'react'
import { Media, Col } from 'react-bootstrap'
import './maindeals.css'

class HomeStores extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    getStores() {
        let storeArray = this.props.stores
        return storeArray.map((store, i) => {
            const storeImg = store
            return (
                <div key={i} className="storeBar">

                </div>
            )
        )
    })

}

render() {
    if (!this.props.stores) {
        return <h1>Loading...</h1>
    } else {
        return (

            )
    }

}
}

export default MainDeals