const express = require("express");
const app = express();
app.use(express.json());

const FULL_NAME = "john_doe";
const DOB = "17091999"; 
const EMAIL = "john@xyz.com";
const ROLL_NUMBER = "ABCD123";

// GET route for operation_code
app.get("/bfhl", (req, res) => {
  return res.status(200).json({
    operation_code: 1
  });
});

app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body;
    if (!Array.isArray(data)) {
      return res.status(400).json({ is_success: false, message: "Invalid input" });
    }

    let even_numbers = [];
    let odd_numbers = [];
    let alphabets = [];
    let special_characters = [];
    let sum = 0;
    let alphabetsForConcat = [];

    for (const item of data) {
      
      if (/^-?\d+$/.test(item)) {
        const num = parseInt(item, 10);
        sum += num;
        if (num % 2 === 0) {
          even_numbers.push(item);
        } else {
          odd_numbers.push(item);
        }
      } 
      
      else if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
        alphabetsForConcat.push(item);
      } 
      
      else {
        special_characters.push(item);
      }
    }

    let concat_string = alphabetsForConcat
      .join("")
      .split("")
      .reverse()
      .map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
      .join("");

    return res.status(200).json({
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concat_string
    });
  } catch (err) {
    return res.status(500).json({ is_success: false, message: "Server error" });
  }
});

const PORT = process.env.PORT || 3000;


if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}


module.exports = app;
