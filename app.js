const STORAGE_KEY = "yiluzhifu-demo-v1";

const navItems = [
  { id: "workbench", label: "问诊工作台", icon: "●", group: "当前问诊" },
  { id: "basic", label: "基础问诊记录", icon: "≡", group: "当前问诊" },
  { id: "diagnosis", label: "疑似诊断", icon: "◇", group: "当前问诊" },
  { id: "generation", label: "病历生成", icon: "▣", group: "病历管理" },
  { id: "overview", label: "问诊病历总览", icon: "▤", group: "病历管理" },
  { id: "archive", label: "报告与归档", icon: "□", group: "系统" },
  { id: "settings", label: "设置与能力", icon: "⚙", group: "系统" },
];

const conversation = [
  ["doctor", "您好，今天主要是什么地方不舒服？"],
  ["patient", "这两个星期总觉得心跳得快，人也没力气，上楼的时候特别明显。"],
  ["doctor", "心跳快是一阵一阵的，还是持续存在？每次大概多久？"],
  ["patient", "大多是一阵一阵的，十来分钟能缓下来，有时坐着也会觉得心慌。"],
  ["doctor", "发作时有没有胸痛、憋气、眼前发黑或者晕倒？"],
  ["patient", "没有晕倒，也没有明显胸痛，就是偶尔头晕，走快了会喘。"],
  ["doctor", "最近睡眠、食欲和体重有什么变化？有没有发热？"],
  ["patient", "睡得还可以，食欲一般，体重没怎么变，也没有发热。"],
  ["doctor", "最近月经情况怎么样？经量有没有变化？"],
  ["patient", "这三个月量比以前多，前两天要频繁更换卫生用品，一次会持续七八天。"],
  ["doctor", "以前有没有贫血、甲状腺疾病或心脏方面的问题？"],
  ["patient", "大学体检时说过有点贫血，后来没再检查，其他疾病没有。"],
  ["doctor", "最近在服用什么药物或保健品吗？有没有药物过敏？"],
  ["patient", "没有长期吃药，也没有发现药物过敏。"],
  ["doctor", "您昨天带来的血常规显示血红蛋白偏低，红细胞体积也偏小。今天查体心率稍快，眼睑结膜颜色偏淡。"],
  ["patient", "这个情况严重吗？需要住院吗？"],
  ["doctor", "目前生命体征稳定，但需要尽快明确是不是缺铁以及失血原因。我建议完善铁蛋白等检查，并由妇科评估月经过多。"],
  ["patient", "好的，那我先把检查做了。"],
];

const baseRecord = `医生：您好，今天主要是什么地方不舒服？
患者：近两周反复心悸、乏力，上楼时明显。
医生：心悸是一阵一阵的还是持续存在？每次多久？
患者：多为阵发性，每次约十分钟，有时静坐时也会出现。
医生：发作时是否伴有胸痛、憋气、黑矇或晕厥？
患者：否认晕厥及明显胸痛，偶有头晕，快走时气短。
医生：近期睡眠、食欲、体重及体温情况如何？
患者：睡眠尚可，食欲一般，体重无明显变化，无发热。
医生：近三个月月经量是否发生变化？
患者：近三个月经量较前增多，前两日需频繁更换卫生用品，每次持续七至八天。
医生：既往是否有贫血、甲状腺疾病或心脏病史？
患者：大学体检曾提示轻度贫血，未复查；否认甲状腺疾病及心脏病史。
医生：目前是否长期用药？有无药物过敏？
患者：否认长期用药，未发现药物过敏。
医生：外院血常规提示血红蛋白降低、平均红细胞体积减小。查体心率稍快，睑结膜偏淡。建议完善铁代谢相关检查，并评估月经过多原因。`;

const sections = [
  ["症状与病程", "近两周反复心悸、乏力，阵发性发作，每次约十分钟，上楼及快走时明显，静坐时偶有发作。伴偶发头晕及活动后气短；否认晕厥、明显胸痛及发热。睡眠尚可，食欲一般，体重无明显变化。"],
  ["用药", "目前无长期用药，未自行服用补铁药物。"],
  ["既往史", "大学体检曾提示轻度贫血，之后未复查；否认甲状腺疾病及明确心脏病史。"],
  ["过敏史", "未发现药物及食物过敏。"],
  ["检查结果", "外院血常规：血红蛋白86 g/L，平均红细胞体积72 fL；本次查体心率102次/分，睑结膜偏淡，血压108/68 mmHg。演示补充检查：铁蛋白8 μg/L，TSH在参考范围。"],
  ["个人及家族史", "办公室工作，近期工作节奏较快；不吸烟，偶尔饮酒。近三个月月经量较前增多，每次持续七至八天。否认明确家族遗传病史。"],
];

const recordSections = {
  chief: "反复心悸、乏力两周。",
  current: "患者近两周反复出现心悸、乏力，多为阵发性，每次约十分钟，上楼及快走时明显，静坐时偶有发作。伴偶发头晕及活动后气短，否认晕厥、明显胸痛及发热。睡眠尚可，食欲一般，体重无明显变化。近三个月月经量较前增多，前两日需频繁更换卫生用品，每次持续七至八天。",
  history: "大学体检曾提示轻度贫血，之后未复查；否认甲状腺疾病及明确心脏病史。",
  allergy: "未发现药物及食物过敏。",
  personal: "办公室工作，不吸烟，偶尔饮酒。否认明确家族遗传病史。",
  exam: "体温36.6℃，脉搏102次/分，呼吸18次/分，血压108/68 mmHg。神志清楚，睑结膜偏淡；双肺呼吸音清，未闻及干湿性啰音；心率稍快，律齐，未闻及明显杂音；双下肢无水肿。",
  tests: "外院血常规：血红蛋白86 g/L，平均红细胞体积72 fL。演示补充检查：铁蛋白8 μg/L，TSH在参考范围。",
  plan: "建议完善网织红细胞计数、转铁蛋白饱和度等检查；结合检查结果评估补铁治疗。建议妇科就诊评估月经过多原因。若出现持续胸痛、晕厥、明显呼吸困难或症状迅速加重，应及时就医。",
};

