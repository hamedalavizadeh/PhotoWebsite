import styled from "@emotion/styled";

export const Box = styled.div({
    width: '100%',
    height: '400px',
    background: '#f5f6f7',
    display: 'flex',
    justifyContent: 'center',
    "@media screen and (max-width:580px)": {
        height: '500px'
    },
})
export const BParagraf = styled.div({
    marginTop: '100px',
    textAlign: 'cenetr'
})
export const Tag = styled.h5({
    fontWeight: 'bold',
    letterSpacing: '3px',
    color: '#4C4C4C',
    textAlign: 'center'
})
export const Caption = styled.p({
    textAlign: 'center'
})
export const InputBox = styled.div({
    float: 'right',
    "@media screen and (max-width:580px)": {
        float: 'left'
    },
})
export const Button = styled.button({
    marginTop: '30px',
    width: '220px',
    height: '50px',
    paddingRight: '80px',
    border: 'none',
    background: '#16a085',
    fontWeight: 'bold',
    color: 'white',
    fontSize: '16px',
    fontFamily: 'monospace',
    letterSpacing: '2px',
    borderRadius: '3px',
    '&:hover': {
        opacity: '0.8'
    },
    "@media screen and (max-width:580px)": {
        marginLeft: '130px'
    },
    "@media screen and (max-width:500px)": {
        marginLeft: '80px'
    },
    "@media screen and (max-width:400px)": {
        marginLeft: '30px'
    },
})
export const Icon = styled.div({
    width: '50px',
    height: '50px',
    background: '#0e876f',
    position: 'absolute',
    marginTop: '-50px',
    marginLeft: '170px',
    textAlign: 'center',
    paddingTop: '8px',
    borderTopRightRadius: '3px',
    borderBottomRightRadius: '3px',
    "@media screen and (max-width:580px)": {
        marginLeft: '300px'
    },
    "@media screen and (max-width:500px)": {
        marginLeft: '250px'
    },
    "@media screen and (max-width:400px)": {
        marginLeft: '200px'
    },
})