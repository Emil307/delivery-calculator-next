import axios from "axios";

const API = process.env.NEXT_PUBLIC_DADA_API_URL;
const token = process.env.NEXT_PUBLIC_DADA_API_KEY;

export async function getAddress(query: string) {
  const data = await axios({
    url: `${API}`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Token " + token,
    },
    data: JSON.stringify({
      query: query,
      locations_boost: [
        {
          kladr_id: "50",
        },
      ],
    }),
  });

  return data.data;
}