function initialState() {
  return {
    loggedIn: false,
    page: "workbench",
    selectedPatient: "demo-main",
    consultationStatus: "ready",
    conversationIndex: 0,
    speed: 1,
    elapsed: 0,
    baseRecord,
    reviewIssues: [
      { level: "required", text: "血红蛋白86 g/L", suggestion: "保留原文，并在病历中明确检查来源", done: false },
      { level: "suggest", text: "频繁更换卫生用品", suggestion: "可进一步量化经量变化", done: false },
      { level: "suggest", text: "活动后气短", suggestion: "建议保留症状及阴性伴随症状", done: false },
    ],
    extractionConfirmed: false,
    sections: Object.fromEntries(sections),
    candidates: ["缺铁性贫血（待病因评估）", "月经过多（待妇科评估）", "心悸待查"],
    selectedDiagnoses: ["缺铁性贫血（待病因评估）"],
    primaryDiagnosis: "缺铁性贫血（待病因评估）",
    generated: false,
    recordSections: { ...recordSections },
    recordVersion: 1,
    recordStatus: "待审核",
    guideOpen: true,
    filter: "全部",
    records: [
      { id:"demo-main", patient:"林晓雨", sex:"女", age:36, visit:"普通内科初诊", diagnosis:"缺铁性贫血（待病因评估）", status:"进行中", doctor:"李医生", updated:"演示中" },
      { id:"demo-2", patient:"周建国", sex:"男", age:58, visit:"普通内科复诊", diagnosis:"高血压病", status:"待审核", doctor:"李医生", updated:"今天 10:18" },
      { id:"demo-3", patient:"陈婉宁", sex:"女", age:46, visit:"普通内科初诊", diagnosis:"甲状腺功能异常待查", status:"已确认", doctor:"李医生", updated:"今天 09:42" },
      { id:"demo-4", patient:"孙志远", sex:"男", age:67, visit:"普通内科复诊", diagnosis:"2型糖尿病", status:"待归档", doctor:"李医生", updated:"昨天 16:25" },
      { id:"demo-5", patient:"唐若兰", sex:"女", age:51, visit:"普通内科初诊", diagnosis:"血脂异常", status:"已归档", doctor:"李医生", updated:"昨天 14:03" },
    ],
  };
}

let state = loadState();
let conversationTimer = null;
let clockTimer = null;

function loadState() {
  try {
    return { ...initialState(), ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "null") };
  } catch (_) { return initialState(); }
}
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function setState(patch, rerender = true) { Object.assign(state, patch); saveState(); if (rerender) render(); }
function escapeHtml(text = "") { return String(text).replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[c]); }
function toast(message) { const node = document.querySelector("#toast"); node.textContent = message; node.classList.add("show"); clearTimeout(node._timer); node._timer = setTimeout(() => node.classList.remove("show"), 2200); }
function statusClass(status) { return ({"待审核":"review","已确认":"confirmed","待归档":"archive","已归档":"archived","进行中":"consulting"})[status] || "review"; }
function statusTag(status) { return `<span class="status ${statusClass(status)}">${escapeHtml(status)}</span>`; }
function formatTime(seconds) { const m = Math.floor(seconds / 60).toString().padStart(2,"0"); const s = (seconds % 60).toString().padStart(2,"0"); return `${m}:${s}`; }

function render() {
  const app = document.querySelector("#app");
  if (!state.loggedIn) { app.innerHTML = loginView(); bindLogin(); return; }
  app.innerHTML = shellView();
  bindShell();
  bindPage();
}

function loginView() {
  return `<main class="login-page">
    <section class="login-panel"><div class="login-card">
      <div class="brand-lockup"><div class="brand-mark">医</div><div><div class="brand-name">医录智辅</div><div class="brand-sub">医生病历工作台 · 演示环境</div></div></div>
      <h1>进入全流程演示</h1>
      <p>无需账号、麦克风或模型服务。系统将使用虚构患者数据演示从问诊到归档的完整过程。</p>
      <div class="demo-doctor"><div class="avatar">李</div><div><strong>李医生</strong><span>普通内科 · 演示医生账号</span></div></div>
      <button id="quickLogin" class="primary wide">李医生一键进入</button>
    </div></section>
    <aside class="login-aside"><span class="eyebrow">Interactive clinical workflow demo</span><h2>让一次问诊，自然形成一份可审核的病历</h2><p>从交流记录、文本整理和医学信息提取，到医生诊断、病历生成、审核修订与报告归档，每一步均可操作、可追溯。</p>
      <div class="capability-strip"><div><strong>完整流程</strong><span>沿医生真实工作顺序展示，不以统计看板替代核心任务。</span></div><div><strong>稳定演示</strong><span>预置问诊内容和处理结果，不受网络、设备和模型等待影响。</span></div><div><strong>多端适配</strong><span>电脑与手机均可浏览和操作演示流程。</span></div></div>
    </aside>
  </main>`;
}

