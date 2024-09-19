"use client";

import { FormControl, FormLabel, Input } from "@chakra-ui/react";
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormFileds>();

  const onSubmit: SubmitHandler<IFormFileds> = async (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-96 flex flex-col gap-8 items-start p-8 rounded-xl bg-white"
    >
      <h1 className="font-bold text-2xl">Рассчитать доставку</h1>
      <div className="w-full flex flex-col gap-4">
        <FormControl isInvalid={Boolean(errors.deliveryTo)}>
          <FormLabel></FormLabel>
          <Input
            placeholder="Куда"
            type="text"
            {...register("deliveryTo", {
              required: "Обязательное поле",
            })}
            size="sm"
            variant="flushed"
          />
          {errors.deliveryTo && <>{errors.deliveryTo.message}</>}
        </FormControl>
        <FormControl isInvalid={Boolean(errors.long)}>
          <FormLabel></FormLabel>
          <Input
            {...register("long", {
              required: "Обязательное поле",
            })}
            placeholder="Длина см"
            size="sm"
            variant="flushed"
          />
          {errors.long && <>{errors.long.message}</>}
        </FormControl>
        <FormControl isInvalid={Boolean(errors.width)}>
          <FormLabel></FormLabel>
          <Input
            {...register("width", {
              required: "Обязательное поле",
            })}
            placeholder="Ширина см"
            size="sm"
            variant="flushed"
          />
          {errors.width && <>{errors.width.message}</>}
        </FormControl>
        <FormControl isInvalid={Boolean(errors.height)}>
          <FormLabel></FormLabel>
          <Input
            {...register("height", {
              required: "Обязательное поле",
            })}
            placeholder="Высота см"
            size="sm"
            variant="flushed"
          />
          {errors.height && <>{errors.height.message}</>}
        </FormControl>
        <FormControl isInvalid={Boolean(errors.weight)}>
          <FormLabel></FormLabel>
          <Input
            {...register("weight", {
              required: "Обязательное поле",
            })}
            placeholder="Вес кг"
            size="sm"
            variant="flushed"
          />
          {errors.weight && <>{errors.weight.message}</>}
        </FormControl>
      </div>
      <button type="submit">Рассчитать</button>
    </form>
  );
};
