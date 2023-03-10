import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import down from '../assets/images/Main/down.png';
import img_00 from '../assets/images/Main/01.png';
import img_01 from '../assets/images/Main/02.png';
import img_02 from '../assets/images/Main/03.png';
import img_03 from '../assets/images/Main/04.png';
import img_04 from '../assets/images/Main/05.png';
import img_05 from '../assets/images/Main/06.png';
import img_06 from '../assets/images/Main/07.png';
import img_07 from '../assets/images/Main/08.png';
import dgulikelion from '../assets/images/About/RoundDGULogo.svg';
import kim from '../assets/images/Main/c.svg';
import go from '../assets/images/Main/e.svg';
import test from '../assets/images/Main/test.svg';
import mainLogo from '../assets/images/Main/mainPage_logo.svg';
import bottomLogo from '../assets/images/Main/logo.svg';
import { useNavigate } from 'react-router-dom';

const Header = styled.header`
  height: 75vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: rgb(98, 66, 33);
`;

const titleAnimation = keyframes`
  0% {
    letter-spacing: 1em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    letter-spacing: normal;
    opacity: 1;
  }
`;

const Title = styled.div`
  margin-top: -22vh;
  text-align: center;
  img{
    scale : 0.9;
  }
  h1 {
    font-size: 4rem;
    margin-bottom: 1.3rem;
    @media (max-width: 500px) {
      font-size: 3rem;
    }
  }
  h6 {
    font-size: 3.5rem;
    @media (max-width: 500px) {
      font-size: 2rem;
    }
  }
  h4 {
    margin-bottom: 25px;
    font-size: 1.25rem;
    @media (max-width: 500px) {
      font-size: 1rem;
    }
  }
  animation: ${titleAnimation} 2s cubic-bezier(0.215, 0.61, 0.355, 1) both;
`;

const downBtnFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const DownBtn = styled.div`
  @media (max-width: 500px) {
    margin-bottom: -15vh;
  }
  p {
    font-size: 1.2rem;
  }
  img {
    z-index: -1;
    height: 34px;
  }
  margin-top: 15vh;
  margin-bottom: -20vh;
  animation: ${downBtnFadeIn} 1s cubic-bezier(0.39, 0.575, 0.565, 1) 1.4s both;
`;

const Content = styled.section``;

const Sticky = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-x: hidden;
  margin-bottom: -15vh;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.5s;
  will-change: opacity;
`;

const Img = styled.img`
  max-height: 100vh;
  @media (max-width: 500px) {
    width: 140%;
  }
`;

const Text = styled.div`
  position: relative;
`;

const Step = styled.div`
  margin-bottom: 70vh;
  padding: 1rem 1rem;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  text-align: center;
  line-height: 1.5;
  p {
    font-size: 1.2rem;
    color: rgb(98, 66, 33);
  }
`;

const Info = styled.section`
  height: 240vh;
  margin-top: -38vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20vh;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  img {
    cursor: pointer;
    width: 160px;
    height: 160px;
  }
  p {
    margin-top: 25px;
    text-align: center;
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.5;
    color: rgb(98, 66, 33);
    &:last-child {
      margin-top: -0px;
      font-size: 1.1rem;
    }
  }
