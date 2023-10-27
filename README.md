This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

![iShot_2023-10-25_10 31 39](https://github.com/gayoung106/AppRouter-xcom/assets/98731537/aa8478e9-5e5d-4089-93f5-37a9047a805a)

## Getting Started

run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### structure(by nextjs)

[src/app/layout.tsx]

```ts
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

- `children`은 `page.tsx`를 포함하고 있음
- 따라서 페이지를 넘나들면 page컴포넌트가 children으로 들어감

[src/app/home/layout.tsx]

```ts
export default async function HomeLayout({ children }) {
  return (
    <div>
      홈 레이아웃
      {children}
    </div>
  );
}
```

- 이 또한 home폴더 안의 `page.tsx`를 포함
- 즉, app/layout.tsx 이하에 home/layout.tsx가 있는 구조

#### Router 구조

![iShot_2023-10-25_11 48 01](https://github.com/gayoung106/AppRouter-xcom/assets/98731537/a60aecce-8b37-44ca-bc46-3009f2230494)

- (afterLogin)/(beforeLogin): 소괄호는 경로에 영향을 주지 않으나, 구조를 묶는 역할을 할 수 있음
- [username]: 대괄호는 정보에 따라 바뀔 수 있는 경로
- 따라서 [i/flow/login], [i/flow/signup]외에 모든 폴더는 (afterLogin)이하로 위치함

#### 패러랠 모달: 뒷 배경은 [app/page.tsx]가 남아있고, 로그인을 누르면 [i/flow/login/page.tsx]가 모달로 띄워지는 기능

- [app/page.tsx] 그리고 [app/(beforeLogin)/@modal/page.tsx] `page.tsx`를 동시에 보여주겠다
- 하지만 각각의 폴더가 다름
- 이 경우 패러랠 모달 기능을 할 수 없음
- 따라서 [app/page.tsx]를 [app/(beforeLogin)/page.tsx]로 경로를 변경해야 함
- 또한 [app/layout.tsx]도 패러랠 모달 폴더와 위치가 같아야 함
- 이 경우에는 해당 폴더 안에 layout.tsx 파일을 만들어줌

```ts
export default function Layout({ children, modal }) {
  return (
    <div>
      비포 레이아웃
      {children}
      {modal}
    </div>
  );
}
```
