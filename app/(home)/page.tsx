export const metadata = {
  title: "Home",
};

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

// 디렉토리 구조 자체가 url ex) /company
// 만약 디레토리가 있어도 page.tsx가 없다면 유효한 페이지가 아님
// (home) -> 괄호로 둘러싸여진 디렉토리는 url에 영향을 주지 않는다.