import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  height: 120vh;
  width: 100%;
  @media (min-width: 768px) {
    display: flex;
    height: 90vh;
  }
  .hero-inner {
    background: url(../images/hero.png);
    background-position: center center;
    background-size: cover;
    margin-left: -1%;
    height: 50vh;
    @media (min-width: 568px) {
      height: 50vh;
    }
    @media (min-width: 768px) {
      height: 90vh;
      width: 55%;
    }
    @media (min-width: 768px) {
      height: 100vh;
    }
  }
  .hero-inner2 {
    @media (min-width: 568px) {
      padding: 9% 5% 5% 5%;
    }
    @media (min-width: 768px) {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .inner {
      padding: 20% 5% 5% 5%;
      color: #000;
      text-align: center;
      @media (min-width: 568px) {
        padding: 2% 5% 5% 5%;
      }
      @media (min-width: 768px) {
        text-align: left;
        padding: 20% 5% 5% 1%;
      }
      @media (min-width: 1200px) {
        padding: 10% 5% 5% 1%;
      }
      h1 {
        color: #000;
        line-height: 37px;
        font-size: 27px;
        @media (min-width: 568px) {
          font-size: 40px;
          font-weight: 700;
          line-height: 50px;
        }
        @media (min-width: 768px) {
          font-size: 33px;
          line-height: 47px;
        }
        @media (min-width: 1200px) {
          font-size: 58px;
          line-height: 69px;
          font-weight: 700;
        }
      }
      .h1 {
        position: relative;
        z-index: 1;
        &:before {
          position: absolute;
          background: #4a5af9;
          content: "";
          left: 29%;
          width: 39%;
          top: 25px;
          z-index: -1;
          height: 6px;
          @media (min-width: 568px) {
            width: 36%;
            left: 31%;
            top: 35px;
            height: 9px;
          }
          @media (min-width: 768px) {
            width: 45%;
            left: 0%;
          }
          @media (min-width: 1200px) {
            height: 10px;
            top: 52px;
          }
        }
      }
      p {
        margin: 10% 0;
        font-size: 19px;
        line-height: 30px;
        @media (min-width: 568px) {
          font-size: 30px;
          font-weight: 300;
          line-height: 50px;
          margin: 4% 0;
        }
        @media (min-width: 768px) {
          font-size: 18px;
          line-height: 30px;
        }
        @media (min-width: 1200px) {
          font-size: 25px;
          line-height: 40px;
          margin: 7% 0;
        }
      }
      button {
        margin-top: 2%;
        color: #fff;
        background: #4a5af9;
        border-radius: 5px;
        padding: 4%;
        font-size: 20px;
        font-weight: 600;
        border: none;
        &:hover {
          color: #4a5af9;
          background: transparent;
          border: 1px solid #4a5af9;
        }
        @media (min-width: 568px) {
          font-size: 23px;
          border-radius: 4px;
          font-weight: 500;
          padding: 1.5% 4%;
        }
        @media (min-width: 768px) {
          padding: 2% 4%;
        }
        @media (min-width: 1200px) {
          font-size: 20px;
        }
      }
    }
  }
`;

function Hero() {
  return (
    <Wrapper>
      <div className="hero-inner"></div>
      <div className="hero-inner2">
        <div className="inner">
          <h1>
          Tech education &
          <br /> employment, for <h1 className="h1">everyone.</h1>
        </h1>
        <p>
          We believe that everyone, everywhere should have access to life
          changing technology education and employment opportunities.
        </p>
        <button>Donate Today</button>
        </div>
      </div>
    </Wrapper>
  );
}

export default Hero;
