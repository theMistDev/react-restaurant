import React from 'react';
import ProductCard from '../ProductCard';
import PageTitle from '../PageTitle';
const Products = () => {
  let products = [
    {
      picture:
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      price: '5,000',
      title: 'Veggies and Egg',
      description:
        'Enjoy our healthy veggie and egg combo. You can only get this from us.',
    },
    {
      picture:
        'https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      price: '5,000',
      title: 'Strawberry and Biscuits',
      description:
        'We have a special strawberry and biscuit combo. Looks simple but good. ',
    },
    {
      picture:
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      price: '5,000',
      title: 'Pizza',
      description:
        'Our Pizza has levels. Fully homemade and fresh. Best tasting pizza in the country',
    },
    {
      picture:
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      price: '5,000',
      title: 'Veggies and Egg',
      description:
        'Enjoy our healthy veggie and egg combo. You can only get this from us.',
    },
    {
      picture:
        'https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      price: '5,000',
      title: 'Strawberry and Biscuits',
      description:
        'We have a special strawberry and biscuit combo. Looks simple but good. ',
    },
    {
      picture:
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      price: '5,000',
      title: 'Pizza',
      description:
        'Our Pizza has levels. Fully homemade and fresh. Best tasting pizza in the country',
    },
    {
      picture:
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      price: '5,000',
      title: 'Veggies and Egg',
      description:
        'Enjoy our healthy veggie and egg combo. You can only get this from us.',
    },
    {
      picture:
        'https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      price: '5,000',
      title: 'Strawberry and Biscuits',
      description:
        'We have a special strawberry and biscuit combo. Looks simple but good. ',
    },
    {
      picture:
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      price: '5,000',
      title: 'Pizza',
      description:
        'Our Pizza has levels. Fully homemade and fresh. Best tasting pizza in the  country',
    },
  ];

  const productCardItems = products.map(function (product) {
    return (

      <ProductCard
        title={product.title}
        price={product.price}
        description={product.description}
        picture={product.picture}
      />
    );
  });

  return (
    <main>
      <PageTitle title="Products" />
      <div className="flex flex-row flex-wrap items-center justify-around">{productCardItems}</div>
    </main>
  );
};

export default Products;
