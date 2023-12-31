import { useEffect, useState } from "react";
import { apiCall } from "../utils/apiCall";
import { METHODS } from "../utils/constant";
import { endpoint } from "../utils/endpoint";

export const useFetchExperiences = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchExperiences = async () => {
    try {
      setLoading(true);
      const response = await apiCall(METHODS.GET, endpoint.experiences);
      setExperiences(response.data);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(true);
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  return { experiences, loading, error, errorMessage };
};
