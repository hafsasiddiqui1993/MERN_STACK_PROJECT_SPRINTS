import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
const Footer = () => {
  return (
    <div>
      <>
        <Container fluid>
          <Row>
            <footer>
              <p>
                <a className="emailus" href="mailto:hafsa@yahoo.com">Email Us</a>
                <h4 className="h4rg">Copyrights: Hafsa  &copy;</h4>

              </p>
            </footer>
          </Row>
        </Container>
      </>
    </div>
  );
};

export default Footer;
