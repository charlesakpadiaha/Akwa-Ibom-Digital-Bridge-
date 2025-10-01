
import { GoogleGenAI } from "@google/genai";

const languages = ['English', 'Ibibio', 'Annang', 'Oron'];
const ADMIN_PASSWORD = 'akwaibom2025';

let modules = [
    { id: 'phone_basics', title: 'Phone & Computer Basics', description: 'Learn the essentials of using your device.' },
    { id: 'internet', title: 'Internet Navigation', description: 'Browse the web safely and efficiently.' },
    { id: 'safety', title: 'Online Safety', description: 'Protect yourself from online threats.' },
    { id: 'social_media', title: 'Social Media', description: 'Connect with others and share your story.' },
    { id: 'ai', title: 'Artificial Intelligence', description: 'Understand the basics of AI and its impact.' },
    { id: 'cbt', title: 'CBT Preparation', description: 'Get ready for computer-based tests.' },
    { id: 'opportunities', title: 'Digital Opportunities', description: 'Discover online jobs, learning, and more.' },
];

let lessonNotes = {
    phone_basics: `
- **What is a Computer/Phone?**: An electronic device for storing and processing data.
- **Hardware vs. Software**: Hardware is the physical parts (screen, keyboard). Software is the set of instructions (apps, operating system).
- **Common Actions**: Tapping, swiping, typing.
- **Charging**: Keep your device charged to use it.
- **Connecting to Wi-Fi**: Find Wi-Fi settings to connect to the internet.`,
    internet: `
- **What is the Internet?**: A global network of computers.
- **Web Browser**: An app to access websites (e.g., Chrome, Firefox).
- **URL/Address Bar**: Where you type the website address (e.g., www.google.com).
- **Search Engines**: Websites like Google help you find information.
- **Hyperlinks**: Clickable text or images that take you to other pages.`,
    safety: `
- **Strong Passwords**: Use a mix of letters (upper and lower case), numbers, and symbols. Don't use personal information.
- **Phishing**: Fake emails or messages trying to steal your information. Do not click on suspicious links.
- **Sharing Information**: Be careful what you share online. Avoid posting your home address or phone number.
- **Secure Websites**: Look for "https://" at the start of a website address. The 's' means secure.`,
    social_media: `
- **What is Social Media?**: Websites and apps to share content and connect with people (e.g., Facebook, WhatsApp, Instagram).
- **Creating a Profile**: Your online presence. Use a clear picture and share information carefully.
- **Privacy Settings**: Control who sees your posts and information.
- **Being Respectful**: Be kind and respectful to others online.`,
    ai: `
- **What is AI?**: Artificial Intelligence is when computers are programmed to "think" and learn like humans.
- **Examples of AI**: Chatbots, navigation apps (like Google Maps), and recommendation systems (like on YouTube).
- **How it Works**: AI uses large amounts of data to recognize patterns and make decisions.
- **Future Impact**: AI is changing many areas, from healthcare to entertainment.`,
    cbt: `
- **What is a CBT?**: Computer-Based Test. An exam taken on a computer instead of on paper.
- **Required Skills**: Using a mouse and keyboard are essential.
- **Timed Tests**: Many CBTs have a time limit. Keep an eye on the clock.
- **Read Instructions**: Always read the instructions carefully before you begin.
- **Review Your Answers**: If time permits, check your answers before submitting.`,
    opportunities: `
- **Remote Work**: Jobs you can do from home using a computer and the internet.
- **Freelancing Platforms**: Websites like Upwork and Fiverr where you can find project-based work.
- **E-commerce**: Selling products or services online.
- **Online Learning**: Websites like Coursera and Udemy offer courses to learn new skills.
- **Digital Marketing**: Using the internet to promote a business or product.`
};


