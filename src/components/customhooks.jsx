import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

const contactContext = createContext();

const ContactProvider = ({children}) => {
    const [checkIn, setChekIn] = useState([]);
    const checkInHandler = (type, user) => {
        
        const data = {
        type, 
        user,
        time: new Date(),
    }
     toast(`${type} with ${user.name}`)

    setChekIn((prev)=> [...prev, data])
}

    return (
      <contactContext.Provider value={{checkIn, checkInHandler}}>
        {children}
      </contactContext.Provider>
    );
};

export const useContact = () => {
  return  useContext(contactContext)
}
export default ContactProvider;