function shellView() {
  const patient = state.records.find(r => r.id === state.selectedPatient) || state.records[0];
  const groups = [...new Set(navItems.map(n => n.group))];
  const sidebarNav = groups.map(group => `<div class="nav-group"><div class="nav-label">${group}</div>${navItems.filter(n => n.group === group).map(navButton).join("")}</div>`).join("");
  return `<div class="shell">
    <aside class="sidebar"><div class="brand-lockup"><div class="brand-mark">医</div><div><div class="brand-name">医录智辅</div><div class="brand-sub">医生病历工作台</div></div></div>${sidebarNav}<div class="sidebar-foot"><span class="demo-chip">● 公开演示环境</span><div class="network-state">本地演示数据已就绪</div></div></aside>
    <main class="main"><header class="topbar"><div class="patient-context"><strong>当前患者：${patient.patient} · ${patient.sex} · ${patient.age}岁</strong><span>普通内科 · 演示就诊 DEMO-20261103-001 · 接诊医生 李医生</span></div><div class="top-actions"><button id="resetDemo" class="secondary">重置演示</button><div class="doctor-mini"><div class="avatar">李</div><div><strong>李医生</strong><span>普通内科</span></div></div></div></header><div class="content">${state.guideOpen ? tourView() : ""}${pageView()}</div></main>
    <nav class="mobile-nav">${["workbench","basic","diagnosis","overview","archive"].map(id => { const n=navItems.find(x=>x.id===id); return `<button data-nav="${id}" class="${state.page===id?'active':''}"><i>${n.icon}</i>${id==='overview'?'病历总览':n.label.replace('问诊','')}</button>`}).join("")}</nav>
  </div>`;
}
function navButton(n) { return `<button data-nav="${n.id}" class="nav-button ${state.page === n.id ? "active" : ""}"><span class="nav-icon">${n.icon}</span>${n.label}</button>`; }

function pageView() {
  return ({ workbench: workbenchView, consultation: consultationView, basic: basicView, diagnosis: diagnosisView, generation: generationView, overview: overviewView, archive: archiveView, settings: settingsView })[state.page]?.() || workbenchView();
}

function pageHead(title, subtitle, actions="") { return `<div class="page-head"><div><h1>${title}</h1><p>${subtitle}</p></div>${actions ? `<div class="head-actions">${actions}</div>` : ""}</div>`; }

function workbenchView() {
  const selected = state.records.find(r => r.id === state.selectedPatient);
  return `${pageHead("问诊工作台", "选择患者后直接开始问诊；工作台只呈现当前工作，不承担经营统计。")}
    <div class="stat-grid"><div class="stat"><span>今日问诊</span><strong>5</strong><em>全部为演示记录</em></div><div class="stat"><span>待审核病历</span><strong>1</strong><em>需要医生确认</em></div><div class="stat"><span>待归档报告</span><strong>1</strong><em>已完成审核</em></div><div class="stat"><span>录音设备</span><strong>就绪</strong><em>单麦克风模式</em></div></div>
    <div class="grid two"><section class="card"><div class="card-head"><div><h2>患者与就诊</h2><div class="card-sub">演示数据相互独立，可随时重置。</div></div><span class="tag">5位患者</span></div><div class="patient-list">${state.records.map(r => `<button class="patient-row ${r.id===state.selectedPatient?'selected':''}" data-patient="${r.id}"><span class="avatar">${r.patient[0]}</span><span><strong>${r.patient}</strong><small>${r.sex} · ${r.age}岁 · ${r.visit}</small></span>${statusTag(r.status)}</button>`).join("")}</div></section>
      <div class="grid"><section class="card"><div class="card-head"><div><h2>患者基本信息</h2><div class="card-sub">主流程患者使用完整虚构档案。</div></div></div><div class="info-list"><div class="info-item"><label>患者编号</label><strong>DEMO-P-001</strong></div><div class="info-item"><label>联系电话</label><strong>138****2608</strong></div><div class="info-item"><label>就诊类型</label><strong>${selected.visit}</strong></div><div class="info-item"><label>医保类型</label><strong>城镇职工医保</strong></div><div class="info-item"><label>既往提示</label><strong>曾提示轻度贫血</strong></div><div class="info-item"><label>过敏史</label><strong>未发现</strong></div></div></section>
      <section class="card"><div class="card-head"><div><h2>录音设备</h2><div class="card-sub">正式项目支持单麦主模式并预留双麦能力。</div></div></div><div class="device-row"><span class="device-dot"></span><div><strong>默认麦克风 · 演示模拟</strong><span>单通道 · 16 bit · 16000 Hz · 设备状态正常</span></div></div></section>
      <section class="card primary-action-card"><div class="card-head"><div><h2>开始本次问诊</h2><div class="card-sub">将使用预置对话模拟实时录音与转写，后续流程均可操作。</div></div></div><button id="startConsultation" class="primary wide">开始演示问诊</button></section></div>
    </div>`;
}

