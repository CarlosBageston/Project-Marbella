import Slider from '../../components/slider/slider';
import { SwiperProps, SwiperSlide } from 'swiper/react';
import { Container, ImageSlider, Box, BoxSlider, NameEmpresa, TextTitle, Descrition, BoxSpinner } from './style';
import CircularProgress from '@mui/material/CircularProgress';
import useCRUD from '../../hooks/useCRUD';

export default function MainPage() {
    const { carrossel, loading } = useCRUD();

    const settings: SwiperProps = {
        spaceBetween: 50,
        slidesPerView: 1,
        // navigation: true,
        // autoplay: {
        //     delay: 5000,
        // },
        // loop: true,
        breakpoints: {
            640: {
                slidesPerView: 1
            }
        }
    };
    return (
        <>
            <Box>
                <Slider settings={settings} >
                    {!loading ?
                        <div>
                            {carrossel?.map((item) =>
                                <>
                                    <SwiperSlide key={item.id}>
                                        <Container>
                                            <BoxSlider>
                                                <NameEmpresa >Marbella Sorvetes</NameEmpresa>
                                                <TextTitle>
                                                    {item.subtitle}
                                                </TextTitle>
                                                <Descrition>
                                                    {item.description}
                                                </Descrition>
                                            </BoxSlider>
                                            <div>
                                                <ImageSlider src={item.url} alt={item.name} />
                                            </div>
                                        </Container>
                                    </SwiperSlide>
                                </>
                            )}
                        </div>
                        :
                        <BoxSpinner>
                            <div>
                                <CircularProgress size={80} />
                            </div>
                        </BoxSpinner>
                    }
                </Slider>
            </Box>
        </>

    );
}