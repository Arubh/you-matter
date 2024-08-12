import React from 'react';
import Link from 'next/link';

const PsyCard = ({ item }) => {
  const { title, address, distance, contacts, openingHours } = item;

  const phoneNumber = contacts?.[0]?.phone?.[0]?.value;
  const mobileNumbers = contacts?.[0]?.mobile || [];
  const websiteUrls = contacts?.[0]?.www || [];
  const openingHoursText = openingHours?.[0]?.text?.[0];

  return (
    <div className="mb-[50px] h-fit sm:w-[520px] w-[330px] my-2 rounded-[30px] p-12 font-serif hover:bg-[beige] overflow-hidden">
      <div className="transform transition-transform duration-300 hover:scale-105">
        <h2 className="sm:text-2xl text-md mb-4 font-semibold">{title}</h2>
        <p className="mb-2 sm:text-md text-sm">{address.label}</p>
        <p className="mb-2 sm:text-md text-sm">Distance: {distance} meters</p>
        {phoneNumber && <p className="mb-2 sm:text-md text-sm">Phone: {phoneNumber}</p>}
        {mobileNumbers.length > 0 && (
          <div className="mb-2 sm:text-md text-sm">
            Mobile:
            {mobileNumbers.map((mobile, index) => (
              <p key={index}>{mobile.value}</p>
            ))}
          </div>
        )}
        {websiteUrls.length > 0 && (
          <div className="mb-2 sm:text-md text-sm">
            {websiteUrls.map((website, index) => (
              <p key={index}>
                <Link href={website.value} target="_blank" rel="noopener noreferrer">Website{index + 1}</Link>
              </p>
            ))}
          </div>
        )}
        {openingHoursText && <p className="mb-2 sm:text-md text-sm">Opening Hours: {openingHoursText}</p>}
      </div>
    </div>
  );
};

export default PsyCard;
