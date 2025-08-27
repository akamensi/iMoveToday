// File: src/hooks/useAuth.js
import { useState } from 'react';
import { supabase } from '../src/services/supabase';


const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Signup function
  const signUp = async (email, password, fullName) => {
    setLoading(true);
    setError(null);

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } },
    });

    setLoading(false);

    if (signUpError) {
      setError(signUpError.message);
      return null;
    }

    return data;
  };

  // You can add other auth functions here, e.g., login, logout, resetPassword, etc.
  
  return { signUp, loading, error };
};

export default useAuth;
