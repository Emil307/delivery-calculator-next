"use client";

import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { calc } from "@/app/api/calc";
import { getAddress } from "@/app/api/address";
import { useDebounce } from "@/app/lib/api/useDebounce";

interface IFormFileds {
  deliveryTo: string;
  length: string;
  width: string;
  height: string;
  weight: string;
}

export const CalcForm: React.FC = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormFileds>();

  const watchDeliveryTo = watch("deliveryTo", "");

  const debouncedDeliveryTo = useDebounce(watchDeliveryTo, 500);

  useEffect(() => {
    if (typeof debouncedDeliveryTo === "string") {
      getAddress(debouncedDeliveryTo)
        .then((res) => {
          console.log(res.suggestions);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [debouncedDeliveryTo]);

  const onSubmit: SubmitHandler<IFormFileds> = async (data) => {
    calc(data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-96 flex flex-col gap-4 items-start p-8 rounded-xl bg-white"
    >
      <h1 className="font-bold text-2xl">Рассчитать доставку</h1>
      <div className="w-full flex flex-col gap-4">
        <FormControl
          isInvalid={Boolean(errors.deliveryTo)}
          className="relative flex flex-col gap-1"
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
            <p className="absolute -bottom-6 left-0 text-red-500">
              {errors.deliveryTo.message}
            </p>
          )}
        </FormControl>
        <FormControl
          isInvalid={Boolean(errors.length)}
          className="relative flex flex-col gap-1"
        >
          <FormLabel></FormLabel>
          <Input
            {...register("length", {
              required: "Обязательное поле",
            })}
            placeholder="Длина см"
            size="sm"
            variant="flushed"
          />
          {errors.length && (
            <p className="absolute -bottom-6 left-0 text-red-500">
              {errors.length.message}
            </p>
          )}
        </FormControl>
        <FormControl
          isInvalid={Boolean(errors.width)}
          className="relative flex flex-col gap-1"
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
            <p className="absolute -bottom-6 left-0 text-red-500">
              {errors.width.message}
            </p>
          )}
        </FormControl>
        <FormControl
          isInvalid={Boolean(errors.height)}
          className="relative flex flex-col gap-1"
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
            <p className="absolute -bottom-6 left-0 text-red-500">
              {errors.height.message}
            </p>
          )}
        </FormControl>
        <FormControl
          isInvalid={Boolean(errors.weight)}
          className="relative flex flex-col gap-1"
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
            <p className="absolute -bottom-6 left-0 text-red-500">
              {errors.weight.message}
            </p>
          )}
        </FormControl>
      </div>
      <Button
        marginTop={"2rem"}
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
