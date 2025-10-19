# 🥷 shihong.me

Personal website with CLI-inspired design and geek aesthetic.

**Live:** [shihong.me](https://shihong.me) | **Version:** v1.22

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

## 🏷️ Version Management

**Versioning Strategy:**
- Website footer displays version number (e.g., v1.19, v1.20, v1.21...)
- Version number increments with each update
- Git tags are created **only for major releases** (e.g., v1.13, v2.0)
- Daily updates increment version number but don't create tags

**Version Sync Rule:**
- **IMPORTANT:** Every code change MUST increment the version number in BOTH files:
  - `index.html` footer: `v1.XX` → `v1.XX+1`
  - `README.md` header: `**Version:** v1.XX` → `**Version:** v1.XX+1`
- Both version numbers MUST always match
- This rule applies to ALL changes (content, style, functionality)

**When to create a Git tag:**
- Major feature additions
- Significant design changes
- Architecture refactoring
- Other milestone updates

**Update workflow:**
```bash
# Regular update (no tag)
# 1. Update version in index.html footer (v1.XX → v1.XX+1)
# 2. Update version in README.md header (v1.XX → v1.XX+1)
# 3. Commit and push
git commit -m "feat: description"
git push

# Major release (with tag)
# 1. Update version in both files
# 2. Create tag and push
git commit -m "feat: major update"
git tag -a v2.0 -m "Release v2.0: description"
git push && git push origin v2.0
```

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details
