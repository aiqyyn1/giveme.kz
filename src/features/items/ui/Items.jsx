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
import Timer from '../ui/Timer';
function Items() {
  const router = useRouter();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories.status);
  const timer = useSelector((state) => state.categories.timer);

  const [activeCategories, setActiveCategories] = useState({
    toys: false,
    clothes: false,
    shoes: false,
  });
  const [isModal, setIsModal] = useState(false);
  const [isTimer, setIsTimer] = useState(false);
  const [id, setId] = useState(null);
  const state = useSelector((state) => state.categories.categories);
  const { data: itemsData, isFetching } = useGetItemsQuery(state, {
    skipPollingIfUnfocused: true,
  });

  const handleCategoryClick = (category) => {
    dispatch(setCategories(category));
    setActiveCategories((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  useEffect(() => {
    const queryParams = state.map((cat) => `cat=${cat}`).join('&');
    router.push(`/items${queryParams ? `?${queryParams}` : ''}`);
  }, [state]);

  const getButtonClass = (category) =>
    classNames('border-2', 'h-8', 'rounded-lg', 'border-buttonColor', 'flex-grow', {
      'bg-buttonColor': activeCategories[category],
      'text-white': activeCategories[category],
    });

  const handleClickModal = (id) => {
    setIsModal(true);
    setId(id);
  };

  const onClose = useCallback(() => {
    setIsModal(false);
  }, []);

  return (
    <div className="flex flex-col ml-36 mt-20 gap-4">
      <span className="font-bold text-3xl font-DM">Choose what you need</span>
      {status && <Timer />}

      <div className="flex w-[280px] gap-2 text-center">
        <Link
          href=" #"
          onClick={() => handleCategoryClick('toys')}
          className={getButtonClass('toys')}
        >
          Toys
        </Link>
        <Link
          href="#"
          onClick={() => handleCategoryClick('clothes')}
          className={getButtonClass('clothes')}
        >
          Clothes
        </Link>
        <Link
          href="#"
          onClick={() => handleCategoryClick('shoes')}
          className={getButtonClass('shoes')}
        >
          Shoes
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {itemsData &&
          itemsData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg w-[240px] h-[400px]">
              <Image
                src={item.image}
                width={240}
                height={240}
                alt={item.cat_name}
                className="ml-3 mt-2 object-cover "
                style={{ width: '90%', height: '65%', objectFit: 'cover' }}
              />
              <div className="flex justify-center font-inter font-bold mt-6">
                <span>{item.cat_name}</span>
              </div>
              <button
                onClick={() => handleClickModal(item.id)}
                disabled={timer === 0 ? false : true}
                className="bg-buttonPink flex justify-center items-center mt-5 ml-2  w-[228px] h-[48px] rounded-lg text-white"
              >
                RECEIVE
              </button>
            </div>
          ))}
      </div>
      {isModal && <Order id={id} onClose={onClose} />}
    </div>
  );
}

export default Items;