function consultationView() {
  const running = state.consultationStatus === "running";
  const finished = state.consultationStatus === "finished";
  const bubbles = conversation.slice(0, state.conversationIndex).map((item,i) => `<div class="bubble ${item[0]}"><div class="bubble-head"><strong>${item[0]==='doctor'?'李医生':'患者侧'}</strong><span>${formatTime(i*4+2)}</span></div>${item[1]}</div>`).join("");
  return `${pageHead("问诊工作台", "同步记录医患交流；演示模式可暂停、加速或直接完成。", finished ? `<button id="toBasic" class="primary">生成基础问诊记录</button>` : "")}
    <div class="consultation-layout"><div class="consultation-side"><section class="card"><div class="card-head"><div><h2>患者基本信息</h2><div class="card-sub">林晓雨 · 女 · 36岁</div></div>${statusTag(finished?'已确认':'进行中')}</div><div class="info-list"><div class="info-item"><label>本次就诊</label><strong>普通内科初诊</strong></div><div class="info-item"><label>患者编号</label><strong>DEMO-P-001</strong></div><div class="info-item"><label>既往提示</label><strong>轻度贫血</strong></div><div class="info-item"><label>药物过敏</label><strong>未发现</strong></div></div></section>
      <section class="recorder ${running?'recording':''}"><div class="card-head"><div><h2>单麦克风录音</h2><div class="card-sub">演示音频流 · 医生声纹已匹配</div></div><span class="demo-chip">${running?'录制中':finished?'已完成':'已暂停'}</span></div><div class="timer">${formatTime(state.elapsed)}</div><div class="wave">${Array.from({length:34},(_,i)=>`<i style="animation-duration:${.65+(i%7)*.09}s"></i>`).join("")}</div><div class="record-controls"><button id="toggleConversation" class="primary">${running?'暂停':'继续'}</button><button id="speedConversation" class="ghost">${state.speed}×速度</button><button id="finishConversation" class="ghost">直接完成</button></div></section></div>
      <section class="card transcript-card"><div class="card-head"><div><h2>实时医患对话</h2><div class="card-sub">固定医生声纹优先识别；其他声音统一归为患者侧。</div></div><span class="tag">${state.conversationIndex}/${conversation.length}轮</span></div><div id="conversation" class="conversation">${bubbles || `<div class="empty"><strong>等待对话开始</strong>点击继续后将自动播放演示对话。</div>`}</div></section></div>`;
}

function basicView() {
  const remaining = state.reviewIssues.filter(i => !i.done);
  const required = remaining.filter(i => i.level === "required").length;
  const suggest = remaining.filter(i => i.level === "suggest").length;
  const current = remaining[0];
  return `${pageHead("基础问诊记录", "保留完整医患对话，医生可修正文字并处理必要核对项。", `<button id="backConsultation" class="secondary">返回问诊</button><button id="saveBasic" class="secondary">暂存记录</button><button id="toDiagnosis" class="primary">进入疑似诊断</button>`)}
    <div class="banner ${required?'warning':'success'}"><div><strong>${required?'仍有必须确认内容':'基础记录已可进入下一步'}</strong><p>自动整理 ${state.reviewIssues.length} 处 · 建议浏览 ${suggest} 处 · 必须确认 ${required} 处。红色仅用于可能改变医学含义或医疗安全的内容。</p></div></div>
    <div class="grid two"><section class="card"><div class="review-toolbar"><div class="review-copy"><strong>${current ? (current.level==='required'?'必须确认':'建议浏览') : '全部项目已处理'}</strong><span>${current ? `${current.text} · ${current.suggestion}` : '已处理内容保留绿色状态记录。'}</span></div>${current?`<div class="issue-actions"><button data-review="accept" class="primary">采用建议</button><button data-review="keep" class="secondary">保留原文</button><button data-review="edit" class="secondary">手动修改</button><button data-review="audio" class="ghost">回听原音</button></div>`:''}</div><textarea id="baseRecordEditor" class="record-editor">${escapeHtml(state.baseRecord)}</textarea></section>
      <aside class="card"><div class="card-head"><div><h2>核对清单</h2><div class="card-sub">点击操作后自动进入下一项。</div></div></div><div class="issue-list">${state.reviewIssues.map((i,idx)=>`<div class="issue ${i.done?'done':i.level}"><strong>${i.done?'已处理':i.level==='required'?'必须确认':'建议浏览'} · ${idx+1}</strong><span>${i.text}<br>${i.done?'医生已明确处理':i.suggestion}</span></div>`).join("")}</div></aside></div>`;
}

function diagnosisView() {
  return `${pageHead("疑似诊断与医学信息提取", "已确认的问诊内容与患者档案合并展示；候选仅供医生辅助判断。", `<button id="backBasic" class="secondary">返回基础记录</button><button id="saveExtraction" class="secondary">暂存本页</button><button id="toGeneration" class="primary">确认并进入病历生成</button>`)}
    <div class="banner"><div><strong>医学信息已整理</strong><p>事实来自已确认基础记录及患者既有档案，不要求重复逐条确认；医生只需修正提取错误并确定疑似诊断。</p></div></div>
    <div class="grid two"><section class="article"><div class="card-head"><div><h2>本次医学信息</h2><div class="card-sub">固定标题由系统维护，正文可以直接修改。</div></div><span class="tag">6个段落</span></div>${Object.entries(state.sections).map(([title,text])=>`<div class="article-section"><label>${title}</label><textarea data-section="${title}">${escapeHtml(text)}</textarea></div>`).join("")}</section>
      <aside class="grid"><section class="card"><div class="card-head"><div><h2>疑似诊断</h2><div class="card-sub">选择候选或直接填写，必须指定主要诊断。</div></div></div><div class="candidate-list">${state.candidates.map((name,idx)=>`<label class="candidate"><input type="checkbox" data-candidate="${escapeHtml(name)}" ${state.selectedDiagnoses.includes(name)?'checked':''}><span><strong>${name}</strong><p>${idx===0?'血红蛋白、MCV和铁蛋白降低；仍需评估失血原因。':idx===1?'经量较前增多，需进一步妇科评估。':'症状可能与贫血相关，仍需排除其他诱因。'}</p></span></label>`).join("")}</div><div class="field"><label>医生自行填写</label><div style="display:flex;gap:8px"><input id="manualDiagnosis" placeholder="例如：其他情况待查"><button id="addDiagnosis" class="secondary">添加</button></div></div><div class="field"><label>主要疑似诊断</label><select id="primaryDiagnosis">${state.selectedDiagnoses.map(x=>`<option ${x===state.primaryDiagnosis?'selected':''}>${x}</option>`).join("")}</select></div></section>
      <section class="card"><div class="card-head"><div><h2>信息缺口与建议补问</h2><div class="card-sub">仅供医生参考，不构成事实或医嘱。</div></div></div><div class="issue-list"><div class="issue suggest"><strong>失血原因</strong><span>建议进一步了解月经过多的起始时间、周期变化及妇科检查情况。</span></div><div class="issue suggest"><strong>治疗前评估</strong><span>建议结合铁代谢相关检查及医生判断确定后续方案。</span></div></div></section></aside></div>`;
}

