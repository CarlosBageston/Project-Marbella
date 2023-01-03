/* eslint-disable @typescript-eslint/no-explicit-any */
import { collection, CollectionReference, deleteDoc, doc, getDocs,addDoc, updateDoc } from 'firebase/firestore';
import { IRelato } from '../model/getRelatory';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../config';
import { Photodata } from '../types/photo';
import { v4 as uuidv4 } from 'uuid';

export default function useCRUD() {

    //Estados para relatorio 
    const _collection = collection(db, 'Report') as CollectionReference<IRelato>;
    const [allRelatory, setAllRelatory] = useState<IRelato[]>([]);
    
    //Estados para Relatorio por id
    const [loadingRelato, setLoadingRelato] = useState(false);
    const [relatoId, setRelatoId] = useState<IRelato | undefined>();
    const { id } = useParams();
    
    //Estados para o Admin
    const _collectionPhoto = collection(db, 'Admin') as CollectionReference<Photodata>;
    const [carrossel, setCarrossel] = useState<Photodata[]>([]);
    const [loading, setLoading] = useState(false);

    //Estados para o CRUD
    const [subtitle, setSubtitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [url, setUrl] = useState<string>('');
    const [isSelectImage, setIsSelectImage] = useState<boolean>(false);
    const [uploadLoading, setUploadLoading] = useState<boolean>(false);

    //Function for update state always that is called CRUD
    const upDateStateCarrossel = async () => {
        const data = await getDocs<Photodata>(_collectionPhoto);
        return setCarrossel(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };

    //Obtendo dados por ID da coleção REPORT
    useEffect(() => {
        const getRelatorio = async () => {
            setLoadingRelato(true);
            const data = await getDocs<IRelato>(_collection);
            const [relatorio] = data.docs.filter(doc => doc.id === id);
            setRelatoId({ ...relatorio?.data(), id: relatorio?.id });
            setLoadingRelato(false);
        };
        getRelatorio();
    }, []);

    //Obtendo todos os dados da coleção REPORT
    useEffect(() => {
        const getRelatorio = async () => {
            const data = await getDocs<IRelato>(_collection);
            setAllRelatory(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };
        getRelatorio();
    }, []);


    // Obtendo dados para o carrossel (coleção ADMIN)
    useEffect(() => {
        const getInfoCarrossel = async () => {
            setLoading(true);
            const data = await getDocs<Photodata>(_collectionPhoto);
            setCarrossel(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            setLoading(false);
        };
        getInfoCarrossel();
    }, []);


    // convertendo imagem em base64 (coleção ADMIN)
    const base64img = async (e: any) => {
        e.preventDefault();
        const file = e.target.files[0];
        const base64 = await convertBase64(file) as string;
        setUrl(base64);
        setIsSelectImage(true);
    };


    const convertBase64 = (file: any) => {
        return new Promise((resolve) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };
        });
    };

    // função de adicionar um novo carrossel (coleção ADMIN)
    const addAdmin = async () => {
        setUploadLoading(true);
        try {
            await addDoc(collection(db, 'Admin'), {
                subtitle,
                description,
                url,
                id: uuidv4()
            }).then(() => upDateStateCarrossel()).then(() => setIsSelectImage(false));
        } catch (erro) {
            console.log(erro);
        }
        setSubtitle('');
        setUrl('');
        setDescription('');
        setUploadLoading(false);
    };

    

    // função para atualizar o carrossel selecionado (coleção ADMIN)
    const updateData = async (id: string) => {
        
        setUploadLoading(true);
        try {
            const refDoc = doc(db, 'Admin', id);
            await updateDoc(refDoc, {
                subtitle,
                description,
                url,
            });
        } catch (error) {
            console.log(error);
        }
        setUploadLoading(false);
    };

    // função para deletar um carrossel (coleção ADMIN)
    const deleteDocument = async (id: string) => {
        try {
            const refDoc = doc(db, 'Admin', id);
            await deleteDoc(refDoc).then(() =>  upDateStateCarrossel());
        } catch (error) {
            console.log(error);
        }
    };


    return {
        relatoId, 
        allRelatory, 
        carrossel, 
        loading, 
        setCarrossel, 
        loadingRelato,
        setLoading,
        _collectionPhoto,
        deleteDocument,
        //State CRUD for editPage
        base64img,
        updateData,
        addAdmin,
        uploadLoading,
        subtitle,
        setSubtitle,
        description,
        setDescription,
        isSelectImage,
        setUrl
    };
}

