'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories } from '../lib/slice';
import { useGetItemsQuery } from '../api/api';

function Items() {
  const router = useRouter();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.categories.categories);

  const { data: itemsData, isFetching } = useGetItemsQuery(state, {
    skipPollingIfUnfocused: true,
  });

  const handleCategoryClick = (category) => {
    dispatch(setCategories(category));
  };

  useEffect(() => {
    const queryParams = state.map((cat) => `cat=${cat}`).join('&');
    router.push(`/items${queryParams ? `?${queryParams}` : ''}`);
  }, [state]);

  return (
    <div>
      <div className="flex flex-col ml-36 mt-20 gap-4">
        <span className="font-bold text-3xl font-DM">Choose what you need</span>
        <span className="text-xl font-DM">Attention! You can take one item per 48 hours</span>
        <div className="flex w-[280px] gap-2 text-center ">
          {' '}
          {/* Add flex-wrap to allow links to wrap */}
          <Link
            href="#"
            onClick={() => handleCategoryClick('toys')}
            className="border-2 h-8 rounded-lg border-buttonColor flex-grow"
          >
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
        {/* {itemsData &&
          itemsData.map((item, index) => {
            return (
              <div key={index}>
                <Image src={item.image} width={20} height={20} alt="alt"></Image>
              </div>
            );
          })} */}
        <Image src={itemsData && itemsData[0].image} width={20} height={20} alt="dew"></Image>
      </div>
    </div>
  );
}

export default Items;
