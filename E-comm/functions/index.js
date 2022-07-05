const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require('express');
const cors = require('cors');
const { request, response } = require("express");
const stripe = require('stripe')('sk_test_51LH2eISJNRbShVqb3kLlIDpJDDSqzmatbgOKXPYOidVhxhkTOyK7pVN0GgomN0yLLVRP8JD0iLIuyGAZ78QLjb3c00cRZEap2p');



const app = express();

app.use(cors({origin: true}));
app.use(express.json());


app.get('/', (request, response) => response.status(200).send('hello'));
app.post('/payments/create', async(request, response) => {
    const total = request.query.total;  //in payment url total is present - that val
    console.log('payment request', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'inr',
        //it will be in cents

    });

    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    });
});   //in payment.js



exports.api = functions.https.onRequest(app);



//http://localhost:5001/clone-9e22d/us-central1/api
