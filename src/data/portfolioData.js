/**
 * Centralized Portfolio Data for Nitheesh S P
 * Extracted directly from official design collections and verified resume documents.
 */

export const designerInfo = {
  name: "Nitheesh S P",
  shortName: "Nithish",
  title: "Fashion Designer & Fashion Technology Specialist",
  tagline: "B.Tech Fashion Technology (CGPA 8.32) · Apparel Engineering, CLO 3D, Sustainable Denim & Haute Streetwear.",
  graduationYear: "2027",
  college: "Jai Shriram Engineering College",
  cgpa: "8.32",
  vision: "To become a creative fashion designer and build distinctive fashion identities that connect with modern youth culture.",
  executiveSummary: "Passionate and creative Fashion Technology student with a strong foundation in textile knowledge. Seeking opportunities to apply my technical skills in the fashion and textile industry, eager to contribute to innovative design processes and sustainable solutions.",
  bio: `I am Nitheesh S P, a passionate Fashion Technology student with a strong foundation in textile knowledge, garment construction, and apparel engineering. Pursuing my B.Tech in Fashion Technology at Jai Shriram Engineering College (CGPA 8.32), I combine creative concept development with hands-on industrial manufacturing practices.

My design interests focus on streetwear, contemporary apparel, and sustainable fashion solutions—such as resin craft using fabric cutting waste and upcycled denim. Proficient in Adobe Photoshop, Adobe Illustrator, CLO 3D, and TukaTech CAD systems, I aim to contribute to progressive fashion houses and export apparel production.`,
  portrait: "/images/profile/nitheesh.png",
  portraitWebp: "/images/profile/nitheesh.webp",
  contact: {
    email: "nitheeshatm02@gmail.com",
    phone: "+91 9789312574",
    linkedin: "https://www.linkedin.com/in/nitheesh-s-p-0b81bb2a4",
    instagram: "https://instagram.com/nitheesh.couture"
  },
  languages: ["English", "Tamil", "Malayalam (Conversational)"],
  stats: [
    { label: "Design Collections", value: "05" },
    { label: "B.Tech CGPA", value: "8.32" },
    { label: "Industry Trainings", value: "05" },
    { label: "Symposium Awards", value: "03+" }
  ]
};

