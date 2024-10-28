const icon = document.getElementById('avatar');
const audio = new Audio('sad-hamster.mp3');

icon.addEventListener('click', () => {
	audio.volume = 0.2;
	audio.play();
});

let isPhoneDevice = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
	isPhoneDevice = true;
}

const toggleHeaders = document.querySelectorAll('.toggle-header');
const contents = document.querySelectorAll('.tab-content');
let currentIndex = 0;
let isAnimating = false;

async function switchTab(newIndex) {
	if (newIndex === currentIndex || isAnimating) return;
	isAnimating = true;
	const direction = newIndex > currentIndex ? {
		out: 'slide-out-left'
		, in: 'slide-in-right'
	} : {
		out: 'slide-out-right'
		, in: 'slide-in-left'
	};
	toggleHeaders.forEach(header => header.classList.remove('active'));
	toggleHeaders[newIndex].classList.add('active');
	const element = contents[currentIndex];
	const topPosition = element.offsetTop;
	contents[newIndex].style.position = 'absolute';
	contents[currentIndex].style.position = 'absolute';
	contents[newIndex].style.top = `${topPosition}px`;
	contents[currentIndex].style.top = `${topPosition}px`;
	document.querySelector('body').style.overflowX = 'hidden';
	contents[currentIndex].style.animation = `${direction.out} 0.5s ease-in-out, slide-out 0.5s ease-in-out`;
	await new Promise(resolve => setTimeout(resolve, 150));
	contents[newIndex].style.display = 'initial';
	contents[newIndex].style.animation = `${direction.in} 0.5s ease-in-out, slide-in 0.5s ease-in-out`;
	await new Promise(resolve => setTimeout(resolve, 250));
	contents[newIndex].style.position = 'inherit';
	contents[currentIndex].style.position = 'inherit';
	contents[newIndex].style.top = ``;
	contents[currentIndex].style.top = ``;
	contents[currentIndex].style.display = 'none';
	document.querySelector('body').style.overflowX = 'clip';
	currentIndex = newIndex;
	isAnimating = false;
}

toggleHeaders.forEach((header, index) => {
	header.addEventListener('click', () => switchTab(index));
});

toggleHeaders[0].classList.add('active');
contents[0].style.display = 'initial';

contents.forEach((content, index) => {
	if (index !== 0) content.style.display = 'none';
});

function createFloatingPlusOne() {
	const avatar = document.querySelector('#avatar img');

	avatar.addEventListener('click', (e) => {
		const plus = document.createElement('div');
		plus.innerText = '+1';
		plus.style.cssText = `
position: fixed;
left: ${e.clientX}px;
top: ${e.clientY}px;
color: #fff;
pointer-events: none;
font-size: 40px;
font-family: 'Montserrat', sans-serif;
font-weight: bold;
transition: all 1s ease-out;
opacity: 1;
z-index: 1000;
`;
		document.body.appendChild(plus);
		requestAnimationFrame(() => {
			plus.style.transform = 'translateY(-100px)';
			plus.style.opacity = '0';
		});
		setTimeout(() => {
			plus.remove();
		}, 1000);
	});
}

document.addEventListener('DOMContentLoaded', createFloatingPlusOne);


const mainInfo = document.getElementById('main-info');
const content = document.getElementById('main-content');
const infoContent = document.querySelector('#main-info div');
const avatar = document.getElementById('avatar');

let govno = false;

const hards1 = document.querySelector('#hards-content>.item:nth-of-type(1)');
const hards2 = document.querySelector('#hards-content>.item:nth-of-type(2)');
const hards3 = document.querySelector('#hards-content>.item:nth-of-type(3)');
const hards4 = document.querySelector('#hards-content>.item:nth-of-type(4)');
const hards5 = document.querySelector('#hards-content>.item:nth-of-type(5)');
const hards6 = document.querySelector('#hards-content>.item:nth-of-type(6)');
const hards7 = document.querySelector('#hards-content>.item:nth-of-type(7)');
const hards8 = document.querySelector('#hards-content>.item:nth-of-type(8)');
const hards9 = document.querySelector('#hards-content>.item:nth-of-type(9)');
const hards10 = document.querySelector('#hards-content>.item:nth-of-type(10)');
const hards11 = document.querySelector('#hards-content>.item:nth-of-type(11)');

