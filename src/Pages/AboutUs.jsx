import React from "react";
import Canonical from "../components/Canonical";
import { Link, Outlet } from "react-router-dom";

const Aboutus = () => {
  return (
    <>
    <Canonical />
    <Outlet />
    <div className="mt-[80px] italic px-3 flex justify-center items-center">
      <div className="container">
        <h1 className="text-center text-[2rem] text-[#db147d]">
          Website Policy
        </h1>
        <h3 className="text-[1rem] font-bold mt-3 mb-1">
          1. Guidelines for Utilizing a Dating Application:
        </h3>
        <p>
          To utilize our website, it is necessary to first establish an account
          ("Account"). The creation of an account requires that you meet the
          following criteria:
        </p>
        <p>
          You must be at least 18 years of age, and You must have the legal
          right to access the site in accordance with applicable laws. If you
          choose to create an Account using your Facebook login credentials, you
          grant us permission to access, display, and utilize certain
          information from your Facebook profile (such as profile pictures,
          relationship status, location, and other relevant data). For further
          information regarding the data we collect and its usage, please refer
          to our Privacy Policy.
        </p>
        <br />
        <p>
          You have the option to delete your account at any time by navigating
          to the 'Settings' page and selecting the 'Delete account' option while
          logged in. Your Account will be removed from the site immediately;
          however, please note that it may take some time for Your Content to be
          completely deleted. Should you wish to restore your account, we will
          retain your profile information for a period of 30 days following the
          deactivation of your Account. If you delete your Account and attempt
          to register a new one using the same credentials within this
          timeframe, we will reactivate your Account for you.
        </p>
        <br />
        <p>
          We reserve the right to terminate or suspend any Account, or to
          implement any operational, technological, legal, or other measures
          necessary to enforce the Terms (including, but not limited to,
          blocking specific IP addresses), without prior notice or liability, at
          any time.
        </p>
        <h3 className="text-[1rem] font-bold mt-3 mb-1">2. Content Terms:</h3>
        <p>
          We recognize the importance of allowing our users to express
          themselves; however, it is necessary to establish boundaries regarding
          certain types of content, such as:
        </p>
        <br />
        <p>
          content that features inappropriate language or imagery, or that may
          harass, disturb, embarrass, or annoy others;
        </p>
        <br />
        <p>
          material that is obscene, pornographic, violent, or otherwise
          undermines human dignity; content that advocates for illegal
          activities, including but not limited to terrorism, inciting racial
          hatred, or any submission that is a criminal offense;
        </p>
        <br />
        <p>
          information pertaining to commercial activities, including sales,
          competitions, advertising, or links to external websites or premium
          phone numbers;
        </p>
        <br />
        <p>the transmission of unsolicited "junk" mail or "spam";</p>
        <br />
        <p>
          any software or code that contains spyware, adware, viruses, corrupted
          files, worm programs, or other harmful elements designed to disrupt,
          damage, or interfere with any software, hardware, telecommunications,
          or other systems, networks, servers, or equipment, including Trojan
          horses or any material intended to compromise data or personal
          information, whether from dating app or otherwise. You bear
          responsibility for your content and must defend, indemnify, and hold
          us harmless from any claims related to your content, as it is uniquely
          yours.
        </p>
      </div>
    </div>
    </>
  );
};

export default Aboutus;
