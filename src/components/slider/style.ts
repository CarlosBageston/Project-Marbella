import styled from 'styled-components';
import { Swiper } from 'swiper/react';

interface LoadingProps {
    loading: boolean;
}

export const SwiperDefault = styled(Swiper)<LoadingProps>`
padding: 50px;
height: 100vh;


@media (max-width: 1400px) {
    height: ${props => props.loading ? '60vh' : '100%'};
    width: 100%;
}
`;