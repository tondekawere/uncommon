import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  transform: translate3d(0, 0, 0);
  transition: all 300ms ease;
  background: #4a5af8;
  width: 100%;
  z-index: 3;
  padding: 1% 0;
  @media (min-width: 568px) {
    padding: 0;
  }
  @media (min-width: 992px) {
    background: transparent;
    position: absolute;
    padding: 0;
    gap: 7%;
  }
  @media (min-width: 1200px) {
    padding-left: 0;
    gap: 20%;
  }
  .logo {
    @media (min-width: 992px) {
      width: 50%;
    }
    @media (min-width: 1200px) {
      width: 45%;
    }
  }
  img {
    margin-left: -5%;
    width: 100%;
    cursor: pointer;
    &:hover {
      border-radius: 5px;
      background: rgba(240, 255, 242, 0.301);
    }
    @media (min-width: 568px) {
      width: 60%;
      margin-left: -2%;
    }
    @media (min-width: 992px) {
      width: 100%;

      &:hover {
        border-radius: 25px;
        background: rgba(240, 255, 242, 0.301);
      }
    }
    @media (min-width: 1200px) {
      margin-left: 0%;
    }
  }
  .menu {
    @media (min-width: 992px) {
      width: 80%;
      margin-right: 5%;
    }
    @media (min-width: 1200px) {
      margin-right: 2%;
    }
    .hamburger {
      position: relative;
      margin-right: 20px;
      @media (min-width: 992px) {
        display: none;
        right: 10%;
      }
      span {
        width: 30px;
        height: 2px;
        background: #fff;
        position: absolute;
        right: 0;
        transition: all 0.7s ease;
        &:before {
          position: absolute;
          content: "";
          background: #fff;
          top: -7px;
          right: 1%;
          height: 100%;
          width: 35px;
          transition: all 0.7s ease;
        }
        &:after {
          position: absolute;
          content: "";
          background: #fff;
          top: 7px;
          right: 1%;
          height: 100%;
          width: 25px;
          transition: all 0.7s ease;
        }
      }
    }
    .open {
      outline-color: #000;
      span {
        background: transparent;
        transform: rotate(360deg);
        &:after {
          top: 0;
          transform: rotate(45deg);
          background: #66e0fb;
          width: 100%;
        }
        &:before {
          top: 0;
          width: 100%;
          transform: rotate(-45deg);
          background: #66e0fb;
        }
      }
    }
    ul {
      position: absolute;
      top: 90%;
      right: 0;
      width: 100%;
      height: 100vh;
      background: #4a5af8;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 2%;
      z-index: 1;
      max-height: 0;
      overflow: hidden;
      list-style: none;
      font-size: 18px;
      transition: all 0.7s ease;
      @media (min-width: 568px) {
        top: 100%;
      }
      @media (min-width: 768px) {
        top: 90%;
      }
      @media (min-width: 992px) {
        max-height: none;
        background: transparent;
        flex-direction: row;
        width: 100%;
        height: unset;
        position: relative;
        margin: 0;
        padding: 0 3%;
        gap: 3%;
      }
      @media (min-width: 1200px) {
        font-weight: 700;
        gap: 6%;
      }
      li {
        width: 100%;
        transition: all 1s ease;
        &:hover {
          border: 1px solid #181818;
          background-color: rgba(243, 243, 243, 0.347);
          a {
            text-decoration: underline;
            color: #181818;
            font-weight: 800;
          }
          @media (min-width: 992px) {
            border: none;
            background-color: unset;
          }
        }
        @media (min-width: 992px) {
          margin: 0 0 0 2%;
          width: unset;
        }
        a {
          font-weight: 700;
          font-size: 19px;
          color: #fff;
          display: block;
          padding: 20px;
          cursor: pointer;
          transition: all 0.7s ease;

          @media (min-width: 992px) {
            width: unset;
            padding: 0;
            margin: 0;
            color: #000;
            font-size: 16px;
            font-weight: 500;
            &:hover {
              color: #4a5af8;
            }
          }
          @media (min-width: 1200px) {
            font-size: 17px;
            &:hover {
              font-size: 17px;
            }
          }
        }
        .donate {
          @media (min-width: 992px) {
            color: #fff;
            background: #4a5af9;
            border-radius: 5px;
            padding: 10%;
            font-size: 20px;
            font-weight: 600;
            border: none;
            width: max-content;
            &:hover {
              color: #4a5af9;
              background: transparent;
              border: 1px solid #4a5af9;
            }
          }
          @media (min-width: 1200px) {
            padding: 20%;
            &:hover {
              font-size: 17px;
            }
          }
        }
      }
    }
    .opened {
      max-height: 80vh;
      @media (min-width: 568px) {
        max-height: 70vh;
        a {
          padding: 1% 4%;
        }
      }
      @media (min-width: 768px) {
        max-height: 660px;
        a {
          font-size: 20px;
        }
      }
    }
  }
`;

function Header() {
  const [click, setClick] = useState(false);
  return (
    <Wrapper>
      <a href="#" className="logo">
        <img src="./logo.png" alt="logo" />
      </a>
      <div className="menu">
        <div
          className={click ? "hamburger open" : "hamburger"}
          onClick={() => setClick(!click)}
        >
          <span></span>
        </div>
        <ul className={click ? "opened" : ""}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Our Story</a>
          </li>
          <li>
            <a href="#">Innovation Hubs</a>
          </li>
          <li>
            <a href="#">Hire Us</a>
          </li>
          <li>
            <a href="#" className="donate">Donate</a>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}

export default Header;
