import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL;

export async function calc() {
  const data = await axios({
    url: `${API}/posts/`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "*",
    },
    data: {},
  });

  return data.data;
}
