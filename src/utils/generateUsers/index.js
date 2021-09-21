import {
  firstNames,
  lastNames,
  mails,
  genders,
  phoneNumbers,
  companyNames,
  streetAddresses,
  cityNames,
  states,
  countryCodes,
  zipCodes,
} from "./constant";

export function generateUser(no) {
  const user = {};

  user.no = no;
  user.firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  user.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  user.age = Math.floor(Math.random() * (55 - 24) + 24);
  user.gender = genders[Math.floor(Math.random() * genders.length)];
  user.userName = `${user.firstName}.${user.lastName}`.toLowerCase();
  user.email = `${user.userName}@${
    mails[Math.floor(Math.random() * mails.length)]
  }`;
  user.url = `http://linkedin.com/${user.userName}`;
  user.phoneNumber =
    phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)];
  user.companyName =
    companyNames[Math.floor(Math.random() * companyNames.length)];
  user.streetAddress =
    streetAddresses[Math.floor(Math.random() * streetAddresses.length)];
  user.cityName = cityNames[Math.floor(Math.random() * cityNames.length)];
  user.state = states[Math.floor(Math.random() * states.length)];
  user.countryCode =
    countryCodes[Math.floor(Math.random() * countryCodes.length)];
  user.zipCode = zipCodes[Math.floor(Math.random() * zipCodes.length)];

  return user;
}

export function getData(dataCount = 1000) {
  const users = [];

  for (let i = 1; i <= dataCount; i++) {
    const user = generateUser(i);

    users.push(user);
  }

  return users;
}