export const collections = [
  {
    id: "chroma-nature",
    number: "01",
    title: "Chroma Nature",
    season: "SS 27",
    category: "Streetwear",
    heroSubtitle: "Toxic Vibrancy & Poison Dart Frog Mechanics",
    tagline: "Translating dangerous natural beauty into electric youth streetwear.",
    concept: "'Beautifully Dangerous' — harnessing the toxic warning coloration of tropical poison dart frogs to ignite explosive contemporary streetwear graphics and high-visibility silhouettes.",
    narrative: `Nature uses vibrant color not merely for ornament, but as a weapon of survival. Chroma Nature interrogates aposematism — the biological warning signals of poison dart frogs — and reframes them for modern urban streetwear. High-voltage neon yellows clash with oceanic teal and obsidian depths.`,
    coverImage: "/images/boards/frog_page_03.jpg",
    coverThumb: "/images/thumbs/frog_page_03.jpg",
    pantones: [
      { code: "19-4517 TCX", name: "Deep Marine Teal", hex: "#005060" },
      { code: "12-0825 TCX", name: "Popcorn / Electric Toxic Yellow", hex: "#F5DF6B" },
      { code: "19-0303 TCX", name: "Jet Black / Toxic Shadow", hex: "#2B2E2E" }
    ],
    techniques: ["Aposematic Placement Screenprint", "Water-Repellent Technical Ripstop", "Reflective Piping Accents", "Contrast Neon Topstitching"],
    garments: [
      {
        name: "'Beautifully Dangerous' Streetwear Jacket",
        type: "Outerwear",
        views: {
          front: "Stand collar with diagonal asymmetrical storm zip, high-contrast toxic yellow blocking, and custom frog emblem.",
          back: "Oversized 'Beautifully Dangerous' typography and graphic frog illustration spanning shoulder blades."
        }
      },
      {
        name: "Technical Utility Cargo Pants",
        type: "Bottoms",
        views: {
          front: "Gusseted thigh cargo pockets with pull-tabs and contrast yellow zipper teeth.",
          back: "Ergonomic curved yoke with dual secure zip compartments and elasticated hem synch cords."
        }
      }
    ],
    boards: [
      {
        id: "frog-03",
        title: "Chroma Nature Title Board",
        category: "Cover",
        image: "/images/boards/frog_page_03.jpg",
        thumb: "/images/thumbs/frog_page_03.jpg",
        description: "Official series title: 1. Chroma Nature — Spring/Summer 2027."
      },
      {
        id: "frog-04",
        title: "Inspiration & Wildlife Storyboard",
        category: "Storyboard",
        image: "/images/boards/frog_page_04.jpg",
        thumb: "/images/thumbs/frog_page_04.jpg",
        description: "Vivid visual research of poison dart frogs, tropical flora, rain-soaked leaves, and optical warning coloration."
      },
      {
        id: "frog-05",
        title: "Atmosphere & Silhouette Moodboard",
        category: "Moodboard",
        image: "/images/boards/frog_page_05.jpg",
        thumb: "/images/thumbs/frog_page_05.jpg",
        description: "Sportswear drape, street culture references, technical fabric textures, and oversized relaxed fits."
      },
      {
        id: "frog-06",
        title: "Colour Board & Pantone System",
        category: "Colour & Print",
        image: "/images/boards/frog_page_06.jpg",
        thumb: "/images/thumbs/frog_page_06.jpg",
        description: "Curated Pantone palette: 19-4517 TCX (Marine Teal), 12-0825 TCX (Popcorn Yellow), and 19-0303 TCX (Jet Black)."
      },
      {
        id: "frog-07",
        title: "Print & Graphics Board — Beautifully Dangerous",
        category: "Colour & Print",
        image: "/images/boards/frog_page_07.jpg",
        thumb: "/images/thumbs/frog_page_07.jpg",
        description: "Print repeat developments and bold chest/back placement graphics featuring the poison frog emblem."
      },
      {
        id: "frog-08",
        title: "Design Board 1 — Streetwear Jacket Flats",
        category: "Design Board",
        subtitle: "Front & Back Technical Illustration",
        image: "/images/boards/frog_page_08.jpg",
        thumb: "/images/thumbs/frog_page_08.jpg",
        description: "Detailed technical CAD illustrations of the streetwear jacket showcasing graphic placement on both front and back."
      },
      {
        id: "frog-09",
        title: "Design Board 2 — Coordinating Cargo Pants",
        category: "Design Board",
        subtitle: "Front & Back Technical Illustration",
        image: "/images/boards/frog_page_09.jpg",
        thumb: "/images/thumbs/frog_page_09.jpg",
        description: "Technical CAD illustrations of the relaxed cargo pants with modular pocketing and drawcord details."
      },
      {
        id: "frog-10",
        title: "Final Look Board — Editorial Streetwear Look",
        category: "Final Look",
        subtitle: "Complete Finished Outfit Presentation",
        image: "/images/boards/frog_page_10.jpg",
        thumb: "/images/thumbs/frog_page_10.jpg",
        description: "Editorial styling of the complete Chroma Nature streetwear ensemble captured in motion."
      }
    ]
  },
  {
    id: "camo-leaf",
    number: "02",
    title: "Camo Leaf",
    season: "AW 27",
    category: "Utilitarian / Streetwear",
    heroSubtitle: "Organic Camouflage & Foliage Textures",
    tagline: "Where the forest floor transforms into structured utilitarian protection.",
    concept: "Inspired by nature's leaves and camouflage patterns, blending organic textures and earthy colours to express the beauty of nature and the spirit of adventure.",
    narrative: `Camo Leaf investigates the dialogue between organic foliage decay and structured utilitarian clothing. Through weathered earth tones, layered leaf silhouettes, and practical pocket details, this Autumn/Winter 2027 collection constructs an everyday urban outerwear look grounded in natural warmth.`,
    coverImage: "/images/boards/camo_page_01.jpg",
    coverThumb: "/images/thumbs/camo_page_01.jpg",
    pantones: [
      { code: "18-0228 TCX", name: "Bronze Green / Deep Foliage", hex: "#5B6547" },
      { code: "15-1119 TCX", name: "Tawny Olive / Sand Ochre", hex: "#C19E75" },
      { code: "19-1118 TCX", name: "Chestnut Brown / Bark Earth", hex: "#463428" },
      { code: "19-4001 TCX", name: "Total Eclipse / Charcoal Navy", hex: "#292B30" }
    ],
    techniques: ["Original Camo Leaf Repeat Print", "Multi-Pocket Utility Construction", "Heavyweight Brushed Cotton", "Organic Garment Dyeing"],
    garments: [
      {
        name: "Camo Leaf Utility Jacket",
        type: "Outerwear",
        views: {
          front: "Front paneling with asymmetrical storm flap, dual flap chest pockets, and concealed zip placket.",
          back: "Structured back yoke with articulated shoulder pleats for mobility and continuous camo print alignment."
        }
      },
      {
        name: "Articulated Camo Trousers",
        type: "Bottoms",
        views: {
          front: "Darted knee construction, deep slash pockets, and heavy-gauge topstitching.",
          back: "Twin welt pockets, reinforced seat patch, and tapered ankle cuffs with snap adjusters."
        }
      }
    ],
    boards: [
      {
        id: "camo-01",
        title: "Collection Cover & Identity",
        category: "Cover",
        image: "/images/boards/camo_page_01.jpg",
        thumb: "/images/thumbs/camo_page_01.jpg",
        description: "Title page establishing the Camo Leaf AW 27 collection identity and visual direction."
      },
      {
        id: "camo-02",
        title: "Ecological Storyboard",
        category: "Storyboard",
        image: "/images/boards/camo_page_02.jpg",
        thumb: "/images/thumbs/camo_page_02.jpg",
        description: "Visual exploration of forest canopies, fallen autumn leaves, decayed foliage textures, and natural camouflage."
      },
      {
        id: "camo-03",
        title: "Atmospheric Moodboard",
        category: "Moodboard",
        image: "/images/boards/camo_page_03.jpg",
        thumb: "/images/thumbs/camo_page_03.jpg",
        description: "Forest atmosphere, muted earthy tones, tactile woven fabrics, and relaxed utilitarian streetwear silhouettes."
      },
      {
        id: "camo-04",
        title: "Colour & Print Board",
        category: "Colour & Print",
        image: "/images/boards/camo_page_04.jpg",
        thumb: "/images/thumbs/camo_page_04.jpg",
        description: "Pantone color system (18-0228, 15-1119, 19-1118, 19-4001 TCX) anchored alongside the bespoke Camo Leaf textile print."
      },
      {
        id: "camo-05",
        title: "Design Board 1 — Utility Jacket",
        category: "Design Board",
        subtitle: "Garment Technical Flat (Front & Back)",
        image: "/images/boards/camo_page_05.jpg",
        thumb: "/images/thumbs/camo_page_05.jpg",
        description: "Precision technical flat sketches of the Camo Leaf utility jacket featuring detailed front and back construction views."
      },
      {
        id: "camo-06",
        title: "Design Board 2 — Matching Trousers",
        category: "Design Board",
        subtitle: "Garment Technical Flat (Front & Back)",
        image: "/images/boards/camo_page_06.jpg",
        thumb: "/images/thumbs/camo_page_06.jpg",
        description: "Technical flat sketches of the coordinating trousers with articulated knee darts, pocket placement, and seam finishes."
      },
      {
        id: "camo-07",
        title: "Final Look Board — Complete Ensemble",
        category: "Final Look",
        subtitle: "Finished Outfit Presentation",
        image: "/images/boards/camo_page_07.jpg",
        thumb: "/images/thumbs/camo_page_07.jpg",
        description: "Editorial presentation showing the styled Camo Leaf jacket and trousers as a cohesive Autumn/Winter ensemble."
      }
    ]
  },
  {
    id: "wild-instinct",
    number: "03",
    title: "Wild Instinct",
    season: "AW 27",
    category: "Luxe Outerwear",
    heroSubtitle: "Raw Velocity, Rosettes & Applique Craft",
    tagline: "The fastest predator in the natural kingdom reimagined through tactile power dressing.",
    concept: "Cheetah mechanics: exploring velocity, predatory posture, and organic spot rosettes through tactile embroidery, plush applique, and structured outerwear.",
    narrative: `Wild Instinct studies the biomechanics of the cheetah — feline shoulder flexibility, aerodynamic spot gradation, and kinetic burst. Rosettes are deconstructed through precision embroidery and three-dimensional applique.`,
    coverImage: "/images/boards/cheetah_page_01.jpg",
    coverThumb: "/images/thumbs/cheetah_page_01.jpg",
    pantones: [
      { code: "19-3911 TCX", name: "Black Beauty / Pure Shadow", hex: "#28282B" },
      { code: "16-1439 TCX", name: "Caramel Cafe / Amber Ochre", hex: "#A16B38" },
      { code: "12-0817 TCX", name: "Sunlight / Pale Savannah", hex: "#EADCB6" },
      { code: "18-1659 TCX", name: "Bossa Nova / Sangria Crimson", hex: "#973D3F" }
    ],
    techniques: ["Tactile Rosette Applique", "Direct-Garment Cheetah Embroidery", "Heavyweight Wool & Faux Pony Hair", "Antiqued Brass Hardware"],
    garments: [
      {
        name: "Tactile Cheetah Bomber Jacket",
        type: "Outerwear",
        views: {
          front: "Plush embroidered cheetah chest motif with ribbed collar, dual welt pockets, and heavy-duty metal zipper.",
          back: "Full-scale low-poly geometric cheetah head crafted with layered applique and directional stitching."
        }
      },
      {
        name: "Savannah Tailored Trousers",
        type: "Bottoms",
        views: {
          front: "Clean flat-front trousers with deep knife pleats and hidden coin pocket.",
          back: "Jetted back pockets with contrast caramel piping and interior waist curtain."
        }
      }
    ],
    boards: [
      {
        id: "cheetah-01",
        title: "Wild Instinct Cover Board",
        category: "Cover",
        image: "/images/boards/cheetah_page_01.jpg",
        thumb: "/images/thumbs/cheetah_page_01.jpg",
        description: "Official cover for 3. Wild Instinct — Autumn/Winter 2027 collection."
      },
      {
        id: "cheetah-02",
        title: "Predatory Storyboard",
        category: "Storyboard",
        image: "/images/boards/cheetah_page_02.jpg",
        thumb: "/images/thumbs/cheetah_page_02.jpg",
        description: "Visual exploration of feline anatomy, speed rosettes, claws, stalking postures, and golden savanna light."
      },
      {
        id: "cheetah-03",
        title: "Texture & Silhouette Moodboard",
        category: "Moodboard",
        image: "/images/boards/cheetah_page_03.jpg",
        thumb: "/images/thumbs/cheetah_page_03.jpg",
        description: "Exotic animal-skin swatches, 3D geometric wireframes, tactile knits, and urban predator silhouettes."
      },
      {
        id: "cheetah-04",
        title: "Colour, Print & Applique Board",
        category: "Colour & Print",
        image: "/images/boards/cheetah_page_04.jpg",
        thumb: "/images/thumbs/cheetah_page_04.jpg",
        description: "Pantone swatches with physical samples of cheetah embroidery, print swatches, and textural applique."
      },
      {
        id: "cheetah-05",
        title: "Design Board 1 — Cheetah Outerwear",
        category: "Design Board",
        subtitle: "Front & Back Technical Flat",
        image: "/images/boards/cheetah_page_05.jpg",
        thumb: "/images/thumbs/cheetah_page_05.jpg",
        description: "Technical garment flat illustrating the structured outerwear jacket with front and back applique placements."
      },
      {
        id: "cheetah-06",
        title: "Design Board 2 — Coordinating Bottoms",
        category: "Design Board",
        subtitle: "Front & Back Technical Flat",
        image: "/images/boards/cheetah_page_06.jpg",
        thumb: "/images/thumbs/cheetah_page_06.jpg",
        description: "Precision technical sketches for the coordinating tailored trousers with seam construction details."
      },
      {
        id: "cheetah-07",
        title: "Final Look Board — Luxury Editorial Look",
        category: "Final Look",
        subtitle: "Finished Outfit Presentation",
        image: "/images/boards/cheetah_page_07.jpg",
        thumb: "/images/thumbs/cheetah_page_07.jpg",
        description: "High-fashion editorial showcase featuring the styled Wild Instinct collection on a runway silhouette."
      }
    ]
  },
  {
    id: "strie",
    number: "04",
    title: "Strie",
    season: "AW 27",
    category: "Optical Monochrome",
    heroSubtitle: "Optical Zebra Striations & Kinetic Rhythm",
    tagline: "Stripping fashion to its rawest architectural rhythm: black, white, and a strike of red.",
    concept: "Zebra striations reimagined as graphic optical vibration — contrasting stark monochrome linear geometry with tactile wool felt and an aggressive crimson accent.",
    narrative: `In French textile lexicon, 'Strie' refers to delicate striations. In this collection, the zebra's natural markings are elevated into graphic visual rhythm. By introducing Pantone High Risk Red against slate grey and jet black, the collection creates an optical focus that commands attention.`,
    coverImage: "/images/boards/zebra_page_01.jpg",
    coverThumb: "/images/thumbs/zebra_page_01.jpg",
    pantones: [
      { code: "18-1764 TCX", name: "High Risk Red / Bold Crimson", hex: "#C82736" },
      { code: "16-4702 TCX", name: "Mineral Gray / Slate Neutral", hex: "#8D9494" },
      { code: "19-3911 TCX", name: "Black Beauty / Deep Obsidian", hex: "#262629" },
      { code: "14-4202 TCX", name: "Lunar Rock / Pale Ivory", hex: "#D4D5D0" },
      { code: "17-3914 TCX", name: "Shark / Cool Steel", hex: "#70757D" }
    ],
    techniques: ["Engineered Line Placement", "Felt Wool Bonded Panels", "High-Contrast Linear Screenprinting", "Minimalist Concealed Fastenings"],
    garments: [
      {
        name: "Optical Striated Outerwear Jacket",
        type: "Outerwear",
        views: {
          front: "Bold asymmetrical zebra striation placement wrapping from shoulder to hem with clean concealed zip.",
          back: "Continuous engineered linear pattern creating an optical widening effect across shoulders."
        }
      },
      {
        name: "Monochrome Tailored Trousers",
        type: "Bottoms",
        views: {
          front: "Vertical tuxedo-style side stripe accent in deep charcoal and precision pressed crease.",
          back: "Minimalist welt pockets and clean hem break."
        }
      }
    ],
    boards: [
      {
        id: "zebra-01",
        title: "Strie Cover Board",
        category: "Cover",
        image: "/images/boards/zebra_page_01.jpg",
        thumb: "/images/thumbs/zebra_page_01.jpg",
        description: "Official cover for 4. Strie — Autumn/Winter 2027 collection."
      },
      {
        id: "zebra-02",
        title: "Kinetic Storyboard",
        category: "Storyboard",
        image: "/images/boards/zebra_page_02.jpg",
        thumb: "/images/thumbs/zebra_page_02.jpg",
        description: "Zebra herds in motion, macro stripe patterns, savanna horizons, and optical art references."
      },
      {
        id: "zebra-03",
        title: "Monochrome Rhythm Moodboard",
        category: "Moodboard",
        image: "/images/boards/zebra_page_03.jpg",
        thumb: "/images/thumbs/zebra_page_03.jpg",
        description: "Monochrome felt swatches, structured high-fashion silhouettes, and graphic contrast studies."
      },
      {
        id: "zebra-04",
        title: "Colour & Print Board",
        category: "Colour & Print",
        image: "/images/boards/zebra_page_04.jpg",
        thumb: "/images/thumbs/zebra_page_04.jpg",
        description: "5-part Pantone system highlighted by High Risk Red and the bespoke zebra print graphic."
      },
      {
        id: "zebra-05",
        title: "Design Board 1 — Striated Outerwear",
        category: "Design Board",
        subtitle: "Front & Back Technical Illustration",
        image: "/images/boards/zebra_page_05.jpg",
        thumb: "/images/thumbs/zebra_page_05.jpg",
        description: "Technical garment flat illustrating front and back views of the structured striation jacket."
      },
      {
        id: "zebra-06",
        title: "Design Board 2 — Engineered Trousers",
        category: "Design Board",
        subtitle: "Front & Back Technical Illustration",
        image: "/images/boards/zebra_page_06.jpg",
        thumb: "/images/thumbs/zebra_page_06.jpg",
        description: "Technical CAD flats of the tailored bottoms showing pattern alignment and pocket construction."
      },
      {
        id: "zebra-07",
        title: "Final Look Board — Graphic Monochrome Look",
        category: "Final Look",
        subtitle: "Finished Outfit Presentation",
        image: "/images/boards/zebra_page_07.jpg",
        thumb: "/images/thumbs/zebra_page_07.jpg",
        description: "Editorial model presentation showcasing the complete Strie monochrome ensemble with red accent."
      }
    ]
  },
  {
    id: "linear-elegance",
    number: "05",
    title: "Linear Elegance",
    season: "SS 27",
    category: "Tailored Sartorial",
    heroSubtitle: "Subverted Pinstripes & Floral Embroidery",
    tagline: "Fashion's most disciplined sartorial line subverted by organic floral poetry.",
    concept: "Recontextualizing heritage pinstripes — menswear's most rigid sartorial code — through oversized contemporary silhouettes, delicate floral embroidery, and tactile knitwear.",
    narrative: `Linear Elegance takes the formal pinstripe suit and dissolves its corporate rigidity. Paired with sweet lilac and true red embroidery, coarse textures, and relaxed fluid trousers, this Spring/Summer 2027 collection celebrates modern romanticism without losing architectural precision.`,
    coverImage: "/images/boards/pinstripes_page_01.jpg",
    coverThumb: "/images/thumbs/pinstripes_page_01.jpg",
    pantones: [
      { code: "11-2509 TCX", name: "Marshmallow / Pale Vanilla Ground", hex: "#F0ECE1" },
      { code: "13-2808 TCX", name: "Sweet Lilac / Rose Whisper", hex: "#DFA9B8" },
      { code: "19-1664 TCX", name: "True Red / Passion Crimson", hex: "#BF2134" }
    ],
    techniques: ["Hand-Drawn Floral Machine Embroidery", "Yarn-Dyed Worsted Wool Pinstripes", "Chunky Gauge Knit Panels", "Soft Unstructured Canvas Interior"],
    garments: [
      {
        name: "Deconstructed Pinstripe Blazer",
        type: "Outerwear",
        views: {
          front: "Double-breasted relaxed silhouette with delicate botanical floral embroidery blooming across right lapel.",
          back: "Center vent with subtle vertical stripe continuity and softened drop-shoulder construction."
        }
      },
      {
        name: "Fluid Pinstripe Wide-Leg Trousers",
        type: "Bottoms",
        views: {
          front: "Extended waistband tab, double forward pleats, and generous drape pooling over shoes.",
          back: "Dual buttoned besom pockets and generous hem allowance."
        }
      }
    ],
    boards: [
      {
        id: "pinstripes-01",
        title: "Linear Elegance Cover Board",
        category: "Cover",
        image: "/images/boards/pinstripes_page_01.jpg",
        thumb: "/images/thumbs/pinstripes_page_01.jpg",
        description: "Official cover for 5. Linear Elegance — Spring/Summer 2027 collection."
      },
      {
        id: "pinstripes-02",
        title: "Sartorial Storyboard",
        category: "Storyboard",
        image: "/images/boards/pinstripes_page_02.jpg",
        thumb: "/images/thumbs/pinstripes_page_02.jpg",
        description: "Classic tailoring archives, draped pinstripe suiting, colorful striped yarns, and editorial menswear."
      },
      {
        id: "pinstripes-03",
        title: "Knitwear & Texture Moodboard",
        category: "Moodboard",
        image: "/images/boards/pinstripes_page_03.jpg",
        thumb: "/images/thumbs/pinstripes_page_03.jpg",
        description: "Chunky knitwear swatches, camel oversized sweaters, striped ribbon cascades, and floral accents."
      },
      {
        id: "pinstripes-04",
        title: "Colour, Print & Embroidery Board",
        category: "Colour & Print",
        image: "/images/boards/pinstripes_page_04.jpg",
        thumb: "/images/thumbs/pinstripes_page_04.jpg",
        description: "Curated Pantone system alongside custom floral print swatches and precision embroidery specimens."
      },
      {
        id: "pinstripes-05",
        title: "Design Board 1 — Deconstructed Blazer",
        category: "Design Board",
        subtitle: "Front & Back Technical Flat",
        image: "/images/boards/pinstripes_page_05.jpg",
        thumb: "/images/thumbs/pinstripes_page_05.jpg",
        description: "Technical flat sketch of the tailored blazer with front and back construction details and embroidery placement."
      },
      {
        id: "pinstripes-06",
        title: "Design Board 2 — Wide-Leg Trousers",
        category: "Design Board",
        subtitle: "Front & Back Technical Flat",
        image: "/images/boards/pinstripes_page_06.jpg",
        thumb: "/images/thumbs/pinstripes_page_06.jpg",
        description: "Technical CAD illustration of the wide-leg suit trousers with waistband and pleat specifications."
      },
      {
        id: "pinstripes-07",
        title: "Final Look Board — Tailored Suiting Look",
        category: "Final Look",
        subtitle: "Finished Outfit Presentation",
        image: "/images/boards/pinstripes_page_07.jpg",
        thumb: "/images/thumbs/pinstripes_page_07.jpg",
        description: "Editorial lookbook visual showcasing the styled Linear Elegance suit on model."
      }
    ]
  }
];