function generationView() {
  if (!state.generated) return `${pageHead("病历生成", "依据已确认医学信息和医生诊断，按固定模板组装病历；本步骤不再次调用大模型。", `<button id="backDiagnosis" class="secondary">返回疑似诊断</button>`)}<div class="banner success"><div><strong>医学信息和医生诊断已准备完成</strong><p>生成仅进行结构化模板填充，不补造缺失内容。</p></div></div><section class="card primary-action-card" style="max-width:760px;margin:40px auto"><div class="card-head"><div><h2>成人普通内科门诊初诊病历</h2><div class="card-sub">主要诊断：${escapeHtml(state.primaryDiagnosis)}</div></div></div><button id="generateRecord" class="primary wide">按模板生成病历</button></section>`;
  const status = state.recordStatus;
  const readonly = status === "已归档" ? "readonly" : "";
  return `${pageHead("病历审核与修订", "医生可直接修改病历正文和诊断；保存形成新版本，旧版本保持只读。", `<button id="saveRecord" class="secondary">保存修改</button><button id="confirmRecord" class="primary">${status==='待审核'?'保存并确认病历':'再次确认当前版本'}</button><button id="toOverview" class="secondary">返回病历总览</button>`)}
    <div class="banner ${status==='待审核'?'warning':'success'}"><div><strong>第 ${state.recordVersion} 版 · ${status}</strong><p>${status==='待审核'?'请核对正文和医生诊断，确认后进入报告与归档。':'已确认版本仍可继续修订，修订将形成新版本且不回退上游流程。'}</p></div></div>${recordPaper(readonly)}`;
}

function recordPaper(readonly="") {
  const s=state.recordSections;
  const fields = [["主诉","chief",2],["现病史","current",5],["既往史","history",3],["过敏史","allergy",2],["个人及家族史","personal",3],["体格检查","exam",4],["辅助检查","tests",3],["处理意见","plan",4]];
  return `<section class="record-paper"><div class="paper-title"><h2>普通内科门诊初诊病历</h2><span>演示病历 · 不用于诊疗</span></div><div class="record-meta"><span>姓名：林晓雨</span><span>性别：女</span><span>年龄：36岁</span><span>患者编号：DEMO-P-001</span><span>就诊科室：普通内科</span><span>接诊医生：李医生</span><span>就诊日期：2026-11-03</span><span>病历版本：v${state.recordVersion}</span></div>${fields.map(([title,key,rows])=>`<div class="paper-section"><h3>${title}</h3><textarea data-record="${key}" rows="${rows}" ${readonly}>${escapeHtml(s[key])}</textarea></div>`).join("")}<div class="paper-section"><h3>医生诊断</h3><input id="recordPrimary" value="${escapeHtml(state.primaryDiagnosis)}" ${readonly}><textarea id="recordOthers" rows="2" placeholder="其他诊断，每行一项" ${readonly}>${escapeHtml(state.selectedDiagnoses.filter(x=>x!==state.primaryDiagnosis).join('\n'))}</textarea></div><div class="paper-sign">医师签名：李医生　　日期：2026-11-03</div></section>`;
}

function overviewView() {
  const filters=["全部","待审核","已确认","待归档","已归档"];
  const records=state.filter==="全部"?state.records:state.records.filter(r=>r.status===state.filter);
  const selected=state.records.find(r=>r.id===state.selectedPatient) || records[0];
  return `${pageHead("问诊病历总览", "统一管理当前医生已经完成问诊的病历；在此选择需要审核或继续处理的记录。")}
    <div class="filter-row">${filters.map(f=>`<button data-filter="${f}" class="${state.filter===f?'active':''}">${f}</button>`).join("")}</div><section class="card"><div class="table-wrap"><table><thead><tr><th>患者</th><th>本次问诊</th><th>医生诊断</th><th>病历类型</th><th>当前状态</th><th>接诊医生</th><th>更新时间</th></tr></thead><tbody>${records.map(r=>`<tr data-record-id="${r.id}" class="${selected?.id===r.id?'selected':''}"><td><strong>${r.patient}</strong><br><small>${r.sex} · ${r.age}岁</small></td><td>${r.visit}</td><td>${r.diagnosis}</td><td>门诊初诊病历</td><td>${statusTag(r.status)}</td><td>${r.doctor}</td><td>${r.updated}</td></tr>`).join("")}</tbody></table></div><div class="mobile-records">${records.map(r=>`<article class="mobile-record" data-record-id="${r.id}"><header><strong>${r.patient} · ${r.sex} · ${r.age}岁</strong>${statusTag(r.status)}</header><p>${r.visit}</p><p>医生诊断：${r.diagnosis}</p><p>更新时间：${r.updated}</p></article>`).join("")}</div>${selected?`<div class="record-detail"><div class="card-head"><div><h2>${selected.patient}的病历</h2><div class="card-sub">${selected.visit} · ${selected.doctor} · ${selected.updated}</div></div><div class="head-actions">${selected.id==='demo-main'?`<button id="openSelectedRecord" class="primary">打开病历</button>`:`<button class="secondary" data-preview="${selected.id}">只读预览</button>`}</div></div><p><strong>当前医生诊断：</strong>${selected.diagnosis}</p><p><strong>流程说明：</strong>${selected.status==='已归档'?'该记录已完成最终归档，只读保留。':'可在当前阶段继续审核、修订或进入下一步。'}</p></div>`:''}</section>`;
}

