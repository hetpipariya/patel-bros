import { Analytics } from '@vercel/analytics/react';
import React, { useState, useEffect, useMemo, createContext, useContext } from 'react';



import { 
  Menu, X, Star, MapPin, Gift, Camera, 
  Calendar, Phone, Mail, Instagram, Facebook, ArrowRight, 
  CheckCircle, Gem, Loader2, 
  Download, Clock, Globe, ArrowLeft, Filter, MessageCircle, Utensils, Video, Car, PartyPopper, Cake, Users, Sparkles
} from 'lucide-react';



/* ==================================================================================
  1. NAVIGATION & ROUTING CONTEXT (Custom Router Implementation)
  ================================================================================== */



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



/* ==================================================================================
  2. CONFIGURATION & THEME
  ================================================================================== */



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



const GLOBAL_BG_IMG = "https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481512.jpg?semt=ais_hybrid&w=740&q=80";
const HERO_IMG = "https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481512.jpg?semt=ais_hybrid&w=740&q=80";



const THEME = {
  colors: {
    bg: "bg-[#040814]",
    glass: "bg-[#0a1128]/50 backdrop-blur-xl border border-[#CDAA3B]/25 shadow-[0_12px_48px_rgba(0,0,0,0.65)] hover:bg-[#0a1128]/60 transition-all duration-500",
    gold: "text-[#D4AF37]",
    goldGradient: "bg-gradient-to-b from-[#FFD980] to-[#D4AF37] shadow-[0_8px_24px_rgba(212,175,55,0.35)]",
  },
};



