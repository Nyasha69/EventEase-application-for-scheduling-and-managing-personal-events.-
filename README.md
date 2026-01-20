# EventEase 📅

A beautiful, modern personal event scheduler with notes and todo list functionality. Built with vanilla HTML, CSS, and JavaScript.

![Tech Stack](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![Tech Stack](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![Tech Stack](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## ✨ Features

- **📅 Event Calendar** - Schedule and manage your personal events with a beautiful calendar interface
- **📝 Notes** - Take notes with full Markdown support
- **✓ Todo List** - Track your tasks with persistence across sessions
- **🌙 Modern Dark Mode** - Easy on the eyes with a sleek dashboard design
- **📱 Fully Responsive** - Works beautifully on desktop and mobile

## 🚀 Getting Started

### Quick Start
Simply open `index.html` in your browser.

### With Local Server (Recommended)
```bash
# Clone the repository
git clone https://github.com/yourusername/EventEase.git
cd EventEase

# Start a local server
python3 -m http.server 8080

# Open http://localhost:8080 in your browser
```

## 📁 Project Structure

```
EventEase/
├── index.html          # Landing page
├── EventEase.html      # Calendar & events
├── notes.html          # Notes with markdown
├── todo.html           # Todo list
├── css/
│   ├── shared.css      # Design system & utilities
│   ├── index.css       # Landing page styles
│   ├── EventEase.css   # Calendar styles
│   ├── notes.css       # Notes styles
│   └── todo.css        # Todo styles
├── js/
│   ├── index.js        # Landing page logic
│   ├── EventEase.js    # Calendar functionality
│   ├── notes.js        # Notes with localStorage
│   └── todo.js         # Todo with localStorage
└── images/             # Background images
```

## 🎨 Design

Built with a modern dark mode dashboard aesthetic featuring:
- CSS custom properties for consistent theming
- Glassmorphism navigation bar
- Smooth micro-animations
- Gradient accents
- Inter font family

## 💾 Data Persistence

All data is saved to your browser's localStorage:
- Events persist across sessions
- Notes save automatically as you type
- Todos remember their checked state

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox/grid
- **JavaScript** - Vanilla ES6+
- **Font Awesome** - Icons
- **marked.js** - Markdown parsing
- **Google Fonts** - Inter typeface

## 📝 License

© 2026 Nyashadzashe Razo. All rights reserved.

---

*Made with ❤️ for organizing your life*