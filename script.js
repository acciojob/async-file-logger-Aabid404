//your JS code here. If required.
const fileNames = [
  "file1.txt",
  "file2.txt",
  "file3.txt",
  "file4.txt",
  "file5.txt",
];

// do not change the code above
// add your code here
const fs = require("fs");

fileNames.forEach((fileName, index) => {
    fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log(`File ${index + 1}:  ${data}`);
    });
});
