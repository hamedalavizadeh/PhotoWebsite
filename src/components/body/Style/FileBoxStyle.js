import styled from "@emotion/styled";

export const BoxFile = styled.div({
    width: '100%',
    height: '700px',
    marginTop: '1000px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})

export const ImageFile = styled.img({
    width: '100%',
    height: '100%',
    position: 'absolute'
})

export const TagFile = styled.h2({
    position: 'absolute',
    color: 'white',
    letterSpacing: '3px',
    "@media screen and (max-width:580px)": {
        fontSize: '18px',
        textAlign: 'center'
    },
})
export const Input = styled.input({
    position: 'absolute',
    width: '300px',
    height: '48px',
    marginTop: '120px',
    border: 'none',
    boxSizing: 'border-box',
    fontSize: '14px',
    fontWeight: 'bold',
    paddingLeft: '20px'
})
export const Button = styled.button({
    position: 'absolute',
    width: '60px',
    height: '49px',
    marginTop: '119px',
    border: 'none',
    background: '#16a085',
    marginLeft: '240px',
    '&:hover': {
        opacity: '0.8'
    }
})