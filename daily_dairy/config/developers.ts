interface I_Developer {
  name: String;
  role: String;
  description: String;
  imageSource: String;
}

export const developers: Array<I_Developer> = [
  {
    name: "Name of Developer",
    role: "Role of Developer",
    description:
      "Some medium length description of the developer and his role.",
    imageSource: "https://source.unsplash.com/random",
  },
];
