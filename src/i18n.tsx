import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { im } from './lib/img';

export type Lang = 'en' | 'zh'

const en = {
  langName: 'EN',
  otherLang: '繁',
  nav: {
    company: 'Our Company',
    services: 'Services',
    projects: 'Projects',
    accreditation: 'Accreditation',
    contact: 'Contact',
    cta: 'Talk to Our Team',
  },
  hero: {
    badge: 'Est. 1976 · 50th Anniversary',
    line1: 'Engineering',
    line2: "Hong Kong's",
    line3: 'Foundation.',
    sub: 'For fifty years, GCE has investigated the ground, tested the materials and verified the structures Hong Kong stands on — from marine reclamation to hospital towers.',
    wantTo: 'I want to…',
    links: [
      { label: 'Explore our services', href: '#services' },
      { label: 'See featured projects', href: '#featured' },
      { label: 'View accreditations', href: '#accreditation' },
    ],
    meta: ['HOKLAS Accredited Laboratory — Reg. No. 024', 'Government Approved Specialist Contractor — Group II'],
    scroll: 'Scroll',
    imgCaption: 'Tung Chung New Town Extension — Site Investigation',
  },
  ticker: {
    label: 'Trusted by Hong Kong’s major institutions',
    clients: [
      'Airport Authority Hong Kong',
      'Architectural Services Department',
      'Civil Engineering & Development Dept.',
      'Hospital Authority',
      'Hong Kong Housing Authority',
      'Hong Kong Housing Society',
      'Lands Department',
      'MTR Corporation',
    ],
  },
  about: {
    kicker: '01 — Who We Are',
    heading: 'Half a century beneath Hong Kong’s skyline.',
    p1: 'Geotechnics and Concrete Engineering (H.K.) Ltd. (GCE) is a Hong Kong company founded in 1976 — one of the city’s leading specialists in civil, geotechnical and construction materials engineering, and in the physical and chemical testing of concrete, cement, steel, soil, rock and welds.',
    p2: 'From a small consultancy of eight engineers and technicians, GCE has grown into a practice of several hundred staff across four branch offices, delivering with state-of-the-art equipment on projects both locally and overseas.',
    p3: 'We advise on slope stability, site formation, shallow and deep foundations, drainage, seawalls, reclamation, rock mechanics and soil-and-rock anchors — and we stand behind every result with punctuality, reliability and professionalism.',
    points: [
      ['1976', 'Founded in Hong Kong'],
      ['4', 'Branch offices & laboratories'],
      ['300+', 'Engineers, technicians & specialists'],
      ['HK +', 'Local and overseas projects'],
    ],
    link: 'More about our company',
    img1Caption: 'Rock core photography & logging',
    img2Caption: 'Field logging, Tung Chung',
  },
  services: {
    kicker: '02 — Services',
    heading: 'From seabed to structure, one integrated practice.',
    sub: 'Field investigation, laboratory testing, inspection and calibration — accredited under one roof.',
    items: [
      {
        title: 'Land-based Ground Investigation',
        desc: 'Rotary drilling, trial pits, slope stripping, in-situ testing and geotechnical instrumentation.',
        tags: ['Rotary Drilling', 'Field Testing', 'Instrumentation'],
      },
      {
        title: 'Marine GI & CPPT',
        desc: 'Heave-compensated marine drilling from barges and jack-up platforms, with continuous piezocone penetration testing.',
        tags: ['Marine Drilling', 'Piezocone CPT'],
      },
      {
        title: 'Construction Materials Testing',
        desc: 'HOKLAS-accredited laboratory testing of concrete, steel, cement, aggregate, PFA, bricks, grout and bitumen.',
        tags: ['Concrete & Steel', 'Cement & Aggregate'],
      },
      {
        title: 'Soil & Rock Testing',
        desc: 'Physical and mechanical testing — triaxial, oedometer consolidation, point load and rock core logging.',
        tags: ['Triaxial', 'Oedometer', 'Point Load'],
      },
      {
        title: 'Piling & Welding Testing',
        desc: 'Koden ultrasonic echo sounding, non-destructive pile testing and certified welding inspection.',
        tags: ['Koden Test', 'NDT', 'Welding'],
      },
      {
        title: 'Building Diagnostics & Seepage',
        desc: 'Structural investigation, building diagnostic testing and water seepage investigation for existing buildings.',
        tags: ['Structural Investigation', 'Water Seepage'],
      },
      {
        title: 'Calibration Services',
        desc: 'HOKLAS-accredited calibration for temperature measurement, mechanical metrology and testing equipment.',
        tags: ['Temperature', 'Metrology', 'Equipment'],
      },
    ],
    more: 'Full service list',
  },
  featured: {
    kicker: '03 — Featured Projects',
    heading: 'Work that holds the city up.',
    viewMore: 'View more',
    allProjects: 'All projects',
    items: [
      {
        cat: 'Marine & Land GI',
        title: 'Tung Chung New Town Extension — Site Investigation Works',
        client: 'Civil Engineering & Development Department',
        meta: 'Contract NL/2016/01 · CPPT, marine & land drilling, field testing',
        img: im('/images/marine-drilling.jpg'),
        href: 'https://gce.com.hk/projects/gi',
      },
      {
        cat: 'Materials Testing',
        title: 'Public Works Laboratories — Steel & Concrete Term Contracts',
        client: 'Civil Engineering & Development Department',
        meta: 'Long-term term contracts for steel and concrete testing services',
        img: im('/images/lab-oedometer.jpg'),
        href: 'https://gce.com.hk/projects/lab_test',
      },
      {
        cat: 'Piling Testing',
        title: 'Redevelopment of Prince of Wales Hospital, Phase 1',
        client: 'Architectural Services Department',
        meta: 'Piling and foundation testing for a major hospital redevelopment',
        img: im('/images/koden-test.jpg'),
        href: 'https://gce.com.hk/projects/piling',
      },
      {
        cat: 'Welding Inspection',
        title: 'Hong Kong Science Park Phase 2 — Structural Steelworks',
        client: 'Structural steel & glass balustrade works',
        meta: 'Welding inspection for structural steel and balustrades',
        img: im('/images/welding-inspection.jpg'),
        href: 'https://gce.com.hk/projects/welding',
      },
    ],
  },
  why: {
    kicker: '04 — Why GCE',
    heading: 'Fifty years of proof, measured to the last decimal.',
    sub: 'Authenticity is earned. Ours comes from accredited laboratories, government approvals held for decades, and a team that has logged Hong Kong’s ground since 1976.',
    stats: [
      { value: 50, suffix: '', label: 'Years engineering Hong Kong', note: '1976 — 2026' },
      { value: 4, suffix: '', label: 'Branch offices & laboratories', note: 'Hung Hom · San Po Kong' },
      { value: 3, suffix: '', label: 'ISO management systems', note: 'ISO 9001 · 14001 · 45001' },
      { value: 24, prefix: 'No. ', suffix: '', label: 'HOKLAS registration', note: 'Among Hong Kong’s earliest' },
    ],
    diffs: [
      { title: 'Government-approved since 1989', desc: 'Approved Specialist Contractor for Ground Investigation Field Works (Group II) on public works.' },
      { title: 'Accredited in-house laboratories', desc: 'HOKLAS laboratory (Reg. 024) and HKIAS Type A inspection body (Reg. 031) — results you can build on.' },
      { title: 'Land and marine capability', desc: 'From hillside drill holes to heave-compensated marine drilling and piezocone testing at sea.' },
      { title: 'Field-to-lab integration', desc: 'Investigation, testing, inspection and calibration under one roof — one accountable team.' },
    ],
    timeline: [
      { year: '1976', title: 'Founded in Hong Kong', desc: 'A professional consultancy of eight engineers and technicians.' },
      { year: '1989', title: 'Government-approved specialist', desc: 'Approved Specialist Contractor — Ground Investigation Field Works (Group II).' },
      { year: '2003–08', title: 'Public works approvals deepen', desc: 'Soil & rock testing, highway structures operations, and HKHA-approved pile testing laboratory.' },
      { year: '2016', title: 'Out to sea', desc: 'Marine ground investigation and CPPT capability deployed for Tung Chung New Town Extension.' },
      { year: '2017', title: 'HKIAS Type A inspection body', desc: 'Accredited for construction products inspection — Reg. No. 031.' },
      { year: '2026', title: '50th anniversary', desc: 'Half a century engineering Hong Kong’s foundation — and counting.' },
    ],
  },
  latest: {
    kicker: '05 — Latest Projects',
    heading: 'From the field and the lab.',
    hint: 'Drag or scroll sideways',
    items: [
      { img: im('/images/gi-logging.jpg'), tag: 'Ground Investigation', title: 'GI Logging' },
      { img: im('/images/koden-test.jpg'), tag: 'Piling Testing', title: 'Koden Ultrasonic Echo Test' },
      { img: im('/images/lab-oedometer.jpg'), tag: 'Soil & Rock Laboratory', title: 'Oedometer Consolidation Test' },
      { img: im('/images/welding-inspection.jpg'), tag: 'Welding', title: 'Welding Inspection' },
      { img: im('/images/vane-shear.jpg'), tag: 'Field Testing', title: 'Vane Shear Test' },
      { img: im('/images/pressuremeter.jpg'), tag: 'Field Testing', title: 'Pressuremeter Test' },
      { img: im('/images/inclined-drilling.jpg'), tag: 'Ground Investigation', title: 'Inclined Drilling' },
      { img: im('/images/project-vessels.jpg'), tag: 'Marine GI', title: 'Marine Drilling Spread' },
    ],
  },
  accreditation: {
    kicker: '06 — Accreditation',
    heading: 'Certified. Accredited. Approved.',
    sub: 'Every result GCE issues is backed by Hong Kong’s accreditation framework and four decades of government approvals.',
    certs: [
      { img: im('/images/logos/hoklas.png'), title: 'HOKLAS Accredited Laboratory', meta: 'Construction materials testing · Reg. No. 024' },
      { img: im('/images/logos/hkias.png'), title: 'HKIAS Inspection Body (Type A)', meta: 'Construction products inspection · Reg. No. 031' },
      { img: null, title: 'ISO 9001 · 14001 · 45001', meta: 'Integrated quality, environmental & safety management' },
      { img: null, title: 'Government Approved Specialist Contractor', meta: 'GI Field Works Group II · Soil & Rock Testing · Highway Structures' },
    ],
    clientsLabel: 'Our clients include',
  },
  cta: {
    kicker: '07 — Contact',
    heading: 'Every landmark starts with the ground beneath it.',
    sub: 'Talk to our team about ground investigation, materials testing, inspection or calibration for your next project.',
    button: 'Talk to Our Team',
    call: 'Call us',
    email: 'Email',
    hours: 'Office hours',
    hoursValue: 'Mon–Fri 9:00–17:30 · Sat 9:00–13:00',
    office: 'Head Office & Concrete Laboratory',
    officeValue: 'G/F, 2–8 Ko Shan Road, Hung Hom, Kowloon',
  },
  footer: {
    tagline: 'Geotechnics and Concrete Engineering (H.K.) Ltd.',
    branches: [
      ['Head Office & Concrete Laboratory', 'G/F, 2–8 Ko Shan Road, Hung Hom, Kowloon'],
      ['Ground Investigation & Soil Laboratory', 'G/F–3/F, 18–20 Pak Kung Street, Hung Hom'],
      ['Building Component Laboratory', 'G/F, 21–23 San Wai Street, Hung Hom'],
      ['Steel Laboratory & Calibration', 'Flat C2, G/F, Chin Fat Industrial Building, 3 Tsat Po Street, San Po Kong'],
    ],
    since: 'Engineering Hong Kong’s foundation since 1976.',
    rights: '© 2026 GCE (H.K.) Ltd. All rights reserved.',
  },
}

