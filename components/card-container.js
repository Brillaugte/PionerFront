import { useMemo } from "react";
import styles from "./card-container.module.css";

const CardContainer = ({
  announcementText,
  promotionText,
  featureDescription,
  componentText,
  propTop,
  propLeft,
  propRight,
  propLeft1,
}) => {
  const property1Variant33Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const publicSaleLiveContainerStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const vectorIconStyle = useMemo(() => {
    return {
      right: propRight,
      left: propLeft1,
    };
  }, [propRight, propLeft1]);

  return (
    <div className={styles.property1variant3} style={property1Variant33Style}>
      <div className={styles.property1variant3Child} />
      <b
        className={styles.publicSaleLiveContainer}
        style={publicSaleLiveContainerStyle}
      >
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>{announcementText}</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>{promotionText}</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>{featureDescription}</p>
      </b>
      <img
        className={styles.vectorIcon}
        alt=""
        src={componentText}
        style={vectorIconStyle}
      />
    </div>
  );
};

export default CardContainer;
