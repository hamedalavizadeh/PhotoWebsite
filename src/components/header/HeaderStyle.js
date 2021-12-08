import styled from '@emotion/styled';
import { NavLink as Link } from 'react-router-dom';


export const NavBox = styled.nav({
    width: '100%',
    height: '750px',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    "@media screen and (max-width:680px)": {
        height: '400px'
    },
})

export const NavMenu = styled.div({
    width: '100px',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    marginTop: '30px',
    '@media screen and (max-width: 800px)': {
        display: 'none'
    }
})

export const NavLink = styled(Link)({
    textDecoration: 'none',
    display: 'flex',
    padding: '10px 40px',
    fontFamily: 'Georgia, Times New Roman, Times, serif',
    color: 'white',
    letterSpacing: '3px',
    '&.active': {
        color: '#15cdfc',
    },
    '&:hover': {
        opacity: '0.8'
    }
})

export const ImageSlide = styled.img({
    width: '100%',
    height: '100%',
    position: 'absolute'
})

export const ImageMenu = styled.img({
    marginTop: '-24px'
})
export const SliderCaption = styled.div({
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    marginTop: '280px',
    "@media screen and (max-width:680px)": {
        marginTop: '120px'
    }
})
export const SliderH1 = styled.h1({
    color: 'white',
    fontFamily: 'Georgia, Times New Roman, Times, serif',
    letterSpacing: '6px',
    wordSpacing: '6px',
    fontWeight: 'bolder',
    fontSize: '36px',
    "@media screen and (max-width:680px)": {
        fontSize: '18px'
    },
    "@media screen and (max-width:450px)": {
        fontSize: '14px',
        letterSpacing: '2px',
        wordSpacing: '2px'
    }
})
export const SliderP = styled.p({
    color: 'white',
    marginTop: '84px',
    position: 'absolute',
    fontSize: '18px',
    letterSpacing: '2px',
    wordSpacing: '4px',
    "@media screen and (max-width:680px)": {
        fontSize: '12px',
        marginTop: '40px'
    },
    "@media screen and (max-width:450px)": {
        fontSize: '10px',
        letterSpacing: '2px',
        textAlign: 'center'
    }
})
export const SlideButton = styled.button({
    position: 'absolute',
    height: '50px',
    width: '170px',
    marginTop: '124px',
    background: '#16a085',
    border: 'none',
    color: 'white',
    letterSpacing: '3px',
    fontWeight: 'bold',
    cursor: 'pointer',
    borderRadius: '3px',
    '&:hover': {
        opacity: 0.8
    },
    "@media screen and (max-width:680px)": {
        width: '150px',
        height: '40px',
        marginTop: '100px',
        fontSize: '12px'
    },
    "@media screen and (max-width:450px)": {
        width: '140px',
        height: '40px',
        marginTop: '100px',
        fontSize: '12px'
    }

})
export const NavResMenu = styled.div({
    position: 'absolute',
    float: 'left',
    display: 'none',
    marginTop: '-350px',
    marginLeft: '-160px',
    "@media screen and (max-width:800px)": {
        display: 'block'
    }
})


