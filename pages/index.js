import { useState, useCallback } from "react";
import AutosuggestionHover1 from "../components/autosuggestion-hover1";
import PortalPopup from "../components/portal-popup";
import { useRouter } from "next/router";
import PropertyCardForm from "../components/property-card-form";
import TradingSection from "../components/trading-section";
import AutomatedDeltaNeutralHedgingLi from "../components/automated-delta-neutral-hedging-li";
import BinaryOptionForm from "../components/binary-option-form";
import ExoDeploySection from "../components/exo-deploy-section";
import SectionCardForm from "../components/section-card-form";
import NavigationBar1 from "../components/navigation-bar1";
import Footer from "../components/footer";
import styles from "./index.module.css";

const Home = () => {
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
    <div className={styles.home}>
      <div className={styles.instanceParent}>
        <PropertyCardForm propTop="67px" propLeft="0px" />
        <TradingSection />
        <AutomatedDeltaNeutralHedgingLi />
        <BinaryOptionForm />
        <ExoDeploySection />
        <SectionCardForm />
        <NavigationBar1
          polygon1="/polygon-1.svg"
          navigationBar1AlignItems="flex-start"
          navigationBar1Position="absolute"
          navigationBar1Top="0px"
          navigationBar1Left="0px"
          pionerFontWeight="unset"
          pionerFontStyle="unset"
          allCategoriesLeft="calc(50% - 312px)"
          allFontStyle="italic"
          searchPionerioFontStyle="italic"
          onGroupContainer1Click={onGroupContainer1Click}
        />
      </div>
      <Footer
        dimensionCode="/social-icons1.svg"
        imageDimensionCode="/social-icons2.svg"
        imageCode="/social-icons3.svg"
        imageCode2="/social-icons4.svg"
        rectangleDivTop="unset"
        rectangleDivBottom="0px"
        privacyPolicyFontWeight="700"
        privacyPolicyFontStyle="italic"
        termsOfUseFontWeight="700"
        termsOfUseFontStyle="italic"
        frameDivFontWeight="700"
        frameDivFontStyle="italic"
        contactUsFontWeight="700"
        contactUsFontStyle="italic"
        propFontWeight="700"
        propFontStyle="italic"
        onPrivacyPolicyTextClick={onPrivacyPolicyTextClick}
        onTermsOfUseClick={onTermsOfUseClick}
        onContactUsTextClick={onContactUsTextClick}
      />
    </div>
  );
};

export default Home;
