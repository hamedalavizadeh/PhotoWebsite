import styled from "@emotion/styled";

export const Nav = styled.nav({
    width: '100%',
    height: '550px',
    background: '#f5f6f7',
    display: 'flex',
    flexDirection: 'row-reverse',
    "@media screen and (max-width:850px)": {
        height: '450px'
    }
})
export const Box1 = styled.div({
    width: '50%',
    height: '100%',
    "@media screen and (max-width:850px)": {
        display: 'none'
    }
})
export const Box2 = styled.div({
    width: '50%',
    height: '100%',
    "@media screen and (max-width:850px)": {
        width: '100%'
    }
})
export const ImgWith = styled.img({
    marginTop: '150px',
    marginLeft: '-100px',
    "@media screen and (max-width:1200px)": {
        marginLeft: '-140px'
    },
    "@media screen and (max-width:1130px)": {
        marginLeft: '-190px'
    },
    "@media screen and (max-width:940px)": {
        marginLeft: '-240px'
    },
    "@media screen and (max-width:850px)": {
        display: 'none'
    }
})
export const CaptionBox = styled.div({
    marginLeft: '200px',
    marginTop: '160px',
    "@media screen and (max-width:1130px)": {
        marginLeft: '100px'
    },
    "@media screen and (max-width:940px)": {
        marginLeft: '50px'
    },
    "@media screen and (max-width:850px)": {
        textAlign: 'center',
        marginTop: '100px',
        alignItems: 'center',
        position: 'absolute',
        marginLeft: '20%',
    },
    "@media screen and (max-width:480px)": {
        marginLeft: '10%'
    }
})
export const HeaderTag = styled.h4({
    color: '#16a085',
    width: '380px',
    fontFamily: "monospace",
    letterSpacing: '3px',
    lineHeight: '24px',
    fontWeight: 'bolder',
    fontSize: '20px',
    "@media screen and (max-width:600px)": {
        width: '280px',
        textAlign: 'center',
        marginLeft: '14px'
    }
})
export const CaptionTag = styled.p({
    color: '#9c9d9d',
    fontsize: '14px',
    width: '400px',
    "@media screen and (max-width:600px)": {
        width: '300px',
        textAlign: 'center'
    }
})
export const ButtonClick = styled.button({
    height: '50px',
    width: '170px',
    marginTop: '40px',
    background: '#16a085',
    border: 'none',
    color: 'white',
    letterSpacing: '3px',
    fontWeight: 'bold',
    cursor: 'pointer',
    borderRadius: '3px',
    fontFamily: "revert",
    fontSize: '12px',
    '&:hover': {
        opacity: 0.8
    }
})
