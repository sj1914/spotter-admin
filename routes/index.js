const express = require("express");
const { check, validationResult } = require("express-validator");
const firebase = require("firebase/app");
const firestore = require("firebase/firestore");

const router = express.Router();

router.get("/", (req, res) => {
  const dogBreedsRef = firebase.firestore().collection("dog_breeds");
  const doggos = [];
  let allDogBreeds = dogBreedsRef
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        const json = doc.data();
        const dogBreedJSON = JSON.stringify(json);
        const dogBreed = JSON.parse(dogBreedJSON);
        console.log(dogBreed);
        doggos.push(dogBreed);
      });
      res.render("form", { title: "Add new Doggo", dogs: doggos });
    })
    .catch((err) => {
      console.log("Error getting documents", err);
    });
});

router.post(
  "/",
  [check("breed").isLength({ min: 1 }).withMessage("Please fill all fields.")],
  (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      res.send("Thank you for your registration!");
    } else {
      res.render("form", {
        title: "Spotter Admin Panel",
        errors: errors.array(),
        data: req.body,
      });
    }
  }
);

module.exports = router;
