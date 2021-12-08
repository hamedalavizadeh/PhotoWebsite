import React, { Fragment } from 'react';
import { BoxFile, ImageFile, TagFile, Input, Button } from './Style/FileBoxStyle.js';
import fileImage from '../../image/fileBox2.png';
import { BoxFileTitel } from './BodyObject';
import CheckIcon from '@mui/icons-material/Check';

const FileBox = () => {
    return (
        <Fragment>
            <BoxFile>
                <ImageFile src={fileImage} />
                <TagFile>{BoxFileTitel.Tag.toLocaleUpperCase()}</TagFile>
                <Input type='text' placeholder='YOUR EMAIL' />
                <Button><CheckIcon sx={{ color: 'white' }} /></Button>
            </BoxFile>
        </Fragment>
    )
}

export default FileBox;
