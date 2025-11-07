# Car Wash Project

This project contains two implementations of a car wash website: a static HTML/CSS/JavaScript version and a React-based web application. Both showcase premium car washing services with a focus on Mercedes-Benz vehicles.

## Project Structure

```
Car Wash/
├── index.html          # Static site homepage
├── styles.css          # Static site styles
├── script.js           # Static site JavaScript
├── TODO.md             # Project tasks
├── car-wash-app/       # React application
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   ├── Hero.js
│   │   │   ├── Services.js
│   │   │   ├── About.js
│   │   │   ├── Contact.js
│   │   │   └── Footer.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── ...
│   ├── package.json
│   └── README.md       # React app specific README
└── README.md           # This file
```

## Static Site (Root Directory)

A responsive, single-page website built with vanilla HTML, CSS, and JavaScript.

### Features
- Hero section with animated text and background image
- Services showcase with premium car wash offerings
- About section highlighting Mercedes-Benz specialization
- Testimonials from satisfied customers
- Contact form and information
- Smooth scrolling navigation
- Mobile-responsive design

### Technologies Used
- HTML5
- CSS3 (with animations and responsive design)
- JavaScript (ES6+)

### Running the Static Site
1. Open `index.html` in a web browser
2. No server required - runs locally

## React Application (car-wash-app/)

A modern React-based version of the car wash website with component-based architecture.

### Features
- Component-based architecture
- React Router for navigation
- Modular components for Header, Hero, Services, About, Contact, and Footer
- Responsive design with CSS modules
- Built with Create React App

### Technologies Used
- React 19.2.0
- React Router DOM
- CSS3
- Create React App

### Installation and Setup
1. Navigate to the `car-wash-app` directory:
   ```bash
   cd car-wash-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts
- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (irreversible)

## Project Goals

This project demonstrates:
- Building responsive web applications with modern technologies
- Component-based development with React
- Traditional web development with HTML/CSS/JS
- Best practices for project organization and documentation

## Contributing

Feel free to contribute improvements or additional features to either implementation.

## License

This project is for educational purposes.
