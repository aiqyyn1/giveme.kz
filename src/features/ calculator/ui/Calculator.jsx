'use client';
import React from 'react';
import { data } from '../../../shared/data/data';
import { setWeight, setSum } from '../lib/slice';
import { useSelector, useDispatch } from 'react-redux';
import { SubCard } from '../../../pages_0/upload-page/ui';
import { useHandleClickActive } from '../../../shared/utils/functions';
import { CALCULATOR } from './string';
const Calculator = () => {
  const handleClickActive = useHandleClickActive();
  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.uploadText.isActive);
  const calculatorState = useSelector((state) => state.calculator);
  const createItemState = useSelector((state) => state.uploadText.text);
  const handleChangeWeight = (e) => {
    dispatch(setWeight(e.target.value));
  };
  const handleCalculate = () => {

    dispatch(setSum({ weight: calculatorState.weight, text: createItemState }));
  };

  return (
    <div className="mt-24 ml-40">
      <span className="text-[32px] font-bold">{CALCULATOR.SELECT_TYPE}</span>
      <div className="flex gap-6 mt-5">
        {data.map((item, index) => (
          <SubCard
            key={index}
            text={item.text}
            isActive={item.id === isActive}
            image={item.image}
            onClick={() => handleClickActive(item.id)}
          />
        ))}
      </div>
      <div className="mt-16 flex flex-col">
        <span className="text-[32px] font-bold">{CALCULATOR.WEIGHT}</span>
        <input
          placeholder="weight of the item(g.)"
          className="w-[502px] mt-8 h-[48px] bg-buttonColor p-6 rounded-lg text-white"
          onChange={handleChangeWeight}
        ></input>
      </div>
      <div className="mt-20 flex gap-4">
        <span
          dangerouslySetInnerHTML={{ __html: CALCULATOR.GET }}
          className="font-bold text-[32px] "
        ></span>
        <div className="bg-red_button rounded-lg pl-2 pr-2">
          <span className="text-[32px] text-white ">
            {calculatorState.sum === 1 ? 0 : calculatorState.sum} B
          </span>
        </div>
      </div>
      <div className="bg-buttonPink flex text-white font-bold text-[22px] justify-center items-center w-[1032px] rounded-lg mt-[90px]о mb-[120px] h-[61px]">
        <button onClick={handleCalculate}>{CALCULATOR.CALCULATOR}</button>
      </div>
    </div>
  );
};

export default Calculator;
