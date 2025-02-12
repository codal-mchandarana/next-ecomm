export const calculatePrice = (
  price: string | undefined,
  discount: string | undefined,
): number => {
  const numPrice = Number(price?.replace(/,/g, ''));
  const numDiscount = Number(discount);

  const newPrice = numPrice - numPrice * (numDiscount / 100);
  
  return newPrice;
};
