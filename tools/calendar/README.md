# 🗓️ Chinese Calendar | 中国日历

CLI-style Chinese calendar with lunar dates and almanac (Huangli) information.

**Live:** [shihong.me/tools/calendar/](https://shihong.me/tools/calendar/)

## ✨ Features

- 📅 **Three Views** - Year, Month, and Day views
- 🌙 **Lunar Calendar** - Chinese lunar dates, solar terms, traditional festivals
- 📖 **Huangli (Almanac)** - Daily suitable/unsuitable activities, hourly fortune
- 🌓 **Dark/Light Theme** - Syncs with main site theme
- ⌨️ **Keyboard Navigation** - Full keyboard control
- 🖥️ **CLI Aesthetic** - Terminal-style design matching shihong.me
- 🌏 **Bilingual** - Chinese and English side-by-side

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `←/→` | Previous/Next month |
| `↑/↓` | Previous/Next year |
| `y` | Switch to Year view |
| `m` | Switch to Month view |
| `d` | Switch to Day view (when date selected) |
| `t` | Toggle dark/light theme |
| `Esc` | Return to Month view from Day view |

## 📊 Data Coverage

- **Years:** 2020-2032
- **Lunar Calendar:** Dates, solar terms, traditional festivals
- **Huangli:** Daily suitable/unsuitable activities, hourly fortune, clash info

## 🗂️ Data Files

### `data/lunar.json`
Contains lunar calendar information:
- Solar terms (节气)
- Traditional festivals (节日)
- Lunar date conversions

### `data/huangli.json`
Contains almanac information:
- Suitable activities (宜)
- Unsuitable activities (忌)
- Hourly fortune (时辰吉凶)
- Clash information (冲煞)
- Gods and spirits (神煞)

## 🔧 Data Sources

Data is compiled from:
- **Lunar Calendar Algorithm** - Based on Chinese Lunar Calendar calculations
- **Huangli Data** - Traditional Chinese almanac sources
- **Solar Terms** - Astronomical calculations

## 🚀 Usage

**Important:** This calendar requires an HTTP server to load data files. Direct file:// access will not work due to browser CORS restrictions.

### Local Development
```bash
# Option 1: Python
cd tools/calendar
python3 -m http.server 8000
# Visit: http://localhost:8000

# Option 2: Node.js (npx)
cd tools/calendar
npx serve
# Visit: http://localhost:3000

# Option 3: PHP
cd tools/calendar
php -S localhost:8000
# Visit: http://localhost:8000
```

### Online
Visit: `https://shihong.me/tools/calendar/`

## 📝 TODO

- [ ] Complete lunar data for 2020-2032
- [ ] Complete huangli data for 2020-2032
- [ ] Add more detailed festival information
- [ ] Add zodiac animal information
- [ ] Optimize mobile responsive design
- [ ] Add export/share functionality

## 🏷️ Version

v1.0 - Initial release with framework

## 📄 License

MIT License - Part of shihong.me project
