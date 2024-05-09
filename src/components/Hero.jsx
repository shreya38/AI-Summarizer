import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/TidbitsJS/Summize", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h3 className='head_text'>
        <span classNmae='purple_gradient'>Concise Summary with</span><br className='max-md:hidden' />
        
        <span className='orange_gradient'> OpenAI GPT-4</span>
      </h3>
      <h2 className='desc'>
      Experience clarity with SummEase, your go-to tool for transforming lengthy articles into clear and concise summaries.
      </h2>
    </header>
  );
};

export default Hero;
