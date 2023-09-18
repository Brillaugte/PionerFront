import { useState, useMemo, useCallback } from "react";
import AutosuggestionHover1 from "./autosuggestion-hover1";
import PortalPopup from "./portal-popup";
import styles from "./navigation-bar1.module.css";

const NavigationBar1 = ({
  polygon1,
  navigationBar1AlignItems,
  navigationBar1Position,
  navigationBar1Top,
  navigationBar1Left,
  pionerFontWeight,
  pionerFontStyle,
  allCategoriesLeft,
  allFontStyle,
  searchPionerioFontStyle,
  onGroupContainer1Click,
}) => {
  const [isAutosuggestionHoverOpen, setAutosuggestionHoverOpen] =
    useState(false);
  const navigationBar1Style = useMemo(() => {
    return {
      alignItems: navigationBar1AlignItems,
      position: navigationBar1Position,
      top: navigationBar1Top,
      left: navigationBar1Left,
    };
  }, [
    navigationBar1AlignItems,
    navigationBar1Position,
    navigationBar1Top,
    navigationBar1Left,
  ]);

  const pionerStyle = useMemo(() => {
    return {
      fontWeight: pionerFontWeight,
      fontStyle: pionerFontStyle,
    };
  }, [pionerFontWeight, pionerFontStyle]);

  const allCategoriesStyle = useMemo(() => {
    return {
      left: allCategoriesLeft,
    };
  }, [allCategoriesLeft]);

  const allStyle = useMemo(() => {
    return {
      fontStyle: allFontStyle,
    };
  }, [allFontStyle]);

  const searchPionerioStyle = useMemo(() => {
    return {
      fontStyle: searchPionerioFontStyle,
    };
  }, [searchPionerioFontStyle]);

  const openAutosuggestionHover = useCallback(() => {
    setAutosuggestionHoverOpen(true);
  }, []);

  const closeAutosuggestionHover = useCallback(() => {
    setAutosuggestionHoverOpen(false);
  }, []);

  return (
    <>
      <div className={styles.navigationBar1} style={navigationBar1Style}>
        <div className={styles.navigationBar1Child} />
        <div className={styles.groupParent}>
          <div
            className={styles.groupContainer}
            onClick={onGroupContainer1Click}
          >
            <div className={styles.pionerWrapper}>
              <b className={styles.pioner} style={pionerStyle}>
                Pioner
              </b>
            </div>
            <img
              className={styles.ideogram375}
              alt=""
              src="/ideogram-37-5@2x.png"
            />
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.rectangleWrapper}>
              <div className={styles.groupChild} />
            </div>
            <div
              className={styles.rectangleParent}
              onClick={openAutosuggestionHover}
            >
              <div className={styles.frameChild} />
              <div className={styles.frameItem} />
              <div className={styles.allCategories} style={allCategoriesStyle}>
                <div className={styles.all} style={allStyle}>
                  All
                </div>
                <img
                  className={styles.allCategoriesChild}
                  alt=""
                  src={polygon1}
                />
              </div>
              <div
                className={styles.searchPionerio}
                style={searchPionerioStyle}
              >
                Search Pioner.io
              </div>
              <img
                className={styles.searchSymbolIcon}
                alt=""
                src="/search-symbol.svg"
              />
            </div>
          </div>
        </div>
      </div>
      {isAutosuggestionHoverOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAutosuggestionHover}
        >
          <AutosuggestionHover1 onClose={closeAutosuggestionHover} />
        </PortalPopup>
      )}
    </>
  );
};

export default NavigationBar1;
