import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background: #f2f3fe;
  width: 100%;
  margin-top: 10%;
  @media (min-width: 568px) {
    margin-top: 4%;
  }
  .mentor {
    padding: 15% 0%;
    @media (min-width: 568px) {
      padding: 9% 0%;
    }
    @media (min-width: 768px) {
      padding: 6% 5%;
    }
    @media (min-width: 992px) {
      padding: 5% 10%;
    }
    @media (min-width: 1200px) {
      padding: 4% 10%;
    }

    .mentor-inner {
      padding: 15% 5% 30% 5%;
      background: #fff;
      text-align: center;
      display: grid;
      gap: 9%;
      @media (min-width: 568px) {
        padding-bottom: 23%;
      }
      @media (min-width: 768px) {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 6% 5% 7% 1%;
        border-radius: 15px;
      }
      @media (min-width: 992px) {
        padding: 6% 15% 7% 9%;
      }
      @media (min-width: 1200px) {
        padding: 6% 10% 7% 9%;
        gap: 5%;
      }

      .images {
        position: relative;
        @media (min-width: 768px) {
          width: 50%;
        }
        @media (min-width: 992px) {
          width: 40%;
        }
        .blue {
          display: none;
          position: relative;
          @media (min-width: 768px) {
            background: #4a5af9;
            display: block;
            height: 200px;
            width: 100%;
            border-radius: 5px;
            z-index: 1;
          }
          @media (min-width: 992px) {
            height: 200px;
            width: 85%;
          }
          @media (min-width: 992px) {
            height: 200px;
            width: 80%;
          }
        }
        .img1 {
          height: 250px;
          width: 75%;
          object-fit: cover;
          border-radius: 10px;
          box-shadow: 1px 1px 5px 5px #c3c3c3;
          @media (min-width: 568px) {
            height: 250px;
            width: 52%;
          }
          @media (min-width: 768px) {
            border-radius: 5px;
            box-shadow: 2px 2px 20px 2px #c3c3c3;
            height: 200px;
            width: 95%;
            z-index: 2;
            position: absolute;
            top: 10%;
            left: 10%;
          }
          @media (min-width: 992px) {
            width: 85%;
          }
          @media (min-width: 1200px) {
            width: 79%;
            left: 7%;
          }
        }
        .img-a {
          position: absolute;
          bottom: -20%;
          width: 38%;
          right: -2%;
          @media (min-width: 568px) {
            bottom: -25%;
          }
          @media (min-width: 768px) {
            bottom: -30%;
            z-index: 4;
            width: 50%;
            right: -34%;
          }
          @media (min-width: 992px) {
            width: 55%;
            right: -20%;
          }
          @media (min-width: 1200px) {
            bottom: -37%;
            width: 60%;
            right: -13%;
          }
        }
      }
    }
    .text {
      display: grid;
      gap: 5%;
      @media (min-width: 768px) {
        width: 90%;
        text-align: left;
      }
      @media (min-width: 1200px) {
        padding-right: 5%;
      }
      h4 {
        font-size: 15px;
        line-height: 25px;
        @media (min-width: 568px) {
          font-size: 27px;
          line-height: 35px;
        }
        @media (min-width: 768px) {
          font-size: 20px;
          line-height: 35px;
        }
        @media (min-width: 1200px) {
          font-size: 29px;
          line-height: 45px;
        }
      }
      p {
        font-size: 20px;
        line-height: 26px;
        @media (min-width: 992px) {
          line-height: 33px;
        }
      }
    }
  }
`;

function Mentor() {
  return (
    <Wrapper>
      <div className="mentor">
      <div className="mentor-inner">
        <div className="images">
          <div className="blue"></div>
          <img src="./images/profile.jpeg" alt="image" className="img1" />
          <img src="./images/ad.png" alt="image" className="img-a" />
        </div>
        <div className="text">
          <h4>
            Becoming a Mentor at Uncommon has been an extraordinary experience.
            It's been a privilege to watch Walter grow from novice to
            world-class designer.
          </h4>
          <p>- Rasa Lavarevic, Sr. UX/UI Designer, Autodesk</p>
        </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Mentor;
