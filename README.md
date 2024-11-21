# Beetlejuice Tour Backend

This repository contains the backend code for the official **Beetlejuice Tour** website. It handles the core logic for managing ticket bookings, show schedules, and other server-side functionalities to support the website and related services.

## Features

- **Ticket Booking**: Allows users to book tickets for various show dates and seat selections.
- **Booking Management**: View, create, and cancel ticket bookings.
- **User Management**: (Coming soon) Integrate user authentication for account management and personalized features.
- **Show Scheduling**: Manage and display the schedule of Beetlejuice performances.

## Tech Stack

- **Node.js**: JavaScript runtime to build the backend services.
- **Express.js**: Web framework for Node.js used to set up routes and handle HTTP requests.
- **Temporary in-memory database**: For storing bookings (to be replaced with a real database).

## Setup & Installation

Follow these steps to set up the project locally:

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 16 or higher)

### Steps to Install

1. Clone the repository:

    ```bash
    git clone https://github.com/beetlejuice-tour/backend.git
    ```

2. Navigate to the project directory:

    ```bash
    cd backend
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Run the server:

    ```bash
    npm start
    ```

The server will start on `http://localhost:3000`.

## API Endpoints

### 1. **GET /bookings**

- **Description**: Retrieve all ticket bookings.
- **Response**: A list of all bookings.
  
### 2. **POST /book**

- **Description**: Create a new ticket booking.
- **Request Body**:

    ```json
    {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "showDate": "2024-12-01",
        "seatNumber": "A5"
    }
    ```

- **Response**: Details of the newly created booking.

### 3. **DELETE /cancel/:id**

- **Description**: Cancel a booking by ID.
- **Response**: Confirmation that the booking has been cancelled.

## Contributing

We welcome contributions to improve the backend! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Commit your changes.
4. Push to your fork.
5. Submit a pull request with a description of your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or questions, feel free to reach out to us at [support@beetlejuice-tour.com](mailto:support@beetlejuice-tour.com).
