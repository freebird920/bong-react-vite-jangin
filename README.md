# Bong React Vite Jangin

- [Bong React Vite Jangin](#bong-react-vite-jangin)
  - [vite로 시작하기](#vite로-시작하기)
  - [React 시작하기](#react-시작하기)
  - [TypeScript와 함께하는 React](#typescript와-함께하는-react)
  - [학생들을 위한 예제 프로젝트](#학생들을-위한-예제-프로젝트)

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

