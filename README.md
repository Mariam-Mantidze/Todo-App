# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW).

## Description

This Todo List project is a React-based application that allows users to manage their daily tasks effectively. It is my first project using TypeScript, which has helped me gain a better understanding of type safety and best practices in a React environment. The application supports adding, marking, filtering, and deleting tasks, providing a comprehensive task management experience. Additionally, this project introduced me to working with themes in React, allowing for a customizable user interface.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- Drag and drop todos on vertical axis

### Screenshot

![](./design/active-states-light.jpg)

## Features

- **Add Tasks:** Users can add new tasks to the list by typing into the input field and pressing Enter.
- **Mark Tasks as Completed:** Tasks can be marked as completed by clicking on the checkbox next to each task. This helps users keep track of their progress.
- **Filter Tasks:** The application provides filter options (All, Active, Completed) to view tasks based on their status. This feature is implemented using React's state management, allowing for dynamic updating of the task list.
- **Delete Tasks:** Users can delete tasks from the list by clicking on the "X" button next to each task.
- **Clear Completed Tasks:** A "Clear Completed" button allows users to remove all tasks that have been marked as completed.
- **Themes:** The application supports light and dark themes, which can be toggled by the user. This is my first experience working with themes in React, and it has been an exciting journey to learn how to dynamically change the appearance of the application.
- **Reorder Tasks:** The drag-and-drop functionality, implemented with `Framer Motion`, enables users to reorder tasks in the list.

### Links

- Live Site URL: [https://todo-app-hazel-three.vercel.app/]

### Built with

- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles
- TypeScript

## What I Learned

- **TypeScript in React:** This being my first project with TypeScript, I learned how to use types and interfaces to ensure type safety in my components and state management.
- **State Management:** I gained a deeper understanding of managing state in React, especially when it comes to updating complex state structures like arrays of objects.
- **Conditional Rendering:** I learned how to use conditional rendering to display different UI elements based on the state, such as showing active, completed, or all tasks.
- **Event Handling:** I became more familiar with handling events in React, such as adding a new task, marking a task as completed, or deleting a task.
- **Styled Components:** This project was my first experience with Styled Components for styling my React components. I learned how to create reusable styled components and dynamically change styles based on props.
- **Themes:** I explored working with themes in React using Styled Components, which allowed me to switch between light and dark themes dynamically.

## Future Improvements

- **Drag and Drop:** Implementing drag and drop functionality to reorder tasks for better usability.
- **Persistence:** Adding local storage or backend integration to persist tasks between sessions.
- **Task Editing:** Allowing users to edit existing tasks to make updates easier.
- **Animations:** Adding animations for task addition, deletion, and completion for a more engaging user experience.
