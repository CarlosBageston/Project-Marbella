import { Ul, Li, Box, LinkNav, EditButton, LiRead, DivList, DivCircle } from './style';
import useCRUD from '../../../hooks/useCRUD';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import EmailIcon from '@mui/icons-material/Email';
import Drafts from '@mui/icons-material/Drafts';

export default function Report() {
    const { allRelatory, loadingRelato } = useCRUD();
    const navigate = useNavigate();

    return (
        <>
            <Box>
                <EditButton onClick={() => navigate('/admin/editpage')}>
                    Editar tela inicial
                </EditButton>
                {loadingRelato ?
                    <DivCircle>
                        <CircularProgress size={80} />
                    </DivCircle>
                    :
                    (
                        <>
                            {allRelatory.length === 0 ? <p>Não tem nenhuma mensagem</p> :
                                <DivList>
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
                                </DivList>
                            }
                        </>
                    )}
            </Box>
        </>
    );
}