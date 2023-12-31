import { useEffect, useState } from "react";
import { apiCall } from "../utils/apiCall";
import { METHODS } from "../utils/constant";
import { endpoint } from "../utils/endpoint";

export const useFetchSkills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchSkills = async () => {
    try {
      setLoading(true);
      const response = await apiCall(METHODS.GET, endpoint.skills);
      setSkills(response.data);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(true);
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return { skills, loading, error, errorMessage };
};
