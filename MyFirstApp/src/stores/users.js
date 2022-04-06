import { defineStore } from "pinia";

export const useUsersStore = defineStore({
  id: "users",

  state: () => ({
    users: [
      {
        name: "Nicolaiciuc Anastasia",
        phone: "0123456",
        email: "anastasia@mail.ru",
      },
      {
        name: "Vantu Galina",
        phone: "0456372",
        email: "galina@mail.com",
      },
      {
        name: "Poplavski Ion",
        phone: "09383762",
        email: "ion@mail.com",
      },
      {
        name: "Ciobanu Daniel",
        phone: "04242123",
        email: "daniel@mail.com",
      },
    ],
  }),
  getters: {
    getUsers: (state) => state.users,
  },
});
