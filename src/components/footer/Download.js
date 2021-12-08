import React, { Fragment } from 'react';
import { Box, BParagraf, Tag, Caption, InputBox, Button, Icon } from './style/DownloadStyle'
import { Container, Row, Col } from 'react-bootstrap';
import AdbIcon from '@mui/icons-material/Adb';
import AppleIcon from '@mui/icons-material/Apple';

const Download = () => {
    return (
        <Fragment>

            <Box>
                <Container>
                    <Row>
                        <Col md={12} sm={12}>
                            <BParagraf>
                                <Tag>DOWNLOAD IT</Tag>
                                <Caption>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Caption>
                            </BParagraf>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} sm={6}>
                            <InputBox>
                                <Button>APPLE STORE</Button>
                                <Icon><AppleIcon sx={{ color: 'white' }} fontSize="large" /></Icon>
                            </InputBox>
                        </Col>
                        <Col md={6} sm={6}>
                            <Button>PLAY STORE</Button>
                            <Icon><AdbIcon sx={{ color: 'white' }} fontSize="large" /></Icon>
                        </Col>
                    </Row>
                </Container>

            </Box>

        </Fragment>
    )
}

export default Download;
