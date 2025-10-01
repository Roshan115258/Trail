import { type User, type InsertUser, type Contact, type InsertContact, type NewsletterSubscription, type InsertNewsletterSubscription, type Product, type InsertProduct } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
  getContacts(): Promise<Contact[]>;
  getNewsletterSubscriptions(): Promise<NewsletterSubscription[]>;
  
  // Product methods
  getProducts(): Promise<Product[]>;
  getProductById(id: string): Promise<Product | undefined>;
  getProductBySlug(slug: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contacts: Map<string, Contact>;
  private newsletterSubscriptions: Map<string, NewsletterSubscription>;
  private products: Map<string, Product>;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.newsletterSubscriptions = new Map();
    this.products = new Map();
    this.initializeProducts();
  }

  private initializeProducts() {
    const productsData: InsertProduct[] = [
      {
        id: "milk-opindo-combo",
        slug: "opindo-combo-milk-analyser",
        title: "OPINDO COMBO Milk Analyser",
        shortDesc: "Fast, accurate & reliable milk analysis in just 30 seconds with comprehensive measurements.",
        longDesc: "OPINDO COMBO Milk Analyser revolutionizes dairy quality control with cutting-edge technology for rapid, comprehensive milk analysis. Designed for dairy farms, milk collection centers, and laboratories, it delivers precise measurements of fat, protein, lactose, SNF, density, added water, freezing point, and salts in just 30 seconds.",
        specs: {
          "General Specifications": {
            "Measurement Time": "~30 seconds per sample",
            "Sample Volume": "15-20 ml",
            "Power Supply": "12.8 V 6.8Ah (with 15V 1A charger)",
            "Dimensions": "190 x 170 x 140 mm",
            "Weight": "~ 4-5 kg"
          },
          "Measured Parameters": {
            "Fat": "0.01% - 15% (±0.1% accuracy)",
            "Protein": "2% - 7% (±0.10% accuracy)",
            "Lactose": "0.01% - 6% (±0.10% accuracy)",
            "SNF": "3% - 12% (±0.15% accuracy)",
            "Density": "1015 - 1040 kg/m³ (±0.3 kg/m³ accuracy)",
            "Added Water": "0% - 70% (±3% accuracy)",
            "Freezing Point": "-0.4 to -0.7°C (±0.01°C accuracy)",
            "Salts": "0.4% - 1.5% (±0.05% accuracy)"
          },
          "Connectivity": {
            "Data Transfer": "USB and RS232",
            "Built-in Features": "Ultrasonic stirrer, LCD screen"
          },
          "keyFeatures": [
            {
              "title": "Rapid Analysis",
              "description": "Get results in just 30 seconds per sample"
            },
            {
              "title": "Comprehensive Measurements",
              "description": "Analyze fat, protein, lactose, SNF, density, added water, salts, and freezing point"
            },
            {
              "title": "High Accuracy",
              "description": "Reliable and precise measurements for all parameters"
            },
            {
              "title": "User-Friendly Interface",
              "description": "Easy-to-read LCD screen with intuitive controls"
            },
            {
              "title": "Built-In Ultrasonic Stirrer",
              "description": "Ensures thorough sample mixing for accurate results"
            },
            {
              "title": "Data Management",
              "description": "USB and RS232 connectivity for seamless data transfer"
            }
          ],
          "benefits": [
            "Efficiency: Save time with quick and accurate measurements",
            "Reliability: Trusted by dairy professionals across PAN India",
            "Support: Comprehensive customer support and service"
          ],
          "applications": [
            "Dairy Farms: Ensure the quality and composition of milk directly on-site",
            "Milk Collection Centers: Rapid analysis for large volumes of milk",
            "Laboratories: Detailed analysis for research and quality control"
          ],
          "whyChoose": [
            "Innovative Technology: Cutting-edge solutions for milk quality control",
            "User-Centric Design: Easy to use with minimal training required",
            "Cost-Effective: High-quality analysis at a competitive price"
          ]
        },
        datasheetUrl: null,
        images: [
          "/attached_assets/stock_images/milk_analyzer_labora_0190cea5.jpg",
          "/attached_assets/stock_images/milk_analyzer_labora_7c542620.jpg",
          "/attached_assets/stock_images/milk_analyzer_labora_81f7f86d.jpg"
        ],
        price: null,
        category: "Milk Analyzer",
        source: "Brochure"
      },
      {
        id: "milk-opindo-standard",
        slug: "opindo-milk-analyser",
        title: "OPINDO Milk Analyser",
        shortDesc: "Fast milk analysis with user-friendly interface and ultrasonic stirrer — for farms, collection centers and labs.",
        longDesc: "OPINDO Milk Analyser provides rapid measurements with a compact form factor and optional battery power. Accurate readings and data management via USB/RS232.",
        specs: {
          measurementTime: "≈ 30 seconds per sample",
          sampleVolume: "15–20 ml",
          powerSupply: "12V DC 5A adaptor (battery available)",
          dimensions: "190 x 170 x 140 mm",
          weight: "≈ 2–3 kg",
          measuredParameters: {
            fat: "0.01% - 15% (±0.1%)",
            protein: "2% - 7% (±0.10%)",
            lactose: "0.01% - 6% (±0.10%)",
            SNF: "3% - 12% (±0.15%)",
            density: "1015 - 1040 kg/m³ (±0.3 kg/m³)",
            addedWater: "0% - 70% (±3%)",
            freezingPoint: "-0.4 to -0.7°C (±0.01°C)",
            salts: "0.4% - 1.5% (±0.05%)"
          },
          connectivity: ["USB", "RS232"],
          features: ["Ultrasonic stirrer", "LCD display", "Battery option"]
        },
        datasheetUrl: null,
        images: [
          "/attached_assets/stock_images/milk_analyzer_labora_cde72be9.jpg",
          "/attached_assets/stock_images/milk_analyzer_labora_d5efe602.jpg",
          "/attached_assets/stock_images/dairy_farm_milk_coll_1204a2c2.jpg"
        ],
        price: null,
        category: "Milk Analyzer",
        source: "Brochure"
      },
      {
        id: "milk-expert-pro-plus",
        slug: "expert-pro-plus-milk-analyser",
        title: "EXPERT PRO PLUS Milk Analyser",
        shortDesc: "High-speed milk analyzer with ~17 seconds measurement time and comprehensive parameters.",
        longDesc: "EXPERT PRO PLUS offers ultra-fast measurements (~17s per sample) with the same broad parameter coverage as other analyzers — designed for high throughput environments.",
        specs: {
          measurementTime: "≈ 17 seconds per sample",
          sampleVolume: "15–20 ml",
          powerSupply: "12V DC 5A adaptor (battery available)",
          dimensions: "190 x 110 x 140 mm",
          weight: "≈ 2–3 kg",
          measuredParameters: {
            fat: "0.01% - 15% (±0.1%)",
            protein: "2% - 7% (±0.10%)",
            lactose: "0.01% - 6% (±0.10%)",
            SNF: "3% - 12% (±0.15%)",
            density: "1015 - 1040 kg/m³ (±0.3 kg/m³)",
            addedWater: "0% - 70% (±3%)",
            freezingPoint: "-0.4 to -0.7°C (±0.01°C)",
            salts: "0.4% - 1.5% (±0.05%)"
          },
          connectivity: ["USB", "RS232"],
          features: ["Ultrasonic stirrer", "LCD display", "High throughput"]
        },
        datasheetUrl: null,
        images: [
          "/attached_assets/stock_images/dairy_farm_milk_coll_423d52cf.jpg",
          "/attached_assets/stock_images/dairy_farm_milk_coll_f66b6350.jpg",
          "/attached_assets/stock_images/laboratory_scientist_0182c891.jpg"
        ],
        price: null,
        category: "Milk Analyzer",
        source: "Brochure"
      },
      {
        id: "optek-dpu-printer",
        slug: "optek-dpu-dot-matrix-printer",
        title: "OPTEK DPU (Dot Matrix Printer Unit)",
        shortDesc: "Robust dot-matrix printer unit for industrial/commercial environments — multiple connectivity options and durable build.",
        longDesc: "OPTEK Dot Matrix Printer Unit is built for high-reliability printing in industrial settings. Supports multiple interfaces, wide paper handling, and long-life components for reduced downtime.",
        specs: {
          printingMethod: "Dot Matrix Impact",
          printSpeed: "Up to 4 lines per second",
          printWidth: "42–48 columns (model dependent)",
          dotDensity: "80 dots per line",
          paperSupport: "58 mm or 76 mm roll paper",
          interfaces: ["Serial RS-232C", "Parallel (Centronics)", "USB", "optional Ethernet"],
          powerSupply: "100–240 V AC",
          physical: "≈160 x 248 x 143 mm; weight 1.5–2.5 kg"
        },
        datasheetUrl: null,
        images: [
          "/attached_assets/stock_images/hardware_development_1d1d7cab.jpg",
          "/attached_assets/stock_images/hardware_development_71859658.jpg",
          "/attached_assets/stock_images/modern_circuit_board_1fd01e5d.jpg"
        ],
        price: null,
        category: "Peripherals / DPU",
        source: "Brochure"
      },
      {
        id: "maxtron-weighing-scale",
        slug: "maxtron-weighing-scale",
        title: "Maxtron Weighing Scale",
        shortDesc: "Precision weighing scale for industrial/commercial use up to 200 kg with optional battery operation.",
        longDesc: "Maxtron scale delivers high accuracy and durability with different platform sizes and connectivity options for integration with data systems.",
        specs: {
          maxCapacity: "200 kg",
          minCapacity: "1 kg",
          readability: "50 g",
          accuracy: "±0.05%",
          platformSize: "500 x 500 mm",
          display: "Digital LED, 6 digits",
          power: "Mains (110/220 V AC) + rechargeable battery option",
          connectivity: ["RS232", "USB (optional)"],
          dimensions: "400 x 400 x 100 mm",
          weight: "10–15 kg",
          compliance: ["OIML", "NTEP", "CE", "ISO (if available)"]
        },
        datasheetUrl: null,
        images: [
          "/attached_assets/stock_images/dairy_farm_automated_d54a7149.jpg",
          "/attached_assets/stock_images/dairy_farm_automated_fe9be52d.jpg",
          "/attached_assets/stock_images/laboratory_scientist_9212d7ce.jpg"
        ],
        price: null,
        category: "Scales",
        source: "Brochure"
      },
      {
        id: "ultrasonic-milk-stirrer",
        slug: "ultrasonic-milk-vibrator",
        title: "Ultrasonic Milk Vibrator (Milk Stirrer)",
        shortDesc: "Handheld ultrasonic milk vibrator for mixing/homogenization — powerful mixing with variable intensity control.",
        longDesc: "High-power ultrasonic vibrator designed for effective mixing and homogenization in milk processing. Stainless-steel probe, variable intensity control, and portable design.",
        specs: {
          frequency: "20 kHz",
          powerOutput: "300 W",
          intensityRange: "0–100%",
          probe: "Shaft length 500 mm; probe diameter 12 mm",
          construction: "Stainless steel probe; ergonomic handle",
          powerSupply: "100–240 V AC",
          weight: "≈ 3 kg",
          dimensions: "13 x 10 x 25 cm"
        },
        datasheetUrl: null,
        images: [
          "/attached_assets/stock_images/laboratory_scientist_9bff7a20.jpg",
          "/attached_assets/stock_images/modern_circuit_board_31891aa3.jpg",
          "/attached_assets/stock_images/engineering_team_col_a3be8406.jpg"
        ],
        price: null,
        category: "Accessories",
        source: "Brochure"
      },
      {
        id: "remote-display",
        slug: "remote-display-milk-collection",
        title: "Remote Display for Milk Collection",
        shortDesc: "LED/LCD remote display for real-time visibility of weight and quality metrics during milk collection.",
        longDesc: "Remote display provides farmers and operators with real-time readouts of milk weight and quality metrics. Weatherproof enclosure available for outdoor use and simple integration with DPUs and scales.",
        specs: {
          displayType: "LED 7-segment multi-line",
          connectivity: "Wired RS232",
          powerSupply: "110–240 V AC",
          enclosure: "Weatherproof industrial grade",
          dimensions: "15 x 2 x 22 cm (approx)"
        },
        datasheetUrl: null,
        images: [
          "/attached_assets/stock_images/engineering_team_col_b8595299.jpg",
          "/attached_assets/stock_images/software_engineer_co_b31f5c8b.jpg",
          "/attached_assets/stock_images/software_engineer_co_e48f8e0b.jpg"
        ],
        price: null,
        category: "Peripherals / Displays",
        source: "Brochure"
      }
    ];

    for (const productData of productsData) {
      const product: Product = {
        ...productData,
        datasheetUrl: productData.datasheetUrl ?? null,
        price: productData.price ?? null,
        images: productData.images ?? [],
      };
      this.products.set(product.id, product);
    }
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact,
      company: insertContact.company ?? null,
      id,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async createNewsletterSubscription(insertSubscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    // Check if email already exists
    const existing = Array.from(this.newsletterSubscriptions.values()).find(
      (sub) => sub.email === insertSubscription.email
    );
    
    if (existing) {
      throw new Error("Email already subscribed to newsletter");
    }

    const id = randomUUID();
    const subscription: NewsletterSubscription = {
      ...insertSubscription,
      id,
      createdAt: new Date()
    };
    this.newsletterSubscriptions.set(id, subscription);
    return subscription;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getNewsletterSubscriptions(): Promise<NewsletterSubscription[]> {
    return Array.from(this.newsletterSubscriptions.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductById(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getProductBySlug(slug: string): Promise<Product | undefined> {
    return Array.from(this.products.values()).find(
      (product) => product.slug === slug
    );
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const product: Product = {
      ...insertProduct,
      datasheetUrl: insertProduct.datasheetUrl ?? null,
      price: insertProduct.price ?? null,
      images: insertProduct.images ?? [],
    };
    this.products.set(product.id, product);
    return product;
  }
}

export const storage = new MemStorage();