let quizzes = {
    phone_basics: [
        { question: 'What does "RAM" stand for?', options: ['Random Access Memory', 'Read Only Memory', 'Run All Modules'], correctAnswer: 0 },
        { question: 'What is the main function of a CPU?', options: ['Store data', 'Process instructions', 'Display graphics'], correctAnswer: 1 },
        { question: 'Which of these is an operating system?', options: ['Microsoft Word', 'Google Chrome', 'Android'], correctAnswer: 2 }
    ],
    internet: [
        { question: 'What does "URL" stand for?', options: ['Uniform Resource Locator', 'Universal Record Link', 'User Reference Line'], correctAnswer: 0 },
        { question: 'Which of the following is a web browser?', options: ['Google Drive', 'Mozilla Firefox', 'Adobe Photoshop'], correctAnswer: 1 },
        { question: 'What is a "hyperlink"?', options: ['A type of image', 'A link to another webpage', 'A security feature'], correctAnswer: 1 }
    ],
    safety: [
        { question: 'What is "phishing"?', options: ['A type of computer virus', 'A method to securely encrypt data', 'An attempt to steal personal information by pretending to be a trustworthy entity'], correctAnswer: 2 },
        { question: 'What is a strong password?', options: ['password123', 'Your birthday', 'A mix of upper/lowercase letters, numbers, and symbols'], correctAnswer: 2 },
        { question: 'What does "HTTPS" indicate?', options: ['The website is a high-traffic site', 'The website connection is secure', 'The website is for HyperText Programming'], correctAnswer: 1 }
    ],
    social_media: [
        { question: 'What is a "hashtag"?', options: ['A way to tag photos with people', 'A way to categorize posts by keyword', 'A private message'], correctAnswer: 1 },
        { question: 'Which platform is primarily for professional networking?', options: ['Instagram', 'TikTok', 'LinkedIn'], correctAnswer: 2 },
        { question: 'What should you be careful about sharing on social media?', options: ['Your home address', 'A picture of your pet', 'A link to a news article'], correctAnswer: 0 }
    ],
    ai: [
        { question: 'What does "AI" stand for?', options: ['Automated Intelligence', 'Artificial Intelligence', 'Advanced Integration'], correctAnswer: 1 },
        { question: 'A chatbot is an example of:', options: ['Hardware', 'AI', 'A web browser'], correctAnswer: 1 },
        { question: 'What is "Machine Learning"?', options: ['A type of computer hardware', 'A method of data analysis that automates analytical model building', 'A new programming language'], correctAnswer: 1 }
    ],
    cbt: [
        { question: 'What does "CBT" stand for?', options: ['Computer-Based Test', 'Centralized Banking Tool', 'Creative Business Technology'], correctAnswer: 0 },
        { question: 'What is a common input device for a CBT?', options: ['Printer', 'Mouse', 'Speaker'], correctAnswer: 1 },
        { question: 'What should you do before starting a timed CBT?', options: ['Read all instructions carefully', 'Start answering immediately', 'Ask for more time'], correctAnswer: 0 }
    ],
    opportunities: [
        { question: 'Which of these is a platform for finding freelance work?', options: ['Facebook', 'Upwork', 'WhatsApp'], correctAnswer: 1 },
        { question: 'What is "e-commerce"?', options: ['Learning online', 'Sending emails', 'Buying and selling goods online'], correctAnswer: 2 },
        { question: 'What is a key benefit of remote work?', options: ['Less communication', 'Flexibility in location', 'Longer working hours'], correctAnswer: 1 }
    ]
};

// This simulates a public database of comments
let comments = {
    phone_basics: [
        { name: 'John Doe', text: 'This was a great introduction!', date: '2024-01-15T10:30:00Z', status: 'approved' },
        { name: 'Jane Smith', text: 'I finally understand the difference between hardware and software. Thanks!', date: '2024-01-16T14:00:00Z', status: 'approved' }
    ],
    internet: [
        { name: 'Peter Jones', text: 'Very helpful tips on using search engines.', date: '2024-02-10T11:00:00Z', status: 'approved' }
    ]
};


// --- State Management ---
let state = {
    language: null,
    page: 'landing', // landing, dashboard, lesson
    currentModule: null,
    progress: {},
    quiz: {
        questions: [],
        currentIndex: 0,
        selectedAnswers: {},
        submitted: false,
        score: 0,
    },
    chat: {
        isOpen: false,
        isLoading: false,
        history: [], // { role: 'user' | 'model', text: string }
    },
    isAdmin: false,
    feedback: {}, // { [moduleId: string]: 'yes' | 'no' }
    comments: {}, // This will be loaded from the "database" above
};

// --- DOM Elements ---
const pages = {
    landing: document.getElementById('landing-page'),
    dashboard: document.getElementById('dashboard-page'),
    lesson: document.getElementById('lesson-page'),
};
const languageSelectionContainer = document.getElementById('language-selection');
const modulesGrid = document.getElementById('modules-grid');
const searchInput = document.getElementById('search-input') as HTMLInputElement;
const noModulesFound = document.getElementById('no-modules-found');
const resetLanguageBtn = document.getElementById('reset-language-btn');
const backToDashboardBtn = document.getElementById('back-to-dashboard-btn');
const lessonTitle = document.getElementById('lesson-title');
const lessonVideo = document.getElementById('lesson-video') as HTMLVideoElement;
const videoErrorContainer = document.getElementById('video-error');
const lessonNotesContent = document.getElementById('lesson-notes-content');
const quizContainer = document.getElementById('quiz-container');
const overallProgressContainer = document.getElementById('overall-progress-container');
const feedbackContainer = document.getElementById('feedback-container');
const commentsContainer = document.getElementById('comments-container');


// AI Help Assistant Elements
const helpFab = document.getElementById('help-fab');
const aiHelpModal = document.getElementById('ai-help-modal');
const closeHelpModalBtn = document.getElementById('close-help-modal-btn');
const chatHistoryContainer = document.getElementById('chat-history');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input') as HTMLInputElement;
const chatLoadingIndicator = document.getElementById('chat-loading-indicator');