const openWhatsApp = (message = "Hi, I would like to inquire about your services.") => {
  const url = `https://wa.me/${BRAND.WHATSAPP}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};



const getRoundPrice = (min, max) => {
  const raw = min + Math.random() * (max - min);
  return Math.ceil(raw / 1000) * 1000;
};



/* ==================================================================================
  3. DATA GENERATION LAYER & CURATED IMAGE ASSETS
  ================================================================================== */



// --- CUSTOM GALLERY IMAGE SETUP (EDIT THESE URLS) ---
// These URLs will be used exclusively by the Gallery Page for full customization.

const CUSTOM_GALLERY_IMAGE_URLS = {
  WEDDINGS: [
    'https://imgs.search.brave.com/uWdNZskUd6nu9oz1BSMh4zpkqPJNQftDtc8j-Z5oWTU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vZGVjb3Jz/dXRyYWJsb2cuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzA0L2Nvcm9uYXZp/cnVzLWxvY2tkb3du/LWluZGlhbi13ZWRk/aW5nLXRoZW1lMy5q/cGc_cmVzaXplPTc4/MCw5NzUmc3NsPTE', // Elegant Decor
    'https://imgs.search.brave.com/-GlSYdHtyt3-Na3zZkKV27oPOadBcUMj8AfhkiRewF4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJiLzk2/LzNiLzJiOTYzYjEx/YTdkZTEyZjg0YWZk/ODUzYzg3YzE5ODhl/LmpwZw', // Royal Entry
    'https://imgs.search.brave.com/p5y3acaXQ9oLXS2i8GJV9eGTm1o2HhLMUwu3vrgcud8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE2LzI4LzIxLzkw/LzM2MF9GXzE2Mjgy/MTkwMjBfUW5lYzNR/YlVHRDR4SjJBY3Y0/aHhMVFVmTDhNWndw/SEouanBn', // Couple Shoot
    'https://imgs.search.brave.com/SZF8eYaaxDaojZlxOsaqqEyiAGvY0hZMuUVgU04JKtA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nZXRl/dGhuaWMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA5/LzIxOTQxNy1BbmNo/YWxBbmRQQXJhZ1dl/ZGRpbmctMTQyMi1v/cmlnLmpwZw', // Mandap
    'https://imgs.search.brave.com/1NEn9vodn67qv7nRP-UBwHQrtJTIYe-kWb2bCbze9gw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2MwL2Nl/Lzg5L2MwY2U4OTlj/NGMxOWE0MDQwOTE3/OWRmMTAxOTM3MWVm/LmpwZw', // Reception
    'https://imgs.search.brave.com/voVSudUX2aq8MfHdtNFSwgpo0evlTOPw-avP1eBJHlI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS53ZWRkaW5nei5p/bi9pbWFnZXMvMzE5/MzNiZmQwMTZlYWEx/Y2M5NDk3ZmM5MjVi/M2YzMWUvV2VkZGlu/Zy1SZWNlcHRpb24t/U3RhZ2UtRGVjb3Jh/dGlvbi1JZGVhczI2/LmpwZw',
    'https://imgs.search.brave.com/--054iRee2KSK8L1i8ROm1vKlxOGJ4x_HlpR7RI-_zM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9sdXh1/cnktd2VkZGluZy1z/dGFnZS1kZWNvcmF0/aW9uLWZsb3JhbC1h/cmNoLWNoYW5kZWxp/ZXJzLWdsYXNzLWFp/c2xlLW9wdWxlbnQt/c2V0dXAtY2FwdHVy/ZWQtaW5kb29ycy1m/ZWF0dXJpbmctbHV4/dXJpb3VzLTM3Njc5/MDA3MS5qcGc',
    'https://imgs.search.brave.com/d1A1OlcZcKboNID8DOKPLtzIsfMXY_TSVAXOCnbwea8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/d2VkZGluZ2JhemFh/ci5jb20vcGhvdG9z/L3BpY3R1cmVzLzAw/Ny8wMjIvNDE1L25l/d19tZWRpdW0vMzEx/ODg5NTIxXzQ3NDEx/NzQ5NDY4ODI0OF8x/Mzg1MzE1NTA0OTk5/OTM2MTM0X24ud2Vi/cD8xNjg2MzEyNjA0',
    'https://imgs.search.brave.com/X6R7LjaTLFUG458Est7qzs5fOn4dO91fJPD4Ox96YK4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/d2VkZGluZ2JhemFh/ci5jb20vcGhvdG9z/L3BpY3R1cmVzLzAw/MC82NzcvNDE1L25l/d19tZWRpdW0vdGFu/dmkuanBnPzE1NDgz/MjcyOTg',
    'https://imgs.search.brave.com/CvTnKmmXkjNV0isxEO2q7BVZLRnH7pNgD5ZlQmfRXnk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi93ZWRk/aW5nLXN0YWdlLXNl/dHVwLWZsb3dlci1k/ZWNvcmF0aW9uLW1h/cnF1ZWUtaW5pbWl0/YWJsZS1raW5kLWZs/b3dlcnMtbGlnaHQt/MTc3ODcxMTQ2Lmpw/Zw',
    'https://imgs.search.brave.com/OlqqXqhosENCBdDT_HrQ49554WqwgluYoudoklCc65A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3RheXZpc3RhLmNv/bS9ibG9nL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDI1LzAzL2Nv/dmVyLWltYWdlLXZp/a3Rvci1idWR5a2Et/dmlhLWRyZWFtc3Rp/bWUuanBn',
    'https://imgs.search.brave.com/mSFNgUyFlY2b4s0ZU7q6JZwosYHQgYzlh3B6iyLBZG8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jdXN0/b210b3Vyc2luZGlh/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8xMi9EZXN0/aW5hdGlvbi1XZWRk/aW5nLWluLUluZGlh/LTEud2VicA',
    'https://imgs.search.brave.com/Gzggu4IQDNAswfqCLHQy72W8adRKOMIkXVdGRJUIW3M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVsbGFyZXNvcnRz/LmNvbS9pbWFnZXMv/bmV3LXdlZGRpbmcw/MDEtamFuMDktMi5q/cGc',
    'https://imgs.search.brave.com/AREykCLj5ob5-nsAxrcpzk6bQDZoc2mTKz1fZPNjp18/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVsbGFyZXNvcnRz/LmNvbS9pbWFnZXMv/bmV3LXdlZGRpbmcw/MDEtbWFyY2gtMjQu/d2VicA',
    'https://imgs.search.brave.com/DRuxEbUQGtWFoW_ktAIKv2fDwMNA1jm4vYprr1ykfSQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/aG90b3JlYWxpc3Rp/Yy13ZWRkaW5nLXZl/bnVlLXdpdGgtaW50/cmljYXRlLWRlY29y/LW9ybmFtZW50c18y/My0yMTUxNDgxNDY4/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDAmcT04MA',
    'https://imgs.search.brave.com/NQ-XL9CJ-ZFdTrHB0cJ1RIhSk0sqjUAEYRZpUEJjcok/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmlt/Z3VyLmNvbS90SnFD/ZEk5LmpwZWc',
    'https://imgs.search.brave.com/GIMXRWgttkYnEvV_3EA6YpNIIHjjHDCkPuT_ferayDA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWxmYWF6cGhvdG9n/cmFwaHkuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE5LzAx/L01BLVdlZGRpbmct/MDE4NC5qcGc',
    'https://imgs.search.brave.com/wtZq6H6tGu9w7gzUbMD9Lm9QrfkjG_wi25f5tRR11ME/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/d2VkZGluZ2JhemFh/ci5jb20vcGhvdG9z/L3BpY3R1cmVzLzIz/MjkyNC9vcmdpbmFs/L3Byb2ZpbGVfcGlj/XzEwMDE4ODIyMjQu/anBn',
    'https://imgs.search.brave.com/jw28ZJmxfMzfrIzLjhAypzsgN8udOWBVUiEf13spNlI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/d2VkZGluZ2JhemFh/ci5jb20vcGhvdG9z/L3BpY3R1cmVzLzI0/NzYyMC9vcmdpbmFs/L3Byb2ZpbGVfcGlj/XzEwMDAxMTYxNDIu/anBn',
    'https://imgs.search.brave.com/T70d8a-RiBYYeCXKAr1qqXXBH09NWLFUUR911Sjo0WY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1hcGkueG9ncnAu/Y29tL2ltYWdlcy9k/MTFmNTJlMC01ZGYw/LTRjMTEtYTgwOC1j/Y2FkZWE5ZjUwNTl-/cnNfNzY4LmgtY3Jf/ODEuMC4xMzc3Ljk3/Mg',
    'https://imgs.search.brave.com/jw28ZJmxfMzfrIzLjhAypzsgN8udOWBVUiEf13spNlI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/d2VkZGluZ2JhemFh/ci5jb20vcGhvdG9z/L3BpY3R1cmVzLzI0/NzYyMC9vcmdpbmFs/L3Byb2ZpbGVfcGlj/XzEwMDAxMTYxNDIu/anBn'
  ],

     TRIPS: [
    'https://imgs.search.brave.com/h48IN8YBv7sUvC-L2ScPW3F6CI1Ly7mOK31C3ieC6LM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NjE5NDE3/NzA1MDUtOWZlNWMx/YzUwMDJlP2l4bGli/PXJiLTQuMS4wJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4TVROOGZHeGxh/Q1V5TUd4aFpHRnJh/SHhsYm53d2ZId3dm/SHg4TUE9PSZmbT1q/cGcmcT02MCZ3PTMw/MDA', // Ladakh
    'https://imgs.search.brave.com/nZm5unsLR-TjavTYFLqLN3jQnZAbAaWiKS2YH_7GEbU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjY1/NzE0NDMyL3Bob3Rv/L2J1cmthLWNsYWQt/a2FzaG1pcmktd29t/ZW4td2Fsa2luZy1v/bi1wYXRod2F5LWFs/c28tc2Vlbi1mYWxs/ZW4tbGVhdmVzLXNw/cmVhZC1hbGwtb3Zl/ci1rYXNobWlyLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1w/Q3A1dXZjOGppVTl2/cW5tclRzRktWdWEt/M2tLblo4TWt4TDhR/OEZwYnV3PQ', // Kashmir
    'https://media.istockphoto.com/id/489477538/photo/temple-on-the-water-in-india.jpg?s=612x612&w=0&k=20&c=NkJItW6gqI8wZTIJ-GtzD3hZku2E6ElJAhzYG8puUsY=', // Kerala
    'https://imgs.search.brave.com/seUtdgdxBdZoeV6dgfjkJY_kMV2x09RDPX6lTIdLNAA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjcy/MTU3MzM5L3Bob3Rv/L21laHJhbmdhcmgt/Zm9ydC1pbi1qb2Ro/cHVyLXJhamFzdGhh/bi1pbmRpYS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9amJE/WXQxN19DRTFodjVu/UjFFdldXeFRyWFdS/WlN5dmVsdng3Zkls/cWtNND0', // Rajasthan Palace
    'https://imgs.search.brave.com/f65ZLfVzNK4yciyIQCib3HoovBdpE6weBsEb8K7e3mM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aG9saWRpZnkuY29t/L2ltYWdlcy9iZ0lt/YWdlcy9NQUhBQkFM/RVNIV0FSLmpwZw', // Sikkim
    'https://imgs.search.brave.com/FI5xpoavdPYHNqULgLYiwH2LTWZhxEexbbQx96BEs3k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTMv/ODcyLzE3Ni9zbWFs/bC9zcmktbWFoYS1i/aGFpcmF2YXItcnVk/cmEtYWFbGF5hbS1p/cy1hbi1pbmRpYW4t/ZmFtb3VzLXRlbXBs/ZS1hdC10aXJ1dmFk/aXNvb2xhbS1jaGVu/Z2FscGF0dHUtdGFt/aWxuYWR1LXNvdXRo/LWluZGlhLXRoZS1m/YW1vdXMtaGluZHUt/Z29kLXRlbXBsZS1p/bmRpYXMtYmVzdC10/b3VyaXNtLXBsYWNl/LWZyZWUtcGhvdG8u/anBn',
    'https://imgs.search.brave.com/0FlfbQ5pzB5Axe8zSi9Bu8Mk-5w-J7vGTvKzATP-J1o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDk3/Njg2NTkzL3Bob3Rv/L2hvdXNlYm9hdC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/M1UyMVluWU9DZ0Yt/MGxmSEFYNHZTMEtH/TDVySEhNZE1xZzJH/eEZUT0RSOD0',// Sundarbans
    'https://imgs.search.brave.com/s6Y4i1tDlXWEsszwn4S-A7hxGJ1kC2c67pqQgqiEmY0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/Mzg4MTQxNzUxODct/YjdmYmMxYTFlNDZl/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjEuMCZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE1ueDhiV0Zr/YUhsaEpUSXdjSEpo/WkdWemFIeGxibnd3/Zkh3d2ZIeDhNQT09',
    'https://imgs.search.brave.com/tyRqC1Cgpqmo9gWcJxh8foyWujBV-_490r2Sw98XDqk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJhdmVsYW5k/bGVpc3VyZWFzaWEu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy9z/aXRlcy82LzIwMjUv/MDIvMTQxNDQ1Mjkv/am9yLWJhbmdsYS10/ZW1wbGUtYmlzaG51/cHVyLWltYWdlLWNy/ZWRpdC1maXJvai1h/bGktdW5zcGxhc2gt/Mi5qcGVn',
    'https://imgs.search.brave.com/sOnz9Dwt_6J8-AOfBMLWuGrp11ZY-kt_ET1EbjVjkfk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTM1/NTcwMTE3L3Bob3Rv/L2dvbGRlbi10ZW1w/bGUtaW4tYW1yaXRz/YXItcHVuamFiLWlu/ZGlhLndlYnA_YT0x/JmI9MSZzPTYxMng2/MTImdz0wJms9MjAm/Yz00Ny1WM2VZcTdN/cWpEb1N0VEFzYlRq/OU9KaXJwaVZOR1Rs/VE95ajNoTjhZPQ',
    'https://imgs.search.brave.com/3xGCHAcPM-zKMSq-iNZETjMT1JuwlkImwDOrLp3w77E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMyLnRyaXBvdG8u/Y29tL21lZGlhL2Zp/bHRlci9ubC9pbWcv/MTU1NDYvVHJpcERv/Y3VtZW50LzE0NTM3/OTg1ODJfbGFtX2Rh/bF9sYWtlLmpwZw',
    'https://imgs.search.brave.com/GIXYjQ1eMTW1hmXASWCzwQPIa4ftuGDs_PkAAN6cFWA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly83NDY1/NzdmMC5kZWxpdmVy/eS5yb2NrZXRjZG4u/bWUvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjUvMDgvVmFsbGV5/LU9mLUZsb3dlcnMu/YXZpZg'
  ],
  BIRTHDAYS: [
    'https://imgs.search.brave.com/uJu-7KvmWVc5suGm27E4Ww4UrwB3NHB3d9RP2kywLkE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YmFsbG9vbmRla29y/LmNvbS8xNC8xNzU4/MzU2NzE5MDA0Lndl/YnA', // Cake cutting
    'https://imgs.search.brave.com/jXTtqNX6M-kyXWWsjrcaaIx0gHdMDIphGFqHfGb0tFg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzBmLzhh/LzQ3LzBmOGE0NzQy/ZjQwMGY5N2UwZGNk/ZjExNGYzODRmYWIx/LmpwZw', // Party lights
    'https://imgs.search.brave.com/eWmH5RgJo3AmH550k-0IpaDDXvU_DRg38THMg_X_7PE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg2LzUx/LzJhLzg2NTEyYTEx/NDY5NzQyNDA0ZWQw/ZThiOTQ5MTdiZTcy/LmpwZw',
    'https://imgs.search.brave.com/2OMNMMeaDAV3R2EufFGsN2SJUQ0sjsg7fLE32B75uLg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YmFsbG9vbmRla29y/LmNvbS8xNC8xNzYw/NjgwNDc0NjgzLndl/YnA',
    'https://imgs.search.brave.com/6addtCrz1tS7V5bNeDs8OR-GBJ5YmFscVMzk2veGvyc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc2l0ZS1zdGF0/aWMuY29tL3VzZXJG/aWxlcy84MDUvaW1h/Z2UvYmlydGhkYXkt/dGhlbWUtaWRlYXMu/anBn',
    'https://imgs.search.brave.com/mc_KurGRAcM6JiXGqeyyXaVuu5kO12d8Kxel_DDiu4M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzMzL2U2/LzRjLzMzZTY0Y2Uz/NDI5ZjI1NmQ4NWNi/ZWIyOTlmMzllZDU2/LmpwZw',
    'https://imgs.search.brave.com/nauOu0wNCO6X4ha-IhE6Qlakwg01ExXInrye4pUehQ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGVlcnNwYWNlLmNv/bS9yZXNvdXJjZXMv/d3AtY29udGVudC91/cGxvYWRzL0xvY2F0/ZWQtb24tdGhlLW1p/bGxzLWRpc3RyaWN0/LW9mLU9ybGFuZG8u/LVRvbnMtb2YtYnVz/aW5lc3NzLXJlc3Rh/dXJhbnRzLWNvZmZl/ZS1zaG9wcy1hbmQt/YmFycy1hcm91bmQu/LTEtZTE3NTg3NTIy/Nzk5OTctMTAyNHg1/OTQuanBn',
    'https://imgs.search.brave.com/21XiCEi04b2Ppj6HY0rEoboYUX1Q7wXjGtqcQdhOocw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/MDI1MzY0NS9waG90/by9zaG90LW9mLWFu/LWVsZWdhbnRseS1k/ZWNvcmF0ZWQtdGFi/bGUtYXQtYS13ZWRk/aW5nLXJlY2VwdGlv/bi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9czg4Umk0YW85/NnlLTzBYd0M2dU1Q/dHh4VjBQSy1pdGVp/UnVGM0QzWmZEWT0',
    'https://imgs.search.brave.com/yz8GD9z-T_InH2163l1h10aXT6Dv9kqDqBNXa7uQoKM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJiLzk3/LzA0LzJiOTcwNDA2/OWRjYmNkM2QwYzE3/NTE0NzE0ZjQzYzM2/LmpwZw'  
],
  OTHER: [
    'https://imgs.search.brave.com/Vns4m9lfnAGDsiMKrf8co3YfceP4tJ0QMJd_XdxydX4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmFmYW5lbGxpZXZl/bnRzLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8wNS9z/dG9yeS1ib29rLWJh/bGwtMjItZXZlbnQu/anBn', // Corporate
    'https://imgs.search.brave.com/doXsLO97v7qxDmLehbZeF43fh9pGE_kvLKUdvP8Rnbg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzA1L2Iz/LzIzLzA1YjMyMzRj/MzYyNzk1Yzg4NWJl/ZWM5NmUyYzBjNTg0/LmpwZw', // Conference
    'https://imgs.search.brave.com/Qrz-Ze0Ji5VTycWn2YBdGo_tpCMcXZv5890bAT8wFlk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9sdXh1/cnktZXZlbnQtcmVk/LWNhcnBldC1saWdo/dGluZy1zdWl0YWJs/ZS1hd2FyZHMtY2Vy/ZW1vbnktdmlwLWdh/dGhlcmluZy0zMzYz/Nzc2NDQuanBn', // Private event
    'https://imgs.search.brave.com/NytcXMX7gts_WVw7FnweQVAFv-xb7JGS0RHrUqQ2iqs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMjAz/NDg1MS9wZXhlbHMt/cGhvdG8tMjAzNDg1/MS5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA',
    'https://imgs.search.brave.com/aQEUzcm9mvixyCnhnrjMPwO4aP6IOcAjz-A29a_8auM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wZW9wbGUtZW5q/b3lpbmctbXVzaWMt/Y29uY2VydC1uaWdo/dF8xMDQ4OTQ0LTEw/NDA5ODQzLmpwZz9z/ZW10PWFpc19oeWJy/aWQmdz03NDA',
    'https://i.pinimg.com/736x/e0/b5/2a/e0b52a88b36583d87347a63b150dc2de.jpg',
    'https://images.squarespace-cdn.com/content/v1/63c590e9b5e6686017167772/b1190781-a333-42d4-9cb6-31ee0c6a787b/Amie-Bone-Flowers-at-The-Lanesborough-24%2B%281%29.jpg'
  ]
};



// Helper function to ensure we get the required number of images (used by GalleryPage)
const ensureCount = (arr, count, fallback) => {
  if (!arr || arr.length === 0) return Array.from({ length: count }, () => fallback);
  const res = [];
  for (let i = 0; i < count; i++) res.push(arr[i % arr.length] || fallback);
  return res;
};
// --- END CUSTOM GALLERY IMAGE SETUP ---


// --- MODIFIED LOCATION_IMAGES FOR CLASSIC/ROYAL DISTINCTION ---
const LOCATION_IMAGES = {

  // ==============================================================================
  // --- TRIPS DATA (STATE/REGION LEVEL) IMAGES - CLASSIC VERSIONS (Standard) ---
  // ============================================================================
  "Ladakh_Classic": "https://imgs.search.brave.com/F84LUJ1eZ2YbWqA9rHoNrg2dA_QD9ll8wXGw8_xMEmU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaWFw/aG90b2dyYXBoeS5p/bi9hc3NldHMvaW1n/L2Jsb2cvYmxvZy01/ODQxMjE5NTIuanBn", // Classic Ladakh
  "Kashmir_Classic": "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1000", // Classic Kashmir
  "Himachal_Classic": "https://imgcld.yatra.com/ytimages/image/upload/v1484282643/Manali_overview1.jpg", // Classic Himachal
  "Uttarakhand_Classic": "https://uttarakhandtourism.gov.in/assets/media/UTDB_media_logo1746688411lakshman-jhula-bridge-rishikesh-uttrakhand-city-1-hero.jpg", // Classic Uttarakhand
  "Rajasthan_Classic": "https://imgs.search.brave.com/l5fUPKE4VcLQ6wOUl3wWV0rJA0QiruIBwCG2f_k3Hdg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTIw/NTE4NzYwL3Bob3Rv/L2NpdHktcGFsYWNl/LWFuZC1sYWtlLXBp/Y2hvbGEtdWRhaXB1/ci1pbmRpYS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9WjY5/cUNOVDVhcExhU3cz/UklRcVFoMWhJT0pO/WmxKTDlKdGZZVW1x/c1pSRT0", // Classic Rajasthan
  "Gujarat_Classic": "https://imgs.search.brave.com/Is87tohbQVWKWR9ERCw-GAFDR1o3aF1KNVi57qG-mYY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dHJpcHNhdnZ5LmNv/bS90aG1iLzJyQ3Y2/cEpvWDN1YXNMNEdR/R01hX3NHT19Haz0v/MTUwMHgwL2ZpbHRl/cnM6bm9fdXBzY2Fs/ZSgpOm1heF9ieXRl/cygxNTAwMDApOnN0/cmlwX2ljYygpL0dl/dHR5SW1hZ2VzLTU1/MjU2MDkwNy01YTdh/OTdlM2Q4ZmRkNTAw/Mzc3NmRjNjYuanBn", // Classic Gujarat
  "Goa_Classic": "https://imgs.search.brave.com/AUfbpM3HPbzRRqihG7XYBb4p1Ugd7YA3jy2k5zDiJoA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzQ5Lzg1LzM4/LzM2MF9GXzI0OTg1/Mzg0M19LUE9BNHBD/eEF5VGdHMFBIUUJr/MkFtQzdMWVFwaDUw/cy5qcGc", // Classic Goa
  "Maharashtra_Classic": "https://s7ap1.scene7.com/is/image/incredibleindia/1-pratapgarh-fort-mahabaleshwar-maharashtra-2-city-hero?qlt=82&ts=1726668937680", // Classic Maharashtra
  "West Bengal_Classic": "https://images.unsplash.com/photo-1545324367-8997ba3b801e?q=80&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Classic West Bengal
  "Odisha_Classic": "https://imgs.search.brave.com/QSKYJzm5GGSIl8znqCy4yyp18i2ElXCxxWiWL0xE4hQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMyLnRyaXBvdG8u/Y29tL21lZGlhL2Zp/bHRlci9ubC9pbWcv/MzA3MjU4L1RyaXBE/b2N1bWVudC8xNTkz/ODU1Nzg2X2RzYzA4/MTk1LmpwZy53ZWJw", // Classic Odisha
  "Sikkim_Classic": "https://imgs.search.brave.com/09XnLma2oOIUm8e7uaxbdF6dmW00-lxvFSii17-QL4s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2VmLzZi/L2M1L2VmNmJjNTJh/ZDA2YjllMGRjYTQ0/MDg0N2JjNmQyMTQ0/LmpwZw", // Classic Sikkim
  "Assam_Classic": "https://imgs.search.brave.com/3HuS8Fg9dxFx40_vhMsJK3ETDv5oPBDh9gQoUpGK8Jw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEzLzg5LzI5LzM4/LzM2MF9GXzEzODky/OTM4NDlfd0RWZDdo/M05ueTdwaE41b2NR/QkgwSFQxS1hrQWpa/S3EuanBn", // Classic Assam
  "Kerala_Classic": "https://wallpapercat.com/w/full/7/7/2/851927-3840x2160-desktop-4k-kerala-background.jpg", // Classic Kerala
  "Tamil Nadu_Classic": "https://imgs.search.brave.com/rnrVdcRf8gSn4DUegVK3GiKNbZA4sITDZdbaLhP7TAM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWFkdXJhaWNvcnBv/cmF0aW9uLmNvLmlu/L2ltZy9iYW5uZXIv/YmFubmVyMy5qcGc", // Classic Tamil Nadu
  "Karnataka_Classic": "http://r1imghtlak.mmtcdn.com/1f44a672-3b7a-4287-8560-555f13824205.jpg?downsize=583:388", // Classic Karnataka
  "Andhra Pradesh_Classic": "https://imgs.search.brave.com/OIFvASP-JICyZXnWh_N3QBAFhSFcr8hmBFtIZ3ESAJ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvdGlydXBhdGkt/YmFsYWppLXU5MDhz/MnptOWR2ZG45ejIu/anBn", // Classic Andhra Pradesh

  // --- TRIPS DATA (STATE/REGION LEVEL) IMAGES - ROYAL VERSIONS (Luxury) ---
  "Ladakh_Royal": "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1000&h=1000&fit=crop&crop=faces,entropy&blend=333&sat=1.3&hue=10&w=1200&h=800", 
  "Kashmir_Royal": "https://imgs.search.brave.com/KADL7mZRe3Xrd1HuZ3-NRetd9YVWdpnFfoLQpDZL9Kc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2lsZGZyb250aWVy/c3RyYXZlbC5jb20v/bWVkaWEvY2FjaGUv/Z2FsbGVyeV9pbWFn/ZS91cGxvYWQvbWly/cm9yL2RocnV2LXdp/bGRmcm9udGllcnN0/cmF2ZWwtY29tL2U4/MWZlMzc0X0hvdXNl/Ym9hdGxha2V2aWV3/RGFsbGFrZVNyaW5p/Z2FyZHJlYW1zdGlt/ZTQyNzA5ODIyLmpw/ZWc", // Royal Kashmir (houseboat/palace view)
  "Himachal_Royal": "https://imgs.search.brave.com/dS12J6caE22mlU0F5P7YEcD5nM6AE7Vaw20T3OzQbXg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMyLnRyaXBvdG8u/Y29tL21lZGlhL2Zp/bHRlci90c3QvaW1n/LzQ2MTU2OC9TcG90/RG9jdW1lbnQvMTU1/MjQ4MzMzMl8xNTUy/NDgzMzMwNDk0Lmpw/Zy53ZWJw", // Luxury mountain resort view
  "Uttarakhand_Royal": "https://imgs.search.brave.com/FB6qHmDa4EjbZA2LkkpYr7QighgEQTePKVR6jv-3MP0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTEudGhyaWxsb3Bo/aWxpYS5jb20vZmls/ZXN0b3JlL244NzBo/d3h0Y2Q5YTI5aGZl/b3oyd2Y3YjZ3bWVf/c2h1dHRlcnN0b2Nr/XzE2NDA0MTEyNjMu/anBn", // Ganges Luxury Spa Resort
  "Rajasthan_Royal": "https://imgs.search.brave.com/yM-y6rgxuVkAk5z7IVvz8lrS3_lZAEB-ewOPSwIgJ3U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NjE5NjI0/MDQwMDMtZTBjYTQw/ZGE0MGVmP2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZpeGxpYj1yYi00/LjEuMCZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE1U/ZDhmSEpoYW1GemRH/aGhibnhsYm53d2ZI/d3dmSHg4TUE9PQ", // Rajasthan Palace/Fort luxury stay
  "Gujarat_Royal": "https://imgs.search.brave.com/l4LMChFyz87XPylJAz7ZqaJXns1nbDfv_DwzOuRkmdE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z3VqYXJhdHRvdXJp/c20uY29tL2NvbnRl/bnQvZGFtL2d1anJh/dHRvdXJpc20vaW1h/Z2VzL2hvbWVfcGFn/ZS9TT1UuanBn", // Luxury Tent near Rann of Kutch
  "Goa_Royal": "https://imgs.search.brave.com/-KPbIlQX8br28XF7Rs1akrN8rr2GdB1FWLnHkapByOk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92bC1w/cm9kLXN0YXRpYy5i/LWNkbi5uZXQvc3lz/dGVtL2ltYWdlcy8w/MDAvNTk4LzgyNS9l/NjEzMTQ5MmExYzE2/MTEyZjdkZGI1Yzc0/MTE5NjVhNC94NTQw/Z3QvU2lucXVlcmlt/LV9mb3J0LmpwZw", // Private beach villa in Goa
  "Maharashtra_Royal": "https://imgs.search.brave.com/T_pwUPEO0osiDwT6Gv426_ZE_G-V0ZiRhYFMLcYYvk4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dHJlZWJvLmNvbS9i/bG9nL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE4LzA2L011bWJh/aS5qcGc", // Taj Palace, Mumbai or luxury Lonavala
  "West Bengal_Royal": "https://imgs.search.brave.com/qM3NYM1xqqCiNQjN76YzHP76u3lw7l8ZH2o0HVzNEUE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aG9saWRpZnkuY29t/L2ltYWdlcy9iZ0lt/YWdlcy9EQVJKRUVM/SU5HLmpwZw", // Colonial Luxury Hotel in Kolkata
  "Odisha_Royal": "https://imgs.search.brave.com/iBbZhcOboc6Rb0GziWqQycFNOe5ewxepfpU1_so0uiQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b2Rpc2hhLXRvdXJp/c20ub3JnL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzEyL3Rl/bXBsZXMuanBn", // Puri beachfront luxury resort
  "Sikkim_Royal": "https://imgs.search.brave.com/krfbyTLZ8snXuQqpNwNxvza7GGTRydR6AAuX83AjNBM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNDI2/ODczNS5qcGc", // Luxury Gangtok view
  "Assam_Royal": "https://imgs.search.brave.com/fnwTMIjlSrPtYiUe7ury302-E-AnW_nc4rOX2TQr8s4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDU4/MzA4MDU1L3Bob3Rv/L3dvbWVuLWhhcnZl/c3QtdGVhLWxlYXZl/cy1qb3JoYXQtYXNz/YW0taW5kaWEuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWJt/MnphWXdwTVdBazVG/ZzNFMWJuVUJlVVpK/ODVaTUR5dUxVN2VZ/VVJfcUk9", // Tea plantation luxury bungalow
  "Kerala_Royal": "https://imgs.search.brave.com/TO5z-FqETgrOVv-mJOQ_d-WF80BEkCkchGmj7Q1QAVo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z3Rob2xpZGF5cy5p/bi93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OS8wNy93YXRlci1i/b2F0LWtlcmFsYS5q/cGc", // Alleppey luxury houseboat
  "Tamil Nadu_Royal": "https://imgs.search.brave.com/PXbpuLVIQF3fTXY3y_gPRohYAQogkwdo29GjLvTJzkM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmFtYm9vdHJhdmVs/LmNvLnVrL2ZpbGVz/L2ltZ19jYWNoZS81/MDEzNC8xNDAwX18x/NTA5NzEzMDI5X01h/ZHVyYWltZWVuYWtz/aGkuanBnPzE1MDk3/MTMyMzQ", // Chennai 5 star hotel / resort
  "Karnataka_Royal": "https://imgs.search.brave.com/On7G7R0Q5Ltq8LXoF7SoRMEn95mgUZ7ZSJ1iMKb_D70/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9rYXJu/YXRha2F0b3VyaXNt/Lm9yZy9fbmV4dC9z/dGF0aWMvbWVkaWEv/bmV3c2xldHRlci5h/OWE3ZmNmYi5zdmc", // Coorg luxury stay
  "Andhra Pradesh_Royal": "https://imgs.search.brave.com/7n0nJNewNXj6BUT_ExpcIeIERl-g7liQlVKP7Wgnbg0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z3Rob2xpZGF5cy5p/bi93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OS8wNy9BbmRhbWFu/LWhvbGlkYXktcGFr/YWdlcy02ODB4NTAw/LmpwZw", // Visakhapatnam beachfront resort

  // ==============================================================================
  // --- MINI TRIPS (SPECIFIC LOCATION LEVEL) IMAGES - UNCHANGED ---
  // ==============================================================================
  "Rishikesh": "https://uttarakhandtourism.gov.in/assets/media/UTDB_media_logo1746688411lakshman-jhula-bridge-rishikesh-uttrakhand-city-1-hero.jpg",
  "Haridwar": "https://s7ap1.scene7.com/is/image/incredibleindia/ganga-ghat-haridwar1-attr-hero?qlt=82&ts=1726645870499",
  "Nainital": "https://thumbs.dreamstime.com/b/nainital-india-showcases-serene-lake-bordered-lush-forested-hillside-buildings-nestled-along-slope-displaying-mix-368152990.jpg",
  "Mussoorie": "https://img.cdn.zostel.com/blog_photo/045_TreeHouse_01.jpg",
  "Shimla": "https://s7ap1.scene7.com/is/image/incredibleindia/cityscape-of-shimla-himachal-pradesh-city-1-hero?qlt=82&ts=1742171983523",
  "Manali": "https://imgcld.yatra.com/ytimages/image/upload/v1484282643/Manali_overview1.jpg",
  "Kasol": "https://imgs.search.brave.com/Op-XjP4LSgnqDvtXJkMGswCbKYpdG28W3epQGIa6-VM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9sb2NhbC1ob3Vz/ZXMta2Fzb2wtdmls/bGFnZS1pbmRpYV83/ODM2MS0yMjY0OC5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw/JnE9ODA",
  "Dharamshala": "https://www.holidify.com/images/bgImages/DHARAMSHALA.jpg",
  "Dalhousie": "https://www.holidify.com/images/bgImages/DALHOUSIE.jpg",
  "Amritsar": "https://amritsartourism.org.in/images/places-to-visit/headers/places-to-visit-in-amritsar-header-amritsar-tourism.jpg.jpg",
  "Chandigarh": "https://img.freepik.com/premium-photo/capitol-complex-chandigarh_78361-2435.jpg?semt=ais_hybrid&w=740&q=80",
  "Agra": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Taj-Mahal.jpg/1200px-Taj-Mahal.jpg",
  "Mathura": "https://s7ap1.scene7.com/is/image/incredibleindia/geeta%20temple-mathura-uttar%20pradesh-hero?qlt=82&ts=1726649545434",
  "Vrindavan": "https://upload.wikimedia.org/wikipedia/commons/8/83/RassLeela_by_Sri_Krishna%2C_Prem_Mandir_Vrindavan%2C_Mathura%2C_Uttar_Pradesh%2C_India_%282014%29.jpg",
  "Jim Corbett": "https://imgs.search.brave.com/pM1NJ7TFTqlXdSZJb7kioOIE7lY6IVpiscDFelP9VzI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE4/MjQxNDY5MS9waG90/by9pbmRpYW4td2ls/ZC1mZW1hbGUtdGln/ZXItb3ItcGFudGhl/cmEtdGlncmlzLWF0/LWppbS1jb3JiZXR0/LW5hdGlvbmFsLXBh/cmstaW5kaWEtdGln/ZXItc2lkZS53ZWJw/P2E9MSZiPTEmcz02/MTJ4NjEyJnc9MCZr/PTIwJmM9cGxyWDRj/dFpCV2dNaVhBX1l4/Q19OUnJtY1hWNDg1/N0sxa3MxeWVybHBh/ND0",

  "Coorg": "http://r1imghtlak.mmtcdn.com/1f44a672-3b7a-4287-8560-555f13824205.jpg?downsize=583:388",
  "Ooty": "https://wallpapercave.com/wp/wp5392704.jpg", 
  "Kodaikanal": "https://cdn.pixabay.com/video/2025/11/04/313938_tiny.jpg",
  "Wayanad": "https://wallpapercave.com/wp/wp3426804.jpg",
  "Munnar": "https://imgs.search.brave.com/P2GDoLuOsNjEEN4AJN4Dy3PYVXmD1m53gt64t2h51dw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2OTc3MzAz/MzQ0MTktZmJhODNm/ZTE0M2I3P2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZpeGxpYj1yYi00/LjEuMCZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE1Y/eDhiWFZ1Ym1GeWZH/VnVmREI4ZkRCOGZI/d3c",
  "Alleppey": "https://t3.ftcdn.net/jpg/03/21/27/46/360_F_321274653_eB4NamL9AsGCVe0Oxg205i2rITWjIN5n.jpg",
  "Pondicherry": "https://imgs.search.brave.com/IC74v4nk63n_AVWqF4wkMurByQloy-Jv_lnOsyIYxfk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2Q3L1BvbmRpY2hl/cnJ5X0dhbmRoaVN0/YXR1ZS5qcGc",
  "Mahabalipuram": "https://t3.ftcdn.net/jpg/04/32/19/56/360_F_432195683_bkEVUQ6ibqH7ltzrtCxu1EL0NX0OlhoD.jpg",
  "Hampi": "https://wallpapercave.com/wp/wp7665085.jpg",
  "Gokarna": "https://www.maharashtragadkille.com/system/images/000/704/668/c27ba26d5997c95bda07b103f34d9f0a/original/BmAPFEzHIc1.jpg",
  "Mysore": "https://imgs.search.brave.com/2y0qIczklYmuGhlQ-3D8ryQFyjE5UObLQahRBB9tlIA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ieG15/c3VydS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjQvMDgv/TVlTVVJVLURBU0FS/QS0yMDI0LndlYnA",
  "Tirupati": "https://imgs.search.brave.com/OIFvASP-JICyZXnWh_N3QBAFhSFcr8hmBFtIZ3ESAJ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvdGlydXBhdGkt/YmFsYWppLXU5MDhz/MnptOWR2ZG45ejIu/anBn",
  "Kanyakumari": "https://imgs.search.brave.com/O_PHuHHaaFqL4xv-3q7VFgJKvx4nC9qhoy-OunbKJiM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I2L1JvY2tNZW1v/cmlhbC5qcGc",
  "Madurai":"https://imgs.search.brave.com/hKXwyzu7r70EfBOdYK6JWRhfL11P59lVpym7Tvs3nws/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjA0/MzY3NjMyL3Bob3Rv/L21hZHVyYWktaW5k/aWEtZ29wdXJhbXMt/b2YtdGhlLW1lZW5h/a3NoaS1hbW1hbi10/ZW1wbGUud2VicD9h/PTEmYj0xJnM9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVJhQ1RfNjNK/SG1RNS1fVWJETzdV/ZDB3dVVJRUVFdzBa/OF9iWTlHSndfOTA9",
  "Rameswaram":"https://t4.ftcdn.net/jpg/16/50/69/63/360_F_1650696323_Z74XgnEvQsE3iy9FHW9I4rcyNLpBaiFG.jpg",
    
  "Lonavala": "https://t3.ftcdn.net/jpg/09/14/98/72/360_F_914987264_rZbPPLhR5Xz25Ra3a9W2MZJObsXHLRcv.jpg",
  "Mahabaleshwar": "https://s7ap1.scene7.com/is/image/incredibleindia/1-pratapgarh-fort-mahabaleshwar-maharashtra-2-city-hero?qlt=82&ts=1726668937680",
  "Alibaug": "https://imgs.search.brave.com/SugJHxgoA5mJ_onY7lervIwMHQ8m95jeP5MhVYyuUt4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9tYW5k/d2EtcG9ydC1qZXR0/eS1hbGliYXVnLW1h/aGFyYXNodHJhLWlu/ZGlhLTM0ODY0NzE3/NC5qcGc",
  "Mount Abu": "https://img.traveltriangle.com/blog/wp-content/uploads/2023/03/Honeymoon-Point.jpg",
  "Udaipur": "https://imgs.search.brave.com/l5fUPKE4VcLQ6wOUl3wWV0rJA0QiruIBwCG2f_k3Hdg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTIw/NTE4NzYwL3Bob3Rv/L2NpdHktcGFsYWNl/LWFuZC1sYWtlLXBp/Y2hvbGEtdWRhaXB1/ci1pbmRpYS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9WjY5/cUNOVDVhcExhU3cz/UklRcVFoMWhJT0pO/WmxKTDlKdGZZVW1x/c1pSRT0",
  "Jaipur": "https://imgs.search.brave.com/wT4zKNnqLw9xfmIdTNi11aHNpwFAHO86iJvU67cD3es/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQw/NDIyNDc0Ny9waG90/by9pbnNpZGUtb2Yt/dGhlLWhhd2EtbWFo/YWwtb3ItdGhlLXBh/bGFjZS1vZi13aW5k/cy1hdC1qYWlwdXIt/aW5kaWEuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVBkY3hJ/X2NsWHU4OWFCd2Rn/MFJ0MzhHbXZrcFk4/YXJoMnAyRWNtVjFY/OEE9",
  "Gir": "https://imgs.search.brave.com/feQWuPSOx-kqTvF5R_Wt_iHd8tIl-GqAKDw_iiNPhKw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ2/ODUzNjM5Mi9waG90/by90d28tbGlvbnMt/Z2lyLW5hdGlvbmFs/LXBhcmstZ3VqYXJh/dC1pbmRpYS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9OUJz/c1dRby1lN0p6OXdf/RFJQMWZGZU5MbFNK/T1JhaDA2UEl5dXYx/YUlVMD0", 
  "Somnath": "https://imgs.search.brave.com/JQdgRr-8FQ4GlzQg9ZmAkRzXl6ED0fsiGJfiaTz2cIE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MTAvZTIvNzgvNTAv/c2FnYXItZGFyc2hh/bi1zb21uYXRoLmpw/Zw",
  "Dwarka": "https://cdn.pixabay.com/photo/2022/10/13/16/29/dwarka-7519479_640.jpg",
  "Kutch": "https://imgs.search.brave.com/Sm78VYOlxSWVwAHz0ll69vlVmMP3t7ZbXjICKjEdB_k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z3VqYXJhdHRvdXJp/c20uY29tL2NvbnRl/bnQvZGFtL2d1anJh/dHRvdXJpc20vaW1h/Z2VzL3dlZWtlbmQt/Z2V0LWF3YXlzL2dy/ZWF0LXJhbm4tb2Yt/a3V0Y2gvZ2FsbGVy/eS9HcmVhdCUyMFJh/bm4lMjBPZiUyMEt1/dGNoJTIwKDcpLmpw/Zw",
  "Pune": "https://imgs.search.brave.com/nPoYt_sCdvSXS0VT0CdqbE55uPEqPvkyqWS8FEKRI2o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVw/ei5nb3YuaW4vbWVk/aWEvMjAyMy8wMi9x/dWFkcm9uOS5qcGc",
  "Mumbai": "https://imgs.search.brave.com/5KQAa_q48riRp-ccVqdx8-3dNf37FYSi0j6nJF4eoSI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zN2Fw/MS5zY2VuZTcuY29t/L2lzL2ltYWdlL2lu/Y3JlZGlibGVpbmRp/YS9nYXRld2F5LW9m/LWluZGlhLW11bWJh/aS1tYWhhcmFzaHRy/YS0xLWF0dHItaGVy/bz9xbHQ9ODImdHM9/MTc0MjE4NjczNjA2/NA",
  "Daman":"https://imgs.search.brave.com/ew9AAUrNBx0OuFMFE5l1KMEI15-_hf8KT_43VmUmrJs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc3LzBk/LzFiLzc3MGQxYjgz/ZjgzNmQwMTllNDM5/MjMxNzc0YzY0N2U3/LmpwZw",
  "Matheran":"https://assets.traveltriangle.com/blog/wp-content/uploads/2023/03/pexels-bala-5406961.jpg",
  "Nashik":"https://imgs.search.brave.com/O5T-DiyAWFYR_h2K3o86RxvlGoDJVvOjbM2hnZIqgXM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDg4/MjkwMzgyL3Bob3Rv/L2hpbmR1LXBpbGdy/aW1zLXN0YW5kLWF0/LWFuZC1iYXRoLWlu/LXRoZS1nb2RhdmFy/aS1yaXZlci1pbi1u/YXNoaWstbWFoYXJh/c2h0cmEtaW5kaWEt/b24tc3VuZGF5Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1P/cC1FOGpHcGxzTW9G/VGVyYTFtdEw0ay1i/UVVUUy13ZWFIcjBO/QXNUZXJJPQ",

  "Darjeeling": "https://images.unsplash.com/photo-1545324367-8997ba3b801e?q=80&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  "Gangtok": "https://imgs.search.brave.com/85xSkqpsLY4jBYnq_ZBEK84gmMlYbHjFYZs6pS0F4H4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTEudGhyaWxsb3Bo/aWxpYS5jb20vZmls/ZXN0b3JlL2R3M3lm/OGFjNHpqb3NyNHpi/cDUyNTlneDF3ZzRf/Z2FuZ3Rvay10cmlw/LndlYnA",
  "Sundarbans": "https://imgs.search.brave.com/o2D0uP4WK-hm12jz3aU1ePGtU-6RsmcN2DjYpluwAP0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vZHlpZmZya3po/L2ltYWdlL3VwbG9h/ZC9jX2ZpbGwsZl9h/dXRvLGZsX3Byb2dy/ZXNzaXZlLnN0cmlw/X3Byb2ZpbGUsZ19j/ZW50ZXIsaF81MTgs/cV9hdXRvLHdfNjYw/L3YxNjk1ODg1Nzg5/L2Jiai9jbWdta2hx/Nmw2ZGhlZHNxYmx3/by5qcGc",
  "Puri": "https://imgs.search.brave.com/QSKYJzm5GGSIl8znqCy4yyp18i2ElXCxxWiWL0xE4hQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMyLnRyaXBvdG8u/Y29tL21lZGlhL2Zp/bHRlci9ubC9pbWcv/MzA3MjU4L1RyaXBE/b2N1bWVudC8xNTkz/ODU1Nzg2X2RzYzA4/MTk1LmpwZy53ZWJw",
  "Konark": "https://imgs.search.brave.com/H2QgmxxCrXo5LPRbh9quU6rqfmTD4rjOMLB2SrBSZPg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9vbmVk/YXkudHJhdmVsL3dw/LWNvbnRlbnQvdXBs/b2Fkcy9vbmUtZGF5/LWtvbmFyay1zaWdo/dHNlZWluZy10b3Vy/LXBhY2thZ2UtYnkt/Y2FiLWhlYWRlci5q/cGc",
  "Shillong": "https://imgs.search.brave.com/YNm02XxKU4QIIVsJtY3nEjB0iNRvvmpISPZWau4JvoQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTEudGhyaWxsb3Bo/aWxpYS5jb20vZmls/ZXN0b3JlLzBpOGF3/dTZreWVuemZwZ3ph/YWg3ZjZwMzdlNzlf/c2h1dHRlcnN0b2Nr/XzEzMzk5OTQ0OTUl/MjAoMSkuanBn",
  "Kaziranga": "https://imgs.search.brave.com/nZsPkk9go-InzgTzQmFIUW9YQeioYSFYv8878O-VgM0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzQ1LzAyLzgy/LzM2MF9GXzc0NTAy/ODIwMl9jMHlpYlFP/SFdyVEVhYjdEMHhQ/c0JXUGRzTUN6Y0hE/Sy5qcGc", 
  "Siliguri":"https://imgs.search.brave.com/XnoupxqLjTL-nwBtiRXrlLJ3eerv4-8Jr8fd4Kgb_C8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMzY4/dWZ1N3hnY3M4Ni5j/bG91ZGZyb250Lm5l/dC8xODU1OC0xNTY4/NjEzMTM0LmpwZw",
  "Bhubaneswar": "https://www.pbdindia.gov.in/default/front/content-images/Bhubaneswar-Highlights-3.png",
  "Tawang":"https://imgs.search.brave.com/7BpYyQL7KaIKIIvIyacVArdfmuoH-SD2vAfj_ErvsJA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDExMjg3/MzI4LmpwZw",
  "Lachung":"https://sikkimtourism.org/wp-content/uploads/2022/06/lachung-700x500.jpg",
  "Pelling":"https://www.clubmahindra.com/blog/media/section_images/shuttersto-22b8b905a475674.jpg",
  "Kalimpong":"https://img.freepik.com/premium-photo/high-angle-view-trees-landscape_1048944-15797316.jpg?semt=ais_hybrid&w=740&q=80",
  "Kolkata":"https://www.global-gallivanting.com/wp-content/uploads/2015/04/kolkata-temple-1-of-1-1024x699.jpg",

  // --- FALLBACK REGIONAL ---
  "NORTH_DEFAULT": "https://images.unsplash.com/photo-1519955025118-477f69bddc51?q=80&w=1000",
  "SOUTH_DEFAULT": "https://images.unsplash.com/photo-1605628742610-892356316257?q=80&w=1000",
  "WEST_DEFAULT": "https://images.unsplash.com/photo-1562979313889-484658825127?q=80&w=1000",
  "EAST_DEFAULT": "https://images.unsplash.com/photo-1595131838573-002d08085dc3?q=80&w=1000",

  // --- WEDDINGS & BIRTHDAYS ---
  "WEDDING_SILVER": "https://imgs.search.brave.com/LvIA5OssS_ynw96CWDE7YdsixFF9Hc8WvjrqPU4sgts/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1hcGkueG9ncnAu/Y29tL2ltYWdlcy80/NDUzNDk3Ny02MWVh/LTRjODgtOGU5MS00/ODcxMzcxNDkzMmR-/cnNfNzY4LmgtY3Jf/NS4wLjEwODkuODEz", 
  "WEDDING_GOLD": "https://imgs.search.brave.com/1zY0EdTwgfGvAxq8QjD_6wUVRZpuz-N9qEliit_Tx8o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlaW50ZXJpb3Jj/b2xsZWN0aW9ucy5j/b20vaW1hZ2UvY2Fj/aGUvY2F0YWxvZy9X/ZWRkaW5nJTIwZGVj/b3IvR2lhbnQlMjBG/bG93ZXJzL2dmbG93/ZXIzLTEwMDB4MTAw/MC5qcGVn", 
  "WEDDING_PLATINUM": "https://imgs.search.brave.com/LbQHF9qxNO5xOT8alICckmf0QXpVAj50qghloil0KU0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1hcGkueG9ncnAu/Y29tL2ltYWdlcy9j/Y2M3NTgwZC0xNzRl/LTRmMDEtYmNhMy02/NTgzNTBhODg3N2R-/cnNfNzY4LmgtY3Jf/NzQ3LjAuNjcyMC40/NDgw", 
  "WEDDING_DIAMOND": "https://imgs.search.brave.com/XXWljnc9dDcUgfKjh0elmx0zxz888F7kAnaZozKvoZA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y2LzU3/LzIyL2Y2NTcyMmNi/ODY3ZDYwN2VhZDUw/MjJmMzNmYjg2OWI5/LmpwZw", 

  "BIRTHDAY_SILVER": "https://imgs.search.brave.com/SEwNWcjIWnYxvZexQMhjcrlulTESlW6FwhwPxE98yWA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFRcUpMUXYtZUwu/anBn", 
  "BIRTHDAY_GOLD": "https://imgs.search.brave.com/U03w6cWrqlUzP_LRa7y1oZtjyx3Dii2Rs9vPi_iVmAE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LnZlbnVlbG9vay5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjUvMTEvTHV4ZS1U/aGVtZWQtUGFydHkt/TmlnaHQtMS5qcGc", 
  "BIRTHDAY_PLATINUM": "https://imgs.search.brave.com/I_buYdwi5pnmmNpCqw5a1fJ-VdHcVL3lEfclLtiU0Xw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/NzUyNDc0ODg3MjUt/MjJkMWI3OGU3NWRi/P2l4bGliPXJiLTQu/MS4wJml4aWQ9TTN3/eE1qQTNmREI4TUh4/elpXRnlZMmg4TVRo/OGZHSmhibkYxWlhR/bE1qQm9ZV3hzZkdW/dWZEQjhmREI4Zkh3/dyZmbT1qcGcmcT02/MCZ3PTMwMDA" 
};


// --- HELPER: GET IMAGE SAFER (Updated to support plan types) ---
const getImageForPlace = (place, region, type = 'Classic') => {
  // 1. Check for specific keyed image (e.g., "Ladakh_Royal" or "Kerala_Classic")
  const specificKey = `${place}_${type}`;
  if (LOCATION_IMAGES[specificKey]) return LOCATION_IMAGES[specificKey];

  // 2. Check for exact place name (Used mainly by Mini Trips and fallback for states if specific key isn't found)
  if (LOCATION_IMAGES[place]) return LOCATION_IMAGES[place];
    
  // 3. Check for fallback regional images
  if (region === 'NORTH') return LOCATION_IMAGES['NORTH_DEFAULT'];
  if (region === 'SOUTH') return LOCATION_IMAGES['SOUTH_DEFAULT'];
  if (region === 'WEST') return LOCATION_IMAGES['WEST_DEFAULT'];
  if (region === 'EAST') return LOCATION_IMAGES['EAST_DEFAULT'];
    
  return HERO_IMG;
};


// --- TRIP DATA GENERATOR (Updated to pass 'Classic' or 'Royal' to image getter) ---
const generateTripsData = () => {
  const regions = ['EAST', 'WEST', 'NORTH', 'SOUTH'];
  const trips = [];
    
  // NOTE: These are the primary keys used for TRIP_DATA image lookup in LOCATION_IMAGES
  const regionStates = {
    EAST: ['West Bengal', 'Odisha', 'Sikkim', 'Assam'],
    WEST: ['Rajasthan', 'Gujarat', 'Goa', 'Maharashtra'],
    NORTH: ['Ladakh', 'Himachal', 'Uttarakhand', 'Kashmir'],
    SOUTH: ['Kerala', 'Tamil Nadu', 'Karnataka', 'Andhra Pradesh']
  };



  // --- DEFINING FACILITY TIERS ---
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
        
      // Calculate a base price per state so logic is consistent
      const baseStatePrice = getRoundPrice(25000, 75000); 



      for (let j = 0; j < 2; j++) {
        // j=0 is Classic, j=1 is Royal/Premium
        const isRoyal = j === 1;
        const planType = isRoyal ? 'Royal' : 'Classic';
        
        // Fix: Make Royal always more expensive than Classic
        // If Royal, add 40% markup to base price. If Classic, use base price.
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



        // Use the state name and planType for accurate image lookup (NEW)
        const mainImg = getImageForPlace(state, region, planType); 
        
        // Determine a relevant secondary image for variety (using Classic or fallback)
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
          // Naming fixed: Classic vs Royal
          title: `${state} Expedition ${isRoyal ? 'Royal' : 'Classic'}`,
          short_desc: `Experience the hidden gems of ${state} in this exclusive ${duration}-day ${isRoyal ? 'premium luxury' : 'classic comfort'} tour.`,
          itinerary: itinerary,
          days: duration,
          price_from: finalPrice,
          price_to: finalPrice + 15000,
          company_name: "Patel Brothers Luxury",
          // Fix: Facilities strictly differentiated
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



// --- REAL MINI TRIPS DATA LOCATIONS ---
const REAL_MINI_TRIPS_LOCATIONS = {
  NORTH: ["Rishikesh", "Haridwar", "Nainital", "Mussoorie", "Shimla", "Manali", "Kasol", "Dharamshala", "Dalhousie", "Amritsar", "Chandigarh", "Agra", "Mathura", "Vrindavan", "Ladakh", "Jim Corbett"],
  SOUTH: ["Coorg", "Ooty", "Kodaikanal", "Wayanad", "Munnar", "Alleppey", "Pondicherry", "Mahabalipuram", "Hampi", "Gokarna", "Mysore", "Tirupati", "Kanyakumari", "Kerala", "Madurai", "Rameswaram"],
  WEST: ["Lonavala", "Mahabaleshwar", "Alibaug", "Goa", "Mount Abu", "Udaipur", "Gir", "Somnath", "Dwarka", "Kutch", "Jaipur", "Pune", "Mumbai", "Daman", "Matheran", "Nashik"],
  EAST: ["Darjeeling", "Gangtok", "Sikkim", "Sundarbans", "Puri", "Konark", "Shillong", "Kaziranga", "Kolkata", "Assam", "Kalimpong", "Pelling", "Lachung", "Tawang", "Bhubaneswar", "Siliguri"]
};



// --- GENERATE EXACTLY 16 MINI TRIPS PER ZONE ---
const generateMiniTrips = () => {
  const miniTrips = [];
  const TARGET_PER_ZONE = 16;
  const regions = ["NORTH", "SOUTH", "EAST", "WEST"];



  regions.forEach(region => {
    const baseLocations = REAL_MINI_TRIPS_LOCATIONS[region];
    
    for (let i = 0; i < TARGET_PER_ZONE; i++) {
      // Modulo logic will not repeat now because baseLocations.length >= 16
      const locationName = baseLocations[i % baseLocations.length];
      const price = getRoundPrice(8000, 25000);
      // Mini trips always use the default/Classic image lookup (no type passed)
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



// --- WEDDING PLANS ---
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



// --- BIRTHDAY PLANS ---
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



// --- DISTINCTIONS DATA ---
const DISTINCTIONS = {
  EAST: ["Sundarbans Tiger Reserve", "Darjeeling Himalayan Railway", "Konark Sun Temple", "Kaziranga National Park"],
  WEST: ["Rann of Kutch", "Statue of Unity", "Ajanta Ellora Caves", "Gir National Park"],
  NORTH: ["Taj Mahal", "Valley of Flowers", "Golden Temple", "Ladakh Monasteries"],
  SOUTH: ["Kerala Backwaters", "Hampi Ruins", "Mysore Palace", "Meenakshi Temple"]
};



// NEW: Options for the required Dropdown 'dd'
const DD_OPTIONS = ["Corporate Event", "Private Party", "Exhibition", "Wedding", "Other"];



/* ==================================================================================
  4. UI COMPONENTS (Refactored for Tailwind Only)
  ================================================================================== */



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



// --- NEW COMPONENT: PageHeader (with Background Image) ---
const PageHeader = ({ title, subtitle, bgImage }) => (
  <div className="relative h-[40vh] w-full flex items-center justify-center mb-12 overflow-hidden">
    {/* Background Image */}
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
      onError={(e) => e.target.style.backgroundImage = `url(${HERO_IMG})`} // Fallback
    />
    {/* Dark Overlay for Readability */}
    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
    
    {/* Content */}
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



/* ==================================================================================
  5. LAYOUT COMPONENTS
  ================================================================================== */



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
        <div onClick={() => navigate('/')} className="flex flex-col group cursor-pointer z-50">
          <span className="font-serif text-xl md:text-3xl text-white font-bold tracking-widest leading-none group-hover:text-[#D4AF37] transition-colors">
            PATEL <span className="text-[#D4AF37]">BROTHERS</span>
          </span>
          <span className="text-[8px] md:text-[10px] text-slate-400 tracking-[0.4em] uppercase opacity-70 group-hover:opacity-100 mt-1">Luxury Events</span>
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



      {/* Mobile Menu */}
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



/* ==================================================================================
  6. PAGE COMPONENTS
  ================================================================================== */



// --- HOME PAGE ---
const HomePage = () => {
  const { navigate } = useNavigation();
  return (
    <div className="w-full">
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* NEW: Modified Hero Section to use Global Background Image with responsive styles (bg-center, bg-cover, bg-no-repeat) */}
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
            { t: 'Luxury Travel', d: 'Curated Expeditions', i: LOCATION_IMAGES["Rajasthan_Royal"], to: '/trips' }, // Using Royal for home hero
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



// --- GENERIC DETAIL PAGE ---
const GenericDetailPage = ({ type, id }) => {
  const { navigate, goBack, navState } = useNavigation();
    
  // Robust data fetching with fallback
  const data = useMemo(() => {
    if (navState && navState.package) return navState.package;
    
    // Fallback if accessed without state
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
      {/* Hero */}
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
            {/* Overview */}
            <div className="bg-[#0a1128]/80 backdrop-blur-xl border border-[#D4AF37]/20 p-10 rounded-2xl shadow-2xl">
               <h2 className="text-3xl font-serif text-white mb-6">Package Overview</h2>
               <p className="text-slate-300 leading-loose text-lg font-light">{data.desc || data.short_desc}</p>
            </div>



            {/* Itinerary (Trips) or Features (Weddings/Birthdays) */}
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



            {/* Achievements Section */}
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



          {/* Sidebar */}
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



// --- WEDDINGS PAGE ---
const WeddingsPage = () => {
  const { navigate } = useNavigation();



  return (
    <div className="w-full min-h-screen">
      {/* ADDED HERO IMAGE HEADER */}
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



// --- BIRTHDAY PAGE ---
const BirthdayPage = () => {
  const { navigate } = useNavigation();



  return (
    <div className="w-full min-h-screen">
      {/* ADDED HERO IMAGE HEADER */}
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



// --- TRIPS PAGE ---
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
      {/* ADDED HERO IMAGE HEADER */}
      <PageHeader 
        title="Luxury Expeditions" 
        subtitle="Explore the diverse landscapes of India." 
        bgImage={LOCATION_IMAGES["Himachal_Royal"]} // Using one Royal image for the header
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



// --- MINI TRIPS PAGE ---
const MiniTripsPage = () => {
  const { navigate } = useNavigation();
  const [activeRegion, setActiveRegion] = useState("NORTH");



  const filteredTrips = useMemo(() => MINI_TRIPS_DATA.filter(t => t.region === activeRegion), [activeRegion]);



  return (
    <div className="w-full min-h-screen">
      {/* ADDED HERO IMAGE HEADER */}
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



// --- BOOKING WIZARD COMPONENT ---
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
      // Get estimated guests from the plan for customization multiplier
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
    // Basic form validation: Use custom UI for alerts instead of browser alerts
    const validationErrors = [];
    if (!form.name || form.name.length < 3) validationErrors.push("Name must be at least 3 characters.");
    if (!form.phone) validationErrors.push("Phone is required.");
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) validationErrors.push("Valid email is required.");
    if (!form.date) validationErrors.push("Date is required.");
    if (!form.dd) validationErrors.push("Please select an Event/Trip Type.");
    if (!form.pincode || !/^\d{6}$/.test(form.pincode)) validationErrors.push("Valid 6-digit Pincode required.");
    if (!form.terms) validationErrors.push("Please accept terms.");



    if (validationErrors.length > 0) {
      // NOTE: Instead of alert(), we'll show a temporary message box in a real app. 
      // For this single-file demo, we'll log to console and highlight the issue briefly.
      console.error("Validation failed:", validationErrors.join(', '));
      // In a real app, you would set a state variable for an error message here.
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
        {/* Wizard Steps */}
        <div className="flex justify-center mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className={`w-4 h-4 rounded-full mx-2 transition-colors duration-500 ${step >= s ? 'bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]' : 'bg-slate-800'}`} />
            ))}
        </div>



        {/* --- BOOKING CARD --- */}
        <GlassCard className="min-h-[600px] w-full" noOverflow={true}>
              {step === 1 && (
                <div className="animate-fade-in">
                  <h2 className="text-4xl font-serif text-white mb-8 border-b border-[#D4AF37]/30 pb-4">
                      {category === 'wedding' ? 'Wedding Customization & Details' : 'Trip Details'}
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                      {/* LEFT COLUMN */}
                      <div className="space-y-6">
                          <div className="space-y-2">
                              <label className="text-xs text-[#D4AF37] uppercase font-bold tracking-wider">Selected Package</label>
                              <input value={form.package} disabled className="w-full bg-[#050A18]/50 border border-slate-700 rounded-lg p-4 text-slate-300 font-serif tracking-wide" />
                          </div>
                          <div className="space-y-2">
                              <label className="text-xs text-[#D4AF37] uppercase font-bold tracking-wider">Event/Travel Date *</label>
                              {/* FIX: ADDED [color-scheme:dark] CLASS FOR VISIBILITY */}
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



                      {/* RIGHT COLUMN */}
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
                      
                      {/* NEW: 'dd' Dropdown (Controlled, Required, Placeholder) */}
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
                      
                      {/* ADDED: State and District Inputs */}
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
                      <img src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=${BRAND.UPI}&pn=PatelBrothers&am=5000`} alt="QR" />
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



