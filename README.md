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
- Readable hero section with a car photograph and clear service links
- Services showcase with premium car wash offerings
- About section highlighting Mercedes-Benz specialization
- Testimonials from satisfied customers
- Contact form and information
- Anchor navigation, visible keyboard focus, and a skip-to-content link
- Mobile-responsive design

### Technologies Used
- HTML5
- CSS3 (responsive layouts and reduced-motion support)
- JavaScript (ES6+)

### Running the Static Site
1. Open `index.html` in a web browser
2. No server required - runs locally

## React Application (car-wash-app/)

A modern React-based version of the car wash website with component-based architecture.

### Features
- Component-based architecture
- Anchor navigation between sections
- Modular components for Header, Hero, Services, About, Contact, and Footer
- Responsive design with regular CSS stylesheets
- Built with Create React App

### Technologies Used
- React 19.2.0
- Framer Motion for animations
- CSS3
- Create React App

### Installation and Setup
1. Navigate to the `car-wash-app` directory:
   ```bash
   cd car-wash-app
   ```

2. Install dependencies:
   ```bash
   npm ci
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

## Contact enquiries and booking

“Book Now” navigates to the contact section. It does not reserve a time slot.
Both forms are disabled until a contact service is configured; they never simulate a successful delivery.

- **React:** copy `car-wash-app/.env.example` to `car-wash-app/.env.local`, set `REACT_APP_CONTACT_ENDPOINT`, then restart the development server or rebuild for deployment.
- **Static:** set `data-endpoint` on the contact form in `index.html`. Serve the directory over HTTP when using a contact service, for example with `python3 -m http.server 8000`.

The endpoint must accept a JSON POST with `name`, `email`, and `message`, return a successful HTTP status only when the enquiry is accepted, and allow requests from the website origin through CORS. Use a public submission URL, never a secret API key. The receiving service is responsible for validation, spam protection, storage, and email delivery. A successful enquiry is not a confirmed booking.

## Verification

From `car-wash-app/`:

```bash
CI=true npm test -- --watchAll=false --runInBand
npm run build
```

Tests cover booking navigation, disabled unconfigured forms, successful submissions, and HTTP/network errors. They mock the receiving service; test a real enquiry after configuring your service.

## Before publishing

Replace the sample address, phone, email, testimonials, and business claims with verified business details. Configure and test enquiry delivery, and check both versions on mobile and desktop. The project does not include a backend or appointment scheduling system.

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` publishes the **root static website** on pushes to `main`, or when run manually from the Actions tab. It uploads only the HTML, CSS, JavaScript, and image used by that website. The nested React repository is not deployed.

1. Push the project to `https://github.com/EAJ1/Elite-Car-Wash`.
2. In the repository, open **Settings → Pages → Build and deployment** and select **GitHub Actions** as the source.
3. Open **Actions → Deploy website to GitHub Pages → Run workflow** if the initial push ran before Pages was enabled.
4. After the deployment succeeds, the expected site URL is `https://eaj1.github.io/Elite-Car-Wash/`.

Future pushes to `main` redeploy automatically. GitHub Pages hosts static files; receiving enquiries still requires the contact endpoint described above. If adding more local images or assets, include them in the workflow's copy step.

## Readability and design

The published static site uses dark brown text on white backgrounds, a shaded photo hero, larger text, comfortable line spacing, visible form labels, and layouts that stack on small screens. Text remains visible without JavaScript. Navigation respects reduced-motion preferences.

## Service prices

Prices displayed on the published static website are in South African rand (ZAR).

| Service | Price |
| --- | ---: |
| Exterior Wash | R80 |
| Interior Detailing | R160 |
| Premium Package | R300 |
| Engine Bay Cleaning | R500 |

The static site palette uses dark brown (`#3b241a`) and white (`#ffffff`) only. Car photos are toned through CSS to match, and service cards use simple numbered markers.

The refreshed layout includes a split photo hero, a highlighted Premium Package, service enquiry links that prefill an empty message, a three-step care guide, and expandable FAQs. All four service prices and the dark brown/white palette are preserved.
