export interface RestaurantInfo {
  name: string;
  tagline: string;
  phone: string;
  phoneRaw: string;
  whatsappNumber: string;
  address: {
    street: string;
    area: string;
    district: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
  };
  googleMapsUrl: string;
  openingHours: string;
  openingHoursSchedule: {
    days: string;
    time: string;
  }[];
  services: {
    delivery: {
      title: string;
      tagline: string;
      available: boolean;
      note: string;
    };
    catering: {
      title: string;
      tagline: string;
      available: boolean;
      note: string;
    };
  };
}

export const RESTAURANT_INFO: RestaurantInfo = {
  name: "ATTU Restaurant & Fast Food",
  tagline: "The Authentic Food",
  phone: "+91 75014 96177",
  phoneRaw: "+917501496177",
  whatsappNumber: "917501496177",
  address: {
    street: "Vivekananda Sarani",
    area: "Hanskhali, Gobindapur",
    district: "Nadia",
    state: "West Bengal",
    pincode: "741505",
    country: "India",
    full: "Vivekananda Sarani, Hanskhali, Gobindapur, West Bengal 741505, India"
  },
  googleMapsUrl: "https://maps.app.goo.gl/1QBfckdWWYrQrgJc6",
  openingHours: "12:00 PM to 10:30 PM, every day (subject to verification)",
  openingHoursSchedule: [
    { days: "Monday – Sunday", time: "12:00 PM – 10:30 PM" }
  ],
  services: {
    delivery: {
      title: "Home Delivery Available",
      tagline: "Enjoy your favourite food from ATTU Restaurant & Fast Food at home.",
      available: true,
      note: "Delivery charges, minimum order amount, estimated delivery time, and delivery service areas are confirmed directly by restaurant staff upon call or WhatsApp order."
    },
    catering: {
      title: "Catering Services by ATTU Restaurant & Fast Food",
      tagline: "Planning a celebration or special event? Contact ATTU for catering enquiries.",
      available: true,
      note: "Custom packages for parties, family gatherings, birthdays, weddings, corporate events, and special occasions. Quotations provided based on customer requirements."
    }
  }
};
