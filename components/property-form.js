import { useMemo } from "react";
import styles from "./property-form.module.css";

const PropertyForm = ({
  propTop,
  propDisplay,
  propFlexDirection,
  propPadding,
  propBoxSizing,
  propAlignItems,
  propJustifyContent,
  propPosition,
  propTop1,
  propLeft,
  propWidth,
  propHeight,
  propColor,
  propTextDecoration,
  propColor1,
  propTextDecoration1,
  propColor2,
}) => {
  const property1Variant2Style = useMemo(() => {
    return {
      top: propTop,
      display: propDisplay,
      flexDirection: propFlexDirection,
      padding: propPadding,
      boxSizing: propBoxSizing,
      alignItems: propAlignItems,
      justifyContent: propJustifyContent,
    };
  }, [
    propTop,
    propDisplay,
    propFlexDirection,
    propPadding,
    propBoxSizing,
    propAlignItems,
    propJustifyContent,
  ]);

  const limitMarketContainerStyle = useMemo(() => {
    return {
      position: propPosition,
      top: propTop1,
      left: propLeft,
      width: propWidth,
      height: propHeight,
    };
  }, [propPosition, propTop1, propLeft, propWidth, propHeight]);

  const limitStyle = useMemo(() => {
    return {
      color: propColor,
      textDecoration: propTextDecoration,
    };
  }, [propColor, propTextDecoration]);

  const marketStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const market1Style = useMemo(() => {
    return {
      textDecoration: propTextDecoration1,
      color: propColor2,
    };
  }, [propTextDecoration1, propColor2]);

  return (
    <div className={styles.property1variant2} style={property1Variant2Style}>
      <i
        className={styles.limitMarketContainer}
        style={limitMarketContainerStyle}
      >
        <span className={styles.limit} style={limitStyle}>
          Limit
        </span>
        <span style={marketStyle}>
          {` / `}
          <span className={styles.market} style={market1Style}>
            Market
          </span>
        </span>
      </i>
    </div>
  );
};

export default PropertyForm;
