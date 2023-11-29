const asyncWrapper = require("../middleWare/asyncWrapper");

// process the payment
exports.processPayment = asyncWrapper(async (req, res, next) => {
  const stripe = require("stripe")('sk_test_51OGgzcCEhyZFVCDrHpeilGwo8stzinqL4icLCnBR4A2NfvmX7UMeU4K9Rzojh7a6gTuBuTCJI3b29t9BNv9Xn1rz00q1rlE9lm'); // asigning key as well

  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "Ecommerce", // not mandatory
    },
  });

  res
    .status(200)
    .json({ sucess: true, client_secret: myPayment.client_secret });
});

// send STRIPE_API_KEY to user =>

exports.sendStripeApiKey = asyncWrapper(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: 'pk_test_51OGgzcCEhyZFVCDrivPCU9JDSVOoP1hbJpUBzYtmzEoaOdYPeNNu417TgxUtfr0wPCr4G15AGHseuSaWnylhocP600U36OZy98' });
});
