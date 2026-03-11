function Footer() {
  return (
    <footer className="bg-[#f5f5f5]]  py-8 px-6 text-center">
      <h2 className="text-[#4731D3] text-3xl md:text-4xl font-bold mb-4">
        Send me a message!
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-base text-[#120B39] mb-4 leading-relaxed">
        Got a question or proposal, or just want to say hello? Go ahead.
      </p>
      <a
        href="mailto:atillabilgi.ab@gmail.com"
        className="text-[#4731D3] underline text-lg font-medium block mb-6"
      >
        atillabilgi.ab@gmail.com
      </a>
      <div className="flex justify-center gap-6 text-xl text-[#4731D3]">
      <i className="fa-brands fa-twitter"></i>
      <i className="fa-brands fa-codepen"></i>
      <i className="fa-solid fa-at"></i>
      <i className="fa-brands fa-instagram"></i>
      </div>
    </footer>
  );
}

export default Footer;
