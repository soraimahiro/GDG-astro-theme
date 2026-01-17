import { getCollection } from "astro:content";

// 文章資訊型別
export type PostInfo = {
    id: string;
    title: string;
    category: string;
};


export async function getAllPostsByCategory(): Promise<{ [category: string]: PostInfo[] }> {
    // 1. 取得所有文章
    const allBlogPosts = await getCollection<"posts">("posts", ({ data }) => {
        return import.meta.env.PROD ? data.draft !== true : true;
    });

    // 2. 建立空的分組物件
    const postsByCategory: { [category: string]: PostInfo[] } = {};

    // 3. 遍歷每篇文章，依 category 分組
    allBlogPosts.forEach((post) => {
        const category = post.data.category || "uncategorized";
        
        // 如果這個分類還沒有陣列，先建立空陣列
        if (!postsByCategory[category]) {
            postsByCategory[category] = [];
        }
        
        // 把文章資訊加入對應分類的陣列
        postsByCategory[category].push({
            id: post.id,
            title: post.data.title,
            category: category,
        });
    });

    // 4. 回傳分組後的結果
    return postsByCategory;
}
