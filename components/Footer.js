const Footer = () => {
  return (
    <footer className="px-32 py-14 grid grid-cols-1 gap-y-10 md:grid-cols-4 text-white bg-black mt-8">
      <div className="space-y-4 text-sm">
        <h5 className="text-md font-bold">ABOUT</h5>
        <p>How My Real Estate works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>How My Real Estate works</p>
      </div>

      <div className="space-y-4 text-sm">
        <h5 className="text-md font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>Referral accepted</p>
        <p>Get more information</p>
      </div>

      <div className="space-y-4 text-sm">
        <h5 className="text-md font-bold">HOST</h5>
        <p>JMDev</p>
        <p>Visit our community</p>
        <p>Host responsibility</p>
        <p>Become a host</p>
      </div>

      <div className="space-y-4 text-sm">
        <h5 className="text-md font-bold">SUPPORT</h5>
        <p>Help Centre</p>
        <p>Trust & Safety</p>
        <p>Cancellation</p>
        <p>Covid-19 news</p>
      </div>
    </footer>
  );
};

export default Footer;
