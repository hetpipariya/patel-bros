import React, { useEffect, useState, useMemo, createContext, useContext } from "react";
import { sendUserLocation } from "./utils/sendLocation";
import { Analytics } from "@vercel/analytics/react";

import { 
  Menu, X, Star, MapPin, Gift, Camera, 
  Calendar, Phone, Mail, Instagram, Facebook, ArrowRight, 
  CheckCircle, Gem, Loader2, 
  Download, Clock, Globe, ArrowLeft, Filter, MessageCircle, Utensils, Video, Car, PartyPopper, Cake, Users, Sparkles
} from 'lucide-react';



const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState('/');
  const [navState, setNavState] = useState(null);

  const navigate = (path, state = null) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPath(path);
    setNavState(state);
  };

  const goBack = () => {
    if (currentPath !== '/') {
      navigate('/');
    }
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navState, navigate, goBack }}>
      {children}
    </NavigationContext.Provider>
  );
};

const useNavigation = () => useContext(NavigationContext);



const BRAND = {
  NAME: "PATEL BROTHERS",
  TAGLINE: "Events & Luxury Travel",
  PHONE_1: "+91 87993 93178", 
  PHONE_2: "+91 90163 91422",
  WHATSAPP: "918799393178",
  EMAIL: "patelbrothers@gmail.com",
  UPI: "8799393178@fam", 
  ADDRESS: "102, Royal Empire, Near Indira Circle, 150ft Ring Road, Rajkot, Gujarat – 360005"
};

const GLOBAL_BG_IMG = "https:
const HERO_IMG = "https:

const THEME = {
  colors: {
    bg: "bg-[#040814]",
    glass: "bg-[#0a1128]/50 backdrop-blur-xl border border-[#CDAA3B]/25 shadow-[0_12px_48px_rgba(0,0,0,0.65)] hover:bg-[#0a1128]/60 transition-all duration-500",
    gold: "text-[#D4AF37]",
    goldGradient: "bg-gradient-to-b from-[#FFD980] to-[#D4AF37] shadow-[0_8px_24px_rgba(212,175,55,0.35)]",
  },
};

