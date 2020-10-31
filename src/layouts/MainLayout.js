import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const MainLayout = ({
  children,
  headerContainerClass,
  headerTop,
  headerBorderStyle,
  headerPaddingClass,
}) => {
  return (
    <Fragment>
      <Header
        layout={headerContainerClass}
        top={headerTop}
        borderStyle={headerBorderStyle}
        headerPaddingClass={headerPaddingClass}
      />
      {children}
      <Footer
        backgroundColorClass="footer-white"
        spaceLeftClass="ml-70"
        spaceRightClass="mr-70"
        footerTopBackgroundColorClass="bg-gray-2"
        footerTopSpaceTopClass="pt-80"
        footerTopSpaceBottomClass="pb-60"
        copyrightColorClass="copyright-gray"
        footerLogo="/assets/images/cratena-logo.png"
      />
    </Fragment>
  );
};

MainLayout.propTypes = {
  children: PropTypes.any,
  headerBorderStyle: PropTypes.string,
  headerContainerClass: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  headerTop: PropTypes.string,
};

export default MainLayout;
