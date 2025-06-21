# 🍕 Food Delivery App

A modern, full-featured food delivery application built with cutting-edge technologies to provide seamless ordering experiences for customers, restaurants, and delivery partners.

## 🚀 Features

### For Customers
- **User Authentication** - Secure login/registration with email verification
- **Restaurant Discovery** - Browse restaurants by cuisine, location, and ratings
- **Menu Browsing** - Detailed menu with high-quality images and descriptions
- **Advanced Search & Filters** - Find food by cuisine, price range, dietary preferences
- **Shopping Cart** - Add/remove items, customize orders, apply discounts
- **Multiple Payment Options** - Credit/debit cards, digital wallets, cash on delivery
- **Real-time Order Tracking** - Live updates from preparation to delivery
- **Order History** - View past orders and reorder favorites
- **Reviews & Ratings** - Rate restaurants and dishes, read community reviews
- **Push Notifications** - Order updates, promotions, and deals

### For Restaurants
- **Restaurant Dashboard** - Manage menu, orders, and business analytics
- **Menu Management** - Add/edit dishes, set availability, manage pricing
- **Order Management** - Accept/reject orders, update preparation status
- **Analytics & Reports** - Sales data, popular items, customer insights
- **Inventory Tracking** - Monitor stock levels and ingredient availability

### For Delivery Partners
- **Driver App** - Dedicated interface for delivery personnel
- **Route Optimization** - Efficient delivery routes with GPS integration
- **Earnings Tracking** - Real-time earnings and payment history
- **Delivery History** - Complete log of past deliveries

## 🛠️ Tech Stack

### Frontend
- **Framework**: React.js / React Native (for mobile)
- **State Management**: Redux Toolkit / Context API
- **Styling**: Tailwind CSS / Styled Components
- **Maps Integration**: Google Maps API / Mapbox
- **HTTP Client**: Axios
- **Form Handling**: React Hook Form
- **Animation**: Framer Motion

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB / PostgreSQL
- **Authentication**: JWT / Passport.js
- **File Upload**: Multer / Cloudinary
- **Payment Processing**: Stripe / PayPal
- **Real-time Communication**: Socket.io
- **Email Service**: SendGrid / Nodemailer

### DevOps & Deployment
- **Containerization**: Docker
- **Cloud Platform**: AWS / Google Cloud / Heroku
- **CI/CD**: GitHub Actions
- **Monitoring**: Sentry
- **CDN**: CloudFront / Cloudflare

## 📁 Project Structure

```
food-delivery-app/
├── client/                     # Frontend application
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/              # Page components
│   │   ├── hooks/              # Custom React hooks
│   │   ├── services/           # API service functions
│   │   ├── store/              # Redux store configuration
│   │   ├── utils/              # Utility functions
│   │   └── styles/             # Global styles
│   ├── package.json
│   └── README.md
├── server/                     # Backend application
│   ├── controllers/            # Route controllers
│   ├── models/                 # Database models
│   ├── routes/                 # API routes
│   ├── middleware/             # Custom middleware
│   ├── config/                 # Configuration files
│   ├── utils/                  # Helper functions
│   ├── uploads/                # File uploads directory
│   ├── package.json
│   └── server.js
├── mobile/                     # React Native mobile app
│   ├── android/
│   ├── ios/
│   ├── src/
│   └── package.json
├── admin/                      # Admin dashboard
├── delivery/                   # Delivery partner app
├── docs/                       # Documentation
├── docker-compose.yml
├── .gitignore
├── .env.example
└── README.md
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB or PostgreSQL
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Junior-bell/food-delivery-app.git
   cd food-delivery-app
   ```

2. **Install dependencies**
   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install

   # Install mobile dependencies (if applicable)
   cd ../mobile
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Copy environment variables
   cp .env.example .env
   
   # Edit .env file with your configuration
   nano .env
   ```

4. **Environment Variables**
   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   
   # Database
   MONGODB_URI=mongodb://localhost:27017/fooddelivery
   # OR for PostgreSQL
   DATABASE_URL=postgresql://username:password@localhost:5432/fooddelivery
   
   # JWT Secret
   JWT_SECRET=your-super-secret-jwt-key
   JWT_EXPIRE=7d
   
   # Payment Gateway
   STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_key
   STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
   
   # Email Service
   SENDGRID_API_KEY=your_sendgrid_api_key
   FROM_EMAIL=noreply@yourdomain.com
   
   # Google Maps
   GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   
   # Cloudinary (for image uploads)
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

5. **Database Setup**
   ```bash
   # For MongoDB (make sure MongoDB is running)
   # The app will create collections automatically
   
   # For PostgreSQL
   # Create database and run migrations
   npm run migrate
   ```

6. **Start the application**
   ```bash
   # Start server (from server directory)
   npm run dev

   # Start client (from client directory)
   npm start

   # Or use Docker
   docker-compose up
   ```

## 📱 Mobile App Setup

### React Native (iOS/Android)

1. **Install React Native CLI**
   ```bash
   npm install -g react-native-cli
   ```

2. **iOS Setup**
   ```bash
   cd mobile/ios
   pod install
   cd ..
   npx react-native run-ios
   ```

3. **Android Setup**
   ```bash
   npx react-native run-android
   ```

## 🧪 Testing

```bash
# Run server tests
cd server
npm test

