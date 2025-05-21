/* Tab切换功能 * */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // 移除所有按钮激活状态
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    // 隐藏所有内容
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    // 激活当前
    btn.classList.add('active');
    document.querySelector(`.tab-content[data-tab="${btn.dataset.tab}"]`).classList.add('active');
  })
})

/* 轮播图自动播放 */
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.nav-dot');

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  // 处理循环逻辑
  currentSlide = (index + slides.length) % slides.length;
  
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

// 自动播放
let autoPlay = setInterval(() => showSlide(currentSlide + 1), 5000);

// 添加导航点点击事件
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    clearInterval(autoPlay);
    showSlide(index);
    autoPlay = setInterval(() => showSlide(currentSlide + 1), 5000);
  });
});

// 悬停暂停
document.querySelector('.carousel-container').addEventListener('mouseenter', () => {
  clearInterval(autoPlay);
});

document.querySelector('.carousel-container').addEventListener('mouseleave', () => {
  autoPlay = setInterval(() => showSlide(currentSlide + 1), 5000);
});