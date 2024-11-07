const fileStructure = {
    "Ralph Carvalho": {
        "About": {
            "about.txt": { type: "txt", content: `
Nickname: Firebase Alchemist

Coding Style:
• Views projects as experiments, seeking innovative solutions.
• Exploits unconventional methods, resulting in "Frankenstein" projects.

Favorite Motto:
• Stands by the principle "If it works, don't mess with it."
• Pushes boundaries in frontend development with Firebase.

Fun fact:
• Self-proclaimed "Frontend Mad Scientist" and Full-Stack-Free Rebel.
• Specializes in transforming ideas into innovative web applications using unique technologies.
` }
        },
        "Social": {
            "linkedin.exe": { type: "exe", link: "https://www.linkedin.com/in/ralph-carvalho-614b78257/" },
            "github.exe": { type: "exe", link: "https://github.com/RA-L-PH" },
            "phone.exe": { type: "exe", link: "tel:7021746421" },
            "email.exe": { type: "exe", link: "mailto:ralphaacarvalho@gmail.com" }
        },
        "Projects": {
            "Nexta": {
                "nexta.txt": { type: "txt", content: `
Nexta: Full-Stack Web Application for Freelancers and Clients
• Allows freelancers to create profiles, showcase skills, and apply to jobs.
• Provides clients with job posting and application viewing.
• Built with React, Firebase, and Tailwind CSS.
• Features include user authentication, job postings, job search, real-time chat, profile editing, job posting and application management, and email notifications.
                    ` },
                "nexta.exe": { type: "exe", link: "https://github.com/RA-L-PH/Nexta" },
            },
            "J-A-R-V-I-S": {
                "j-a-r-v-i-s.txt": { type: "txt", content: `
J-A-R-V-I-S
• Streamlines everyday tasks from command line.
• Includes scheduling, reminders, weather updates, basic calculations, and information retrieval.
• User-friendly and efficient, uses Python's libraries for accurate responses.
• Enhances productivity and simplifies routine operations.
                    ` },
                "j-a-r-v-i-s.exe": { type: "exe", link: "https://github.com/RA-L-PH/J-A-R-V-I-S" },
            },
            "healtify" :{
                "healtify.txt": { type: "txt", content: `
Healtify: Comprehensive Health Assistant
• Built using React and Vite.
• Powerful Gemini API.
• Offers disease diagnosis, medication recommendations, and health condition identification.
• Features interactive chatbot for real-time assistance.
• Delivers reliable health information and personalized medical guidance.
                    ` },
                "healtify.exe": { type: "exe", link: "https://github.com/RA-L-PH/healtify" },
            }
        },
        "Technologies": {
            "mysql.jpg": { type: "jpg", icon: "https://img.icons8.com/ios/50/mysql.png" },
            "c.jpg": { type: "jpg", icon: "https://img.icons8.com/fluency/48/c-programming.png" },
            "python.jpg": { type: "jpg", icon: "https://img.icons8.com/color/48/python.png" },
            "javascript.jpg": { type: "jpg", icon: "https://img.icons8.com/color/48/javascript.png" },
            "react.jpg": { type: "jpg", icon: "https://img.icons8.com/ios-filled/50/000000/react-native.png" },
            "firebase.jpg": { type: "jpg", icon: "https://img.icons8.com/color/48/firebase.png" },
            "tailwindcss.jpg": { type: "jpg", icon: "https://img.icons8.com/color/48/tailwind_css.png" },
            "vite.jpg": { type: "jpg", icon: "https://img.icons8.com/color/48/vite.png" },
            "nodejs.jpg": { type: "jpg", icon: "https://img.icons8.com/color/48/nodejs.png" },
            "html.jpg": { type: "jpg", icon: "https://img.icons8.com/color/48/html-5.png" },
            "css.jpg": { type: "jpg", icon: "https://img.icons8.com/color/48/css3.png" },
            "sass.jpg": { type: "jpg", icon: "https://img.icons8.com/color/48/sass.png" },
            "git.jpg": { type: "jpg", icon: "https://img.icons8.com/color/48/git.png" },
            "flask.jpg": { type: "jpg", icon: "https://img.icons8.com/color/48/flask.png" },
            "jenkins.jpg": { type: "jpg", icon: "https://img.icons8.com/color/48/jenkins.png" },
            "docker.jpg": { type: "jpg", icon: "https://img.icons8.com/color/48/docker.png" },
            "appsscript.jpg": { type: "jpg", icon: "https://cdn.icon-icons.com/icons2/2642/PNG/48/google_script_apps_logo_icon_159351.png" },
            "blender.jpg": { type: "jpg", icon: "https://img.icons8.com/color/48/blender-3d.png" },
            "express.jpg": { type: "jpg", icon: "https://img.icons8.com/color/48/express.png" },
            "c++.jpg": { type: "jpg", icon: "https://img.icons8.com/color/48/c-plus-plus-logo.png" },
            "java.jpg": { type: "jpg", icon: "https://img.icons8.com/color/48/java-coffee-cup-logo.png" },
            "arduino.jpg": { type: "jpg", icon: "https://img.icons8.com/color/48/arduino.png" },
            "embeddedc.jpg": { type: "jpg", icon: "https://img.icons8.com/color/48/c-programming.png" },
            "opencv.jpg": { type: "jpg", icon: "https://img.icons8.com/color/48/opencv.png" },
            "sqlite.jpg": { type: "jpg", icon: "https://img.icons8.com/ios/50/sqlite.png" },
            "mongodb.jpg": { type: "jpg", icon: "https://img.icons8.com/color/48/mongodb.png" },
            "typescript.jpg": { type: "jpg", icon: "https://img.icons8.com/color/48/typescript.png" },
            "pandas.jpg": { type: "jpg", icon: "https://img.icons8.com/color/48/pandas.png" },
            "figma.jpg": { type: "jpg", icon: "https://img.icons8.com/color/48/figma.png" },
        }
    }
};

