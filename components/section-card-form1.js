import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./section-card-form1.module.css";

const SectionCardForm1 = () => {
  const router = useRouter();

  const onImage49Click = useCallback(() => {
    router.push("/zero-liq");
  }, [router]);

  const onZeroLiqLiquidationFreeTradClick = useCallback(() => {
    router.push("/zero-liq");
  }, [router]);

  return (
    <div className={styles.groupParent}>
      <div className={styles.frameWrapper}>
        <div className={styles.image53Parent}>
          <img className={styles.image53Icon} alt="" src="/image-53@2x.png" />
          <img
            className={styles.image49Icon}
            alt=""
            src="/image-491@2x.png"
            onClick={onImage49Click}
          />
          <img className={styles.image52Icon} alt="" src="/image-52@2x.png" />
          <img className={styles.image53Icon} alt="" src="/image-51@2x.png" />
          <img className={styles.image50Icon} alt="" src="/image-501@2x.png" />
        </div>
      </div>
      <div className={styles.fundifyInvestmentFundsTokParent}>
        <b className={styles.fundifyInvestmentFunds}>
          Fundify: Investment Funds, Tokenized
        </b>
        <b
          className={styles.zeroliqLiquidationFreeTrad}
          onClick={onZeroLiqLiquidationFreeTradClick}
        >
          ZeroLiq: Liquidation-Free Trading
        </b>
        <b className={styles.fundifyInvestmentFunds}>
          Autostrat : Deposit tokens and farm without protocol risks.
        </b>
        <b className={styles.quickstrikeOneClickTrading}>
          QuickStrike: One-Click Trading
        </b>
        <b className={styles.quickstrikeOneClickTrading}>
          MirroTrade : Copy the Pros
        </b>
      </div>
    </div>
  );
};

export default SectionCardForm1;
