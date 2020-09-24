import React from "react";
import styles from './footerPage.module.css';
import { MDBContainer, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter>
      <div className={styles.footerPage}>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Parc Immobilier sur Mesure
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;