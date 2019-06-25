// dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCardImage,
  MDBCol,
  MDBCardTitle,
  MDBIcon,
  MDBCardBody,
  MDBCardText
} from 'mdbreact';

import Items from './Items';

function Home() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol
              className='text-white text-center py-5 px-4 my-2'
              style={{
                backgroundImage: `url(https://i.imgur.com/v44pTug.jpg)`
              }}
            >
              <MDBCol className='py-5'>
                <MDBCardTitle className='h1-responsive pt-3 m-5 font-bold'>
                  YOU CAN RENT
                </MDBCardTitle>
                <p className='mx-5 mb-5'>PROFESSIONAL EQUIPMENT</p>
                <MDBBtn outline color='white' className='mb-5'>
                  <MDBIcon className='mr-2' /> Join Now!
                </MDBBtn>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <Items />
      </MDBRow>
      <Route path='/items' component={Items} />
    </MDBContainer>
  );
}

export default Home;