const softs1 = document.querySelector('#softs-content>.item:nth-of-type(1)');
const softs2 = document.querySelector('#softs-content>.item:nth-of-type(2)');
const softs3 = document.querySelector('#softs-content>.item:nth-of-type(3)');
const softs4 = document.querySelector('#softs-content>.item:nth-of-type(4)');
const softs5 = document.querySelector('#softs-content>.item:nth-of-type(5)');
const softs6 = document.querySelector('#softs-content>.item:nth-of-type(6)');
const softs7 = document.querySelector('#softs-content>.item:nth-of-type(7)');
const softs8 = document.querySelector('#softs-content>.item:nth-of-type(8)');

let ishuicss = false;

let is1 = false;
let is2 = false;
let is3 = false;
let is4 = false;
let is5 = false;
let is6 = false;

function addhuicss() {
	if (!ishuicss) {
		const style = document.createElement('style');
		style.id = 'hui';
		style.textContent = '.item { width: 90%; }';
		document.head.appendChild(style);
		ishuicss = true;
	}
}

function removehuicss() {
	if (ishuicss) {
		const styleElement = document.getElementById('hui');
		if (styleElement) {
			styleElement.remove();
		}
		ishuicss = false;
	}
}

async function handleResize() {
	const innerWidth = window.innerWidth;

	if (!isPhoneDevice) {
		if (!govno) {
			if (innerWidth < 830) {
				govno = true;

				mainInfo.style.animation = 'stretch 0.5s forwards';
				mainInfo.style.position = 'relative';
				mainInfo.style.minHeight = 'auto';
				mainInfo.style.height = 'auto';
				mainInfo.style.transition = 'height 0.3s ease';

				content.style.animation = 'slide-out-right 0.5s ease-in-out';

				infoContent.style.animation = 'slide-out-left 0.4s ease-in-out, slide-out 0.4s ease-in-out';

				infoContent.style.opacity = 0;

				await new Promise(resolve => setTimeout(resolve, 400));

				mainInfo.style.animation = 'heightmin 0.5s forwards';

				content.style.width = '100%';
				content.style.height = '100%';
				content.style.top = 'auto';
				content.style.left = 'auto';
				content.style.position = 'relative';
				content.style.animation = 'slide-in-down 0.5s ease-in-out';

				infoContent.style.position = 'relative';
				infoContent.style.borderRadius = '12px';
				infoContent.style.top = '-225px';
				infoContent.style.left = '320px';
				infoContent.style.width = 'clamp(270px, 100%, var(--wid-thing))';
				infoContent.style.animation = 'slide-in-top 0.5s ease-in-out, slide-in 0.4s ease-in-out';
				infoContent.style.opacity = 1;
			}
			else {}
		}
		else {
			if (innerWidth >= 830) {
				govno = false;

				mainInfo.style.animation = 'heightmax 0.5s forwards';
				mainInfo.style.position = 'fixed';

				content.style.animation = 'slide-out-down 0.5s ease-in-out'

				infoContent.style.animation = 'slide-out-top 0.5s ease-in-out, slide-out 0.4s'
				infoContent.style.opacity = '0';
				infoContent.style.width = '450px';

				await new Promise(resolve => setTimeout(resolve, 400));

				mainInfo.style.animation = 'compress 0.5s forwards';

				content.style.animation = 'slide-in-right 0.5s ease-in-out';
				content.style.width = 'calc(100% - 350px)';
				content.style.left = '350px'
				content.style.position = 'absolute'

				infoContent.style.position = 'absolute';
				infoContent.style.borderRadius = '12px';
				infoContent.style.top = '';
				infoContent.style.left = '';
				infoContent.style.width = '350px';
				infoContent.style.borderRadius = '0';
				infoContent.style.animation = 'slide-in-left 0.5s ease-in-out, slide-in 0.4s';
				infoContent.style.opacity = 1;
			}
			else {}
		}
		if (innerWidth > 2660) {
			if (!is6) {
				is1 = false;
				is2 = false;
				is3 = false;
				is4 = false;
				is5 = false;
				is6 = true;
			}
		}
		if (innerWidth > 2205 && innerWidth < 2660) { // Четыре колонки
			if (!is5) {
				removehuicss();
				hards1.style.height = '125px';
				hards2.style.height = '125px';
				hards3.style.height = '125px';
				hards4.style.height = '125px';

				hards5.style.height = '160px';
				hards6.style.height = '160px';
				hards7.style.height = '160px';
				hards8.style.height = '160px';

				hards9.style.height = '160px';
				hards10.style.height = '160px';
				hards11.style.height = '160px';


				softs1.style.height = '105px';
				softs2.style.height = '105px';
				softs3.style.height = '105px';
				softs4.style.height = '105px';

				softs5.style.height = '200px';
				softs6.style.height = '200px';
				softs7.style.height = '200px';
				softs8.style.height = '200px';

				is1 = false;
				is2 = false;
				is3 = false;
				is4 = false;
				is5 = true;
				is6 = false;
			}
		}
		if (innerWidth > 1750 && innerWidth < 2205) { // Три колонки
			if (!is4) {
				removehuicss();
				hards1.style.height = '125px';
				hards2.style.height = '125px';
				hards3.style.height = '125px';

				hards4.style.height = '125px';
				hards5.style.height = '125px';
				hards6.style.height = '125px';

				hards7.style.height = '160px';
				hards8.style.height = '160px';
				hards9.style.height = '160px';

				hards10.style.height = '160px';
				hards11.style.height = '160px';


				softs1.style.height = '105px';
				softs2.style.height = '105px';
				softs3.style.height = '105px';
                
				softs4.style.height = '105px';
				softs5.style.height = '105px';
				softs6.style.height = '105px';

				softs7.style.height = '200px';
				softs8.style.height = '200px';

				is1 = false;
				is2 = false;
				is3 = false;
				is4 = true;
				is5 = false;
				is6 = false;
			}
		}
		if (innerWidth > 1295 && innerWidth < 1750) { // Две колонки
			if (!is3) {
				removehuicss()
				hards1.style.height = '125px';
				hards2.style.height = '125px';

				hards3.style.height = '105px';
				hards4.style.height = '105px';

				hards5.style.height = '125px';
				hards6.style.height = '125px';

				hards7.style.height = '160px';
				hards8.style.height = '160px';

				hards9.style.height = '160px';
				hards10.style.height = '160px';

				hards11.style.height = '125px';


				softs1.style.height = '90px';
				softs2.style.height = '90px';

				softs3.style.height = '105px';
				softs4.style.height = '105px';

				softs5.style.height = '105px';
				softs6.style.height = '105px';

				softs7.style.height = '200px';
				softs8.style.height = '200px';

				is1 = false;
				is2 = false;
				is3 = true;
				is4 = false;
				is5 = false;
				is6 = false;
			}
		}
		if (innerWidth > 840 && innerWidth < 1295) { // Одна колонка
			if (!is2) {
				removehuicss()
				hards1.style.height = '125px';
				hards2.style.height = '125px';
				hards3.style.height = '105px';
				hards4.style.height = '105px';
				hards5.style.height = '125px';
				hards6.style.height = '125px';
				hards7.style.height = '160px';
				hards8.style.height = '160px';
				hards9.style.height = '160px';
				hards10.style.height = '160px';
				hards11.style.height = '125px';

				softs1.style.height = '90px';
				softs2.style.height = '90px';
				softs3.style.height = '105px';
				softs4.style.height = '105px';
				softs5.style.height = '105px';
				softs6.style.height = '105px';
				softs7.style.height = '200px';
				softs8.style.height = '200px';

				is1 = false;
				is2 = true;
				is3 = false;
				is4 = false;
				is5 = false;
				is6 = false;
			}
		}
		if (innerWidth <= 840) { // Меньше одной колонки
			if (!is1) {
				if (isPhoneDevice) {
					addhuicss();
				}
				hards1.style.height = '125px';
				hards2.style.height = '125px';
				hards3.style.height = '105px';
				hards4.style.height = '105px';
				hards5.style.height = '125px';
				hards6.style.height = '125px';
				hards7.style.height = '160px';
				hards8.style.height = '160px';
				hards9.style.height = '160px';
				hards10.style.height = '160px';
				hards11.style.height = '125px';

				softs1.style.height = '90px';
				softs2.style.height = '90px';
				softs3.style.height = '105px';
				softs4.style.height = '105px';
				softs5.style.height = '105px';
				softs6.style.height = '105px';
				softs7.style.height = '200px';
				softs8.style.height = '200px';

				is1 = true;
				is2 = false;
				is3 = false;
				is4 = false;
				is5 = false;
				is6 = false;
			}
		}
	}
	else {
		if (!govno) {
			govno = true;
			document.querySelector('#content').style.overflowX = 'hidden';

			mainInfo.style.position = 'relative';
			mainInfo.style.minHeight = 'auto';
			mainInfo.style.height = '480px';
			mainInfo.style.width = 'calc(100% - 40px)';

			content.style.width = '100%';
			content.style.animation = '0'
			content.style.transition = '0'
			content.style.height = '100%';
			content.style.top = 'auto';
			content.style.left = 'auto';
			content.style.position = 'relative';

			infoContent.style.position = 'relative'
			infoContent.style.borderRadius = '12px'
			infoContent.style.fontSize = '25px'
			infoContent.style.top = '-350px'
			infoContent.style.left = '500px'
			infoContent.style.width = '430px'

			avatar.style.height = '465px'
			avatar.style.width = '465px'


			hards1.style.height = '125px';
			hards2.style.height = '125px';
			hards3.style.height = '105px';
			hards4.style.height = '105px';
			hards5.style.height = '125px';
			hards6.style.height = '125px';
			hards7.style.height = '160px';
			hards8.style.height = '160px';
			hards9.style.height = '160px';
			hards10.style.height = '160px';
			hards11.style.height = '125px';

			softs1.style.height = '90px';
			softs2.style.height = '90px';
			softs3.style.height = '105px';
			softs4.style.height = '105px';
			softs5.style.height = '105px';
			softs6.style.height = '105px';
			softs7.style.height = '200px';
			softs8.style.height = '200px';
		}
	}
}