// --- ABOUT PAGE ---
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



// --- GALLERY PAGE (UPDATED to use CUSTOM_GALLERY_IMAGE_URLS) ---
const GalleryPage = () => {
  const [filter, setFilter] = useState("ALL");
    
  // Custom logic to generate exact counts using user-defined URLs
  const galleryCollection = useMemo(() => {
    const images = [];



    // WEDDINGS (18 images required)
    const weddings = ensureCount(CUSTOM_GALLERY_IMAGE_URLS.WEDDINGS, 20, HERO_IMG);
    weddings.forEach(src => images.push({ src, cat: 'WEDDINGS' }));



    // TRIPS (12 images required)
    const trips = ensureCount(CUSTOM_GALLERY_IMAGE_URLS.TRIPS, 12, HERO_IMG);
    trips.forEach(src => images.push({ src, cat: 'TRIPS' }));



    // BIRTHDAYS (10 images required)
    const bdays = ensureCount(CUSTOM_GALLERY_IMAGE_URLS.BIRTHDAYS, 12, HERO_IMG);
    bdays.forEach(src => images.push({ src, cat: 'BIRTHDAYS' }));



    // OTHER (8 images required)
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



// --- CONTACT PAGE ---
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



/* ==================================================================================
  7. MAIN APP COMPONENT & ROUTER LOGIC
  ================================================================================== */



const AppContent = () => {
  const { currentPath } = useNavigation();



  const renderRoute = () => {
    // Simple Router Matching Logic
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



    return <HomePage />; // Default fallback
  };



  return (
    <div className="relative min-h-screen text-slate-200 font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
        {/* --- GLOBAL FIXED BACKGROUND --- */}
        <div className="fixed inset-0 z-[-1]">
           <img src={GLOBAL_BG_IMG} className="w-full h-full object-cover opacity-20 animate-slow-zoom" alt="Background Texture" />
           <div className="absolute inset-0 bg-[#050A18]/90" /> {/* Dark Overlay */}
        </div>



        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;800&family=Lato:wght@300;400;700&display=swap');
          :root { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Lato', sans-serif; margin: 0; padding: 0; width: 100vw; overflow-x: hidden; background-color: #050A18; }
          
          /* Custom Scrollbar */
          ::-webkit-scrollbar { width: 8px; }
          ::-webkit-scrollbar-track { background: #050A18; }
          ::-webkit-scrollbar-thumb { background: #D4AF37; border-radius: 4px; }
          ::-webkit-scrollbar-thumb:hover { background: #b38f2d; }



          h1, h2, h3, h4, .font-serif { font-family: 'Cinzel', serif; }
          
          /* Animations */
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
    if (sessionStorage.getItem("ip-logged")) return;

    fetch("/api/log-ip")
      .then(() => sessionStorage.setItem("ip-logged", "1"))
      .catch(() => {});
  }, []);

  return (
    <NavigationProvider>
      <AppContent />
      <Analytics />
    </NavigationProvider>
  );
}