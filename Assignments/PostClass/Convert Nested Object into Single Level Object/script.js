// https://my.newtonschool.co/playground/code/hkquwnv5ypq8

let resultObj = {};
function flatTheObj(obj, parent) {
  // Write your code here

  for (let key in obj) {
    const value = obj[key];
    const isKeyStoringObjects = typeof value === "object";

    if (isKeyStoringObjects) {
      flatTheObj(value, `${parent}_${key}`);
    } else {
      resultObj[`${parent}_${key}`] = value;
    }

    console.log(key, value, isKeyStoringObjects);
  }

  return resultObj;
}

const obj = {
  address: { personal: "Bangalore", area: "Koramangala" },
  office: { state: "Hyderabad", area: { landmark: "HitechCity" } },
  name: "Amit",
};

const answer = {
  user2_address_personal: "Bangalore",
  user2_address_area: "Koramangala",
  user2_office_state: "Hyderabad",
  user2_office_area_landmark: "HitechCity",

  user2_name: "Amit",
};

flatTheObj(obj, "user2");
// flatTheObj({ personal: "Bangalore", area: "Koramangala" }, "user2_address");