export type Content = typeof en

const zh: Content = {
  langName: '繁',
  otherLang: 'EN',
  nav: {
    company: '關於我們',
    services: '服務範疇',
    projects: '工程項目',
    accreditation: '專業認證',
    contact: '聯絡我們',
    cta: '與我們的團隊洽談',
  },
  hero: {
    badge: '1976年創立 · 五十週年誌慶',
    line1: '奠定香港',
    line2: '工程基石',
    line3: '五十載。',
    sub: '半世紀以來，GCE 為香港勘探土地、測試建材、驗證結構——由填海造地到醫院大樓，默默承托這座城市的每一步發展。',
    wantTo: '我想了解',
    links: [
      { label: '瀏覽服務範疇', href: '#services' },
      { label: '精選工程項目', href: '#featured' },
      { label: '查閱專業認證', href: '#accreditation' },
    ],
    meta: ['香港認可處認可實驗所 — 註冊編號 024', '政府認可專門承建商 — 第 II 組'],
    scroll: '向下滾動',
    imgCaption: '東涌新市鎮擴展——工地勘探工程',
  },
  ticker: {
    label: '獲香港主要機構信賴',
    clients: [
      '香港機場管理局',
      '建築署',
      '土木工程拓展署',
      '醫院管理局',
      '香港房屋委員會',
      '香港房屋協會',
      '地政總署',
      '香港鐵路有限公司',
    ],
  },
  about: {
    kicker: '01 — 公司概覽',
    heading: '半世紀，默默支撐香港的天際線。',
    p1: '香港土力工程有限公司（Geotechnics and Concrete Engineering (H.K.) Ltd.，簡稱 GCE）於 1976 年在香港創立，是本港領先的土木、岩土及建築材料工程專門公司，提供混凝土、水泥、鋼材、土壤、岩石及燒焊的物理與化學測試服務。',
    p2: '公司由最初只有八名工程師及技術人員的小型顧問公司，發展至今擁有數百名員工及四間分公司，配備先進儀器設備，承接本地及海外工程項目。',
    p3: '我們就斜坡穩定、地盤平整、淺層及深層地基、排水、海堤、填海、岩石力學及土岩錨固等提供專業顧問服務，並以準時、可靠、專業的態度，恪守每項承諾。',
    points: [
      ['1976', '於香港創立'],
      ['4', '分公司及實驗室'],
      ['300+', '工程師、技術及專業人員'],
      ['HK+', '本地及海外工程經驗'],
    ],
    link: '了解更多關於我們',
    img1Caption: '岩芯拍攝及編錄',
    img2Caption: '東涌工地實地編錄',
  },
  services: {
    kicker: '02 — 服務範疇',
    heading: '由海床到結構，一站式專業服務。',
    sub: '實地勘探、實驗室測試、檢驗及校正——全部於認可體系下一體完成。',
    items: [
      {
        title: '陸上岩土勘探',
        desc: '旋轉鑽探、探井、斜坡剝土、原位測試及岩土監測儀器安裝。',
        tags: ['旋轉鑽探', '實地測試', '儀器監測'],
      },
      {
        title: '海上岩土勘探及靜力觸探',
        desc: '以躉船及自升式平台進行補償式海上鑽探，並提供連續式孔隙水壓靜力觸探測試（CPPT）。',
        tags: ['海上鑽探', 'CPPT 靜力觸探'],
      },
      {
        title: '建築材料測試',
        desc: '香港認可處（HOKLAS）認可實驗室，測試混凝土、鋼材、水泥、骨料、粉煤灰、磚、灌漿料及瀝青等。',
        tags: ['混凝土及鋼材', '水泥及骨料'],
      },
      {
        title: '土壤及岩石測試',
        desc: '物理及力學測試——三軸試驗、固結試驗、點荷載試驗及岩芯編錄。',
        tags: ['三軸試驗', '固結試驗', '點荷載'],
      },
      {
        title: '樁柱及燒焊測試',
        desc: 'Koden 超聲波回聲測試、非破壞性樁柱測試及專業燒焊檢驗。',
        tags: ['Koden 測試', '非破壞檢測', '燒焊檢驗'],
      },
      {
        title: '樓宇診斷及滲水測試',
        desc: '結構勘查、樓宇診斷測試及滲水調查，服務現有樓宇。',
        tags: ['結構勘查', '滲水測試'],
      },
      {
        title: '校正服務',
        desc: 'HOKLAS 認可校正服務：溫度量度、機械計量及測試設備校正。',
        tags: ['溫度', '計量', '測試設備'],
      },
    ],
    more: '完整服務列表',
  },
  featured: {
    kicker: '03 — 精選項目',
    heading: '承托城市的工程實績。',
    viewMore: '查看更多',
    allProjects: '所有項目',
    items: [
      {
        cat: '海上及陸上勘探',
        title: '東涌新市鎮擴展——工地勘探工程',
        client: '土木工程拓展署',
        meta: '合約編號 NL/2016/01 · CPPT、海上及陸上鑽探、實地測試',
        img: im('/images/marine-drilling.jpg'),
        href: 'https://gce.com.hk/projects/gi',
      },
      {
        cat: '材料測試',
        title: '公共工程試驗所——鋼材及混凝土測試定期合約',
        client: '土木工程拓展署',
        meta: '長期定期合約，提供鋼材及混凝土測試服務',
        img: im('/images/lab-oedometer.jpg'),
        href: 'https://gce.com.hk/projects/lab_test',
      },
      {
        cat: '樁柱測試',
        title: '威爾斯親王醫院重建計劃第一期',
        client: '建築署',
        meta: '大型醫院重建項目的樁柱及地基測試',
        img: im('/images/koden-test.jpg'),
        href: 'https://gce.com.hk/projects/piling',
      },
      {
        cat: '燒焊檢驗',
        title: '香港科學園第二期——結構鋼材工程',
        client: '結構鋼材及玻璃欄河工程',
        meta: '結構鋼材及欄河燒焊檢驗',
        img: im('/images/welding-inspection.jpg'),
        href: 'https://gce.com.hk/projects/welding',
      },
    ],
  },
  why: {
    kicker: '04 — 為何選擇 GCE',
    heading: '五十年的驗證，精確至最後小數位。',
    sub: '信任，是一點一滴累積而來。我們的底氣，來自認可實驗室、數十年的政府核准資格，以及自 1976 年起踏遍香港每一寸土地的團隊。',
    stats: [
      { value: 50, suffix: '', label: '服務香港的年載', note: '1976 — 2026' },
      { value: 4, suffix: '', label: '分公司及實驗室', note: '紅磡 · 新蒲崗' },
      { value: 3, suffix: '', label: 'ISO 管理體系認證', note: 'ISO 9001 · 14001 · 45001' },
      { value: 24, prefix: '編號 ', suffix: '', label: 'HOKLAS 註冊編號', note: '全港最早獲認可之一' },
    ],
    diffs: [
      { title: '自 1989 年獲政府認可', desc: '公共工程認可專門承建商——岩土勘探實地工程（第 II 組）。' },
      { title: '認可內部實驗室', desc: 'HOKLAS 認可實驗所（編號 024）及 HKIAS 甲類檢驗機構（編號 031），結果值得信賴。' },
      { title: '陸上及海上兼備', desc: '由山坡鑽孔到海上補償式鑽探及靜力觸探，全方位覆蓋。' },
      { title: '實地到實驗室一體化', desc: '勘探、測試、檢驗、校正集於一身——一個團隊，全程負責。' },
    ],
    timeline: [
      { year: '1976', title: '於香港創立', desc: '由八名工程師及技術人員組成的專業顧問公司。' },
      { year: '1989', title: '獲政府認可專門承建商資格', desc: '認可專門承建商——岩土勘探實地工程（第 II 組）。' },
      { year: '2003–08', title: '公共工程認可持續深化', desc: '土壤岩石測試、道路構築物專門工序，以及房委會認可樁柱測試實驗室。' },
      { year: '2016', title: '邁向海上', desc: '為東涌新市鎮擴展提供海上岩土勘探及 CPPT 靜力觸探。' },
      { year: '2017', title: 'HKIAS 甲類檢驗機構', desc: '獲認可進行建築產品檢驗——註冊編號 031。' },
      { year: '2026', title: '五十週年', desc: '半世紀奠定香港工程基石——步履不停。' },
    ],
  },
  latest: {
    kicker: '05 — 最新工程',
    heading: '來自工地與實驗室。',
    hint: '左右拖曳或滾動瀏覽',
    items: [
      { img: im('/images/gi-logging.jpg'), tag: '岩土勘探', title: '岩土編錄' },
      { img: im('/images/koden-test.jpg'), tag: '樁柱測試', title: 'Koden 超聲波回聲測試' },
      { img: im('/images/lab-oedometer.jpg'), tag: '土壤岩石實驗室', title: '固結試驗' },
      { img: im('/images/welding-inspection.jpg'), tag: '燒焊', title: '燒焊檢驗' },
      { img: im('/images/vane-shear.jpg'), tag: '實地測試', title: '十字板剪切試驗' },
      { img: im('/images/pressuremeter.jpg'), tag: '實地測試', title: '旁壓儀試驗' },
      { img: im('/images/inclined-drilling.jpg'), tag: '岩土勘探', title: '斜孔鑽探' },
      { img: im('/images/project-vessels.jpg'), tag: '海上勘探', title: '海上鑽探船隊' },
    ],
  },
  accreditation: {
    kicker: '06 — 專業認證',
    heading: '認證齊備，值得信賴。',
    sub: 'GCE 發出的每項結果，均由香港認可體系及逾四十年的政府核准資格作後盾。',
    certs: [
      { img: im('/images/logos/hoklas.png'), title: 'HOKLAS 認可實驗所', meta: '建築材料測試 · 註冊編號 024' },
      { img: im('/images/logos/hkias.png'), title: 'HKIAS 甲類檢驗機構', meta: '建築產品檢驗 · 註冊編號 031' },
      { img: null, title: 'ISO 9001 · 14001 · 45001', meta: '質量、環境及職安健綜合管理體系' },
      { img: null, title: '政府認可專門承建商', meta: '岩土勘探實地工程第 II 組 · 土壤岩石測試 · 道路構築物' },
    ],
    clientsLabel: '我們的客戶包括',
  },
  cta: {
    kicker: '07 — 聯絡我們',
    heading: '每項地標工程，皆始於腳下的土地。',
    sub: '歡迎與我們的團隊洽談岩土勘探、材料測試、檢驗或校正服務，為下一個項目打好基礎。',
    button: '與我們的團隊洽談',
    call: '致電我們',
    email: '電郵',
    hours: '辦公時間',
    hoursValue: '星期一至五 9:00–17:30 · 星期六 9:00–13:00',
    office: '總辦事處及混凝土實驗室',
    officeValue: '九龍紅磡高山道 2–8 號地下',
  },
  footer: {
    tagline: '香港土力工程有限公司',
    branches: [
      ['總辦事處及混凝土實驗室', '九龍紅磡高山道 2–8 號地下'],
      ['岩土勘探部及土壤實驗室', '紅磡北拱街 18–20 號地下至三樓'],
      ['樓宇構件實驗室', '紅磡新圍街 21–23 號地下'],
      ['鋼材實驗室及校正服務', '新蒲崗七寶街 3 號振發工廠大廈地下 C2 室'],
    ],
    since: '自 1976 年起，奠定香港工程基石。',
    rights: '© 2026 香港土力工程有限公司 版權所有',
  },
}

export const content: Record<Lang, Content> = { en, zh }

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
  t: Content
}

const Ctx = createContext<LangCtx>({ lang: 'en', setLang: () => {}, t: en })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-HK' : 'en'
  }, [lang])
  return <Ctx.Provider value={{ lang, setLang, t: content[lang] }}>{children}</Ctx.Provider>
}

export function useLang() {
  return useContext(Ctx)
}
