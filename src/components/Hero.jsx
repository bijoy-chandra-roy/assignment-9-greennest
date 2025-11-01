import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router";
import "./Hero.css";
import Loading from "../pages/Loading";

const Hero = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/plants.json")
      .then((r) => r.json())
      .then((d) => {
        setPlants(d || []);
        setLoading(false);
      })
      .catch(() => {
        setPlants([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
     <Loading></Loading>
    );
  }

  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={800}
        parallax={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        modules={[Parallax, Pagination, Navigation, Autoplay]}
        className="mySwiper"
        slidesPerView={1}
      >
        {plants.length === 0 ? (
          <SwiperSlide>
            <div
              className="parallax-bg"
              style={{ backgroundImage: `url(/vite.svg)` }}
              data-swiper-parallax="-20%"
            />
            <div className="slide-content" data-swiper-parallax="-300">
              <div className="slide-title">Welcome to GreenNest</div>
              <div className="slide-sub">Indoor plant care and store</div>
            </div>
          </SwiperSlide>
        ) : (
          plants.map((p) => (
            <SwiperSlide key={p.plantId}>
              <div
                className="parallax-bg"
                style={{ backgroundImage: `url(${p.image})` }}
                data-swiper-parallax="-20%"
              />
              <div className="slide-content" data-swiper-parallax="-300">
                <div className="slide-title" data-swiper-parallax="-400">
                  {p.plantName}
                </div>
                <div className="slide-sub" data-swiper-parallax="-200">
                  {p.category} · {p.careLevel}
                </div>
                <div className="slide-text" data-swiper-parallax="-100">
                  {p.description}
                </div>
                <div className="slide-cta">
                  <Link to={`/plantdetails/${p.plantId}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
};

export default Hero;
