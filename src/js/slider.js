import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const slider = () => {
    try {
        new Swiper('.swiper', {
            slidesPerView: 1,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".icon-right-open",
                prevEl: ".icon-left-open",
            },
            breakpoints: {
                // when window width is >= 1200px
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 5
                },
                1900: {
                    spaceBetween: 35
                },
            },
            modules: [Navigation, Pagination],

        });
    } catch (e) { }
}

export default slider;