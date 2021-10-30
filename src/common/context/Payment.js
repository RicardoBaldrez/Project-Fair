import { createContext, useState } from 'react';

export const PaymentContext = createContext();
PaymentContext.displayName = 'Payment';

export const PaymentProvider = ({ children }) => {
  const paymentTypes = [
    {
      name: 'Boleto',
      fees: 1,
      id: 1,
    },
    {
      name: 'Cartão de Crédito',
      fees: 1.3,
      id: 2,
    },
    {
      name: 'Pix',
      fees: 1,
      id: 3,
    },
    {
      name: 'Crediário',
      fees: 1.5,
      id: 4,
    },
  ];

  const [formPayment, setFormPayment] = useState(paymentTypes[0]);

  return (
    <PaymentContext.Provider 
      value={{
        formPayment,
        setFormPayment,
        paymentTypes
      }} 
    >
      { children }
    </PaymentContext.Provider>
  );
}