// Admin Elements
const adminBanner = document.getElementById('admin-banner');
const adminInfoBox = document.getElementById('admin-info-box');
const adminDataModal = document.getElementById('admin-data-modal');
const adminDataTitle = document.getElementById('admin-data-title');
const closeAdminDataModalBtn = document.getElementById('close-admin-data-modal-btn');
const adminDataOutput = document.getElementById('admin-data-output') as HTMLTextAreaElement;
const adminNotesControls = document.getElementById('admin-notes-controls');
const adminPasswordModal = document.getElementById('admin-password-modal');
const adminLoginForm = document.getElementById('admin-login-form');
const adminPasswordInput = document.getElementById('admin-password') as HTMLInputElement;
const adminPasswordError = document.getElementById('admin-password-error');


// --- Page Navigation ---
const navigateTo = (page) => {
    state.page = page;
    Object.values(pages).forEach(p => p.classList.add('hidden'));
    pages[page].classList.remove('hidden');
    window.scrollTo(0, 0);
};

// --- Rendering Functions ---

// LANDING PAGE
const renderLandingPage = () => {
    languageSelectionContainer.innerHTML = '';
    languages.forEach(lang => {
        const button = document.createElement('button');
        button.textContent = lang;
        button.className = "px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition-transform transform hover:scale-105";
        button.onclick = () => selectLanguage(lang);
        languageSelectionContainer.appendChild(button);
    });
};

// DASHBOARD
const renderOverallProgress = () => {
    const completedCount = Object.keys(state.progress).length;
    const totalCount = modules.length;
    const overallPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

    overallProgressContainer.innerHTML = `
        <div class="bg-white p-4 rounded-lg shadow-md">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">Overall Progress</h2>
            <div class="flex justify-between items-center mb-1">
                <span class="text-sm font-medium text-gray-500">${completedCount} of ${totalCount} modules completed</span>
                <span class="text-sm font-bold text-green-600">${overallPercentage}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-4">
                <div class="bg-green-600 h-4 rounded-full transition-all duration-300" style="width: ${overallPercentage}%;"></div>
            </div>
        </div>
    `;
};


const renderDashboard = () => {
    if (state.isAdmin) adminInfoBox.classList.remove('hidden');
    renderOverallProgress();
    const query = searchInput.value.toLowerCase();
    const filteredModules = modules.filter(module =>
        module.title.toLowerCase().includes(query) ||
        module.description.toLowerCase().includes(query)
    );

    modulesGrid.innerHTML = '';
    if (filteredModules.length > 0) {
        noModulesFound.classList.add('hidden');
        filteredModules.forEach(module => {
            const isComplete = !!state.progress[module.id];
            const progressPercentage = isComplete ? 100 : 0;
            const buttonText = isComplete ? 'Review Lesson' : 'Start Learning';
            const card = document.createElement('div');
            card.className = "bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-1 flex flex-col";
            const adminControls = state.isAdmin ? `
                <div class="bg-yellow-100 p-2 text-right">
                    <button data-module-id="${module.id}" class="save-module-btn hidden px-3 py-1 bg-green-600 text-white text-sm font-semibold rounded-md shadow-sm hover:bg-green-700">Save</button>
                </div>` : '';
            card.innerHTML = `
                <div class="p-6 flex-grow">
                    <h3 data-editable="title" data-module-id="${module.id}" class="text-xl font-semibold text-gray-800 ${state.isAdmin ? 'editable' : ''}" ${state.isAdmin ? 'contenteditable="true"' : ''}>${module.title}</h3>
                    <p data-editable="description" data-module-id="${module.id}" class="mt-2 text-gray-600 ${state.isAdmin ? 'editable' : ''}" ${state.isAdmin ? 'contenteditable="true"' : ''}>${module.description}</p>
                </div>
                ${adminControls}
                <div class="p-6 pt-0">
                    <div class="flex justify-between items-center mb-1">
                        <span class="text-sm font-medium text-gray-500">Progress</span>
                        <span class="text-sm font-bold ${isComplete ? 'text-green-600' : 'text-gray-700'}">${progressPercentage}%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5">
                        <div class="bg-green-600 h-2.5 rounded-full transition-all duration-300" style="width: ${progressPercentage}%;"></div>
                    </div>
                </div>
                 <div class="p-4 border-t" data-module-id="${module.id}">
                    <button class="view-module-btn w-full px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-sm hover:bg-green-700">${buttonText}</button>
                 </div>
            `;
            card.querySelector('.view-module-btn').addEventListener('click', () => viewModule(module));
            if (state.isAdmin) {
                card.querySelectorAll('[contenteditable="true"]').forEach(el => {
                    el.addEventListener('input', () => {
                        card.querySelector('.save-module-btn').classList.remove('hidden');
                    });
                });
                card.querySelector('.save-module-btn').addEventListener('click', handleSaveModule);
            }
            modulesGrid.appendChild(card);
        });
    } else {
        noModulesFound.classList.remove('hidden');
    }
};

