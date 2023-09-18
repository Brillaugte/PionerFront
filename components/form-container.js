import PropertyForm from "./property-form";
import styles from "./form-container.module.css";

const FormContainer = () => {
  return (
    <div className={styles.limitmarket}>
      <PropertyForm
        propTop="20px"
        propDisplay="flex"
        propFlexDirection="row"
        propPadding="var(--padding-3xs) var(--padding-27xl)"
        propBoxSizing="border-box"
        propAlignItems="center"
        propJustifyContent="center"
        propPosition="relative"
        propTop1="unset"
        propLeft="unset"
        propWidth="unset"
        propHeight="unset"
        propColor="unset"
        propTextDecoration="underline"
        propTextDecoration1="unset"
        propColor2="#d9d9d9"
      />
      <PropertyForm
        propTop="160px"
        propDisplay="flex"
        propFlexDirection="row"
        propPadding="var(--padding-3xs) var(--padding-27xl)"
        propBoxSizing="border-box"
        propAlignItems="center"
        propJustifyContent="center"
        propPosition="relative"
        propTop1="unset"
        propLeft="unset"
        propWidth="unset"
        propHeight="unset"
        propColor="unset"
        propTextDecoration="underline"
        propTextDecoration1="unset"
        propColor2="#d9d9d9"
      />
      <PropertyForm
        propTop="230px"
        propDisplay="flex"
        propFlexDirection="row"
        propPadding="var(--padding-3xs) var(--padding-27xl)"
        propBoxSizing="border-box"
        propAlignItems="center"
        propJustifyContent="center"
        propPosition="relative"
        propTop1="unset"
        propLeft="unset"
        propWidth="unset"
        propHeight="unset"
        propColor="#d9d9d9"
        propTextDecoration="unset"
        propTextDecoration1="underline"
        propColor2="unset"
      />
      <PropertyForm />
    </div>
  );
};

export default FormContainer;
