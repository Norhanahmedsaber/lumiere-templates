# Expo Native Wind Templates

This package is designed to facilitate the templating of React Native apps configured with Expo and Native Wind. It provides a convenient way to set up a new project or apply the Native Wind styling to existing folders within the project.

## Setting up environment

Ensure you have  [Node.js](https://nodejs.org/en), Expo download expo go on your mobile
, before proceeding with the installation of this package.
## Installation
```bash
npm i
```
```bash
npm i -g
```
## Usage
```bash
npx create-template
```
specify template and give name to your project
example: ReactNativeTemplate

```bash
cd ReactNativeTemplate
```

```bash
npm i
```

```bash
npx expo start --tunnel 
```
## Commands
start the application on local network
```bash
npm run start
```
start the application with tunnel (ngrok)
```bash
npm run start-tunnel
```

## Architecture

The architecture of the project follows a component-based structure
- **Components**: Individual UI elements such as buttons, cards, etc.
- **Screens**: Higher-level components representing different screens of the application, such as WelcomeScreen and SettingsScreen.
- **Navigation**: Defines the navigation flow of the application. Includes AppTabs and AppNavigations, where only one can be used as a parent element.
- **Assets**: Include all images or icons you may want to use . 