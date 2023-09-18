import PropertyCardForm from "./property-card-form";
import CardContainer from "./card-container";
import styles from "./contract-card.module.css";

const ContractCard = () => {
  return (
    <div className={styles.property1defaultParent}>
      <PropertyCardForm />
      <CardContainer
        announcementText="FreeTrade live on Polygon Mumbai."
        promotionText="Trade on Binance Futures while your funds are onchain."
        featureDescription="0 KYC, 0 custodial risk"
        componentText="/vector1.svg"
        propTop="658px"
        propLeft="48.47%"
        propRight="56.18%"
        propLeft1="35.42%"
      />
      <CardContainer
        announcementText="Public Sale live on Arbitrum"
        promotionText="Get your hand on $PNR at early bird price."
        featureDescription="0 Vesting"
        componentText="/vector2.svg"
      />
    </div>
  );
};

export default ContractCard;
