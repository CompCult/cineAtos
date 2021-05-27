import React, { memo } from 'react';
import { LinkRouter } from '../link/Link';
import { ButtonInterface } from './interface/Button';
import { Container } from '../container/Container';
import Button from './Button.component';

interface PropsLink extends ButtonInterface {
    link: string;
}

function ButtonLink(props: PropsLink) {
    const { link, margin } = props;

    return (
        <Container margin={margin}>
            <LinkRouter to={link}>
                <Button type="button"  {...props} />
            </LinkRouter>
        </Container>
    );
};

export default memo(ButtonLink)