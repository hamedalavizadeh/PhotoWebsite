import styled from "@emotion/styled";

export const NavDesigen = styled.nav({
    width: '100%',
    height: '500px',
    background: '#ffffff',
    zIndex: '10',
    position: 'absolute',
})

export const CaptionDesigen = styled.div({
    marginLeft: '40px',
    marginTop: '120px',
    "@media screen and (max-width:980px)": {
        marginLeft: '-40px'
    },
    "@media screen and (max-width:768px)": {
        marginLeft: '20%'
    },
    "@media screen and (max-width:600px)": {
        textAlign: 'center'
    },
    "@media screen and (max-width:500px)": {
        marginLeft: '20px'
    },
})

export const Counter = styled.p({
    fontFamily: 'monospace',
    fontWeight: 'bold',
    fontSize: '16px',
    marginTop: '20px',

})
export const BoxIcon = styled.div({
    marginTop: '-10px',
    marginLeft: '-10px'
})
export const DesignSlide = styled.img({
    marginTop: '110px',
    marginLeft: '30px',
    "@media screen and (max-width:980px)": {
        marginLeft: '-30px'
    },
    "@media screen and (max-width:768px)": {
        display: 'none'
    },
})
export const BoxDiv = styled.div({
    "@media screen and (max-width:600px)": {
        marginLeft: '-30%'
    },
    "@media screen and (max-width:500px)": {
        marginLeft: '-25%'
    },
    "@media screen and (max-width:400px)": {
        marginLeft: '-12%'
    },

})
