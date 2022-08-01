import { useEffect, useState } from "react";
import axios from "axios";

const useGetCategories = (API) => {
  const [categorie, setCategorie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(API);
      setCategorie(response.data);
    }
    fetchData();
    
      
    }, []);

  return categorie;

};

export default useGetCategories;
