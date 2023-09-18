import InflaGuardContainer from "./infla-guard-container";
import styles from "./infla-guard-form.module.css";

const InflaGuardForm = () => {
  return (
    <div className={styles.amazonbasedframe}>
      <InflaGuardContainer
        coinTitle="InflaGuard Coin: Your Inflation-Proof Stablecoin"
        imageDescription="/image-404@2x.png"
        propTop="20px"
        propDisplay="flex"
        propFlexDirection="row"
        propAlignItems="flex-start"
        propJustifyContent="flex-start"
        propGap="10px"
        propWidth="unset"
        propHeight="unset"
        propPosition="absolute"
        propLeft="20px"
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
      <InflaGuardContainer
        propTop="396px"
        propDisplay="unset"
        propFlexDirection="unset"
        propAlignItems="unset"
        propJustifyContent="unset"
        propGap="unset"
        propWidth="311px"
        propHeight="356px"
        propPosition="absolute"
        propLeft="20px"
        propPosition1="absolute"
        propZIndex="unset"
        propTop1="0px"
        propLeft1="0px"
        propMargin="unset"
        propZIndex1="unset"
        propPosition2="unset"
        propWidth1="unset"
        propHeight1="unset"
        propObjectFit="unset"
        propMargin1="0"
      />
      <InflaGuardContainer
        coinTitle="InflaGuard : Live On Testnet"
        imageDescription="/image-406@2x.png"
      />
    </div>
  );
};

export default InflaGuardForm;
