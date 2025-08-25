import { data } from "react-router";
import { supabase } from "./supabase"

export const getProperties = async() => {
    
const { data: properties, error } = await supabase
  .from('properties')
  .select('*')
console.log(data);
console.log("Fetched properties:", properties);
    if (error) {
    console.error("Error fetching properties:", error);
    throw new Error("No Properties Found");
  }
  
  return properties;

}