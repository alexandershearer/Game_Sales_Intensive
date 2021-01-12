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
                        <Carousel.Caption className="carouselCaption">
                            <h3>Cyberpunk2077</h3>
                            <p>"In short, neither the PS4 or Xbox One is able to hold a steady frame rate, and they often freeze altogether for seconds at a time. On the base model Xbox One,
                                it appears to be running at less than 720p resolution at times (though that fluctuates due to dynamic scaling)." - IGN</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="https://i.redd.it/2ei5g6azyf331.jpg"
                            alt="Third slide" />
                        <Carousel.Caption className="carouselCaption">
                            <h3>DOOM Eternal</h3>
                            <p>"The game itself (because we always get to see gameplay, even though the show clearly can’t afford good computer animation) appears to be a parody of violent
                            video games, all disembowelment and close-range executions. The teen, played by a 20-something actor,
                                manhandles his poor controller, suggesting the game is either astonishingly complex or the teenager is dumb as a rock." - Polygon</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2020/07/Assassins-Creed-Valhalla-Box-Art-3.jpg"
                            alt="Third slide" />
                        <Carousel.Caption className="carouselCaption">
                            <h3>Assassins Creed: Valhalla</h3>
                            <p>"Though Valhalla embodies a fascinating evolution for Assassin’s Creed, you don’t need any familiarity with the franchise to appreciate the tale of
                            Eivor and the Raven Clan’s incursion into Anglo-Saxon England. It’s a massive story with small beginnings, following your Norse
                                hero’s attempts to forge alliances in hostile territory." - Gameinformer</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }

}


export default HomeCarousel