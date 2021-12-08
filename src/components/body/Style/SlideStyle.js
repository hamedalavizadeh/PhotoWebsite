import styled from "@emotion/styled";

export const NavSlider = styled.nav({
    width: '100%',
    height: '500px',
    background: '#f5f6f7',
    zIndex: '10',
    position: 'absolute',
    marginTop: '500px',
    direction: 'rtl',
    "@media screen and (max-width:768px)": {
        height: '700px',
    },
})
export const BoxSlide = styled.div({
    width: '100%',
    marginTop: '140px',
})
export const ImageSlide1 = styled.img({
    "@media screen and (max-width:1200px)": {
        marginRight: '-80px',
    },
    "@media screen and (max-width:1150px)": {
        marginRight: '-10px',
    },
    "@media screen and (max-width:768px)": {
        float: 'left',
        marginLeft: '60px'
    },
    "@media screen and (max-width:580px)": {
        width: '300px',
        marginLeft: '100px'
    },
    "@media screen and (max-width:480px)": {
        marginLeft: '50px'
    },
    "@media screen and (max-width:400px)": {
        marginLeft: '0px'
    },
})
export const ImageSlide2 = styled.img({
    "@media screen and (max-width:1150px)": {
        marginRight: '50px',
    },
    "@media screen and (max-width:1000px)": {
        display: 'none'
    },
})

export const BoxIcon = styled.div({
    position: 'absolute',
    marginTop: '-40px'
})
export const TextBox = styled.div({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    "@media screen and (max-width:1200px)": {
        marginRight: '140px',
    },
    "@media screen and (max-width:1000px)": {
        marginLeft: '100px'
    },
})
export const ImageCamera = styled.img({
    marginTop: '30px',
    position: 'absolute'
})
export const TagSlide = styled.p({
    position: 'absolute',
    marginTop: '96px',
    fontFamily: 'serif',
    fontWeight: 'bold',
    letterSpacing: '3px'
})
export const Caption = styled.p({
    direction: 'ltr',
    textAlign: 'center',
    position: 'absolute',
    marginTop: '120px',
    width: '120px',
    fontSize: '12px',
    color: '#9c9d9d',
})