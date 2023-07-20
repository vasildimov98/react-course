import { useRouter } from "next/router";

function DetailPage() {
  const newsId = useRouter().query.newsid;

  return <h1>Detail Page {newsId}</h1>;
}

export default DetailPage;
