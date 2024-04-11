import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <h6 className="title">USEFUL LINKS</h6>
            <li className="list-unstyled">Queries</li>
            <li className="list-unstyled">Frequently Asked Questions</li>
            <li className="list-unstyled">References</li>
            <li className="list-unstyled">Tutorials</li>
          </MDBCol>
          <MDBCol md="4">
            <h6 className="title">SOCIAL MEDIA</h6>
            <li className="list-unstyled">Facebook</li>
            <li className="list-unstyled">Twitter</li>
            <li className="list-unstyled">Youtube</li>
            <li className="list-unstyled">LinkedIn</li>
          </MDBCol>
          <MDBCol md="4">
            <h6 className="title">CONTACT</h6>
            <li className="list-unstyled">Help</li>
            <li className="list-unstyled">SupportCommunity</li>
            <li className="list-unstyled">Feedback</li>
          </MDBCol>

          <MDBCol md="4">
            <h6 className="title">DOWNLOAD OUR APP</h6>
            <li className="list-unstyled">ios app</li>
            <li className="list-unstyled">Android app</li>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.arithmeticop.com"> arithmeticop.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
