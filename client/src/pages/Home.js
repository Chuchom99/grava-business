import React, {useEffect, useState} from "react"
import { useDispatch,useSelector } from "react-redux";
import Carousell from "../component/Carousel"
import CoinItem from "../component/CoinItem"
import TrendingCoin from "../component/TrendingCoin";
import Modal from "../component/Modal";
import Suscribe from "../component/Suscribe";
import { Link } from 'react-router-dom';
import {Row, Col, Button } from "react-bootstrap";
import NewsIcon from "../NewsIcon.json"
import Lottie from "lottie-react"
import { SiGmail} from 'react-icons/si';
import {BsTwitter, BsInstagram} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineArrowRight} from "react-icons/ai"
import { getCoinItems, getTrendingCoin } from "../redux/features/coinSlice";
import axios from "axios";
import logo from "../images/chery.png"
import phone from "../images/phone.png"
import "./Home.css"
import animation from "../animation.json"
import asfor from "../images/asfor.png"

function Home () {
  const {coin, trending, isLoading} = useSelector(state => state.coin)
  const [noOfCoin, setNoOfCoin]= useState(10);
  const [openModal, setOpenModal] = useState(false);
  const [lessButton, setLessButton] = useState(false);
  
  const slice = coin.slice(0, noOfCoin);
  

  const dispatch = useDispatch();
 
  function viewMore() {
    setNoOfCoin(noOfCoin + noOfCoin)
  }
  useEffect(() => {
    dispatch(getCoinItems())
  },[])

  useEffect(() => {
    dispatch(getTrendingCoin())
  },[])
if(isLoading){
    return <div className="loading"><h1>loading...</h1></div>
  }
  

    return (      
      <div >
      <section>
       <div className="gradient" >
       <Row>
          <Col  lg="6">
          <div className="top-col">

          <Link className="white">

          <div className="button">
            <div>
            <img src={logo} alt="grava" width="50" height="50" />
            </div>
            <div className="col" >
            <span className="top-p">X Driven Growth : Digital investment</span>
            <span className="hide-in-mobil" >learn more </span>
            </div> 
            <div>
            <AiOutlineArrowRight />
            </div>         
          </div>
          </Link>

          <h1>Let's build a sustainable future,<br/>together </h1>
          <p className="second-p" >Inveting wisely is the only way to grow, you will break limts with us looking out for you</p>
          
          <button onClick={() => setOpenModal(true)} className="button-2"  >
          <SiGmail className="button-2-icon"/> suscribe to our newsletter</button>
          </div>
          <Modal open={openModal} onClose={() => setOpenModal(false)} />

          </Col>
          <Col lg="6">
            <Lottie animationData={animation} />
          </Col>
        </Row>
       </div>


         <div className="feature-div">
          <Row>
            <Col className="feature-col"><Link className="features"  to="/news" >
              <p>News</p>
            </Link></Col>
            <Col className="feature-col"><Link className="features" to="/news" >
              <p>Refferal</p>
            </Link></Col>
            <Col className="feature-col"><Link className="features" to="/news" >
              <p>Support</p>
            </Link></Col>
            <Col className="feature-col"><Link className="features"to="/news" >
              <p>About</p>
            </Link></Col>
          </Row>
          </div>
      </section>
      <section className="second-section">
      <div className="swiper" >
        <h2>You might want to know...</h2>
        <div className="card">
         <div className="card-img">
          <img className="card-img" src={asfor}  />
         </div>
         <div className="card-body">
          <h4>stock market</h4>
         </div>
        </div>
      </div>
      <div className="suscribe-first-box" >
      <Row>
        <Col lg="6" > 
        <div className="phone-div" >
        <img src={phone} className="phone-image" alt="grava" /> 
        </div>
        </Col>
        <Col>
        <div className="suscribe-box" >
        <h6 className="suscribe-heading" >The place for anyone from anywhere to build a solid crypto portfolio</h6>
        <p className="second-p suscribe-p" ><span className="hide-in-mobile">weather you are a newbie in crypto invetment or future trading, Grava is your home.</span>
        Join the best investment community, lets help you grow</p>
        <div className="suscribe-btns">
        <button className="suscribe-btn white" >Get free signals</button>   
        <button className="suscribe-btn2">Get premium signals</button>     
        </div>
        </div>
        </Col>
      </Row>
      </div>
      {/* <div className="suscribe-first-box">

      <div className="suscribe-box" >
        <h1 className="suscribe-heading" >The place for anyone from anywhere to build a solid crypto portfolio</h1>
        <p className="second-p suscribe-p" >weather you are a newbie in crypto invetment or future trading, Grava is your home.
        Join the best investment community, lets help you grow</p>
        <div className="suscribe-btns">
        <button className="suscribe-btn white" >Get free signals</button>   
        <button className="suscribe-btn2">Get premium signals</button>     
        </div>
      </div>
      </div> */}
       
      <div className="heading">
        <p>#</p>
        <p className="coin-name">Coins</p>
        <p className="coin-price" >Price </p>
        <p className="coin-24h">24h</p>
        <p className="hide-in-mobile">Volume</p>
        <p className="hide-in-mobile">Mkt Cap</p>
     </div>
        {slice.map((coins,i) => {return(
          <Link className="coin-link" to={`/coin/${coins.id}`}  key={i}>
         <CoinItem key={i} coins={coins}/>
         </Link>
        )})}    
        <button className="view-more" onClick={viewMore} >View More</button>

        <div className="essay">
        <div className="swiper">
          <h2>Lorem ipsum</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type 
           specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
           with the release of Letraset sheets containing Lorem Ipsum passages, and more recently wit
            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className="swiper">
          <h2>Lorem ipsum</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type 
           specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
           with the release of Letraset sheets containing Lorem Ipsum passages, and more recently wit
            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        </div>
      </section>
      <footer>

  <Row>

    <Col lg="5" >
    <div className="footer-brand" >
    <img src={logo} alt="grava" width="50" height="50" />
     rava
    </div>
     <div>
      <p>grava provides a fundamental analysis of financial assets. In addition to tracking price, 
      volume and market capitalisation, helping you make the best financial investment decisions.</p>
     </div>
    </Col>
    
    <Col lg="7" >
    <Row>
    <Col >
     <div className="footer-features" >
     <p className="footer-bold" >Features</p>
      <p className="footer-light" >Stock market analysis</p>
      <p className="footer-light" >Crypto market analysis</p>
      <p className="footer-light" >Trading signals</p>
      <p className="footer-light" >investment plan</p>
     </div>
    </Col>
    <Col >
     <div className="footer-features" >
     <p className="footer-bold" >Company</p>
      <p className="footer-light" >Blog</p>
      <p className="footer-light" >Join our team</p>
      <p className="footer-light" >About us</p>
     </div>
    </Col>

    </Row>
       
    </Col>
    
    
    </Row>
  

  
  <div className="contact">
    <h3 className="">Get in touch with us</h3>
    <div>
      <BsInstagram className="footer-icon" />
      <FaFacebookF className="footer-icon" />
      <BsTwitter className="footer-icon" />
    </div>
    </div>

  <div className="footer-text">
    <p>
      © 2022 grava (RC255). All rights reserved. 
    </p>
  </div>


</footer>
        </div>
    )

}

export default Home