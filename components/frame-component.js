import { useMemo } from "react";
import styles from "./frame-component.module.css";

const FrameComponent = ({
  positions,
  frameDivPosition,
  frameDivTop,
  frameDivLeft,
  frameDivWidth,
  frameDivFlexShrink,
  positionsFontSize,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      position: frameDivPosition,
      top: frameDivTop,
      left: frameDivLeft,
      width: frameDivWidth,
      flexShrink: frameDivFlexShrink,
    };
  }, [
    frameDivPosition,
    frameDivTop,
    frameDivLeft,
    frameDivWidth,
    frameDivFlexShrink,
  ]);

  const positionsStyle = useMemo(() => {
    return {
      fontSize: positionsFontSize,
    };
  }, [positionsFontSize]);

  return (
    <div className={styles.positionsParent} style={frameDivStyle}>
      <div className={styles.positions} style={positionsStyle}>
        {positions}
      </div>
    </div>
  );
};

export default FrameComponent;