let historyStack = [];
let currentDirectory = fileStructure["Ralph Carvalho"];
let currentDirectoryPath = ['Ralph Carvalho'];

document.addEventListener("DOMContentLoaded", () => {
    const sidebarContainer = document.getElementById("sidebar");
    renderSidebar(fileStructure, sidebarContainer);
    renderMainContent(currentDirectory);
    document.getElementById("popup").style.display = "none";
});

function renderSidebar(structure, container, level = 0) {
    Object.keys(structure).forEach(key => {
        const item = structure[key];
        const isFolder = typeof item === 'object' && !item.type;
        const div = document.createElement("div");
        div.classList.add(isFolder ? "folder" : "file");
        div.style.paddingLeft = `${level * 20}px`;
        div.innerHTML = `<i class="${isFolder ? 'fas fa-folder' : 'fas fa-file'}"></i> ${key}`;
        container.appendChild(div);

        if (isFolder) {
            const subContainer = document.createElement("div");
            subContainer.classList.add("sub-folder");
            renderSidebar(item, subContainer, level + 1);
            container.appendChild(subContainer);

            div.onclick = (event) => {
                event.stopPropagation();
                subContainer.classList.toggle("open");
                historyStack.push(currentDirectory);
                currentDirectory = item;
                renderMainContent(item);
            };
        } else {
            div.onclick = () => openFile(key, item);
        }
    });
}

function renderMainContent(structure) {
    const addressBar = document.getElementById("addressBar");
    addressBar.innerHTML = currentDirectoryPath.join(' / ');

    const fileDisplay = document.getElementById("fileDisplay");
    fileDisplay.innerHTML = "";

    Object.keys(structure).forEach(key => {
        const item = structure[key];
        const isFolder = typeof item === 'object' && !item.type;

        const div = document.createElement("div");
        div.classList.add(isFolder ? "folder" : "file");

        if (isFolder) {
            div.innerHTML = `<i class="fas fa-folder"></i> ${key}`;
        } else {
            if (item.type === 'jpg') {
                // For .jpg files, display the image icon
                div.innerHTML = `<img src="${item.icon}" alt="${key}">
                ${key}`;
            } else {
                // For other file types, display the generic file icon
                div.innerHTML = `<i class="fas fa-file"></i> ${key}`;
            }
        }

        fileDisplay.appendChild(div);

        if (isFolder) {
            div.ondblclick = () => {
                historyStack.push(currentDirectory);
                currentDirectoryPath.push(key);
                currentDirectory = item;
                renderMainContent(item);
            };
        } else {
            div.onclick = () => openFile(key, item);
        }
    });
}

function openFile(filename, fileData) {
    if (fileData.type === "txt") {
        document.getElementById("popupTitle").innerText = filename;
        document.getElementById("popupText").innerText = fileData.content;
        document.getElementById("popup").style.display = "block";
    } else if (fileData.type === "exe") {
        window.open(fileData.link, "_blank");
    } else if (fileData.type === "jpg") {
    }
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function toggleTheme() {
    document.body.classList.toggle("dark-theme");
}

function goBack() {
    if (historyStack.length > 0) {
        // Pop the last directory from the history stack
        currentDirectory = historyStack.pop();

        // Only pop from currentDirectoryPath if it's not the root
        if (currentDirectoryPath.length > 1) {
            currentDirectoryPath.pop(); // Remove the last path element only if it's not the root
        }

        renderMainContent(currentDirectory);
    }
}

function changeView(viewType) {
    const fileDisplay = document.getElementById("fileDisplay");
    fileDisplay.className = viewType === "list" ? "list-view" : `icon-view-${viewType}`;
}