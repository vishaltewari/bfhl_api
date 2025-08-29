const FULL_NAME = "vishal_tiwari";
const DOB = "01022005"; 
const EMAIL = "vt@xyz.com";
const ROLL_NUMBER = "22BLC1233";

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    return res.status(200).json({
      operation_code: 1
    });
  }

  if (req.method === 'POST') {
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

      let joinedAlphabets = alphabetsForConcat.join("");
      let reversedString = joinedAlphabets.split("").reverse().join("");
      
      let concat_string = "";
      for (let i = 0; i < reversedString.length; i++) {
        if (i % 2 === 0) {
          concat_string += reversedString[i].toUpperCase();
        } else {
          concat_string += reversedString[i].toLowerCase();
        }
      }

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
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
