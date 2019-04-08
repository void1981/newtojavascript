/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
    name: "Abdelrahman ",
    friends: 7,
    messages: ["Hello from Germany"],
    postMessage: function (message) {
        return this.messages.push(message);
    },
    deleteMessage: function (index) {
        return this.messages.splice(index, 1);
    },
    addFriend: function () {
        return this.friends += 1;
    },
    removeFriend: function () {
        return this.friends -= 1;
    }
}
facebookProfile.postMessage("I am learning JS.");
console.log(facebookProfile.messages)
facebookProfile.deleteMessage(1)
console.log(facebookProfile.messages)