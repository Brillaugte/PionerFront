import RectangleComponent from "./rectangle-component";
import InstitutionalPositionBuilderCo from "./institutional-position-builder-co";
import styles from "./exo-deploy-section.module.css";

const ExoDeploySection = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.groupContainer}>
        <div className={styles.groupContainer}>
          <RectangleComponent
            rectangle8="/rectangle-83.svg"
            seeMore="See more"
            rectangleDivPosition="absolute"
            rectangleDivTop="0px"
            rectangleDivLeft="0px"
            rectangleDivWidth="311px"
            rectangleDivHeight="356px"
            rectangleDivRight="unset"
            rectangleDivBottom="unset"
            rectangleIconCursor="unset"
          />
          <b className={styles.exodeployYourOwn}>
            ExoDeploy: Your own Exchange, Your Rules, Your earnings
          </b>
          <img
            className={styles.groupChild}
            alt=""
            src="/rectangle-6872@2x.png"
          />
        </div>
        <img className={styles.image42Icon} alt="" src="/image-422@2x.png" />
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.groupContainer}>
          <RectangleComponent
            rectangle8="/rectangle-83.svg"
            seeMore="See more"
            rectangleDivPosition="absolute"
            rectangleDivTop="0px"
            rectangleDivLeft="0px"
            rectangleDivWidth="311px"
            rectangleDivHeight="356px"
            rectangleDivRight="unset"
            rectangleDivBottom="unset"
            rectangleIconCursor="unset"
          />
          <b className={styles.exodeployYourOwn}>
            AffiliNet: Leverage Your Marketing Skills And Earn
          </b>
        </div>
        <img className={styles.image43Icon} alt="" src="/image-432@2x.png" />
        <img className={styles.image43Icon} alt="" src="/image-432@2x.png" />
      </div>
      <img className={styles.frameChild} alt="" src="/group-8737.svg" />
      <InstitutionalPositionBuilderCo />
      <div className={styles.botmartPionerAutomation}>
        BotMart: Pioner Automation Marketplace
      </div>
    </div>
  );
};

export default ExoDeploySection;
