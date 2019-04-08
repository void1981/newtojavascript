//start your first JS program

var umbrella = {
  color: "pink",
  isOpen: false,
  Open: () => (isOpen = true)
};
umbrella.Open();
//console.log(umbrella.Open());
//console.log(typeof umbrella);

var sister = {
  name: "Sarah",
  age: 23,
  parents: ["Alice", "Andy"],
  siblings: ["Julia"],
  favoriteColor: "purple",
  pets: true,
  paint: function () {
    return this.pets ? false : true;
  }
};
//console.log(sister["parents"][1]);
//console.log(sister.arrow());

var user = {
  eMail: "user@example.com",
  firstName: "first",
  lastName: "last"
}
console.log(user.eMail)