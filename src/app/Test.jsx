import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Test() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>테스트</title>
      </Helmet>
      <div>메인페이지</div>;
    </HelmetProvider>
  );
}