function archiveView() {
  const mainReady=["已确认","待归档","已归档"].includes(state.recordStatus);
  return `${pageHead("报告与归档", "集中管理已确认病历；可预览、导出报告并完成最终归档。")}
    <div class="grid two"><section class="card"><div class="card-head"><div><h2>待处理报告</h2><div class="card-sub">已确认病历留存在此，最终归档前仍可返回修订。</div></div></div><div class="patient-list">${[...(mainReady?[{id:'demo-main',patient:'林晓雨',sex:'女',age:36,visit:'普通内科初诊',status:state.recordStatus==='已归档'?'已归档':'待归档'}]:[]),...state.records.filter(r=>['待归档','已归档'].includes(r.status) && r.id!=='demo-main')].map(r=>`<button class="patient-row selected"><span class="avatar">${r.patient[0]}</span><span><strong>${r.patient}</strong><small>${r.visit} · 已确认版本</small></span>${statusTag(r.status)}</button>`).join("")}</div></section>
      <section class="card"><div class="card-head"><div><h2>${mainReady?'林晓雨 · 报告预览':'选择一份已确认病历'}</h2><div class="card-sub">报告只引用医生明确确认的版本。</div></div></div>${mainReady?`<div class="info-list"><div class="info-item"><label>主要诊断</label><strong>${state.primaryDiagnosis}</strong></div><div class="info-item"><label>确认版本</label><strong>第${state.recordVersion}版</strong></div><div class="info-item"><label>报告状态</label><strong>${state.recordStatus==='已归档'?'已归档':'已生成'}</strong></div><div class="info-item"><label>接诊医生</label><strong>李医生</strong></div></div><div class="download-row" style="margin-top:18px"><a class="primary" href="assets/yiluzhifu-demo-record.docx" download>下载 Word</a><a class="secondary" href="assets/yiluzhifu-demo-record.pdf" download>下载 PDF</a><button id="reviseFromArchive" class="secondary">返回修改</button><button id="archiveRecord" class="primary" ${state.recordStatus==='已归档'?'disabled':''}>${state.recordStatus==='已归档'?'已完成归档':'最终归档'}</button></div>`:`<div class="empty"><strong>主流程病历尚未确认</strong>请先完成病历生成与审核。</div>`}</section></div>`;
}

function settingsView() {
  return `${pageHead("设置与能力", "演示版展示正式项目的配置边界；不连接真实硬件和医院系统。")}
    <div class="grid equal"><section class="card"><div class="card-head"><div><h2>录音与识别</h2><div class="card-sub">当前正式开发以单麦克风为主，保留双麦能力。</div></div></div><div class="field"><label>录音模式</label><select><option>单麦克风模式（当前）</option><option>双麦克风模式（预留）</option></select></div><div class="field"><label>演示设备</label><select><option>默认麦克风 · 模拟输入</option></select></div><div class="device-row" style="margin-top:14px"><span class="device-dot"></span><div><strong>设备与医生声纹已就绪</strong><span>16 bit · 16000 Hz · 单通道</span></div></div></section>
      <section class="card"><div class="card-head"><div><h2>未来接入能力</h2><div class="card-sub">以下为架构预留，不表示当前演示站已连接外部系统。</div></div></div><div class="future-list"><div class="future-item"><span class="future-icon">H</span><div><strong>HIS患者与就诊接口</strong><span>未来可替换本地患者适配器，由医院系统提供正式患者与挂号信息。</span></div></div><div class="future-item"><span class="future-icon">P</span><div><strong>PACS与检查报告</strong><span>预留影像报告和已确认检查结果入口，不在演示中读取真实影像。</span></div></div><div class="future-item"><span class="future-icon">管</span><div><strong>管理员工作台</strong><span>账号、科室、权限和系统配置后续独立建设，不混入医生主流程。</span></div></div></div></section></div>`;
}

