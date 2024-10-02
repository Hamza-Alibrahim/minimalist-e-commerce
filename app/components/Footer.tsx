const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="css-container flex flex-col items-center justify-center h-[17rem]">
        <div className="flex flex-wrap justify-center gap-[3rem]">
          <span className="text-[1.8rem]  leading-[normal] cursor-pointer">
            About
          </span>
          <span className="text-[1.8rem]  leading-[normal] cursor-pointer">
            Store locator
          </span>
          <span className="text-[1.8rem]  leading-[normal] cursor-pointer">
            FAQs
          </span>
          <span className="text-[1.8rem]  leading-[normal] cursor-pointer">
            News
          </span>
          <span className="text-[1.8rem]  leading-[normal] cursor-pointer">
            Careers
          </span>
          <span className="text-[1.8rem]  leading-[normal] cursor-pointer">
            Contact Us
          </span>
        </div>
        <p className="text-[1.7rem] mt-[3rem] leading-[normal] ">
          All <span className="mx-[.5rem]">Rights</span> Reserved
        </p>
      </div>
    </footer>
  );
};
export default Footer;
