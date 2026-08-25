# Assignment 4: Advanced Interactive File System Operations

## Assignment Explanation
This assignment demonstrates the use of the core Node.js `fs` module to perform basic file system operations interactively. 
The script `index.js` uses the `readline` module to provide a menu-driven Command Line Interface (CLI), allowing the user to select which operation to perform and to provide custom input values dynamically.

It performs the following tasks:
1. **Create Student File (`student.txt`)**: Automatically creates a `student.txt` file with basic default details using `fs.writeFile()`.
2. **Read a File**: Prompts for a file name and uses `fs.readFile()` to read and display its contents in the terminal.
3. **Add/Append User(s) to File**: Prompts for a file name and user details (Name, Course, Technology, Experience, City), then uses `fs.appendFile()` to add the new user. It operates in a loop, asking if you want to add multiple users successively!
4. **Rename a File**: Prompts for the current and new file names and uses `fs.rename()`.
5. **Clear File Content**: Prompts for a file name and empties its content by overwriting it with an empty string using `fs.writeFile()`.
6. **Delete a File**: Prompts for a file name and deletes it permanently using `fs.unlink()`.
7. **Exit**: Gracefully closes the `readline` interface and exits the application.

## How to run the program

1. Open a terminal and navigate to the **Assignment 4** directory.
2. Ensure you have [Node.js](https://nodejs.org/) installed on your system.
3. Execute the script by running the following command:
   ```bash
   node index.js
   ```
   *(Note: This project only uses core Node.js modules, so no `npm install` or external dependencies are required.)*
4. Follow the interactive menu on the screen to perform the operations one by one.
