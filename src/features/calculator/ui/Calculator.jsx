'use client';
import React, { memo, useCallback } from 'react';
import { data } from '../../../shared/data/data';
import { setWeight, setSum } from '../lib/slice';
import { useSelector, useDispatch } from 'react-redux';
import { SubCard } from '../../../pages_0/upload-page/ui';
import { useHandleClickActive } from '../../../shared/utils/functions';
import { CALCULATOR } from './string';
const Calculator = memo(() => {
  const handleClickActive = useHandleClickActive();
  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.uploadText.isActive);
  const calculatorState = useSelector((state) => state.calculator);
  const createItemState = useSelector((state) => state.uploadText.text);
  const handleChangeWeight = useCallback(
    (e) => {
      dispatch(setWeight(e.target.value));
    },
    [calculatorState.weight]
  );
  const handleCalculate = useCallback(() => {
    dispatch(setSum({ weight: calculatorState.weight, text: createItemState }));
  }, [calculatorState.weight, createItemState]);

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
            activeImage={item.isActiveImage}
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
      <div className="mt-20 flex  flex-col gap-[90px]">
        <div className="flex">
          <span
            dangerouslySetInnerHTML={{ __html: CALCULATOR.GET }}
            className="font-bold text-[32px] "
          ></span>

          <span className="text-[32px] ml-2 bg-red_button w-auto rounded-lg pl-2 pr-2 text-white ">
            {calculatorState.sum === 1 ? 0 : calculatorState.sum} B
          </span>
        </div>
        <button
          onClick={handleCalculate}
          className="bg-buttonPink cursor-pointer flex text-white font-bold text-[22px] justify-center items-center w-[1032px] rounded-lg mt-[90px] mb-[120px] h-[61px]"
        >
          {CALCULATOR.CALCULATOR}
        </button>
      </div>
    </div>
  );
});
Calculator.displayName = 'Calculator'
export default Calculator;
