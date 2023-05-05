// HTML요소들을 불러와서 변수에 할당해주는 코드
const toggleBtn = document.querySelector('.navbar_toogleBtn');
const category = document.querySelector('.navbar_category');
const icon = document.querySelector('.navbar_icon');

// 토글버튼을 클릭하게 되면 카테고리와 아이콘이 보이게끔 해주는 화살표 함수
toggleBtn.addEventListener('click', () => {
    category.classList.toggle('active');
    icon.classList.toggle('active');
});