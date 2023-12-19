import React, { useState } from "react";
import styled from "styled-components";
import { TextField, Button } from "@mui/material";
import axios from 'axios';

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

scss
Copy
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
  .message{
    color:green;
  }
`;

function Trial() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFailed, setIsFailed] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit =  async (event) => {
    event.preventDefault();
    // Perform any additional logic here, such as validation or API calls
    console.log("Form submitted:", formData);
   
    try{
      const response = await axios.post(
        "https://formsubmit.co/13962cf4a2847f3346afef1b62cac67a",
        formData
      );
      if(response){
        console.log(response)
        setIsSubmitted(true);
        setTimeout(()=>{
          setIsSubmitted(false)
          setFormData({
            name:"",
          email:""          })
        }, 5000)
      }
    }catch(error){
      console.log(error)
    }
 
  };

  const handleInputChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Wrapper>
      <div className="contact">
        <h2>Stay Engaged</h2>
        <div className="partners-inner">
          <div className="form">
            <h5>Sign Up For Our Mailing List</h5>
            <form onSubmit={handleSubmit} method="POST">
              <TextField
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                value={formData.name}
                onChange={handleInputChange}
              />
              <TextField
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                value={formData.email}
                onChange={handleInputChange}
              />
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </form>
            <p className="message">
              {isSubmitted ? "Sent SuccessFully" : ""}
            </p>
          </div>
        </div>
      </div>
      <div className="blue"></div>
    </Wrapper>
  );
}

export default Trial;
