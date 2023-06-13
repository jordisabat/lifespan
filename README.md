# Project LifeSpan

Welcome to LifeSpan, a simple application designed to collect health and habit data from users, providing insights and advice to improve their lifestyle, thereby extending their lifespan.

The technologies used in this project include:

- ReactJS
- Vite
- Vitest
- Tailwind
- TypeScript
- Prettier
- ESlint
- Chart.js
- DaisyUI
- OpenAI

## Getting Started

To set up the project on your local machine, follow these steps:

### Prerequisites

Ensure you have the following installed:

- Node.js (version 14.0 or later)
- npm (version 6.0 or later)

### Setup

1. **Clone the repository**

```bash
git clone https://github.com/jordisabat/lifespan.git
cd lifespan
```
2. **Start the Development Server

```npm run dev```

You can then access the app on `http://localhost:5173`.

3. **Install dependencies

```npm install```

4. **Start the Development Server

```npm run dev```

You can then access the app on `http://localhost:5173`.

### Project Structure

The project tries to maintain a clean and well-structured folder setup. Components are grouped into widgets and forms while helper libraries are kept separate.

```|-- src/
    |-- components/
        |-- widgets/
        |-- forms/
    |-- helpers/
    |-- styles/
    |-- tests/
    |-- index.tsx
```

### Testing

Unit tests and integration tests have been written to ensure code quality and functionality. To run these tests, use:

```npm run test```

### Code Style

To maintain a uniform code style, this project uses ESLint and Prettier. Before committing, ensure your changes adhere to these standards by running:

```npm run lint```

### Configuration

A openAI API Key is needed to be able to retrieve data from their services.


## Future Enhancements

While currently the application is quite simple and manages state through React's prop system, as the application grows, context management with React's Context API or Redux may be necessary for maintaining a clean codebase.

## OpenAI Setup

In order to generate health advice using ChatGPT, an OpenAI key is required. You can obtain an API key from the OpenAI website. This key needs to be added to the configuration settings of our project to connect with the OpenAI services.

**Note:** In this demonstration, we're making the OpenAI API call directly from the web page. This is done for demo purposes. However, in a production environment, it's highly recommended to make these calls from a secure backend server. This approach not only increases security but also enhances performance.

Here's a sample of how we use the OpenAI API:

```
{
    model: "gpt-3.5-turbo",
    messages: [
        {
            role: "user",
            content: {user-content}
            },
    ],
    max_tokens: 512,
    temperature: 0.5,
}
```
In this configuration, the messages array contains a conversation history where each message has a role (which can be 'system', 'user', or 'assistant') and content (which is the text of the message from the role). Here, we're setting the role to 'user' and the content to the user's query.

The values user.age, user.gender, etc. are the actual user's data. The max_tokens parameter controls the maximum length of the response from the model, and temperature controls the randomness of the output (lower values make the output more deterministic and focused).

A good practice when interacting with GPT-3 is to be explicit with your instructions and provide a clear context. 

``` 
content: `I am acting as a patient and I am giving you my health data for your analysis. Based on this data, please provide me with concise advice on how to improve my health and prolong my lifespan. Here is my data: 

- Age: ${user.age}
- Gender: ${user.gender}
- Exercise Frequency: ${user.exerciseFrequency}
- Diet: ${user.diet}
- Smoking Habits: ${user.smokingHabits}
- Alcohol Consumption: ${user.alcoholConsumption}
- Average Sleep Hours per day: ${user.sleepHours}
- Current Stress Level: ${user.stressLevel}

Based on this information, could you provide some health advice?`,
```

## UI/UX

The goal for this project was to create a minimalist and user-friendly interface that allows users to interact with the app seamlessly. The main font used throughout the app is Silka (both normal and bold variations).

### User Flow

1. **Welcome Page:** When a user first opens the app, they're greeted with a welcome page as no data is available at the start.

2. **Profile Setup:** The user will then navigate to the profile page where they have the option to enter their personal data and health habits.

3. **Dashboard:** Upon saving their profile data, some metrics are calculated and the user is taken to the dashboard page. This page provides a visual representation of the user's health data.

   - **Age Biomarkers:** The first set of widgets display various age biomarkers, such as the user's chronological age, biological age, blood age, etc.
   
   - **Habit Graphs:** The next section displays progress graphs based on the user's habits.
   
   - **Dummy Data Charts:** At the end of the dashboard, there are some charts (both linear and bar) which are populated with dummy data for demonstration purposes.
   
4. **Health Advice:** Lastly, based on the data provided by the user, there's a section that generates text advice on how to improve health and lifespan. This advice is generated by the OpenAI API.

This flow is designed to be intuitive and guide the user through the process of understanding and improving their health in a comprehensive and visually engaging manner.

## Screenshots

![image](https://github.com/jordisabat/lifespan/assets/8877242/7e44a028-6de2-484b-a2b9-253ed75fd527)

![image](https://github.com/jordisabat/lifespan/assets/8877242/548ba5b1-dea6-4dff-8419-2658583a1087)

![image](https://github.com/jordisabat/lifespan/assets/8877242/748a0858-8bc3-4ff0-b0da-927f11e465c8)






