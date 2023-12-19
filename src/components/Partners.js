import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  .partners {
    padding: 20% 7%;
    text-align: center;
    display: grid;
    gap: 15%;
    @media (min-width: 568px) {
      padding: 15% 7%;
      gap: 10%;
    }
    @media (min-width: 992px) {
      padding: 10% 7%;
      gap: 20%;
    }
    h2 {
      font-size: 19px;
      line-height: 25px;
      @media (min-width: 568px) {
        font-size: 35px;
        line-height: 45px;
      }
      @media (min-width: 768px) {
        font-size: 16px;
      }
      @media (min-width: 992px) {
        font-size: 20px;
      }
      @media (min-width: 1200px) {
        font-size: 27px;
      }
      a {
        text-decoration: underline;
        color: #000;
      }
    }
    .partners-inner {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 5%;
      @media (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
      }
      @media (min-width: 1200px) {
        gap: 15%;
      }
      img {
        display: none;
        @media (min-width: 768px) {
          display: block;
          width: 40%;
        }
        @media (min-width: 992px) {
          width: 19%;
        }
        @media (min-width: 1200px) {
          width: 12%;
          margin: 2% 0;
        }
      }
      .img {
        display: block;
        width: 55%;
        @media (min-width: 568px) {
          width: 30%;
        }
        @media (min-width: 768px) {
          width: 40%;
        }
        @media (min-width: 992px) {
          width: 19%;
        }
        @media (min-width: 1200px) {
          width: 12%;
        }
      }
      .img3 {
        margin: 15% 0 8% 0;
        @media (min-width: 768px) {
          margin: 0;
        }
      }
    }
  }
`;

function Partners() {
  return (
    <Wrapper>
      <div className="partners">
        <h2>
          <a href="#">Join</a> Our Community Of Mentors From Companies All Over
          The World.
        </h2>
        <div className="partners-inner">
          <img src="./images/google.png" className="img img1" alt="google" />
          <img src="./images/Pinterest.png" className="img img2" alt="Pinterest" />
          <img src="./images/amazon.png" className="img img3" alt="amazon" />
          <img src="./images/facebook.png" className="img img4" alt="facebook" />
          <img src="./images/suzzy.png" alt="suzzy" />
          <img src="./images/morgan.png" alt="morgan" />
          <img src="./images/youtube.png" alt="youtube" />
          <img src="./images/ROI.png" alt="ROI" />
          <img src="./images/auto.png" alt="auto" />
          <img src="./images/instagram.png" alt="instagram" />
          <img src="./images/linkedIn.png" alt="linkedIn" />
          <img src="./images/carparts.png" alt="carparts" />
        </div>
      </div>
    </Wrapper>
  );
}

export default Partners;
