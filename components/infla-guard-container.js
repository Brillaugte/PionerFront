import { useMemo } from "react";
import RectangleComponent from "./rectangle-component";
import styles from "./infla-guard-container.module.css";

const InflaGuardContainer = ({
  coinTitle,
  imageDescription,
  propTop,
  propDisplay,
  propFlexDirection,
  propAlignItems,
  propJustifyContent,
  propGap,
  propWidth,
  propHeight,
  propPosition,
  propLeft,
  propPosition1,
  propZIndex,
  propTop1,
  propLeft1,
  propMargin,
  propZIndex1,
  propPosition2,
  propWidth1,
  propHeight1,
  propObjectFit,
  propMargin1,
  propPosition3,
  propFontSize,
  propFontFamily,
  propColor,
  propTextAlign,
  propDisplay1,
}) => {
  const property1Variant32Style = useMemo(() => {
    return {
      top: propTop,
      display: propDisplay,
      flexDirection: propFlexDirection,
      alignItems: propAlignItems,
      justifyContent: propJustifyContent,
      gap: propGap,
      width: propWidth,
      height: propHeight,
      position: propPosition,
      left: propLeft,
    };
  }, [
    propTop,
    propDisplay,
    propFlexDirection,
    propAlignItems,
    propJustifyContent,
    propGap,
    propWidth,
    propHeight,
    propPosition,
    propLeft,
  ]);

  const groupDivStyle = useMemo(() => {
    return {
      position: propPosition1,
      zIndex: propZIndex,
      top: propTop1,
      left: propLeft1,
    };
  }, [propPosition1, propZIndex, propTop1, propLeft1]);

  const frameDiv1Style = useMemo(() => {
    return {
      margin: propMargin,
      zIndex: propZIndex1,
    };
  }, [propMargin, propZIndex1]);

  const image40IconStyle = useMemo(() => {
    return {
      position: propPosition2,
      width: propWidth1,
      height: propHeight1,
      objectFit: propObjectFit,
      margin: propMargin1,
    };
  }, [propPosition2, propWidth1, propHeight1, propObjectFit, propMargin1]);

  const seeMoreStyle = useMemo(() => {
    return {
      position: propPosition3,
      fontSize: propFontSize,
      fontFamily: propFontFamily,
      color: propColor,
      textAlign: propTextAlign,
      display: propDisplay1,
    };
  }, [
    propPosition3,
    propFontSize,
    propFontFamily,
    propColor,
    propTextAlign,
    propDisplay1,
  ]);

  return (
    <div className={styles.property1variant3} style={property1Variant32Style}>
      <div className={styles.property1variant3Inner} style={groupDivStyle}>
        <div className={styles.instanceWrapper}>
          <RectangleComponent
            rectangle8="/rectangle-83.svg"
            rectangleDivPosition="absolute"
            rectangleDivTop="0px"
            rectangleDivLeft="0px"
            rectangleDivWidth="311px"
            rectangleDivHeight="356px"
            rectangleDivRight="unset"
            rectangleDivBottom="unset"
            rectangleIconCursor="unset"
          />
        </div>
      </div>
      <div className={styles.property1variant3Child} style={frameDiv1Style}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.inflaguardLiveOnTestnetParent}>
              <b className={styles.inflaguardLive}>{coinTitle}</b>
              <img
                className={styles.image40Icon}
                alt=""
                src={imageDescription}
                style={image40IconStyle}
              />
            </div>
          </div>
          <div className={styles.seeMore} style={seeMoreStyle}>
            See more
          </div>
        </div>
      </div>
    </div>
  );
};

export default InflaGuardContainer;
