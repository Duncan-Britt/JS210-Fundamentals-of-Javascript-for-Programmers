// let greetingMessage = "Good Morning!";
//
// function greetPeople() {
//   console.log(greetingMessage);
// }
//
// function changeGreetingMessage(newMessage) {
//   greetingMessage = newMessage;
// }
//
// changeGreetingMessage("Good Evening");
// greetPeople();

function main() {
  let greetingMessage = "Good Morning!";

  function greetPeople() {
    console.log(greetingMessage);
  }

  function changeGreetingMessage(newMessage) {
    greetingMessage = newMessage;
  }

  changeGreetingMessage("Good Evening");
  greetPeople();
}

main();
