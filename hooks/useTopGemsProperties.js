import { useState, useEffect } from "react";
import { supabase } from "../src/services/supabase";


export const useTopGemsProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("properties")
          .select("*")
          .eq("rating", 5);

        if (error) throw error;

        setProperties(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return { properties, loading, error };
};