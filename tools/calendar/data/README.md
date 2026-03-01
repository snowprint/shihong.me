# Calendar Data

This directory contains Chinese lunar calendar and almanac (Huangli) data for 2020-2032.

## Files

- `lunar.json` (857KB) - Lunar calendar data including:
  - Solar terms (节气)
  - Traditional festivals (节日)
  - Lunar date conversions
  
- `huangli.json` (855KB) - Almanac data in compact format including:
  - Suitable/unsuitable activities (宜忌)
  - Hourly fortune patterns (时辰吉凶)
  - Clash information (冲煞)

## Data Generation

Data is generated using algorithms based on traditional Chinese calendar calculations:

- `generate-lunar.js` - Generates lunar calendar data
- `generate-huangli-compact.js` - Generates compact almanac data

To regenerate data:

```bash
node generate-lunar.js > lunar.json
node generate-huangli-compact.js > huangli.json
```

## Data Format

### lunar.json
Standard JSON format with full text descriptions.

### huangli.json (Compact Format)
Uses indexed arrays to reduce file size:
- Activity names stored in `act` reference object
- Daily data stored as compact arrays: `[ganIndex, zhiIndex, suitableIndices, unsuitableIndices, hourlyPattern]`
- Reduces file size from 8MB to 855KB (90% reduction)

## License

Data generated using traditional Chinese calendar algorithms.
Part of shihong.me project - MIT License.
