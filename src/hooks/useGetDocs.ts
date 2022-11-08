import { collection, CollectionReference, getDocs } from 'firebase/firestore';
import { IRelato } from '../model/getRelatory';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../config';
import { Photodata } from '../types/photo';


export default function useGetDocs() {

    //Dados para relatorio
    const _collection = collection(db, 'Report') as CollectionReference<IRelato>;
    const [allRelatory, setAllRelatory] = useState<IRelato[]>([]);
    
    //Dados para Relatorio por id
    const [loadingRelato, setLoadingRelato] = useState(false);
    const [relatoId, setRelatoId] = useState<IRelato | undefined>();
    const { id } = useParams();
    
    //Dados para Admin
    const _collectionPhoto = collection(db, 'Admin') as CollectionReference<Photodata>;
    const [carrossel, setCarrossel] = useState<Photodata[]>([]);
    const [loading, setLoading] = useState(false);


    //Obtendo dados por ID
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

    //Obtendo todos os dados
    useEffect(() => {
        const getRelatorio = async () => {
            const data = await getDocs<IRelato>(_collection);
            setAllRelatory(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };
        getRelatorio();
    }, []);


    // Obtendo dados para o carrossel
    useEffect(() => {
        const getInfoCarrossel = async () => {
            setLoading(true);
            const data = await getDocs<Photodata>(_collectionPhoto);
            setCarrossel(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            setLoading(false);
        };
        getInfoCarrossel();
    }, []);


    return {
        relatoId, 
        allRelatory, 
        carrossel, 
        loading, 
        setCarrossel, 
        loadingRelato,
    };
}