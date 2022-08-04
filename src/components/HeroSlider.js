import React from 'react'
import {Carousel} from 'react-bootstrap'

const HeroSlider = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={3000} key={Math.random()}>
                    <img
                        className="d-block w-100"
                        src="https://cdn.cnnindonesia.com/cnnid/images/Logo-CNN-Indonesia-Peta-Indonesia.jpg?v=10.5.5"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000} key={Math.random()}>
                    <img
                        className="d-block w-100"
                        src="https://awsimages.detik.net.id/community/media/visual/2022/08/01/dok-cnn-indonesia-tv_169.png?w=700&q=90"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000} key={Math.random()}>
                    <img
                        className="d-block w-100"
                        src="https://akcdn.detik.net.id/visual/2016/04/15/e91936e7-5b8a-4b55-8d45-0310664f6195_169.jpg?w=980&q=90"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000} key={Math.random()}>
                    <img 
                        className="d-block w-100"
                        src="https://akcdn.detik.net.id/visual/2016/04/15/5c9bbd60-198b-4663-8307-1c41abf6d51a_169.jpg?w=980&q=90"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default HeroSlider;