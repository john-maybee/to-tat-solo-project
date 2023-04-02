import React from 'react';
import './AboutPage.css';


// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

///////////////////////////////////AboutPage function///////////////////////////////////////
function AboutPage() {
  return (
    <div className="container">
      <h2>About "To Tat":</h2>
      <div>
        <p>This application will help users keep track of, and expand upon, their own tattoo design ideas.</p>
        <p>There will also be a place within "To Tat" for users to record the names of tattoo artists they enjoy for future tattoo ideas.</p>
        <p><strong>Technologies Utilized |</strong> React, Redux, Express, Node, and Figma.</p>
      </div>
      <div>
        <h2>About The Developer:</h2>
        <p><strong>Name |</strong> John Maybee</p>
        <p><strong>E-mail |</strong> John.D.Maybee@gmail.com</p>
      </div>
      <div className="qr_code">
        <img  height="150px" src="https://qrcgcustomers.s3.eu-west-1.amazonaws.com/account24595142/qrcodes/62130516.png?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYMOAQO23FRHUYI4Q%2F20230323%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20230323T021111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=6f79047e9c4712d9c3e7ebbd892b6fdbfca5b86e3c5b422661263ac019bb266a" alt="QR Code to the developer's LinkedIn and GitHub" />
      </div>
      
    </div>
  ); // end of the container that holds the about page content. Including the qr code for the developer's profile
} // end of the AboutPage function

export default AboutPage;

