import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./binary-option-form.module.css";

const BinaryOptionForm = () => {
  const router = useRouter();

  const onImage49Click = useCallback(() => {
    router.push("/binary");
  }, [router]);

  const onBinaryOptionTextClick = useCallback(() => {
    router.push("/binary");
  }, [router]);

  return (
    <div className={styles.groupParent}>
      <div className={styles.kWrapper}>
        <div className={styles.k}>k]]]]</div>
      </div>
      <div className={styles.card10}>
        <div className={styles.card10Child} />
      </div>
      <div className={styles.image16Parent}>
        <img className={styles.image16Icon} alt="" src="/image-16@2x.png" />
        <img className={styles.image46Icon} alt="" src="/image-46@2x.png" />
        <img className={styles.image16Icon} alt="" src="/image-47@2x.png" />
        <img className={styles.image16Icon} alt="" src="/image-50@2x.png" />
        <img
          className={styles.image49Icon}
          alt=""
          src="/image-49@2x.png"
          onClick={onImage49Click}
        />
      </div>
      <b className={styles.ratexDynamicInterest}>
        RateX: Dynamic Interest Rate Instruments
      </b>
      <b className={styles.securenetBlockchainDerivati}>
        SecureNet: Blockchain Derivative Driven Insurances
      </b>
      <b className={styles.creditsphereSafeguardingCre}>
        CreditSphere: Safeguarding Credit Risks
      </b>
      <b className={styles.fundtrakDecentralizedEtf}>
        FundTrak: Decentralized ETF Platform
      </b>
      <b className={styles.binaryOption} onClick={onBinaryOptionTextClick}>
        Binary Option
      </b>
    </div>
  );
};

export default BinaryOptionForm;
