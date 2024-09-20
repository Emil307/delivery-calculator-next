import axios from "axios";
import { IDeliveryInfo } from "@/app/types/delivery";

const API = process.env.NEXT_PUBLIC_API_URL;

export async function calc(deliveryInfo: IDeliveryInfo) {
  const data = await axios({
    url: `${API}/order/price/`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: deliveryInfo,
  });

  return data.data;
}
