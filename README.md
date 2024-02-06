# 🎬 Filmpire

Filmpire is a React application developed out of my passion for Web Development. This application provides users with information about a wide variety of films, allowing them to search for films, view detailed information, and save their favorite films.

## 🌐 Live Website

The application is live and hosted on Azure using Docker image. You can access it [here](https://filmpire.azurewebsites.net/).

## 📸 Screenshot

-   Application Home Page Screenshot - Light Mode
    ![Application Home Page Screenshot - Light Mode](.//src//assets/ScreenShots/SS_light.png)
-   Application Home Page Screenshot - Dark Mode
    ![Application Home Page Screenshot - Dark Mode](.//src//assets/ScreenShots/SS_dark.png)

## 🌟 Features

-   Search for films by title 🕵️‍♂️
-   View detailed information about each film and actor 🎞️🎭
-   Save favorite films for creating a favorite movie list 📝
-   Watchlist movies for later viewing 📺
-   Theme Options - Dark Mode & Light Mode 🌓
-   Voice AI integration with Alan AI 🗣️

## 📄 Pages

1. **Home Page**: The landing page where users can search for films.
2. **Movie Information Page**: Displays detailed information about a selected film.
3. **Actor's Page**: Displays detailed information about the Actor and a list of their movies.
4. **Profile Page**: Displays information about your TMDB profile, and lists your Favorited and Watchlisted movies.

## 🛠️ Technologies Used

-   **React**: A JavaScript library for building user interfaces, used latest React 18 features.
-   **React Router**: A standard routing library for React.
-   **Axios**: A Promise-based HTTP client for JavaScript.
-   **Material UI**: A popular React UI framework for designing and styling the app.
-   **Alan AI**: Voice AI platform for creating conversational experiences in applications.
-   **TMDB API**: API used for fetching movie data.
-   **Docker**: Docker Compose used for containerizing the application.
-   **Azure**: The application is hosted on Azure Web Services using Azure Container Registry.

## 🚀 Installation

To install and run this project locally on your machine, follow the steps below.

1. Clone the repository:

```bash
git clone https://github.com/Amit-10101/Filmpire-AI-Powered-Movie-App.git
```

2. Navigate into the project directory:

```bash
cd Filmpire-AI-Powered-Movie-App
```

3. Install the project dependencies:

```bash
npm install
```

4. Start the application:

```bash
npm run dev
```

The application will start running on http://localhost:5173.

## 🐳 Dockerization

This application is dockerized using Docker Compose. For more information on how to build and run the Docker container, please refer to the [README.Docker.md](./README.Docker.md) file.

## ☁️ Hosting

The application is hosted on Azure Web Services using Azure Container Registry. Azure's load balancing capabilities ensure high availability and scalability for the application, effectively distributing incoming traffic for optimal performance.

Happy coding! 💻
