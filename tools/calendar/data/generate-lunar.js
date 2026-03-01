#!/usr/bin/env node

/**
 * Chinese Lunar Calendar Data Generator
 * Based on lunar-javascript algorithm
 * Generates data for 2020-2032
 */

// Lunar calendar calculation functions (simplified from lunar-javascript)
const LUNAR_INFO = [
  0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,
  0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,
  0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,
  0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
  0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,
  0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0,
  0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,
  0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6,
  0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,
  0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0,
  0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,
  0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,
  0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,
  0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45
];

const SOLAR_TERMS = [
  '小寒', '大寒', '立春', '雨水', '惊蛰', '春分', '清明', '谷雨',
  '立夏', '小满', '芒种', '夏至', '小暑', '大暑', '立秋', '处暑',
  '白露', '秋分', '寒露', '霜降', '立冬', '小雪', '大雪', '冬至'
];

const SOLAR_TERMS_EN = [
  'Minor Cold', 'Major Cold', 'Start of Spring', 'Rain Water', 'Awakening of Insects', 'Spring Equinox',
  'Pure Brightness', 'Grain Rain', 'Start of Summer', 'Grain Buds', 'Grain in Ear', 'Summer Solstice',
  'Minor Heat', 'Major Heat', 'Start of Autumn', 'End of Heat', 'White Dew', 'Autumn Equinox',
  'Cold Dew', 'Descent of Frost', 'Start of Winter', 'Minor Snow', 'Major Snow', 'Winter Solstice'
];

