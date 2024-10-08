# Bong React Vite Jangin

- [Bong React Vite Jangin](#bong-react-vite-jangin)
  - [2024. 10. 10. 목](#2024-10-10-목)
    - [웹애플리케이션이란?](#웹애플리케이션이란)
    - [javascript, html, css](#javascript-html-css)
      - [javascript](#javascript)
      - [html](#html)
      - [css](#css)
    - [vite](#vite)
    - [React.js](#reactjs)
    - [프로젝트 시작하기](#프로젝트-시작하기)
    - [./src/App.tsx](#srcapptsx)
    - [HTML 태그](#html-태그)
  - [들어가기](#들어가기)
    - [웹 프로그래밍으로 프로그래밍을 배우는 것의 장점](#웹-프로그래밍으로-프로그래밍을-배우는-것의-장점)
    - [JavaScript](#javascript-1)
    - [React](#react)
    - [Vite](#vite-1)
    - [TypeScript](#typescript)
  - [vite로 시작하기](#vite로-시작하기)
  - [React 시작하기](#react-시작하기)
  - [TypeScript와 함께하는 React](#typescript와-함께하는-react)
  - [학생들을 위한 예제 프로젝트](#학생들을-위한-예제-프로젝트)


## 2024. 10. 10. 목
  > 24학년도 2학기는 React.js를 이용해 간단한 웹 애플리케이션을 만드는 것을 목표로 합니다. 

### 웹애플리케이션이란?
  > 웹 애플리케이션은 **인터넷 브라우저**를 통해 접근할 수 있는 소프트웨어 어플리케이션이야. 데스크톱 애플리케이션처럼 특정 기기에 설치할 필요 없이 웹 서버에서 작동하고, 유저는 브라우저로 서버에 접속해서 사용할 수 있어. 예를 들어, 구글 문서, 페이스북, 유튜브 같은 것들이 전형적인 웹 애플리케이션이야.

즉, **브라우저**는 웹애플리케이션을 실행해주는 프로그램이고, 

우리가 만들 **웹애플리케이션**은 브라우저에서 실행되는 프로그램인거지.

### javascript, html, css
브라우저는 우리가 만들 프로그램을 실행시켜줍니다. 한국인에게는 한국어로 이야기 해야 의사 소통이 원할한 것 처럼 브라우저에게는 브라우저가 알아들을 수 있는 언어로 이야기를 해야 합니다. 브라우저가 알아들을 수 있는 언어는 **javascript**, **html**, **css**입니다.

#### javascript
javascript는 **기능**을 담당합니다. 

#### html
html은 웹애플리케이션의 **내용**을 담당합니다.

#### css
css는 웹애플리케이션의 **모양**을 담당합니다.


이 세 가지를 따로 따로 기초부터 배우는 방법도 있지만, 각각의 내용이 방대하고 외울 것이 많기 때문에 효율적이지 않다고 생각합니다. 

어린 아이가 한국어의 모든 어휘와 문법을 익히지 않아도 의사소통 할 수 있는 것 처럼, 우리도 우선 브라우저와 javascript, html, css를 사용하여 소통하는 방법일 익힐 것입니다.

그렇기 때문에 이 수업에서는 곧바로 vite로 react.js 프로젝트를 생성하고 간단한 페이지를 만들며 **브라우저와 소통**을 해보겠습니다. 

단, javascript는 동적 타입을 사용하여 불편한 점이 있기에 **typescript**를 사용하도록 하겠습니다. 


### vite
vite는 프론트엔드 빌드 도구입니다. 간단한 명령만으로도 프론트엔드 프로젝트를 생성하고 적절하게 포장해 줍니다. 성능도 뛰어나 vite는 빛과 같습니다?

### React.js
react.js는 META(페이스북)이 만든 웹 프론트엔드 프레임워크입니다. 성능이 무척 뛰어나고 새로고침 없이도 화면을 동적으로 생성하는 Single Page Application 형태의 앱을 만들 수 있어 아주 널리 쓰이는 프레임워크입니다.


### 프로젝트 시작하기

VSCode에서 <kbd>ctrl</kbd> + <kbd>`</kbd>를 입력해 터미널을 엽니다.

아래 명령어를 복사하여 붙여넣고 <kbd>enter</kbd>키를 입력합니다.  
```bash
npm create vite@latest
```
```bash

# 처음에 나오는거 
Need to install the following packages:
create-vite@5.5.3
Ok to proceed? (y) y # y입력

> bong-react-vite-jangin@0.0.1 npx
> create-vite

√ Project name: ... vite-project  # 원하는 프로젝트 이름 입력하고 enter
? Select a framework: » - Use arrow-keys. Return to submit.
    Vanilla
    Vue
>   React # React 선택
    Preact
    Lit
    Svelte
    Solid
    Qwik
    Others
? Select a variant: » - Use arrow-keys. Return to submit.
    TypeScript # 선택? 
>   TypeScript + SWC # 또는 선택 (추천 - 좀 더 빠를지도?)
    JavaScript
    JavaScript + SWC
    Remix ↗
```
- 터미널에서 `npm install` 입력하고 <kbd>enter</kbd>

- `.\[내 폴더]\src\index.css` 안의 모든 글자를 지우고 저장한다. (내용만 삭제)
- `.\[내 폴더]\src\App.css`파일을 삭제한다. (파일 자체 삭제)
- `.\[내 폴더]\src\App.tsx`를 실행하고 안에 있는 모든 글자를 다 삭제한다.


### ./src/App.tsx
기본적인 React 컴포넌트는 아래와 같이 만든다. 곤충과 흡사하게 React 컴포넌트도 머리 가슴 배 세 부분으로 나눌 수 있다. 

```tsx
// 머리
export default function App(){
  // 가슴
  return ( // 배 
    <>
      <h1>안녕, 나는 봉우리코더.</h1>
    </>
  );
}
```

각 부분 살펴보기 
- 머리 
    ```tsx
    export default function App() { // 여기까지 머리 
    ```
    - `export` 내보낸다는 말
    - `default` import 하면 이거 기본으로 간다는거
    - `function App(){}` javascript 및 typescript의 함수
    - 나중에 설명하겠지만 react의 컴포넌트는 사실 javascript 함수다. 
    - 함수란? 간단히 말하면 뭔가를 먹이면 => 소화시키고 => 남긴다. 이런 작동을 하는데 
    - `App`이 이 함수의 이름이다. 대충 얼굴.
    - `()`이게 입
    - `{}`이게 배
    - `return()`이 항문이라고 생각하면 이해하기 쉽다. 
    - `function`은 이런 종족? 같은걸 말하는데 즉, `App`이라는 기계한테 `()`모양 입에 뭔가를 먹이면 `{}`여기에서 어떻게 소화가 되어서 `return()`모양의 뭔가를 남긴다.
    - 해석하면 누가 이 파일을 import 하면 기본적으로 `App`이라는 함수가 실행되고
    - 이 함수는 `()`일단 아무것도 안먹고 
    - `{}` 딱히 소화를 위해서 하는건 없지만
    - `return()`안에 있는 `<><h1>안녕, 나는 .</h1></>`이것을 남기는 함수라는 것.

- 가슴
    ```tsx
    export default function App(){  // 머리
      // 이 부분이 가슴
      // 부분으로 javascript(사실 typescript)
      // 코드를 작성한다. 
      return (
    ```
    - 앞서 설명한 것 처럼 `App`이라는 이름의 함수가`()`뭔가 먹고 `{}`에서 소화를 시킨다. 
- return()
  - `return()`은 함수가 실행되고 나면 그 자리에 남기는 것이다.
  - `App`이라는 함수는 `<><h1>안녕, 나는 .</h1></>`이것을 남기는데 이것은 HTML 태그다. React 컴포넌트는 HTML 태그를 남겨야 한다. 단 React에서는 이 태그들의 최상위 태그가 병렬이 되어서는 안된다.


### HTML 태그 
간단하게 HTML 태그 연습을 하겠다. 
- `<></>` React Fragment라고 한다. 사실 HTML 태그는 아니고 React에서만 사용하는 특수한 태그다. React 컴포넌트의 `return()` 안에 들어가는 html 태그는 반드시 1개의 최상위 태그를 가져야 한다. 그렇기 때문에 후술할 `<div></div>` 등의 태그가 의미 없이 사용되지 않게 대신 최상위 태그로 사용되고는 한다.
- `<h1></h1>` `<h2></h2>` `<h3></h3>` 제목 태그이다. h 뒤의 숫자가 커질 수록 하위 제목이 된다. html 태그는 여는 태그와 닫는 태그를 가지는데 `<h1></h1>`을 예로 들면
- `<h1>`이 여는 태그 `</h1>`이 닫는 태그이다. 
- 여는 태그와 닫는 태그 사이에는 내용물이 들어간다. 위의 예시에서는 `안녕하세요` 등의 글자를 집어넣었다. 
- ```tsx
  exrpot default function App (){
    return(
      <h1>   
        <!-- 내용물 자식요소라고도 하고 뭐 그런다.  -->
        안녕하세요
      </h1>
    )
  }
  ```
  위의 HTML은 최상위 제목으로 "안녕하세요"를 사용한 문서를 만든 것이다.



## 들어가기
> React, Vite, TypeScript에 대해 설명하겠습니다. 이 세 가지 기술을 함께 사용하면 웹 개발이 매우 효율적이고 간편해집니다. 아래에 각 기술에 대한 간단한 소개를 추가합니다.

### 웹 프로그래밍으로 프로그래밍을 배우는 것의 장점

  - 즉각적인 피드백: 웹 개발은 코드 작성 후 바로 브라우저에서 결과를 확인할 수 있어 학습에 있어 즉각적인 피드백을 받을 수 있습니다.

  - 쉽게 접근 가능: 인터넷 연결만 있으면 어디서든 웹 개발 학습을 시작할 수 있으며, 다양한 무료 자료와 커뮤니티를 통해 도움을 받을 수 있습니다.

  - 실용적인 프로젝트: 웹 프로그래밍을 배우면 간단한 웹사이트나 애플리케이션을 직접 만들어볼 수 있어, 실제로 동작하는 결과물을 통해 성취감을 느낄 수 있습니다.

  - 풍부한 도구와 라이브러리: 웹 개발에는 React, Vite, TypeScript와 같은 다양한 도구와 라이브러리가 있어 학습 과정에서 더 많은 기능을 쉽게 구현할 수 있고, 이를 통해 개발 능력을 빠르게 향상시킬 수 있습니다.

  - 높은 수요: 웹 개발 기술은 IT 업계에서 높은 수요를 자랑하며, 취업 기회를 넓히는 데 도움이 됩니다.

### JavaScript
    JavaScript는 웹 페이지에서 동적으로 동작하는 요소들을 만들기 위한 프로그래밍 언어입니다. 거의 모든 웹사이트에서 사용되고 있으며, 웹 페이지에 애니메이션이나 상호작용 기능을 추가할 수 있습니다.

### React
    React는 Meta(예전의 페이스북)에서 개발한 사용자 인터페이스(UI) 라이브러리입니다. 컴포넌트(Component) 기반으로 구조화되어 있어 코드 재사용이 쉽고, 복잡한 사용자 인터페이스를 효율적으로 관리할 수 있습니다. 또한 **가상 DOM(Virtual DOM)**을 사용하여 빠르고 효율적인 화면 업데이트가 가능합니다.

### Vite
    Vite는 빠르고 간편한 프론트엔드 빌드 도구입니다. 개발 서버를 빠르게 시작하고, 코드 변경 사항을 실시간으로 반영하는 핫 모듈 교체(HMR) 기능을 제공합니다. Vite는 기존 번들러에 비해 훨씬 빠르며, 개발 초기 설정과 로딩 시간을 줄이는 데 매우 유리합니다.

### TypeScript
    TypeScript는 Microsoft에서 만든 JavaScript의 상위 집합 언어로, JavaScript에 정적 타입을 추가한 것이 특징입니다. TypeScript를 사용하면 변수나 함수의 타입을 미리 정해줄 수 있어 코드의 안정성과 가독성을 높이고, 오류를 사전에 방지할 수 있습니다.

## vite로 시작하기

- 프로젝트 설정
  - [vite 홈페이지](https://ko.vitejs.dev/)
  - 터미널에서 TypeScript를 사용해 프로젝트 생성:
    ```bash
    npm create vite@latest
    ```
    - 프로젝트 이름을 입력하고 템플릿으로 **React + TypeScript** 선택
  - 프로젝트 생성 후 패키지 설치:
    ```bash
    cd 프로젝트_이름
    npm install
    ```
  - 개발 서버 실행:
    ```bash
    npm run dev
    ```
  - 브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하여 결과 확인

[처음으로](#bong-react-vite-jangin)

## React 시작하기

- React.js란?
  - Meta(페이스북)에서 개발한 **사용자 인터페이스를 만들기 위한 JavaScript 라이브러리**
  - **컴포넌트 기반** 개발 방식으로 코드의 재사용성과 유지보수성이 뛰어남
  - **가상 DOM(Virtual DOM)**을 이용해 빠르고 효율적인 UI 업데이트가 가능

- React 설치 및 설정
  - `npm install react react-dom` 명령어로 React와 ReactDOM 설치

- 주요 개념
  - **컴포넌트(Component)**
    - 화면을 구성하는 독립적인 블록 단위이며, 재사용 가능한 코드를 작성할 수 있음
    - 함수형 컴포넌트의 예:
      ```tsx
      function MyComponent() {
        return <h1>Hello, React!</h1>;
      }
      ```
  - **JSX**
    - JavaScript와 HTML을 결합한 문법으로, UI를 쉽고 가독성 있게 작성할 수 있음
    - 예시:
      ```tsx
      const element = <h1>Hello, world!</h1>;
      ```
  - **상태 관리(State Management)**
    - 컴포넌트의 상태를 관리하는 기능으로, `useState` 훅을 사용하여 상태를 업데이트할 수 있음
    - 예시:
      ```tsx
      import { useState } from 'react';

      function Counter() {
        const [count, setCount] = useState(0);

        return (
          <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
          </div>
        );
      }
      ```
  - **프로젝트 구조 이해**
    - `src/` 폴더에 주요 소스 파일이 위치하며, `index.html`은 앱의 진입점 역할을 함
    - `main.tsx`에서 React 앱이 렌더링됨

[처음으로](#bong-react-vite-jangin)

## TypeScript와 함께하는 React

- **TypeScript란?**
  - Microsoft에서 개발한 **JavaScript의 상위 집합 언어**로, 정적 타입을 지원하여 코드의 안정성과 가독성을 높여줌
  - **타입 오류를 컴파일 시점에 발견**할 수 있어 런타임 에러를 줄일 수 있음

- **React에서 TypeScript 사용하기**
  - 컴포넌트에 **타입 정의**를 추가하여 더욱 명확한 코드 작성이 가능
  - **Props** 타입 정의 예시:
    ```tsx
    interface GreetingProps {
      name: string;
    }

    function Greeting({ name }: GreetingProps) {
      return <h1>Hello, {name}!</h1>;
    }
    ```
  - **useState** 훅 사용 시 타입 지정:
    ```tsx
    import { useState } from 'react';

    function Counter() {
      const [count, setCount] = useState<number>(0);

      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      );
    }
    ```

- **React와 TypeScript의 장점**
  - **자동 완성**과 **타입 검사**로 코드 작성이 더 쉬워지고 오류 발생이 줄어듦
  - 대규모 프로젝트에서 **유지보수성**이 뛰어남

[처음으로](#bong-react-vite-jangin)

## 학생들을 위한 예제 프로젝트

- **간단한 To-Do 리스트 만들기**
  - 이 프로젝트에서는 학생들이 React와 TypeScript의 기초를 배우면서 간단한 To-Do 리스트 애플리케이션을 만들어볼 거야.

- **프로젝트 설정**
  1. **프로젝트 생성 및 설치**
     - 위의 [vite로 시작하기](#vite%EB%A1%9C-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0) 섹션을 참고하여 Vite와 TypeScript로 프로젝트를 생성하고 설정 완료
  2. **React 컴포넌트 생성**
     - `src/components/TodoItem.tsx` 파일 생성하여 개별 To-Do 항목을 나타내는 컴포넌트 작성
       ```tsx
       interface TodoItemProps {
         task: string;
         onDelete: () => void;
       }

       function TodoItem({ task, onDelete }: TodoItemProps) {
         return (
           <div>
             <span>{task}</span>
             <button onClick={onDelete}>Delete</button>
           </div>
         );
       }

       export default TodoItem;
       ```
  3. **To-Do 리스트 컴포넌트 작성**
     - `src/components/TodoList.tsx` 파일 생성하여 전체 To-Do 리스트 관리
       ```tsx
       import { useState } from 'react';
       import TodoItem from './TodoItem';

       function TodoList() {
         const [tasks, setTasks] = useState<string[]>([]);
         const [newTask, setNewTask] = useState<string>('');

         const addTask = () => {
           if (newTask.trim()) {
             setTasks([...tasks, newTask]);
             setNewTask('');
           }
         };

         const deleteTask = (index: number) => {
           setTasks(tasks.filter((_, i) => i !== index));
         };

         return (
           <div>
             <h1>To-Do List</h1>
             <input
               type="text"
               value={newTask}
               onChange={(e) => setNewTask(e.target.value)}
             />
             <button onClick={addTask}>Add Task</button>
             <div>
               {tasks.map((task, index) => (
                 <TodoItem key={index} task={task} onDelete={() => deleteTask(index)} />
               ))}
             </div>
           </div>
         );
       }

       export default TodoList;
       ```
  4. **메인 파일 수정**
     - `src/main.tsx` 파일에서 `TodoList` 컴포넌트를 렌더링하도록 수정
       ```tsx
       import React from 'react';
       import ReactDOM from 'react-dom/client';
       import TodoList from './components/TodoList';
       import './index.css';

       ReactDOM.createRoot(document.getElementById('root')!).render(
         <React.StrictMode>
           <TodoList />
         </React.StrictMode>
       );
       ```

- **기능 설명**
  - 사용자는 할 일을 입력하고 버튼을 눌러 목록에 추가할 수 있음
  - 각 할 일 항목 옆의 삭제 버튼을 눌러 해당 항목을 삭제 가능

[처음으로](#bong-react-vite-jangin)

---

