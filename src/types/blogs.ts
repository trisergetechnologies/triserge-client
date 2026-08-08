export interface Blog {
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  content: string;
  date: string;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface BlogListResponse {
  blogs: Blog[];
  pagination: Pagination;
}