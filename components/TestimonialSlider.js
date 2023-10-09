import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import {BsArrowRight} from 'react-icons/bs'
import Image from 'next/image'


// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];





const TestimonialSlider = () => {
  return (
    <Swiper
    spaceBetween={10}
    pagination={{
      clickable: true
    }}
    modules={[Pagination]}
    className='h-[280px] sm:h-[480px]'
    >
      {
        testimonialSlider.map((person,index) => {
          return (
            <SwiperSlide key={index}>
              <div>
                {/* avatar, name, position  */}
                <div>
                  {/* avatar  */}
                  <div>avatar image</div>
                  {/* name  */}
                  <div>name</div>
                  {/* position */}
                  <div>position</div>
                </div>
              </div>
              <div>
                {/* quote & messages */}
                <div>quote & message</div>
              </div>
            </SwiperSlide>
          )
        }
        )
      }

    </Swiper>
  )
};

export default TestimonialSlider
