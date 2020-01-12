import { createClient } from "contentful";

// 認証？
const client = createClient({
  space: "864mm222mwq5", //Space ID
  accessToken: "1GmlIVJcFYIpDCbRGC2OuWW-d0QKIQwIUz0S3lnHG6I" //Content Delivery API - access token
});

//全blogを日付降順で取得する
export const fetchblogs = () =>
  client.getEntries({
    content_type: "blogPost",
    order: "-fields.publishDate"
  });

//全著者を取得する
export const fetchAuthors = () =>
  client.getEntries({
    content_type: "person"
  });

//特定のcontentを取得する
export const fetchEntryByentryId = entryId => client.getEntry(entryId);

//特定のタグのcontentを取得する
export const fetchPostsByTagId = tagId =>
  client.getEntries({
    content_type: "blogPost",
    "fields.tags": tagId,
    order: "-fields.publishDate"
  });

//特定の著者のcontentを取得する
export const fetchPostsByAthorId = authorId =>
  client.getEntries({
    content_type: "blogPost",
    "fields.author.sys.id": authorId,
    order: "-fields.publishDate"
  });
