'use client';
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories } from '../lib/slice';
import { useGetItemsQuery } from '../api/api';
import classNames from 'classnames';
import Order from '../../../entities/order/ui/Order';
function Items() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [id, setId] = useState(null);
  const state = useSelector((state) => state.categories.categories);
  const buttonCoolor = classNames();
  const { data: itemsData, isFetching } = useGetItemsQuery(state, {
    skipPollingIfUnfocused: true,
  });
  const handleCategoryClick = (category) => {
    setIsClicked(true);
    dispatch(setCategories(category));
  };

  useEffect(() => {
    const queryParams = state.map((cat) => `cat=${cat}`).join('&');
    router.push(`/items${queryParams ? `?${queryParams}` : ''}`);
  }, [state]);
  const buttonClasses = classNames(
    'border-2',
    'h-8',
    'rounded-lg',
    'border-buttonColor',
    'flex-grow',
    {
      'bg-buttonColor': isClicked,
      'text-white': isClicked,
    }
  );
  const handleClickModal = (id) => {
    setIsModal(true);
    setId(id);
  };
  const onClose = useCallback(() => {
    setIsModal(false);
  }, []);

  return (
    <div>
      <div className="flex flex-col ml-36 mt-20 gap-4">
        <span className="font-bold text-3xl font-DM">Choose what you need</span>
        <span className="text-xl font-DM">Attention! You can take one item per 48 hours</span>
        <div className="flex w-[280px] gap-2 text-center ">
          {' '}
          <Link href="#" onClick={() => handleCategoryClick('toys')} className={buttonClasses}>
            Toys
          </Link>{' '}
          <Link
            href="#"
            className="border-2 rounded-lg border-buttonColor flex-grow"
            onClick={() => handleCategoryClick('clothes')}
          >
            Clothes
          </Link>{' '}
          <Link
            href="#"
            className="border-2 rounded-lg border-buttonColor flex-grow"
            onClick={() => handleCategoryClick('shoes')}
          >
            Shoes
          </Link>{' '}
        </div>
        <div className="grid grid-cols-4 gap-8 ">
          {itemsData &&
            itemsData.map((item, index) => {
              return (
                <div key={index} className="bg-white w-[245px] h-[400px]">
                  <Image
                    src={item.image}
                    width={228}
                    height={228}
                    alt="alt"
                    className="ml-2 mt-2"
                  ></Image>
                  <div className="flex justify-center font-inter font-bold mt-6">
                    <span>{item.cat_name}</span>
                  </div>
                  <div className=" ">
                    <button
                      onClick={(id) => handleClickModal(item.id)}
                      className="bg-buttonPink flex justify-center items-center mt-5 ml-2  w-[228px] h-[48px] rounded-lg text-white"
                    >
                      RECIEVE
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
        {isModal && <Order id={id} onClose={onClose}></Order>}
      </div>
    </div>
  );
}

export default Items;
