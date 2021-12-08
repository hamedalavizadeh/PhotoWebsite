import React, { Fragment } from 'react';
import {
    NavBox, NavMenu, NavLink, ImageSlide, ImageMenu,
    SliderCaption, SliderH1, SliderP, SlideButton, NavResMenu
} from './HeaderStyle';
import imageSlide from '../../image/Livello.jpg';
import camera from '../../image/camera.png';
import { Link } from 'react-router-dom';
import Responsive from './Responsive';


const Header = () => {
    return (
        <Fragment>
            <NavBox>
                <ImageSlide src={imageSlide} />
                <NavMenu>
                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="/PHOTOAPP">PHOTOAPP</NavLink>
                    <NavLink to='/CAMERA'><ImageMenu src={camera} /></NavLink>
                    <NavLink to='/DESIGN'>DESIGN</NavLink>
                    <NavLink to='/DOWNLOAD'>DOWNLOAD</NavLink>
                </NavMenu>
                <SliderCaption>
                    <SliderH1>YOUR LIFE , A PHOTO</SliderH1>
                    <SliderP>print your life in a simple photo</SliderP>
                    <SlideButton>GET STARTED</SlideButton>
                </SliderCaption>

            </NavBox>
            <NavResMenu>
                <Responsive />
            </NavResMenu>
        </Fragment>
    )
}

export default Header
