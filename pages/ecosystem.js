import Image from "next/image";
import UserFame from "../assets/svgs/userfame.svg";
import UserFame2 from "../assets/svgs/userfame2.svg";
import UserFame3 from "../assets/svgs/userfame3.svg";

const Ecosystem = () => {
  return (
    <main id="ecosystem">
      <section className="mission">
        <div className="container mx-auto md:my-32 my-10">
          <h2 className="text-gradient-2 md:text-4xl text-xl mb-6">
            Privesecure Ecosystem
          </h2>
          <p className="md:max-w-md">
            Privesecure&apos;s mission is to provide cryptocurrency users with a
            long-term, robust, and ever-evolving open-source cloud storage
            infrastructure. The Privesecure ecosystem is made up of
            interconnected components that provide users with a complete
            experience. These are some of them:
          </p>
        </div>
      </section>

      <section className="my-16 content-block block-1">
        <div className="container mx-auto">
          <div className="img-container">
            <Image src={UserFame} alt="" />
          </div>
          <div className="text-container">
            <h2 className="text-gradient-2 my-10 md:my-0 md:mb-6 md:text-3xl text-xl">
              User Control - You have complete control over your files.
            </h2>
            <p>
              By default, files uploaded to Privesecure are private. You may
              only share or make them public if you wish to share or make them
              public.
            </p>
            <ul>
              <li>
                Granting Access: Share a collaboration folder with other
                Privesecure users - Any Privesecure user can share a folder with
                other Privesecure users.
              </li>
              <li>
                Users can upload and download files, leave comments, and start
                discussions depending on the rights you provide them. At any
                moment, the folder owner can disable access to one or all the
                users.
              </li>
              <li>
                Distribute a public link: Link to the file download or embed the
                link directly in your website, blog, or another third-party
                program. Privesecure generates a unique URL and ID from a
                randomly generated combination of letters and numbers in both
                circumstances.
              </li>
              <li>
                Construct a widget: Create a widget to share a file or folder on
                a public site. After you&apos;ve completed the form, you&apos;ll
                receive HTML code that you may use to embed on any site you own.
                Your files will be shown in the widget, and visitors will be
                able to download them as needed.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="my-16 content-block block-2">
        <div className="container mx-auto">
          <div className="text-container">
            <h2 className="text-gradient-2 my-10 md:my-0 md:mb-6 md:text-3xl text-xl">
              Restrictions on access
            </h2>
            <ul>
              <li>
                Grant specific rights: When sharing content, you may give
                different levels of access to different people. There are three
                levels: Preview only (only viewable on your web browser;
                downloading is not permitted), Upload only, Download only, Full
                Access (which includes the right to delete files), Upload and
                Download, or Download Only.
              </li>
              <li>
                Protect a link to a file or folder with a password: You can opt
                to password-protect a public link to a file or folder when you
                create it.
              </li>
              <li>
                Set a date for a public link to expire – Set a date for a public
                link to expire. The link will become invalid on this date, and
                the user will no longer be able to access the file or folder.
              </li>

              <li>
                Set an expiration date for a file that will be automatically
                removed and hence no longer available.
              </li>
              <li>
                Unshare a file — You can opt to unshare a file at any time, even
                if no expiration date has been selected. When a file is
                unshared, all public links to it are deactivated, and it is
                removed from any widgets.
              </li>
            </ul>
          </div>

          <div className="img-container">
            <Image src={UserFame2} alt="user-fame 2" />
          </div>
        </div>
      </section>

      <section className="my-16 content-block">
        <div className="container mx-auto">
          <div className="img-container">
            <Image src={UserFame3} alt="user-fame 3" />
          </div>

          <div className="text-container">
            <h2 className="text-gradient-2 mt-10 md:my-0 md:mb-6 md:text-3xl text-xl">
              User Privilege Management – Platform Security
            </h2>
            <ul>
              <li>
                Validated data access - Privesecure validates data access using
                proven password and privilege mechanisms depending on a
                user&apos;s privileges. Unauthorized access will result in
                failure.
              </li>
              <li>
                With every request to the platform, Privesecure uses robust user
                authentication. In essence, any activity in Privesecure is only
                permitted once the system verifies that the user has the
                necessary permissions.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Ecosystem;
