// Importing required modules
const express = require('express');
const router = express.Router();

// Sample database for ticket bookings (temporary for development)
const bookings = [];

// Route: Get all bookings
router.get('/bookings', (req, res) => {
    res.status(200).json({
        success: true,
        data: bookings,
    });
});

// Route: Create a new booking
router.post('/book', (req, res) => {
    const { name, email, showDate, seatNumber } = req.body;

    // Basic validation
    if (!name || !email || !showDate || !seatNumber) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required',
        });
    }

    const newBooking = {
        id: bookings.length + 1,
        name,
        email,
        showDate,
        seatNumber,
        bookedAt: new Date(),
    };

    bookings.push(newBooking);

    res.status(201).json({
        success: true,
        message: 'Booking created successfully',
        data: newBooking,
    });
});

// Route: Cancel a booking by ID
router.delete('/cancel/:id', (req, res) => {
    const bookingId = parseInt(req.params.id, 10);
    const index = bookings.findIndex((b) => b.id === bookingId);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: 'Booking not found',
        });
    }

    bookings.splice(index, 1);

    res.status(200).json({
        success: true,
        message: 'Booking cancelled successfully',
    });
});

module.exports = router;