function tourView() {
  const steps = {
    workbench:["1/7 选择患者","主流程患者已经选中。点击“开始演示问诊”，进入模拟实时问诊。","开始问诊","startConsultation"],
    consultation:["2/7 记录问诊","对话将自动出现。可暂停、加速，或直接完成以缩短演示时间。","直接完成","finishConversation"],
    basic:["3/7 核对基础记录","处理红色必须确认项，再进入疑似诊断。演示中可直接采用建议。","处理当前项","tourReview"],
    diagnosis:["4/7 确认医学信息","查看六段医学文章，选择医生疑似诊断后进入病历生成。","进入病历生成","toGeneration"],
    generation:["5/7 生成并审核病历",state.generated?"正文与医生诊断都可编辑，确认后进入总览。":"点击按模板生成病历，不会再次调用大模型。",state.generated?"确认病历":"生成病历",state.generated?"confirmRecord":"generateRecord"],
    overview: state.recordStatus === "待审核"
      ? ["6/7 统一管理病历","新生成的病历已进入待审核状态。打开主流程病历，完成医生审核与确认。","打开待审核病历","openSelectedRecord"]
      : ["6/7 统一管理病历","总览展示多位患者的不同状态。已确认病历进入报告与归档。","查看报告归档","tourArchive"],
    archive:["7/7 导出与归档","下载真实演示Word或PDF；最终归档后保留只读版本。","完成演示","closeTour"],
    settings:["能力边界","演示站展示预留能力，但不连接真实HIS、PACS、硬件或患者数据。","返回工作台","tourWorkbench"],
  };
  const step=steps[state.page]||steps.workbench;
  return `<aside class="tour tour-${state.page}"><div class="tour-heading"><span class="tour-step">${step[0]}</span><strong>演示引导</strong></div><p>${step[1]}</p><div class="tour-actions"><button id="closeTour" class="ghost">关闭引导</button><button id="resetTour" class="ghost">重新开始</button><button data-tour-target="${step[3]}" class="primary">${step[2]}</button></div></aside>`;
}

function bindLogin() { document.querySelector("#quickLogin")?.addEventListener("click",()=>setState({loggedIn:true,page:"workbench",guideOpen:true})); }
function bindShell() {
  document.querySelectorAll("[data-nav]").forEach(b=>b.addEventListener("click",()=>navigate(b.dataset.nav)));
  document.querySelector("#resetDemo")?.addEventListener("click",resetDemo);
  document.querySelector("#closeTour")?.addEventListener("click",()=>setState({guideOpen:false}));
  document.querySelector("#resetTour")?.addEventListener("click",resetDemo);
  document.querySelector("[data-tour-target]")?.addEventListener("click",e=>runTourTarget(e.currentTarget.dataset.tourTarget));
}

function bindPage() {
  document.querySelectorAll("[data-patient]").forEach(b=>b.addEventListener("click",()=>setState({selectedPatient:b.dataset.patient})));
  document.querySelector("#startConsultation")?.addEventListener("click",startConsultation);
  document.querySelector("#toggleConversation")?.addEventListener("click",toggleConversation);
  document.querySelector("#speedConversation")?.addEventListener("click",changeSpeed);
  document.querySelector("#finishConversation")?.addEventListener("click",finishConversation);
  document.querySelector("#toBasic")?.addEventListener("click",()=>navigate("basic"));
  document.querySelector("#backConsultation")?.addEventListener("click",()=>navigate("consultation"));
  document.querySelector("#saveBasic")?.addEventListener("click",()=>{ syncBase(); toast("基础问诊记录已暂存"); });
  document.querySelector("#baseRecordEditor")?.addEventListener("input",e=>{state.baseRecord=e.target.value;saveState();});
  document.querySelectorAll("[data-review]").forEach(b=>b.addEventListener("click",()=>reviewCurrent(b.dataset.review)));
  document.querySelector("#toDiagnosis")?.addEventListener("click",goDiagnosis);
  document.querySelector("#backBasic")?.addEventListener("click",()=>navigate("basic"));
  document.querySelectorAll("[data-section]").forEach(e=>e.addEventListener("input",()=>{state.sections[e.dataset.section]=e.value;saveState();}));
  document.querySelectorAll("[data-candidate]").forEach(e=>e.addEventListener("change",()=>toggleDiagnosis(e.dataset.candidate,e.checked)));
  document.querySelector("#primaryDiagnosis")?.addEventListener("change",e=>setState({primaryDiagnosis:e.target.value},false));
  document.querySelector("#addDiagnosis")?.addEventListener("click",addDiagnosis);
  document.querySelector("#saveExtraction")?.addEventListener("click",()=>toast("医学信息与诊断已暂存"));
  document.querySelector("#toGeneration")?.addEventListener("click",goGeneration);
  document.querySelector("#backDiagnosis")?.addEventListener("click",()=>navigate("diagnosis"));
  document.querySelector("#generateRecord")?.addEventListener("click",generateRecord);
  document.querySelectorAll("[data-record]").forEach(e=>e.addEventListener("input",()=>{state.recordSections[e.dataset.record]=e.value;saveState();}));
  document.querySelector("#recordPrimary")?.addEventListener("input",e=>{state.primaryDiagnosis=e.target.value;saveState();});
  document.querySelector("#saveRecord")?.addEventListener("click",saveRecord);
  document.querySelector("#confirmRecord")?.addEventListener("click",confirmRecord);
  document.querySelector("#toOverview")?.addEventListener("click",()=>navigate("overview"));
  document.querySelectorAll("[data-filter]").forEach(b=>b.addEventListener("click",()=>setState({filter:b.dataset.filter})));
  document.querySelectorAll("[data-record-id]").forEach(r=>r.addEventListener("click",()=>setState({selectedPatient:r.dataset.recordId})));
  document.querySelector("#openSelectedRecord")?.addEventListener("click",()=>navigate("generation"));
  document.querySelectorAll("[data-preview]").forEach(b=>b.addEventListener("click",()=>toast("已打开只读演示预览")));
  document.querySelector("#reviseFromArchive")?.addEventListener("click",()=>navigate("generation"));
  document.querySelector("#archiveRecord")?.addEventListener("click",archiveRecord);
  const c=document.querySelector("#conversation"); if(c) c.scrollTop=c.scrollHeight;
}

