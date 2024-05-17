import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './ProjectContainer.css';

function ProjectContainer() {
  return(
    <div className="product">
      <h1>What's New</h1>
      
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={4}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
      >
      <div className="feature">
      <SwiperSlide > 
        
      <div className="img">
        <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/15598322/2021/11/17/963b3040-bc9e-420c-aee7-3f4381a6d0061637141563008-plusS-Women-Dresses-681637141562677-1.jpg" alt="" style={{width: "200px", height: "200px" }}/>
     </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="img">
        <img src="https://www.globaldesi.in/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_GD/default/dwfeb648d7/images/hires/SS22/GD-SS24GG033KUMO-MUSTARD%20(2).jpg?sw=400&sh=600&sm=fit" style={{width: "200px", height:"200px"}}/>
</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="img">
        <img src="https://m-commerce.countryroad.com.au/productimages_display/COMPMEDIUM/1/126809_597922_398206.jpg " style={{width: "200px", height:"200px"}}/>
</div>
      </SwiperSlide>
     <SwiperSlide>
      <div className="img">
        <img src="https://www.globaldesi.in/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_GD/default/dw5afe166d/images/hires/S23/GD-SS24GG168KURTW-WHITE-(2)-copy.jpg?sw=400&sh=600&sm=fit" style={{width: "200px", height:"200px"}}/>
 </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="img">
        <img src="https://rukminim2.flixcart.com/image/450/550/xif0q/dress/s/y/n/s-kttdressset67-kotty-original-imagv3szajmazhwg.jpeg?q=90&crop=false" style={{width: "200px", height:"200px"}}/>
 </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="img">

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-E7OwDJBFZ_GwpAezN7Ko0SXvriyZT8PIG0gBKGgo_w&s" style={{width: "200px", height:"200px"}}/>
 </div>
 
      </SwiperSlide>
    </div>
      
    </Swiper>
    
    </div>
    
  )
}
export default ProjectContainer