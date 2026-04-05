import { useParams, Link } from 'react-router-dom';
import { MOCK_LISTINGS } from '../types';
import { ChevronLeft, Star, Share, Heart, MapPin, ShieldCheck, Calendar, Info } from 'lucide-react';
import { motion } from 'motion/react';

export default function ListingDetail() {
  const { id } = useParams();
  const listing = MOCK_LISTINGS.find(l => l.id === id);

  if (!listing) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh] gap-4">
        <h2 className="text-2xl font-bold">Listing not found</h2>
        <Link to="/" className="text-[#FF385C] underline">Go back home</Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 pt-8 pb-20"
    >
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{listing.title}</h1>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-4 text-sm font-semibold underline decoration-solid">
              <div className="flex items-center gap-1">
                <Star size={14} className="fill-black" />
                <span>{listing.rating}</span>
                <span className="font-light text-neutral-500">· {listing.reviews} reviews</span>
              </div>
              <div>{listing.location}</div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <button className="flex items-center gap-2 hover:bg-neutral-100 p-2 rounded-lg transition">
                <Share size={16} />
                <span className="text-sm font-semibold underline">Share</span>
              </button>
              <button className="flex items-center gap-2 hover:bg-neutral-100 p-2 rounded-lg transition">
                <Heart size={16} />
                <span className="text-sm font-semibold underline">Save</span>
              </button>
            </div>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 rounded-xl overflow-hidden h-[40vh] md:h-[60vh]">
          <div className="h-full">
            <img 
              src={listing.images[0]} 
              alt={listing.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="hidden md:grid grid-cols-2 gap-2 h-full">
            <img src={listing.images[1] || listing.images[0]} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <img src={listing.images[0]} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <img src={listing.images[1] || listing.images[0]} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <img src={listing.images[0]} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-12 mt-8">
          <div className="md:col-span-4 flex flex-col gap-8">
            <div className="flex flex-row items-center justify-between border-b pb-8">
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-bold">Hosted by {listing.host.name}</h2>
                <p className="text-neutral-500 font-light">10 guests · 4 bedrooms · 6 beds · 3 baths</p>
              </div>
              <img src={listing.host.image} className="w-14 h-14 rounded-full" />
            </div>

            <div className="flex flex-col gap-6 border-b pb-8">
              <div className="flex items-start gap-4">
                <MapPin size={24} className="mt-1" />
                <div>
                  <h3 className="font-bold">Great location</h3>
                  <p className="text-neutral-500 text-sm">95% of recent guests gave the location a 5-star rating.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ShieldCheck size={24} className="mt-1" />
                <div>
                  <h3 className="font-bold">Self check-in</h3>
                  <p className="text-neutral-500 text-sm">Check yourself in with the smartlock.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Calendar size={24} className="mt-1" />
                <div>
                  <h3 className="font-bold">Free cancellation for 48 hours</h3>
                  <p className="text-neutral-500 text-sm">Get a full refund if you change your mind.</p>
                </div>
              </div>
            </div>

            <div className="border-b pb-8">
              <p className="text-neutral-600 leading-relaxed">
                {listing.description}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold">What this place offers</h3>
              <div className="grid grid-cols-2 gap-4">
                {listing.amenities.map(amenity => (
                  <div key={amenity} className="flex items-center gap-4 text-neutral-600">
                    <Info size={20} />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="md:col-span-3">
            <div className="sticky top-28 bg-white border rounded-xl p-6 shadow-xl flex flex-col gap-4">
              <div className="flex flex-row items-center justify-between">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold">${listing.price}</span>
                  <span className="text-neutral-500">night</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <Star size={14} className="fill-black" />
                  <span className="font-bold">{listing.rating}</span>
                  <span className="text-neutral-500 underline">({listing.reviews} reviews)</span>
                </div>
              </div>

              <div className="border rounded-lg">
                <div className="grid grid-cols-2 border-b">
                  <div className="p-3 border-r flex flex-col gap-1">
                    <span className="text-[10px] font-bold uppercase">Check-in</span>
                    <span className="text-sm">Add date</span>
                  </div>
                  <div className="p-3 flex flex-col gap-1">
                    <span className="text-[10px] font-bold uppercase">Checkout</span>
                    <span className="text-sm">Add date</span>
                  </div>
                </div>
                <div className="p-3 flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase">Guests</span>
                  <span className="text-sm">1 guest</span>
                </div>
              </div>

              <button className="w-full bg-[#FF385C] text-white py-3 rounded-lg font-bold hover:bg-[#E31C5F] transition">
                Reserve
              </button>

              <p className="text-center text-sm text-neutral-500">You won't be charged yet</p>

              <div className="flex flex-col gap-3 mt-4">
                <div className="flex justify-between text-neutral-600">
                  <span className="underline">${listing.price} x 5 nights</span>
                  <span>${listing.price * 5}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span className="underline">Cleaning fee</span>
                  <span>$85</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span className="underline">Luxestay service fee</span>
                  <span>$120</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total before taxes</span>
                  <span>${listing.price * 5 + 85 + 120}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
