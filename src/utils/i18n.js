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
      register: "Register",
      // Kpi Cards
      totalSales: "Sales",
      totalCash: "Cash",
      totalPurchases: "Purchases",
      // Charts
      chartSale: "sale",
      chartPurchase: "purchase",
      // Modals
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
      // Home
      homeTitle:
        "Simplify Your Company's Stock Management with Powerful Analytics and Visuals",
      homeDescription:
        "Effortlessly manage your company's inventory and track stock levels with real-time insights, detailed reports, and intuitive visualizations.",
      createAccount: "Create your account",
      login: "Login",
      // Toast
      sucRegister:
        "You have successfully registered! Thank you for joining us.",
      sucLogin: "You have successfully logged in!",
      sucLogout:
        "You have successfully logged out! Hope to see you again soon.",
      errRegister: "Registration failed! Please try again.",
      errLogin: "Login failed! Please check your credentials and try again.",
      errLogout: "Logout failed! Please try again.",
      successMessage: "Operation was successful.",
      errorMessage: "Operation failed.",
      // Forms
      userName: "Username",
      password: "Password",
      firstName: "First Name",
      lastName: "Last Name",
      email: "E-Mail",
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
      register: "Registrieren",
      // Kpi Cards
      totalSales: "Verkäufe",
      totalCash: "Bargeld",
      totalPurchases: "Einkäufe",
      // Charts
      chartSale: "Verkauf",
      chartPurchase: "Einkauf",
      // Modals
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
      labelProductPrice: "Produktpreis",
      labelFirmName: "Firmenname",
      labelFirmAddress: "Firmenadresse",
      labelPhoneNumber: "Telefonnummer",
      labelFirmImage: "Firmenfoto",
      labelBrandName: "Markenname",
      labelBrandImage: "Markenfoto",
      labelProductName: "Produktname",
      // Home
      homeTitle:
        "Vereinfachen Sie Ihre Lagerverwaltung mit Analysen und Visualisierungen.",
      homeDescription:
        "Verwalten Sie den Lagerbestand Ihres Unternehmens mit Echtzeit-Einblicken und intuitiven Visualisierungen.",
      createAccount: "Erstellen Sie Ihr Konto",
      login: "Anmelden",
      // Toast
      sucRegister:
        "Sie haben sich erfolgreich registriert! Vielen Dank, dass Sie sich uns angeschlossen haben.",
      sucLogin: "Sie haben sich erfolgreich eingeloggt!",
      sucLogout:
        "Sie haben sich erfolgreich abgemeldet! Hoffentlich sehen wir uns bald wieder.",

      errRegister:
        "Registrierung fehlgeschlagen! Bitte versuchen Sie es erneut.",
      errLogin:
        "Anmeldung fehlgeschlagen! Bitte überprüfen Sie Ihre Anmeldedaten und versuchen Sie es erneut.",
      errLogout: "Abmeldung fehlgeschlagen! Bitte versuchen Sie es erneut.",
      successMessage: "Der Vorgang war erfolgreich.",
      errorMessage: "Der Vorgang ist fehlgeschlagen.",
      // Forms
      userName: "Benutzername",
      password: "Passwort",
      firstName: "Vorname",
      lastName: "Nachname",
      email: "E-Mail",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
