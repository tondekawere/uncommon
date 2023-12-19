import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  .works-inner {
    padding: 10%;
    display: grid;
    gap: 4%;
    @media (min-width: 568px) {
      gap: 1%;
    }
    @media (min-width: 568px) {
      gap: 0%;
    }
    @media (min-width: 568px) {
      padding: 7%;
    }
    h2 {
      font-size: 27px;
      font-weight: 800;
      padding: 8% 0 0 0;
      @media (min-width: 568px) {
        font-size: 47px;
        font-weight: 700;
        padding: 2% 0 0 0;
      }
      @media (min-width: 992px) {
        padding: 0;
      }
      @media (min-width: 1200px) {
        font-size: 55px;
      }
    }
    .text {
      margin-top: 10%;
      display: grid;
      gap: 15%;
      @media (min-width: 568px) {
        gap: 18%;
      }
      @media (min-width: 992px) {
        margin-top: 8%;
      }
      @media (min-width: 1200px) {
        margin-top: 6%;
      }

      h4 {
        font-size: 25px;
        font-weight: 600;
        @media (min-width: 568px) {
          font-size: 45px;
          font-weight: 600;
        }
        @media (min-width: 768px) {
          font-size: 40px;
        }
        @media (min-width: 992px) {
          font-size: 35px;
        }
        @media (min-width: 1200px) {
          font-size: 40px;
        }
      }
      p {
        line-height: 30px;
        font-size: 16px;
        @media (min-width: 568px) {
          font-size: 32px;
          font-weight: 300;
          line-height: 50px;
        }
        @media (min-width: 768px) {
          font-size: 25px;
          line-height: 45px;
        }
        @media (min-width: 992px) {
          width: 85%;
        }
        @media (min-width: 1200px) {
          width: 87%;
          letter-spacing: 1px;
        }
      }
      hr {
        border: none;
        background: #000;
        width: 100%;
        height: 1px;
      }
    }
    .text2 {
      margin-top: 25%;
      @media (min-width: 568px) {
        margin-top: 29%;
        gap: 10%;
      }
      @media (min-width: 768px) {
        margin-top: 15%;
      }
      @media (min-width: 992px) {
        margin-top: 10%;
      }
      @media (min-width: 1200px) {
        margin-top: 7%;
      }
      h4 {
        line-height: 33px;
        @media (min-width: 568px) {
          line-height: 70px;
        }
      }
    }
    .text3 {
      margin-top: 35%;
      @media (min-width: 568px) {
        margin-top: 30%;
      }
      @media (min-width: 768px) {
        margin-top: 15%;
      }
      @media (min-width: 768px) {
        margin-top: 10%;
      }
      @media (min-width: 1200px) {
        margin-top: 7%;
      }
    }
  }
`;

function Works() {
  return (
    <Wrapper>
      <div className="works-inner">
        <h2>How It Works</h2>
        <div className="text1 text">
          <h4>Innovation Hubs</h4>
          <p>
            We make longterm investments in our target communities by building
            innovative, sustainable workspaces to run our free education
            programs.
          </p>
          <hr />
        </div>
        <div className="text2 text">
          <h4>Workforce Development</h4>
          <p>
            Our Technology Bootcamp is for unemployed young adults. Students
            take crash courses in Design, Coding and Marketing before picking a
            track to specialize in.
          </p>
          <hr />
        </div>
        <div className="text3 text">
          <h4>Youth Coding</h4>
          <p>
            In addition to learning, our Bootcamp Students volunteer their time,
            teaching free, after-school coding lessons to local primary &
            secondary students.
          </p>
          <hr />
        </div>
      </div>
    </Wrapper>
  );
}

export default Works;
