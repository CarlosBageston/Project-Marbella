import { SwiperProps } from 'swiper/react';
import { ReactNode } from 'react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SwiperDefault } from './style';
import useGetDocs from '../../hooks/useCRUD';


interface PropsSlider {
    settings: SwiperProps;
    children?: ReactNode;
}


export default function Slider({ children, settings }: PropsSlider) {

    const { loading } = useGetDocs();

    return <SwiperDefault loading={loading} modules={[Navigation, Autoplay]} {...settings}>{children}</SwiperDefault>;
}