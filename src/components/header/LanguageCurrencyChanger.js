import PropTypes from "prop-types";
import React from "react";
import { changeLanguage } from "redux-multilanguage";
import EnglishFlag from "../../assets/images/english.png";
import ArabicFlag from "../../assets/images/arabic.png";

const LanguageCurrencyChanger = ({
  currency,
  setCurrency,
  currentLanguageCode,
  dispatch,
}) => {
  const changeLanguageTrigger = (e) => {
    const languageCode = e.target.value;
    dispatch(changeLanguage(languageCode));
  };

  return (
    <div className="language-currency-wrap">
      <div className="same-language-currency use-style">
        <div className="same-language-currency">
          <p>
            <i className="fa fa-phone" />{" "}
            <a href="callto:+20 111 561 5949">+20 111 561 5949</a>
          </p>
        </div>
      </div>
      <div className="same-language-currency">
        <p>
          <i className="fa fa-envelope" />{" "}
          <a href="mailto:contact@cratena.com">contact@cratena.com</a>
        </p>
      </div>
      <div className="same-language-currency language-style header-top-wap-language">
        <span>
          {currentLanguageCode === "en" ? (
            <img src={EnglishFlag} alt="English"></img>
          ) : currentLanguageCode === "ar" ? (
            <img src={ArabicFlag} alt="Arabic"></img>
          ) : (
            ""
          )}{" "}
          <i className="fa fa-angle-down" />
        </span>
        <div className="lang-car-dropdown">
          <ul>
            <li>
              <button value="en" onClick={(e) => changeLanguageTrigger(e)}>
                English
              </button>
            </li>
            <li>
              <button value="ar" onClick={(e) => changeLanguageTrigger(e)}>
                Arabic
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

LanguageCurrencyChanger.propTypes = {
  setCurrency: PropTypes.func,
  currency: PropTypes.object,
  currentLanguageCode: PropTypes.string,
  dispatch: PropTypes.func,
};

export default LanguageCurrencyChanger;
