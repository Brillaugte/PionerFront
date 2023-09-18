import { useMemo } from "react";
import styles from "./stateoff-stylemain-labelo.module.css";

const StateoffStylemainLabelo = ({
  stateoffStylemainLabeloPosition,
  stateoffStylemainLabeloTop,
  stateoffStylemainLabeloLeft,
  offFontWeight,
  offFontStyle,
}) => {
  const stateoffStylemainLabelo1Style = useMemo(() => {
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

  const offStyle = useMemo(() => {
    return {
      fontWeight: offFontWeight,
      fontStyle: offFontStyle,
    };
  }, [offFontWeight, offFontStyle]);

  return (
    <div
      className={styles.stateoffStylemainLabelo}
      style={stateoffStylemainLabelo1Style}
    >
      <div className={styles.stateoffStylemainLabeloChild} />
      <div className={styles.off} style={offStyle}>
        Off
      </div>
    </div>
  );
};

export default StateoffStylemainLabelo;
