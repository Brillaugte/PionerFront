import { useMemo } from "react";
import styles from "./stateon-stylemain-labelof.module.css";

const StateonStylemainLabelof = ({
  stateonStylemainLabelofPosition,
  stateonStylemainLabelofTop,
  stateonStylemainLabelofLeft,
  onFontWeight,
  onFontStyle,
}) => {
  const stateonStylemainLabelofStyle = useMemo(() => {
    return {
      position: stateonStylemainLabelofPosition,
      top: stateonStylemainLabelofTop,
      left: stateonStylemainLabelofLeft,
    };
  }, [
    stateonStylemainLabelofPosition,
    stateonStylemainLabelofTop,
    stateonStylemainLabelofLeft,
  ]);

  const onStyle = useMemo(() => {
    return {
      fontWeight: onFontWeight,
      fontStyle: onFontStyle,
    };
  }, [onFontWeight, onFontStyle]);

  return (
    <div
      className={styles.stateonStylemainLabelof}
      style={stateonStylemainLabelofStyle}
    >
      <div className={styles.on} style={onStyle}>
        On
      </div>
      <div className={styles.stateonStylemainLabelofChild} />
    </div>
  );
};

export default StateonStylemainLabelof;
