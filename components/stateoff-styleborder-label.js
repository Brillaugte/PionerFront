import { useMemo } from "react";
import styles from "./stateoff-styleborder-label.module.css";

const StateoffStyleborderLabel = ({
  stateoffStyleborderLabelPosition,
  stateoffStyleborderLabelTop,
  stateoffStyleborderLabelLeft,
}) => {
  const stateoffStyleborderLabelStyle = useMemo(() => {
    return {
      position: stateoffStyleborderLabelPosition,
      top: stateoffStyleborderLabelTop,
      left: stateoffStyleborderLabelLeft,
    };
  }, [
    stateoffStyleborderLabelPosition,
    stateoffStyleborderLabelTop,
    stateoffStyleborderLabelLeft,
  ]);

  return (
    <div
      className={styles.stateoffStyleborderLabel}
      style={stateoffStyleborderLabelStyle}
    >
      <div className={styles.stateoffStyleborderLabelChild} />
    </div>
  );
};

export default StateoffStyleborderLabel;
