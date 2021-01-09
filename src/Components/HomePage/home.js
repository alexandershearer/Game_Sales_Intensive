import React, { Component } from 'react'
import HomeCarousel from './Components/Carousel/carousel'
import './home.css'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deals: null,
            stores: null,
            isLoaded: false,
            error: null,
        }
    }

    // async getDeals() {
    //     try {
    //         const responce = await fetch('https://www.cheapshark.com/api/1.0/deals')
    //         const json = await responce.json()
    //         this.setState({
    //             scores: json,
    //             isLoaded: true
    //         })
    //     } catch (error) {
    //         this.setState({
    //             error,
    //             isLoaded: true
    //         })
    //     }
    // }

    async getStores() {
        try {
            const responce = await fetch('https://www.cheapshark.com/api/1.0/stores')
            const json = await responce.json()
            this.setState({
                news: json,
                isLoaded: true
            })
        } catch (error) {
            this.setState({
                error,
                isLoaded: true
            })
        }
    }

    componentDidMount() {
        this.getStores()
    }



    render() {
        if (this.state.error) {
            return <h1>{this.state.error}</h1>
        } else {
            return (
                <div>
                    <HomeCarousel />

                </div >
            )
        }
    }

}


export default Home