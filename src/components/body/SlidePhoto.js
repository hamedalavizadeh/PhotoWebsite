import React, { Fragment, useState } from 'react';
import { NavSlider } from './Style/SlideStyle';
import { Container, Row, Col } from 'react-bootstrap';
import { dataSlide } from './BodyObject';
import { ImageSlide1, ImageSlide2, BoxSlide, BoxIcon, TextBox, ImageCamera, TagSlide, Caption } from './Style/SlideStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import slideCamera from '../../image/slideCamera.png';
const SlidePhoto = () => {

    const [count, setCount] = useState(1);
    const prevIcon = {
        cursor: 'pointer',
    }
    const nextIcon = {
        cursor: 'pointer',
        marginLeft: '3px'
    }
    const nextSlide = () => {
        if (count === dataSlide.length) {
            setCount(1)
        } else (
            setCount(count + 1)
        )
    }
    const prevSlide = () => {
        if (count === 1) {
            setCount(dataSlide.length)
        } else (
            setCount(count - 1)
        )
    }
    return (
        <Fragment>
            <NavSlider>
                <Container>
                    <BoxIcon>
                        <ArrowForwardIosIcon fontSize="small"
                            onClick={nextSlide}
                            style={prevIcon} />
                        <ArrowBackIosNewIcon fontSize="small"
                            onClick={prevSlide}
                            style={nextIcon} />
                    </BoxIcon>
                    <BoxSlide>
                        {dataSlide.map((item, index) => {
                            if (count == index + 1) {
                                return (
                                    <Row>
                                        <Col sm={12} md={4}>
                                            <ImageSlide1 src={item.image1} />
                                        </Col>
                                        <Col sm={12} md={4}>
                                            <ImageSlide2 src={item.image2} />
                                        </Col>
                                        <Col sm={12} md={4}>
                                            <TextBox>
                                                <ImageCamera src={slideCamera} />
                                                <TagSlide>{item.tag.toLocaleUpperCase()}</TagSlide>
                                                <Caption>{item.caption}</Caption>
                                            </TextBox>
                                        </Col>
                                    </Row>
                                )
                            }
                        })}

                    </BoxSlide>
                </Container>
            </NavSlider>
        </Fragment>
    )
}

export default SlidePhoto;
