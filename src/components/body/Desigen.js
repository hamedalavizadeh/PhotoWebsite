import React, { Fragment, useState } from 'react';
import { NavDesigen } from './Style/StyleDesigen';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HeaderTag, CaptionTag, ButtonClick } from './Style/PhotoStyle';
import { CaptionDesigen, Counter, BoxIcon, DesignSlide, BoxDiv } from './Style/StyleDesigen';
import { Link } from 'react-router-dom';
import { SlidesDesigen } from './BodyObject';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import imageDesign from '../../image/Phone.png';

const Desigen = () => {
    const [counter, setCounter] = useState(1)
    const prevIcon = {
        cursor: 'pointer',
    }
    const nextIcon = {
        cursor: 'pointer',
        marginLeft: '3px'
    }
    const nextSlide = () => {
        if (counter === SlidesDesigen.length) {
            setCounter(1)
        } else (
            setCounter(counter + 1)
        )
    }
    const prevSlide = () => {
        if (counter === 1) {
            setCounter(SlidesDesigen.length)
        } else (
            setCounter(counter - 1)
        )
    }

    return (
        <Fragment>
            <NavDesigen>
                <Container>
                    <Row>
                        <Col md={6} sm={12}>
                            <DesignSlide src={imageDesign} />
                        </Col>
                        <Col md={6} sm={12}>
                            {
                                SlidesDesigen.map((item, index) => {
                                    if (index + 1 === counter) {
                                        return (
                                            <CaptionDesigen>
                                                <HeaderTag>{item.titel.toLocaleUpperCase()}</HeaderTag>
                                                <CaptionTag>{item.caption}</CaptionTag>
                                                <BoxDiv>
                                                    <Link to='/'><ButtonClick>{item.nameButton.toLocaleUpperCase()}</ButtonClick></Link>
                                                    <Counter>0{counter}/0{SlidesDesigen.length}</Counter>
                                                    <BoxIcon>
                                                        <ArrowBackIosNewIcon fontSize="small"
                                                            onClick={prevSlide}
                                                            style={prevIcon} />
                                                        <ArrowForwardIosIcon fontSize="small"
                                                            onClick={nextSlide}
                                                            style={nextIcon} />
                                                    </BoxIcon>
                                                </BoxDiv>
                                            </CaptionDesigen>
                                        )
                                    }
                                })
                            }
                        </Col>
                    </Row>
                </Container>
            </NavDesigen>
        </Fragment>
    )
}

export default Desigen;
