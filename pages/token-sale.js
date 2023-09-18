import { useState, useCallback } from "react";
import AutosuggestionHover1 from "../components/autosuggestion-hover1";
import PortalPopup from "../components/portal-popup";
import { useRouter } from "next/router";
import NavigationBar1 from "../components/navigation-bar1";
import Footer from "../components/footer";
import PublicSaleCard from "../components/public-sale-card";
import styles from "./token-sale.module.css";

const TokenSale = () => {
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
    <div className={styles.tokensale}>
      <i className={styles.microderivLlc}>© 2023 Microderiv LLC</i>
      <i className={styles.publicSale}>Public Sale</i>
      <NavigationBar1
        polygon1="/polygon-1.svg"
        navigationBar1AlignItems="flex-start"
        navigationBar1Position="absolute"
        navigationBar1Top="0px"
        navigationBar1Left="0px"
        pionerFontWeight="700"
        pionerFontStyle="italic"
        allCategoriesLeft="calc(50% - 312px)"
        allFontStyle="italic"
        searchPionerioFontStyle="italic"
        onGroupContainer1Click={onGroupContainer1Click}
      />
      <i
        className={styles.fullyDilutedMarket}
      >{`Fully Diluted Market Cap : `}</i>
      <i className={styles.saleHardcap}>Sale HardCap :</i>
      <i className={styles.m}>5M $</i>
      <i className={styles.k}>100k$</i>
      <i className={styles.remaining}>Remaining :</i>
      <i className={styles.k1}>100k$</i>
      <i className={styles.nextMarketCap}>Next Market Cap :</i>
      <i className={styles.m1}>10M$</i>
      <Footer
        dimensionCode="/social-icons5.svg"
        imageDimensionCode="/social-icons6.svg"
        imageCode="/social-icons7.svg"
        imageCode2="/social-icons8.svg"
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
      <PublicSaleCard />
      <div className={styles.cardSection}>
        <div className={styles.card4}>
          <img className={styles.card4Child} alt="" src="/rectangle-82.svg" />
          <b className={styles.connectWallet}>Connect Wallet</b>
        </div>
      </div>
      <img className={styles.image55Icon} alt="" src="/image-55@2x.png" />
    </div>
  );
};

export default TokenSale;
