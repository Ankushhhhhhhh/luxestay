import { useState } from 'react';
import CategoryBar from '../components/CategoryBar';
import ListingCard from '../components/ListingCard';
import { MOCK_LISTINGS } from '../types';
import { motion } from 'motion/react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>('Amazing pools');

  const filteredListings = selectedCategory 
    ? MOCK_LISTINGS.filter(l => l.category === selectedCategory)
    : MOCK_LISTINGS;

  return (
    <div className="pb-20">
      <CategoryBar 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory} 
      />
      
      <main className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 pt-8">
        {filteredListings.length > 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8"
          >
            {filteredListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </motion.div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[50vh] gap-2">
            <h2 className="text-2xl font-bold">No exact matches</h2>
            <p className="text-neutral-500">Try changing or removing some of your filters.</p>
          </div>
        )}
      </main>
    </div>
  );
}
