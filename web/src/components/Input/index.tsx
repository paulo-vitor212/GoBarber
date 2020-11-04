import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';
import { IconBaseProps } from 'react-icons';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {

    return (
        <Container >
            {Icon && <Icon />}
            <input type="text" {...rest} />
        </Container>
    )
};

export default Input;