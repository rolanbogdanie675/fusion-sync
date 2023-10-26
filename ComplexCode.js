/*
Filename: ComplexCode.js

This code demonstrates a complex and sophisticated implementation of a chatbot that can hold conversations and provide helpful information about various topics.
*/

class Chatbot {
  constructor(name) {
    this.name = name;
  }

  // Utility function to simulate typing effect
  async typeMessage(message) {
    for (let i = 0; i < message.length; i++) {
      process.stdout.write(message.charAt(i));
      await this.sleep(30);
    }
    console.log("\n");
  }
  
  // Utility function to introduce the chatbot
  async introduce() {
    await this.typeMessage(`Hello! I am ${this.name}, a sophisticated chatbot. How can I assist you today?`);
  }

  // Utility function to simulate delay
  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Function to handle user input and initiate conversation
  async start() {
    await this.introduce();

    while (true) {
      const userInput = prompt("> ");

      if (userInput.toLowerCase().includes("exit")) {
        await this.typeMessage(`Goodbye! Have a great day.`);
        break;
      } else {
        const response = this.generateResponse(userInput);
        await this.typeMessage(response);
      }
    }
  }

  // Function to generate appropriate responses based on user input
  generateResponse(userInput) {
    // Implement complex logic based on user input to generate appropriate response
    let response = "";

    if (userInput.toLowerCase().includes("weather")) {
      response = `The weather today is sunny with a temperature of 28°C.`;
    } else if (userInput.toLowerCase().includes("music")) {
      response = `I recommend listening to some classical music. It helps in relaxation and concentration.`;
    } else if (userInput.toLowerCase().includes("movie")) {
      response = `One of my favorite movies is "Inception". It's a mind-bending thriller that you might enjoy.`;
    } else {
      response = `I'm sorry, I don't have information on that topic. Is there something else I can assist you with?`;
    }

    return response;
  }
}

// Instantiating the chatbot and starting the conversation
const myChatbot = new Chatbot("Sophie");
myChatbot.start();