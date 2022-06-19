import React, { useEffect } from 'react';
import styles from '../styles/Privacy/index.module.css';
import $ from "jquery";

function Index() {
 //auto scroll to the top when page rendered
 useEffect(() => {
  $(window).scrollTop({ top: 0, behavior: "smooth" })
 }, [])

 return (
   <div className={"container py-5 " + styles.policy}>
    <h1>Princelab Privacy Policy</h1><br /><br />
    <div className={"py-5 " + styles.content}>
     <p id={styles["para"]}>This privacy notice has been drafted in accordance with the
      provisions of the General Data Protection Regulation –
      Regulation (EU) 2016/679 (the “GDPR”) and applies in all
      instances when Prince Lab acts as a controller of personal
      data relating users of Our website. For the purposes of
      this privacy notice, the terms “Us”, “We” and “Our”
      refer to Prince Lab. The terms “you” and “your” refer
      to the data subject, being the person in relation to
      whom We have all personally identifiable information.
     </p>
     <h3>Applicability of Privacy Notice</h3>
     <p id={styles["para"]}>This privacy notice has been drafted in accordance with the
      provisions of the General Data Protection Regulation –
      Regulation (EU) 2016/679 (the “GDPR”) and applies in all
      instances when Prince Lab acts as a controller of personal
      data relating users of Our website. For the purposes of
      this privacy notice, the terms “Us”, “We” and “Our”
      refer to Prince Lab. The terms “you” and “your” refer
      to the data subject, being the person in relation to
      whom We have all personally identifiable information.
     </p>
     <h3>Alterations</h3>
     <p id={styles["para"]}>We can make changes to this privacy notice from time to time.
      The changes we make on this page will be identified first.
      We will send a notice to you, in circumstances where a
      change will materially change the way in which We collect
      or use your personal information or data via emails or
      texts and you shall have a right to object to any such
      update and/or amendment or withdraw your consent.</p>
     <h3>Personal Data</h3>
     <p id={styles["para"]}>The terms “personal data” or “personal information” mean
      any information about an individual for which that person
      can be identified. It does not include data where the identity has been removed (anonymous data).
      We may collect and process personal data that you voluntarily
      give Us when you use Our website. For example, you may use this
      Website to contact Us with questions and comments. When you
      fill out the contact Us form on Our website, you provide Us
      with personal information such as your name and email address
      or phone number.In addition to the information you provide when
      you use Our website, We may use technology to collect aggregated
      data such as statistical data. Aggregated data may be derived
      from your personal data but is not considered personal data
      in law as this data does not directly or indirectly reveal
      your identity. For example, We may aggregate your usage of
      Our website to calculate the percentage of users accessing
      a specific website feature. However, if We combine or connect
      aggregated data with your personal data so that it can
      directly or indirectly identify you, We treat the combined
      data as personal data which will be used in accordance with
      this notice.</p>
     <h3>How we use your data</h3>
     <p id={styles["para"]}>When you fill the contact Us form on this website, We use the personal
      information submitted in the form only to respond to your message or
      act on your request. This personal information will not be kept longer
      than necessary and will be deleted once the feedback requirement is
      met. The provision of your personal data is not a statutory or contractual
      requirement. You are not obliged to provide Us any personal data and it is
      your choice whether to provide Us. Only minimal personal data is collected
      when you fill the contact Us form on this website, namely your name and email
      address. Without provision of such personal data, We will not be in a position
      to respond to your message or act on your request. You may withdraw your
      consent to the processing of your personal data at any time. Such withdrawal
      does not affect the legality of any processing based on your consent prior
      withdrawal.</p>
     <h3>Third party links</h3>
     <p>This website may include links to third-party websites, plug-ins and
      applications. It is important to note that clicking on those links
      or enabling those connections may allow third parties to collect or
      share data about you. We do not control these third-party websites
      and are not responsible for their privacy policies.
     </p>
     <h3>Use of Cookies</h3>
     <p id={styles["para"]}>Prince lab uses cookies to give you the best online experience. By
      using our website you agree to our use of cookies in accordance with
      our cookie policy.
     </p>
     <h3>Information Sharing</h3>
     <p id={styles["para"]}>As a general rule, any information gathered through the use of Our
      website is used solely by Us and, save as otherwise permitted herein
      and/or required by law, will not be transferred to third parties.
      We may, however, have to share your personal data with the parties
      set out below:
      <ol>
       <li>Selected individuals within Our company;</li>
       <li>Our intra-group companies and affiliates; and</li>
       <li>Our agents and third parties that provide services to Us.</li>
      </ol>
      We require all third parties to respect the security of your personal
      data and to treat it in accordance with the law. We do not allow Our
      third-party service providers to use your personal data for their own
      purposes and only permit them to process your personal data for
      specified purposes and in accordance with Our instructions.
     </p>
     <h3>Location Tracking</h3>
     <p id={styles["para"]}>In February of 2015, the Federal Trade Commission (FTC) expanded their
      guidelines for mobile app developers who create apps that collect
      user data, specifically user location data. This expansion builds
      upon the original guidance published by the FTC in February of 2013
      in their report "Mobile Privacy Disclosures: Building Trust through
      Transparency". A recently settled lawsuit initiated by the FTC shows
      that these guidelines should not be disregarded by app developers
      without the risk of being charged with deceptive practices.
      However, the main reasons why WE track users are to gain insights
      about how they use our site, to provide a personalized online
      experience, and to monetize the user by showing them targeted
      adverts.
     </p>
     <h3>Your Rights</h3>
     <p id={styles["para"]}>
      For as long as We retain your personal data, you have certain rights
      in relation to your personal data including:
      <ol>
       <li>Right of access – you have the right to access the personal
        data We hold about you and to receive a copy of such personal
        data.
       </li>
       <li>Right to complain – you have the right to lodge a complaint
        regarding the processing of your personal data with the
        supervisory authority for data protection matters.
       </li>
       <li>Right to Erasure – In certain circumstances you may request
        that We delete the personal data that We hold about you.
       </li>
       <li>Right to Object – you have a right to object and request that
        We cease the processing of your personal data where We rely
        on Our, or a third party’s legitimate interest for processing
        your personal data.
       </li>
       <li>Right to Rectification – you have the right to update or
        correct any inaccurate personal data which We hold about
        you.
       </li>
       <li>Right to Restriction – you have the right to request that
        We stop using your personal data in certain circumstances,
        including if you believe that We are unlawfully processing
        your personal data or the personal data that We hold about you is inaccurate.
       </li>
       <li>Right to withdraw your consent – where Our processing is based on your consent, you have the
        right to withdraw your consent. Withdrawal of your consent shall not affect the lawfulness
        of the processing based on your consent prior to the withdrawal of your consent.
       </li>
       <li>Right to be informed of the source – where the personal data We hold about you was not
        provided to Us directly by you, you may also have the right to be informed of the source
        from which your personal data originates.
       </li>
      </ol>
      Please note that in terms of the applicable laws, your rights in relation to your personal data are
      not absolute.

      You may exercise the rights indicated in this section by contacting Us directly.

      Given that the legal basis for Our processing of your personal information is consent, you have the
      right to withdraw that consent at any time by sending an e-mail to labprince18@gmail.com. Withdrawal
      will not affect the lawfulness of processing before the withdrawal.

      If you consider that Our processing of your personal information infringes data protection laws, you
      have a legal right to lodge a complaint with a supervisory authority responsible for data
      protection.
      If you have any queries,you can drop us an email at : <a href="mailto:contactus@princelab.org">contactus@princelab.org</a>
      <br /><br /><center><h2>Thank you!</h2></center>

     </p>
    </div>
   </div>
 )
}

export default Index;