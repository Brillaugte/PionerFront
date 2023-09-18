import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./autosuggestion-hover1.module.css";

const AutosuggestionHover1 = () => {
  const router = useRouter();

  const onTextFieldContainer1Click = useCallback(() => {
    router.push("/token-sale");
  }, [router]);

  const onTextFieldContainer2Click = useCallback(() => {
    // Please sync "BinanceFutures" to the project
  }, []);

  const onTextFieldContainer3Click = useCallback(() => {
    window.open("https://docs.pioner.io/");
  }, []);

  return (
    <div className={styles.autosuggestionHover}>
      <div className={styles.textFieldParent}>
        <div className={styles.textField}>
          <div className={styles.label}>Label</div>
        </div>
        <div className={styles.textField1} onClick={onTextFieldContainer1Click}>
          <div className={styles.label}>Token Sale</div>
        </div>
        <div className={styles.textField1} onClick={onTextFieldContainer2Click}>
          <div className={styles.label}>Testnet</div>
        </div>
        <div className={styles.textField1} onClick={onTextFieldContainer3Click}>
          <div className={styles.label}>Documentation</div>
        </div>
        <div className={styles.textField4}>
          <div className={styles.label}>Launch your own Exchange</div>
        </div>
      </div>
    </div>
  );
};

export default AutosuggestionHover1;
