import { useCallback } from "react";
import BuyPropertyForm from "./buy-property-form";
import styles from "./public-sale-card.module.css";

const PublicSaleCard = () => {
  const onGetUSDCTextClick = useCallback(() => {
    window.open("https://app.1inch.io/#/42161/simple/swap/ETH");
  }, []);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.eth}>ETH</div>
      <img className={styles.frameItem} alt="" src="/vector-4.svg" />
      <img className={styles.frameInner} alt="" src="/vector-5.svg" />
      <div className={styles.frameChild} />
      <div className={styles.frameChild} />
      <div className={styles.frameChild2} />
      <div className={styles.buy}>Buy</div>
      <div className={styles.frameChild3} />
      <div className={styles.frameChild4} />
      <img className={styles.vectorIcon} alt="" src="/vector-7.svg" />
      <div className={styles.wrapper}>
        <div className={styles.div}>1</div>
      </div>
      <div className={styles.container}>
        <div className={styles.div}>2</div>
      </div>
      <div className={styles.balance151021}>Balance: 15.1021</div>
      <div className={styles.balance2102}>Balance: 21.02</div>
      <div className={styles.max}>Max</div>
      <div className={styles.wrapper}>
        <div className={styles.div}>1</div>
      </div>
      <div className={styles.balance151021}>Balance: 15.1021</div>
      <div className={styles.max}>Max</div>
      <div className={styles.pnrWrapper}>
        <div className={styles.pnr}>PNR</div>
      </div>
      <div className={styles.usdcWrapper}>
        <div className={styles.usdc}>USDC</div>
      </div>
      <div className={styles.ellipseParent}>
        <div className={styles.ellipseDiv} />
        <img
          className={styles.ideogram375}
          alt=""
          src="/ideogram-37-51@2x.png"
        />
      </div>
      <div className={styles.getUsdc} onClick={onGetUSDCTextClick}>
        Get USDC
      </div>
      <BuyPropertyForm
        propTop="275px"
        propBackgroundColor="#ffd814"
        propDisplay="flex"
        propFlexDirection="row"
        propPadding="var(--padding-3xs) var(--padding-27xl)"
        propBoxSizing="border-box"
        propAlignItems="center"
        propJustifyContent="center"
        propBoxShadow="unset"
        propLeft="9px"
        propPosition="relative"
        propTop1="unset"
        propLeft1="unset"
        propWidth="unset"
        propHeight="unset"
        propColor="#000"
      />
    </div>
  );
};

export default PublicSaleCard;
