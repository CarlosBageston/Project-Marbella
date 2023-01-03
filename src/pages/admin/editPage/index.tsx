import { Box } from '../Report/style';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import SendIcon from '@mui/icons-material/Send';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import useCRUD from '../../../hooks/useCRUD';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
    BoxButton,
    ButtonCarrossel,
    BoxForm,
    BoxMui,
    BoxDelete,
    TextDelete,
    ContainerDelete,
    BackButton,
    SelectImage
} from './style';


export default function EditPage() {

    const navigate = useNavigate();
    const [ShowCreate, setShowCreate] = useState<boolean>(false);
    const [ShowEdit, setShowEdit] = useState<boolean>(false);

    const {
        addAdmin,
        base64img,
        setDescription,
        description,
        subtitle,
        setSubtitle,
        updateData,
        uploadLoading,
        isSelectImage,
        carrossel,
        loading,
        deleteDocument,
        setUrl
    } = useCRUD();

    //atualiza o estado da janela de criar novo slide para vazio
    useEffect(() => {
        setDescription('');
        setSubtitle('');
        setUrl('');
    }, [ShowCreate]);

    const ShowComponentCreate = () => {
        setShowCreate(!ShowCreate);
        setShowEdit(false);
    };

    const ShowComponentEdit = () => {
        setShowEdit(!ShowEdit);
        setShowCreate(false);
    };


    return (
        <Box>
            <BoxButton>
                <div>
                    <BackButton onClick={() => navigate(-1)}>
                        {'< Voltar'}
                    </BackButton>
                </div>
                <div>
                    {loading ?
                        <CircularProgress size={20} />
                        :
                        <ButtonCarrossel onClick={ShowComponentEdit}>Editar Carrossel</ButtonCarrossel>
                    }
                </div>
                <div>
                    <ButtonCarrossel onClick={ShowComponentCreate}>Criar novo Carrossel</ButtonCarrossel>
                </div>
            </BoxButton>
            {ShowCreate ?
                <BoxMui>
                    <form >
                        <BoxForm>
                            <div style={{ width: '80%' }}>
                                <TextField
                                    id="title"
                                    type='text'
                                    label="Escreva um titulo"
                                    variant="standard"
                                    required
                                    onChange={(e) => setSubtitle(e.target.value)}
                                    value={subtitle}
                                    style={{ width: '100%' }}
                                />
                            </div>
                            <div style={{ width: '80%' }}>
                                <TextField
                                    id="description"
                                    type='text'
                                    label="Escreva uma descrição"
                                    variant="standard"
                                    required
                                    onChange={(e) => setDescription(e.target.value)}
                                    value={description}
                                    style={{ width: '100%' }}
                                />
                            </div>
                            <div style={{ width: '80%', display: 'flex', alignItems: 'center' }}>
                                <IconButton
                                    color="primary"
                                    aria-label="upload picture"
                                    component="label"
                                    size='large'
                                >
                                    <input
                                        hidden
                                        accept="image/*"
                                        type="file"
                                        name='image'
                                        id='image'
                                        onChange={(e) => base64img(e)}
                                        required />
                                    <PhotoCamera />
                                    {isSelectImage ?
                                        <>
                                            <SelectImage>Imagem Selecionada 😃</SelectImage>
                                        </>
                                        :
                                        <>
                                            <SelectImage>Por favor, selecione uma imagem</SelectImage>
                                        </>}
                                </IconButton>
                            </div>
                            <div>
                                {uploadLoading === false ?
                                    <>
                                        <Button variant="contained" endIcon={<SendIcon />} type='button' onClick={addAdmin}>
                                            Enviar
                                        </Button>
                                    </>
                                    :
                                    <>
                                        <LoadingButton
                                            loading
                                            loadingPosition="start"
                                            startIcon={<SaveIcon />}
                                            variant="outlined"
                                        >
                                            Enviando
                                        </LoadingButton>
                                    </>
                                }
                            </div>
                        </BoxForm>
                    </form>
                </BoxMui>
                :
                ShowEdit ? carrossel.map(item =>
                    <>
                        <BoxMui>
                            <form>
                                <BoxForm key={item.id}>
                                    <ContainerDelete>
                                        <BoxDelete>
                                            <TextDelete onClick={() => deleteDocument(item.id)}>deletar slide </TextDelete>
                                            <div style={{ cursor: 'pointer' }} ><DeleteIcon sx={{ fontSize: 30 }} /></div>
                                        </BoxDelete>
                                    </ContainerDelete>
                                    <div style={{ width: '80%' }}>
                                        <TextField
                                            id="subtitle"
                                            type='text'
                                            label="Escreva um titulo"
                                            variant="standard"
                                            onChange={(e) => setSubtitle(item.subtitle + e.target.value)}
                                            defaultValue={item.subtitle ?? ''}
                                            style={{ width: '100%' }}
                                            required
                                        />
                                    </div>
                                    <div style={{ width: '80%' }}>
                                        <TextField
                                            id="description"
                                            name='description'
                                            type='text'
                                            label="Escreva uma descrição"
                                            variant="standard"
                                            onChange={(e) => setDescription(item.description + e.target.value)}
                                            defaultValue={item.description ?? ''}
                                            style={{ width: '100%' }}
                                            required
                                        />
                                    </div>
                                    <div style={{ width: '80%', display: 'flex', alignItems: 'center' }}>
                                        <IconButton
                                            color="primary"
                                            aria-label="upload picture"
                                            component="label"
                                            size='large'
                                        >
                                            <input
                                                hidden
                                                accept="image/*"
                                                type="file"
                                                name='image'
                                                id='image'
                                                onChange={(e) => base64img(e)}
                                                required />
                                            <PhotoCamera />
                                            {isSelectImage || item.url ?
                                                <>
                                                    <SelectImage>Imagem Selecionada 😃</SelectImage>
                                                </>
                                                :
                                                <>
                                                    <SelectImage>Por favor, selecione uma imagem</SelectImage>
                                                </>}
                                        </IconButton>
                                    </div>
                                    <div>
                                        {uploadLoading === false ?
                                            <>
                                                <Button
                                                    variant="contained"
                                                    endIcon={<SendIcon />}
                                                    type='button'
                                                    onClick={() => updateData(item.id)}
                                                >
                                                    Atualizar
                                                </Button>
                                            </>
                                            :
                                            <>
                                                <LoadingButton
                                                    loading
                                                    loadingPosition="start"
                                                    startIcon={<SaveIcon />}
                                                    variant="outlined"
                                                >
                                                    Atualizando
                                                </LoadingButton>
                                            </>
                                        }
                                    </div>
                                </BoxForm>
                            </form>
                        </BoxMui>
                    </>
                )
                    :
                    <div style={{ height: '68.2vh' }}></div>
            }
        </Box>
    );
}