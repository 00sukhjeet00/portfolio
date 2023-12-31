import axios from "axios";

const BASE_URL =
  "https://ap-south-1.aws.data.mongodb-api.com/app/application-0-pwdye/endpoint";

export const apiCall = async (
  method: string,
  endpoint: string,
  body?: object
) => {
  const response = await axios({
    method,
    url: `${BASE_URL}${endpoint}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
  });
  return response;
};