window.addEventListener('resize', handleResize);
handleResize();

function setTheme(isDark) {
	if (isDark) {
		document.documentElement.classList.add('dark-theme');
	}
	else {
		document.documentElement.classList.remove('dark-theme');
	}
	localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function loadSavedTheme() {
	const savedTheme = localStorage.getItem('theme');
	if (savedTheme) {
		setTheme(savedTheme === 'dark');
	}
	else {
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		setTheme(prefersDark);
	}
}

function themeToggle(event) {
	let x, y;
	if (event.type === 'touchstart') {
		x = event.touches[0].clientX;
		y = event.touches[0].clientY;
	}
	else if (event.type === 'click') {
		x = event.clientX;
		y = event.clientY;
	}
	else {
		x = window.innerWidth / 2;
		y = window.innerHeight / 2;
	}
	const maxRadius = Math.sqrt(
		Math.pow(Math.max(x, window.innerWidth - x), 2) +
		Math.pow(Math.max(y, window.innerHeight - y), 2)
	);
	const currentTheme = document.documentElement.classList.contains('dark-theme');
	const transitionColor = getComputedStyle(document.documentElement)
		.getPropertyValue('--theme-transition-color').trim();

	const transitionColorEnd = getComputedStyle(document.documentElement)
		.getPropertyValue('--theme-transition-color-end').trim();

	const overlay = document.createElement('div');
	overlay.className = 'theme-transition-overlay';
	overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        z-index: 9999;
        clip-path: circle(0px at ${x}px ${y}px);
        background-color: ${transitionColor};
        transition: clip-path 0.6s ease-in-out, background-color 0.6s ease-in-out;
    `;
	document.body.appendChild(overlay);

	setTimeout(() => {
		overlay.style.clipPath = `circle(${maxRadius}px at ${x}px ${y}px)`;
		overlay.style.backgroundColor = transitionColorEnd;
	}, 50);

	let animationsCompleted = 0;
	overlay.addEventListener('transitionend', (e) => {
		animationsCompleted++;
		if (animationsCompleted === 2) {
			const newTheme = !document.documentElement.classList.contains('dark-theme');
			setTheme(newTheme);
			setTimeout(() => {
				overlay.style.clipPath = `circle(0px at ${x}px ${y}px)`;
			}, 50);
			overlay.addEventListener('transitionend', (e) => {
				if (e.propertyName === 'clip-path') {
					overlay.remove();
				}
			}, {
				once: true
			});
		}
	}, {
		once: false
	});
}

const styles = `
    :root {
        --theme-transition-color: #59517e;
        --theme-transition-color-end: #28233d;
    }

    :root.dark-theme {
        --bckg-1: #28233d;
        --bckg-2: #1f1c2a;
        --bckg-4: #4d466f50;
        --bckg-5: #332e45;
        --brdr-1: #b8b1be;
        --brdr-4: #807b92;
        --brdr-5: #696485;
        --txt-1: #b8b1be;
        --txt-2: #c9c4ce;
        
        --theme-transition-color: #28233d;
        --theme-transition-color-end: #59517e;
    }

    .theme-transition-overlay {
        pointer-events: none;
        will-change: clip-path, background-color;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        transform: translateZ(0);
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

document.addEventListener('DOMContentLoaded', loadSavedTheme);
document.getElementById('theme-switcher').addEventListener('click', themeToggle);

document.getElementById('theme-switcher').addEventListener('touchstart', (e) => {
	e.preventDefault();
	themeToggle(e);
});

const translations = {
	ru: {
		"ivacancy": "Frontend-разработчик"
		, "iname": "Имя: Роман Б."
		, "inickname": "Псевдоним: Krivodushie"
		, "iexp": "Опыт: Более 2.5 лет"
		, "hardSkills": "HARD SKILLS"
		, "softSkills": "SOFT SKILLS"
		, "experience": "ОПЫТ РАБОТЫ"
		, "chJS": "JavaScript/TypeScript"
		, "chReact": "React/Svelte"
		, "chHTML": "HTML/CSS"
		, "chMarkup": "Вёрстка"
		, "chNode": "Node.js"
		, "chPostgreSQL": "PostgreSQL"
		, "chDocker": "Docker"
		, "chRedis": "Redis"
		, "chPrometheus": "Prometheus"
		, "chProtobuf": "Protocol Buffers (protobuf)"
		, "chTests": "Тесты на Mocha и Applitools"
		, "csTeamwork": "Командная работа"
		, "csResponsible": "Ответственность"
		, "csLearning": "Готовность к обучению"
		, "csThinking": "Критическое мышление"
		, "csDevLoyality": "Целеустремлённость"
		, "csConflictSolving": "Умение разрешать конфликты"
		, "csCreativity": "Креативность"
		, "csHumor": "Развитое чувство юмора"
		, "chcJS": "Владею как JavaScript, так и TypeScript на уровне выше среднего. Приходилось решать очень нестандартные для веб-программиста задачи в ходе реализации некоторых проектов."
		, "chcReact": "Владею такими фреймворками-библиотеками для JS, как React и Svelte. Использовал их в ходе разработки в проекте Kinwoods, в личных заказах и в личных учебных проектах."
		, "chcHTML": "Пишу понятную, красивую и семантическую вёрстку. Использую нативный CSS, но при необходимости могу адаптироваться к препроцессорам."
		, "chcMarkup": "Верстаю сайты с использованием всех вышеописанных технологий и умею создавать удобные адаптивные кроссбраузерные и кроссплатформенные интерфейсы."
		, "chcNode": "На уровне ведомого работал с Node.js в ходе работы с проектом Kinwoods. Знаю базовый синтаксис и функции, необходимые для минимального взаимодействия на уровне фронтенда."
		, "chcPostgreSQL": "Работал с PostgreSQL в ходе работы с проектом Kinwoods. Знаю, как записывать и извлекать значения из баз данных."
		, "chcDocker": "Свободно работаю с Docker для контейнеризации приложений, создания и управления образами, а также для упрощения развертывания и масштабирования приложений в различных средах. Имею опыт работы с Docker Compose для управления многоконтейнерными приложениями."
		, "chcRedis": "Имею опыт работы с Redis в качестве высокопроизводительного хранилища данных. Использую его для кэширования, управления сессиями и реализации очередей сообщений, что позволяет значительно ускорить доступ к данным и повысить производительность приложений."
		, "chcPrometheus": "Работаю с Prometheus для мониторинга и сбора метрик приложений. Знаю, как настраивать алерты и визуализировать данные с помощью Grafana, что позволяет эффективно отслеживать производительность и состояние систем в реальном времени."
		, "chcProtobuf": "Использую Protocol Buffers для сериализации данных, что позволяет создавать компактные и эффективные сообщения для обмена между сервисами. Знаю, как интегрировать protobuf в проекты на Node.js."
		, "chcTests": 'Умею тестировать приложения с использованием <span title="моча.">Mocha</span> для написания юнит-тестов и Applitools для визуальных и e2e тестов интерфейса, что позволяет находить ошибки и гарантировать высокое качество UX.'
		, "cscTeamwork": "Умею контактировать с людьми и работать в команде, легко нахожу общий язык с новыми людьми."
		, "cscResponsible": "Подхожу к выполнению задач ответственно и всегда стараюсь сдать выполнение в сроки дедлайна."
		, "cscLearning": "Готов (и рад) изучать и улучшать новые навыки в составе новой команды и всегда стараюсь стать лучше в своём любимом деле."
		, "cscThinking": "Умею хорошо анализировать и оценивать полученную информацию, делать выводы и принимать обоснованные решения."
		, "cscDevLoyality": "Стремлюсь всегда завершать все задачи качественно и в срок."
		, "cscConflictSolving": "При необходимости, из-за наличия организационного опыта, умею конструктивно разешать конфликты в коллективе и помочь людям прийти к компромиссам."
		, "cscCreativity": "Я обладаю способностью генерировать нестандартные идеи и подходы к решению задач. В ходе работы над CatWar Script и Kinwoods я часто предлагал и реализовывал оригинальные решения, которые помогали улучшить функциональность и пользовательский опыт."
		, "cscHumor": `Понравится, конечно, не всем и не всегда, потому что часто мой юмор бывает слишком чёрным, но постараюсь держать в коллективе позитивный настрой! Дальше должны были быть примеры шуток, но я решил не вставлять чтобы не травмировать эйчаров`
        ,"exh1": "Начало пути и обучение"
        ,"exh2": "Практический опыт"
        ,"exc1": "В 2022 году начал активно изучать основы вёрстки и JavaScript. Мне понравилось и я вовлёк в это дело свою подругу Амину, с которой в итоге мы до сих пор собратья по мозгу и совместной разработке."
        ,"exc2": "В конце 2022 года, заинтересовавшись более глубокими познаниями в области веб-разработки пошёл на бесплатные курсы от МЭО (у меня даже сертификат или что-то типа того есть), решив окончательно связать своё будущее с разработкой."
        ,"exc3": "Ближе к концу обучения в МЭО, узнав от преподавателя подробнее об альтернативных технологиях и поняв, что не надо их бояться, начал параллельно изучать React и TypeScript, значительно в них преуспев."
        ,"exc4": "Закончив обучение в июле 2023 и немного подтянувшись в React с TypeScript начал потихоньку вместе с Аминой брать неофициальные заказы на вебсайты по знакомым. Написали с десяток различных коммерческих сайтов, которые по сей день хорошо написаны, однако не очень успешны из-за отсутствия маркетингового мышления у наших клиентов (ну это уже не наши проблемы)"
        ,"exc5": "Попутно с этим устроились неофициально с Аминой в небольшой околомузыкальный стартап, суть которого была в сервисе для общения музыкантов, поиска групп в своих городах и помощи в новых начинаниях музыкантам в СНГ. Разработка в итоге заморозилась из-за недостатка финансирования. За время работы там мы приобрели навыки работы в команде и подучились работать с Git и основным стеком проекта, включая TS с React на фронте и Node.js на бэкенде. Дополнительно научились использовать докер для контейнеризации приложений и другие технологии (Redux, Redis, protobuf, Prometheus, unit и e2e тесты), описанные ранее в резюме."
        ,"exc6": "В ноябре 2023 сели параллельно с работой в стартапе за небольшой pet-проект (CatWar Script) - UserScript UI модификацию для веб-игры CatWar в ходе работы над которой в итоге раскрыли свой творческий потенциал в плане кода, научились работать с древней технологией JQuery и набрались опыта в работе с нестандартными задачами, их реализацией (из-за сложности интеграции поверх чужого кода и наблюдения за событиями, которые отчасти работают на соплях на том сайте) и технологиями. Набрали большую аудиторию (2/3 из ~30k аудитории сайта) и на самом деле гордимся этим больше, чем остальными проектами, в которых работали"
        ,"exc7": "После закрытия скрипта и стартапа, в котором мы работали пошли помогать на позиции фронтенд-разработчиков с разработкой веб-игры Kinwoods. Фронтенд пишем на Svelte и работаем в кинвудс за миску риса и доброе слово <br> В будущем планируем поработать над сторонним проектом - приложением для медиков со стеком React Native и node.js как (микро)фуллстекеры, но пока статус проекта находится под вопросом"
        ,"exc8": "Сейчас находимся в активном поиске работы"
    }
	, en: {
		"ivacancy": "Frontend Developer"
		, "iname": "Name: Roman B."
		, "inickname": "Nickname: Krivodushie"
		, "iexp": "Experience: More than 2.5 years"
		, "hardSkills": "HARD SKILLS"
		, "softSkills": "SOFT SKILLS"
		, "experience": "EXPERIENCE"
		, "chJS": "JavaScript/TypeScript"
		, "chReact": "React/Svelte"
		, "chHTML": "HTML/CSS"
		, "chMarkup": "HTML Markup"
		, "chNode": "Node.js"
		, "chPostgreSQL": "PostgreSQL"
		, "chDocker": "Docker"
		, "chRedis": "Redis"
		, "chPrometheus": "Prometheus"
		, "chProtobuf": "Protocol Buffers (protobuf)"
		, "chTests": "Mocha and Applitools tests"
		, "csTeamwork": "Teamwork"
		, "csResponsible": "Responsibility"
		, "csLearning": "Readiness to learning"
		, "csThinking": "Critical thinking"
		, "csDevLoyality": "Determination"
		, "csConflictSolving": "Conflict resolution"
		, "csCreativity": "Creativity"
		, "csHumor": "Sense of humor"
		, "chcJS": "I am proficient in both JavaScript and TypeScript at an above-average level. I had to solve very non-standard tasks for a web programmer during the implementation of some projects."
		, "chcReact": "I am proficient in JavaScript frameworks/libraries such as React and Svelte. I used them during development in the Kinwoods project, personal orders, and personal learning projects."
		, "chcHTML": "I write clear, beautiful, and semantic markup. I use native CSS but can adapt to preprocessors when needed."
		, "chcMarkup": "I create websites using all the technologies described above and can create user-friendly, adaptive, cross-browser, and cross-platform interfaces."
		, "chcNode": "I worked with Node.js as a guided developer during the Kinwoods project. I know the basic syntax and functions necessary for minimal frontend interaction."
		, "chcPostgreSQL": "I worked with PostgreSQL during the Kinwoods project. I know how to write and retrieve values from databases."
		, "chcDocker": "I work freely with Docker for application containerization, creating and managing images, and simplifying deployment and scaling of applications in various environments. I have experience with Docker Compose for managing multi-container applications."
		, "chcRedis": "I have experience working with Redis as a high-performance data store. I use it for caching, session management, and message queue implementation, which significantly speeds up data access and improves application performance."
		, "chcPrometheus": "I work with Prometheus for application monitoring and metrics collection. I know how to configure alerts and visualize data using Grafana, which allows effective tracking of system performance and status in real-time."
		, "chcProtobuf": "I use Protocol Buffers for data serialization, which allows creating compact and efficient messages for service communication. I know how to integrate protobuf into Node.js projects."
		, "chcTests": "I can test applications using Mocha for unit testing and Applitools for visual and e2e interface testing, which helps find errors and ensure high UX quality."
		, "cscTeamwork": "I can communicate with people and work in a team, easily finding common ground with new people."
		, "cscResponsible": "I approach tasks responsibly and always try to complete them within deadline."
		, "cscLearning": "I am ready (and happy) to learn and improve new skills as part of a new team and always try to become better at my favorite work."
		, "cscThinking": "I can analyze and evaluate received information well, draw conclusions, and make informed decisions."
		, "cscDevLoyality": "I always strive to complete all tasks with quality and on time."
		, "cscConflictSolving": "When necessary, due to organizational experience, I can constructively resolve conflicts in the team and help people reach compromises."
		, "cscCreativity": "I have the ability to generate non-standard ideas and approaches to solving problems. During work on CatWar Script and Kinwoods, I often proposed and implemented original solutions that helped improve functionality and user experience."
		, "cscHumor": `It won't appeal to everyone and not always, because my humor is often too dark, but I'll try to keep a positive mood in the team! <small>I needed to fill the page more so it would look better in terms of design, so read examples of what I find funny at your own risk. This doesn't characterize me as a person in general, so please don't make conclusions about me based on my sense of humor :(.</small>`
        ,"exh1": "The Beginning of the Journey and Learning"
        ,"exh2": "Practical Experience"
        ,"exc1": "In 2022, I started actively studying the basics of layout and JavaScript. I enjoyed it and got my friend Amina involved in this, and in the end, we are still brain buddies and co-developers."
        ,"exc2": "At the end of 2022, interested in gaining deeper knowledge in web development, I enrolled in free courses from MEO (I even have a certificate or something like that), deciding to finally tie my future to development."
        ,"exc3": "Closer to the end of my studies at MEO, learning more about alternative technologies from the instructor and realizing that I shouldn't be afraid of them, I began to study React and TypeScript in parallel, achieving significant success in them."
        ,"exc4": "After finishing my studies in July 2023 and improving my skills in React and TypeScript, I started gradually taking unofficial orders for websites with Amina from acquaintances. We wrote about a dozen different commercial websites, which are still well-written to this day, but not very successful due to the lack of marketing thinking from our clients (well, that's not our problem anymore)."
        ,"exc5": "Alongside this, Amina and I unofficially joined a small music-related startup, the essence of which was a service for musicians to communicate, find bands in their cities, and help musicians in the CIS with new beginnings. The development ultimately froze due to a lack of funding. During our time there, we gained skills in teamwork and learned to work with Git and the main tech stack of the project, including TS with React on the front end and Node.js on the back end. Additionally, we learned to use Docker for containerizing applications and other technologies (Redux, Redis, protobuf, Prometheus, unit and e2e tests) mentioned earlier in the resume."
        ,"exc6": "In November 2023, while working at the startup, we started a small pet project (CatWar Script) - a UserScript UI modification for the web game CatWar, during which we ultimately revealed our creative potential in coding, learned to work with the ancient technology JQuery, and gained experience in dealing with non-standard tasks and their implementation (due to the complexity of integration over someone else's code and observing events that partly work on a shoestring on that site). We gathered a large audience (2/3 of ~30k audience of the site) and are actually more proud of this than of the other projects we worked on."
        ,"exc7": "After the closure of the script and the startup we worked at, we went on to help as frontend developers in the development of the web game Kinwoods. We are writing the frontend in Svelte and working in Kinwoods for a bowl of rice and a kind word. <br> In the future, we plan to work on a side project - an application for medics with the stack React Native and Node.js as (micro)full-stack developers, but for now, the project status is in question."
        ,"exc8": "Currently, we are actively looking for work."
    }
};

function switchLanguage(event) {
	const currentLang = document.documentElement.getAttribute('lang') || 'ru';
	const newLang = currentLang === 'ru' ? 'en' : 'ru';
	document.documentElement.setAttribute('lang', newLang);
	localStorage.setItem('language', newLang);
	const elements = document.querySelectorAll('[data-translate]');
	elements.forEach(element => {
		const key = element.getAttribute('data-translate');
		if (translations[newLang][key]) {
			element.innerHTML = translations[newLang][key];
		}
	});
}

function loadSavedLanguage() {
	const savedLang = localStorage.getItem('language') || 'ru';
	document.documentElement.setAttribute('lang', savedLang);
	const elements = document.querySelectorAll('[data-translate]');

	elements.forEach(element => {
		const key = element.getAttribute('data-translate');
		if (translations[savedLang][key]) {
			element.innerHTML = translations[savedLang][key];
		}
	});
	if (savedLang === 'ru') {
		console.error('Возьмите меня на работу (пожалуйста). Ссылка: https://t.me/krivodushie');
		console.error('Если вы не хотите брать меня из-за некрасивой циферки в опыте, подумайте дважды, ведь это будет такой же большой ошибкой, как и этот консоль эррор, ведь я знаю более чем достаточно для полноценной работы в вашей команде 😔')
	}
	else {
		console.error('Take me on the job (please). Link: https://t.me/krivodushie');
	}
}

document.addEventListener('DOMContentLoaded', loadSavedLanguage);
document.getElementById('language-switcher').addEventListener('click', switchLanguage);
