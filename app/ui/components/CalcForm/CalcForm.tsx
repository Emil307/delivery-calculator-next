"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormFileds {
  deliveryTo: string;
  long: string;
  width: string;
  height: string;
  weight: string;
}

export const CalcForm: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormFileds>();

  const onSubmit: SubmitHandler<IFormFileds> = async (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 items-start p-8 rounded-xl bg-white"
    >
      <h1 className="font-bold text-2xl">Рассчитать доставку</h1>
      <div>
        <input
          {...register("deliveryTo", {
            required: "Обязательное поле",
          })}
          placeholder="Куда"
        />
        <input
          {...register("long", {
            required: "Обязательное поле",
          })}
          placeholder="Длина"
        />
        <input
          {...register("width", {
            required: "Обязательное поле",
          })}
          placeholder="Ширина"
        />
        <input
          {...register("height", {
            required: "Обязательное поле",
          })}
          placeholder="Высота"
        />
        <input
          {...register("weight", {
            required: "Обязательное поле",
          })}
          placeholder="Вес"
        />
      </div>
      <button type="submit">Рассчитать</button>
    </form>
  );
};
