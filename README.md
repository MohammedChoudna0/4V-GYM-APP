# AngularGymPro
This project was generated with Angular CLI version 17.0.0.

## Project Overview
A web interface will be created to manage the monitors and activities of our gym.

The objective of this practice is to implement the design as faithfully as possible, even if it seems horrendous! Necessary reusable components will be created. A single component or copied components are not acceptable.

The page always has a header with the name and logo. There is also a function selector at the bottom where you can choose between Activities and Monitors.

## Activities Page
On the activities page, you can choose a date and move between dates. Each day appears with 3 fixed activity blocks. When a block is free, an activity can be included through the form. Activities can also be deleted and edited.

Each activity card shows the monitors and the type of activity. Depending on the type of activity, it can have 1 to N monitors. For example, BodyPump always has to have 2 monitors and Spinning only 1.

## Monitors Page
On the monitors page, the current monitors are displayed in carousel mode, and there is also a search engine to move through the list. New monitors can be created, and selected ones can be edited and deleted.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Component Diagram

![Component-Diagram](https://github.com/MohammedChoudna0/4V-GYM-APP/assets/117014262/5ef2b2da-964a-4f2b-9858-f142b43f8262)

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests
Run `ng test` to execute the unit tests via Karma.

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help
To get more help on the Angular CLI use `ng help` or go check out the Angular CLI Overview and Command Reference page.
