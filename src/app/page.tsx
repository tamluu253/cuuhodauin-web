import HomeClient from "@/components/HomeClient";
import { getAllArticles } from "@/lib/articles";

export default function Home() {
  const articles = getAllArticles();
  const latestArticles = articles.slice(0, 6);

  return <HomeClient latestArticles={latestArticles} />;
}