// LESSON PAGE & QUIZ
const renderLessonPage = () => {
    lessonTitle.textContent = state.currentModule.title;
    videoErrorContainer.classList.add('hidden');
    lessonVideo.classList.remove('opacity-0');

    const videoFileName = `${state.currentModule.id}_${state.language.toLowerCase()}.mp4`;
    const videoSrc = `/${videoFileName}`;
    lessonVideo.src = videoSrc;

    lessonVideo.onerror = () => {
        videoErrorContainer.innerHTML = `
            <div class="text-left max-w-md mx-auto">
                <p class="font-semibold text-lg text-red-400 mb-2">Unable to Load Video</p>
                <p class="mt-1 text-gray-300 text-sm">The app tried to load the video from the root folder, but it could not be found:</p>
                <code class="block bg-gray-800 text-yellow-300 p-2 rounded my-2 text-sm">${videoSrc}</code>
                <p class="mt-4 text-gray-300 text-sm font-semibold">Please check the following:</p>
                <ul class="list-disc list-inside mt-2 text-gray-300 text-sm space-y-1">
                    <li>Is a video file with the exact name <code class="text-yellow-300">${videoFileName}</code> located in the <strong>root folder</strong> of your project?</li>
                    <li>Is the file name entirely in <strong>lowercase</strong>? (Web servers are case-sensitive).</li>
                    <li>If using Git, ensure the video file isn't in your <code class="text-yellow-300">.gitignore</code> file.</li>
                    <li>Has the file been successfully uploaded in your Netlify deployment?</li>
                </ul>
            </div>
        `;
        videoErrorContainer.classList.remove('hidden');
        lessonVideo.classList.add('opacity-0');
    };

    lessonVideo.load();
    renderNotes();
    resetQuizState();
    renderQuiz();
    renderFeedbackSection();
    renderCommentsSection();
};

const renderNotes = () => {
    const notesString = lessonNotes[state.currentModule.id];
    lessonNotesContent.setAttribute('contenteditable', state.isAdmin.toString());
    if (state.isAdmin) {
      lessonNotesContent.classList.add('editable');
      adminNotesControls.innerHTML = `<button id="save-notes-btn" class="hidden px-3 py-1 bg-green-600 text-white text-sm font-semibold rounded-md shadow-sm hover:bg-green-700">Save Notes</button>`;
      adminNotesControls.querySelector('#save-notes-btn').addEventListener('click', handleSaveNotes);
      lessonNotesContent.oninput = () => adminNotesControls.querySelector('#save-notes-btn').classList.remove('hidden');
    } else {
      lessonNotesContent.classList.remove('editable');
      adminNotesControls.innerHTML = '';
    }

    if (!notesString) {
        lessonNotesContent.innerHTML = `<p class="text-gray-700">Lesson notes for this module are not yet available.</p>`;
        return;
    }

    const processedHtml = notesString
        .trim()
        .split('\n')
        .map(line => {
            let processedLine = line.trim();
            if (processedLine.startsWith('- ')) {
                processedLine = processedLine.substring(2);
            }
            processedLine = processedLine.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>');
            if (processedLine === '') return '';
            return `<p class="text-gray-700 leading-relaxed mb-3">${processedLine}</p>`;
        })
        .join('');

    lessonNotesContent.innerHTML = processedHtml;
};

const renderQuiz = () => {
    quizContainer.innerHTML = '';
    if (state.quiz.questions.length === 0) {
        quizContainer.innerHTML = `<p>No quiz available for this module yet.</p>`;
        return;
    }
    if (state.quiz.submitted) {
        renderQuizResults();
        return;
    }
    const q = state.quiz.questions[state.quiz.currentIndex];
    const quizContent = document.createElement('div');
    let optionsHtml = q.options.map((option, index) => `
        <button data-option-index="${index}" class="quiz-option w-full text-left p-4 rounded-lg border-2 transition-colors duration-200 ${
            state.quiz.selectedAnswers[state.quiz.currentIndex] === index
            ? 'bg-green-100 border-green-500 ring-2 ring-green-500 font-semibold'
            : 'bg-white border-gray-300 hover:bg-gray-50 hover:border-gray-400'
        }">
            ${option}
        </button>
    `).join('');
    quizContent.innerHTML = `
        <p class="text-sm font-semibold text-gray-500 mb-2 text-center">Question ${state.quiz.currentIndex + 1} of ${state.quiz.questions.length}</p>
        <p class="text-xl text-gray-800 mb-6 text-center">${q.question}</p>
        <div class="space-y-3">${optionsHtml}</div>
        <div class="mt-8 flex justify-between items-center">
            <button id="prev-question-btn" ${state.quiz.currentIndex === 0 ? 'disabled' : ''} class="px-6 py-2 bg-gray-300 text-gray-800 font-semibold rounded-lg shadow-sm hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed">Previous</button>
            ${state.quiz.currentIndex < state.quiz.questions.length - 1 
                ? `<button id="next-question-btn" class="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-sm hover:bg-green-700">Next</button>`
                : `<button id="submit-quiz-btn" ${state.quiz.selectedAnswers[state.quiz.currentIndex] === undefined ? 'disabled' : ''} class="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed">Submit Quiz</button>`
            }
        </div>
    `;
    quizContainer.appendChild(quizContent);
    addQuizEventListeners();
};

