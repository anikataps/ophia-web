export interface GalleryItem {
  id: string;
  caption: string;
  category: 'service' | 'sisterhood';
  gradient: string;
}

// TODO: Replace all gradient placeholders with real photos once images are available.
// Add an `image` field (e.g. image: '/gallery/food-bank.jpg') to the GalleryItem interface
// and update GalleryCard in Gallery.tsx to render <img> instead of the gradient background.
// Consider hosting images in /public/gallery/ or an external CDN (e.g. Cloudinary, Imgur).
export const galleryItems: GalleryItem[] = [
  { id: 'g1', caption: 'Food Bank Volunteer Day', category: 'service', gradient: 'linear-gradient(135deg, #1a3a2a 0%, #2d6a47 50%, #4a9968 100%)' },
  { id: 'g2', caption: 'Campus Clean-Up Initiative', category: 'service', gradient: 'linear-gradient(160deg, #1a2744 0%, #243460 40%, #3a5a9b 100%)' },
  { id: 'g3', caption: 'Literacy Tutoring Program', category: 'service', gradient: 'linear-gradient(135deg, #3a2a0a 0%, #8b6914 50%, #c9a84c 100%)' },
  { id: 'g4', caption: 'Shelter Supply Drive', category: 'service', gradient: 'linear-gradient(160deg, #2a1a3a 0%, #5a2d7a 50%, #8b4fb5 100%)' },
  { id: 'g5', caption: 'Tree Planting Community Day', category: 'service', gradient: 'linear-gradient(135deg, #1a3a1a 0%, #2a5c2a 40%, #4a8c4a 100%)' },
  { id: 'g6', caption: 'Senior Center Arts Workshop', category: 'service', gradient: 'linear-gradient(160deg, #2a1a1a 0%, #6b3030 50%, #a05050 100%)' },
  { id: 'g7', caption: 'Bid Day Celebration', category: 'sisterhood', gradient: 'linear-gradient(135deg, #1a2744 0%, #c9a84c 60%, #dfc07a 100%)' },
  { id: 'g8', caption: 'Chapter Retreat Weekend', category: 'sisterhood', gradient: 'linear-gradient(160deg, #1a3a4a 0%, #2a6a7a 50%, #4a9aaa 100%)' },
  { id: 'g9', caption: 'Annual Formal Dinner', category: 'sisterhood', gradient: 'linear-gradient(135deg, #2a1a3a 0%, #1a2744 50%, #c9a84c 100%)' },
  { id: 'g10', caption: 'Big-Little Reveal Day', category: 'sisterhood', gradient: 'linear-gradient(160deg, #3a1a2a 0%, #7a2a5a 50%, #c44a8a 100%)' },
  { id: 'g11', caption: 'Chapter Study Session', category: 'sisterhood', gradient: 'linear-gradient(135deg, #1a2a1a 0%, #2a4a3a 50%, #c9a84c 100%)' },
  { id: 'g12', caption: 'Initiation Ceremony', category: 'sisterhood', gradient: 'linear-gradient(160deg, #111b33 0%, #1a2744 40%, #a8872e 100%)' },
];
