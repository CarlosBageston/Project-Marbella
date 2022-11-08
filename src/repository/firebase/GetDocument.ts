import { db } from '../../config';
import { addDoc, collection} from 'firebase/firestore';
import ModelRelato from '../../model/getRelatory';


    
class GetDocumentReport {
    protected readonly _collection;

    constructor() {
        this._collection = collection(db, 'Report');
    }
    public async add(modelRelato: ModelRelato){
        try {
            await addDoc(collection(db, 'Report'), modelRelato.toJSON());

            return modelRelato.id;
        } catch (erro) {
            console.log(erro);
        }
    }
}


export default GetDocumentReport;