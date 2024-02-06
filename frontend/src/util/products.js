import blueSerum from "../assets/images/products/blue-serum.png";
import whiteSerum from "../assets/images/products/white-serum.png";
import orangeSerum from "../assets/images/products/orange-serum.png";
import yellowSerum from "../assets/images/products/yellow-serum.png";
import pinkSerum from "../assets/images/products/pink-serum.png";
import greenSerum from "../assets/images/products/green-serum.png";

import greyCream from "../assets/images/products/grey-cream.png";
import whiteCream from "../assets/images/products/white-cream.png";
import yellowCream from "../assets/images/products/yellow-cream.png";
import blueCream from "../assets/images/products/blue-cream.png";
import greenCream from "../assets/images/products/green-cream.png";
import pinkCream from "../assets/images/products/pink-cream.png";

const productsData = [
  {
    id: 1,
    attributes: {
      productName: "Blue Calming Serum",
      productPrice: 7.99,
      productOnSale: true,
      productSalePrice: 10.38,
      productImage: {
        url: blueSerum,
      },
      productColor: "#CBDBE7",
      productId: "price_1OgLhLLc6ttNgieVuI1glMKd",
      productType: "serum",
      productFilter: "calming",
      productSalePercent: 30,
    },
  },
  {
    id: 2,
    attributes: {
      productName: "White Moisturizing Serum",
      productPrice: 7.99,
      productOnSale: false,
      productSalePrice: null,
      productImage: {
        url: whiteSerum,
      },
      productColor: "#E2E2E2",
      productId: "price_1OgKT4Lc6ttNgieVjxdkHg4m",
      productType: "serum",
      productFilter: "moisturizing",
      productSalePercent: null,
    },
  },
  {
    id: 3,
    attributes: {
      productName: "Orange Brightening Serum",
      productPrice: 8.99,
      productOnSale: true,
      productSalePrice: 11.65,
      productImage: {
        url: orangeSerum,
      },
      productColor: "#F1D6C2",
      productId: "price_1OgLoOLc6ttNgieVOpDq6vlZ",
      productType: "serum",
      productFilter: "brightening",
      productSalePercent: 30,
    },
  },
  {
    id: 4,
    attributes: {
      productName: "Yellow Brightening Serum",
      productPrice: 9.99,
      productOnSale: false,
      productSalePrice: null,
      productImage: {
        url: yellowSerum,
      },
      productColor: "#F1E7CE",
      productId: "price_1OgLp9Lc6ttNgieVFM8IRwIj",
      productType: "serum",
      productFilter: "brightening",
      productSalePercent: null,
    },
  },
  {
    id: 5,
    attributes: {
      productName: "Pink Calming Serum",
      productPrice: 10.99,
      productOnSale: false,
      productSalePrice: null,
      productImage: {
        url: pinkSerum,
      },
      productColor: "#F1D6CE",
      productId: "price_1OgLpfLc6ttNgieVs2oPVHvy",
      productType: "serum",
      productFilter: "calming",
      productSalePercent: null,
    },
  },
  {
    id: 6,
    attributes: {
      productName: "Green Calming Serum",
      productPrice: 7.99,
      productOnSale: true,
      productSalePrice: 10.38,
      productImage: {
        url: greenSerum,
      },
      productColor: "#CDE0BF",
      productId: "price_1OgLq6Lc6ttNgieVClkrFXDE",
      productType: "serum",
      productFilter: "calming",
      productSalePercent: 30,
    },
  },
  {
    id: 7,
    attributes: {
      productName: "Grey Pore Clearing Cream",
      productPrice: 11.99,
      productOnSale: false,
      productSalePrice: null,
      productImage: {
        url: greyCream,
      },
      productColor: "#CBCBCB",
      productId: "price_1OgLqhLc6ttNgieViaPML9o0",
      productType: "cream",
      productFilter: "brightening",
      productSalePercent: null,
    },
  },
  {
    id: 8,
    attributes: {
      productName: "White Moisturizing Cream",
      productPrice: 11.99,
      productOnSale: true,
      productSalePrice: 14.99,
      productImage: {
        url: whiteCream,
      },
      productColor: "#E2E2E2",
      productId: "price_1OgLsULc6ttNgieV5bJT2XOU",
      productType: "cream",
      productFilter: "moisturizing",
      productSalePercent: 25,
    },
  },
  {
    id: 9,
    attributes: {
      productName: "Yellow Brightening Cream",
      productPrice: 11.99,
      productOnSale: true,
      productSalePrice: 14.99,
      productImage: {
        url: yellowCream,
      },
      productColor: "#F1E7CE",
      productId: "price_1OgLsyLc6ttNgieVRN2WlC8s",
      productType: "cream",
      productFilter: "brightening",
      productSalePercent: 25,
    },
  },
  {
    id: 10,
    attributes: {
      productName: "Blue Calming Cream",
      productPrice: 11.99,
      productOnSale: false,
      productSalePrice: null,
      productImage: {
        url: blueCream,
      },
      productColor: "#CBDBE6",
      productId: "price_1OgLtlLc6ttNgieVB4dlR0dT",
      productType: "cream",
      productFilter: "calming",
      productSalePercent: null,
    },
  },
  {
    id: 11,
    attributes: {
      productName: "Pink Calming Cream",
      productPrice: 11.99,
      productOnSale: false,
      productSalePrice: null,
      productImage: {
        url: pinkCream,
      },
      productColor: "#F1D6CE",
      productId: "price_1OgLuDLc6ttNgieVJTAvAh2V",
      productType: "cream",
      productFilter: "calming",
      productSalePercent: null,
    },
  },
  {
    id: 12,
    attributes: {
      productName: "Green Calming Cream",
      productPrice: 11.99,
      productOnSale: true,
      productSalePrice: 15.58,
      productImage: {
        url: greenCream,
      },
      productColor: "#CDE0BF",
      productId: "price_1OgLugLc6ttNgieVMiitNRHt",
      productType: "cream",
      productFilter: "calming",
      productSalePercent: 30,
    },
  },
];

export default productsData;
