<template>
  <div class="carousel-wrapper">
    <Swiper
      :modules="[Navigation, Autoplay, Pagination]"
      :slides-per-view="1"
      :autoplay="{ delay: 3000 }"
      :space-between="20"
      :pagination="true"
      :navigation="true"
      loop
      :cssMode="true"
    >
      <SwiperSlide v-for="(image, index) in images" :key="index">
        <img :src="image" alt="slide" class="rounded-xl w-full h-auto" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const images = [
  'https://golfwang.com/cdn/shop/files/SUMMER_25_-_ANNOUNCE_HOMEPAGE_copy_1.jpg?v=1748998408&width=1920',
  'https://golfwang.com/cdn/shop/files/CONVERSE_CC_SLIP_PRO_-_GOLF_WANG_HOMEPAGE_1.jpg?v=1740508215&width=1920',
  'https://golfwang.com/cdn/shop/files/BANNER.jpg?v=1731903129&width=1920',
]
</script>

<style >
.swiper-button-prev,
.swiper-button-next {
  background-color: rgba(0, 0, 0, 0.5);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.swiper-button-prev::after,
.swiper-button-next::after {
  font-size: 20px;
}

</style>
