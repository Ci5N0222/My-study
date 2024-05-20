## jQuery
- JavaScript Library
- 목적1. 더 쉬운 JavaScript ( 편의성 증가 )
- 목적2. 브라우저 호환성
    - 모든 브라우저에서 동일하게 동작하는 코드를 지원
    - 현재는 순수 자바스크립트만으로 호환성이 좋기 떄문에 사실상 의미 없음


### Use jQeury
- $ : jQuery 라이브러리 핵심 객체를 Alise 함
- 객체 참조 : $.
- jQuery 함수 호출 : $()
- 특징1. jQeury 내에 사용할 기능 95% 이상은 전부 function
- 특징2. CSS 선택자를 사용할 수 있음

## Vanila Script VS jQuery
- id가 input인 Element 요소 선택
    - Vanila Script: document.querySelector('#input);
    - jQuery: $('#input');

### 다중 선택
- class가 btn인 Element 요소 선택하여 onclick Event 부여
    - Vanila Script : const btn = document.querySelectorAll('.btn');
        - btn.forEach(item => {item.addEvent ...})
    - jQuery : let btn = $('.btn')
        - btn.on('click', () => {});
    - jQuery는 for문을 사용하지 않아도 모든 요소에 이벤트 적용 가능
- Vanila Script와 jQuery는 반환되는 객체가 다르기 때문에 반환된 값이 어떤 객체인지 구별하는 것이 중요!!


## 기능 사용
### jQuery 요소 추가
``` bash
// 박스 내부 기존 내용보다 앞에 내용을 넣을 때
$('#container').prepend("Prepend");

// 박스 내부 기존 내용 뒤에 내용을 넣을 때
$('#container').append("Append");

// 박스 외부 박스 앞쪽에 내용을 넣을 때
$('#container').before("Before");

// 박스 외부 박스 뒤쪽에 내용을 넣을 때
$('#container').after("After");


// Element 요소 추가
    // 1번 방식 ("string" 형태로 div 태그를 생성하여 추가)
    let prepend1 = $("<div>Prepend1</div>");

    // 2번 방식 (새로운 div를 메모리에 만들어 html()로 내용을 채운뒤 추가)
    let prepend2 = $("<div>");
    prepend1.html("Prepend2");

    // 뒤 1번, 2번 요소를 추가
    $('#container').prepend(prepend);
```

### 이벤트 할당
- 해당 이벤트 발생 지점의 정적 부모 요소
- 범위는 넓으면 넓을수록 오버헤드 증가
- 성능상 가장 가까운 부모 요소를 선택하는 것이 좋다

``` bash
// 동적 이벤트 할당 ( Dynamic event binding )
// 이벤트 선택자에 대한 소스 (event, selector, callback())
$('table').on('click', '.del', () => {
    // table 태그에 속한 class가 del인 요소에 대한 click event 부여
});


// 정적 이벤트 할당 ( Static event binding )
// 이벤트 선택자에 대한 소스 (event, callback())
$('.del').on('click', () => {
    // class가 del인 요소에 대한 직접적인 click event 부여
});

```