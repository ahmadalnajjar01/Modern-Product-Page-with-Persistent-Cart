# 🛒 Modern Product Page

A responsive e-commerce product page with persistent shopping cart functionality built with React and TypeScript.

## ✨ Features

- **Product Catalog** - Browse products from FakeStoreAPI
- **Shopping Cart** - Add/remove items with quantity controls
- **Persistent Storage** - Cart data survives page refreshes
- **Responsive Design** - Works on all screen sizes
- **Real-time Updates** - Live cart totals and quantities

## 🛠️ Tech Stack

- **React** + **TypeScript** - Modern UI framework with type safety
- **TailwindCSS** - Utility-first CSS framework
- **TanStack Query** - Data fetching and caching
- **localStorage** - Cart persistence
- **Axios** - HTTP client for API calls

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/your-username/modern-product-page.git

# Navigate to project
cd modern-product-page

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📦 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## 🔧 Project Structure

```
src/
├── components/     # Reusable UI components
├── hooks/         # Custom React hooks
├── types/         # TypeScript definitions
├── services/      # API service layer
└── utils/         # Helper functions
```

## 📡 API

This project uses the [FakeStore API](https://fakestoreapi.com/) to fetch product data:

- `GET /products` - Fetch all products
- `GET /products/{id}` - Fetch single product
- `GET /products/categories` - Fetch categories

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

---

**Made with ❤️ using React + TypeScript**
