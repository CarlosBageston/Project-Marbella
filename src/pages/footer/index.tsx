import { Box, Text, Image } from './style';
import logo from '../../assets/Logo.png';
import React from 'react';

export default function Footer() {

    return (
        <>
            <Box >
                <div >
                    <Text>&copy; 2022 - Sorveteria Marbella | Todos os direitos reservados</Text>
                    <Text style={{ marginBottom: 0 }}>Criação do site - Carlos Eduardo Bageston</Text>
                </div>

                <div>
                    <Image src={logo} alt="logo da sorveteria" />
                </div>
            </Box>
        </>
    );
}