const renderQuizResults = () => {
    const passingScore = 2;
    const passed = state.quiz.score >= passingScore;

    const currentIndex = modules.findIndex(m => m.id === state.currentModule.id);
    const isLastModule = currentIndex === modules.length - 1;
    const completeButtonText = isLastModule ? 'Mark as Complete & Finish' : 'Mark as Complete & Next Lesson';

    quizContainer.innerHTML = `
        <div class="text-center">
            <h3 class="text-2xl font-bold mb-4">Quiz Results</h3>
            <p class="text-4xl font-bold mb-4 ${passed ? 'text-green-600' : 'text-red-600'}">${state.quiz.score} / ${state.quiz.questions.length}</p>
            <p class="mb-6 text-lg">${passed ? "Congratulations! You've passed the quiz." : "You did not pass. Please review the material and try again."}</p>
            <div class="flex gap-4 justify-center">
                <button id="retake-quiz-btn" class="px-6 py-2 bg-gray-500 text-white font-bold rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75">Retake Quiz</button>
                ${passed ? `<button id="complete-module-btn" class="px-6 py-2 bg-orange-500 text-white font-bold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-75 transition-colors">${completeButtonText}</button>` : ''}
            </div>
        </div>
    `;
    if (document.getElementById('retake-quiz-btn')) document.getElementById('retake-quiz-btn').onclick = retakeQuiz;
    if (document.getElementById('complete-module-btn')) document.getElementById('complete-module-btn').onclick = () => markComplete(state.currentModule.id, state.quiz.score);
};

const renderFeedbackSection = () => {
    const moduleId = state.currentModule.id;
    const userFeedback = state.feedback[moduleId];

    let content = '';
    if (userFeedback) {
        content = `<p class="text-center text-gray-600 font-semibold">Thank you for your feedback!</p>`;
    } else {
        content = `
            <h3 class="text-xl font-semibold text-center text-gray-800 mb-4">Was this lesson helpful?</h3>
            <div class="flex gap-4 justify-center">
                <button id="feedback-yes-btn" class="px-6 py-2 text-lg bg-green-100 text-green-800 rounded-lg hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-500">👍 Yes</button>
                <button id="feedback-no-btn" class="px-6 py-2 text-lg bg-red-100 text-red-800 rounded-lg hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500">👎 No</button>
            </div>
        `;
    }
    feedbackContainer.innerHTML = content;
    if (!userFeedback) {
        document.getElementById('feedback-yes-btn').onclick = () => handleFeedback(moduleId, 'yes');
        document.getElementById('feedback-no-btn').onclick = () => handleFeedback(moduleId, 'no');
    }
};

const renderCommentsSection = () => {
    const moduleId = state.currentModule.id;
    
    let commentsToDisplay = state.comments[moduleId] || [];
    if (!state.isAdmin) {
        commentsToDisplay = commentsToDisplay.filter(c => c.status === 'approved');
    }

    const commentsHtml = commentsToDisplay.map((comment, index) => {
        const isPending = comment.status === 'pending';
        const adminControls = state.isAdmin ? `
            <div class="flex items-center gap-2 mt-2">
                ${isPending ? `<button data-comment-index="${index}" class="approve-comment-btn text-green-600 hover:text-green-800 text-sm font-semibold p-1">Approve</button>` : ''}
                <button data-comment-index="${index}" class="delete-comment-btn text-red-500 hover:text-red-700 text-sm font-semibold p-1">Delete</button>
            </div>
        ` : '';

        return `
        <div class="border-b py-3 ${isPending && state.isAdmin ? 'bg-yellow-50 rounded p-2' : ''}">
            <div class="flex justify-between items-start">
                <div>
                    <p class="font-semibold text-gray-800">${comment.name}</p>
                    <p class="text-gray-600 my-1">${comment.text}</p>
                    <p class="text-xs text-gray-400">${new Date(comment.date).toLocaleString()}</p>
                </div>
                ${isPending && state.isAdmin ? `<span class="text-xs font-bold text-yellow-600 bg-yellow-200 px-2 py-1 rounded-full">Awaiting Approval</span>` : ''}
            </div>
            ${adminControls}
        </div>
    `}).join('');

    commentsContainer.innerHTML = `
        <h3 class="text-2xl font-semibold text-gray-800 mb-4">Community Comments</h3>
        <div id="comment-submission-status" class="mb-4"></div>
        <div class="mb-6">
            ${commentsToDisplay.length > 0 ? commentsHtml : '<p class="text-gray-500">No comments yet. Be the first to share your thoughts!</p>'}
        </div>
        <form id="comment-form">
            <div class="mb-3">
                <label for="comment-name" class="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input type="text" id="comment-name" required class="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500">
            </div>
            <div class="mb-3">
                <label for="comment-text" class="block text-sm font-medium text-gray-700 mb-1">Your Comment</label>
                <textarea id="comment-text" required rows="3" class="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
            </div>
            <div class="flex items-center gap-4">
                <button type="submit" class="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700">Post Comment</button>
                ${state.isAdmin ? `<button type="button" id="save-comments-btn" class="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">Save All Comments</button>` : ''}
            </div>
        </form>
    `;
    document.getElementById('comment-form').onsubmit = handleCommentSubmit;
    document.querySelectorAll('.delete-comment-btn').forEach(btn => btn.addEventListener('click', handleDeleteComment));
    document.querySelectorAll('.approve-comment-btn').forEach(btn => btn.addEventListener('click', handleApproveComment));
    
    if (state.isAdmin) {
      document.getElementById('save-comments-btn').onclick = () => showAdminSaveModal('Comments', state.comments);
    }
};


