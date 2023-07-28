"use client";
import { useState } from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import MotoDetails from "./MotoDetails";

const CardMoto = ({ moto }) => {
  const {
    brand,
    model,
    price,
    mainImage,
    performance,
    transmission,
    fuelCapacity,
  } = moto;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="moto-card group">
      <div className="moto-card__content">
        <h2 className="moto-card__content-title">
          {brand} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">{price}</span>
        <span> </span>
        <span className="self-end text-[14px] font-medium ml-1">$</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={mainImage}
          alt="Motorcycle model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hove:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/performance.png"
              width={20}
              height={20}
              alt="performance"
            />
            <p className="text-[14px]">{performance}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/fuel.png" width={20} height={20} alt="fuel" />
            <p className="text-[14px]">{fuelCapacity}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/transmission.png"
              width={20}
              height={20}
              alt="transmission"
            />
            <p className="text-[14px]">{transmission}</p>
          </div>
        </div>

        <div className="moto-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-xl bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <MotoDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        moto={moto}
      />
    </div>
  );
};

export default CardMoto;
