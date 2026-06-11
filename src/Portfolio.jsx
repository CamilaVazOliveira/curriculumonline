import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Portfolio() {

    const imagens = [
        "/arvore.jpg",
        "/Logotipo.png",
        "/Tela_Cadastro.png",
        "/Tempo_real.jpg",
        "/Tela.avif",
        "/Codigo.webp",
        "/Trabalho.jpg",
        "/Sistema.jpg",
        "/Analise.webp",
        
    ];

    return (
        <>
            <div className='header'>
                <nav className="navbar navbar-expand-lg navbar-custom">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button"
                            data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav me-auto">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                                <Link className="nav-link" to="/contato">
                                    Contato
                                </Link>
                                <Link className="nav-link" to="/portfolio">
                                    Portfolio
                                </Link>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='port-body'>
                <Swiper
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    loop={true}
                    coverflowEffect={{
                        rotate: 20,
                        stretch: 0,
                        depth: 200,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    modules={[EffectCoverflow, Navigation, Pagination]}
                >
                    {imagens.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={img}
                                alt=""
                                style={{
                                    width: "100%",
                                    borderRadius: "10px"
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
} export default Portfolio