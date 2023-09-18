import { useCallback } from "react";
import { useRouter } from "next/router";
import RectangleComponent from "./rectangle-component";
import InflaGuardContainer from "./infla-guard-container";
import styles from "./automated-delta-neutral-hedging-li.module.css";

const AutomatedDeltaNeutralHedgingLi = () => {
  const router = useRouter();

  const onGroupContainer1Click = useCallback(() => {
    router.push("/hedger");
  }, [router]);

  return (
    <div className={styles.groupParent}>
      <div className={styles.groupWrapper} onClick={onGroupContainer1Click}>
        <div className={styles.instanceParent}>
          <RectangleComponent
            rectangle8="/rectangle-83.svg"
            seeMore="See more"
            rectangleDivPosition="absolute"
            rectangleDivTop="0px"
            rectangleDivLeft="calc(50% - 155.5px)"
            rectangleDivWidth="311px"
            rectangleDivHeight="356px"
            rectangleDivRight="unset"
            rectangleDivBottom="unset"
            rectangleIconCursor="unset"
          />
          <b className={styles.deltazeroAutomatedDeltaNeu}>
            DeltaZero: Automated Delta-Neutral Hedging Liquidity Mining
          </b>
          <img
            className={styles.groupChild}
            alt=""
            src="/rectangle-6871@2x.png"
          />
        </div>
      </div>
      <InflaGuardContainer
        coinTitle="InflaGuard Coin: Your Inflation-Proof Stablecoin"
        imageDescription="/image-402@2x.png"
        propTop="unset"
        propDisplay="flex"
        propFlexDirection="row"
        propAlignItems="flex-start"
        propJustifyContent="flex-start"
        propGap="10px"
        propWidth="unset"
        propHeight="unset"
        propPosition="relative"
        propLeft="unset"
        propPosition1="relative"
        propZIndex="0"
        propTop1="unset"
        propLeft1="unset"
        propMargin="0 !important"
        propZIndex1="1"
        propPosition2="relative"
        propWidth1="269px"
        propHeight1="216px"
        propObjectFit="cover"
        propMargin1="unset"
        propPosition3="relative"
        propFontSize="9px"
        propFontFamily="Inter"
        propColor="#085b8a"
        propTextAlign="left"
        propDisplay1="inline-block"
      />
      <div className={styles.instanceGroup}>
        <RectangleComponent
          rectangle8="/rectangle-83.svg"
          seeMore="See more"
          rectangleDivPosition="absolute"
          rectangleDivTop="0px"
          rectangleDivLeft="0px"
          rectangleDivWidth="311px"
          rectangleDivHeight="356px"
          rectangleDivRight="unset"
          rectangleDivBottom="unset"
          rectangleIconCursor="unset"
        />
        <b className={styles.stratofundFundManager}>
          StratoFund: Fund Manager Launchpad
        </b>
        <img className={styles.image29Icon} alt="" src="/image-29@2x.png" />
      </div>
      <div className={styles.groupContainer}>
        <div className={styles.card10Parent}>
          <div className={styles.card10Parent}>
            <div className={styles.card10Child} />
            <b
              className={styles.upgradeYourHome}
            >{`Upgrade your home | Amazon Brands & more`}</b>
            <div className={styles.liquidlensRealTimeLiquidiWrapper}>
              <div className={styles.liquidlensRealTime}>
                LiquidLens : Real-time Liquidity Analytics
              </div>
            </div>
            <div className={styles.centrastreamBridgingCexLiWrapper}>
              <div className={styles.liquidlensRealTime}>
                CentraStream : Bridging CEX Liquidity to DeFi
              </div>
            </div>
            <div className={styles.trustchainOnchainKycRepWrapper}>
              <div
                className={styles.liquidlensRealTime}
              >{`TrustChain : Onchain KYC & Reputation Manager`}</div>
            </div>
            <div className={styles.optimarginTheFirstOnchainWrapper}>
              <div
                className={styles.liquidlensRealTime}
              >{`OptiMargin : The First Onchain Portfolio Netting `}</div>
            </div>
            <div className={styles.learnNow}>Learn now</div>
          </div>
          <div className={styles.image42} />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.groupFrame}>
            <div className={styles.image40Parent}>
              <img
                className={styles.image40Icon}
                alt=""
                src="/image-403@2x.png"
              />
              <img
                className={styles.image41Icon}
                alt=""
                src="/image-411@2x.png"
              />
              <img
                className={styles.image42Icon}
                alt=""
                src="/image-421@2x.png"
              />
              <img
                className={styles.image43Icon}
                alt=""
                src="/image-431@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomatedDeltaNeutralHedgingLi;
