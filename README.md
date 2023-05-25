# Voodoo-test-task
This repository contains the source code for the Voodoo Test Task project. It includes the necessary steps to clone the project, install dependencies, and run it on a local server.

## Prerequisites
Before getting started, ensure that you have the following installed on your machine:

Git
Node.js
npm (Node Package Manager)

# Clone the Repository

To clone the project, open your terminal and execute the following command:
##### git clone https://github.com/olexanax/Voodoo-test-task.git
Navigate into the project directory:
##### cd Voodoo-test-task

## Install Dependencies
Once you are inside the project directory, run the following command to install the required dependencies:

##### npm install

## Running the Project
After installing the dependencies, you can run the project on your local server using a tool like Live Server.

If you are using Visual Studio Code, you can install the Live Server extension by Ritwick Dey. Here's how you can do it:

1.Open Visual Studio Code.
2.Navigate to the Extensions view by clicking on the square icon on the left sidebar or pressing Ctrl+Shift+X (Cmd+Shift+X on macOS).
3.Search for "Live Server" in the extensions search bar.
4.Click on the "Live Server" extension by Ritwick Dey and click the Install button.
5.Once the extension is installed, you will see a "Go Live" button in the bottom right corner of the Visual Studio Code window.

To run the project with Live Server:

1.Open the project directory in Visual Studio Code.
2.Locate the HTML file that serves as the entry point for your project (usually named index.html).
3.Right-click on the HTML file in the file explorer.
4.Select "Open with Live Server" from the context menu.
5.Live Server will open your project in a new browser window, and you can interact with it there.


## Modifying Styles
If you want to modify the styles of the project, you can follow these steps:
1.Execute the following command in your terminal to watch for changes in the styles:
##### npx tailwindcss -i ./src/styles.css -o ./dist/output.css --watch
This command uses Tailwind CSS to process the styles from src/styles.css and outputs the processed CSS to dist/output.css. The --watch flag ensures that any changes you make to the styles are automatically recompiled.
2.Open src/styles.css in your preferred code editor and make the desired changes to the styles.
3.Save the file, and Tailwind CSS will automatically recompile the styles and update dist/output.css.

Please note that you may need to refresh your browser to see the changes reflected in the project.

Feel free to explore and modify the Voodoo Test Task project according to your needs. If you have any questions or encounter any issues, please don't hesitate to reach out.

Happy coding!