# Run client tests
cd client
npm test

# Run integration tests
npm run test:integration

# Run all tests
npm run test:all
```

## 📊 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Restaurant Endpoints
- `GET /api/restaurants` - Get all restaurants
- `GET /api/restaurants/:id` - Get restaurant by ID
- `POST /api/restaurants` - Create restaurant (admin)
- `PUT /api/restaurants/:id` - Update restaurant
- `DELETE /api/restaurants/:id` - Delete restaurant

### Order Endpoints
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get order by ID
- `PUT /api/orders/:id/status` - Update order status

### Menu Endpoints
- `GET /api/menu/:restaurantId` - Get restaurant menu
- `POST /api/menu` - Add menu item
- `PUT /api/menu/:id` - Update menu item
- `DELETE /api/menu/:id` - Delete menu item

For detailed API documentation, visit: `http://localhost:5000/api-docs` (when server is running)

## 🎨 UI/UX Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Dark/Light Mode** - User preference theme switching
- **Progressive Web App** - Offline functionality and app-like experience
- **Accessibility** - WCAG 2.1 compliant for inclusive design
- **Internationalization** - Multi-language support
- **Smooth Animations** - Micro-interactions for better user experience

## 🔒 Security Features

- **Input Validation** - Comprehensive data validation and sanitization
- **Rate Limiting** - API rate limiting to prevent abuse
- **CORS Protection** - Cross-origin resource sharing configuration
- **Helmet Security** - Security headers for Express.js
- **Password Hashing** - Bcrypt for secure password storage
- **JWT Authentication** - Stateless authentication with refresh tokens
- **SQL Injection Prevention** - Parameterized queries and ORM protection

## 📈 Performance Optimizations

- **Lazy Loading** - Component and image lazy loading
- **Code Splitting** - Bundle optimization for faster load times
- **Caching Strategy** - Redis caching for frequently accessed data
- **Image Optimization** - WebP format and responsive images
- **Database Indexing** - Optimized database queries
- **CDN Integration** - Fast content delivery worldwide

## 🚀 Deployment

### Using Docker

1. **Build and run with Docker Compose**
   ```bash
   docker-compose up --build
   ```

### Manual Deployment

1. **Build the client**
   ```bash
   cd client
   npm run build
   ```

2. **Deploy to your preferred platform**
   - **Heroku**: Connect your GitHub repo and enable automatic deploys
   - **AWS**: Use Elastic Beanstalk or EC2 with load balancer
   - **Vercel**: Deploy frontend with automatic CI/CD
   - **DigitalOcean**: Use App Platform for full-stack deployment

### Environment-specific Configurations

```bash
# Production
NODE_ENV=production
npm run start:prod

# Staging
NODE_ENV=staging
npm run start:staging

# Development
NODE_ENV=development
npm run dev
```

## 📝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Code Style Guidelines
- Use ESLint and Prettier for code formatting
- Follow conventional commit messages
- Write meaningful commit descriptions
- Add tests for new features
- Update documentation as needed

## 🐛 Bug Reports

If you discover a bug, please create an issue with:
- Bug description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Environment details

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Junior Bell** - *Project Lead & Full Stack Developer* - [@Junior-bell](https://github.com/Junior-bell)

## 🙏 Acknowledgments

- Thanks to all contributors who have helped shape this project
- Special thanks to the open-source community for the amazing tools and libraries
- Icons provided by [Heroicons](https://heroicons.com/)
- Food images from [Unsplash](https://unsplash.com/)

## 📞 Support

For support and questions:
- 📧 Email: support@fooddeliveryapp.com
- 💬 Discord: [Join our community](https://discord.gg/your-invite)
- 📱 Twitter: [@YourAppHandle](https://twitter.com/yourapphandle)

## 🔄 Changelog

### v2.0.0 (Latest)
- Added real-time order tracking
- Implemented payment gateway integration
- Enhanced mobile responsiveness
- Added admin dashboard
- Performance optimizations

### v1.5.0
- Added restaurant management system
- Implemented review and rating system
- Added push notifications
- Bug fixes and improvements

### v1.0.0
- Initial release
- Basic ordering functionality
- User authentication
- Restaurant listings

---

**⭐ If you found this project helpful, please give it a star!**

**🍴 Happy Ordering!**
