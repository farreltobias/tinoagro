'use client'

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from 'swiper/modules'
import Icon from '@public/icon.svg';

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import './styles.css'

export default function Solutions(){
    return (
        <Swiper 
            className="w-full h-full"
            slidesPerView={1}
            spaceBetween={0}
            modules={[Pagination, Autoplay]}
            pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-solutions-bullet-secondary',
                bulletActiveClass:
                    'swiper-pagination-solutions-bullet-active-secondary',
                horizontalClass: 'swiper-pagination-solutions'
            }}
            autoplay={{
                delay: 5000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false
            }}
        >
            <SwiperSlide className="!w-full !h-full">
                <div className="flex w-full h-full justify-center flex-col gap-9 py-20 lg:py-0">
                    <Icon className="h-16 w-16" />
                    <p className="max-w-lg text-2xl font-bold sm:text-3xl lg:text-4xl">
                    Tenha acesso rápido a informações relevantes!
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="!w-full !h-full">
                <div className="flex w-full h-full justify-center flex-col gap-9 py-20 lg:py-0">
                    <Icon className="h-16 w-16" />
                    <p className="max-w-lg text-2xl font-bold sm:text-3xl lg:text-4xl">
                    Obtenha insights em segundos para decisões inteligentes!
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="!w-full !h-full">
                <div className="flex w-full h-full justify-center flex-col gap-9 py-20 lg:py-0">
                    <Icon className="h-16 w-16" />
                    <p className="max-w-lg text-2xl font-bold sm:text-3xl lg:text-4xl">
                    Dados essenciais ao seu alcance, de forma ágil!
                    </p>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}