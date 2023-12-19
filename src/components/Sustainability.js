import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  .sustainability {
    padding: 30% 10%;
    flex-wrap: wrap;
    display: grid;
    gap: 5%;
    @media (min-width: 568px) {
      padding: 15% 10%;
      gap: 7%;
    }
    @media (min-width: 992px) {
      padding: 8% 10%;
      gap: 7%;
    }
    @media (min-width: 1200px) {
      gap: 10%;
    }
    h2 {
      font-size: 40px;
      @media (min-width: 568px) {
        font-size: 37px;
        font-weight: 700;
      }
      @media (min-width: 768px) {
        font-size: 60px;
        font-weight: 800;
      }
      @media (min-width: 992px) {
        font-size: 60px;
      }
      @media (min-width: 1200px) {
        font-size: 65px;
      }
    }
    .sustain {
      display: grid;
      gap: 10%;
      @media (min-width: 992px) {
        gap: 15%;
      }
      h3 {
        font-size: 25px;
        @media (min-width: 568px) {
          font-size: 44px;
        }
        @media (min-width: 768px) {
          font-size: 28px;
        }
        @media (min-width: 992px) {
          font-size: 47px;
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
          font-size: 19px;
          line-height: 30px;
        }
        @media (min-width: 1200px) {
          font-size: 24px;
          line-height: 42px;
          letter-spacing: 1px;
        }
      }
    }
    .sustainability-bottom {
      margin-top: 10%;
      @media (min-width: 768px) {
        margin-top: 8%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      @media (min-width: 992px) {
        margin-top: -10%;
      }
      @media (min-width: 1200px) {
        margin-top: -5%;
      }
      .sustainability-left {
        @media (min-width: 768px) {
          width: 100%;
        }
        @media (min-width: 992px) {
          width: 95%;
        }
        h3 {
          font-weight: 800;
        }
        p {
          width: 95%;
          @media (min-width: 992px) {
            font-size: 18px;
          }
          @media (min-width: 1200px) {
            font-size: 24px;
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
      .sustainability-right {
        display: grid;
        gap: 8%;
        text-align: center;
        @media (min-width: 768px) {
          width: 70%;
        }
        @media (min-width: 992px) {
          width: 100%;
          margin-top: 15%;
        }
        @media (min-width: 1200px) {
          width: 95%;
          margin-top: 10%;
        }
        .top {
          padding: 35% 5% 5% 5%;
          display: grid;
          gap: 8%;
          @media (min-width: 768px) {
            padding: 10% 5% 5% 5%;
            position: relative;
          }
          @media (min-width: 992px) {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5% 0% 5% 5%;
          }
          @media (min-width: 1200px) {
            padding: 0% 0% 2% 5%;
            gap: 0%;
          }
          .images {
            position: relative;

            @media (min-width: 768px) {
              width: 100%;
            }
            @media (min-width: 992px) {
              width: 100%;
            }
            .blue {
              display: none;
              position: relative;
              @media (min-width: 768px) {
                background: #4a5af9;
                display: block;
                height: 200px;
                width: 90%;
                border-radius: 5px;
                z-index: 1;
              }
              @media (min-width: 992px) {
                height: 200px;
                width: 85%;
              }
              @media (min-width: 1200px) {
                height: 200px;
                width: 80%;
              }
            }
            .img1 {
              width: 100%;
              object-fit: cover;
              border-radius: 10px;
              @media (min-width: 568px) {
                width: 60%;
              }
              @media (min-width: 768px) {
                border-radius: 5px;
                height: 100%;
                width: auto;
                z-index: 2;
                position: absolute;
                top: 10%;
                left: 10%;
              }
              @media (min-width: 992px) {
                width: 85%;
              }
              @media (min-width: 1200px) {
                width: 75%;
                left: 8%;
              }
            }
            .img-a {
              position: absolute;
              bottom: -18%;
              width: 38%;
              right: -6%;
              @media (min-width: 568px) {
                bottom: -25%;
                right: 0%;
              }
              @media (min-width: 768px) {
                bottom: -50%;
                z-index: 4;
                width: 80%;
                right: -34%;
              }
              @media (min-width: 992px) {
                width: 80%;
                right: -30%;
                bottom: -40%;
              }
              @media (min-width: 1200px) {
                bottom: -45%;
                width: 65%;
                right: -7%;
              }
            }
          }
          .text {
            display: grid;
            gap: 5%;
            @media (min-width: 768px) {
              width: 90%;
              text-align: left;
              display: none;
            }
            @media (min-width: 992px) {
              display: block;
            }
            @media (min-width: 1200px) {
              gap: 0%;
            }
            h4 {
              font-size: 16px;
              line-height: 25px;
              text-align: center;
              @media (min-width: 568px) {
                font-size: 27px;
                line-height: 38px;
              }
              @media (min-width: 992px) {
                font-size: 17px;
                line-height: 29px;
                text-align: left;
              }
              @media (min-width: 1200px) {
                font-size: 22px;
                line-height: 45px;
              }
            }
          }
        }
        .bottom {
          @media (min-width: 768px) {
            display: none;
          }
          @media (min-width: 992px) {
            display: block;
          }
          p {
            font-size: 16px;
            line-height: 26px;
            @media (min-width: 992px) {
              font-size: 27px;
              line-height: 39px;
              text-align: left;
            }
            @media (min-width: 1200px) {
              padding-top: 7%;
              font-size: 26px;
              font-weight: 300;
              letter-spacing: 1px;
            }
          }
        }
      }
    }
    .btn {
      display: none;
      @media (min-width: 768px) {
        display: block;
        padding: 5% 0 10% 0;
      }
      @media (min-width: 992px) {
        display: none;
      }
      .h4 {
        @media (min-width: 768px) {
          padding-bottom: 10%;
          font-size: 25px;
          line-height: 35px;
        }
      }
      p {
        @media (min-width: 768px) {
          font-size: 25px;
        }
      }
    }
  }
`;

function Sustainability() {
  return (
    <Wrapper>
      <div className="sustainability">
        <h2>Sustainability</h2>

        <div className="sustainability-top sustain">
          <h3>Business Model</h3>
          <p>
            For nonprofits, sustainability is everything. As a team of
            entrepreneurs & out-of-the-box thinkers, we have challenged
            ourselves to come up with creative ways to make impact sustainably
            and at scale.
          </p>
        </div>
        <div className="sustainability-bottom">
          <div className="sustainability-left sustain">
            <h3>Hire Uncommon</h3>
            <p>
              We design, develop and market web products for clients all over
              the world and use the profits to help fund our education mission.
            </p>
            <button>See Portfolio</button>
          </div>
          <div className="sustainability-right">
            <div className="top">
              <div className="images">
                <div className="blue"></div>
                <img src="./images/natasha.png" alt="image" className="img1" />
                <img src="./images/das.png" alt="image" className="img-a" />
              </div>
              <div className="text">
                <h4>
                  The Uncommon team was professional, responsive and went above
                  and beyond to deliver.
                </h4>
              </div>
            </div>
            <div className="bottom">
              <p>- Natasha Chadenga, CEO, DaaS Africa</p>
            </div>
          </div>
        </div>
        <div className="btn">
          <h4 className="h4">
            The Uncommon team was professional, responsive and went above and
            beyond to deliver.
          </h4>
          <p>- Natasha Chadenga, CEO, DaaS Africa</p>
        </div>
      </div>
    </Wrapper>
  );
}

export default Sustainability;
