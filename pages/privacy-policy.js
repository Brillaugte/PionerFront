import { useState, useCallback } from "react";
import AutosuggestionHover1 from "../components/autosuggestion-hover1";
import PortalPopup from "../components/portal-popup";
import { useRouter } from "next/router";
import NavigationBar1 from "../components/navigation-bar1";
import Footer from "../components/footer";
import styles from "./privacy-policy.module.css";

const PrivacyPolicy = () => {
  const [isAutosuggestionHoverOpen, setAutosuggestionHoverOpen] =
    useState(false);
  const router = useRouter();

  const onGroupContainer1Click = useCallback(() => {
    router.push("/");
  }, [router]);

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
    <div className={styles.privacyPolicy}>
      <NavigationBar1
        polygon1="/polygon-11.svg"
        navigationBar1AlignItems="center"
        navigationBar1Position="absolute"
        navigationBar1Top="0px"
        navigationBar1Left="0px"
        pionerFontWeight="unset"
        pionerFontStyle="unset"
        allCategoriesLeft="calc(50% - 312.5px)"
        allFontStyle="unset"
        searchPionerioFontStyle="unset"
        onGroupContainer1Click={onGroupContainer1Click}
      />
      <Footer
        dimensionCode="/social-icons5.svg"
        imageDimensionCode="/social-icons6.svg"
        imageCode="/social-icons7.svg"
        imageCode2="/social-icons8.svg"
        rectangleDivTop="unset"
        rectangleDivBottom="-9px"
        privacyPolicyFontWeight="unset"
        privacyPolicyFontStyle="unset"
        termsOfUseFontWeight="unset"
        termsOfUseFontStyle="unset"
        frameDivFontWeight="unset"
        frameDivFontStyle="unset"
        contactUsFontWeight="unset"
        contactUsFontStyle="unset"
        propFontWeight="unset"
        propFontStyle="unset"
        onPrivacyPolicyTextClick={onPrivacyPolicyTextClick}
        onTermsOfUseClick={onTermsOfUseClick}
        onContactUsTextClick={onContactUsTextClick}
      />
      <div className={styles.effectiveDate17Container}>
        <p className={styles.p}>Effective Date: 17 September 2023</p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          The Pioner Protocol operates in a decentralized and permissionless
          manner. Although we may collect and process information about users of
          Pioner.io or the Interface in accordance with this Privacy Policy, we
          do not have information about all protocol users beyond what is
          already publicly available and recorded on the blockchain.
        </p>
        <p className={styles.p}>
          This Privacy Policy (the "Privacy Policy") explains how the Pioner
          Companies ("we," "our," or "us") collects, uses, and shares
          information in connection with our Services as well as your rights and
          choices regarding such information. These terms apply to Pioner.com
          and the Interface and any other online location that links to this
          Privacy Policy (collectively, the "Services").
        </p>
        <p className={styles.p}>
          By using the Services, you also agree to our collection, use, and
          sharing of your information as described in this Privacy Policy. If
          you do not agree with the Terms of Use, you should not use or access
          the Interface or the Services.
        </p>
        <p className={styles.p}>1. Information Collection</p>
        <p className={styles.p}></p>
        <p className={styles.p}>A. Information You Provide.</p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          We may collect the following information about you when you use the
          Services:
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          Correspondence and Content, Within any messages you send to us (such
          as feedback and questions to information support), we may collect your
          name and contact information, as well as any other content included in
          the message.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          You may choose to voluntarily provide other information to us that we
          have not solicited from you, and, in such instances, you are solely
          responsible for such information.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>B. Information Collected Automatically.</p>
        <p className={styles.p}></p>
        <p className={styles.p}>We collect the following information:</p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          Wallet Address. We may collect the wallet address you use to connect
          to the Interface to block wallets that are associated with certain
          legally prohibited conduct from Interface. Separately, we may collect
          your wallet address as part of "Usage Information" (as described
          below) to improve the Interface and user experience of the Services.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          Device Information. We may collect information about the device you
          use to access the Interface, such as the device type, operating
          system, browser type, and screen height and width. This information
          helps us optimize the Interface for different devices and troubleshoot
          any technical issues.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          Usage Information. We may collect information about how you use the
          Interface and Services, including your wallet address, the time you
          access the Interface, pages you visit, the features and assets you
          interact with, the links you click, and the search queries you make.
          By analyzing this data, we gain a deeper understanding of user
          behavior, which in turn allows us to make continuous improvements to
          the Interface and enhance the overall user experience.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          For further information on how we use tracking technologies for
          analytics and your rights and choices regarding them, please see the
          "Cookies Policy" and "Analytics" sections below.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>2. Use of Information</p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          We may collect and use information for business purposes in accordance
          with the practices described in this Privacy Policy. Our business
          purposes for collecting and using information include:
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          Operating and managing the Services (including through authorized
          service providers). To make the Services available to you and perform
          services requested by you, such as responding to your comments,
          questions, and requests, and providing information support; sending
          you technical notices, updates, security alerts, information regarding
          changes to our policies, and support, administrative messages;
          detecting, preventing, and addressing fraud, breach of Terms, and
          threats, or harm; and compliance with legal and regulatory
          requirements.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          Improving the Services. To continually improve the Services and
          fulfill any other legitimate business purpose, as permitted under
          applicable laws.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          Merger or Acquisition. In connection with, or during negotiations of,
          any proposed or actual merger, purchase, sale, or any other type of
          acquisition, financing, reorganization, or business combination of all
          or any portion of our assets, or transfer of all or a portion of our
          business to another business.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          Security and Compliance with Laws. As we believe necessary or
          appropriate to operate and maintain the security or integrity of the
          Interface, including to prevent or stop an attack on our computer
          systems or networks, investigate possible wrongdoing in connection
          with the Interface, enforce our Terms, and comply with applicable
          laws, lawful requests, and legal process, such as responding to
          subpoenas or requests from government authorities.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          Facilitating Requests. To comply with your requests or directions.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          Consent. Purposes for which we have obtained your consent, as required
          by applicable laws.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          Notwithstanding the above, we may use information that does not
          identify you (including information that has been aggregated or
          de-identified) for any purpose except as prohibited by applicable law.
          For information on your rights and choices with respect to how we use
          information about you, please see the "Analytics" section below.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>3. Sharing and Disclosure of Information</p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          We may share or disclose information that we collect in accordance
          with the practices described in this Privacy Policy and for the
          purposes set out in the "Use of Information" section above.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          The categories of parties with whom we may share information include:
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          Affiliates. We share information with our affiliates and related
          entities, including where they act as our service providers or for
          their own internal purposes.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          Professional Advisors We share information with our professional
          advisors for purposes of audits and compliance with our legal
          obligations.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          Service Providers. We share information with third-party service
          providers for business purposes, including fraud detection and
          prevention, security threat detection, data analytics, information
          technology and storage, and blockchain transaction monitoring. Any
          information shared with such service providers is subject to the terms
          of this Privacy Policy. All service providers that we engage with are
          restricted to only utilizing the information on our behalf and in
          accordance with our instructions.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          Notwithstanding the above, we may share information that does not
          identify you (including information that has been aggregated or
          de-identified) except as prohibited by applicable law.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>4. Third-Party Services</p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          We may also integrate technologies operated or controlled by other
          parties into parts of the Services. For example, the Services may
          include links that hyperlink to websites, platforms, and other
          services not operated or controlled by us.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          Please note that when you interact with other parties, including when
          you leave the Interface, those parties may independently collect
          information about you and solicit information from you. The
          information collected and stored by those parties remains subject to
          their own policies and practices, including what information they
          share with us, your rights and choices on their services and devices,
          and whether they store information in the U.S. or elsewhere. We
          encourage you to familiarize yourself with and consult their privacy
          policies and terms of use.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          For example, by using a third-party wallet to engage in transactions
          on public blockchains, your interactions with any third-party wallet
          provider are governed by the applicable terms of service and privacy
          policy of that wallet provider.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>5. Cookies Policy</p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          We understand that your privacy is important to you and are committed
          to being transparent about the technologies we use. In the spirit of
          transparency, this Cookies Policy provides detailed information about
          how and when we use cookies on our Services.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>A. Do we use cookies?</p>
        <p className={styles.p}>
          We do not use cookies. If we were, we would use cookies and other
          technologies to understand how you use our Interface so we can improve
          its design and functionality (to ensure everyone who uses the
          Interface has the best possible experience)
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>What is a cookie?</p>
        <p className={styles.p}>
          A cookie is a small text file that is placed on your hard drive by a
          web page server. Cookies contain information that can later be read by
          a web server in the domain that issued the cookie to you. Some of the
          cookies will only be used if you use certain features or select
          certain preferences, and some cookies will always be used. You can
          find out more about each cookie by viewing our current cookie list
          below. We update this list periodically, so there may be additional
          cookies that are not yet listed.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>B. Why would we use cookies?</p>
        <p className={styles.p}>
          We use cookies and other similar identifiers only to compile aggregate
          data about Interface traffic and site interaction to offer better user
          experiences and tools in the future.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>C. What types of cookies do we use?</p>
        <p className={styles.p}>
          Strictly Necessary Cookies: These cookies are essential for the
          Interface to function properly and enable basic features such as page
          navigation and access to secure areas of the site. They do not collect
          personal information.
        </p>
        <p className={styles.p}>
          Analytical/Performance Cookies: These cookies allow us to analyze how
          visitors use the Interface, which helps us improve its functionality
          and performance.
        </p>
        <p className={styles.p}>
          Functional Cookies: These cookies enable enhanced functionality and
          personalization of the website. They may remember your preferences,
          such as the wallet you previously used to connect.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>D. How to disable cookies?</p>
        <p className={styles.p}>
          Users can generally activate or later deactivate the use of cookies
          through a functionality built into your web browser. If you want to
          learn more about cookies, or how to control, disable, or delete them,
          please visit http://www.aboutcookies.org for detailed guidance.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>6. Analytics</p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          We utilize the Mixpanel analytics platform to track user interactions,
          preferences, and behavior during browsing sessions for users who have
          opted in for analytics. This data helps us improve our services and
          analyze trends in our user base. We respect your right to control the
          data collected during your browsing session. If you prefer not to
          participate in our tracking techniques and data collection, you can
          opt-out through the "Manage Analytics" section on this page or adjust
          your browser settings or use browser extensions designed for this
          purpose.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>7. Data Security</p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          We implement and maintain reasonable administrative, physical, and
          technical security safeguards to help protect information about you
          from loss, theft, misuse, unauthorized access, disclosure, alteration,
          and destruction. Nevertheless, transmission via the Internet is not
          completely secure and we cannot guarantee the security of information
          about you.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>8. Data Retention</p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          Please note that we retain information we collect as long as it is
          necessary to fulfill the purpose for which it was collected, as
          outlined in this Privacy Policy, and to the extent permitted by
          applicable legal requirements. Where you request the deletion of your
          information, we may continue to retain and use your information as
          permitted or required under applicable laws, for legal, tax, or
          regulatory reasons, or legitimate and lawful business purposes.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>9. International Transfers</p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          Please be aware that information collected through the Services may be
          transferred to, processed, stored, and used in the European Economic
          Area, the United Kingdom, and other jurisdictions. Data protection
          laws in the EU and other jurisdictions may be different from those of
          your country of residence. Your use of the Services or provision of
          any information therefore constitutes your consent to the transfer to
          and from, processing, usage, sharing, and storage of information about
          you in the EU and other jurisdictions as set out in this Privacy
          Policy.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>10. Children</p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          The Services are intended for general audiences and are not directed
          at children. To use the Services, you must legally be able to enter
          into the Agreement. We do not knowingly collect personal information
          (as defined by the U.S. Children's Privacy Protection Act, or "COPPA")
          from children. If you are a parent or guardian and believe we have
          collected personal information in violation of COPPA, please contact
          us at contact@pioner.io and we will remove the personal information in
          accordance with COPPA.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          11. Additional Disclosures for California Residents
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          These additional disclosures apply only to California residents. The
          California Consumer Privacy Act of 2018 ("CCPA") provides additional
          rights to know, delete, and opt-out, and requires businesses
          collecting or disclosing personal information to provide notices and
          the means to exercise consumer rights.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>A. Notice of Collection</p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          For further details on the information we may collect, including the
          sources from which we receive information, review the "Information
          Collection" section above. We may collect and use these categories of
          personal information for the business purposes described in the "Use
          of Information" section above, including to manage the Services.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          We do not "sell" personal information as defined under the CCPA.
          Please review the "Sharing and Disclosure of Information" section
          above for further details about the categories of parties with whom we
          share information.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>B. Right to Know and Delete</p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          You have the right to know certain details about our data practices
          within the past twelve (12) months. In particular, you may request the
          following from us:
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          The categories of personal information we have collected about you;
        </p>
        <p className={styles.p}>
          The categories of sources from which the personal information was
          collected;
        </p>
        <p className={styles.p}>
          The categories of personal information about you we disclosed for a
          business purpose;
        </p>
        <p className={styles.p}>
          The categories of third parties to whom the personal information was
          disclosed for a business purpose;
        </p>
        <p className={styles.p}>
          The business or commercial purpose for collecting or selling the
          personal information; and
        </p>
        <p className={styles.p}>
          The specific pieces of personal information we have collected about
          you.
        </p>
        <p className={styles.p}>
          In addition, you have the right to delete the personal information we
          have collected from you.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          To exercise any of these rights, please submit a request by emailing
          us at contact@pioner.io. In the request, please specify which right
          you are seeking to exercise and the scope of the request. We will
          confirm receipt of your request within ten (10) days. We may require
          specific information from you to help us verify your identity and
          process your request. If we are unable to verify your identity, we may
          deny your requests to know or delete.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>C. Authorized Agent</p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          You may designate an authorized agent to submit requests on your
          behalf; however, we may require written proof of the agent's
          permission to act on your behalf and verify your identity directly.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>D. Right of Non-Discrimination</p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          You have a right of non-discrimination for the exercise of any of your
          privacy rights guaranteed by law, such as the right to access, delete,
          or opt-out of the sale of your personal information.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>E. Shine the Light</p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          Customers who are residents of California may request (i) a list of
          the categories of personal information disclosed by us to third
          parties during the immediately preceding calendar year for those third
          parties' own direct marketing purposes; and (ii) a list of the
          categories of third parties to whom we disclosed such information. To
          exercise a request, please write to us at the email or postal address
          set out in the "Contact Us" section above and specify that you are
          making a "California Shine the Light Request." We may require
          additional information from you to allow us to verify your identity
          and are only required to respond to requests once per calendar year.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          12. Additional Disclosures for Data Subjects in the European Economic
          Area and the United Kingdom
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>A. Roles</p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          The General Data Protection Regulations in the European Economic Area
          and General Data Protection Regulations in the United Kingdom ("GDPR")
          distinguish between organizations that process personal data for their
          own purposes (known as "controllers") and organizations that process
          personal data on behalf of other organizations (known as
          "processors"). We act as a controller with respect to personal data
          collected as you interact with the Services.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>B. Lawful Basis for Processing</p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          The GDPR requires a "lawful basis" for processing personal data. Our
          lawful bases include where:(i) Consent: You have given consent to the
          processing of your personal data for one or more specific purposes,
          either to us or to our service providers or partners.(ii) Contractual
          Necessity: Processing your personal data is necessary for the
          performance of a contract between you and us.(iii) Legal Obligation:
          Processing your personal data is necessary for compliance with a legal
          obligation.(iv) Legitimate Interests: Processing your personal data is
          necessary for the purposes of the legitimate interests pursued by us
          or a third party, provided that your interests and fundamental rights
          and freedoms do not override those interests.Where applicable, we will
          transfer your personal data to third parties subject to appropriate or
          suitable safeguards, such as standard contractual clauses.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>Purpose Legal Basis</p>
        <p className={styles.p}>
          Operating and managing the Services Necessary for the performance of
          our agreement
        </p>
        <p className={styles.p}>
          To communicate with you Necessary for the performance of our agreement
        </p>
        <p className={styles.p}>
          Improving the Services Legitimate interests, Consent
        </p>
        <p className={styles.p}>
          To provide our Services Legitimate interests, Consent
        </p>
        <p className={styles.p}>
          Merger or Acquisition Legitimate interests, legal obligation (when
          communicating with EEA, U.K., and Swiss regulatory bodies)
        </p>
        <p className={styles.p}>
          Security and compliance with laws Legal obligation, legitimate
          interests, necessary for the performance of our agreement
        </p>
        <p className={styles.p}>
          Other purposes for which we have obtained your consent Consent
        </p>
        <p className={styles.p}>C. Your Data Subject Rights</p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          If you are a user in the European Economic Area or the United Kingdom,
          you maintain certain rights under the GDPR. These rights include the
          right to:(i)request access and obtain a copy of your personal
          data;(ii) request rectification or erasure of your personal data;(iii)
          object to or restrict the processing of your personal data;(iv)request
          portability of your personal data.Additionally, if we have collected
          and processed your personal data with your consent, you have the right
          to withdraw your consent at any time.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          Notwithstanding the foregoing, we cannot edit or delete information
          that is stored on a particular blockchain. This information may
          include transaction data (i.e., purchases, sales, and transfers)
          related to your blockchain wallet address and any items held by your
          wallet address.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          To exercise any of these rights, please contact us via our email or
          postal address listed in the "Contact Us" section above and specify
          which right you are seeking to exercise. We will respond to your
          request within thirty (30) days. We may require specific information
          from you to help us confirm your identity and process your request.
          Please note that we retain information as necessary to fulfill the
          purpose for which it was collected and may continue to retain and use
          information even after a data subject request in accordance with our
          legitimate interests, including as necessary to comply with our legal
          obligations, resolve disputes, prevent fraud, and enforce our
          agreements.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          If you have any issues with our compliance, please contact us as set
          out in the "Contact Us" section above. You also reserve the right to
          lodge a complaint with the data protection regulator in your
          jurisdiction.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>13. Changes to this Privacy Policy</p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          We reserve the right to revise and reissue this Privacy Policy at any
          time. Any changes will be effective immediately upon our posting of
          the revised Privacy Policy. For the avoidance of doubt, your continued
          use of the Services indicates your consent to the revised Privacy
          Policy then posted.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>14. Contact Us</p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          If you have any questions or comments about this Privacy Policy, our
          data practices, or our compliance with applicable law, please con
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
