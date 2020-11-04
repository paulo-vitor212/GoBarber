import React from 'react';
import logoImg from '../../assets/logo.svg';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Background, Container, Content } from './styles';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={logoImg} alt="GoBarber" />
            <form>
                <h1>Faça seu Login</h1>

                <Input type="text" name="email" icon={FiMail} placeholder="E-mail" />
                <Input type="password" name="password" icon={FiLock} placeholder="Senha" />
                <Button>Entrar</Button>
                <a href="forgot">Esqueci minha senha</a>
            </form>
            <a href="login">
                <FiLogIn />
                Criar conta
            </a>
        </Content>
        <Background />
    </Container>
);

export default SignIn;