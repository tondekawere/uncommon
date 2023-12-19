import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Wrapper = styled.section`
  .footer {
    .right {
      margin-top: 5%;
      background-color: #f2f3ff;
      padding: 7% 5% 20% 5%;
      display: grid;
      gap: 5%;
      text-align: center;
      @media (min-width: 568px) {
        padding: 7% 5% 13% 5%;
      }
      @media (min-width: 992px) {
        margin-top: 0%;
        width: 40%;
      }
      @media (min-width: 1200px) {
        padding-bottom: 8%;
      }
      h2 {
        font-size: 35px;
        font-weight: 800;
        @media (min-width: 568px) {
          text-align: left;
        }
      }
      span {
        font-size: 19px;
        line-height: 25px;
        font-weight: 400;
        margin-top: 10%;
        @media (min-width: 568px) {
          margin-top: 7%;
        }
      }
      form {
        .textfield {
          width: 100%;
          @media (min-width: 1200px) {
            input {
              font-size: 30px;
            }
          }
        }
        .button {
          float: right;
          margin-top: 5%;
          @media (min-width: 1200px) {
            margin: 7% 0 5% 0;
          }
        }
      }
    }
  }
`;

function Try() {
  return (
    <Wrapper>
      <div className="footer">
        <div className="right">
          <h2>Get In Touch</h2>
          <form>
            <TextField
              id="standard-basic"
              className="textfield"
              label="Name"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Email Address"
              variant="standard"
              className="textfield"
            />
            <textarea
              id="standard-multiline-static"
              label="Message"
              multiline
              rows={4}
              variant="standard"
              className="message textfield"
            />

            <Button variant="contained" size="large" className="button">
              Submit
            </Button>
          </form>
          <span>copyright 2023 | all rights reserved | uncommon.org</span>
        </div>
      </div>
    </Wrapper>
  );
}

export default Try;
