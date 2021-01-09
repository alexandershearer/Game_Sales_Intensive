import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import './carousel.css'

class HomeCarousel extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return (
            <div>
                <Carousel className="homeCarousel">
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="https://pbs.twimg.com/media/Ebp7LNUUcAAHmaS.jpg:large"
                            alt="Third slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="https://i.redd.it/2ei5g6azyf331.jpg"
                            alt="Third slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2020/07/Assassins-Creed-Valhalla-Box-Art-3.jpg"
                            alt="Third slide" />
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }

}


export default HomeCarousel