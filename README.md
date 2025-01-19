# Event Scheduler App

[**Live Page**](https://top-event-scheduler.vercel.app/) - Check out the working version of the project.

Event Scheduler App allows users to create, edit, and view events. It also includes conflict checking for event times and pagination for easy navigation through many events.

## Description

The Event Scheduler App enables users to:

- Add new events
- Edit existing events
- Check for event time conflicts
- View events with pagination
- Reset the form after adding or editing an event

## Technologies

- **React** – for building user interfaces
- **Redux** – for state management
- **Formik** – for handling forms
- **Yup** – for form validation
- **NanoID** – for generating unique IDs
- **CSS Modules** – for component styling
- **TypeScript** – for type safety and development efficiency
- **Date/Time Handling** – for working with event dates and times

## Installation

### Steps to set up:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/event-scheduler-app.git
   ```

2. Go to the project directory:

   ```bash
   cd event-scheduler-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the app:
   ```bash
   npm start
   ```

### Access the app:

After running the project, the app will be available at `http://localhost:5173/`.

## Features

1. **Adding Events**:

   - Users can add new events by filling out a form with the event title, date, start time, end time, category, and description.
   - After filling out the form, the event can be added.

2. **Editing Events**:

   - To edit an event, users can click on an existing event from the list.
   - The form fields will be pre-populated with the event's current details.
   - After editing the event, changes will be saved.

3. **Conflict Checking**:

   - Each new or edited event is checked for conflicts with other events (overlapping time).

4. **Pagination**:
   - Events are divided into pages, making it easier to view a large list of events.
