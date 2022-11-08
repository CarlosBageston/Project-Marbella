import { Box } from '../Report/style';
import { Container, DivResult, Response, Mensagem, ResponseMsg, Button, DivButton, Label } from './style';
import useGetDocs from '../../../hooks/useGetDocs';
import { useNavigate } from 'react-router-dom';
import { db } from '../../../config';
import { doc, updateDoc } from 'firebase/firestore';
import EmailIcon from '@mui/icons-material/Email';
import Drafts from '@mui/icons-material/Drafts';
import { useState } from 'react';
import React from 'react';

export default function DetailReport() {

    const navigate = useNavigate();
    const { relatoId } = useGetDocs();
    const [isOpen, setIsOpen] = useState(false);

    const atualizando = async () => {
        setIsOpen(true);
        try {
            const refDoc = doc(db, 'Report', relatoId?.id as string);
            await updateDoc(refDoc, {
                readMessage: true
            });
        } catch (erro) {
            console.log(erro);
        }
    };

    console.log(relatoId?.id);

    return (
        <>
            <Box>
                <DivButton>
                    <Button onClick={() => navigate(-1)}>
                        {'< Voltar'}
                    </Button>
                    {isOpen || relatoId?.readMessage ?
                        <>
                            <Button>
                                Mensagem Lida <Drafts />
                            </Button>
                        </>
                        :
                        <>
                            <Button onClick={atualizando}>
                                Marcar como lido <EmailIcon />
                            </Button>
                        </>
                    }
                </DivButton>

                <Container>
                    <DivResult>
                        <Label>Nome:</Label>
                        <Response key={relatoId?.id}>{relatoId?.nome}</Response>
                    </DivResult>
                    <DivResult>
                        <Label>Telefone:</Label>
                        <Response key={relatoId?.id}>{relatoId?.telefone}</Response>
                    </DivResult>
                    <DivResult>
                        <Label>E-mail:</Label>
                        <Response key={relatoId?.id}>{relatoId?.email}</Response>
                    </DivResult>
                    <DivResult>
                        <Mensagem>Mensagem:</Mensagem>
                        <ResponseMsg key={relatoId?.id}>{relatoId?.mensagem}</ResponseMsg>
                    </DivResult>
                </Container>

            </Box>
        </>
    );
}