// AI HELP ASSISTANT
const openHelpModal = () => {
    state.chat.isOpen = true;
    if (state.chat.history.length === 0) {
        state.chat.history.push({
            role: 'model',
            text: "Hello! I'm your AI assistant. How can I help you troubleshoot issues with the platform today? For example, you can ask 'Why are my videos not playing?'"
        });
    }
    aiHelpModal.classList.remove('hidden');
    renderChat();
};

const closeHelpModal = () => {
    state.chat.isOpen = false;
    aiHelpModal.classList.add('hidden');
};

const renderChat = () => {
    chatHistoryContainer.innerHTML = '';
    state.chat.history.forEach(message => {
        const messageEl = document.createElement('div');
        messageEl.className = 'flex';
        if (message.role === 'user') {
            messageEl.classList.add('justify-end');
            messageEl.innerHTML = `<div class="bg-green-600 text-white rounded-lg rounded-br-none py-2 px-4 max-w-sm">${message.text}</div>`;
        } else {
            messageEl.classList.add('justify-start');
            messageEl.innerHTML = `<div class="bg-gray-200 text-gray-800 rounded-lg rounded-bl-none py-2 px-4 max-w-sm">${message.text}</div>`;
        }
        chatHistoryContainer.appendChild(messageEl);
    });
    if (state.chat.isLoading) chatLoadingIndicator.classList.remove('hidden');
    else chatLoadingIndicator.classList.add('hidden');
    chatHistoryContainer.scrollTop = chatHistoryContainer.scrollHeight;
};

const handleSendMessage = async (e: Event) => {
    e.preventDefault();
    const userInput = chatInput.value.trim();
    if (!userInput || state.chat.isLoading) return;
    state.chat.history.push({ role: 'user', text: userInput });
    state.chat.isLoading = true;
    chatInput.value = '';
    renderChat();
    try {
        const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
        const systemInstruction = `You are a friendly and helpful AI assistant for the 'Akwa Ibom Digital Bridge' e-learning platform. Your primary role is to help users troubleshoot technical problems. When a user asks about videos not playing, you MUST guide them through the following checklist: 1. Confirm their video files are located in the root folder of their project (not in a subfolder). 2. Confirm the file naming convention is exactly 'module_id_language.mp4' in all lowercase (e.g., 'phone_basics_english.mp4'). 3. Remind them that file names are case-sensitive on web servers. 4. Suggest they check their Netlify deployment logs to ensure the video files were successfully uploaded. 5. Ask them to double-check for any typos. Be encouraging and clear in your instructions. Keep your answers concise and easy to follow.`;
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: userInput,
            config: { systemInstruction }
        });
        state.chat.history.push({ role: 'model', text: response.text });
    } catch (error) {
        console.error("AI Assistant Error:", error);
        let userMessage = "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.";
        if (error instanceof Error && error.message.includes('API key')) {
            console.error("Gemini API Error: The API_KEY is likely missing or invalid for the AI Assistant. Ensure it is correctly set as an environment variable in your deployment settings.");
            userMessage = "Sorry, I can't connect due to a configuration error. Please contact the administrator.";
        }
        state.chat.history.push({ role: 'model', text: userMessage });
    } finally {
        state.chat.isLoading = false;
        renderChat();
    }
};

// --- Actions & Event Handlers ---
const selectLanguage = (lang) => {
    state.language = lang;
    localStorage.setItem('akwaIbomLanguage', lang);
    navigateTo('dashboard');
    renderDashboard();
};

const resetLanguage = () => {
    localStorage.removeItem('akwaIbomLanguage');
    state.language = null;
    navigateTo('landing');
    renderLandingPage();
};

