import { useState, useCallback } from "react";
import AutosuggestionHover1 from "../components/autosuggestion-hover1";
import PortalPopup from "../components/portal-popup";
import { useRouter } from "next/router";
import NavigationBar1 from "../components/navigation-bar1";
import Footer from "../components/footer";
import styles from "./hedger.module.css";

const Hedger = () => {
  const [isAutosuggestionHoverOpen, setAutosuggestionHoverOpen] =
    useState(false);
  const router = useRouter();

  const onGroupContainer1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onPrivacyPolicyTextClick = useCallback(() => {
    router.push("/privacy-policy");
  }, [router]);

  const onTermsOfUseClick = useCallback(() => {
    router.push("/terms-of-use");
  }, [router]);

  const onContactUsTextClick = useCallback(() => {
    window.open("contact@pioner.com");
  }, []);

  return (
    <div className={styles.hedger}>
      <b className={styles.microderivLlc}>© 2023 Microderiv LLC</b>
      <img className={styles.image40Icon} alt="" src="/image-407@2x.png" />
      <NavigationBar1
        polygon1="/polygon-11.svg"
        navigationBar1AlignItems="flex-start"
        navigationBar1Position="absolute"
        navigationBar1Top="0px"
        navigationBar1Left="0px"
        pionerFontWeight="unset"
        pionerFontStyle="unset"
        allCategoriesLeft="calc(50% - 312.5px)"
        allFontStyle="unset"
        searchPionerioFontStyle="unset"
        onGroupContainer1Click={onGroupContainer1Click}
      />
      <div className={styles.hedgerChild} />
      <div className={styles.hedgerItem} />
      <Footer
        dimensionCode="/social-icons9.svg"
        imageDimensionCode="/social-icons10.svg"
        imageCode="/social-icons11.svg"
        imageCode2="/social-icons12.svg"
        rectangleDivTop="unset"
        rectangleDivBottom="0px"
        privacyPolicyFontWeight="unset"
        privacyPolicyFontStyle="unset"
        termsOfUseFontWeight="unset"
        termsOfUseFontStyle="unset"
        frameDivFontWeight="unset"
        frameDivFontStyle="unset"
        contactUsFontWeight="unset"
        contactUsFontStyle="unset"
        propFontWeight="unset"
        propFontStyle="unset"
        onPrivacyPolicyTextClick={onPrivacyPolicyTextClick}
        onTermsOfUseClick={onTermsOfUseClick}
        onContactUsTextClick={onContactUsTextClick}
      />
      <div className={styles.hedgerInner} />
      <div className={styles.div}>1</div>
      <div className={styles.balance151021}>Balance: 15.1021</div>
      <div className={styles.last}>Last</div>
      <div className={styles.price}>Price</div>
    </div>
  );
};

export default Hedger;
