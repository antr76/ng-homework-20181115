# NgHomework – Travel Destination Widget

Angular 7 homework project (2018-11-15). Browse and filter travel destinations (hotels, fishing spots, tours) with weather and social-media stats per destination. Uses RxJS for reactive state management.

> **Note:** Angular 7 is EOL. This project is a learning reference only.

## Key features

- Filter destinations by category (All / Hotel / Fishing / Tours)
- Featured image, weather (air & water temp), and social stats for the selected item
- Custom `PhoneNumberPipe` for phone number formatting

## Project structure

```
src/app/
├── app.component.*      Root component
├── app.service.ts       RxJS filter & selection state
├── nav/                 Category filter bar
├── items/item/          Destination list & cards
├── image/               Featured image
├── weather-info/        Weather widget
├── social-info/         Social stats widget
└── shared/              Mock data & interfaces
```

## Quick start

```bash
yarn install             # install dependencies
ng serve                 # dev server → http://localhost:4200
ng build --prod          # production build → dist/
ng test                  # unit tests (Karma)
ng e2e                   # e2e tests (Protractor)
```
