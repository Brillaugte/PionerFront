import { useMemo } from "react";
import styles from "./state-focused-status-default.module.css";

const StateFocusedStatusDefault = ({
  vuesaxlineareye,
  showVuesaxlineareyeIcon,
  showHelperText,
  helperTextVisible,
  stateFocusedStatusDefaultPosition,
  stateFocusedStatusDefaultTop,
  stateFocusedStatusDefaultLeft,
  placeholderBorder,
  labelFontWeight,
  labelFontStyle,
  placeholderFontWeight,
  placeholderFontStyle,
}) => {
  const stateFocusedStatusDefaultStyle = useMemo(() => {
    return {
      position: stateFocusedStatusDefaultPosition,
      top: stateFocusedStatusDefaultTop,
      left: stateFocusedStatusDefaultLeft,
    };
  }, [
    stateFocusedStatusDefaultPosition,
    stateFocusedStatusDefaultTop,
    stateFocusedStatusDefaultLeft,
  ]);

  const placeholderStyle = useMemo(() => {
    return {
      border: placeholderBorder,
    };
  }, [placeholderBorder]);

  const label1Style = useMemo(() => {
    return {
      fontWeight: labelFontWeight,
      fontStyle: labelFontStyle,
    };
  }, [labelFontWeight, labelFontStyle]);

  const placeholder1Style = useMemo(() => {
    return {
      fontWeight: placeholderFontWeight,
      fontStyle: placeholderFontStyle,
    };
  }, [placeholderFontWeight, placeholderFontStyle]);

  return (
    <div
      className={styles.statefocusedStatusdefault}
      style={stateFocusedStatusDefaultStyle}
    >
      <div className={styles.placeholder} style={placeholderStyle}>
        <div className={styles.label}>
          <div className={styles.label1} style={label1Style}>
            Label
          </div>
        </div>
        <div className={styles.placeholder1}>
          <div className={styles.placeholder2} style={placeholder1Style}>
            Placeholder
          </div>
          {showVuesaxlineareyeIcon && (
            <img
              className={styles.vuesaxlineareyeIcon}
              alt=""
              src={vuesaxlineareye}
            />
          )}
        </div>
      </div>
      {showHelperText && (
        <div className={styles.helperText}>
          {helperTextVisible && (
            <div className={styles.helperText1}>Helper Text</div>
          )}
        </div>
      )}
    </div>
  );
};

export default StateFocusedStatusDefault;
