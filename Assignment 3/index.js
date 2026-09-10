const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log('\n========================================');
    console.log('   Advanced File Management System');
    console.log('========================================');
    console.log('1. Create Student File (student.txt)');
    console.log('2. Read a File');
    console.log('3. Add/Append User(s) to File');
    console.log('4. Rename a File');
    console.log('5. Clear File Content (Make it empty)');
    console.log('6. Delete a File');
    console.log('7. Exit');
    
    rl.question('\nSelect an option (1-7): ', (choice) => {
        switch (choice.trim()) {
            case '1':
                createFile();
                break;
            case '2':
                readFile();
                break;
            case '3':
                addMultipleUsers();
                break;
            case '4':
                renameFile();
                break;
            case '5':
                clearFileContent();
                break;
            case '6':
                deleteFile();
                break;
            case '7':
                console.log('Exiting program...');
                rl.close();
                break;
            default:
                console.log('Invalid choice. Please enter a number between 1 and 7.');
                showMenu();
        }
    });
}

function createFile() {
    const content = `Name: Your Name\nCourse: Full Stack Development\nTechnology: Node.js\n`;
    fs.writeFile('student.txt', content, (err) => {
        if (err) {
            console.error('\nError creating file:', err.message);
        } else {
            console.log(`\n-> File 'student.txt' created successfully with basic PDF requirements.`);
        }
        showMenu();
    });
}

function readFile() {
    rl.question('Enter the file name to read: ', (fileName) => {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) {
                console.error(`\nError reading file: ${err.message}`);
            } else {
                console.log(`\n--- Content of ${fileName} ---`);
                console.log(data);
                console.log('-----------------------------');
            }
            showMenu();
        });
    });
}

function addMultipleUsers() {
    rl.question('Enter the file name to append to: ', (fileName) => {
        // Check if file exists first
        if (!fs.existsSync(fileName)) {
            console.log(`\n-> File '${fileName}' does not exist. Please create it first.`);
            return showMenu();
        }
        
        function askUser() {
            console.log(`\n--- Add New User Details to ${fileName} ---`);
            rl.question('Enter Name: ', (name) => {
                rl.question('Enter Course: ', (course) => {
                    rl.question('Enter Technology: ', (tech) => {
                        rl.question('Enter Experience: ', (exp) => {
                            rl.question('Enter City: ', (city) => {
                                const newContent = `\n-----------------------------\nName: ${name}\nCourse: ${course}\nTechnology: ${tech}\nExperience: ${exp}\nCity: ${city}\n`;
                                fs.appendFile(fileName, newContent, (err) => {
                                    if (err) {
                                        console.error('\nError appending to file:', err.message);
                                        return showMenu();
                                    }
                                    console.log('\n-> User added successfully!');
                                    
                                    // Ask if they want to add another user
                                    rl.question('Do you want to add another user? (y/n): ', (ans) => {
                                        if (ans.trim().toLowerCase() === 'y') {
                                            askUser();
                                        } else {
                                            showMenu();
                                        }
                                    });
                                });
                            });
                        });
                    });
                });
            });
        }
        
        askUser(); // Start the loop
    });
}

function renameFile() {
    rl.question('Enter the current file name: ', (oldName) => {
        rl.question('Enter the new file name: ', (newName) => {
            fs.rename(oldName, newName, (err) => {
                if (err) {
                    console.error('\nError renaming file:', err.message);
                } else {
                    console.log(`\n-> File renamed successfully from '${oldName}' to '${newName}'.`);
                }
                showMenu();
            });
        });
    });
}

function clearFileContent() {
    rl.question('Enter the file name to clear contents: ', (fileName) => {
        // Overwriting with an empty string clears the file
        fs.writeFile(fileName, '', (err) => {
            if (err) {
                console.error('\nError clearing file content:', err.message);
            } else {
                console.log(`\n-> Content of '${fileName}' has been cleared successfully.`);
            }
            showMenu();
        });
    });
}

function deleteFile() {
    rl.question('Enter the file name to delete: ', (fileName) => {
        fs.unlink(fileName, (err) => {
            if (err) {
                console.error('\nError deleting file:', err.message);
            } else {
                console.log(`\n-> File '${fileName}' deleted successfully.`);
            }
            showMenu();
        });
    });
}

// Start the application
showMenu();
