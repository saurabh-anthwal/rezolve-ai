import axios from "axios";

// Get Users
export async function getUsers() {
  try {
    const users = await axios.get(
      "https://dummyjson.com/users?skit=0&limit=100"
    );

    return users.data.users.map((user) => ({
      ...user,
      createdAt: getMonth(),
    }));
  } catch (error) {
    console.log(error);
  }
}

const months = [
  { id: 1, value: "Jan" },
  { id: 2, value: "Feb" },
  { id: 3, value: "Mar" },
  { id: 4, value: "Apr" },
  { id: 5, value: "May" },
  { id: 6, value: "Jun" },
  { id: 7, value: "Jul" },
  { id: 8, value: "Aug" },
  { id: 9, value: "Sep" },
  { id: 10, value: "Oct" },
  { id: 11, value: "Nov" },
  { id: 12, value: "Dec" },
];

// Getting random months
const getMonth = () => {
  return months[Math.floor(Math.random() * 12)].value;
};

// Preparing data for createdAt Over time/month
export const prepareCreatedAtData = (data) => {
  const formatedData = {};
  data.forEach((user) => {
    let i = months.findIndex((item) => item.value === user.createdAt);
    if (formatedData[months[i].value]) {
      formatedData[months[i].value].total += 1;
    } else {
      formatedData[months[i].value] = {};
      formatedData[months[i].value].total = 1;
      formatedData[months[i].value].id = months[i].id;
    }
  });

  const finalData = Object.keys(formatedData)
    .map((item) => ({
      month: item,
      totalUsers: formatedData[item].total,
      id: formatedData[item].id,
    }))
    .sort((a, b) => a.id - b.id);

  return finalData;
};

// Prepare data for pie chart / Users by type - male/female
export const prepareUsersDataByType = (data) => {
  let male = 0;
  let female = 0;
  data.forEach((user) => {
    if (user.gender === "male") {
      male++;
    } else if (user.gender === "female") {
      female++;
    }
  });
  return [
    { name: "male", value: male },
    { name: "female", value: female },
  ];
};
