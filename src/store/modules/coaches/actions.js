import axios from "axios";
export default {
  async registerCoach(context, data) {
    const CoachData = {
      id: "a10",
      firstname: data.firstname,
      lastname: data.lastname,
      hourlyRate: data.rate,
      descriptions: data.descriptions,
      areas: data.areas,
    };

    const response = await axios.post(
      "https://saqib-iyrix-default-rtdb.firebaseio.com/coaches.json",
      CoachData
    );
    console.log(response.CoachData);

    context.commit("registerCoach", CoachData);
  },
  async getCoaches(context, data) {
    const response = await axios.get(
      "https://saqib-iyrix-default-rtdb.firebaseio.com/coaches.json"
    );
    data = response.data;
    console.log(data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
    const coaches = [];
    for (const key in data) {
      const newData = {
        id: key,
        firstname: data[key].firstname,
        lastname: data[key].lastname,
        hourlyRate: data[key].hourlyRate,
        descriptions: data[key].descriptions,
        areas: data[key].areas,
      };
      coaches.push(newData);
    }
    context.commit("setCoaches", coaches);
  },
};