`;

const Main = () => {
  const navigate = useNavigate();
  const likelionurl = 'https://likeliondgu.oopy.io/';
  const testurl = 'https://dgu-club-fair.netlify.app/';
  const [stepItem, setStepItem] = useState([]);
  const [graphicItem, setGraphicItem] = useState([]);
  let currentItem = graphicItem[0]; // ?????? ?????????
  let checkIdx;

  const io = new IntersectionObserver((entries, observer) => {
    checkIdx = entries[0].target.dataset.index;
    checkIdx = checkIdx * 1; // ????????? to ??????
  });

  for (let i = 0; i < stepItem.length; i++) {
    stepItem[i].dataset.index = i;
    graphicItem[i].dataset.index = i;
    io.observe(stepItem[i]);
  }

  useEffect(() => {
    setStepItem(document.querySelectorAll('.step'));
    setGraphicItem(document.querySelectorAll('.item'));

    for (let i = 0; i < stepItem.length; i++) {
      stepItem[i].dataset.index = i;
      graphicItem[i].dataset.index = i;

      io.observe(stepItem[i]);
    }
  }, []);

  // ?????????
  function action() {
    currentItem.style.opacity = 1;
  }

  // ????????????
  function stopAction() {
    currentItem.style.opacity = 0;
  }

  window.addEventListener('scroll', () => {
    let step;
    let rectInfo;
    for (let i = checkIdx - 1; i < checkIdx + 2; i++) {
      step = stepItem[i];
      if (!step) continue;
      rectInfo = step.getBoundingClientRect();
      if (
        rectInfo.top > window.innerHeight * 0.1 &&
        rectInfo.top < window.innerHeight * 0.8
      ) {
        stopAction();
        currentItem = graphicItem[step.dataset.index];
        action();
      }
    }
  });

  return (
    <>
      <Header>
        <Title>
          <img src={mainLogo}/>
          <h4>2023 ???????????????</h4>
          <h1>????????? ?????????</h1>
          <h6>????????????</h6>
        </Title>
        <DownBtn>
          <p>Scroll</p>
          <img src={down} />
        </DownBtn>
      </Header>
      <Content>
        <Sticky>
          <Item className="item">
            <Img src={img_00} />
          </Item>
          <Item className="item">
            <Img src={img_01} />
          </Item>
          <Item className="item">
            <Img src={img_02} />
          </Item>
          <Item className="item">
            <Img src={img_03} />
          </Item>
          <Item className="item">
            <Img src={img_04} />
          </Item>
          <Item className="item">
            <Img src={img_05} />
          </Item>
          <Item className="item">
            <Img src={img_06} />
          </Item>
          <Item className="item">
            <Img src={img_07} />
          </Item>
        </Sticky>
        <Text>
          <Step className="step">
            <p>
              2023, ??? ?????????. ?????????????????? ????????????...! <br></br>
              ????????????.
            </p>
          </Step>
          <Step className="step">
            <p>
              2023, ??? ?????????. ?????? ????????????... <br></br>
              ???.
            </p>
          </Step>
          <Step className="step">
            <p>??????...</p>
          </Step>
          <Step className="step">
            <p>
              ????????? : ?????? ????????? ???????????<br></br>
              ????????? : ?????? ????????? ?????? ????????? ???????
            </p>
          </Step>
          <Step className="step">
            <p>(????????? ????????? ?????? ???)</p>
          </Step>
          <Step className="step">
            <p>????????? ?????????...?</p>
          </Step>
          <Step className="step">
            <p>
              ???.???.???!! <br></br>
              ???????????? ??????????????????!!
            </p>
          </Step>
          <Step className="step">
            <p>
              ???????????? ?????????.<br></br>
              ????????? ???????????? ?????? ?????????...
            </p>
          </Step>
        </Text>
      </Content>
      <Info>
        <InfoBox onClick={() => navigate('/introduction')}>
          <img src={kim} />
          <p>???????????? ????????? ????????????</p>
          <p>(????????? ??????)</p>
        </InfoBox>
        <InfoBox onClick={() => navigate('/booth')}>
          <img src={go} />
          <p>???????????? ????????? ????????? ????????????</p>
          <p>(????????? ????????? ??????)</p>
        </InfoBox>
        <InfoBox onClick={() => window.open(testurl)}>
          <img src={test} />
          <p>
            ????????? ??? ?????????????<br></br>
            ?????? ??????.
          </p>
          <p>(????????? ?????? ?????????)</p>
        </InfoBox>
        <InfoBox onClick={() => window.open(likelionurl)}>
          <img src={dgulikelion} />
          <p>????????? ?????????????</p>
          <p>????????? ????????????!</p>
        </InfoBox>
      </Info>
    </>
  );
};

export default Main;
