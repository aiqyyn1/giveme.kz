'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

function Page() {
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryClick = (category) => {
    const updatedCategories = [...selectedCategories];
    const categoryIndex = updatedCategories.indexOf(category);
    if (categoryIndex !== -1) {
      updatedCategories.splice(categoryIndex, 1); // Remove if already selected
    } else {
      updatedCategories.push(category); // Add if not already selected
    }
    setSelectedCategories(updatedCategories);

    // Construct the URL with selected categories
    const queryParams = updatedCategories.map((cat) => `cat=${cat}`).join('&');
    router.push(`/items${queryParams ? `?${queryParams}` : ''}`);
  };

  useEffect(() => {
    // Fetch data based on selected categories
    const fetchData = async () => {
      try {
        const queryParams = selectedCategories.map((cat) => `cat=${cat}`).join('&');

        const response = await fetch(
          `https://giveme-backend-2.onrender.com/items${queryParams ? `?${queryParams}` : ''}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        console.log(await response.json());
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedCategories]);

  return (
    <div>
      <a href="/items">All</a>{' '}
      <a href="#" onClick={() => handleCategoryClick('toys')}>
        Toys
      </a>{' '}
      <a href="#" onClick={() => handleCategoryClick('clothes')}>
        Clothes
      </a>{' '}
      <a href="#" onClick={() => handleCategoryClick('shoes')}>
        Shoes
      </a>{' '}
      <ul>
        Render selected categories
        {selectedCategories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
