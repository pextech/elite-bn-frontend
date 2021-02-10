import React from 'react';

const HotelCard = ({ image }) => (
  <div>
    <img src={image} alt="hotel1" className="h-70 rounded shadow" />
    <p className="text-center py-4">The Lion Hotel, North Adelaide, South Australia</p>
    <ul className="flex justify-center pb-5">
      <li>
        <i className="text-yellow-400 fas fa-star" />
      </li>
      <li>
        <i className="text-yellow-400 fas fa-star" />
      </li>
      <li>
        <i className="text-yellow-400 fas fa-star" />
      </li>
      <li>
        <i className="text-yellow-400 fas fa-star" />
      </li>
    </ul>
  </div>
);

export default HotelCard;
