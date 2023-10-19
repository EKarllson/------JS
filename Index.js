const myCity = {
  city: {
    mainCity: "Moscow",
    bigCityOne: "Sankt Peterburg",
    bigCityTwo: "Rostov",
  },
  country: "Russia",
  popular: true,
};
myCity.pi = 125;
const religionName = "religion";
myCity[religionName] = "Catholic";
console.log(myCity.city.bigCityOne);
