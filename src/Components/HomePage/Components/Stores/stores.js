import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Media, Col } from 'react-bootstrap'
import './stores.css'

class HomeStores extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    getStores() {
        let storeArray = this.props.stores
        return storeArray.map((store, i) => {
            console.log(store.images.icon)
            function storeButton() {
                if (store.isActive) {
                    return (
                        <Link to={`/store/${store.storeID}`} key={i} className="storeBar">
                            <p className="storeName">{store.storeName}</p>
                        </Link>
                    )
                }
            }
            return storeButton()
        })
    }


    componentDidMount() {
        this.getStores()
    }

    render() {
        if (!this.props.stores) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div className="storeList">
                    {this.getStores()}
                </div>
            )
        }

    }
}

export default HomeStores