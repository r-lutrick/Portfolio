import Carousel from 'react-bootstrap/Carousel';

/* Function for dynamically rendering Carousel Items */
const CarouselFunction = (props) => {
    const { carouselList } = props

    return (
        <Carousel variant='dark'>
            {carouselList.map((carouselListItem) => {
                return (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carouselListItem.image}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className='text-black'>{carouselListItem.title}</h3>
                            <p className='text-black'>{carouselListItem.text}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    );
}

export default CarouselFunction;