import { useCallback } from "react";
import { useRouter } from "next/router";
import RectangleComponent from "./rectangle-component";
import styles from "./trading-upgrade-container.module.css";

const TradingUpgradeContainer = () => {
  const router = useRouter();

  const onGroupContainer4Click = useCallback(() => {
    window.open("https://docs.pioner.io/");
  }, []);

  const onGroupContainer5Click = useCallback(() => {
    router.push("/token-sale");
  }, [router]);

  const onGroupContainer7Click = useCallback(() => {
    // Please sync "BinanceFutures" to the project
  }, []);

  return (
    <div className={styles.groupParent}>
      <div className={styles.card10Parent} onClick={onGroupContainer4Click}>
        <div className={styles.instanceGroup}>
          <div className={styles.card10Child} />
          <b
            className={styles.upgradeYourTrading}
          >{`Upgrade your trading | Pioner technologies & more`}</b>
          <div className={styles.image12Parent}>
            <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
            <div className={styles.omnimarginMultiAssetCross}>
              OmniMargin: Multi-Asset Cross-Margining Solution
            </div>
          </div>
          <div className={styles.image13Parent}>
            <img className={styles.image13Icon} alt="" src="/image-13@2x.png" />
            <div className={styles.flexicollatUniversalToken}>
              FlexiCollat: Universal Token Backing
            </div>
          </div>
          <div className={styles.image14Parent}>
            <img className={styles.image14Icon} alt="" src="/image-14@2x.png" />
            <div className={styles.liquinowInstantOnDemand}>
              LiquiNow: Instant On-demand Liquidity Engine
            </div>
          </div>
          <div className={styles.image15Parent}>
            <img className={styles.image15Icon} alt="" src="/image-15@2x.png" />
            <div className={styles.accpAutomated}>
              ACCP : Automated Central Counterparty Protocol
            </div>
          </div>
          <div className={styles.learnNow}>Learn now</div>
        </div>
        <img className={styles.image40Icon} alt="" src="/image-40@2x.png" />
        <img className={styles.image42Icon} alt="" src="/image-42@2x.png" />
        <img className={styles.image43Icon} alt="" src="/image-43@2x.png" />
        <img className={styles.image41Icon} alt="" src="/image-41@2x.png" />
      </div>
      <div className={styles.instanceParent} onClick={onGroupContainer5Click}>
        <RectangleComponent
          rectangle8="/rectangle-8.svg"
          seeMore="See more"
          rectangleDivPosition="absolute"
          rectangleDivTop="0%"
          rectangleDivLeft="0%"
          rectangleDivWidth="100%"
          rectangleDivHeight="100%"
          rectangleDivRight="0%"
          rectangleDivBottom="0%"
          rectangleIconCursor="unset"
        />
        <b className={styles.pionerPnrUtility}>
          Pioner $PNR Utility Token Public Sale
        </b>
        <img className={styles.groupChild} alt="" src="/rectangle-687@2x.png" />
      </div>
      <div className={styles.groupContainer} onClick={onGroupContainer7Click}>
        <div className={styles.instanceGroup}>
          <RectangleComponent
            rectangle8="/rectangle-81.svg"
            seeMore="See more"
            rectangleDivPosition="absolute"
            rectangleDivTop="0%"
            rectangleDivLeft="0%"
            rectangleDivWidth="100%"
            rectangleDivHeight="100%"
            rectangleDivRight="0%"
            rectangleDivBottom="0%"
            rectangleIconCursor="unset"
          />
          <b className={styles.pionerPnrUtility}>
            FreeTrade: The no-KYC Derivative Exchange
          </b>
        </div>
        <img className={styles.image40Icon1} alt="" src="/image-401@2x.png" />
      </div>
    </div>
  );
};

export default TradingUpgradeContainer;
