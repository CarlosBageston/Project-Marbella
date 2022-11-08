export interface IRelato {
    id: string | null,
    nome: string,
    telefone: string,
    email: string,
    mensagem: string,
    readMessage?: boolean | undefined
}

class ModelRelato implements IRelato {
    private _id: string | null;
    private _nome: string;
    private _telefone: string;
    private _email: string;
    private _mensagem: string;
    private _readMessage: boolean | undefined;
    
    

    constructor(
        id: string | null,
        nome: string,
        telefone: string,
        email: string,
        mensagem: string,
        readMessage: boolean | undefined,
    ) {
        this._id = id,
        this._nome = nome,
        this._telefone = telefone,
        this._email = email,
        this._mensagem = mensagem,
        this._readMessage = readMessage;
    }
    public get id(): string | null {
        return this._id;
    }
    public set id(value: string | null) {
        this._id = value;
    }
    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }
    public get telefone(): string {
        return this._telefone;
    }
    public set telefone(value: string) {
        this._telefone = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public get mensagem(): string {
        return this._mensagem;
    }
    public set mensagem(value: string) {
        this._mensagem = value;
    }
    public get readMessage(): boolean | undefined {
        return this._readMessage;
    }
    public set readMessage(value: boolean | undefined) {
        this._readMessage = value;
    }

    public toJSON() {
        return {
            id: this.id,
            nome: this.nome,
            telefone: this.telefone,
            email: this.email,
            mensagem: this.mensagem,
            readMessage: this.readMessage
        };
    }
}

export default ModelRelato;