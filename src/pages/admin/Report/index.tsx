import { Ul, Li, Box, LinkNav, EditButton, LiRead } from './style';
import useGetDocs from '../../../hooks/useGetDocs';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import EmailIcon from '@mui/icons-material/Email';
import Drafts from '@mui/icons-material/Drafts';
import React from 'react';

export default function Report() {
    const { allRelatory, loadingRelato } = useGetDocs();
    const navigate = useNavigate();

    return (
        <>
            <Box>
                <EditButton onClick={() => navigate('/admin/editpage')}>
                    Editar tela inicial
                </EditButton>
                {loadingRelato ?
                    <div>
                        <CircularProgress size={80} />
                    </div>
                    :
                    (
                        <>
                            {allRelatory.length === 0 ? <p>Não tem nenhuma mensagem</p> :
                                <Ul>
                                    {allRelatory.map(info => (
                                        <LinkNav to={`detailreport/${info.id}`} key={info.id}>
                                            {info.readMessage ?
                                                <>
                                                    <LiRead><Drafts />Mensagem lida de {info.nome}</LiRead>
                                                </> :
                                                <>
                                                    <Li><EmailIcon />Nova mensagem de {info.nome}</Li>
                                                </>
                                            }
                                        </LinkNav>
                                    ))}
                                </Ul>
                            }
                        </>
                    )}
            </Box>
        </>
    );
}