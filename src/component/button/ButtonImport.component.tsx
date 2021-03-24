import React, { ChangeEvent } from 'react';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { Input, Span, ButtonStyle } from './ButtonStyle';
import { ContainerStyled } from '../container/Container'
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '../grid/GridComponent.component';

interface Props {
    onChange(event: ChangeEvent<HTMLInputElement>): void;
    disabled?: boolean;
    fileName?: string;
    onClick?: ((event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void) | undefined;
}

export default function UploadButtons({ onChange, disabled, fileName, onClick }: Props) {

    return (
        <ContainerStyled marginTop={-25} marginLeft={5}>
            <Grid justify="flex-start" alignItems="center">
                <Span>Incluir Imagens</Span>
                <Input
                    onChange={onChange}
                    accept="image/*"
                    name="anexo"
                    id="icon-button-file"
                    type="file"
                    disabled={disabled}
                    multiple
                />
                <label htmlFor="icon-button-file" >
                    <IconButton color="primary" aria-label="upload picture" component="span" disabled={disabled}>
                        <PhotoCamera />
                    </IconButton>
                </label>
                <span>{fileName}</span>
                {fileName && <ButtonStyle> <DeleteIcon fontSize="small" color="primary" onClick={onClick} /></ButtonStyle>}
            </Grid>
        </ContainerStyled>
    );
}
