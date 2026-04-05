import React from 'react';
import { Heart, Star } from 'lucide-react';
import { Listing } from '../types';
import { Link } from 'react-router-dom';

interface ListingCardProps {
  listing: Listing;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  return (
    <Link to={`/listing/${listing.id}`} className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="object-cover h-full w-full group-hover:scale-110 transition"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-3 right-3">
            <Heart size={24} className="fill-black/50 text-white hover:fill-rose-500 transition" />
          </div>
        </div>
        
        <div className="flex flex-row items-center justify-between">
          <div className="font-semibold text-base">
            {listing.location}
          </div>
          <div className="flex flex-row items-center gap-1">
            <Star size={14} className="fill-black" />
            <span className="text-sm font-light">{listing.rating}</span>
          </div>
        </div>

        <div className="font-light text-neutral-500 text-sm">
          {listing.distance}
        </div>
        <div className="font-light text-neutral-500 text-sm">
          {listing.dates}
        </div>
        <div className="flex flex-row items-center gap-1 mt-1">
          <div className="font-semibold">
            ${listing.price}
          </div>
          <div className="font-light">night</div>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
