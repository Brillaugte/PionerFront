import { useMemo } from "react";
import styles from "./rectangle-component.module.css";

const RectangleComponent = ({
  rectangle8,
  seeMore,
  rectangleDivPosition,
  rectangleDivTop,
  rectangleDivLeft,
  rectangleDivWidth,
  rectangleDivHeight,
  rectangleDivRight,
  rectangleDivBottom,
  rectangleIconCursor,
  onRectangleClick,
}) => {
  const rectangleDivStyle = useMemo(() => {
    return {
      position: rectangleDivPosition,
      top: rectangleDivTop,
      left: rectangleDivLeft,
      width: rectangleDivWidth,
      height: rectangleDivHeight,
      right: rectangleDivRight,
      bottom: rectangleDivBottom,
    };
  }, [
    rectangleDivPosition,
    rectangleDivTop,
    rectangleDivLeft,
    rectangleDivWidth,
    rectangleDivHeight,
    rectangleDivRight,
    rectangleDivBottom,
  ]);

  const rectangleIconStyle = useMemo(() => {
    return {
      cursor: rectangleIconCursor,
    };
  }, [rectangleIconCursor]);

  return (
    <div className={styles.vectorParent} style={rectangleDivStyle}>
      <img
        className={styles.componentChild}
        alt=""
        src={rectangle8}
        onClick={onRectangleClick}
        style={rectangleIconStyle}
      />
      <div className={styles.seeMore}>{seeMore}</div>
    </div>
  );
};

export default RectangleComponent;
