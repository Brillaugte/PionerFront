import Head from "next/head";
import BuyPropertyForm from "../components/buy-property-form";
import StateoffStylemainLabelo1 from "../components/stateoff-stylemain-labelo1";
import StateFocusedStatusDefault from "../components/state-focused-status-default";
import StateoffStyleborderLabel from "../components/stateoff-styleborder-label";
import StateonStylemainLabelof from "../components/stateon-stylemain-labelof";
import StateoffStylemainLabelo from "../components/stateoff-stylemain-labelo";
import FrameComponent from "../components/frame-component";
import PnLContainer from "../components/pn-l-container";
import FormContainer from "../components/form-container";
import OpenFormContainer from "../components/open-form-container";
import InflaGuardForm from "../components/infla-guard-form";
import ContractCard from "../components/contract-card";
import styles from "./binance-futures-c-omponents.module.css";

const BinanceFuturesCOmponents = () => {
  return (
    <div className={styles.binancefuturescomponents}>
      <div className={styles.closeWrapper}>
        <i className={styles.close}>Close</i>
      </div>
      <div className={styles.buybutton}>
        <BuyPropertyForm
          propTop="20px"
          propBackgroundColor="#ffd814"
          propDisplay="flex"
          propFlexDirection="row"
          propPadding="var(--padding-3xs) var(--padding-27xl)"
          propBoxSizing="border-box"
          propAlignItems="center"
          propJustifyContent="center"
          propBoxShadow="unset"
          propLeft="20px"
          propPosition="relative"
          propTop1="unset"
          propLeft1="unset"
          propWidth="unset"
          propHeight="unset"
          propColor="#000"
        />
        <BuyPropertyForm
          propTop="90px"
          propBackgroundColor="#ffd814"
          propDisplay="unset"
          propFlexDirection="unset"
          propPadding="unset"
          propBoxSizing="unset"
          propAlignItems="unset"
          propJustifyContent="unset"
          propBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          propLeft="20px"
          propPosition="absolute"
          propTop1="14px"
          propLeft1="calc(50% - 56px)"
          propWidth="111px"
          propHeight="30px"
          propColor="#fff"
        />
        <BuyPropertyForm />
      </div>
      <StateoffStylemainLabelo1
        stateoffStylemainLabeloPosition="absolute"
        stateoffStylemainLabeloTop="23px"
        stateoffStylemainLabeloLeft="753px"
        labelFontWeight="100"
        labelFontStyle="italic"
      />
      <StateFocusedStatusDefault
        vuesaxlineareye="/vuesaxlineareye.svg"
        showVuesaxlineareyeIcon={false}
        showHelperText={false}
        helperTextVisible={false}
        stateFocusedStatusDefaultPosition="absolute"
        stateFocusedStatusDefaultTop="94px"
        stateFocusedStatusDefaultLeft="710px"
        placeholderBorder="1px solid var(--main-colors-gray-05)"
        labelFontWeight="100"
        labelFontStyle="italic"
        placeholderFontWeight="100"
        placeholderFontStyle="italic"
      />
      <StateFocusedStatusDefault
        vuesaxlineareye="/vuesaxlineareye.svg"
        showVuesaxlineareyeIcon
        showHelperText={false}
        helperTextVisible
        stateFocusedStatusDefaultPosition="absolute"
        stateFocusedStatusDefaultTop="167px"
        stateFocusedStatusDefaultLeft="710px"
        placeholderBorder="3px solid var(--main-colors-purple-15)"
        labelFontWeight="100"
        labelFontStyle="italic"
        placeholderFontWeight="100"
        placeholderFontStyle="italic"
      />
      <StateoffStyleborderLabel
        stateoffStyleborderLabelPosition="absolute"
        stateoffStyleborderLabelTop="45px"
        stateoffStyleborderLabelLeft="751px"
      />
      <StateonStylemainLabelof
        stateonStylemainLabelofPosition="absolute"
        stateonStylemainLabelofTop="23px"
        stateonStylemainLabelofLeft="835px"
        onFontWeight="100"
        onFontStyle="italic"
      />
      <StateoffStylemainLabelo
        stateoffStylemainLabeloPosition="absolute"
        stateoffStylemainLabeloTop="52px"
        stateoffStylemainLabeloLeft="833px"
        offFontWeight="100"
        offFontStyle="italic"
      />
      <div className={styles.binancefuturescomponentsChild} />
      <div className={styles.wrapper}>
        <div className={styles.div}>1</div>
      </div>
      <div className={styles.balance151021}>Balance: 15.1021</div>
      <div className={styles.max}>Max</div>
      <div className={styles.usdcWrapper}>
        <div className={styles.usdc}>USDC</div>
      </div>
      <FrameComponent
        positions="Positions"
        frameDivPosition="absolute"
        frameDivTop="448px"
        frameDivLeft="84px"
        frameDivWidth="102px"
        frameDivFlexShrink="unset"
        positionsFontSize="20px"
      />
      <div className={styles.binancefuturescomponentsItem} />
      <img className={styles.image57Icon} alt="" src="/image-57@2x.png" />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.upnlWrapper}>
            <div className={styles.upnl}>UPnL</div>
          </div>
          <div className={styles.usd}>100000000.00 USD</div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.upnlWrapper}>
            <div className={styles.upnl}>Balance</div>
          </div>
          <div className={styles.usd}>100000000.00 USD</div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.positionsWrapper}>
            <div className={styles.positions}>IM</div>
          </div>
          <div className={styles.usd2}>100000000.00 USD</div>
        </div>
        <div className={styles.dfParent}>
          <div className={styles.df}>DF</div>
          <div className={styles.usd2}>100000000.00 USD</div>
        </div>
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.frameParent2}>
          <div className={styles.upnlWrapper}>
            <div className={styles.upnl}>UPnL</div>
          </div>
          <div className={styles.usd}>100000000.00 USD</div>
        </div>
        <div className={styles.frameParent3}>
          <div className={styles.upnlWrapper}>
            <div className={styles.upnl}>Balance</div>
          </div>
          <div className={styles.usd}>100000000.00 USD</div>
        </div>
        <div className={styles.frameParent4}>
          <div className={styles.positionsWrapper}>
            <div className={styles.positions}>IM</div>
          </div>
          <div className={styles.usd2}>100000000.00 USD</div>
        </div>
        <div className={styles.dfGroup}>
          <div className={styles.df}>DF</div>
          <div className={styles.usd2}>100000000.00 USD</div>
        </div>
      </div>
      <div className={styles.binancefuturescomponentsInner}>
        <PnLContainer />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.instanceParent}>
          <FrameComponent
            positions="Symbol"
            frameDivPosition="relative"
            frameDivTop="unset"
            frameDivLeft="unset"
            frameDivWidth="58px"
            frameDivFlexShrink="0"
            positionsFontSize="12px"
          />
          <div className={styles.entrylastPrice}>Entry/Last Price</div>
          <FrameComponent
            positions="Size"
            frameDivPosition="relative"
            frameDivTop="unset"
            frameDivLeft="unset"
            frameDivWidth="107px"
            frameDivFlexShrink="0"
            positionsFontSize="12px"
          />
          <FrameComponent
            positions="PnL"
            frameDivPosition="relative"
            frameDivTop="unset"
            frameDivLeft="unset"
            frameDivWidth="35px"
            frameDivFlexShrink="0"
            positionsFontSize="12px"
          />
        </div>
      </div>
      <img className={styles.lineIcon} alt="" src="/line-5.svg" />
      <img
        className={styles.binancefuturescomponentsChild1}
        alt=""
        src="/line-6.svg"
      />
      <div className={styles.quotes}>Quotes</div>
      <FormContainer />
      <div className={styles.property1defaultParent}>
        <OpenFormContainer
          propTop="20px"
          propBackgroundColor="#fcdb37"
          propDisplay="flex"
          propFlexDirection="row"
          propPadding="var(--padding-3xs) var(--padding-27xl)"
          propBoxSizing="border-box"
          propAlignItems="center"
          propJustifyContent="center"
          propBorder="unset"
          propPosition="relative"
          propTop1="unset"
          propLeft="unset"
          propWidth="unset"
          propHeight="unset"
          propColor="#000"
        />
        <OpenFormContainer
          propTop="90px"
          propBackgroundColor="#fcdb37"
          propDisplay="unset"
          propFlexDirection="unset"
          propPadding="unset"
          propBoxSizing="border-box"
          propAlignItems="unset"
          propJustifyContent="unset"
          propBorder="1px solid var(--linear)"
          propPosition="absolute"
          propTop1="12px"
          propLeft="46px"
          propWidth="111px"
          propHeight="30px"
          propColor="#fff"
        />
        <OpenFormContainer />
      </div>
      <InflaGuardForm />
      <ContractCard />
    </div>
  );
};

export default BinanceFuturesCOmponents;
