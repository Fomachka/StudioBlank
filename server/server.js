require("dotenv").config();

const express = require("express");
var cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  try {
    const items = req.body.items;
    let lineItems = [];

    for (let item of items) {
      lineItems.push({
        price: item.attributes.productId,
        quantity: item.quantity,
      });
    }

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    res.send(
      JSON.stringify({
        url: session.url,
      })
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default app;
