"use client";

import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
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
    formState: { errors, isSubmitting },
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
        <FormControl
          isInvalid={Boolean(errors.deliveryTo)}
          className="flex flex-col gap-1"
        >
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
          {errors.deliveryTo && (
            <p className="text-red-500">{errors.deliveryTo.message}</p>
          )}
        </FormControl>
        <FormControl
          isInvalid={Boolean(errors.long)}
          className="flex flex-col gap-1"
        >
          <FormLabel></FormLabel>
          <Input
            {...register("long", {
              required: "Обязательное поле",
            })}
            placeholder="Длина см"
            size="sm"
            variant="flushed"
          />
          {errors.long && <p className="text-red-500">{errors.long.message}</p>}
        </FormControl>
        <FormControl
          isInvalid={Boolean(errors.width)}
          className="flex flex-col gap-1"
        >
          <FormLabel></FormLabel>
          <Input
            {...register("width", {
              required: "Обязательное поле",
            })}
            placeholder="Ширина см"
            size="sm"
            variant="flushed"
          />
          {errors.width && (
            <p className="text-red-500">{errors.width.message}</p>
          )}
        </FormControl>
        <FormControl
          isInvalid={Boolean(errors.height)}
          className="flex flex-col gap-1"
        >
          <FormLabel></FormLabel>
          <Input
            {...register("height", {
              required: "Обязательное поле",
            })}
            placeholder="Высота см"
            size="sm"
            variant="flushed"
          />
          {errors.height && (
            <p className="text-red-500">{errors.height.message}</p>
          )}
        </FormControl>
        <FormControl
          isInvalid={Boolean(errors.weight)}
          className="flex flex-col gap-1"
        >
          <FormLabel></FormLabel>
          <Input
            {...register("weight", {
              required: "Обязательное поле",
            })}
            placeholder="Вес кг"
            size="sm"
            variant="flushed"
          />
          {errors.weight && (
            <p className="text-red-500">{errors.weight.message}</p>
          )}
        </FormControl>
      </div>
      <Button
        width={"full"}
        size={"lg"}
        fontWeight={"bold"}
        color={"white"}
        colorScheme="blue"
        isLoading={isSubmitting}
        type="submit"
      >
        Рассчитать
      </Button>
    </form>
  );
};
