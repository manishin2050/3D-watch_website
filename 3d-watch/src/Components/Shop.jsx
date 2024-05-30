import React, { useState, useEffect } from 'react';
import axios from 'axios';
import watches from '../api/watches.json';
import PayPalButton from './PayPalButton';
import gsap from 'gsap';

const Shop = () => {
  const [watchList, setWatchList] = useState([]);
  const [selectedWatch, setSelectedWatch] = useState(null);
  const [isBuying, setIsBuying] = useState(false);

  useEffect(() => {
    setWatchList(watches);

    const timeoutId = setTimeout(() => {
      let shop = gsap.timeline();
      shop.from('.card', {
        y: -200,
        opacity: 0,
        duration: .3,
        stagger: .2
      });
    }, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleBuyClick = (watch) => {
    setSelectedWatch(watch);
    setIsBuying(true); // Set isBuying to true when Buy button is clicked
  };

  const handlePaymentSuccess = async (details) => {
    console.log('Payment Successful:', details);
    const paymentData = {
      name: selectedWatch.brand,
      model: selectedWatch.model,
      price: selectedWatch.price,
      img: selectedWatch.image,
    };

    try {
      await axios.post('http://127.0.0.1:4304/watch', paymentData);
    } catch (error) {
      console.error('Error sending payment details to the backend:', error);
    }

    setSelectedWatch(null);
    setIsBuying(false); // Reset isBuying after successful payment
  };

  const handlePaymentClose = () => {
    setSelectedWatch(null);
    setIsBuying(false); // Set isBuying to false when payment section is closed

  };

  return (
    <div className='box'>
      {/* Render cards only if isBuying state is false */}
      {!isBuying && watchList.map((watch) => (
        <div className="card mb-3" style={{ maxWidth: '540px' }} key={watch.id}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={watch.image} className="img-fluid rounded-start" alt={watch.model} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{watch.brand}</h5>
                <p className="card-text">{watch.model}</p>
                <p className="card-text">Price: ${watch.price}</p>
                <button className="btn btn-warning" onClick={() => handleBuyClick(watch)}>Buy</button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* Render PayPalButton only if selectedWatch is not null */}
      {selectedWatch && (
        <div className='payment' >
          <button className="btn btn-warning" onClick={handlePaymentClose}>X</button> {/* Close button */}
          <h2 className='text-center'>{selectedWatch.brand} </h2>
          <p><img src={selectedWatch.image} alt="" /></p>
          <p>Model: {selectedWatch.model}</p>
          <p><h1>Price: ${selectedWatch.price}</h1></p>
          <PayPalButton amount={selectedWatch.price} onSuccess={handlePaymentSuccess} />
        </div>
      )}
    </div>
  );
};

export default Shop;

