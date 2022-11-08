import GetDocumentReport from '../repository/firebase/GetDocument';
import ModelRelato, { IRelato } from '../model/getRelatory';


export type CreateRelatoDTO = Omit<IRelato, 'id'>;

class CreateRelatoController {
    public execute({ nome,email,mensagem,telefone, readMessage }: CreateRelatoDTO){
        const relatoRepositorio = new GetDocumentReport();
        const relatoModel = new ModelRelato(null, nome, telefone, email, mensagem, readMessage);
        return relatoRepositorio.add(relatoModel)
            .catch(err => {
                console.log(err);
            });
    }
}

export default CreateRelatoController;