const viewModule = (module) => {
    state.currentModule = module;
    navigateTo('lesson');
    renderLessonPage();
};

const markComplete = (moduleId, score) => {
    state.progress[moduleId] = { score };
    localStorage.setItem('akwaIbomProgress', JSON.stringify(state.progress));

    const currentIndex = modules.findIndex(m => m.id === moduleId);
    const isLastModule = currentIndex === modules.length - 1;

    if (currentIndex !== -1 && !isLastModule) {
        const nextModule = modules[currentIndex + 1];
        viewModule(nextModule);
    } else {
        navigateTo('dashboard');
        renderDashboard();
    }
};

const resetQuizState = () => {
    state.quiz = {
        questions: quizzes[state.currentModule.id] || [],
        currentIndex: 0,
        selectedAnswers: {},
        submitted: false,
        score: 0,
    };
};

const retakeQuiz = () => {
    resetQuizState();
    renderQuiz();
};

const handleFeedback = (moduleId, vote) => {
    state.feedback[moduleId] = vote;
    localStorage.setItem('akwaIbomFeedback', JSON.stringify(state.feedback));
    renderFeedbackSection();
};

const handleCommentSubmit = (e) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const nameInput = document.getElementById('comment-name') as HTMLInputElement;
    const textInput = document.getElementById('comment-text') as HTMLTextAreaElement;
    const name = nameInput.value.trim();
    const text = textInput.value.trim();

    if (!name || !text) return;

    const moduleId = state.currentModule.id;
    const newComment = { name, text, date: new Date().toISOString(), status: 'pending' };

    if (!state.comments[moduleId]) {
        state.comments[moduleId] = [];
    }
    state.comments[moduleId].push(newComment);
    
    const statusEl = document.getElementById('comment-submission-status');
    statusEl.innerHTML = `<div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-3 rounded-md">
        <p class="font-bold">Thank you!</p>
        <p>Your comment has been submitted for approval.</p>
    </div>`;

    form.reset();
    
    // For admin, re-render to show the new pending comment immediately
    if(state.isAdmin) {
        renderCommentsSection();
    }
};

const handleDeleteComment = (e) => {
    const target = e.currentTarget as HTMLButtonElement;
    const commentIndex = parseInt(target.dataset.commentIndex, 10);
    const moduleId = state.currentModule.id;
    const moduleComments = state.comments[moduleId] || [];

    // Find the actual index in the source array, not the filtered one
    const originalComment = (state.isAdmin ? moduleComments : moduleComments.filter(c => c.status === 'approved'))[commentIndex];
    const originalIndex = moduleComments.findIndex(c => c === originalComment);
    
    if (originalIndex > -1) {
        moduleComments.splice(originalIndex, 1);
        renderCommentsSection();
    }
};

const handleApproveComment = (e) => {
    const target = e.currentTarget as HTMLButtonElement;
    const commentIndex = parseInt(target.dataset.commentIndex, 10);
    const moduleId = state.currentModule.id;
    
    // Since only admins see this, we can assume we are working with the full comment list
    if (state.comments[moduleId] && state.comments[moduleId][commentIndex]) {
        state.comments[moduleId][commentIndex].status = 'approved';
        renderCommentsSection();
    }
};

const addQuizEventListeners = () => {
    document.querySelectorAll<HTMLButtonElement>('.quiz-option').forEach(btn => {
        btn.onclick = (e) => {
            const selectedIndex = parseInt((e.currentTarget as HTMLButtonElement).dataset.optionIndex, 10);
            state.quiz.selectedAnswers[state.quiz.currentIndex] = selectedIndex;
            renderQuiz();
        };
    });
    const prevBtn = document.getElementById('prev-question-btn');
    const nextBtn = document.getElementById('next-question-btn');
    const submitBtn = document.getElementById('submit-quiz-btn');
    if (prevBtn) prevBtn.onclick = () => {
        if(state.quiz.currentIndex > 0) {
            state.quiz.currentIndex--;
            renderQuiz();
        }
    };
    if (nextBtn) nextBtn.onclick = () => {
        if(state.quiz.currentIndex < state.quiz.questions.length - 1) {
            state.quiz.currentIndex++;
            renderQuiz();
        }
    };
    if (submitBtn) submitBtn.onclick = () => {
        let correctAnswers = 0;
        state.quiz.questions.forEach((q, index) => {
            if (state.quiz.selectedAnswers[index] === q.correctAnswer) {
                correctAnswers++;
            }
        });
        state.quiz.score = correctAnswers;
        state.quiz.submitted = true;
        renderQuiz();
    };
};

// --- Admin Functions ---
const showAdminLogin = () => {
    adminPasswordModal.classList.remove('hidden');
    adminPasswordInput.focus();
};

