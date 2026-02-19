# NgHomework – Travel Destination Widget

This is an Angular homework project (dated 2018-11-15) that demonstrates a **travel destination widget** built with Angular 7 and RxJS. It lets users browse and filter a list of travel destinations (hotels, fishing spots, and tour operators) and view weather and social-media statistics for the selected destination.

## What the app does

- Displays a list of travel destinations with name, address, and phone number.
- Allows filtering by category: **All**, **Hotel**, **Fishing**, or **Tours**.
- Shows a featured image for the currently selected destination.
- Shows **weather data** (air temperature and water temperature) for the selected destination.
- Shows **social-media stats** (followers / following) for the selected destination.
- Formats phone numbers via a custom `PhoneNumberPipe`.
- Uses **RxJS BehaviorSubject / Subject** streams for reactive state management throughout the app.

## Project structure

```
src/app/
├── app.component.*         Root component – wires together all child components
├── app.service.ts          Central service – filter & selection state via RxJS
├── nav/                    Navigation/filter bar (All / Hotel / Fishing / Tours)
├── items/
│   ├── items.component.*   List of filtered destination cards
│   └── item/
│       ├── item.component.*   Single destination card (name, address, phone)
│       └── phone-number.pipe.ts  Formats phone numbers as "Tel: +XX XXX XXX XXXX"
├── image/                  Featured image of the selected destination
├── weather-info/           Weather widget (air & water temperature)
├── social-info/            Social-media stats widget (followers / following)
└── shared/
    ├── db/db-data.ts       In-memory mock data (6 destinations)
    └── interfaces/         TypeScript interfaces for Item, WeatherInfo, SocialInfo
```

## Getting started

### Prerequisites

- Node.js ≥ 8
- Angular CLI 7: `npm install -g @angular/cli@7`

> **Note:** This project targets Angular 7 (released 2018) which is no longer maintained. It is preserved as a learning reference. For new projects, use the [current Angular version](https://angular.io/).

### Install dependencies

```bash
yarn install
# or
npm install
```

### Development server

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The app reloads automatically when source files change.

## Build

```bash
ng build          # development build
ng build --prod   # production build
```

Build artifacts are placed in the `dist/` directory.

## Running unit tests

```bash
ng test
```

Executes unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

```bash
ng e2e
```

Executes end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
