import React from "react";

export const ReusableComponent = ({
  title,
  image,
  description,
  buttonText,
}: {
  title: string;
  image: string;
  description: string;
  buttonText: string;
}) => {
  const { cart } = useCart((state) => state.cartItems);

  return (
    <div className="w-300 bg-orange-200 p-10 flex flex-col gap-4">
      <h1 className="text-4xl">{title}</h1>
      <img src={image} className="w-full" />
      <div className="flex gap-2">
        <p className="text-2xl">{description}</p>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};
