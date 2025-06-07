// --------------------------- 데이터 정의 ---------------------------
const data = {
  rest: [
    { name: '운정뜰 (중앙도서관 1층)', x: 505, y: 505, img: 'images/ujtt.png' },
    { name: '수미르 (중앙도서관 4층)', x: 505, y: 505, img: 'images/sml.png' },
    { name: '차짐룸 (중앙도서관 3,4,5,6층)', x: 505, y: 505, img: 'images/charging.png' },
    { name: '수하랑 (중앙도서관 2,7층)', x: 505, y: 505, img: 'images/shrang.png' },
    { name: '수면실 (수정관 1층)', x: 575, y: 228, img: 'images/sleep.png' },
    { name: '복합휴게실 (성신관 5층-501호)', x: 340, y: 260, img: 'images/sample1.png' }
  ],
  study: [
    { name: '[열람실 가이드]', x: 340, y: 260, img: 'images/ssg.png' },
    { name: '열람실 (2층)', x: 340, y: 260, img: 'images/ss2.png' },
    { name: '수정마루 (5층)', x: 340, y: 260, img: 'images/sample1.png' },
    { name: '대학원생 열람실 (7층)', x: 340, y: 260, img: 'images/sample1.png' },
    { name: '[열람실 가이드]', x: 575, y: 228, img: 'images/sjg.png' },
    { name: '수정스퀘어 (1층)', x: 575, y: 228, img: 'images/sample1.png' },
    { name: '열람실 (5층 B동)', x: 575, y: 228, img: 'images/sample1.png' },
    { name: '[층별 설명]', x: 505, y: 505, img: 'images/std.png' },
    { name: '집중열람실', x: 505, y: 505, img: 'images/focus.png' },
    { name: '개인열람실', x: 505, y: 505, img: 'images/sample1.png' },
    { name: '크리스탈라운지', x: 505, y: 505, img: 'images/crystal.png' },
    { name: '센트럴플라자', x: 505, y: 505, img: 'images/central.png' },
    { name: '특성화학습관', x: 505, y: 505, img: 'images/sample1.png' },
    { name: '서양서/문학자료실', x: 505, y: 505, img: 'images/west.png' },
    { name: '인문과학자료실', x: 505, y: 505, img: 'images/science.png' },
    { name: '사회과학자료 제1실', x: 505, y: 505, img: 'images/society1.png' },
    { name: '사회과학자료 제2실', x: 505, y: 505, img: 'images/society2.png' },
    { name: '자연과학자료실', x: 505, y: 505, img: 'images/nature.png' },
    { name: '역사/예술자료실', x: 505, y: 505, img: 'images/history.png' },
    { name: '전자정보실', x: 505, y: 505, img: 'images/jjj.png' },
    { name: '멀티미디어 스튜디오', x: 505, y: 505, img: 'images/multi.png' },
    { name: '크리에이티브 스튜디오', x: 505, y: 505, img: 'images/sample1.png' }
  ],
  cafe: [
    { name: '수하루 (성신관 5층)', x: 340, y: 260, img: 'images/shr.png' },
    { name: '블루포트 (수정관 1층)', x: 575, y: 228, img: 'images/blp.png' },
    { name: 'CLUB 1847', x: 575, y: 228, img: 'images/club.png' }
  ],
  food: [
    { name: '교내1식당 (수정관 A동 10층)', x: 575, y: 228, img: 'images/sample1.png' },
    { name: '교내2식당 (난향관 3층)', x: 115, y: 260, img: 'images/sample1.png' },
    { name: '버거아이엔지 (수정관 1층 난초방)', x: 575, y: 228, img: 'images/ing.png' }
  ]
};


// --------------------------- 공간 버튼 렌더링 ---------------------------
function renderList(category, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  data[category].forEach(item => {
    const btn = document.createElement('button');
    btn.textContent = item.name;
    btn.onclick = () => showMarker(item.x, item.y, item.img);
    container.appendChild(btn);
  });
}

// --------------------------- 마커 표시 및 이미지 미리보기 ---------------------------
function showMarker(x, y, imgPath) {
  const marker = document.getElementById('marker');
  const preview = document.getElementById('preview');

  marker.style.left = x + 'px';
  marker.style.top = y + 'px';
  marker.style.display = 'block';

  marker.onclick = () => {
    preview.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <strong>미리보기</strong>
        <button onclick="document.getElementById('preview').style.display='none'"
                style="border: none; background: transparent; font-size: 20px; cursor: pointer;">×</button>
      </div>
      <img src="${imgPath}" style="width: 100%; margin-top: 10px; border-radius: 8px;">
    `;
    preview.style.display = 'block';
  };
}

// --------------------------- 아코디언 메뉴 ---------------------------
function toggleAccordion(id) {
  const body = document.getElementById(id);
  body.style.display = body.style.display === 'block' ? 'none' : 'block';
}

function toggleSubAccordion(id) {
  const sub = document.getElementById(id);
  sub.style.display = sub.style.display === 'block' ? 'none' : 'block';
}

// --------------------------- 미니게임 로직 ---------------------------
const sujung = document.getElementById('sujeong');
const scoreBoard = document.getElementById('score');
const toggleBtn = document.getElementById('toggleGameBtn');

let score = 0;
let gameInterval = null;

function moveSujung() {
  const map = document.querySelector('.map-container');
  const maxX = map.clientWidth - sujung.clientWidth;
  const maxY = map.clientHeight - sujung.clientHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  sujung.style.left = `${x}px`;
  sujung.style.top = `${y}px`;
}

sujung.onclick = () => {
  if (gameInterval !== null) {
    score++;
    scoreBoard.innerText = `점수: ${score}`;
    moveSujung();
  }
};

toggleBtn.onclick = () => {
  if (gameInterval === null) {
    score = 0;  // 시작할 때도 0으로 초기화
    scoreBoard.innerText = `점수: ${score}`;
    gameInterval = setInterval(moveSujung, 3000);
    toggleBtn.innerText = '게임 종료';
  } else {
    clearInterval(gameInterval);
    gameInterval = null;
    toggleBtn.innerText = '게임 시작';

    // 👉 게임 종료 시 점수 초기화
    score = 0;
    scoreBoard.innerText = `점수: ${score}`;
  }
};

