import React from 'react';
import heroImg from '../assets/hero-img.png';
import icon from '../assets/icon.svg';

function Hero() {
  return (
    <div className="container mx-auto pl-32 flex gap-16">
      <div>
        <img src={heroImg} alt="" width={216} />
      </div>
      <div className="w-[400px]">
        <h2 className="text-[44px] font-[600] text-[#212529]">
          Азамат Шарипов{' '}
          <span className="text-[44px] font-[400]">Абдуллажон угли</span>
        </h2>
        <div className="w-[396px]">
          <h3 className="pt-10 text-[20px] text-[#495057] font-[400]">
            Тугилган сана: <span>30.09.1997 йил</span>
          </h3>
          <h3 className="text-[20px] text-[400] text-[#495057]">
            Тугилган жой: <span>Чуст ш., Наманган.</span>
          </h3>
        </div>
        <div className="flex items-center gap-6 pt-14 w-[275px]">
          <h2 className="text-[18px] text-[#000000] font-[400]">Буйи:</h2>
          <h2 className="text-[18px] text-[#000000] font-[400]">Вазни:</h2>
          <h2 className="text-[18px] text-[#000000] font-[400]">Индекс:</h2>
        </div>
        <div className="flex items-center gap-6">
          <h4 className="text-[18px] text-[#000000] font-[500]">175см</h4>
          <h4 className="text-[18px] text-[#000000] font-[500]">70кг</h4>
          <h4 className="text-[18px] text-[#000000] font-[500]">22.9</h4>
        </div>
      </div>
      <div className="w-[421px] ">
        <h2 className="text-[20px] text-[#495057] text-[400]">Лавозими:</h2>
        <p className="text-[20px] text-[400] text-[#212529]">
          Қорақалпоғистон Республикаси Камбағалликни қисқартириш ва бандлик
          вазири уринбосари
        </p>
        <div className="pt-6">
          <h2 className="text-[20px] text-[#495057]">Номзод:</h2>
          <p className="text-[20px] text-[#212529]">
            Қорақалпоғистон Республикаси Камбағалликни қисқартириш ва бандлик
            вазири
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
