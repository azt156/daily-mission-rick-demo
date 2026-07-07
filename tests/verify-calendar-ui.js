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
excludes('365 天任務卷軸', 'old long-scroll hero');
excludes('mission-map', 'old long-scroll mission map');
excludes('--bg: #f5f7fb', 'old flat light background');
excludes('商業模式', 'developer/business model copy');
excludes('任務很小，但它訓練的是', 'developer-facing mission explanation');

console.log('calendar UI checks ok');
