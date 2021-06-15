import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
const MyFooter = () => {
    return (
        <MDBFooter style={{backgroundColor:"whitesmoke",height:'30vh',padding:'10%'}} color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">Thanks For Visiting</h5>
              <p>
               Be Updated and Keep Learning.
              </p>
            </MDBCol>
            <MDBCol md="6">
              
              <ul>
                <li className="list-unstyled">
                  <a style={{color:'#333'}} href="#aboutme">About</a>
                </li>
                <li className="list-unstyled">
                  <a style={{color:'#333'}} href="#academic">Academic</a>
                </li>
                <li className="list-unstyled">
                  <a style={{color:'#333'}} href="#experience">Experience</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: <i> Rajan Kumar Sah </i>
          </MDBContainer>
        </div>
      </MDBFooter>
    )
}

export default MyFooter
