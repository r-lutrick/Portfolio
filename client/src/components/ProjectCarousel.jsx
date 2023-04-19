import Carousel from 'react-bootstrap/Carousel';
// import pythonRecipies from '../assets/images/python_recipies.gif'

const CarouselFunction = (props) => {
    const {image, captionTitle, captionText} = props

    return (
        <Carousel variant='dark'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    // src={pythonRecipies}
                    src={image}
                    alt="First slide"
                />
                <Carousel.Caption>
                    {/* <h3 className='text-black'>Cook Book</h3>
                    <p className='text-black'>Full CRUD application for keeping everyone's favorite recipe!</p> */}
                    <h3 className='text-black'>{captionTitle}</h3>
                    <p className='text-black'>{captionText}</p>
                </Carousel.Caption>
            </Carousel.Item>
            {/* <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item> */}
        </Carousel>
    );
}

export default CarouselFunction;