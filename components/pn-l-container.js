import FrameComponent from "./frame-component";
import styles from "./pn-l-container.module.css";

const PnLContainer = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.instanceParent}>
          <FrameComponent
            positions="Symbol"
            frameDivPosition="relative"
            frameDivTop="unset"
            frameDivLeft="unset"
            frameDivWidth="58px"
            frameDivFlexShrink="0"
            positionsFontSize="12px"
          />
          <div className={styles.entrylastPrice}>Entry/Last Price</div>
          <FrameComponent
            positions="Size"
            frameDivPosition="relative"
            frameDivTop="unset"
            frameDivLeft="unset"
            frameDivWidth="107px"
            frameDivFlexShrink="0"
            positionsFontSize="12px"
          />
          <FrameComponent
            positions="PnL"
            frameDivPosition="relative"
            frameDivTop="unset"
            frameDivLeft="unset"
            frameDivWidth="35px"
            frameDivFlexShrink="0"
            positionsFontSize="12px"
          />
        </div>
      </div>
      <div className={styles.btcusdtParent}>
        <div className={styles.btcusdt}>BTCUSDT</div>
        <div className={styles.div}>
          <p className={styles.p}>2354500.78</p>
          <p className={styles.p}>2354000.56</p>
        </div>
        <div className={styles.usd}>
          <p className={styles.p}>{`1.2 `}</p>
          <p className={styles.p}>400000005.12 USD</p>
        </div>
        <div className={styles.usd4512}>
          <p className={styles.p}>205000000.53 USD</p>
          <p className={styles.p}>+45.12%</p>
        </div>
      </div>
      <div className={styles.btcusdtParent}>
        <div className={styles.btcusdt}>BTCUSDT</div>
        <div className={styles.div}>
          <p className={styles.p}>2354500.78</p>
          <p className={styles.p}>2354000.56</p>
        </div>
        <div className={styles.usd}>
          <p className={styles.p}>{`1.2 `}</p>
          <p className={styles.p}>400000005.12 USD</p>
        </div>
        <div className={styles.usd4512}>
          <p className={styles.p}>205000000.53 USD</p>
          <p className={styles.p}>+45.12%</p>
        </div>
      </div>
      <div className={styles.btcusdtParent}>
        <div className={styles.btcusdt}>BTCUSDT</div>
        <div className={styles.div}>
          <p className={styles.p}>2354500.78</p>
          <p className={styles.p}>2354000.56</p>
        </div>
        <div className={styles.usd}>
          <p className={styles.p}>{`1.2 `}</p>
          <p className={styles.p}>400000005.12 USD</p>
        </div>
        <div className={styles.usd4512}>
          <p className={styles.p}>205000000.53 USD</p>
          <p className={styles.p}>+45.12%</p>
        </div>
      </div>
    </div>
  );
};

export default PnLContainer;
