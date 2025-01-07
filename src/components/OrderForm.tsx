import React, { useState, useEffect } from 'react';

const OrderForm = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [quantity, setQuantity] = useState(1);  // Default is 1
  const [address, setAddress] = useState({
    street: '',
    district: '',
    ward: '',
  });
 // const [city, setCity] = useState('');
  const [region, SetRegion] = useState('');
  const [price, setPrice] = useState(3999);  // Default price for 1 piece
  const [status, setStatus] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);  // Track form submission status

  useEffect(() => {
    if (quantity === 1) {
      setPrice(89000);
    } else if (quantity === 2) {
      setPrice(156500);
    } else if (quantity === 3) {
      setPrice(213999);
    } else {
      setPrice(quantity * 3999);  // For simplicity, assuming each extra piece costs 3999
    }
  }, [quantity]);

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Form data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('contact', contact);
    formData.append('quantity', quantity.toString());
    formData.append('price', price.toString());
   // formData.append('city', city);
    formData.append('region', region);
    formData.append('street', address.street);
    formData.append('district', address.district);
    formData.append('ward', address.ward);

    try {
      // Send data to Formspree
      const response = await fetch('https://formspree.io/f/mrbboogy', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      // Handle success or failure
      if (response.ok) {
        setStatus('Your order has been sent!');
        setIsSubmitted(true);
      } else {
        setStatus('Something went wrong. Please try again.');
        setIsSubmitted(false);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Something went wrong. Please try again.');
      setIsSubmitted(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-4">
      <h2 className="text-xl text-center underline font-bold mb-4">Order Form</h2>
      {isSubmitted && (
        <div className="text-green-700 mb-4">Thank you for placing your order!</div>
      )}
      {!isSubmitted && (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="name" className="font-semibold">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border p-2 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="contact" className="font-semibold">Contact</label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
              className="border p-2 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="region" className="font-semibold">Region</label>
            <input
              type="text"
              id="region"
              name="region"
              value={region}
              onChange={(e) => SetRegion(e.target.value)}
              required
              className="border p-2 rounded"
            />
          </div>

          {/* Address Section */}
          <div className="flex flex-col">
            <h3 className="font-semibold">Address</h3>

            <label htmlFor="street" className="font-semibold">Street</label>
            <input
              type="text"
              id="street"
              name="street"
              value={address.street}
              onChange={(e) => setAddress({ ...address, street: e.target.value })}
              required
              className="border p-2 rounded"
            />

            <label htmlFor="district" className="font-semibold">District</label>
            <input
              type="text"
              id="district"
              name="district"
              value={address.district}
              onChange={(e) => setAddress({ ...address, district: e.target.value })}
              required
              className="border p-2 rounded"
            />

            <label htmlFor="ward" className="font-semibold">Ward</label>
            <input
              type="text"
              id="ward"
              name="ward"
              value={address.ward}
              onChange={(e) => setAddress({ ...address, ward: e.target.value })}
              required
              className="border p-2 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="quantity" className="font-semibold">Quantity</label>
            <select
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              required
              className="border p-2 rounded"
            >
              <option value="1">1 Piece</option>
              <option value="2">2 Pieces</option>
              <option value="3">3 Pieces</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="price" className="font-semibold">Price</label>
            <p>{`Price for ${quantity} piece TSH: ${price}`}</p>
          </div>

          <div>
            <button type="submit" className="w-full bg-sky-800 border border-black text-white p-2 rounded mt-4">Place Order</button>
          </div>
        </form>
      )}
      {status && <p>{status}</p>}
    </div>
  );
}

export default OrderForm;
