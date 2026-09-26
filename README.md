# IPL Auction

A real-time multiplayer IPL auction simulator built with React, Vite, and Firebase.

## Features

- Create auction rooms and invite friends
- Live bidding flow with room state syncing
- Team selection and summary screens
- Fantasy-style squad tracking and leaderboard support

## Tech stack

- React + Vite
- Firebase Auth + Firestore + Realtime Database
- Tailwind CSS
- Framer Motion

## Local setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file with Firebase values:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_DATABASE_URL=https://your_project-default-rtdb.firebaseio.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

3. Start the app:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Notes

- Some fantasy score automation scripts live under the `scripts/` folder and require the matching Firebase and API configuration.
- Keep the Firebase rules and environment variables aligned with the production deployment.