export const educationList = [
  {
    period: "2023 — 2027",
    degree: "B.Tech in Fashion Technology",
    institution: "Jai Shriram Engineering College",
    score: "CGPA: 8.32",
    details: "Focusing on apparel production, pattern drafting, CAD systems, textile testing, and sustainable garment engineering."
  },
  {
    period: "2022 — 2023",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "GHSS",
    score: "Completed",
    details: "Foundational academic sciences and mathematics."
  },
  {
    period: "2020 — 2021",
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "GHSS",
    score: "Completed",
    details: "Secondary general curriculum."
  }
];

export const industryExperience = [
  {
    type: "Internship",
    company: "SAMURAI EXPORTS Pvt Ltd., Bangalore",
    period: "01.06.2026 — 30.06.2026",
    duration: "1 Month",
    role: "Industrial Export Apparel Intern",
    learnings: "Hands-on exposure to export-oriented apparel manufacturing, line planning, quality assurance, and cutting floor operations."
  },
  {
    type: "Inplant Training",
    company: "SARAN GARMENTS, Arulpuram",
    period: "02.12.2025 — 15.12.2025",
    duration: "15 Days",
    role: "Garment Production Trainee",
    learnings: "Commercial production workflow, assembly lines, defect tracking, and garment finishing procedures."
  },
  {
    type: "Internship",
    company: "CHERISH KNITS, Kangeyam",
    period: "02.06.2025 — 30.06.2025",
    duration: "1 Month",
    role: "Knitwear Manufacturing Intern",
    learnings: "Knit fabric structures, loop analysis, circular knitting machinery, and yarn-to-garment conversion."
  },
  {
    type: "Inplant Training",
    company: "SAKTHI KNIT WEARS, Tirupur",
    period: "08.01.2025 — 18.01.2025",
    duration: "10 Days",
    role: "Knitwear Production Trainee",
    learnings: "Knitting floor inspection, dyeing house interface, and industrial stitching operations."
  },
  {
    type: "Inplant Training",
    company: "DINESH KNITS, Tirupur",
    period: "05.08.2024 — 14.08.2024",
    duration: "7 Days",
    role: "Apparel Trainee",
    learnings: "Introduction to Tirupur knitwear cluster workflows, pattern cutting, and industrial quality checking."
  }
];

