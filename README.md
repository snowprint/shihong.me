# 🥷 shihong.me

Personal website with CLI-inspired design and geek aesthetic.

**Live:** [shihong.me](https://shihong.me) | **Version:** v1.13

## ✨ Features

- 🖥️ **CLI/Terminal aesthetic** - Monospace fonts, terminal-style UI elements
- 🌓 **Dark/Light theme** - Toggle between dark and light modes (default: dark)
- ⌨️ **Keyboard navigation** - Navigate sections with `j`/`k`, toggle theme with `t`
- 📱 **Fully responsive** - Works seamlessly on desktop and mobile
- ⚡ **Zero dependencies** - Pure HTML/CSS/JS, no build tools required
- 🎯 **Smooth interactions** - Active section highlighting, smooth scrolling

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `j` | Next section |
| `k` | Previous section |
| `t` | Toggle dark/light theme |

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/snowprint/shihong.me.git

# Open in browser
open index.html
```

No build process needed - just open `index.html` in your browser!

## 🎨 Design Philosophy

- **Minimalist** - Clean, distraction-free interface
- **Geek-friendly** - Terminal-inspired design with monospace fonts
- **Accessible** - Semantic HTML, keyboard navigation, proper ARIA labels
- **Fast** - Single HTML file, no external dependencies

## 📁 Project Structure

```
shihong.me/
├── .github/
│   └── workflows/
│       └── deploy.yml    # Auto-deployment to server
├── index.html            # Main page (includes CSS & JS)
├── README.md             # This file
├── LICENSE               # MIT License
└── .gitignore            # Git ignore rules
```

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox
- **Vanilla JavaScript** - No frameworks

## 🚢 Deployment

The site automatically deploys to [shihong.me](https://shihong.me) via GitHub Actions when changes are pushed to the `main` branch.

**Deployment workflow:**
1. Push changes to `main` branch
2. GitHub Actions triggers deployment
3. Files are synced to server via rsync over SSH
4. Site is live at https://shihong.me

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details
