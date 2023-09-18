import { useMemo } from "react";
import styles from "./footer.module.css";

const Footer = ({
  dimensionCode,
  imageDimensionCode,
  imageCode,
  imageCode2,
  rectangleDivTop,
  rectangleDivBottom,
  privacyPolicyFontWeight,
  privacyPolicyFontStyle,
  termsOfUseFontWeight,
  termsOfUseFontStyle,
  frameDivFontWeight,
  frameDivFontStyle,
  contactUsFontWeight,
  contactUsFontStyle,
  propFontWeight,
  propFontStyle,
  onPrivacyPolicyTextClick,
  onTermsOfUseClick,
  onContactUsTextClick,
}) => {
  const bottomBarStyle = useMemo(() => {
    return {
      top: rectangleDivTop,
      bottom: rectangleDivBottom,
    };
  }, [rectangleDivTop, rectangleDivBottom]);

  const microderivLLCStyle = useMemo(() => {
    return {
      fontWeight: privacyPolicyFontWeight,
      fontStyle: privacyPolicyFontStyle,
    };
  }, [privacyPolicyFontWeight, privacyPolicyFontStyle]);

  const privacyPolicyStyle = useMemo(() => {
    return {
      fontWeight: termsOfUseFontWeight,
      fontStyle: termsOfUseFontStyle,
    };
  }, [termsOfUseFontWeight, termsOfUseFontStyle]);

  const termsOfUseStyle = useMemo(() => {
    return {
      fontWeight: frameDivFontWeight,
      fontStyle: frameDivFontStyle,
    };
  }, [frameDivFontWeight, frameDivFontStyle]);

  const pioner1Style = useMemo(() => {
    return {
      fontWeight: contactUsFontWeight,
      fontStyle: contactUsFontStyle,
    };
  }, [contactUsFontWeight, contactUsFontStyle]);

  const contactUsStyle = useMemo(() => {
    return {
      fontWeight: propFontWeight,
      fontStyle: propFontStyle,
    };
  }, [propFontWeight, propFontStyle]);

  return (
    <div className={styles.bottombar} style={bottomBarStyle}>
      <div className={styles.bottombarChild} />
      <b className={styles.microderivLlc} style={microderivLLCStyle}>
        © 2023 Microderiv LLC
      </b>
      <b
        className={styles.privacyPolicy}
        onClick={onPrivacyPolicyTextClick}
        style={privacyPolicyStyle}
      >
        Privacy Policy
      </b>
      <b
        className={styles.termsOfUse}
        onClick={onTermsOfUseClick}
        style={termsOfUseStyle}
      >
        Terms of Use
      </b>
      <div className={styles.bottombarInner}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.socialIconsParent}>
              <img className={styles.socialIcons} alt="" src={dimensionCode} />
              <img
                className={styles.socialIcons1}
                alt=""
                src={imageDimensionCode}
              />
              <img className={styles.socialIcons1} alt="" src={imageCode} />
              <img className={styles.socialIcons1} alt="" src={imageCode2} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.ideogram374Parent}>
          <img
            className={styles.ideogram374}
            alt=""
            src="/ideogram-37-4@2x.png"
          />
          <b className={styles.pioner} style={pioner1Style}>
            Pioner
          </b>
        </div>
        <b
          className={styles.contactUs}
          onClick={onContactUsTextClick}
          style={contactUsStyle}
        >
          Contact us
        </b>
      </div>
    </div>
  );
};

export default Footer;
