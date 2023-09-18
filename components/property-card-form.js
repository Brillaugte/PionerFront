import { useMemo } from "react";
import PlatformGithubColorNegativIcon from "./platform-github-color-negativ-icon";
import styles from "./property-card-form.module.css";

const PropertyCardForm = ({ propTop, propLeft }) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={styles.property1default} style={property1DefaultStyle}>
      <div className={styles.property1defaultChild} />
      <b className={styles.v01ContractsAvailableContainer}>
        <p className={styles.v01ContractsAvailable}>
          v0.1 contracts available on Mumbai Testnet.
        </p>
        <p className={styles.v01ContractsAvailable}>&nbsp;</p>
      </b>
      <PlatformGithubColorNegativIcon
        platformGithubColorNegati="/social-icons.svg"
        platformGithubColorNegatiWidth="11.25%"
        platformGithubColorNegatiHeight="23.95%"
        platformGithubColorNegatiPosition="absolute"
        platformGithubColorNegatiTop="3.24%"
        platformGithubColorNegatiRight="74.86%"
        platformGithubColorNegatiBottom="72.82%"
        platformGithubColorNegatiLeft="13.89%"
        platformGithubColorNegatiMaxWidth="100%"
        platformGithubColorNegatiMaxHeight="100%"
      />
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
    </div>
  );
};

export default PropertyCardForm;