export const awardsAndSymposiums = [
  {
    prize: "First Prize",
    event: "Fashion Rendering — SARTORIA’26",
    host: "Sona College of Technology, Salem",
    year: "2026"
  },
  {
    prize: "Second Prize",
    event: "Fashion Illustration & Clay Modelling — TARANG’26",
    host: "Government Polytechnic College, Kannur, Kerala",
    year: "2026"
  },
  {
    prize: "Third Prize",
    event: "Fashion Illustration — IGNEXIA’25",
    host: "NIFT-Tea College of Knitwear Fashion, Tirupur",
    year: "2025"
  }
];

export const sustainableProjects = [
  {
    title: "Resin Art By Using Fabric Cutting Waste",
    category: "Sustainable Craft & Circular Textiles",
    description: "Upcycling pre-consumer textile cutting room waste by embedding yarn scraps and fabric off-cuts into bio-resin art surfaces, diverting discard from landfills."
  },
  {
    title: "Upcycled Denim Garments: A Sustainable Fashion Project",
    category: "Circular Denim Redesign",
    description: "Deconstructing discarded post-consumer denim garments to engineer contemporary, structured patchwork streetwear silhouettes with minimal virgin raw materials."
  }
];

export const certifications = [
  {
    name: "CLO 3D Software",
    issuer: "Udemy Certified",
    year: "2026"
  },
  {
    name: "Advertisement and Promotion",
    issuer: "NPTEL Certified (Elite + Silver)",
    year: "Jan — Apr 2026"
  },
  {
    name: "Entrepreneurship",
    issuer: "NPTEL Certified (Elite)",
    year: "Jul — Oct 2025"
  },
  {
    name: "Workshop: Fascinating Art Forms",
    issuer: "Conducted by Ms. Rama Rajesh (MD, M/S. Palettez Tirupur)",
    year: "2025"
  }
];

