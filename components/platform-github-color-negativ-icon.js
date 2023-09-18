import { useMemo } from "react";
import styles from "./platform-github-color-negativ-icon.module.css";

const PlatformGithubColorNegativIcon = ({
  platformGithubColorNegati,
  platformGithubColorNegatiWidth,
  platformGithubColorNegatiHeight,
  platformGithubColorNegatiPosition,
  platformGithubColorNegatiTop,
  platformGithubColorNegatiRight,
  platformGithubColorNegatiBottom,
  platformGithubColorNegatiLeft,
  platformGithubColorNegatiMaxWidth,
  platformGithubColorNegatiMaxHeight,
}) => {
  const platformGithubColorNegativIconStyle = useMemo(() => {
    return {
      width: platformGithubColorNegatiWidth,
      height: platformGithubColorNegatiHeight,
      position: platformGithubColorNegatiPosition,
      top: platformGithubColorNegatiTop,
      right: platformGithubColorNegatiRight,
      bottom: platformGithubColorNegatiBottom,
      left: platformGithubColorNegatiLeft,
      maxWidth: platformGithubColorNegatiMaxWidth,
      maxHeight: platformGithubColorNegatiMaxHeight,
    };
  }, [
    platformGithubColorNegatiWidth,
    platformGithubColorNegatiHeight,
    platformGithubColorNegatiPosition,
    platformGithubColorNegatiTop,
    platformGithubColorNegatiRight,
    platformGithubColorNegatiBottom,
    platformGithubColorNegatiLeft,
    platformGithubColorNegatiMaxWidth,
    platformGithubColorNegatiMaxHeight,
  ]);

  return (
    <img
      className={styles.platformgithubColornegativIcon}
      alt=""
      src={platformGithubColorNegati}
      style={platformGithubColorNegativIconStyle}
    />
  );
};

export default PlatformGithubColorNegativIcon;