function navigate(page) { stopTimers(); setState({page, guideOpen: state.guideOpen}); window.scrollTo({top:0,behavior:"smooth"}); }
function resetDemo() { stopTimers(); const fresh=initialState(); fresh.loggedIn=true; state=fresh; saveState(); render(); toast("演示已重置，可以从头开始"); }
function startConsultation() { setState({selectedPatient:"demo-main",page:"consultation",consultationStatus:"running",conversationIndex:0,elapsed:0}); startTimers(); }
function startTimers() { stopTimers(); if(state.consultationStatus!=="running") return; conversationTimer=setInterval(()=>{ if(state.conversationIndex>=conversation.length){finishConversation();return;} state.conversationIndex++; state.elapsed+=4; saveState(); render(); startTimers(); }, Math.max(520,1800/state.speed)); clockTimer=setInterval(()=>{state.elapsed++;saveState();const t=document.querySelector('.timer');if(t)t.textContent=formatTime(state.elapsed);},1000); }
function stopTimers(){clearInterval(conversationTimer);clearInterval(clockTimer);conversationTimer=null;clockTimer=null;}
function toggleConversation(){ const next=state.consultationStatus==="running"?"paused":"running"; setState({consultationStatus:next}); if(next==="running")startTimers(); else stopTimers(); }
function changeSpeed(){ const speed=state.speed===1?2:state.speed===2?4:1; setState({speed}); if(state.consultationStatus==="running")startTimers(); }
function finishConversation(){ stopTimers(); const records=state.records.map(r=>r.id==='demo-main'?{...r,status:'进行中',updated:'刚刚'}:r); setState({consultationStatus:"finished",conversationIndex:conversation.length,elapsed:74,records}); toast("问诊完成，已形成完整对话证据"); }
function syncBase(){ const e=document.querySelector('#baseRecordEditor');if(e){state.baseRecord=e.value;saveState();} }
function reviewCurrent(action){ const idx=state.reviewIssues.findIndex(i=>!i.done); if(idx<0)return; if(action==='audio'){toast('正在回放对应的演示原音片段');return;} const issues=state.reviewIssues.map((i,n)=>n===idx?{...i,done:true}:i); setState({reviewIssues:issues}); toast(action==='keep'?'已保留原文':'当前项目已处理'); }
function goDiagnosis(){ syncBase(); if(state.reviewIssues.some(i=>i.level==='required'&&!i.done)){toast('请先处理红色的必须确认项');return;} navigate('diagnosis'); }
function toggleDiagnosis(name,checked){ let list=checked?[...new Set([...state.selectedDiagnoses,name])]:state.selectedDiagnoses.filter(x=>x!==name); let primary=list.includes(state.primaryDiagnosis)?state.primaryDiagnosis:(list[0]||''); setState({selectedDiagnoses:list,primaryDiagnosis:primary}); }
function addDiagnosis(){ const input=document.querySelector('#manualDiagnosis');const name=input?.value.trim();if(!name)return;setState({candidates:[...new Set([...state.candidates,name])],selectedDiagnoses:[...new Set([...state.selectedDiagnoses,name])],primaryDiagnosis:state.primaryDiagnosis||name});toast('已添加医生诊断');}
function goGeneration(){ const select=document.querySelector('#primaryDiagnosis'); if(select)state.primaryDiagnosis=select.value; if(!state.primaryDiagnosis){toast('请至少选择一项并指定主要诊断');return;} setState({extractionConfirmed:true,page:'generation'}); }
function generateRecord(){ state.generated=true; state.recordStatus='待审核'; state.records=state.records.map(r=>r.id==='demo-main'?{...r,diagnosis:state.primaryDiagnosis,status:'待审核',updated:'刚刚'}:r); state.page='overview'; saveState();render();toast('病历已生成，并进入待审核总览'); }
function saveRecord(){ const main=document.querySelector('#recordPrimary')?.value.trim();if(main)state.primaryDiagnosis=main; state.recordVersion++; state.recordStatus=state.recordStatus==='待审核'?'待审核':'已确认'; state.records=state.records.map(r=>r.id==='demo-main'?{...r,diagnosis:state.primaryDiagnosis,status:state.recordStatus,updated:'刚刚'}:r); saveState();render();toast(`已保存为第${state.recordVersion}版`); }
function confirmRecord(){ const main=document.querySelector('#recordPrimary')?.value.trim(); if(!main){toast('请填写主要诊断');return;} state.primaryDiagnosis=main; state.recordStatus='已确认'; state.recordVersion=Math.max(1,state.recordVersion); state.records=state.records.map(r=>r.id==='demo-main'?{...r,diagnosis:main,status:'已确认',updated:'刚刚'}:r); state.page='archive'; saveState();render();toast('当前病历版本已确认，已进入报告与归档'); }
function archiveRecord(){ state.recordStatus='已归档'; state.records=state.records.map(r=>r.id==='demo-main'?{...r,status:'已归档',updated:'刚刚'}:r); saveState();render();toast('病历与报告已完成最终归档'); }
function runTourTarget(id){ if(id==='tourReview'){reviewCurrent('accept');return;} if(id==='tourArchive'){navigate('archive');return;} if(id==='tourWorkbench'){navigate('workbench');return;} if(id==='closeTour'){setState({guideOpen:false});return;} document.querySelector(`#${id}`)?.click(); }

render();
