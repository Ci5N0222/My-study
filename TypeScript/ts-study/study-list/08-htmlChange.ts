let title = document.querySelector('#title');

// 1. if를 사용한 Narrowing
if(title !== null) title.innerHTML = '반가워요';

// 2. instanceof 연산자
if(title instanceof Element) title.innerHTML = '반가워요';

// 3. as 키워드 ( 추천 X )
let title1 = document.querySelector('#title') as Element;

// 4. 오브젝트에 붙이는 ?
if(title?.innerHTML !== undefined) title.innerHTML = '반가워요';

// 5. strict 모드 null로 변환


// a 태그에 사용되는 HTMLAnchorElement
let link = document.querySelector('.link');
if(link instanceof HTMLAnchorElement) link.href = 'https://kakao.com';

// EventListener
let button = document.querySelector('#button');
button?.addEventListener('click', function(){
})

// img 태그에 사용되는 HTMLImageElement
let image = document.querySelector('#image');
if(image instanceof HTMLImageElement) image.src = 'new.jpg';

