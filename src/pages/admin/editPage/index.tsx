import React from 'react';
import { Box } from '../Report/style';
import { BoxButton, ButtonCarrossel, BoxForm, BoxMui, BoxDelete, TextDelete, ContainerDelete } from './style';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import SendIcon from '@mui/icons-material/Send';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import useGetDocs from '../../../hooks/useGetDocs';
import useLogicEditPage from './logic';


export default function EditPage() {

    const { carrossel } = useGetDocs();
    const {
        ShowComponentCreate,
        ShowComponentEdit,
        ShowCreate,
        ShowEdit,
        addAdmin,
        base64img,
        deleteDocument,
        description,
        setDescription,
        setSubtitle,
        subtitle,
        updateData,
        uploadLoading,
    } = useLogicEditPage();

    return (
        <Box>
            <BoxButton>
                <div>
                    <ButtonCarrossel onClick={ShowComponentEdit}>Editar Carrossel</ButtonCarrossel>
                </div>
                <div>
                    <ButtonCarrossel onClick={ShowComponentCreate}>Criar novo Carrossel</ButtonCarrossel>
                </div>
            </BoxButton>

            {ShowCreate && !ShowEdit ?
                <BoxMui>
                    <form method='POST'>
                        <BoxForm>
                            <div style={{ width: '80%' }}>
                                <TextField
                                    id="standard-basic"
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
                                    id="standard-basic"
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
                        <BoxMui key={item.id}>
                            <form method='POST'>
                                <BoxForm>
                                    <ContainerDelete>
                                        <BoxDelete>
                                            <TextDelete onClick={() => deleteDocument(item.id)}>deletar slide </TextDelete>
                                            <div style={{ cursor: 'pointer' }} ><DeleteIcon sx={{ fontSize: 30 }} /></div>
                                        </BoxDelete>
                                    </ContainerDelete>
                                    <div style={{ width: '80%' }}>
                                        <TextField
                                            id="standard-basic"
                                            label="Escreva um titulo"
                                            variant="standard"
                                            required
                                            onChange={(e) => setSubtitle(e.target.value)}
                                            defaultValue={item.subtitle}
                                            style={{ width: '100%' }}
                                        />
                                    </div>
                                    <div style={{ width: '80%' }}>
                                        <TextField
                                            id="standard-basic"
                                            label="Escreva uma descrição"
                                            variant="standard"
                                            required
                                            onChange={(e) => setDescription(e.target.value)}
                                            defaultValue={item.description}
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
                    null
            }
        </Box>
    );
}