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
delete myCity.city["bigCityTwo"];
console.log(myCity);

const Mname = "Karl";
const postsQny = 101;
const userProfile = {
  Mname: Mname,
  postsQny: postsQny,
  pet: false,
};
console.log(userProfile);

const Fname = "Karla";
const postsQny1 = 11;
const userProfileTwo = {
  Fname,
  postsQny1,
};
console.log(userProfileTwo);
