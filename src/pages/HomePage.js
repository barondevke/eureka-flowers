import React from 'react'
import Header from '../components/NavBar'
import CompanyHeader from '../components/CompanyHeader'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Footer from '../components/Footer'


const HomePage = () => {
    return (
        <div>
            <CompanyHeader />
            <Header />
            <Container className='products' style={{ display: 'flex' }}>
                <Row>
                    <Col>
                        <Card>
                            <Card.Img variant='top' src='https://i0.wp.com/nairobyflowers.co.ke/wp-content/uploads/2023/07/Screenshot_20230706-220203_1.jpg?resize=300%2C300&ssl=1'>
                            </Card.Img>

                        </Card>
                        <h6>1500</h6>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant='top' src='https://i0.wp.com/nairobyflowers.co.ke/wp-content/uploads/2023/07/Screenshot_20230706-220203_1.jpg?resize=300%2C300&ssl=1'>
                            </Card.Img>

                        </Card>
                        <h6>1500</h6>
                    </Col>


                    <Col>
                        <Card>
                            <Card.Img variant='top' src='https://i0.wp.com/nairobyflowers.co.ke/wp-content/uploads/2023/07/Screenshot_20230706-220203_1.jpg?resize=300%2C300&ssl=1'>
                            </Card.Img>

                        </Card>
                        <h6>1500</h6>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant='top' src='https://i0.wp.com/nairobyflowers.co.ke/wp-content/uploads/2023/07/Screenshot_20230706-220203_1.jpg?resize=300%2C300&ssl=1'>
                            </Card.Img>

                        </Card>
                        <h6>1500</h6>
                    </Col>
                </Row>
                <br />

                <Row>
                    <Col>
                        <Card>
                            <Card.Img variant='top' src='https://i0.wp.com/nairobyflowers.co.ke/wp-content/uploads/2023/07/Screenshot_20230706-220203_1.jpg?resize=300%2C300&ssl=1'>
                            </Card.Img>

                        </Card>
                        <h6>1500</h6>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant='top' src='https://i0.wp.com/nairobyflowers.co.ke/wp-content/uploads/2023/07/Screenshot_20230706-220203_1.jpg?resize=300%2C300&ssl=1'>
                            </Card.Img>

                        </Card>
                        <h6>1500</h6>
                    </Col>


                    <Col>
                        <Card>
                            <Card.Img variant='top' src='https://i0.wp.com/nairobyflowers.co.ke/wp-content/uploads/2023/07/Screenshot_20230706-220203_1.jpg?resize=300%2C300&ssl=1'>
                            </Card.Img>

                        </Card>
                        <h6>1500</h6>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant='top' src='https://i0.wp.com/nairobyflowers.co.ke/wp-content/uploads/2023/07/Screenshot_20230706-220203_1.jpg?resize=300%2C300&ssl=1'>
                            </Card.Img>

                        </Card>
                        <h6>1500</h6>
                    </Col>
                </Row>


            </Container>





            <Footer />
        </div>
    )
}

export default HomePage
