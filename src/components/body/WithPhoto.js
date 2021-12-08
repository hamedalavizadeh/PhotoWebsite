import React, { Fragment } from 'react';
import { Nav, Box1, Box2, ImgWith, HeaderTag, CaptionBox, CaptionTag, ButtonClick } from './Style/PhotoStyle';
import imageWith from '../../image/imageWith.png';
import Desigen from './Desigen';
import SlidePhoto from './SlidePhoto';
import { WithPhotoTitel } from './BodyObject';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import FileBox from './FileBox';
import 'bootstrap/dist/css/bootstrap.min.css';
const WithPhoto = () => {
    return (
        <Fragment>
            <Nav>
                <Box1>
                    <ImgWith src={imageWith} />
                </Box1>
                <Box2>
                    <CaptionBox>
                        <HeaderTag>{WithPhotoTitel.titel.toLocaleUpperCase()}</HeaderTag>
                        <CaptionTag>{WithPhotoTitel.caption}</CaptionTag>
                        <Link to='/'><ButtonClick>{WithPhotoTitel.nameButton.toLocaleUpperCase()}</ButtonClick></Link>
                    </CaptionBox>
                </Box2>
            </Nav>
            <Desigen />
            <SlidePhoto />
            <FileBox />
        </Fragment>
    )
}

export default WithPhoto;