const openWhatsApp = (message = "Hi, I would like to inquire about your services.") => {
  const url = `https:
  window.open(url, '_blank');
};

const getRoundPrice = (min, max) => {
  const raw = min + Math.random() * (max - min);
  return Math.ceil(raw / 1000) * 1000;
};




const CUSTOM_GALLERY_IMAGE_URLS = {
  WEDDINGS: [
    'https:
    'https:
    'https:
    'https:
    'https:
    'https:
    'https:
    'https:
    'https:
    'https:
    'https:
    'https:
    'https:
    'https:
    'https:
    'https:
    'https:
    'https:
    'https:
    'https:
    'https:
  ],

      TRIPS: [
    'https:
    'https:
    'https:
    'https:
    'https:
    'https:
    'https:
    'https:
    'https:
    'https:
    'https:
    'https:
  ],
  BIRTHDAYS: [
    'https:
    'https:
    'https:
    'https:
    'https:
    'https:
    'https:
    'https:
    'https:
],
  OTHER: [
    'https:
    'https:
    'https:
    'https:
    'https:
    'https:
    'https:
  ]
};


const ensureCount = (arr, count, fallback) => {
  if (!arr || arr.length === 0) return Array.from({ length: count }, () => fallback);
  const res = [];
  for (let i = 0; i < count; i++) res.push(arr[i % arr.length] || fallback);
  return res;
};




const LOCATION_IMAGES = {

  
  
  
  "Ladakh_Classic": "https:
  "Kashmir_Classic": "https:
  "Himachal_Classic": "https:
  "Uttarakhand_Classic": "https:
  "Rajasthan_Classic": "https:
  "Gujarat_Classic": "https:
  "Goa_Classic": "https:
  "Maharashtra_Classic": "https:
  "West Bengal_Classic": "https:
  "Odisha_Classic": "https:
  "Sikkim_Classic": "https:
  "Assam_Classic": "https:
  "Kerala_Classic": "https:
  "Tamil Nadu_Classic": "https:
  "Karnataka_Classic": "http:
  "Andhra Pradesh_Classic": "https:

  
  "Ladakh_Royal": "https:
  "Kashmir_Royal": "https:
  "Himachal_Royal": "https:
  "Uttarakhand_Royal": "https:
  "Rajasthan_Royal": "https:
  "Gujarat_Royal": "https:
  "Goa_Royal": "https:
  "Maharashtra_Royal": "https:
  "West Bengal_Royal": "https:
  "Odisha_Royal": "https:
  "Sikkim_Royal": "https:
  "Assam_Royal": "https:
  "Kerala_Royal": "https:
  "Tamil Nadu_Royal": "https:
  "Karnataka_Royal": "https:
  "Andhra Pradesh_Royal": "https:

  
  
  
  "Rishikesh": "https:
  "Haridwar": "https:
  "Nainital": "https:
  "Mussoorie": "https:
  "Shimla": "https:
  "Manali": "https:
  "Kasol": "https:
  "Dharamshala": "https:
  "Dalhousie": "https:
  "Amritsar": "https:
  "Chandigarh": "https:
  "Agra": "https:
  "Mathura": "https:
  "Vrindavan": "https:
  "Jim Corbett": "https:

  "Coorg": "http:
  "Ooty": "https:
  "Kodaikanal": "https:
  "Wayanad": "https:
  "Munnar": "https:
  "Alleppey": "https:
  "Pondicherry": "https:
  "Mahabalipuram": "https:
  "Hampi": "https:
  "Gokarna": "https:
  "Mysore": "https:
  "Tirupati": "https:
  "Kanyakumari": "https:
  "Madurai":"https:
  "Rameswaram":"https:
    
  "Lonavala": "https:
  "Mahabaleshwar": "https:
  "Alibaug": "https:
  "Mount Abu": "https:
  "Udaipur": "https:
  "Jaipur": "https:
  "Gir": "https:
  "Somnath": "https:
  "Dwarka": "https:
  "Kutch": "https:
  "Pune": "https:
  "Mumbai": "https:
  "Daman":"https:
  "Matheran":"https:
  "Nashik":"https:

  "Darjeeling": "https:
  "Gangtok": "https:
  "Sundarbans": "https:
  "Puri": "https:
  "Konark": "https:
  "Shillong": "https:
  "Kaziranga": "https:
  "Siliguri":"https:
  "Bhubaneswar": "https:
  "Tawang":"https:
  "Lachung":"https:
  "Pelling":"https:
  "Kalimpong":"https:
  "Kolkata":"https:

  
  "NORTH_DEFAULT": "https:
  "SOUTH_DEFAULT": "https:
  "WEST_DEFAULT": "https:
  "EAST_DEFAULT": "https:

  
  "WEDDING_SILVER": "https:
  "WEDDING_GOLD": "https:
  "WEDDING_PLATINUM": "https:
  "WEDDING_DIAMOND": "https:

  "BIRTHDAY_SILVER": "https:
  "BIRTHDAY_GOLD": "https:
  "BIRTHDAY_PLATINUM": "https:
};



const getImageForPlace = (place, region, type = 'Classic') => {
  
  const specificKey = `${place}_${type}`;
  if (LOCATION_IMAGES[specificKey]) return LOCATION_IMAGES[specificKey];

  
  if (LOCATION_IMAGES[place]) return LOCATION_IMAGES[place];
    
  
  if (region === 'NORTH') return LOCATION_IMAGES['NORTH_DEFAULT'];
  if (region === 'SOUTH') return LOCATION_IMAGES['SOUTH_DEFAULT'];
  if (region === 'WEST') return LOCATION_IMAGES['WEST_DEFAULT'];
  if (region === 'EAST') return LOCATION_IMAGES['EAST_DEFAULT'];
    
  return HERO_IMG;
};



const generateTripsData = () => {
  const regions = ['EAST', 'WEST', 'NORTH', 'SOUTH'];
  const trips = [];
    
  
  const regionStates = {
    EAST: ['West Bengal', 'Odisha', 'Sikkim', 'Assam'],
    WEST: ['Rajasthan', 'Gujarat', 'Goa', 'Maharashtra'],
    NORTH: ['Ladakh', 'Himachal', 'Uttarakhand', 'Kashmir'],
    SOUTH: ['Kerala', 'Tamil Nadu', 'Karnataka', 'Andhra Pradesh']
  };

  
  const CLASSIC_FACILITIES = [
    "3★/4★ Hotels", 
    "Comfort AC Vehicle (Innova/Tempo)", 
    "Shared Tour Guide", 
    "Breakfast & Dinner", 
    "Standard Welcome Kit", 
    "Group Photography", 
    "24/7 Phone Support"
  ];

  const ROYAL_FACILITIES = [
    "5★/Palace Hotels", 
    "Luxury SUV (Mercedes/Audi)", 
    "Private Chauffeur & Guide", 
    "All Meals (Gourmet Experiences)", 
    "Premium Welcome Hamper", 
    "Drone & Candid Photography", 
    "24/7 Personal Butler/Concierge"
  ];

  regions.forEach(region => {
    const states = regionStates[region];
    states.forEach((state, i) => {
        
      
      const baseStatePrice = getRoundPrice(25000, 75000); 

      for (let j = 0; j < 2; j++) {
        
        const isRoyal = j === 1;
        const planType = isRoyal ? 'Royal' : 'Classic';
        
        
        
        const calculatedPrice = isRoyal ? (baseStatePrice * 1.6) : baseStatePrice;
        const finalPrice = Math.ceil(calculatedPrice / 1000) * 1000;

        const duration = 5 + Math.floor(Math.random() * 8); 

        const itinerary = Array.from({ length: duration }, (_, dayIdx) => ({
          day: dayIdx + 1,
          title: `Day ${dayIdx + 1}: ${dayIdx === 0 ? 'Arrival' : dayIdx === duration - 1 ? 'Departure' : `Explore ${state}`}`,
          activity: dayIdx === 0 
            ? "Arrival at airport, luxury transfer. Welcome drinks & leisure." 
            : "Sightseeing key monuments, local markets, and authentic cuisine."
        }));

        
        const mainImg = getImageForPlace(state, region, planType); 
        
        
        let secondaryPlace = 'NORTH_DEFAULT'; 
        if (state === 'Rajasthan') secondaryPlace = 'Udaipur';
        else if (state === 'Kerala') secondaryPlace = 'Alleppey';
        else if (state === 'Ladakh') secondaryPlace = 'Kashmir';
        else if (state === 'Maharashtra') secondaryPlace = 'Mumbai';
        else if (state === 'West Bengal') secondaryPlace = 'Kolkata';
        
        const secImg = getImageForPlace(secondaryPlace, region);

        trips.push({
          id: `TRIP-${region}-${state}-${j}`,
          kind: 'trip',
          region: region,
          state: state,
          
          title: `${state} Expedition ${isRoyal ? 'Royal' : 'Classic'}`,
          short_desc: `Experience the hidden gems of ${state} in this exclusive ${duration}-day ${isRoyal ? 'premium luxury' : 'classic comfort'} tour.`,
          itinerary: itinerary,
          days: duration,
          price_from: finalPrice,
          price_to: finalPrice + 15000,
          company_name: "Patel Brothers Luxury",
          
          facilities: isRoyal ? ROYAL_FACILITIES : CLASSIC_FACILITIES, 
          difficulty: ["Easy", "Moderate"][Math.floor(Math.random() * 2)],
          images: [mainImg, secImg, HERO_IMG],
          popularity_score: 80 + Math.floor(Math.random() * 20),
          tags: ["Heritage", "Luxury", region, state, isRoyal ? 'Royal' : 'Classic']
        });
      }
    });
  });
  return trips;
};

const TRIPS_DATA = generateTripsData();


const REAL_MINI_TRIPS_LOCATIONS = {
  NORTH: ["Rishikesh", "Haridwar", "Nainital", "Mussoorie", "Shimla", "Manali", "Kasol", "Dharamshala", "Dalhousie", "Amritsar", "Chandigarh", "Agra", "Mathura", "Vrindavan", "Ladakh", "Jim Corbett"],
  SOUTH: ["Coorg", "Ooty", "Kodaikanal", "Wayanad", "Munnar", "Alleppey", "Pondicherry", "Mahabalipuram", "Hampi", "Gokarna", "Mysore", "Tirupati", "Kanyakumari", "Kerala", "Madurai", "Rameswaram"],
  WEST: ["Lonavala", "Mahabaleshwar", "Alibaug", "Goa", "Mount Abu", "Udaipur", "Gir", "Somnath", "Dwarka", "Kutch", "Jaipur", "Pune", "Mumbai", "Daman", "Matheran", "Nashik"],
  EAST: ["Darjeeling", "Gangtok", "Sikkim", "Sundarbans", "Puri", "Konark", "Shillong", "Kaziranga", "Kolkata", "Assam", "Kalimpong", "Pelling", "Lachung", "Tawang", "Bhubaneswar", "Siliguri"]
};


const generateMiniTrips = () => {
  const miniTrips = [];
  const TARGET_PER_ZONE = 16;
  const regions = ["NORTH", "SOUTH", "EAST", "WEST"];

  regions.forEach(region => {
    const baseLocations = REAL_MINI_TRIPS_LOCATIONS[region];
    
    for (let i = 0; i < TARGET_PER_ZONE; i++) {
      
      const locationName = baseLocations[i % baseLocations.length];
      const price = getRoundPrice(8000, 25000);
      
      const img = getImageForPlace(locationName, region); 
      
      miniTrips.push({
        id: `MT-${region}-${i+1}`,
        kind: 'minitrip',
        title: `${locationName} Getaway`.trim(),
        region: region,
        state: "India", 
        days: 2 + Math.floor(Math.random() * 3), 
        price: price,
        img: img, 
        desc: `A refreshing break to ${locationName}. Perfect for a quick recharge with best-in-class hospitality.`,
        itinerary: [
            { day: 1, title: "Arrival", activity: "Check-in, welcome drink, and local sightseeing." },
            { day: 2, title: "Exploration", activity: "Adventure activities and famous viewpoints." },
            { day: 3, title: "Departure", activity: "Breakfast and transfer to return point." }
        ],
        facilities: ["3★/4★ Stay", "Breakfast", "Local Guide", "AC Vehicle"]
      });
    }
  });
  return miniTrips;
};

const MINI_TRIPS_DATA = generateMiniTrips();


const WEDDING_PLANS = [
  {
    id: 'silver',
    title: "Silver Plan",
    price: 2000000,
    tag: "Premium",
    desc: "A beautiful beginning with elegant essentials.",
    guests: "300-500",
    features: ["4★ Banquet Venue", "Standard Floral Decor", "Buffet (20 items)", "Photography (2 Cameras)", "DJ & Sound", "Bridal Makeup (Standard)"],
    preWeddingCost: 50000,
    preWeddingDesc: "Local 1-Day Shoot (2 Changes)",
    img: LOCATION_IMAGES["WEDDING_SILVER"]
  },
  {
    id: 'gold',
    title: "Golden Plan",
    price: 4500000,
    tag: "Luxury",
    desc: "Elevated luxury with finer details and grander venues.",
    guests: "500-800",
    features: ["5★ City Hotel/Resort", "Themed Decor & Stage", "Gourmet Buffet (40 items)", "Cinematic Video + Drone", "Live Band", "Vintage Car Entry"],
    preWeddingCost: 150000,
    preWeddingDesc: "Destination Shoot (Udaipur/Goa, 2 Days)",
    img: LOCATION_IMAGES["WEDDING_GOLD"]
  },
  {
    id: 'platinum',
    title: "Platinum Plan",
    price: 10000000,
    tag: "Royal",
    desc: "A royal affair fit for kings and queens.",
    guests: "800-1500",
    features: ["Palace Venue", "Imported Exotic Flowers", "Global Cuisine (Live Counters)", "Celebrity Artist", "Helicopter Entry", "Hospitality Team"],
    preWeddingCost: 500000,
    preWeddingDesc: "International Shoot (Dubai/Thailand, 3 Days)",
    img: LOCATION_IMAGES["WEDDING_PLATINUM"]
  },
  {
    id: 'diamond',
    title: "Diamond Plan",
    price: 50000000,
    tag: "Celebrity",
    desc: "The ultimate wedding experience. Limitless luxury.",
    guests: "1500+",
    features: ["Private Island/Fort Buyout", "Designer Set Production", "Michelin Star Catering", "A-List Celebrity Performance", "Chartered Flights", "Full Concierge"],
    preWeddingCost: 1500000,
    preWeddingDesc: "European Shoot (Paris/Swiss, 5 Days)",
    img: LOCATION_IMAGES["WEDDING_DIAMOND"]
  },
];


const BIRTHDAY_PLANS = [
  {
    id: 'b-silver',
    title: "Silver Celebration",
    price: 50000,
    tag: "Joyful",
    desc: "Perfect for intimate family gatherings and friends.",
    guests: "50-100",
    features: ["Banquet Hall Decor", "Cake (3kg)", "DJ Service", "Dinner Buffet", "Welcome Drinks", "Standard Photography"],
    preWeddingCost: 0, 
    preWeddingDesc: "N/A",
    img: LOCATION_IMAGES["BIRTHDAY_SILVER"]
  },
  {
    id: 'b-gold',
    title: "Golden Bash",
    price: 150000,
    tag: "Grand",
    desc: "A grand party with premium entertainment and decor.",
    guests: "100-250",
    features: ["Themed Decor (Jungle/Princess)", "Designer Cake (5kg)", "Live Magician/Host", "Premium Buffet", "Videography", "Return Gifts"],
    preWeddingCost: 0,
    preWeddingDesc: "N/A",
    img: LOCATION_IMAGES["BIRTHDAY_GOLD"]
  },
  {
    id: 'b-platinum',
    title: "Platinum Extravaganza",
    price: 500000,
    tag: "Luxury",
    desc: "The ultimate celebrity-style birthday experience.",
    guests: "250+",
    features: ["Resort/Poolside Venue", "Exotic Flower Decor", "Live Band & DJ", "Multi-Cuisine Spread", "Drone Shoot", "Celebrity Appearance"],
    preWeddingCost: 0,
    preWeddingDesc: "N/A",
    img: LOCATION_IMAGES["BIRTHDAY_PLATINUM"]
  }
];


const DISTINCTIONS = {
  EAST: ["Sundarbans Tiger Reserve", "Darjeeling Himalayan Railway", "Konark Sun Temple", "Kaziranga National Park"],
  WEST: ["Rann of Kutch", "Statue of Unity", "Ajanta Ellora Caves", "Gir National Park"],
  NORTH: ["Taj Mahal", "Valley of Flowers", "Golden Temple", "Ladakh Monasteries"],
  SOUTH: ["Kerala Backwaters", "Hampi Ruins", "Mysore Palace", "Meenakshi Temple"]
};


const DD_OPTIONS = ["Corporate Event", "Private Party", "Exhibition", "Wedding", "Other"];



const Button = ({ children, primary, onClick, className = "", disabled = false, icon: Icon, whatsapp = false }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`
      relative overflow-hidden px-8 py-3 rounded-full font-medium tracking-wide transition-all duration-300 flex items-center justify-center gap-2 group z-10 uppercase text-xs font-bold
      transform hover:scale-105 active:scale-95
      ${whatsapp 
        ? "bg-[#25D366] text-white border border-[#128C7E] shadow-lg shadow-green-500/20" 
          : primary 
          ? "bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#050A18] shadow-lg shadow-amber-500/20 border border-amber-400" 
          : "bg-white/5 border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-white/10 backdrop-blur-md"
      } 
      ${disabled ? "opacity-50 cursor-not-allowed grayscale" : ""}
      ${className}
    `}
  >
    <span className="relative z-10 flex items-center gap-2">
      {children}
      {Icon && <Icon size={16} />}
    </span>
  </button>
);

const GlassCard = ({ children, className = "", noOverflow = false }) => (
  <div className={`${THEME.colors.glass} rounded-xl p-8 relative group hover:border-[#D4AF37]/50 transition-colors duration-500 animate-fade-in-up ${noOverflow ? '' : 'overflow-hidden'} ${className}`}>
    <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[100px] group-hover:bg-[#D4AF37]/10 transition-all duration-700 pointer-events-none" />
    <div className="relative z-10 h-full">{children}</div>
  </div>
);


const PageHeader = ({ title, subtitle, bgImage }) => (
  <div className="relative h-[40vh] w-full flex items-center justify-center mb-12 overflow-hidden">
    {}
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
      onError={(e) => e.target.style.backgroundImage = `url(${HERO_IMG})`} 
    />
    {}
    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
    
    {}
    <div className="relative z-10 text-center px-4 animate-fade-in-up">
      <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 drop-shadow-lg tracking-wider">
        {title}
      </h1>
      <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-6" />
      <p className="text-slate-200 text-lg max-w-2xl mx-auto font-light tracking-wide">{subtitle}</p>
    </div>
  </div>
);

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-16 px-4 animate-fade-in">
    <h2 className="text-4xl md:text-6xl font-serif text-[#D4AF37] mb-4 drop-shadow-lg tracking-wider">
      {title}
    </h2>
    <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-6" />
    <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light tracking-wide">{subtitle}</p>
  </div>
);



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { navigate, currentPath } = useNavigation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); 
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Trips', path: '/trips' },
    { name: 'Mini Trips', path: '/mini-trips' },
    { name: 'Weddings', path: '/weddings' },
    { name: 'Birthdays', path: '/birthdays' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#050A18]/90 border-b border-[#D4AF37]/20 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="w-full px-6 md:px-12 flex items-center justify-between">
        
        {}
        <div onClick={() => navigate('/')} className="flex items-center gap-4 group cursor-pointer z-50">
           {}
           <div className="relative h-12 w-12 md:h-14 md:w-14 rounded-full overflow-hidden border-2 border-[#D4AF37]/30 shadow-[0_0_15px_rgba(212,175,55,0.2)] group-hover:border-[#D4AF37] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-500">
              <img 
                src="logo.png" 
                alt="PB Logo" 
                className="w-full h-full object-cover" 
              />
           </div>
           
           {}
           <div className="flex flex-col">
              <span className="font-serif text-xl md:text-2xl text-white font-bold tracking-widest leading-none group-hover:text-[#D4AF37] transition-colors">
                PATEL <span className="text-[#D4AF37]">BROTHERS</span>
              </span>
              <span className="text-[8px] md:text-[9px] text-slate-400 tracking-[0.4em] uppercase opacity-70 group-hover:opacity-100 mt-1">Luxury Events</span>
           </div>
        </div>
        
        <div className="hidden xl:flex items-center gap-1 bg-black/20 backdrop-blur-sm rounded-full p-1 border border-white/5">
          {links.map((link) => (
            <button 
              key={link.name} 
              onClick={() => navigate(link.path)}
              className={`px-5 py-2 text-[10px] font-bold uppercase tracking-widest transition-all rounded-full ${isActive(link.path) ? 'bg-[#D4AF37] text-[#050A18]' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
            >
              {link.name}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-4 z-50">
          <Button primary className="hidden md:flex px-6 py-2 text-[10px] h-auto" onClick={() => navigate('/booking')}>Book Now</Button>
          <button className="xl:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {}
      {isOpen && (
        <div className="fixed inset-0 bg-[#050A18] z-40 flex flex-col pt-32 px-10 gap-6 xl:hidden animate-slide-in">
          {links.map((link, i) => (
            <div key={link.name} className="animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
              <button 
                onClick={() => { navigate(link.path); setIsOpen(false); }}
                className="text-3xl font-serif text-white font-bold uppercase tracking-widest border-b border-white/10 pb-4 block hover:text-[#D4AF37] transition-colors w-full text-left"
              >
                {link.name}
              </button>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-black/80 backdrop-blur-lg border-t border-[#D4AF37]/20 pt-20 pb-10 text-center relative overflow-hidden mt-20 w-full">
    <div className="relative z-10 w-full px-6 mx-auto">
      <div className="mb-10">
        <h2 className="text-5xl font-serif text-white font-bold tracking-widest mb-2">PATEL<span className="text-[#D4AF37]">BROS</span></h2>
        <p className="text-slate-500 text-xs tracking-[0.5em] uppercase">Est. 1998 • Rajkot, Gujarat</p>
      </div>
      <div className="flex justify-center gap-8 mb-12">
        {[Instagram, Facebook, Mail, Phone].map((Icon, i) => (
          <div key={i} className="w-12 h-12 rounded-full bg-[#0a1128] border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#D4AF37] hover:text-black transition-all cursor-pointer hover:scale-110">
            <Icon size={20} />
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-8 text-sm text-slate-400 border-t border-white/10 pt-10 text-left md:text-center max-w-7xl mx-auto">
        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-[#D4AF37]">Contact</h4>
          <p>{BRAND.PHONE_1}</p>
          <p>{BRAND.PHONE_2}</p>
          <p>{BRAND.EMAIL}</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-[#D4AF37]">Address</h4>
          <p className="max-w-xs mx-auto">{BRAND.ADDRESS}</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-[#D4AF37]">Social</h4>
          <p className="text-slate-300 hover:text-[#D4AF37] cursor-pointer transition-colors" onClick={() => openWhatsApp("Hi Patel Bros, I want to chat!")}>Chat on WhatsApp</p>
        </div>
        <div className="md:col-span-3 mt-10 text-xs text-slate-600 uppercase tracking-widest border-t border-white/10 pt-4">
          © 2025 Patel Brothers Events. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);




const HomePage = () => {
  const { navigate } = useNavigation();
  return (
    <div className="w-full">
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {}
        <div 
          className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${GLOBAL_BG_IMG})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#050A18]/20 via-[#050A18]/40 to-[#050A18] z-10" />
        </div>
        <div className="relative z-20 text-center px-4 mt-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 py-2 px-8 border border-[#D4AF37]/40 rounded-full bg-black/40 backdrop-blur-md mb-8">
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase">{BRAND.TAGLINE}</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white mb-6 leading-tight drop-shadow-2xl">
            Crafting <br /> <span className="bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent italic">Timeless Memories</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-10 font-light tracking-wide text-shadow-sm">
            Orchestrating grand Indian weddings and bespoke luxury travel experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button primary icon={Calendar} onClick={() => navigate('/booking')}>Plan Event</Button>
            <Button icon={ArrowRight} onClick={() => navigate('/trips')}>Explore Trips</Button>
          </div>
        </div>
      </div>
      <div className="py-24 px-6 md:px-12 w-full relative z-10">
        <SectionTitle title="Our Expertise" subtitle="We engineer experiences that leave a legacy." />
        <div className="grid md:grid-cols-3 gap-8 w-full">
          {[
            { t: 'Royal Weddings', d: 'Palaces & Grandeur', i: LOCATION_IMAGES["WEDDING_DIAMOND"], to: '/weddings' },
            { t: 'Luxury Travel', d: 'Curated Expeditions', i: LOCATION_IMAGES["Rajasthan_Royal"], to: '/trips' }, 
            { t: 'Mini Escapes', d: 'Weekend Getaways', i: LOCATION_IMAGES["Rishikesh"], to: '/mini-trips' }
          ].map((s, idx) => (
            <div 
              key={idx} 
              onClick={() => navigate(s.to)}
              className="group relative h-[600px] rounded-2xl overflow-hidden cursor-pointer border border-[#D4AF37]/20 shadow-2xl animate-fade-in-up"
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <img src={s.i} onError={(e) => e.target.src = HERO_IMG} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={s.t} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050A18] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 p-10 w-full">
                <div className="w-16 h-[2px] bg-[#D4AF37] mb-4 group-hover:w-full transition-all duration-500" />
                <h3 className="text-4xl font-serif text-white mb-2">{s.t}</h3>
                <p className="text-[#D4AF37] tracking-widest uppercase text-xs font-bold">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const GenericDetailPage = ({ type, id }) => {
  const { navigate, goBack, navState } = useNavigation();
    
  
  const data = useMemo(() => {
    if (navState && navState.package) return navState.package;
    
    
    if(type === 'trip') return TRIPS_DATA.find(t => t.id === id);
    if(type === 'minitrip') return MINI_TRIPS_DATA.find(t => t.id === id);
    if(type === 'wedding') return WEDDING_PLANS.find(p => p.id === id);
    if(type === 'birthday') return BIRTHDAY_PLANS.find(p => p.id === id);
    return null;
  }, [type, id, navState]); 

  if (!data) return (
    <div className="h-screen flex flex-col items-center justify-center text-white gap-4">
      <p className="text-xl">Package Not Found</p>
      <Button onClick={goBack}>Go Back</Button>
    </div>
  );

  const achievements = type === 'wedding' ? [
      { label: "Weddings Planned", val: "1000+" }, { label: "Happy Couples", val: "2000+" }, { label: "Awards Won", val: "15" }, { label: "Destinations", val: "50+" }
  ] : type === 'birthday' ? [
      { label: "Parties Hosted", val: "500+" }, { label: "Guests Entertained", val: "50k+" }, { label: "Themes Created", val: "100+" }, { label: "Smiles", val: "Infinite" }
  ] : [
    { label: "Trips Organized", val: "5000+" }, { label: "Happy Travelers", val: "15k+" }, { label: "Destinations", val: "100+" }, { label: "Satisfaction", val: "100%" }
  ];

  const displayImage = data.images ? data.images[0] : (data.img || HERO_IMG);

  return (
    <div className="min-h-screen pb-20 w-full animate-fade-in">
      {}
      <div className="relative h-[70vh] w-full">
         <img src={displayImage} onError={(e) => e.target.src = HERO_IMG} className="w-full h-full object-cover" alt={data.title} />
         <div className="absolute inset-0 bg-gradient-to-t from-[#050A18] via-[#050A18]/20 to-transparent" />
         <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full max-w-7xl mx-auto">
             <button onClick={goBack} className="flex items-center gap-2 text-[#D4AF37] mb-6 hover:underline uppercase tracking-widest text-xs font-bold">
               <ArrowLeft size={16} /> Back to Listings
             </button>
             <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 drop-shadow-lg">{data.title}</h1>
             <div className="flex flex-wrap gap-4 text-slate-200">
               <span className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm border border-white/10"><Gem size={16} className="text-[#D4AF37]" /> {data.tag || "Luxury"}</span>
               {data.days && <span className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm border border-white/10"><Clock size={16} className="text-[#D4AF37]" /> {data.days} Days</span>}
               {data.price && <span className="flex items-center gap-2 bg-[#D4AF37] text-black px-4 py-2 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(212,175,55,0.5)]">₹{data.price.toLocaleString()}</span>}
             </div>
         </div>
      </div>

      <div className="w-full px-6 md:px-12 grid md:grid-cols-3 gap-12 -mt-20 relative z-20 max-w-[1600px] mx-auto">
          <div className="md:col-span-2 space-y-12">
            {}
            <div className="bg-[#0a1128]/80 backdrop-blur-xl border border-[#D4AF37]/20 p-10 rounded-2xl shadow-2xl">
               <h2 className="text-3xl font-serif text-white mb-6">Package Overview</h2>
               <p className="text-slate-300 leading-loose text-lg font-light">{data.desc || data.short_desc}</p>
            </div>

            {}
            <div className="pl-4">
               <h2 className="text-3xl font-serif text-white mb-10 border-b border-[#D4AF37]/30 pb-4 inline-block">
                 {data.itinerary ? "Itinerary" : "What's Included"}
               </h2>
               
               {data.itinerary ? (
                 <div className="space-y-0 border-l border-[#D4AF37]/30 ml-4">
                    {data.itinerary.map((day, i) => (
                       <div key={i} className="flex gap-8 group relative pl-8 pb-12">
                          <div className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-[#050A18] border border-[#D4AF37] flex items-center justify-center font-bold text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all shadow-[0_0_10px_rgba(212,175,55,0.3)] z-10">
                              {day.day}
                          </div>
                          <div className="group-hover:translate-x-2 transition-transform duration-300">
                             <h4 className="text-xl font-bold text-white mb-2">{day.title}</h4>
                             <p className="text-slate-400 leading-relaxed text-sm">{day.activity}</p>
                          </div>
                       </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-6">
                      {data.features && data.features.map((f, i) => (
                          <div key={i} className="flex items-start gap-4 p-5 bg-white/5 rounded-xl border border-white/5 hover:border-[#D4AF37]/40 transition-colors">
                             <CheckCircle size={24} className="text-[#D4AF37] shrink-0 mt-1" />
                             <span className="text-slate-300 text-lg">{f}</span>
                          </div>
                      ))}
                  </div>
                )}
            </div>

            {}
            <div className="pt-10 border-t border-white/10">
               <h3 className="text-xl font-serif text-[#D4AF37] mb-8 text-center uppercase tracking-[0.2em]">Our Excellence</h3>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {achievements.map((ach, i) => (
                      <div key={i} className="text-center p-6 bg-[#0a1128]/60 rounded-xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/50 transition-all">
                         <div className="text-3xl font-bold text-white mb-2">{ach.val}</div>
                         <div className="text-[10px] text-[#D4AF37] uppercase tracking-wider">{ach.label}</div>
                      </div>
                  ))}
               </div>
            </div>
          </div>

          {}
          <div className="space-y-6">
            <div className="bg-[#0a1128]/80 border border-[#D4AF37]/20 p-8 rounded-2xl sticky top-28 backdrop-blur-xl shadow-2xl">
               <div className="mb-8">
                  <span className="text-slate-400 text-xs uppercase tracking-widest">Starting From</span>
                  <div className="text-5xl font-serif text-[#D4AF37] font-bold mt-2">₹{(data.price || data.price_from || 0).toLocaleString()}</div>
                  <span className="text-xs text-slate-500 block mt-2">
                    {type === 'trip' || type === 'minitrip' ? "per person + GST" : "Base Package Cost + GST"}
                  </span>
               </div>

               <div className="space-y-4 mb-8">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Experience Highlights</h4>
                  {(data.facilities || ["Luxury Transport", "Premium Stay", "Expert Team", "24/7 Support"]).map((f, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                          <Star size={14} className="text-[#D4AF37] shrink-0 fill-[#D4AF37]" /> {f}
                      </div>
                  ))}
               </div>

               <div className="space-y-4">
                  <Button primary className="w-full text-sm py-4 shadow-[0_0_20px_rgba(212,175,55,0.3)]" onClick={() => navigate('/booking', { package: data, category: type })}>
                    Proceed to Book
                  </Button>
                  <Button whatsapp className="w-full text-sm py-4" onClick={() => openWhatsApp(`Hi, I have questions about the ${data.title} package.`)} icon={MessageCircle}>
                    Chat with Expert
                  </Button>
               </div>
               
               <div className="mt-8 pt-6 border-t border-white/10 text-[10px] text-slate-500 leading-relaxed">
                  <strong className="text-slate-400 block mb-2 uppercase">Terms & Conditions</strong>
                  <ul className="list-disc pl-3 space-y-1">
                      <li>50% advance required for booking confirmation.</li>
                      <li>Cancellation policies apply as per contract.</li>
                      <li>Prices subject to seasonal changes.</li>
                      <li>GST extra as applicable.</li>
                  </ul>
               </div>
            </div>
          </div>
      </div>
    </div>
  );
};


const WeddingsPage = () => {
  const { navigate } = useNavigation();

  return (
    <div className="w-full min-h-screen">
      {}
      <PageHeader 
        title="Royal Weddings" 
        subtitle="Crafting fairytales from Silver to Diamond." 
        bgImage={LOCATION_IMAGES["WEDDING_DIAMOND"]} 
      />
      
      <div className="px-6 md:px-12 pb-20">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20 w-full">
          {WEDDING_PLANS.map((plan, i) => (
            <GlassCard key={plan.id} className="flex flex-col h-full border-t-4 border-t-[#D4AF37] hover:bg-[#D4AF37]/5">
              <div className="h-56 -mx-8 -mt-8 mb-8 overflow-hidden relative">
                  <div className="absolute top-4 right-4 z-10 bg-black/70 backdrop-blur px-3 py-1 rounded text-[#D4AF37] text-xs font-bold uppercase border border-[#D4AF37]/30">{plan.tag}</div>
                  <img src={plan.img} onError={(e) => e.target.src = HERO_IMG} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={plan.title} />
              </div>
              <h3 className="text-3xl font-serif text-white mb-2">{plan.title}</h3>
              <div className="text-slate-400 text-sm mb-6 leading-relaxed min-h-[40px]">{plan.desc}</div>
              <div className="mb-8 p-4 bg-white/5 rounded-lg border border-white/5 text-center">
                <div className="text-2xl font-bold text-[#D4AF37]">₹{plan.price.toLocaleString()}</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider">Base Package</div>
              </div>
              <div className="space-y-4 mb-8 flex-grow">
                <div className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">Highlights</div>
                {plan.features.slice(0, 4).map((f, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-slate-300">
                    <CheckCircle size={14} className="text-[#D4AF37] shrink-0 mt-0.5" /> {f}
                  </div>
                ))}
                <p className="text-[10px] text-slate-500 italic text-center pt-2">+ more details inside</p>
              </div>
              <div className="space-y-3 mt-auto">
                <Button primary className="w-full text-xs" onClick={() => navigate(`/weddings/${plan.id}`, { package: plan })}>View Full Details</Button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};


const BirthdayPage = () => {
  const { navigate } = useNavigation();

  return (
    <div className="w-full min-h-screen">
      {}
      <PageHeader 
        title="Birthday Celebrations" 
        subtitle="Make your special day truly unforgettable." 
        bgImage={LOCATION_IMAGES["BIRTHDAY_PLATINUM"]} 
      />
      
      <div className="px-6 md:px-12 pb-20">
        <div className="grid md:grid-cols-3 gap-10 mb-20 w-full">
          {BIRTHDAY_PLANS.map((plan, i) => (
            <GlassCard key={plan.id} className="flex flex-col h-full border-t-4 border-t-[#D4AF37] hover:bg-[#D4AF37]/5">
              <div className="h-64 -mx-8 -mt-8 mb-8 overflow-hidden relative">
                  <div className="absolute top-4 right-4 z-10 bg-black/70 backdrop-blur px-3 py-1 rounded text-[#D4AF37] text-xs font-bold uppercase border border-[#D4AF37]/30 flex items-center gap-2"><PartyPopper size={14}/> {plan.tag}</div>
                  <img src={plan.img} onError={(e) => e.target.src = HERO_IMG} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={plan.title} />
              </div>
              <h3 className="text-3xl font-serif text-white mb-2">{plan.title}</h3>
              <div className="text-slate-400 text-sm mb-6 min-h-[40px]">{plan.desc}</div>
              <div className="mb-6">
                <div className="text-3xl font-bold text-[#D4AF37]">₹{plan.price.toLocaleString()}</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest">Starting Package</div>
              </div>
              <div className="space-y-4 mb-8 flex-grow">
                <div className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">Includes</div>
                {plan.features.slice(0, 4).map((f, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-slate-300">
                    <Cake size={14} className="text-[#D4AF37] shrink-0 mt-0.5" /> {f}
                  </div>
                ))}
              </div>
              <div className="space-y-3 mt-auto">
                <Button primary className="w-full text-xs" onClick={() => navigate(`/birthdays/${plan.id}`, { package: plan })}>View Full Details</Button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};


const TripsPage = () => {
  const [activeRegion, setActiveRegion] = useState("NORTH");
  const [priceFilter, setPriceFilter] = useState("all");
  const { navigate } = useNavigation();

  const filteredTrips = useMemo(() => {
    let data = TRIPS_DATA.filter(t => t.region === activeRegion);
    if(priceFilter === 'low') data = data.filter(t => t.price_from < 40000);
    if(priceFilter === 'high') data = data.filter(t => t.price_from >= 40000);
    return data;
  }, [activeRegion, priceFilter]);

  return (
    <div className="w-full min-h-screen">
      {}
      <PageHeader 
        title="Luxury Expeditions" 
        subtitle="Explore the diverse landscapes of India." 
        bgImage={LOCATION_IMAGES["Himachal_Royal"]} 
      />
      
      <div className="px-6 md:px-12 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6 sticky top-24 z-30 bg-[#050A18]/80 backdrop-blur-md p-6 rounded-2xl border border-white/5 shadow-2xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {['NORTH', 'SOUTH', 'EAST', 'WEST'].map(region => (
              <button 
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest border transition-all ${activeRegion === region ? 'bg-[#D4AF37] text-black border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.4)]' : 'border-slate-700 text-slate-400 hover:text-white hover:border-white'}`}
              >
                {region}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 bg-[#0a1128] px-4 py-2 rounded-lg border border-slate-700">
              <Filter size={16} className="text-[#D4AF37]" />
              <select onChange={(e) => setPriceFilter(e.target.value)} className="bg-transparent text-sm text-white focus:outline-none cursor-pointer">
                 <option value="all" className="bg-[#050A18]">All Prices</option>
                 <option value="low" className="bg-[#050A18]">Under ₹40k</option>
                 <option value="high" className="bg-[#050A18]">₹40k+</option>
              </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 w-full">
          {filteredTrips.map((trip, idx) => (
              <div
                key={trip.id}
                onClick={() => navigate(`/trips/${trip.id}`, { package: trip })}
                className="group cursor-pointer relative h-[450px] rounded-xl overflow-hidden border border-[#D4AF37]/10 hover:border-[#D4AF37]/50 shadow-lg hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] animate-fade-in-up"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <img src={trip.images[0]} onError={(e) => e.target.src = HERO_IMG} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={trip.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A18] via-[#050A18]/50 to-transparent" />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur px-3 py-1 rounded text-[#D4AF37] text-xs font-bold uppercase flex items-center gap-1 border border-[#D4AF37]/20">
                  <Clock size={12} /> {trip.days} Days
                </div>
                <div className="absolute bottom-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest mb-2 flex items-center gap-1">
                      <MapPin size={12} /> {trip.state}
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-2 leading-tight group-hover:text-[#D4AF37] transition-colors">{trip.title}</h3>
                  <div className="flex justify-between items-end border-t border-white/10 pt-4 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase">From</span>
                      <div className="text-lg font-bold text-white">₹{trip.price_from.toLocaleString()}</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-black">
                      <ArrowRight size={16} />
                    </div>
                  </div>
              </div>
              </div>
          ))}
        </div>
        <GlassCard className="mb-20 w-full">
           <h3 className="text-2xl font-serif text-[#D4AF37] mb-8 text-center uppercase tracking-widest">Why {activeRegion} India?</h3>
           <div className="grid md:grid-cols-4 gap-6">
             {DISTINCTIONS[activeRegion]?.map((d, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/5 hover:border-[#D4AF37] transition-colors">
                  <Star size={16} className="text-[#D4AF37] mt-1 shrink-0" />
                  <span className="text-sm text-slate-300">{d}</span>
                </div>
             ))}
           </div>
        </GlassCard>
      </div>
    </div>
  );
};


const MiniTripsPage = () => {
  const { navigate } = useNavigation();
  const [activeRegion, setActiveRegion] = useState("NORTH");

  const filteredTrips = useMemo(() => MINI_TRIPS_DATA.filter(t => t.region === activeRegion), [activeRegion]);

  return (
    <div className="w-full min-h-screen">
      {}
      <PageHeader 
        title="Mini Getaways" 
        subtitle="Short breaks, lasting memories (2-4 Days)" 
        bgImage={LOCATION_IMAGES["Manali"]} 
      />
      
      <div className="px-6 md:px-12 pb-20">
        <div className="flex justify-center gap-4 mb-12">
          {['NORTH', 'SOUTH', 'EAST', 'WEST'].map(region => (
               <button 
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-8 py-2 rounded-full text-xs font-bold uppercase tracking-widest border transition-all ${activeRegion === region ? 'bg-[#D4AF37] text-black border-[#D4AF37]' : 'border-slate-700 text-slate-400 hover:text-white'}`}
              >
                {region}
              </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {filteredTrips.map((trip) => (
            <div key={trip.id} className="flex flex-col bg-[#0a1128]/80 backdrop-blur-md border border-[#D4AF37]/20 rounded-2xl overflow-hidden hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all h-full group">
              <div className="h-56 relative overflow-hidden">
                  <img src={trip.img} onError={(e) => e.target.src = HERO_IMG} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" alt={trip.title} />
                  <div className="absolute top-2 right-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded backdrop-blur font-bold uppercase tracking-wide border border-[#D4AF37]/30">{trip.days} Days</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                  <div className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest mb-1">{trip.region}</div>
                  <h3 className="text-xl font-serif text-white mb-2 group-hover:text-[#D4AF37] transition-colors">{trip.title}</h3>
                  <p className="text-slate-400 text-xs mb-6 line-clamp-2 leading-relaxed">{trip.desc}</p>
                  <div className="mt-auto border-t border-white/10 pt-4">
                    <p className="text-2xl font-bold text-[#D4AF37] mb-4">₹{trip.price.toLocaleString()}</p>
                    <div className="grid grid-cols-1">
                      <Button onClick={() => navigate(`/mini-trips/${trip.id}`, { package: trip, category: 'minitrip' })} className="w-full text-[10px] py-2 px-0">View Details</Button>
                    </div>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const BookingPage = () => {
  const { navState, navigate } = useNavigation();
  const initialData = navState?.package || null;
  const category = navState?.category || 'trip';

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [bookingId, setBookingId] = useState(null);

  const [form, setForm] = useState({
    package: initialData?.title || 'General Inquiry',
    basePrice: initialData?.price_from || initialData?.price || 0,
    guests: 2, 
    date: '', 
    name: '', phone: '', email: '',
    dd: '', 
    taluka: '', village: '', pincode: '',
    state: '', 
    district: '', 
    terms: false,
    weddingFood: 'standard',
    weddingDecor: 'standard',
    weddingTransport: 'standard',
    weddingPhoto: 'standard',
    weddingTheme: 'classic',
    preWedding: false
  });

  const updateForm = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const calculateTotal = () => {
    let total = form.basePrice;
      
    if (category === 'trip' || category === 'minitrip') {
      total = form.basePrice * form.guests;
    } else if (category === 'wedding') {
      total = initialData?.price || 0;
      
      const guestCountMatch = initialData?.guests.match(/\d+/);
      const guestCount = guestCountMatch ? parseInt(guestCountMatch[0]) : 500;
      
      if (form.weddingFood === 'premium') total += (800 * guestCount); 
      if (form.weddingFood === 'luxury') total += (1500 * guestCount);
      if (form.weddingDecor === 'royal') total += 200000;
      if (form.weddingDecor === 'floral') total += 150000;
      if (form.weddingTransport === 'vintage') total += 30000;
      if (form.weddingTransport === 'luxury') total += 50000;
      if (form.weddingPhoto === 'cinematic') total += 100000;
      if (form.weddingPhoto === 'drone') total += 200000;
      if (form.preWedding) total += (initialData?.preWeddingCost || 0);
    }
    return total;
  };

  const handleNext = () => {
    
    const validationErrors = [];
    if (!form.name || form.name.length < 3) validationErrors.push("Name must be at least 3 characters.");
    if (!form.phone) validationErrors.push("Phone is required.");
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) validationErrors.push("Valid email is required.");
    if (!form.date) validationErrors.push("Date is required.");
    if (!form.dd) validationErrors.push("Please select an Event/Trip Type.");
    if (!form.pincode || !/^\d{6}$/.test(form.pincode)) validationErrors.push("Valid 6-digit Pincode required.");
    if (!form.terms) validationErrors.push("Please accept terms.");

    if (validationErrors.length > 0) {
      
      
      console.error("Validation failed:", validationErrors.join(', '));
      
      alert(`Please fix the following issues:\n${validationErrors.join('\n')}`);
      return;
    }

    setBookingId(`PB-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`);
    setStep(2);
    window.scrollTo(0, 0);
  };

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
        setStep(3);
        window.scrollTo(0, 0);
    }, 2500);
  };

  const downloadPDF = () => {
    const invoiceText = `
PATEL BROTHERS EVENTS - OFFICIAL INVOICE
Luxury Travel & Event Management
--------------------------------------------------
Booking Reference: ${bookingId}
Date: ${new Date().toLocaleDateString()}

CLIENT DETAILS:
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Event Type: ${form.dd}
Location: ${form.village}, ${form.taluka}
District: ${form.district}, State: ${form.state} - ${form.pincode}

PACKAGE SUMMARY:
Package: ${form.package}
Category: ${category.toUpperCase()}
Travel/Event Date: ${form.date}
${category === 'trip' ? `Guests: ${form.guests}` : ''}

FINANCIALS:
Total Amount: Rs. ${calculateTotal().toLocaleString()}
Status: Payment Pending / Verified

Thank you for choosing Patel Brothers. We craft memories.
    `;

    const blob = new Blob([invoiceText], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${bookingId}_Invoice.txt`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 w-full h-auto overflow-y-auto animate-fade-in">
      <div className="w-full mx-auto max-w-7xl">
        {}
        <div className="flex justify-center mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className={`w-4 h-4 rounded-full mx-2 transition-colors duration-500 ${step >= s ? 'bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]' : 'bg-slate-800'}`} />
            ))}
        </div>

        {}
        <GlassCard className="min-h-[600px] w-full" noOverflow={true}>
              {step === 1 && (
                <div className="animate-fade-in">
                  <h2 className="text-4xl font-serif text-white mb-8 border-b border-[#D4AF37]/30 pb-4">
                      {category === 'wedding' ? 'Wedding Customization & Details' : 'Trip Details'}
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                      {}
                      <div className="space-y-6">
                          <div className="space-y-2">
                              <label className="text-xs text-[#D4AF37] uppercase font-bold tracking-wider">Selected Package</label>
                              <input value={form.package} disabled className="w-full bg-[#050A18]/50 border border-slate-700 rounded-lg p-4 text-slate-300 font-serif tracking-wide" />
                          </div>
                          <div className="space-y-2">
                              <label className="text-xs text-[#D4AF37] uppercase font-bold tracking-wider">Event/Travel Date *</label>
                              {}
                              <input type="date" name="date" value={form.date} onChange={updateForm} className="w-full bg-[#050A18] border border-slate-700 rounded-lg p-4 text-white focus:border-[#D4AF37] outline-none transition-colors [color-scheme:dark]" />
                          </div>
                          {category !== 'wedding' && (
                              <div className="space-y-2">
                                  <label className="text-xs text-[#D4AF37] uppercase font-bold tracking-wider">Number of Guests</label>
                                  <input type="number" name="guests" value={form.guests} onChange={updateForm} className="w-full bg-[#050A18] border border-slate-700 rounded-lg p-4 text-white focus:border-[#D4AF37] outline-none transition-colors" />
                              </div>
                          )}
                          
                          <div className="space-y-2">
                              <label className="text-xs text-[#D4AF37] uppercase font-bold tracking-wider">Estimated Total (Approx.)</label>
                              <div className="text-4xl text-[#D4AF37] font-bold p-6 border border-[#D4AF37]/30 rounded-xl bg-[#D4AF37]/5 text-center shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
                                  ₹{calculateTotal().toLocaleString()}
                              </div>
                          </div>
                      </div>

                      {}
                      <div>
                          {category === 'wedding' ? (
                              <div className="bg-[#050A18]/60 p-6 rounded-xl border border-slate-700 space-y-6 h-full">
                                  <h4 className="text-[#D4AF37] text-sm font-bold uppercase tracking-wider border-b border-white/10 pb-2">Customize Your Big Day</h4>
                                  
                                  <div className="grid md:grid-cols-2 gap-4">
                                      <div className="space-y-2">
                                          <label className="text-xs text-slate-400 uppercase flex items-center gap-2"><Utensils size={12}/> Food Menu</label>
                                          <select name="weddingFood" value={form.weddingFood} onChange={updateForm} className="w-full bg-[#0a1128] border border-slate-600 rounded p-3 text-white text-sm focus:border-[#D4AF37]">
                                              <option value="standard" className="bg-[#050A18]">Standard Buffet</option>
                                              <option value="premium" className="bg-[#050A18]">Premium (+₹800/pl)</option>
                                              <option value="luxury" className="bg-[#050A18]">Luxury Global (+₹1500/pl)</option>
                                          </select>
                                      </div>
                                      <div className="space-y-2">
                                          <label className="text-xs text-slate-400 uppercase flex items-center gap-2"><Sparkles size={12}/> Decor</label>
                                          <select name="weddingDecor" value={form.weddingDecor} onChange={updateForm} className="w-full bg-[#0a1128] border border-slate-600 rounded p-3 text-white text-sm focus:border-[#D4AF37]">
                                              <option value="standard" className="bg-[#050A18]">Standard Floral</option>
                                              <option value="royal" className="bg-[#050A18]">Royal Palace (+₹2L)</option>
                                              <option value="floral" className="bg-[#050A18]">Floral Fantasy (+₹1.5L)</option>
                                          </select>
                                      </div>
                                      <div className="space-y-2">
                                          <label className="text-xs text-slate-400 uppercase flex items-center gap-2"><Video size={12}/> Photo/Video</label>
                                          <select name="weddingPhoto" value={form.weddingPhoto} onChange={updateForm} className="w-full bg-[#0a1128] border border-slate-600 rounded p-3 text-white text-sm focus:border-[#D4AF37]">
                                              <option value="standard" className="bg-[#050A18]">Standard</option>
                                              <option value="cinematic" className="bg-[#050A18]">Cinematic (+₹1L)</option>
                                              <option value="drone" className="bg-[#050A18]">Drone + Cinematic (+₹2L)</option>
                                          </select>
                                      </div>
                                      <div className="space-y-2">
                                          <label className="text-xs text-slate-400 uppercase flex items-center gap-2"><Car size={12}/> Entry</label>
                                          <select name="weddingTransport" value={form.weddingTransport} onChange={updateForm} className="w-full bg-[#0a1128] border border-slate-600 rounded p-3 text-white text-sm focus:border-[#D4AF37]">
                                              <option value="standard" className="bg-[#050A18]">Standard</option>
                                              <option value="vintage" className="bg-[#050A18]">Vintage Car (+₹30k)</option>
                                              <option value="luxury" className="bg-[#050A18]">Luxury Fleet (+₹50k)</option>
                                          </select>
                                      </div>
                                  </div>
                                  <label className="flex items-center gap-4 bg-white/5 p-3 rounded border border-slate-700 cursor-pointer hover:border-[#D4AF37] transition-colors mt-4">
                                      <input type="checkbox" name="preWedding" checked={form.preWedding} onChange={updateForm} className="w-5 h-5 accent-[#D4AF37]" />
                                      <div>
                                          <span className="text-sm text-white block font-bold">Add Pre-Wedding Shoot (+₹{initialData?.preWeddingCost?.toLocaleString()})</span>
                                          <span className="text-[10px] text-slate-400">{initialData?.preWeddingDesc}</span>
                                      </div>
                                  </label>
                              </div>
                          ) : (
                              <div className="bg-[#050A18]/60 p-6 rounded-xl border border-slate-700 h-full flex flex-col justify-center items-center text-center">
                                  <Globe size={48} className="text-[#D4AF37] mb-4 opacity-50" />
                                  <h3 className="text-xl font-serif text-white mb-2">Ready for Adventure?</h3>
                                  <p className="text-slate-400 text-sm">Fill in your personal details below to secure your spot for this exclusive journey.</p>
                              </div>
                          )}
                      </div>
                  </div>

                  <h3 className="text-[#D4AF37] font-bold uppercase text-sm tracking-[0.2em] mb-6 flex items-center gap-2"><Users size={18}/> Personal Details</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <input placeholder="Full Name (Min 3 chars) *" name="name" value={form.name} onChange={updateForm} className="bg-[#050A18] border border-slate-700 rounded-lg p-4 text-white placeholder:text-slate-600 focus:border-[#D4AF37] outline-none" />
                      <input placeholder="Phone Number *" name="phone" value={form.phone} onChange={updateForm} className="bg-[#050A18] border border-slate-700 rounded-lg p-4 text-white placeholder:text-slate-600 focus:border-[#D4AF37] outline-none" />
                      <input placeholder="Email Address *" name="email" type="email" value={form.email} onChange={updateForm} className="bg-[#050A18] border border-slate-700 rounded-lg p-4 text-white placeholder:text-slate-600 focus:border-[#D4AF37] outline-none" />
                      
                      {}
                      <select 
                          name="dd" 
                          value={form.dd} 
                          onChange={updateForm} 
                          className="bg-[#050A18] border border-slate-700 rounded-lg p-4 text-white focus:border-[#D4AF37] outline-none cursor-pointer"
                      >
                          <option value="" className="bg-[#050A18]">Select Event/Trip Type *</option>
                          {DD_OPTIONS.map((opt) => (
                              <option key={opt} value={opt} className="bg-[#050A18]">{opt}</option>
                          ))}
                      </select>
                      
                      {}
                      <input placeholder="State" name="state" value={form.state} onChange={updateForm} className="bg-[#050A18] border border-slate-700 rounded-lg p-4 text-white placeholder:text-slate-600 focus:border-[#D4AF37] outline-none" />
                      <input placeholder="District" name="district" value={form.district} onChange={updateForm} className="bg-[#050A18] border border-slate-700 rounded-lg p-4 text-white placeholder:text-slate-600 focus:border-[#D4AF37] outline-none" />

                      <input placeholder="Taluka" name="taluka" value={form.taluka} onChange={updateForm} className="bg-[#050A18] border border-slate-700 rounded-lg p-4 text-white placeholder:text-slate-600 focus:border-[#D4AF37] outline-none" />
                      <input placeholder="Village" name="village" value={form.village} onChange={updateForm} className="bg-[#050A18] border border-slate-700 rounded-lg p-4 text-white placeholder:text-slate-600 focus:border-[#D4AF37] outline-none" />
                      <input placeholder="Pincode (6 digits) *" name="pincode" value={form.pincode} maxLength={6} onChange={updateForm} className="bg-[#050A18] border border-slate-700 rounded-lg p-4 text-white placeholder:text-slate-600 focus:border-[#D4AF37] outline-none" />
                  </div>

                  <div className="bg-[#0a1128] p-6 rounded-xl border border-white/10 mb-6 text-xs text-slate-400 leading-relaxed max-h-40 overflow-y-auto">
                    <strong className="text-white block mb-2 uppercase tracking-wider">Terms & Conditions</strong>
                    <ol className="list-decimal pl-4 space-y-2">
                      <li>Booking is confirmed only after receipt of 50% advance payment.</li>
                      <li>Cancellation charges apply: 10% before 30 days, 50% before 15 days.</li>
                      <li>Any damage to property during events will be charged to the client.</li>
                      <li>Force Majeure clauses apply for travel disruptions.</li>
                    </ol>
                  </div>

                  <label className="flex items-center gap-3 mb-8 cursor-pointer hover:text-[#D4AF37] transition-colors">
                      <input type="checkbox" name="terms" checked={form.terms} onChange={updateForm} className="w-5 h-5 accent-[#D4AF37]" />
                      <span className="text-slate-300 text-sm">I have read and accept the terms & cancellation policy. *</span>
                  </label>

                  <div className="flex justify-end">
                      <Button primary onClick={handleNext} className="px-10 py-4 text-sm">Proceed to Payment</Button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="text-center py-10 animate-fade-in">
                  <h2 className="text-4xl font-serif text-white mb-2">Payment Verification</h2>
                  <p className="text-slate-400 mb-10">Scan QR to pay booking token amount of <span className="text-[#D4AF37] font-bold">₹5,000</span></p>
                  
                  <div className="bg-white p-6 rounded-2xl inline-block mb-10 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                      <img src={`https:
                  </div>
                  
                  <div className="max-w-xs mx-auto space-y-4">
                      <Button primary className="w-full" onClick={handleConfirm} disabled={loading}>
                          {loading ? <><Loader2 className="animate-spin mr-2"/> Verifying...</> : 'I Have Paid'}
                      </Button>
                      <button onClick={() => setStep(1)} className="text-slate-500 text-xs uppercase tracking-widest hover:text-white underline decoration-slate-700 underline-offset-4">Back to Details</button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="text-center py-20 animate-fade-in">
                  <div className="w-32 h-32 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mx-auto mb-8 border border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.2)]">
                      <CheckCircle size={64} />
                  </div>
                  <h2 className="text-5xl font-serif text-white mb-4">Booking Confirmed!</h2>
                  <p className="text-xl text-slate-200 mb-2">Ref ID: <span className="text-[#D4AF37] font-mono tracking-wider">{bookingId}</span></p>
                  <p className="text-xl text-[#D4AF37] italic mb-10 font-serif">"Your dream journey awaits! Get ready for an unforgettable experience."</p>
                  
                  <p className="text-sm text-slate-400 mb-10 max-w-md mx-auto leading-relaxed border p-4 rounded border-slate-700 bg-[#050A18]/50">
                    Thank you for choosing Patel Brothers. Our luxury concierge team will contact you within 24 hours on your WhatsApp number for further coordination.
                  </p>
                  
                  <div className="flex flex-col md:flex-row justify-center gap-4">
                    <Button onClick={downloadPDF} icon={Download}>Download Invoice PDF</Button>
                    <Button onClick={() => navigate('/')}>Return Home</Button>
                    <Button whatsapp onClick={() => openWhatsApp(`Hi, I just booked ${form.package}. Ref: ${bookingId}.`)} icon={MessageCircle}>Chat Support</Button>
                  </div>
                </div>
              )}
        </GlassCard>
      </div>
    </div>
  );
};


const AboutPage = () => (
  <div className="pt-32 pb-20 px-4 md:px-12 w-full min-h-screen">
    <SectionTitle title="Our Legacy" subtitle="25 Years of Excellence in Hospitality" />
    <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
       <div className="space-y-8 text-slate-300 leading-loose text-lg">
          <p>
            Founded in 1998 by the visionary Patel Brothers in Rajkot, our journey began with a simple mission: to show the world the grandeur of India with unmatched hospitality.
          </p>
          <p>
            We have orchestrated over <span className="text-[#D4AF37] font-bold">1,000 royal weddings</span>, including 50+ celebrity unions, and crafted dream vacations for over 50,000 travelers. Our philosophy is simple: Every guest is God (Atithi Devo Bhava).
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
             <div className="bg-[#0a1128] p-6 rounded-xl border border-[#D4AF37]/30 text-center hover:bg-[#D4AF37]/10 transition-colors">
              <div className="text-3xl font-bold text-[#D4AF37]">1000+</div>
              <div className="text-[10px] uppercase tracking-wider">Weddings</div>
             </div>
             <div className="bg-[#0a1128] p-6 rounded-xl border border-[#D4AF37]/30 text-center hover:bg-[#D4AF37]/10 transition-colors">
              <div className="text-3xl font-bold text-[#D4AF37]">50k+</div>
              <div className="text-[10px] uppercase tracking-wider">Travelers</div>
             </div>
             <div className="bg-[#0a1128] p-6 rounded-xl border border-[#D4AF37]/30 text-center hover:bg-[#D4AF37]/10 transition-colors">
              <div className="text-3xl font-bold text-[#D4AF37]">25+</div>
              <div className="text-[10px] uppercase tracking-wider">Years</div>
             </div>
             <div className="bg-[#0a1128] p-6 rounded-xl border border-[#D4AF37]/30 text-center hover:bg-[#D4AF37]/10 transition-colors">
              <div className="text-3xl font-bold text-[#D4AF37]">5 Cr+</div>
              <div className="text-[10px] uppercase tracking-wider">Record Budget</div>
             </div>
          </div>
       </div>
       <div className="grid grid-cols-2 gap-4 relative">
          <div className="absolute -inset-4 bg-[#D4AF37]/20 blur-2xl -z-10 rounded-full"></div>
          <img src={LOCATION_IMAGES["WEDDING_PLATINUM"]} onError={(e) => e.target.src = HERO_IMG} className="rounded-2xl mt-12 w-full h-full object-cover shadow-2xl border border-[#D4AF37]/20" alt="Wedding Setup" />
          <img src={LOCATION_IMAGES["WEDDING_DIAMOND"]} onError={(e) => e.target.src = HERO_IMG} className="rounded-2xl w-full h-full object-cover shadow-2xl border border-[#D4AF37]/20" alt="Wedding Setup" />
       </div>
    </div>
  </div>
);


const GalleryPage = () => {
  const [filter, setFilter] = useState("ALL");
    
  
  const galleryCollection = useMemo(() => {
    const images = [];

    
    const weddings = ensureCount(CUSTOM_GALLERY_IMAGE_URLS.WEDDINGS, 20, HERO_IMG);
    weddings.forEach(src => images.push({ src, cat: 'WEDDINGS' }));

    
    const trips = ensureCount(CUSTOM_GALLERY_IMAGE_URLS.TRIPS, 12, HERO_IMG);
    trips.forEach(src => images.push({ src, cat: 'TRIPS' }));

    
    const bdays = ensureCount(CUSTOM_GALLERY_IMAGE_URLS.BIRTHDAYS, 12, HERO_IMG);
    bdays.forEach(src => images.push({ src, cat: 'BIRTHDAYS' }));

    
    const others = ensureCount(CUSTOM_GALLERY_IMAGE_URLS.OTHER, 8, HERO_IMG);
    others.forEach(src => images.push({ src, cat: 'OTHER' }));

    return images;
  }, []); 

  const filteredImages = useMemo(() => {
      if(filter === "ALL") return galleryCollection;
      return galleryCollection.filter(img => img.cat === filter);
  }, [filter, galleryCollection]);

  return (
  <div className="pt-32 pb-20 px-4 w-full min-h-screen">
      <SectionTitle title="Our Portfolio" subtitle="Snapshots of Joy" />
      
      <div className="flex justify-center gap-4 mb-12 flex-wrap sticky top-24 z-30 py-4 bg-[#050A18]/80 backdrop-blur">
          {["ALL", "WEDDINGS", "TRIPS", "BIRTHDAYS", "OTHER"].map(cat => (
              <button 
                key={cat} 
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 text-xs font-bold uppercase tracking-widest rounded-full border transition-all ${filter === cat ? 'bg-[#D4AF37] text-black border-[#D4AF37]' : 'border-slate-700 text-slate-400 hover:text-white'}`}
              >
                {cat}
              </button>
          ))}
      </div>

      <div className="columns-1 md:columns-3 lg:columns-4 gap-4 w-full space-y-4 px-4 md:px-12">
          {filteredImages.map((img, i) => (
              <div 
                key={i} 
                className="break-inside-avoid rounded-xl overflow-hidden group relative border border-[#D4AF37]/10 animate-fade-in-up"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <img 
                  src={img.src} 
                  onError={(e) => e.target.src = HERO_IMG} 
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy" 
                  alt={`${img.cat} Image ${i + 1}`}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Camera className="text-[#D4AF37]" size={32} />
                </div>
              </div>
          ))}
      </div>
  </div>
  );
};


const ContactPage = () => (
  <div className="pt-32 pb-20 px-4 w-full min-h-screen flex flex-col items-center">
      <GlassCard className="w-full max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
               <div>
                 <h2 className="text-5xl font-serif text-white mb-6">Get in Touch</h2>
                 <p className="text-slate-400 text-lg">Ready to plan your next grand event? Visit our HQ or call us.</p>
               </div>
               
               <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                     <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all"><Phone size={24} /></div>
                     <div>
                        <h4 className="text-white font-bold text-xl mb-1">Call Us</h4>
                        <p className="text-slate-400">{BRAND.PHONE_1}</p>
                        <p className="text-slate-400">{BRAND.PHONE_2}</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-6 group">
                     <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all"><MessageCircle size={24} /></div>
                     <div>
                        <h4 className="text-white font-bold text-xl mb-1">WhatsApp</h4>
                        <p onClick={() => openWhatsApp()} className="text-[#D4AF37] cursor-pointer hover:underline">Chat with us directly</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-6 group">
                     <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all"><MapPin size={24} /></div>
                     <div>
                        <h4 className="text-white font-bold text-xl mb-1">Visit Us</h4>
                        <p className="text-slate-400 max-w-xs">{BRAND.ADDRESS}</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-6 group">
                     <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all"><Mail size={24} /></div>
                     <div>
                        <h4 className="text-white font-bold text-xl mb-1">Email</h4>
                        <p className="text-slate-400">{BRAND.EMAIL}</p>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="bg-[#050A18]/50 p-8 rounded-2xl border border-white/10">
               <h3 className="text-2xl font-serif text-white mb-6">Send a Message</h3>
               <form className="space-y-6">
                  <input placeholder="Your Name" className="w-full bg-[#0a1128] border border-slate-700 rounded-lg p-4 text-white focus:border-[#D4AF37] outline-none" />
                  <input placeholder="Your Email" className="w-full bg-[#0a1128] border border-slate-700 rounded-lg p-4 text-white focus:border-[#D4AF37] outline-none" />
                  <textarea placeholder="How can we help you?" rows={6} className="w-full bg-[#0a1128] border border-slate-700 rounded-lg p-4 text-white focus:border-[#D4AF37] outline-none"></textarea>
                  <Button primary className="w-full py-4 text-sm">Send Message</Button>
               </form>
            </div>
          </div>
      </GlassCard>
  </div>
);



const AppContent = () => {
  const { currentPath } = useNavigation();

  const renderRoute = () => {
    
    if (currentPath === '/') return <HomePage />;
    if (currentPath === '/trips') return <TripsPage />;
    if (currentPath.startsWith('/trips/')) {
        const id = currentPath.split('/')[2];
        return <GenericDetailPage type="trip" id={id} />;
    }
    
    if (currentPath === '/mini-trips') return <MiniTripsPage />;
    if (currentPath.startsWith('/mini-trips/')) {
        const id = currentPath.split('/')[2];
        return <GenericDetailPage type="minitrip" id={id} />;
    }
    
    if (currentPath === '/weddings') return <WeddingsPage />;
    if (currentPath.startsWith('/weddings/')) {
        const id = currentPath.split('/')[2];
        return <GenericDetailPage type="wedding" id={id} />;
    }
    
    if (currentPath === '/birthdays') return <BirthdayPage />;
    if (currentPath.startsWith('/birthdays/')) {
        const id = currentPath.split('/')[2];
        return <GenericDetailPage type="birthday" id={id} />;
    }
    
    if (currentPath === '/booking') return <BookingPage />;
    if (currentPath === '/about') return <AboutPage />;
    if (currentPath === '/gallery') return <GalleryPage />;
    if (currentPath === '/contact') return <ContactPage />;

    return <HomePage />; 
  };

  return (
    <div className="relative min-h-screen text-slate-200 font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
        {}
        <div className="fixed inset-0 z-[-1]">
           <img src={GLOBAL_BG_IMG} className="w-full h-full object-cover opacity-20 animate-slow-zoom" alt="Background Texture" />
           <div className="absolute inset-0 bg-[#050A18]/90" /> {}
        </div>

        <style>{`
          @import url('https:
          :root { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Lato', sans-serif; margin: 0; padding: 0; width: 100vw; overflow-x: hidden; background-color: #050A18; }
          
          
          ::-webkit-scrollbar { width: 8px; }
          ::-webkit-scrollbar-track { background: #050A18; }
          ::-webkit-scrollbar-thumb { background: #D4AF37; border-radius: 4px; }
          ::-webkit-scrollbar-thumb:hover { background: #b38f2d; }

          h1, h2, h3, h4, .font-serif { font-family: 'Cinzel', serif; }
          
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slowZoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
          }
          @keyframes slideIn {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
          
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
          .animate-fade-in-up { animation: fadeInUp 0.6s ease-out forwards; }
          .animate-slow-zoom { animation: slowZoom 20s infinite alternate ease-in-out; }
          .animate-slide-in { animation: slideIn 0.3s ease-out forwards; }
        `}</style>

        <Navbar />
        {renderRoute()}
        <Footer />
    </div>
  );
};

export default function App() {

  useEffect(() => {
    
    if (sessionStorage.getItem("location-logged")) return;

    
    sendUserLocation()
      .then(() => sessionStorage.setItem("location-logged", "1"))
      .catch((e) => console.warn("Location logging failed:", e));
  }, []);

  return (
    <NavigationProvider>
      <AppContent />
      <Analytics />
    </NavigationProvider>
  );
}