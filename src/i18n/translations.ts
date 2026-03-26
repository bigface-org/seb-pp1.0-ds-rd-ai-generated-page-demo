export type Locale = 'zh-TW' | 'zh-CN'

export const translations: Record<Locale, Record<string, string>> = {
  'zh-TW': {
    // Header
    'nav.cruise': '郵輪',
    'nav.group_tour': '跟團旅遊',
    'nav.accommodation': '住宿',
    'nav.activities': '景點行程',
    'nav.thsr': '台灣高鐵',
    'nav.download_app': '下載 APP',
    'nav.login': '登入',
    'nav.register': '註冊',
    'nav.language': '繁體中文(台灣)',
    'nav.currency': 'TWD',

    // Hero
    'hero.title': '精選國際馬拉松｜全球運動賽事報名+住宿',
    'hero.description': 'AsiaYo提供2026-2027日本、韓國、台灣馬拉松等多元運動賽事報名+住宿，包含經典賽事如富士山馬拉松、札幌馬拉松、濟州馬拉松，以及泰國高爾夫與富士山登山等海內外運動行程，挑戰自我的同時也享受旅行，讓旅程更豐富刺激！',

    // Tabs
    'tab.hot': '熱銷中賽事',
    'tab.japan_marathon': '日本馬拉松',
    'tab.intl_marathon': '國際馬拉松',
    'tab.hiking': '登山',
    'tab.intl_cycling': '國際單車',
    'tab.taiwan_marathon': '台灣馬拉松',
    'tab.golf': '高爾夫旅遊',
    'tab.baseball': '棒球賽事',

    // Sub tabs
    'subtab.hot': '熱銷中賽事',
    'subtab.pb': '追求PB',
    'subtab.beginner': '新手友善',
    'subtab.extreme': '挑戰極限',
    'subtab.day_trip': '包車/一日遊',

    // Cards
    'card.fuji.location': '山梨縣',
    'card.fuji.title': '富士山馬拉松 2025/12/14',
    'card.fuji.desc1': '★日本百選賽事，一生必去的賽事！',
    'card.fuji.desc2': '★精選超人氣飯店讓您輕鬆選擇',
    'card.fuji.desc3': '★富士山造型的可愛獎牌GET!',
    'card.fuji.type': '全馬｜環湖｜歡樂跑',
    'card.fuji.package': '參賽權＋精選住宿2晚',
    'card.fuji.price': '敬請期待',
    'card.fuji.preparing': '準備中，敬請期待！',

    'card.sapporo.location': '北海道',
    'card.sapporo.title': '札幌馬拉松 2026/10/04',
    'card.sapporo.desc1': '★安排薄野站3分超人氣飯店，遊札幌最便利！',
    'card.sapporo.desc2': '★最適合跑步的十月涼秋，感受北海道最大規模賽事之一的活力，體驗札幌獨有的城市魅力',
    'card.sapporo.desc3': '★賽道前半段將跑過「薄野 (すすきの)」和「大通公園」等札幌主要觀光地標，是一場難得的城市觀光路跑。',
    'card.sapporo.type': '半馬｜10K',
    'card.sapporo.package': '參賽權＋精選住宿自由行',
    'card.sapporo.price': '每人最低 NT$8,560 起',

    'card.hokkaido.location': '北海道',
    'card.hokkaido.title': '北海道馬拉松 2026/08/30',
    'card.hokkaido.desc1': '★日本百選賽事',
    'card.hokkaido.desc2': '★全馬路線可體驗東京奧運賽道、跑進北海道大學',
    'card.hokkaido.desc3': '★利用札幌涼爽的氣候，成為日本唯一在夏季舉行的全程馬拉松比賽',
    'card.hokkaido.type': '全馬',
    'card.hokkaido.package': '參賽權＋精選住宿2晚',
    'card.hokkaido.price': '每人最低 NT$9,950 起',

    'card.seoul.location': '韓國 首爾',
    'card.seoul.title': 'JTBC首爾馬拉松 2026/11/01',
    'card.seoul.desc1': '★為紀念奧運舉辦的賽事，起點為首爾世界盃競技場，終點則在首爾綜合運動場',
    'card.seoul.desc2': '★首爾經典地標盡收眼底，全馬賽道橫跨漢江的楊花大橋進入汝矣島，再經過麻浦大橋，沿路欣賞麻浦區和高樓林立的城市風光。',
    'card.seoul.desc3': '★結合韓流文化、音樂和城市探索，讓每位參賽者都能在挑戰自我體能的同時，也可盡情享受首爾的獨特魅力',
    'card.seoul.type': '全馬｜10K',
    'card.seoul.package': '參賽權＋精選住宿4晚',
    'card.seoul.price': '每人最低 NT$13,155 起',

    'card.jeju.location': '韓國 濟州島',
    'card.jeju.title': '濟州國際旅遊馬拉松 2026/06/07',
    'card.jeju.desc1': '★飯店位於商圈中心，周圍有許多美食，讓您心比賽之餘，還享有便利的旅遊體驗',
    'card.jeju.desc2': '★韓國最南端的島嶼，氣候宜人，四周環海的特性吸引不少人前往探訪',
    'card.jeju.desc3': '★多元賽事距離，適合各類跑者參加',
    'card.jeju.type': '全馬｜半馬｜10K',
    'card.jeju.package': '參賽權＋精選住宿4晚',
    'card.jeju.price': '每人最低 NT$6,050 起',

    'card.niigata.location': '新潟',
    'card.niigata.title': '新潟馬拉松 2026/10/11',
    'card.niigata.desc1': '★日本百選賽事',
    'card.niigata.desc2': '★賽道筆直且起伏較小，容易創造紀錄的超高速賽道，與AsiaYo訂購，全馬完賽將提供特別完賽獎牌！',
    'card.niigata.desc3': '★沿途有當地居民很高熱情為跑者加油，沿途品嚐新潟特色美食與飲品',
    'card.niigata.type': '全馬｜歡樂跑(10.6K)',
    'card.niigata.package': '參賽權＋精選住宿2晚',
    'card.niigata.price': '每人最低 NT$8,685 起',

    'card.kobe.location': '兵庫縣 神戶市',
    'card.kobe.title': '神戶馬拉松 2026/11/15',
    'card.kobe.desc1': '★日本百選賽事，日本最早的馬拉松賽事',
    'card.kobe.desc2': '★時間限制7小時且賽道設計大多平坦，適合各種程度的跑者。',
    'card.kobe.desc3': '★歷史名城－神戶，體驗美妙城市的同時享受日本文化和風景。',
    'card.kobe.type': '全馬',
    'card.kobe.package': '參賽權＋精選住宿2晚',
    'card.kobe.price': '每人最低 NT$10,290 起',

    'card.kanazawa.location': '金澤',
    'card.kanazawa.title': '金澤馬拉松 2026/10/25',
    'card.kanazawa.desc1': '★日本百選賽事',
    'card.kanazawa.desc2': '★安排金澤站旁超值飯店，讓您比賽觀光最便利',
    'card.kanazawa.desc3': '★路線沿途大自然、歷史景觀豐富，還有金澤料理與文化，感受金澤魅力的補給站美食！',
    'card.kanazawa.type': '全馬',
    'card.kanazawa.package': '參賽權＋精選住宿2晚',
    'card.kanazawa.price': '每人最低 NT$13,825 起',

    'card.yokohama.location': '神奈川縣 橫濱市',
    'card.yokohama.title': '橫濱馬拉松 2026/10/25',
    'card.yokohama.desc1': '★獨特的橫濱賽道，盡情奔跑在許多旅遊名勝地。',
    'card.yokohama.desc2': '★穿越平時無法奔跑的灣岸高速公路，享受港口城市橫濱的美景！',
    'card.yokohama.desc3': '★沿路設有補給站，不僅提供獨特的表演及當地橫濱和神奈川的食品作為"幸運伙食"。',
    'card.yokohama.type': '全馬',
    'card.yokohama.package': '參賽權＋精選住宿2晚',
    'card.yokohama.price': '每人最低 NT$13,180 起',

    // Contact
    'contact.title': '聯繫客服',
    'contact.phone': '致電洽詢：02-7755-0575 分機 7',
    'contact.line': '線上諮詢',
    'contact.agent': '洽詢專員',

    // Footer
    'footer.terms': '服務條款',
    'footer.privacy': '隱私聲明',
    'footer.copyright': '© 2014-2026 AsiaYo Co., Ltd. All Rights Reserved.',

    // Language
    'lang.zh-TW': '繁體中文(台灣)',
    'lang.zh-CN': '简体中文',
  },

  'zh-CN': {
    // Header
    'nav.cruise': '邮轮',
    'nav.group_tour': '跟团旅游',
    'nav.accommodation': '住宿',
    'nav.activities': '景点行程',
    'nav.thsr': '台湾高铁',
    'nav.download_app': '下载 APP',
    'nav.login': '登录',
    'nav.register': '注册',
    'nav.language': '简体中文',
    'nav.currency': 'TWD',

    // Hero
    'hero.title': '精选国际马拉松｜全球运动赛事报名+住宿',
    'hero.description': 'AsiaYo提供2026-2027日本、韩国、台湾马拉松等多元运动赛事报名+住宿，包含经典赛事如富士山马拉松、札幌马拉松、济州马拉松，以及泰国高尔夫与富士山登山等海内外运动行程，挑战自我的同时也享受旅行，让旅程更丰富刺激！',

    // Tabs
    'tab.hot': '热销中赛事',
    'tab.japan_marathon': '日本马拉松',
    'tab.intl_marathon': '国际马拉松',
    'tab.hiking': '登山',
    'tab.intl_cycling': '国际单车',
    'tab.taiwan_marathon': '台湾马拉松',
    'tab.golf': '高尔夫旅游',
    'tab.baseball': '棒球赛事',

    // Sub tabs
    'subtab.hot': '热销中赛事',
    'subtab.pb': '追求PB',
    'subtab.beginner': '新手友善',
    'subtab.extreme': '挑战极限',
    'subtab.day_trip': '包车/一日游',

    // Cards
    'card.fuji.location': '山梨县',
    'card.fuji.title': '富士山马拉松 2025/12/14',
    'card.fuji.desc1': '★日本百选赛事，一生必去的赛事！',
    'card.fuji.desc2': '★精选超人气饭店让您轻松选择',
    'card.fuji.desc3': '★富士山造型的可爱奖牌GET!',
    'card.fuji.type': '全马｜环湖｜欢乐跑',
    'card.fuji.package': '参赛权＋精选住宿2晚',
    'card.fuji.price': '敬请期待',
    'card.fuji.preparing': '准备中，敬请期待！',

    'card.sapporo.location': '北海道',
    'card.sapporo.title': '札幌马拉松 2026/10/04',
    'card.sapporo.desc1': '★安排薄野站3分超人气饭店，游札幌最便利！',
    'card.sapporo.desc2': '★最适合跑步的十月凉秋，感受北海道最大规模赛事之一的活力，体验札幌独有的城市魅力',
    'card.sapporo.desc3': '★赛道前半段将跑过「薄野 (すすきの)」和「大通公园」等札幌主要观光地标，是一场难得的城市观光路跑。',
    'card.sapporo.type': '半马｜10K',
    'card.sapporo.package': '参赛权＋精选住宿自由行',
    'card.sapporo.price': '每人最低 NT$8,560 起',

    'card.hokkaido.location': '北海道',
    'card.hokkaido.title': '北海道马拉松 2026/08/30',
    'card.hokkaido.desc1': '★日本百选赛事',
    'card.hokkaido.desc2': '★全马路线可体验东京奥运赛道、跑进北海道大学',
    'card.hokkaido.desc3': '★利用札幌凉爽的气候，成为日本唯一在夏季举行的全程马拉松比赛',
    'card.hokkaido.type': '全马',
    'card.hokkaido.package': '参赛权＋精选住宿2晚',
    'card.hokkaido.price': '每人最低 NT$9,950 起',

    'card.seoul.location': '韩国 首尔',
    'card.seoul.title': 'JTBC首尔马拉松 2026/11/01',
    'card.seoul.desc1': '★为纪念奥运举办的赛事，起点为首尔世界杯竞技场，终点则在首尔综合运动场',
    'card.seoul.desc2': '★首尔经典地标尽收眼底，全马赛道横跨汉江的杨花大桥进入汝矣岛，再经过麻浦大桥，沿路欣赏麻浦区和高楼林立的城市风光。',
    'card.seoul.desc3': '★结合韩流文化、音乐和城市探索，让每位参赛者都能在挑战自我体能的同时，也可尽情享受首尔的独特魅力',
    'card.seoul.type': '全马｜10K',
    'card.seoul.package': '参赛权＋精选住宿4晚',
    'card.seoul.price': '每人最低 NT$13,155 起',

    'card.jeju.location': '韩国 济州岛',
    'card.jeju.title': '济州国际旅游马拉松 2026/06/07',
    'card.jeju.desc1': '★饭店位于商圈中心，周围有许多美食，让您心比赛之余，还享有便利的旅游体验',
    'card.jeju.desc2': '★韩国最南端的岛屿，气候宜人，四周环海的特性吸引不少人前往探访',
    'card.jeju.desc3': '★多元赛事距离，适合各类跑者参加',
    'card.jeju.type': '全马｜半马｜10K',
    'card.jeju.package': '参赛权＋精选住宿4晚',
    'card.jeju.price': '每人最低 NT$6,050 起',

    'card.niigata.location': '新潟',
    'card.niigata.title': '新潟马拉松 2026/10/11',
    'card.niigata.desc1': '★日本百选赛事',
    'card.niigata.desc2': '★赛道笔直且起伏较小，容易创造纪录的超高速赛道，与AsiaYo订购，全马完赛将提供特别完赛奖牌！',
    'card.niigata.desc3': '★沿途有当地居民很高热情为跑者加油，沿途品尝新潟特色美食与饮品',
    'card.niigata.type': '全马｜欢乐跑(10.6K)',
    'card.niigata.package': '参赛权＋精选住宿2晚',
    'card.niigata.price': '每人最低 NT$8,685 起',

    'card.kobe.location': '�的库县 神户市',
    'card.kobe.title': '神户马拉松 2026/11/15',
    'card.kobe.desc1': '★日本百选赛事，日本最早的马拉松赛事',
    'card.kobe.desc2': '★时间限制7小时且赛道设计大多平坦，适合各种程度的跑者。',
    'card.kobe.desc3': '★历史名城－神户，体验美妙城市的同时享受日本文化和风景。',
    'card.kobe.type': '全马',
    'card.kobe.package': '参赛权＋精选住宿2晚',
    'card.kobe.price': '每人最低 NT$10,290 起',

    'card.kanazawa.location': '金泽',
    'card.kanazawa.title': '金泽马拉松 2026/10/25',
    'card.kanazawa.desc1': '★日本百选赛事',
    'card.kanazawa.desc2': '★安排金泽站旁超值饭店，让您比赛观光最便利',
    'card.kanazawa.desc3': '★路线沿途大自然、历史景观丰富，还有金泽料理与文化，感受金泽魅力的补给站美食！',
    'card.kanazawa.type': '全马',
    'card.kanazawa.package': '参赛权＋精选住宿2晚',
    'card.kanazawa.price': '每人最低 NT$13,825 起',

    'card.yokohama.location': '神奈川县 横滨市',
    'card.yokohama.title': '横滨马拉松 2026/10/25',
    'card.yokohama.desc1': '★独特的横滨赛道，尽情奔跑在许多旅游名胜地。',
    'card.yokohama.desc2': '★穿越平时无法奔跑的湾岸高速公路，享受港口城市横滨的美景！',
    'card.yokohama.desc3': '★沿路设有补给站，不仅提供独特的表演及当地横滨和神奈川的食品作为"幸运伙食"。',
    'card.yokohama.type': '全马',
    'card.yokohama.package': '参赛权＋精选住宿2晚',
    'card.yokohama.price': '每人最低 NT$13,180 起',

    // Contact
    'contact.title': '联系客服',
    'contact.phone': '致电咨询：02-7755-0575 分机 7',
    'contact.line': '在线咨询',
    'contact.agent': '咨询专员',

    // Footer
    'footer.terms': '服务条款',
    'footer.privacy': '隐私声明',
    'footer.copyright': '© 2014-2026 AsiaYo Co., Ltd. All Rights Reserved.',

    // Language
    'lang.zh-TW': '繁体中文(台湾)',
    'lang.zh-CN': '简体中文',
  },
}
