import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters";
export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: "a1",
          firstname: "Haider",
          lastname: "ali",
          areas: ["frontend", "backend", "career"],
          descriptions:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          hourlyRate: 30,
        },
        {
          id: "b2",
          firstname: "Usama",
          lastname: "haider",
          areas: ["html", "javascript", "database"],
          descriptions:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          hourlyRate: 40,
        },
        // {
        //   id: "c3",
        //   firstname: "Safyan",
        //   lastname: "ali",
        //   areas: ["frontend", "javascript", "career"],
        //   descriptions:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        //   hourlyRate: 20,
        // },
        // {
        //   id: "a4",
        //   firstname: "Usman",
        //   lastname: "ali",
        //   areas: ["frontend", "javascript", "career"],
        //   descriptions:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        //   hourlyRate: 20,
        // },
        // {
        //   id: "a5",
        //   firstname: "Abu Bakar",
        //   lastname: "ali",
        //   areas: ["frontend", "career"],
        //   descriptions:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        //   hourlyRate: 20,
        // },
      ],
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
};