const LUNAR_MONTHS = ['正月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '冬月', '腊月'];
const LUNAR_DAYS = ['初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十',
  '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十',
  '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十'];
const LUNAR_MONTHS_EN = ['1st Month', '2nd Month', '3rd Month', '4th Month', '5th Month', '6th Month', 
  '7th Month', '8th Month', '9th Month', '10th Month', '11th Month', '12th Month'];
const LUNAR_DAYS_EN = [
  '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th',
  '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th',
  '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th'
];

function leapMonth(year) {
  return LUNAR_INFO[year - 1900] & 0xf;
}

function leapDays(year) {
  if (leapMonth(year)) {
    return (LUNAR_INFO[year - 1900] & 0x10000) ? 30 : 29;
  }
  return 0;
}

function monthDays(year, month) {
  return (LUNAR_INFO[year - 1900] & (0x10000 >> month)) ? 30 : 29;
}

function yearDays(year) {
  let sum = 348;
  for (let i = 0x8000; i > 0x8; i >>= 1) {
    sum += (LUNAR_INFO[year - 1900] & i) ? 1 : 0;
  }
  return sum + leapDays(year);
}

function solarToLunar(solarYear, solarMonth, solarDay) {
  const baseDate = new Date(1900, 0, 31);
  const objDate = new Date(solarYear, solarMonth - 1, solarDay);
  let offset = Math.floor((objDate - baseDate) / 86400000);

  let lunarYear, lunarMonth, lunarDay;
  let isLeap = false;

  for (lunarYear = 1900; lunarYear < 2101 && offset > 0; lunarYear++) {
    const yearDaysCount = yearDays(lunarYear);
    offset -= yearDaysCount;
  }

  if (offset < 0) {
    offset += yearDays(--lunarYear);
  }

  const leap = leapMonth(lunarYear);
  for (lunarMonth = 1; lunarMonth < 13 && offset > 0; lunarMonth++) {
    let monthDaysCount;
    if (leap > 0 && lunarMonth === (leap + 1) && !isLeap) {
      --lunarMonth;
      isLeap = true;
      monthDaysCount = leapDays(lunarYear);
    } else {
      monthDaysCount = monthDays(lunarYear, lunarMonth);
    }

    if (isLeap && lunarMonth === (leap + 1)) isLeap = false;
    offset -= monthDaysCount;
  }

  if (offset === 0 && leap > 0 && lunarMonth === leap + 1) {
    if (isLeap) {
      isLeap = false;
    } else {
      isLeap = true;
      --lunarMonth;
    }
  }

  if (offset < 0) {
    offset += monthDays(lunarYear, --lunarMonth);
  }

  lunarDay = offset + 1;

  return {
    year: lunarYear,
    month: lunarMonth,
    day: lunarDay,
    isLeap: isLeap
  };
}

function getSolarTerm(year, month, day) {
  const solarTermDates = calculateSolarTerms(year);
  const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  return solarTermDates[dateStr] || null;
}

function calculateSolarTerms(year) {
  const terms = {};
  const baseYear = 1900;
  const termInfo = [
    0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693,
    263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758
  ];

  for (let i = 0; i < 24; i++) {
    const century = Math.floor((year - baseYear) / 100);
    const yearInCentury = (year - baseYear) % 100;
    const term = Math.floor(termInfo[i] + 525.6 * yearInCentury + 0.26 * century - 0.26);
    
    const termDate = new Date(year, 0, 1);
    termDate.setMinutes(termDate.getMinutes() + term);
    
    const month = termDate.getMonth() + 1;
    const day = termDate.getDate();
    const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    
    terms[dateStr] = `${SOLAR_TERMS[i]} ${SOLAR_TERMS_EN[i]}`;
  }

  return terms;
}

function getFestivals(year, month, day, lunar) {
  const festivals = [];
  const dateStr = `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  
  // Solar festivals
  const solarFestivals = {
    '01-01': '元旦 New Year\'s Day',
    '02-14': '情人节 Valentine\'s Day',
    '03-08': '妇女节 Women\'s Day',
    '04-01': '愚人节 April Fools\' Day',
    '05-01': '劳动节 Labor Day',
    '05-04': '青年节 Youth Day',
    '06-01': '儿童节 Children\'s Day',
    '10-01': '国庆节 National Day',
    '12-25': '圣诞节 Christmas'
  };

  if (solarFestivals[dateStr]) {
    festivals.push(solarFestivals[dateStr]);
  }

  // Lunar festivals
  const lunarDateStr = `${String(lunar.month).padStart(2, '0')}-${String(lunar.day).padStart(2, '0')}`;
  const lunarFestivals = {
    '01-01': '春节 Spring Festival',
    '01-15': '元宵节 Lantern Festival',
    '05-05': '端午节 Dragon Boat Festival',
    '07-07': '七夕节 Qixi Festival',
    '08-15': '中秋节 Mid-Autumn Festival',
    '09-09': '重阳节 Double Ninth Festival',
    '12-08': '腊八节 Laba Festival',
    '12-23': '小年 Little New Year'
  };

  if (lunarFestivals[lunarDateStr]) {
    festivals.push(lunarFestivals[lunarDateStr]);
  }

  // Special calculation for Qingming (around April 4-6)
  if (month === 4 && day >= 4 && day <= 6) {
    const qingmingDay = Math.floor((year % 4 === 0) ? 4 : 5);
    if (day === qingmingDay) {
      festivals.push('清明节 Qingming Festival');
    }
  }

  return festivals;
}

// Generate data
function generateData() {
  const lunarData = { info: 'Chinese Lunar Calendar Data 2020-2032', version: '1.0', years: {} };
  
  for (let year = 2020; year <= 2032; year++) {
    const yearData = {
      solarTerms: {},
      festivals: {},
      lunarDates: {}
    };

    const solarTerms = calculateSolarTerms(year);
    yearData.solarTerms = solarTerms;

    for (let month = 1; month <= 12; month++) {
      const daysInMonth = new Date(year, month, 0).getDate();
      
      for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const lunar = solarToLunar(year, month, day);
        
        const lunarMonthName = (lunar.isLeap ? '闰' : '') + LUNAR_MONTHS[lunar.month - 1];
        const lunarDayName = LUNAR_DAYS[lunar.day - 1];
        const lunarMonthNameEn = (lunar.isLeap ? 'Leap ' : '') + LUNAR_MONTHS_EN[lunar.month - 1];
        const lunarDayNameEn = LUNAR_DAYS_EN[lunar.day - 1];
        
        yearData.lunarDates[dateStr] = {
          lunar: lunarMonthName + lunarDayName,
          lunarEn: `${lunarMonthNameEn} ${lunarDayNameEn}`,
          month: lunar.month,
          day: lunar.day,
          isLeapMonth: lunar.isLeap
        };

        const festivals = getFestivals(year, month, day, lunar);
        if (festivals.length > 0) {
          yearData.festivals[dateStr] = festivals.join(' · ');
        }
      }
    }

    lunarData.years[year] = yearData;
  }

  return lunarData;
}

// Output
const data = generateData();
console.log(JSON.stringify(data, null, 2));
