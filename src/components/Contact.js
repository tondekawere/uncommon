import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Wrapper = styled.section`
  .contact {
    text-align: center;
    display: grid;
    gap: 5%;
    @media (min-width: 768px) {
      padding: 10% 5%;
    }
    @media (min-width: 992px) {
      padding: 10%;
    }
    h2 {
      font-size: 45px;
      @media (min-width: 992px) {
        font-size: 42px;
      }
      @media (min-width: 1200px) {
        font-size: 55px;
        font-weight: 800;
      }
    }
    img {
      width: 100%;
    }
    .partners-inner {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      @media (min-width: 768px) {
        flex-direction: row;
      }
      @media (min-width: 1200px) {
        margin-top: -2%;
      }

      .left {
        @media (min-width: 768px) {
          width: 100%;
        }
        @media (min-width: 992px) {
          width: 38%;
        }
        @media (min-width: 1200px) {
          margin-top: 2%;
        }
        img {
          @media (min-width: 768px) {
            border-radius: 10px;
            height: 400px;
            width: 100%;
            object-fit: cover;
          }
          @media (min-width: 992px) {
            height: unset;
          }
        }
      }
      .right {
        padding: 10% 5%;
        display: grid;
        gap: 5%;
        @media (min-width: 768px) {
          padding: 0 5% 5% 5%;
        }
        @media (min-width: 992px) {
          padding: 0 0% 5% 5%;
        }
        .images {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 3%;
          @media (min-width: 568px) {
            gap: 1%;
          }
          @media (min-width: 768px) {
            gap: 4%;
          }
          @media (min-width: 992px) {
            gap: 2%;
          }
          @media (min-width: 1200px) {
            padding: 0 2%;
          }
          a {
            width: 21%;
            @media (min-width: 568px) {
              width: 25%;
            }
            @media (min-width: 992px) {
              width: 30%;
            }
            @media (min-width: 1200px) {
              width: 30%;
            }
            img {
              border-radius: 7px;
              height: 59.5px;
              object-fit: cover;
              @media (min-width: 568px) {
                height: 115.297px;
              }
              @media (min-width: 768px) {
                height: 66.9844px;
              }
              @media (min-width: 992px) {
                height: 120.266px;
              }
              @media (min-width: 1200px) {
                height: 164.609px;
              }
            }
          }
        }
        .links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5%;
          @media (min-width: 568px) {
            gap: 2%;
          }
          @media (min-width: 768px) {
            justify-content: flex-start;
          }
          a {
            border-right: 1px solid #000;
            padding-right: 2%;
            color: #000;
            font-size: 19px;
            font-weight: 500;
          }
          .blog {
            border-right: none;
            padding-right: 0%;
          }
        }
        .form {
          h5 {
            display: none;
            @media (min-width: 992px) {
              display: block;
              font-size: 28px;
              text-align: left;
            }
          }
          @media (min-width: 768px) {
            margin-top: 12%;
          }
          @media (min-width: 992px) {
            margin-top: 3%;
            display: grid;
            gap: 10%;
          }
          @media (min-width: 1200px) {
            margin-top: 5%;
            display: grid;
            gap: 20%;
          }
          form {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 3%;

            .text-field {
              width: 46%;
              margin-top: 5%;
              @media (min-width: 568px) {
                margin-top: 2%;
              }
              @media (min-width: 768px) {
                margin-top: 3%;
                width: 48%;
              }
              @media (min-width: 1200px) {
                margin-top: 1%;
                width: 48%;
              }
            }

            .button {
              margin-top: 5%;
              width: 46%;
              padding: 4.5% 0%;
              @media (min-width: 568px) {
                padding: 3% 0;
                margin-top: 2%;
              }
              @media (min-width: 768px) {
                margin-top: 3%;
                padding: 5% 0;
                width: 48%;
              }
              @media (min-width: 992px) {
                margin-top: 3%;
                padding: 3% 0;
                width: 48%;
              }
              @media (min-width: 1200px) {
                margin-top: 1%;
                padding: 2.3% 0;
                width: 48%;
              }
            }
          }
        }
      }
    }
  }
  .blue {
    background: #4a5af9;
    margin-top: 50%;
    height: 55px;
    width: 100%;
    @media (min-width: 568px) {
      margin-top: 25%;
    }
    @media (min-width: 768px) {
      display: none;
    }
    @media (min-width: 992px) {
      margin-top: 5%;
      display: block;
      height: 12vh;
    }
    @media (min-width: 1200px) {
      margin-top: 0%;
    }
  }
`;

function Contact() {
  return (
    <Wrapper>
      <div className="contact">
        <h2>Stay Engaged</h2>
        <div className="partners-inner">
          <div className="left">
            <img src="./images/engaged.png" alt="image" />
          </div>
          <div className="right">
            <div className="images">
              <a href="https://www.instagram.com">
                <img src="./images/e4.jpg" alt="video" />
              </a>
              <a href="https://www.instagram.com">
                <img src="./images/e1.jpg" alt="image" />
              </a>
              <a href="https://www.instagram.com">
                <img src="./images/e2.jpg" alt="image" />
              </a>
              <a href="https://www.instagram.com">
                <img src="./images/e3.jpg" alt="video" />
              </a>
            </div>
            <div className="links">
              <a href="https://www.instagram.com">Instagram</a>
              <a href="https://www.linkedIn.com">LinkedIn </a>
              <a href="https://www.blog.com" className="blog">
                {" "}
                Blog
              </a>
            </div>
            <div className="form">
              <h5>Sign Up For Our Mailing List</h5>
              <form action="https://formsubmit.co/your@email.com" method="POST">
                <TextField
                  id="filled-basic"
                  label="First Name"
                  variant="filled"
                  className="text-field"
                  required
                />
                <TextField
                  id="filled-basic"
                  label="Last Name"
                  variant="filled"
                  className="text-field"
                  required
                />
                <TextField
                  id="filled-basic"
                  label="Email"
                  className="text-field"
                  variant="filled"
                  required
                />
                <Button
                  variant="contained"
                  size="large"
                  className="button"
                  type="submit"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="blue"></div>
    </Wrapper>
  );
}

export default Contact;
