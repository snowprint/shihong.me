#!/usr/bin/env node

/**
 * Simplified Chinese Huangli Data Generator
 * Compact format for 2020-2032
 */

const TIANGAN = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
const DIZHI = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
const ZODIAC = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];
const ZODIAC_EN = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];

const ACTIVITIES = {
  s: [ // suitable
    '祭祀 Worship', '祈福 Pray', '求嗣 Pray for Offspring', '开光 Consecration', 
    '出行 Travel', '解除 Remove', '扫舍 Clean House', '修造 Renovate',
    '动土 Construction', '竖柱 Erect Pillar', '上梁 Raise Beam', '安床 Install Bed', 
    '嫁娶 Marriage', '纳采 Betrothal', '问名 Inquiry', '纳婿 Accept Son-in-law',
    '开市 Open Business', '交易 Trade', '立券 Sign Contract', '纳财 Collect Money', 
    '栽种 Plant', '牧养 Raise Livestock', '纳畜 Buy Livestock', '破土 Break Ground',
    '安葬 Burial', '启攒 Exhumation', '成服 Mourning', '除服 End Mourning', 
    '移徙 Move', '入宅 Enter House', '安香 Install Incense', '出火 Light Fire'
  ],
  u: [ // unsuitable
    '嫁娶 Marriage', '纳采 Betrothal', '订盟 Alliance', '安床 Install Bed', 
    '动土 Construction', '破土 Break Ground', '修造 Renovate', '竖柱 Erect Pillar',
    '开市 Open Business', '立券 Sign Contract', '交易 Trade', '纳财 Collect Money', 
    '出行 Travel', '移徙 Move', '分居 Separate', '入宅 Enter House',
    '祈福 Pray', '祭祀 Worship', '安葬 Burial', '开光 Consecration', 
    '栽种 Plant', '伐木 Cut Trees', '纳畜 Buy Livestock', '牧养 Raise Livestock'
  ]
};

function getDayGanZhi(year, month, day) {
  const baseDate = new Date(1900, 0, 1);
  const targetDate = new Date(year, month - 1, day);
  const daysDiff = Math.floor((targetDate - baseDate) / 86400000);
  const ganIndex = (daysDiff + 6) % 10;
  const zhiIndex = (daysDiff + 8) % 12;
  return { ganIndex, zhiIndex };
}

function getClash(zhiIndex) {
  const clashIndex = (zhiIndex + 6) % 12;
  const dir = ['北', '西', '南', '东'][Math.floor(clashIndex / 3)];
  return `冲${ZODIAC[clashIndex]}煞${dir}`;
}

function generateCompactData() {
  const data = {
    info: 'Compact Huangli Data 2020-2032',
    v: '1.0',
    // Activity reference
    act: ACTIVITIES,
    // Date data
    d: {}
  };

  let dayCounter = 0;

  for (let year = 2020; year <= 2032; year++) {
    for (let month = 1; month <= 12; month++) {
      const daysInMonth = new Date(year, month, 0).getDate();
      
      for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const gz = getDayGanZhi(year, month, day);
        
        // Compact format: [ganIndex, zhiIndex, suitable_indices, unsuitable_indices, hourly_pattern]
        const suitableCount = 4 + (dayCounter % 3);
        const unsuitableCount = 3 + (dayCounter % 2);
        const sIndices = [];
        const uIndices = [];
        
        for (let i = 0; i < suitableCount; i++) {
          sIndices.push((dayCounter + i) % ACTIVITIES.s.length);
        }
        
        for (let i = 0; i < unsuitableCount; i++) {
          uIndices.push((dayCounter + i + 3) % ACTIVITIES.u.length);
        }
        
        data.d[dateStr] = [
          gz.ganIndex,
          gz.zhiIndex,
          sIndices,
          uIndices,
          dayCounter % 2 // hourly pattern
        ];
        
        dayCounter++;
      }
    }
  }

  return data;
}

const data = generateCompactData();
console.log(JSON.stringify(data, null, 2));
