# Week 3 — Node.js & Express.js REST API

## 📖 Topics Covered

- HTTP Server with Express.js
- REST API architecture (Representational State Transfer)
- CRUD operations (Create, Read, Update, Delete)
- Express Router for modular API design
- Body parser middleware (`express.json()`)
- URL parameters (`req.params`)
- Request body (`req.body`)
- Input validation (price range checking)

## 📁 Project Structure

```
ATP-Week-3/
├── server.js           # Entry point — Express app setup & port config
├── API/
│   ├── userAPI.js       # User CRUD routes (/user-api)
│   └── productAPI.js    # Product CRUD routes with price validation (/product-api)
├── req.http             # REST Client test requests
├── notes.md             # Learning notes
├── package.json         # Project metadata & dependencies
└── .gitignore
```

## 🔌 API Endpoints

### User API (`/user-api`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/user-api/users` | Get all users |
| GET | `/user-api/users/:id` | Get user by ID |
| POST | `/user-api/users` | Create a new user |
| PUT | `/user-api/users` | Update a user |
| DELETE | `/user-api/users/:id` | Delete a user by ID |

### Product API (`/product-api`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/product-api/products` | Get all products |
| GET | `/product-api/products/:brand` | Get product by brand |
| POST | `/product-api/products` | Create a product (price: ₹10k-₹50k) |
| PUT | `/product-api/products/:id` | Update a product |
| DELETE | `/product-api/products/:id` | Delete a product by ID |

## ▶️ How to Run

```bash
cd ATP-Week-3
npm install
node server.js
# Server runs on http://localhost:3000
```

## 🧪 Testing

Use the `req.http` file with the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) VS Code extension, or use Postman.
