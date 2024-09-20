import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL;

export async function getAddress(query: string) {
  const data = await axios({
    url: `${API}/order/search-address/`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: {
      deliveryTo: query,
    },
  });

  return data.data;
}
