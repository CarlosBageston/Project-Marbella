/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from '../../../config';
import { addDoc, collection, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function useLogicEditPage() {

    const [uploadLoading, setUploadLoading] = useState(false);
    const [ShowCreate, setShowCreate] = useState(false);
    const [ShowEdit, setShowEdit] = useState(false);
    const [subtitle, setSubtitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');

    // convertendo imagem em base64
    const base64img = async (e: any) => {
        e.preventDefault();
        const file = e.target.files[0];
        const base64 = await convertBase64(file) as string;
        setUrl(base64);
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


    // função de adicionar um novo carrossel
    const addAdmin = async () => {
        setUploadLoading(true);
        try {
            await addDoc(collection(db, 'Admin'), {
                subtitle,
                description,
                url,
                id: uuidv4()
            });
        } catch (erro) {
            console.log(erro);
        }
        setSubtitle('');
        setUrl('');
        setDescription('');
        setUploadLoading(false);
    };

    // função para deletar um carrossel
    const deleteDocument = async (id: string) => {
        const refDoc = doc(db, 'Admin', id);
        try {
            await deleteDoc(refDoc).then(() => console.log('deleto'));
        } catch (error) {
            console.log(error);
        }
    };

    // função para atualizar o carrossel selecionado
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

    // atualiza o estado da janela de criar novo slide para vazio
    useEffect(() => {
        setDescription('');
        setSubtitle('');
        setUrl('');
    }, [ShowCreate]);

    
    const ShowComponentCreate = () => setShowCreate(!ShowCreate);

    const ShowComponentEdit = () => setShowEdit(!ShowEdit);

    return {
        base64img,
        updateData,
        deleteDocument,
        addAdmin,
        ShowComponentCreate,
        ShowComponentEdit,
        uploadLoading,
        ShowCreate,
        ShowEdit,
        subtitle,
        setSubtitle,
        description,
        setDescription,
        url,
        setUrl
    };
}