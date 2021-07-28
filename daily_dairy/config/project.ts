interface I_Project {
  name: String;
  description: String;
  linkToRepo: String;
  coreDevelopers: String;
}

export const project: I_Project = {
  name: "Daily Dairy",
  description:
    "Description of the project in not more than one line. Some cool emojis 😉 would also look good ",
  linkToRepo: "https://github.com/Aarush-Goyal/next-and-chakra",
  //   coreDevelopers: "Aarush Goyal and John Doe",
  coreDevelopers: "Aarush Goyal",
};