export const toolsAndTech = [
  { 
    id: "photoshop",
    name: "Adobe Photoshop", 
    category: "Mood Boards & Editorial Retouching",
    tag: "Adobe Creative Cloud",
    badge: "Ps"
  },
  { 
    id: "illustrator",
    name: "Adobe Illustrator", 
    category: "Vector Technical Flats & CAD",
    tag: "Adobe Creative Cloud",
    badge: "Ai"
  },
  { 
    id: "clo3d",
    name: "CLO 3D", 
    category: "3D Virtual Prototyping & Simulation",
    tag: "Virtual Prototyping",
    badge: "CLO"
  },
  { 
    id: "tukatech",
    name: "Tuka Tech", 
    category: "Pattern Drafting & Digitizing",
    tag: "Apparel CAD System",
    badge: "TT"
  },
  { 
    id: "tukamark",
    name: "Tuka Mark", 
    category: "Fabric Marker Planning & Efficiency",
    tag: "Marker Efficiency",
    badge: "TM"
  },
  { 
    id: "digital-illustration",
    name: "Digital Fashion Illustration", 
    category: "Rendering, Textures & Shading",
    tag: "Digital Artistry",
    badge: "DI"
  },
  { 
    id: "hand-sketching",
    name: "Hand Sketching & Mural Art", 
    category: "Traditional Craft, Form & Line Art",
    tag: "Fine Art Craft",
    badge: "HS"
  }
];