const handleAdminLogin = (e) => {
    e.preventDefault();
    adminPasswordError.textContent = '';
    const password = adminPasswordInput.value;
    if (password === ADMIN_PASSWORD) {
        state.isAdmin = true;
        sessionStorage.setItem('isAdminAuthenticated', 'true');
        adminPasswordModal.classList.add('hidden');
        adminBanner.classList.remove('hidden');
        // Re-render the current view with admin rights
        if (state.page === 'dashboard') renderDashboard();
        if (state.page === 'lesson') renderLessonPage();
    } else {
        adminPasswordError.textContent = 'Incorrect password.';
        adminPasswordInput.value = '';
    }
};

const showAdminSaveModal = (title, data) => {
    adminDataTitle.textContent = `Updated ${title} Data`;
    adminDataOutput.value = JSON.stringify(data, null, 2);
    adminDataModal.classList.remove('hidden');
    adminDataOutput.select();
};

const handleExportAllContent = () => {
    const allContent = {
        modules,
        lessonNotes,
        quizzes,
        comments: state.comments,
    };

    const jsonString = JSON.stringify(allContent, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'content.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};

const handleSaveModule = (e) => {
    const target = e.currentTarget as HTMLButtonElement;
    const card = target.closest('.flex-col');
    const moduleId = target.dataset.moduleId;
    const moduleIndex = modules.findIndex(m => m.id === moduleId);

    if (moduleIndex > -1) {
        const newTitle = (card.querySelector('[data-editable="title"]') as HTMLElement).innerText.trim();
        const newDescription = (card.querySelector('[data-editable="description"]') as HTMLElement).innerText.trim();
        modules[moduleIndex].title = newTitle;
        modules[moduleIndex].description = newDescription;
        target.classList.add('hidden');
        showAdminSaveModal('Modules', modules);
    }
};

const handleSaveNotes = () => {
    const moduleId = state.currentModule.id;
    let newNotes = lessonNotesContent.innerHTML
      .replace(/<p[^>]*>/g, '\n- ')
      .replace(/<\/p>/g, '')
      .replace(/<strong[^>]*>/g, '**')
      .replace(/<\/strong>/g, '**')
      .replace(/&nbsp;/g, ' ')
      .replace(/<br>/g, '')
      .trim();

    // A simple conversion from HTML back to markdown-like text
    const pElements = lessonNotesContent.querySelectorAll('p');
    if (pElements.length > 0) {
      newNotes = Array.from(pElements).map(p => {
        // Create a temporary div to parse innerHTML correctly
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = p.innerHTML;
        const strongText = tempDiv.querySelector('strong')?.innerText.trim() || '';
        const fullText = tempDiv.innerText.trim();
        const normalText = fullText.replace(strongText, '').trim();

        if (strongText && normalText.startsWith(':')) {
           return `- **${strongText}**:${normalText.substring(1)}`;
        }
        return `- ${fullText}`;

      }).join('\n');
    }
    lessonNotes[moduleId] = newNotes;
    adminNotesControls.querySelector('#save-notes-btn').classList.add('hidden');
    showAdminSaveModal('Lesson Notes', lessonNotes);
};


// --- App Initialization ---
const initialize = () => {
    const savedLanguage = localStorage.getItem('akwaIbomLanguage');
    const savedProgress = JSON.parse(localStorage.getItem('akwaIbomProgress') || '{}');
    const savedFeedback = JSON.parse(localStorage.getItem('akwaIbomFeedback') || '{}');
    const isAdminAuthenticated = sessionStorage.getItem('isAdminAuthenticated') === 'true';
    
    state.progress = savedProgress;
    state.feedback = savedFeedback;
    state.comments = JSON.parse(JSON.stringify(comments)); // Deep copy to avoid modifying original

    const params = new URLSearchParams(window.location.search);
    if(params.has('admin')) {
        if (isAdminAuthenticated) {
            state.isAdmin = true;
            adminBanner.classList.remove('hidden');
        } else {
            showAdminLogin();
        }
    }

    if (savedLanguage) {
        state.language = savedLanguage;
        navigateTo('dashboard');
        renderDashboard();
    } else {
        navigateTo('landing');
        renderLandingPage();
    }

    const exportContentBtn = document.getElementById('export-content-btn');
    if (exportContentBtn) {
        exportContentBtn.addEventListener('click', handleExportAllContent);
    }

    searchInput.addEventListener('input', renderDashboard);
    resetLanguageBtn.addEventListener('click', resetLanguage);
    backToDashboardBtn.addEventListener('click', () => {
        navigateTo('dashboard');
        renderDashboard();
    });

    helpFab.addEventListener('click', openHelpModal);
    closeHelpModalBtn.addEventListener('click', closeHelpModal);
    chatForm.addEventListener('submit', handleSendMessage);
    closeAdminDataModalBtn.addEventListener('click', () => adminDataModal.classList.add('hidden'));
    adminLoginForm.addEventListener('submit', handleAdminLogin);
};

document.addEventListener('DOMContentLoaded', initialize);
