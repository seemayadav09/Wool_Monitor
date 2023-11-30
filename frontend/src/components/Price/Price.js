import React from 'react';

export default function Price({ price, locale, currency }) {
  const formatPrice = () =>
    new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
    }).format(price*10);

  return <span>{formatPrice()}</span>;
}

Price.defaultProps = {
  locale: 'en-IN',
  currency: 'INR',
};
