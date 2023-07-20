import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs">NextJs is awesome!</Link>
        </li>
      </ul>
    </>
  );
}

export default NewsPage;
