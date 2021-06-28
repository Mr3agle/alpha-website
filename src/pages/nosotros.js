import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/swiper.min.css"
import "swiper/components/pagination/pagination.min.css"

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core"

import Layout from "../components/layouts/main-layout"
import Seo from "../components/seo"

import aboutVideo from "../videos/alpha_tech_video.mp4"
import { clients } from "../data/clientsData"

import commentsBg from "../images/bg_comments2.jpg"
import gsap from "gsap"

SwiperCore.use([Autoplay, Pagination, Navigation])

function NosotrosPage() {
  React.useEffect(() => {
    gsap.from(".headerVideo", {
      opacity: 0,
      duration: 3,
    })
  })

  return (
    <Layout bgDark={true}>
      <Seo title="Nosotros" />

      <section className="heroSection">
        <video
          controlsList="nodownload"
          autoPlay
          preload="true"
          playsInline
          loop
          disablePictureInPicture
          muted={true}
          className="headerVideo"
          id="alphaTechVideo"
        >
          <track kind="captions" />
          <source src={aboutVideo} type="video/mp4" />
        </video>
        <div className="overlayContent">
          <h3>Alpha Technologies</h3>
          <h1>Tu seguridad es nuestro objetivo.</h1>
          <p>
            Somos una empresa ecuatoriana de seguridad informática establecida
            en Quito en el año 2001, especializada en la seguridad de datos,
            seguridad web y medios digitales. Nuestros productos y servicios son
            parte del día a día de grandes empresas en todo el mundo.
          </p>
        </div>
      </section>

      <section className="simpleSection" id="animateUp">
        <div className="sectionWrapper">
          <div className="sectionContent">
            <div className="navSpacer" />
            <h2 className="sectionSubTitle">Innovation on your side</h2>
            <h1 className="titleUnderLine">20 años de trayecotria</h1>

            {/* <div className="sectionImg">
              <img src={Globalsign} alt="Globalsign Logo" />
            </div> */}
            <p className="mt-4">
              Nuestro equipo especializado en seguridad de datos, seguridad web
              y medios digitales puede asegurar las áreas más vulnerables de
              todo tu flujo de trabajo mientras estás conectado. Brindamos
              soluciones integrales de Seguridad Informática sustentados en las
              tecnologías de la información y la comunicación con colaboradores
              profesionalmente capacitados y comprometidos con la calidad de
              nuestros servicios para alcanzar la satisfacción de los clientes y
              la mejora continua de nuestros procesos.
            </p>
          </div>
        </div>
      </section>

      <section className="simpleSection mt-4">
        <h1 className="sectionTitle">
          Las corporaciones más grandes <br /> del país cofían en nosotros.
        </h1>

        <div className="clientsShow">
          {clients.map((item, index) => {
            return (
              <div className="clientLogo" key={index}>
                <img src={item.path} alt={item.name} />
              </div>
            )
          })}
        </div>
      </section>

      <section
        className="sectionBg fullWSection simpleOverlay"
        style={{
          backgroundImage: `url(${commentsBg})`,
          backgroundColor: "#000",
        }}
      >
        <h1
          className="sectionTitle whiteText mt-4"
          style={{
            textShadow: "0 3px 3px #000",
          }}
        >
          Las corporaciones más grandes <br /> del país cofían en nosotros.
        </h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          className="mySwiper"
        >
          {clients.map((item, index) => {
            return (
              item.comment && (
                <SwiperSlide key={index}>
                  <img src={item.path} alt={item.name} />
                  {/* <p>"{item.comment}"</p> */}
                  {/* <small>&#8213; {item.product}</small> */}
                </SwiperSlide>
              )
            )
          })}
        </Swiper>
        <div className="navSpacer" />
      </section>
    </Layout>
  )
}

export default NosotrosPage
