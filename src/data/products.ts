export interface IProductSpec {
  labelKey: string;
  value: string;
  colorClass: string;
}

export interface IProduct {
  id: string;
  image: string;
  brand: string;
  model: string;
  descriptionKey: string;
  subtitleKey: string;
  specs: IProductSpec[];
  price: {
    original: string;
    current: string;
    currency: string;
  };
}

export const PRODUCTS: IProduct[] = [
  {
    id: "asus-ascent-gx10",
    image: "/asus_ascent_gx10.png",
    brand: "ASUS",
    model: "Ascent GX10",
    subtitleKey: "marketplace.productSubtitle",
    descriptionKey: "marketplace.description",
    specs: [
      {
        labelKey: "marketplace.specs.compute",
        value: "1P FLOPS",
        colorClass: "text-cyan-300",
      },
      {
        labelKey: "marketplace.specs.memory",
        value: "128GB",
        colorClass: "text-purple-300",
      },
      {
        labelKey: "marketplace.specs.storage",
        value: "1TB SSD",
        colorClass: "text-cyan-300",
      },
      {
        labelKey: "marketplace.specs.network",
        value: "10GbE & WiFi7",
        colorClass: "text-green-400",
      },
    ],
    price: {
      original: "129,900.00",
      current: "99,900.00",
      currency: "TWD",
    },
  },
];
