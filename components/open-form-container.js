import { useMemo } from "react";
import styles from "./open-form-container.module.css";

const OpenFormContainer = ({
  propTop,
  propBackgroundColor,
  propDisplay,
  propFlexDirection,
  propPadding,
  propBoxSizing,
  propAlignItems,
  propJustifyContent,
  propBorder,
  propPosition,
  propTop1,
  propLeft,
  propWidth,
  propHeight,
  propColor,
}) => {
  const property1Variant31Style = useMemo(() => {
    return {
      top: propTop,
      backgroundColor: propBackgroundColor,
      display: propDisplay,
      flexDirection: propFlexDirection,
      padding: propPadding,
      boxSizing: propBoxSizing,
      alignItems: propAlignItems,
      justifyContent: propJustifyContent,
      border: propBorder,
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
    propBorder,
  ]);

  const openStyle = useMemo(() => {
    return {
      position: propPosition,
      top: propTop1,
      left: propLeft,
      width: propWidth,
      height: propHeight,
      color: propColor,
    };
  }, [propPosition, propTop1, propLeft, propWidth, propHeight, propColor]);

  return (
    <div className={styles.property1variant3} style={property1Variant31Style}>
      <i className={styles.open} style={openStyle}>
        Open
      </i>
    </div>
  );
};

export default OpenFormContainer;
