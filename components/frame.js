import { useCallback } from "react";
import { useRouter } from "next/router";
import Footer from "./footer";
import styles from "./frame.module.css";

const Frame = () => {
  const router = useRouter();

  const onPrivacyPolicyTextClick = useCallback(() => {
    router.push("/privacy-policy");
  }, [router]);

  const onTermsOfUseClick = useCallback(() => {
    router.push("/terms-of-use");
  }, [router]);

  const onContactUsTextClick = useCallback(() => {
    window.open("contact@pioner.com");
  }, []);

  return (
    <div className={styles.bottombarParent}>
      <Footer
        dimensionCode="/social-icons1.svg"
        imageDimensionCode="/social-icons2.svg"
        imageCode="/social-icons3.svg"
        imageCode2="/social-icons4.svg"
        onPrivacyPolicyTextClick={onPrivacyPolicyTextClick}
        onTermsOfUseClick={onTermsOfUseClick}
        onContactUsTextClick={onContactUsTextClick}
      />
    </div>
  );
};

export default Frame;
