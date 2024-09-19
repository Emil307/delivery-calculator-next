import axios from "axios";
import { IDeliveryInfo } from "@/app/types/delivery";

const API = process.env.NEXT_PUBLIC_API_URL;

export async function calc(deliveryInfo: IDeliveryInfo) {
  const data = await axios({
    url: `${API}/posts/`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "*",
    },
    data: deliveryInfo,
  });

  return data.data;
}
