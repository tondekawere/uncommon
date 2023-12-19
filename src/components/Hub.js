import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  .hub {
    padding: 25% 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (min-width: 568px) {
      padding: 40% 10%;
    }
    @media (min-width: 768px) {
      flex-direction: row;
      padding: 0% 10%;
      gap: 7%;
    }
    @media (min-width: 992px) {
      gap: 7%;
      margin-top: 5%;
    }
    .text {
      display: grid;
      gap: 8%;
      @media (min-width: 768px) {
        width: 90%;
        padding-top: 5%;
      }
      @media (min-width: 992px) {
        width: 50%;
        padding-top: 5%;
      }
      h2 {
        font-size: 26px;
        @media (min-width: 568px) {
          font-size: 44px;
        }
        @media (min-width: 768px) {
          font-size: 28px;
        }
        @media (min-width: 992px) {
          font-size: 38px;
        }
        @media (min-width: 992px) {
          font-size: 48px;
        }
      }
      p {
        line-height: 25px;
        @media (min-width: 568px) {
          font-size: 30px;
          line-height: 50px;
          font-weight: 300;
        }
        @media (min-width: 768px) {
          font-size: 20px;
          line-height: 35px;
        }
        @media (min-width: 992px) {
          font-size: 18px;
          line-height: 30px;
        }
        @media (min-width: 1200px) {
          font-size: 24px;
          line-height: 42px;
          letter-spacing: 1px;
        }
      }
      button {
        margin-top: 2%;
        color: #fff;
        background: #4a5af9;
        border-radius: 5px;
        padding: 4% 1%;
        font-size: 20px;
        font-weight: 600;
        width: 56%;
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
          width: 36%;
          padding: 1.5% 1%;
        }
        @media (min-width: 768px) {
          padding: 2% 0;
          width: 50%;
        }
        @media (min-width: 992px) {
          padding: 2%;
          width: 40%;
        }
        @media (min-width: 1200px) {
          font-size: 20px;
          margin-top: 0%;
          width: 30%;
          padding: 2% 1%;
        }
      }
    }
    .images {
      margin-top: 20%;
      @media (min-width: 768px) {
        margin-top: 7%;
        width: 95%;
      }
      @media (min-width: 992px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 45%;
        gap: 12%;
      }
      img {
        width: 100%;
        @media (min-width: 768px) {
          width: 100%;
        }
        @media (min-width: 992px) {
          width: 45%;
        }
      }
      .img2 {
        display: none;
        @media (min-width: 992px) {
          display: block;
        }
      }
    }
  }
`;

function Hub() {
  return (
    <Wrapper>
      <div className="hub">
        <div className="text">
          <h2>Hub Sponsorship</h2>
          <p>
            We brand our Innovation Hubs for corporate partners, boosting their
            brand awareness, customer loyalty & employee engagement.
          </p>
          <button>Learn More</button>
        </div>
        <div className="images">
          <img src="./images/hub1.png" alt="hub1"/>
          <img src="./images/hub2.png" className="img2" alt="hub2"/>
        </div>
      </div>
    </Wrapper>
  );
}

export default Hub;
