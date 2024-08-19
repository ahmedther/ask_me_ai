## Ask Me AI (Educational AI for Kids)

## Overview

Educational AI for Kids is an innovative project designed to provide an engaging and interactive learning experience for children. The application supports **two languages: English and Arabic**, making it accessible to a broader audience. It features push-to-talk capabilities with talk-back abilities, enhancing the learning process through voice interaction.

## Features

- **Bilingual Support**: The application supports both English and Arabic, allowing children to learn in their preferred language.
- **Push-to-Talk:** Users can interact with the AI using a push-to-talk feature, making the experience more interactive and engaging.
- **Talk-Back Abilities**: The AI responds to user inputs, providing a conversational learning experience.
- **Real-Time Processing**: Utilizes Redis for efficient real-time data processing and storage.
- **Scalable and Reliable**: The backend is built with Express and served on PM2, ensuring scalability and reliability.
- **Modern Frontend**: The frontend is developed using React and served on Nginx, providing a smooth and responsive user interface.
- **Containerized Deployment**: The entire application is containerized using Docker and deployed using Kubernetes, simplifying deployment and management.

## Technologies Used

- **TypeScript**: For type-safe and scalable code.
- **Express**: Backend framework for building robust APIs.
- **PM2**: Process manager for Node.js applications, ensuring high availability.
- **Redis**: In-memory data structure store for real-time processing.
- **React**: Frontend library for building user interfaces.
- **Nginx**: Web server for serving the frontend application.
- **Docker**: Containerization platform for consistent and isolated environments.
- **Kubernetes**: Deployment and management platform for scalable and reliable applications.

## Getting Started

## Prerequisites

- Docker installed on your machine.
- Node.js and npm installed.
- Kubernetes installed (for deployment).

## Installation

1.  Clone the repository:

Bash

```
git clone https://github.com/ahmether/ask_me_ai.git
cd ask_me_ai
```

1.  Create a `.env` file in both the `nginx` and `backend` directories or provide environment variables in the `docker-compose.yml` file. Refer to `/backend/src/config/env.ts` and `/frontend/src/configs/configs.ts` for required variable names.
2.  Build and run the Docker containers:

Bash

```
docker-compose up --build
```

1.  Access the application at `http://localhost:80`

## Contributing

We welcome contributions from the community! Please read our contributing guidelines for more information.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or suggestions, feel free to open an issue or contact us at `aa10980@example.com`.
