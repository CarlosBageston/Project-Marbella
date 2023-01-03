import Instagram from '../../assets/instagram.png';
import Facebook from '../../assets/facebook.png';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CreateRelatoController from '../../controller/CreateRelatory';
import useObserver from '../../hooks/useObserver';
import { useState } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import background from '../../assets/fundo.jpg';
import {
    Box,
    ContainerLeft,
    ContainerRight,
    BoxImage,
    TitleLeft,
    TitleDown,
    DivRedes,
    Navig,
    DivInputUp,
    DivInputDown,
    Input,
    InputDown,
    TextArea,
    TextErro,
    TextErroFone,
    TextErroNome,
    Button,
    SendSucess,
    SendError,
    DivResponse,
    ImageBackground
} from './style';

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('este não é um e-mail valido').required('este é um campo obrigatorio'),
    nome: Yup.string().required('este é um campo obrigatorio'),
    telefone: Yup.string().required('este é um campo obrigariotio'),
    mensagem: Yup.string().required('este é um campo obrigatorio'),
    readMessage: Yup.boolean()
});

export default function Pedidos() {

    const create = new CreateRelatoController();
    const { isVisible, myRef } = useObserver();

    const [sendSucess, setSendSucess] = useState(false);
    const [fail, setFail] = useState(false);

    return (
        <Box >
            <ImageBackground src={background} alt="fundo" />
            <ContainerLeft ref={myRef} isVisibleStyle={isVisible}>
                <TitleLeft>Nos acompanhe</TitleLeft>
                <TitleDown>nas redes sociais</TitleDown>
                <BoxImage>
                    <DivRedes>
                        <img src={Instagram} alt="instagram" width={50} />
                        <Navig href="https://www.instagram.com/marbellasorvetes/">@marbellasorvetes</Navig>
                    </DivRedes>
                    <DivRedes>
                        <img src={Facebook} alt="facebook" width={50} />
                        <Navig href="https://www.facebook.com/marbella.sorvetes">Marbella Sorvetes</Navig>
                    </DivRedes>
                </BoxImage>
            </ContainerLeft>
            <ContainerRight isVisibleStyle={isVisible}>
                <TitleLeft>Faça seu pedido</TitleLeft>
                <TitleDown>ou deixe seu feedback</TitleDown>
                <Formik
                    initialValues={{ email: '', nome: '', telefone: '', mensagem: '', readMessage: false }}
                    onSubmit={values => create.execute(values)
                        .then(() => {
                            values.email = '';
                            values.mensagem = '';
                            values.nome = '';
                            values.telefone = '';
                            setSendSucess(true);
                        })
                        .then(() => setTimeout(() => {
                            setSendSucess(false);
                        }, 3000)
                        )
                        .catch(() => setFail(true))
                    }

                    validationSchema={SignupSchema}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <>
                            <DivInputUp>
                                <Input
                                    onChange={handleChange('nome')}
                                    onBlur={handleBlur('nome')}
                                    value={values.nome}
                                    placeholder='nome'
                                />
                                <Input
                                    onChange={handleChange('telefone')}
                                    onBlur={handleBlur('telefone')}
                                    value={values.telefone.replace(/\D/g, '').replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3')}
                                    placeholder='telefone'
                                />
                            </DivInputUp>
                            <div>
                                {errors.nome && touched.nome ? <TextErroNome>{errors.nome}</TextErroNome> : null}
                                {errors.telefone && touched.telefone ? <TextErroFone>{errors.telefone}</TextErroFone> : null}
                            </div>

                            <DivInputDown>
                                <InputDown
                                    onChange={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    placeholder='e-mail'
                                />
                                {errors.email && touched.email ? <TextErro>{errors.email}</TextErro> : null}
                                <TextArea
                                    onChange={handleChange('mensagem')}
                                    onBlur={handleBlur('mensagem')}
                                    value={values.mensagem}
                                    placeholder='mensagem:'
                                />
                                {errors.mensagem && touched.mensagem ? <TextErro>{errors.mensagem}</TextErro> : null}

                            </DivInputDown>
                            <DivResponse>
                                <Button onClick={() => handleSubmit()}>Enviar mensagem</Button>
                                {sendSucess ?
                                    <>
                                        <SendSucess>Enviado com sucesso <CheckCircleOutlineIcon fill='white' fontSize='small' /> </SendSucess>
                                    </>
                                    :
                                    fail ?
                                        <>
                                            <SendError>Erro ao enviar mensagem 😕<br /> favor tente novamente  </SendError>
                                        </>
                                        :
                                        null
                                }
                            </DivResponse>
                        </>
                    )}
                </Formik>
            </ContainerRight>
        </Box>
    );
}