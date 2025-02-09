import React from 'react';
import gerb from '../assets/gerb.svg';
import seventy from '../assets/78.svg';

function Header() {
  return (
    <div className="container mx-auto mt-20 mb-17 pr-32 pl-32">
      <header className="flex items-center justify-between">
        <div className="w-[214px] gap-5">
          <img src={gerb} alt="gerb" width={96} />
          <h2 className="text-[14px] text-[#212529] font-[600] pt-5">
            Давлат хизматининг ягона электрон ахборот-таҳлил тизими
          </h2>
        </div>
        <div className="w-[644px] ">
          <h2 className="w-[644px] text-[32px] text-[#212529] text-center font-[600]">
            Республика Ассессмент маркази онлайн платформаси
          </h2>
        </div>
        <div>
          <img src={seventy} alt="seventy" width={134} />
        </div>
      </header>
    </div>
  );
}

export default Header;
