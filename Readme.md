# Persona-AI

Persona-AI is an AI-powered web application that allows users to engage in interactive conversations with AI-driven personalities. Built using React, Node.js, and Express, this platform offers a unique and personalized chat experience, simulating the traits and behaviors of well-known personalities.

## 🚀 Features

- **Chat with AI Personalities**: Interact with personalities like Piyush Garg and Hitesh Choudhary, each with their unique traits and conversational styles.
- **Real-Time Communication**: Enjoy seamless and responsive chat functionality with typing indicators.
- **Modern Tech Stack**: Built with React for the frontend and Node.js with Express for the backend.
- **Customizable Personalities**: Easily add or modify personalities to expand the chat experience.
- **Scalable Architecture**: Designed to handle multiple users and personalities efficiently.

## 🛠️ Tech Stack

- **Frontend**: React, TailwindCSS, GSAP
- **Backend**: Node.js, Express, OpenAI API
- **Environment Management**: dotenv
- **Build Tool**: Vite



## 🖥️ Installation and Setup

Follow these steps to set up the project locally:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/Persona-AI.git
    cd Persona-AI
    ```

2. **Install Dependencies**:
    - Backend:
      ```bash
      cd server
      npm install
      ```
    - Frontend:
      ```bash
      cd ../client
      npm install
      ```

3. **Set Up Environment Variables**:
    - Backend: Add your OpenAI API key in [.env](http://_vscodecontentref_/4):
      ```
      API_KEY=your_openai_api_key
      PORT=4000
      ```
    - Frontend: Update the backend URL in [.env](http://_vscodecontentref_/5):
      ```
      VITE_URL=http://localhost:4000
      ```

4. **Start the Development Servers**:
    - Backend:
      ```bash
      cd server
      npm start
      ```
    - Frontend:
      ```bash
      cd ../client
      npm run dev
      ```

5. **Access the Application**:
    Open your browser and navigate to `http://localhost:3000`.

## 🤝 Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-name
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m "Add feature description"
    ```
4. Push to your branch:
    ```bash
    git push origin feature-name
    ```
5. Open a pull request.

## 📜 License

This project is licensed under the MIT License.

## 🌟 Acknowledgments

- Special thanks to the open-source community for their amazing tools and libraries.
- Inspired by the potential of AI to create engaging and interactive user experiences.

---

Feel free to explore, contribute, and enhance Persona-AI. Together, let's build something amazing!