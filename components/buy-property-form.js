import { useMemo } from "react";
import styles from "./buy-property-form.module.css";

const BuyPropertyForm = ({
  propTop,
  propBackgroundColor,
  propDisplay,
  propFlexDirection,
  propPadding,
  propBoxSizing,
  propAlignItems,
  propJustifyContent,
  propBoxShadow,
  propLeft,
  propPosition,
  propTop1,
  propLeft1,
  propWidth,
  propHeight,
  propColor,
}) => {
  const property1Variant3Style = useMemo(() => {
    return {
      top: propTop,
      backgroundColor: propBackgroundColor,
      display: propDisplay,
      flexDirection: propFlexDirection,
      padding: propPadding,
      boxSizing: propBoxSizing,
      alignItems: propAlignItems,
      justifyContent: propJustifyContent,
      boxShadow: propBoxShadow,
      left: propLeft,
    };
  }, [
    propTop,
    propBackgroundColor,
    propDisplay,
    propFlexDirection,
    propPadding,
    propBoxSizing,
    propAlignItems,
    propJustifyContent,
    propBoxShadow,
    propLeft,
  ]);

  const buyStyle = useMemo(() => {
    return {
      position: propPosition,
      top: propTop1,
      left: propLeft1,
      width: propWidth,
      height: propHeight,
      color: propColor,
    };
  }, [propPosition, propTop1, propLeft1, propWidth, propHeight, propColor]);

  return (
    <div className={styles.property1variant3} style={property1Variant3Style}>
      <i className={styles.buy} style={buyStyle}>
        Buy
      </i>
    </div>
  );
};

export default BuyPropertyForm;
