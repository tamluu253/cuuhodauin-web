import { getAllArticles } from "@/lib/articles";
import KnowledgeCenterClient from "@/components/KnowledgeCenterClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kho 277 Bài Viết Chuyên Ngành Cứu Hộ Đầu In | VNPIS Lab",
  description: "Tổng hợp toàn bộ kiến thức chuyên sâu về xử lý sự cố nghẹt đầu in, lựa chọn mực in chuyên dụng và quy trình bảo vệ linh kiện ngành in kỹ thuật số.",
};

export default function BlogListingPage() {
  const articles = getAllArticles();

  return <KnowledgeCenterClient articles={articles} />;
}
