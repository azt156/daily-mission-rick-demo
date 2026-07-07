const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const index = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

function includes(text, label) {
  if (!index.includes(text)) {
    throw new Error(`Missing ${label}: ${text}`);
  }
}

function excludes(text, label) {
  if (index.includes(text)) {
    throw new Error(`Unexpected ${label}: ${text}`);
  }
}

includes('calendarGrid', 'calendar grid');
includes('monthTitle', 'month switch title');
includes('本月願望', 'monthly wish user copy');
includes('登入 Google 帳號', 'Google sign-in entry');
includes('今天的小任務', 'today mission card');
includes('拍下完成證明', 'photo proof copy');
includes('完成後解鎖進階挑戰', 'advanced unlock cue');
includes('advancedPanel', 'advanced reflection panel');
includes('reflectionScore', 'reflection scoring');
includes('renderCalendar', 'calendar rendering logic');
includes('selectDay', 'date selection logic');
includes('monthlyWishes', 'monthly wish data');
includes('photoInput', 'photo input');
includes('--color-glass-bg', 'glassmorphism design token');
includes('backdrop-filter: blur', 'frosted glass blur');
includes('-webkit-backdrop-filter', 'Safari frosted glass support');
includes('body::before', 'colored glass background layer');
includes('class="glass', 'glass card class usage');
includes('年度能量', 'website-first dashboard metric');
includes('綜合積分', 'total score dashboard');
includes('本月排行榜', 'leaderboard panel');
includes('scoreTotal', 'score total binding');
includes('leaderboardList', 'leaderboard rendering target');
includes('calculateTotalScore', 'score algorithm');
includes('renderLeaderboard', 'leaderboard rendering logic');
includes('dailyLifeMissions', '365 daily life mission data');
includes('buildMissionPlans', '365 mission plan builder');
includes('uniqueMissionTitles.size === totalDays', 'unique mission guard');
includes('2026 / 7 - 2027 / 7', 'year range copy');
includes('--color-bg-grad-2: #1f2937', 'simpler muted palette');
includes('font-size: 16px;', 'larger glass card body text');
includes('font-weight: 650;', 'lighter readable card weight');
includes('起床後先喝三口水', 'daily life task example');
includes('早餐先吃一口原型食物', 'daily life task example');
includes('nextCalendarGrid', 'next month calendar grid');
includes('nextMonthTitle', 'next month title');
includes('renderMonthGrid', 'shared two-month calendar renderer');
excludes('365 天任務卷軸', 'old long-scroll hero');
excludes('mission-map', 'old long-scroll mission map');
excludes('taskTemplates[index % taskTemplates.length]', 'old repeating task templates');
excludes('補水挑戰｜', 'challenge-prefixed daily mission title');
excludes('挑一個最想保留的細節', 'abstract repeated task copy');
excludes('--bg: #f5f7fb', 'old flat light background');
excludes('商業模式', 'developer/business model copy');
excludes('任務很小，但它訓練的是', 'developer-facing mission explanation');

console.log('calendar UI checks ok');
