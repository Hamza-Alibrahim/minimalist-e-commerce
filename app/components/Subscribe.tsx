const Subscribe = () => {
  return (
    <section className="bg-[#191919]">
      <div className="css-container h-[28rem] flex flex-col justify-center items-center">
        <h1 className="text-[3.5rem] font-bold text-white mb-[2rem] text-center">
          Newsletter
        </h1>
        <form className="flex max-[450px]:flex-col justify-center gap-[1rem]">
          <input
            type="email"
            placeholder="your@email.com"
            className="text-[1.7rem] p-[.7rem] outline-0 leading-[normal] font-normal"
            required
          />
          <button
            type="submit"
            className="text-[1.7rem] p-[.7rem] bg-[#f0f0f0] font-normal leading-[normal] max-[450px]:w-[23rem]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};
export default Subscribe;
