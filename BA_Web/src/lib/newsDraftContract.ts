export const NEWS_DRAFT_STORAGE_KEY = 'ba-web.news-drafts.v1';

export type NewsDraft = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: string;
  sourceLabel: string;
  sourceHref: string;
  body: string;
  createdAt: string;
};

export const draftToArticleExample = `{
  lang: 'es',
  slug: draft.slug,
  title: draft.title,
  summary: draft.summary,
  image: '/assets/news/default.jpg',
  category: draft.category,
  source: { label: draft.sourceLabel, href: draft.sourceHref },
  body: draft.body.split('\\n').filter(Boolean)
}`;

