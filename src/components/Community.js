import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  margin-top: 9%;
  width: 100%;
  @media (min-width: 568px) {
    margin-top: 15%;
  }
  @media (min-width: 768px) {
    margin-top: 1%;
  }

  @media (min-width: 1200px) {
    margin-top: 5%;
  }
  .community-inner {
    padding: 15% 5% 35% 5%;
    display: grid;
    gap: 5%;
    @media (min-width: 568px) {
      padding: 10% 5% 28% 5%;
    }
    @media (min-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 6%;
      padding: 13% 5% 12% 5%;
    }
    @media (min-width: 768px) {
      padding: 7% 5% 3% 5%;
    }
    @media (min-width: 1200px) {
      gap: 5%;
      padding: 1% 5% 6% 5%;
    }
    .community-right {
      display: grid;
      gap: 10%;

      @media (min-width: 768px) {
        width: 60%;
        gap: 3%;
      }
      @media (min-width: 992px) {
        width: 80%;
      }
      @media (min-width: 1200px) {
        width: 70%;
        gap: 3%;
      }
      h2 {
        font-size: 30px;
        line-height: 49px;
        @media (min-width: 568px) {
          font-size: 48px;
          font-weight: 700;
          line-height: 70px;
        }
        @media (min-width: 768px) {
          font-size: 30px;
          font-weight: 800;
          line-height: 40px;
        }
        @media (min-width: 992px) {
          font-size: 40px;
          line-height: 50px;
        }
        @media (min-width: 1200px) {
          font-size: 50px;
          line-height: 70px;
        }
      }
      p {
        font-size: 19px;
        font-weight: 300;
        line-height: 30px;
        letter-spacing: 0;
        @media (min-width: 568px) {
          font-size: 29px;
          line-height: 35px;
          letter-spacing: 1px;
        }
        @media (min-width: 768px) {
          font-size: 23px;
          line-height: 43px;
          width: 95%;
        }
        @media (min-width: 992px) {
          font-size: 18px;
          line-height: 30px;
          width: 100%;
        }
        @media (min-width: 1200px) {
          font-size: 24px;
          line-height: 40px;
          width: 95%;
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
          padding: 2%;
          width: 50%;
        }
        @media (min-width: 992px) {
          padding: 2%;
          width: 40%;
        }
        @media (min-width: 1200px) {
          font-size: 20px;
          width: 23%;
          padding: 1.5% 1%;
        }
      }
    }
    .community-left {
      @media (min-width: 768px) {
        width: 50%;
      }
      @media (min-width: 1200px) {
        width: 45%;
      }
      .vid {
        width: 100%;
        height: 500px;
        border-radius: 10px;

        @media (min-width: 768px) {
          height: 30vh;
        }

        @media (min-width: 1200px) {
          height: 66vh;
          margin-top: 5%;
          border-radius: 13px;
        }
      }
    }
  }
  .mentors {
    padding: 5% 10%;
    text-align: left;
    display: grid;
    gap: 5%;
    @media (min-width: 568px) {
      padding-top: 2%;
    }
    @media (min-width: 768px) {
      text-align: center;
      padding-top: 8%;
    }
    @media (min-width: 1200px) {
      padding-top: 2%;
    }
    h3 {
      font-size: 28px;
      line-height: 40px;
      @media (min-width: 568px) {
        font-size: 47px;
        line-height: 69px;
      }
      @media (min-width: 768px) {
        font-size: 33px;
      }
      @media (min-width: 992px) {
        font-size: 42px;
      }
      @media (min-width: 1200px) {
        font-size: 50px;
        font-weight: 800;
      }
    }
    p {
      font-size: 19px;
      font-weight: 300;
      line-height: 30px;
      letter-spacing: 0;
      @media (min-width: 568px) {
        font-size: 19px;
        line-height: 35px;
        letter-spacing: 1px;
      }
      @media (min-width: 768px) {
        font-size: 23px;
        line-height: 43px;
        width: 95%;
      }
      @media (min-width: 992px) {
        font-size: 23px;
        line-height: 30px;
        width: 100%;
      }
      @media (min-width: 1200px) {
        font-size: 24px;
        line-height: 40px;
        width: 95%;
      }
    }
  }
`;

function Community() {
  return (
    <Wrapper>
      <div className="community-inner">
        <div className="community-left">
          <video src="./images/fin.mp4" controls className="vid"></video>
        </div>
        <div className="community-right">
          <h2>
            Join The Uncommon <br /> Community.
          </h2>
          <p>
            Our Donors believe everyone should have access to high quality
            technology education & employment opportunities. Let's close the
            access gap together.
          </p>
          <button>Donate Today</button>
        </div>
      </div>
      <div className="mentors">
        <h3>Mentors Change Lives.</h3>
        <p>
          When our Bootcamp students pick their track for specialization,
          they're matched with industry professionals for one on one Mentorship.
        </p>
      </div>
    </Wrapper>
  );
}

export default Community;
