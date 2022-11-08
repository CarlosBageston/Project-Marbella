import { Box, Container, DivInput, Image, Title, Input, Button, Error } from './style';
import Sorvete from '../../../assets/mao.png';
import { useAuth } from '../../../hooks/auth';
import { KeyboardEvent } from 'react';
import React from 'react';

export default function Admin() {
    const { login, setEmail, setPassword, email, password, error } = useAuth();

    const eventKey = (e: KeyboardEvent<HTMLButtonElement>) => {
        if (e.code === 'Enter') {
            login();
        }
    };

    return (
        <Box>
            <Image src={Sorvete} alt=" imagem do picolé " />
            <Container>
                <Title>Bem-vindo</Title>
                <DivInput>
                    <Input
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        placeholder='E-mail'
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input
                        type="password"
                        id="password"
                        name="password"
                        placeholder='Senha'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Error>{error}</Error>
                    <Button onKeyPress={(e: KeyboardEvent<HTMLButtonElement>) => eventKey(e)} onClick={() => login()} >Login</Button>
                </DivInput>

            </Container>
        </Box>

    );
}
