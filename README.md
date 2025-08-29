# BFHL API

A RESTful API built with Node.js and Express.js that processes data arrays and categorizes them into numbers (odd/even), alphabets, and special characters.

## 🚀 Live Demo

**Deployed URL**: [https://your-vercel-app-name.vercel.app](https://your-vercel-app-name.vercel.app)

*Replace `your-vercel-app-name` with your actual Vercel deployment URL*

## 📋 API Endpoints

### GET `/bfhl`
Returns the operation code.

**Response:**
```json
{
  "operation_code": 1
}
```

### POST `/bfhl`
Processes input data and returns categorized results.

**Request Body:**
```json
{
  "data": ["M", "1", "334", "4", "B", "Z", "a", "7", "@", "#"]
}
```

**Response:**
```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1", "7"],
  "even_numbers": ["334", "4"],
  "alphabets": ["M", "B", "Z", "A"],
  "special_characters": ["@", "#"],
  "sum": "346",
  "concat_string": "AzBm"
}
```

## 🧪 Testing the API

### Method 1: Using cURL (Command Line)

#### Test GET Endpoint:
```bash
curl -X GET https://your-vercel-app-name.vercel.app/bfhl
```

#### Test POST Endpoint:
```bash
curl -X POST https://your-vercel-app-name.vercel.app/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a", "1", "b", "2", "c", "3", "#"]}'
```

### Method 2: Using PowerShell (Windows)

#### Test GET Endpoint:
```powershell
Invoke-WebRequest -Uri https://your-vercel-app-name.vercel.app/bfhl -Method GET
```

#### Test POST Endpoint:
```powershell
Invoke-WebRequest -Uri https://your-vercel-app-name.vercel.app/bfhl -Method POST -ContentType "application/json" -Body '{"data": ["a", "1", "b", "2", "c", "3", "#"]}'
```

### Method 3: Using Postman

1. **Download Postman**: [https://www.postman.com/downloads/](https://www.postman.com/downloads/)

2. **Test GET Request:**
   - Method: `GET`
   - URL: `https://your-vercel-app-name.vercel.app/bfhl`
   - Click Send

3. **Test POST Request:**
   - Method: `POST`
   - URL: `https://your-vercel-app-name.vercel.app/bfhl`
   - Headers: `Content-Type: application/json`
   - Body (raw JSON):
   ```json
   {
     "data": ["a", "1", "b", "2", "c", "3", "#"]
   }
   ```
   - Click Send

### Method 4: Using Online API Tester

You can use online tools like:
- [HTTPie](https://httpie.io/app)
- [Insomnia](https://insomnia.rest/)
- [Hoppscotch](https://hoppscotch.io/)

## 🧩 Test Cases

### Test Case 1: Mixed Data
```json
{
  "data": ["M", "1", "334", "4", "B", "Z", "a", "7", "@", "#"]
}
```

**Expected Response:**
```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1", "7"],
  "even_numbers": ["334", "4"],
  "alphabets": ["M", "B", "Z", "A"],
  "special_characters": ["@", "#"],
  "sum": "346",
  "concat_string": "AzBm"
}
```

### Test Case 2: Only Numbers
```json
{
  "data": ["1", "2", "3", "4", "5"]
}
```

### Test Case 3: Only Alphabets
```json
{
  "data": ["a", "B", "c", "D", "e"]
}
```

### Test Case 4: Only Special Characters
```json
{
  "data": ["@", "#", "$", "%", "&"]
}
```

### Test Case 5: Invalid Input (Error Case)
```json
{
  "data": "invalid"
}
```

**Expected Error Response:**
```json
{
  "is_success": false,
  "message": "Invalid input"
}
```

## 🏃‍♂️ Running Locally

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation Steps

1. **Clone the repository:**
```bash
git clone https://github.com/vishaltewari/bfhl_api.git
cd bfhl_api
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the server:**
```bash
npm start
# or
node server.js
```

4. **Test locally:**
The server will run on `http://localhost:3000`

```bash
# Test GET
curl -X GET http://localhost:3000/bfhl

# Test POST
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a", "1", "b", "2", "c", "3", "#"]}'
```

## 🏗️ Project Structure

```
bfhl-api/
├── api/
│   └── bfhl.js          # Vercel serverless function
├── node_modules/
├── .gitignore
├── package.json
├── package-lock.json
├── server.js            # Express server for local development
├── vercel.json          # Vercel deployment configuration
└── README.md
```

## 🚀 Deployment

This project is deployed on Vercel with automatic deployments from the `main` branch.

### Deploy Your Own Copy

1. Fork this repository
2. Sign up for [Vercel](https://vercel.com)
3. Connect your GitHub account
4. Import your forked repository
5. Deploy with default settings

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **Deployment**: Vercel
- **Version Control**: Git, GitHub

## 📝 API Logic

The API processes each item in the input array:

1. **Numbers**: Classified as odd or even, and summed up
2. **Alphabets**: Converted to uppercase and stored
3. **Special Characters**: Any non-alphanumeric characters
4. **Concatenation**: Alphabets are joined, reversed, and alternately case-modified

## ✅ Expected Behavior

- ✅ GET `/bfhl` returns `{"operation_code": 1}`
- ✅ POST `/bfhl` processes data array correctly
- ✅ Validates input (must be an array)
- ✅ Handles errors gracefully
- ✅ Returns proper HTTP status codes
- ✅ CORS enabled for web requests

## 🐛 Troubleshooting

### Common Issues:

1. **404 Error**: Check if you're using the correct URL
2. **405 Method Not Allowed**: Ensure you're using GET/POST methods
3. **400 Bad Request**: Verify your JSON syntax
4. **CORS Issues**: The API includes CORS headers

### Status Codes:
- `200`: Success
- `400`: Bad Request (invalid input)
- `405`: Method Not Allowed
- `500`: Internal Server Error

## 📧 Contact

If you encounter any issues while testing, please create an issue in this repository.

---

**Happy Testing! 🎉**
