import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background: #f2f3fe;
  margin-top: 20%;
  width: 100%;
  @media (min-width: 568px) {
    margin-top: 55%;
  }
  @media (min-width: 768px) {
    margin-top: 13.3%;
  }
  @media (min-width: 1200px) {
    margin-top: 5%;
  }
  .impact-inner {
    padding: 15% 5% 35% 5%;
    display: grid;
    gap: 20%;
    @media (min-width: 568px) {
      padding: 10% 5% 28% 5%;
    }
    @media (min-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1%;
      padding: 13% 5% 12% 5%;
    }
    @media (min-width: 1200px) {
      gap: 10%;
      padding: 7% 5% 6% 5%;
    }
    .impact-left {
      display: grid;
      gap: 10%;

      @media (min-width: 768px) {
        width: 100%;
        gap: 3%;
      }
      @media (min-width: 1200px) {
        width: 80%;
        gap: 3%;
      }
      h4 {
        font-weight: 700;
        font-size: 20px;
        @media (min-width: 568px) {
          font-size: 43px;
          font-weight: 500;
        }
        @media (min-width: 768px) {
          font-size: 25px;
          font-weight: 600;
        }
        @media (min-width: 1200px) {
          font-size: 27px;
          font-weight: 600;
        }
      }
      h2 {
        font-size: 32px;
        line-height: 49px;
        @media (min-width: 768px) {
          font-size: 40px;
          font-weight: 800;
          line-height: 80px;
        }
        @media (min-width: 768px) {
          font-size: 50px;
          font-weight: 700;
          line-height: 80px;
        }
      }
      p {
        font-size: 19px;
        font-weight: 300;
        line-height: 30px;
        letter-spacing: 1px;
        @media (min-width: 568px) {
          line-height: 35px;
        }
        @media (min-width: 768px) {
          font-size: 23px;
          line-height: 43px;
        }
        @media (min-width: 1200px) {
          font-size: 22px;
          line-height: 43px;
        }
      }
    }
    .impact-right {
      @media (min-width: 768px) {
        width: 87%;
      }
      .vid {
        width: 100%;
        height: auto;
        border-radius: 0 0 10px 10px;
        @media (min-width: 768px) {
          height: 22vh;
        }
        @media (min-width: 992px) {
          height: 25vh;
        }

        @media (min-width: 1200px) {
          height: 48vh;
          margin-top: 5%;
          border-radius: 0 0 13px 13px;
        }
      }
    }
  }
`;

function Impact() {
  return (
    <Wrapper>
      <div className="impact-inner">
      <div className="impact-left">
          <h4>Uncommon Impact</h4>
          <h2>
            Education = <br /> Earning Power.
          </h2>
          <p>
            Our mission is to help unemployed young adults from low-income
            communities launch their careers in the technology industry.
          </p>
      </div>
      <div className="impact-right">
        <video src="./images/vid.mp4"  controls className="vid"></video>
      </div>
      </div>
    </Wrapper>
  );
}

export default Impact;
