import React, { useEffect, useRef } from 'react';

const PayPalButton = ({ amount, onSuccess }) => {
  const paypalRef = useRef();

  useEffect(() => {
    window.paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: amount,
            },
          }],
        });
      },
      onApprove: (data, actions) => {
        return actions.order.capture().then((details) => {
          onSuccess(details);
    alert(`Transaction completed `);

        });
      },
      onError: (err) => {
        console.error('PayPal Checkout onError', err);
      },
    }).render(paypalRef.current);
  }, [amount, onSuccess]);

  return (
    <div>
      <div ref={paypalRef} />
    </div>
  );
};

export default PayPalButton;
