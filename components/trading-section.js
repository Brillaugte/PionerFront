import TradingUpgradeContainer from "./trading-upgrade-container";
import styles from "./trading-section.module.css";

const TradingSection = () => {
  return (
    <div className={styles.frameParent}>
      <TradingUpgradeContainer />
      <div className={styles.cardSectionParent}>
        <div className={styles.cardSection}>
          <div className={styles.card4}>
            <img className={styles.card4Child} alt="" src="/rectangle-82.svg" />
            <b className={styles.connectWallet}>Connect Wallet</b>
          </div>
        </div>
        <div className={styles.swapsAndOptionsFromTopExcWrapper}>
          <b className={styles.swapsAndOptionsContainer}>
            <p className={styles.swapsAndOptions}>Swaps and Options</p>
            <p className={styles.swapsAndOptions}>From Top Exchanges</p>
          </b>
        </div>
      </div>
      <div className={styles.cardSectionParent}>
        <div className={styles.cardSection}>
          <div className={styles.card4}>
            <img className={styles.card4Child} alt="" src="/rectangle-82.svg" />
            <b className={styles.connectWallet}>Connect Wallet</b>
          </div>
        </div>
        <div className={styles.swapsAndOptionsFromTopExcWrapper}>
          <b className={styles.swapsAndOptionsContainer}>
            <p className={styles.swapsAndOptions}>Swaps and Options</p>
            <p className={styles.swapsAndOptions}>From Top Exchanges</p>
          </b>
        </div>
      </div>
    </div>
  );
};

export default TradingSection;
