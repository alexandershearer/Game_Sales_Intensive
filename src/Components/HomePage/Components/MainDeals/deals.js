import React, { Component } from 'react'
import './deals.css'

class MainDeals extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isLoaded: false,
            error: null,
        }
    }


    //Async Goes here without the word 'function'
    async getDeals() {
        const { id } = this.props
        try {
            const responce = await fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=${id}`)
            const json = await responce.json()
            this.setState({
                data: json,
                isLoaded: true
            })
            return json
        } catch (error) {
            console.log(error)
            this.setState({
                error: error,
                isLoaded: true
            })
            return error
        }
    }

    //Function for parsing out each game
    renderGameCards() {
        console.log("Calling card render function")
        return this.state.data.map((game) => {
            const { title, salePrice, gameID } = game
            return (
                <div className="gameDeal" key={gameID}>
                    {title}
                    {salePrice}
                </div>
            )
        })
    }

    componentDidMount() {
        this.getDeals()
        console.log(this.props.id)
    }

    render() {
        if (!this.state.isLoaded || this.state.error) {
            return (
                <div>
                    <p>Error</p>
                </div>
            )
        } else {
            return (
                <div>
                    {this.renderGameCards()}
                </div>
            )
        }
    }
}


export default MainDeals