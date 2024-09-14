import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Sidebar
      dashboard: "Dashboard",
      purchases: "Purchases",
      sales: "Sales",
      firms: "Firms",
      brands: "Brands",
      products: "Products",
      // Table
      tableId: "Id",
      tableDate: "Date",
      tableFirm: "Firm",
      tableBrand: "Brand",
      tableProductName: "Product Name",
      tableQuantity: "Quantity",
      tablePrice: "Price",
      tableAmount: "Amount",
      tableActions: "Actions",
      // Buttons
      createProduct: "Create Product",
      createBrand: "Create Brand",
      createFirm: "Create Firm",
      addNewSale: "Add New Sale",
      addNewPurchase: "Add New Purchase",
      buttonUpdate: "Update",
      buttonDelete: "Delete",
      // Kpi Cards
      totalSales: "Sales",
      totalCash: "Cash",
      totalPurchases: "Purchases",
      // Charts
      chartSale: "sale",
      chartPurchase: "purchase",
      //Modals
      updatePurchase: "Update Purchase",
      updateSale: "Update Sale",
      updateFirm: "Update Firm",
      updateBrand: "Update Brand",
      updateProduct: "Update Product",
      labelFirm: "Firm",
      labelBrand: "Brand",
      labelProduct: "Product",
      labelQuantity: "Quantity",
      labelCategory: "Category",
      labelProductPrice: "Product Price",
      labelFirmName: "Firm Name",
      labelFirmAddress: "Firm Address",
      labelPhoneNumber: "Phone Number",
      labelFirmImage: "Firm Image",
      labelBrandName: "Brand Name",
      labelBrandImage: "Brand Image",
      labelProductName: "Product Name",
    },
  },
  de: {
    translation: {
      // Sidebar
      dashboard: "Dashboard",
      purchases: "Einkäufe",
      sales: "Verkäufe",
      firms: "Firmen",
      brands: "Marken",
      products: "Produkte",
      // Table
      tableId: "Id",
      tableDate: "Datum",
      tableFirm: "Firma",
      tableBrand: "Marke",
      tableProductName: "Produkt Name",
      tableQuantity: "Menge",
      tablePrice: "Preis",
      tableAmount: "Betrag",
      tableActions: "Aktionen",
      // Buttons
      createProduct: "Produkt erstellen",
      createBrand: "Marke erstellen",
      createFirm: "Firma erstellen",
      addNewSale: "Neuen Verkauf hinzufügen",
      addNewPurchase: "Neuen Einkauf hinzufügen",
      buttonUpdate: "Aktualisieren",
      buttonDelete: "Löschen",

      // Kpi Cards
      totalSales: "Verkäufe",
      totalCash: "Bargeld",
      totalPurchases: "Einkäufe",
      // Charts
      chartSale: "Verkauf",
      chartPurchase: "Einkauf",
      //Modals
      updatePurchase: "Einkauf aktualisieren",
      updateSale: "Verkauf aktualisieren",
      updateFirm: "Firma aktualisieren",
      updateBrand: "Marke aktualisieren",
      updateProduct: "Produkt aktualisieren",
      labelFirm: "Firma",
      labelBrand: "Marke",
      labelProduct: "Produkt",
      labelQuantity: "Menge",
      labelCategory: "Kategorie",
      labelProductPrice: "Produkt Preis",
      labelFirmName: "Firmenname",
      labelFirmAddress: "Firmenadresse",
      labelPhoneNumber: "Telefonnummer",
      labelFirmImage: "Firmenfoto",
      labelBrandName: "Markenname",
      labelBrandImage: "Markenfoto",
      labelProductName: "Produktname",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "de",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
