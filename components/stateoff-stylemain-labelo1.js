import { useMemo } from "react";
import styles from "./stateoff-stylemain-labelo1.module.css";

const StateoffStylemainLabelo1 = ({
  stateoffStylemainLabeloPosition,
  stateoffStylemainLabeloTop,
  stateoffStylemainLabeloLeft,
  labelFontWeight,
  labelFontStyle,
}) => {
  const stateoffStylemainLabeloStyle = useMemo(() => {
    return {
      position: stateoffStylemainLabeloPosition,
      top: stateoffStylemainLabeloTop,
      left: stateoffStylemainLabeloLeft,
    };
  }, [
    stateoffStylemainLabeloPosition,
    stateoffStylemainLabeloTop,
    stateoffStylemainLabeloLeft,
  ]);

  const labelStyle = useMemo(() => {
    return {
      fontWeight: labelFontWeight,
      fontStyle: labelFontStyle,
    };
  }, [labelFontWeight, labelFontStyle]);

  return (
    <div
      className={styles.stateoffStylemainLabelo}
      style={stateoffStylemainLabeloStyle}
    >
      <div className={styles.switch}>
        <div className={styles.switchChild} />
      </div>
      <div className={styles.label} style={labelStyle}>
        Label
      </div>
    </div>
  );
};

export default StateoffStylemainLabelo1;
