'use client'

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import './styles.css'

export default function WorkingVideos(){
    return (
        <Swiper 
            className="w-full h-[350px] sm:h-[500px]"
            slidesPerView={1}
            spaceBetween={0}
            modules={[Pagination, Autoplay]}
            pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-banners-bullet-primary',
                bulletActiveClass:
                    'swiper-pagination-banners-bullet-active-primary',
                horizontalClass: 'swiper-pagination-banners'
            }}
            autoplay={{
                delay: 5000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false
            }}
        >
            <SwiperSlide className="!h-[300px] sm:!h-[450px]">
                <iframe
                    id="ytplayer"
                    width="100%"
                    height="100%"
                    title="Luminar"
                    src="https://www.youtube.com/embed/mamZP8XZq9o?autoplay=1&controls=0&loop=1&modestbranding=1&showinfo=0"
                    allow="autoplay; encrypted-media"
                />
            </SwiperSlide>
            <SwiperSlide className="!h-[300px] sm:!h-[450px]">
                <iframe
                    id="ytplayer"
                    width="100%"
                    height="100%"
                    title="Tinoagro"
                    src="https://www.youtube.com/embed/i43ypSXzLf0?autoplay=1&controls=0&loop=1&modestbranding=1&showinfo=0"
                    allow="autoplay; encrypted-media"
                />
            </SwiperSlide>
        </Swiper>
    )
}