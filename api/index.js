import { createClient } from "contentful";

// 認証？
const client = createClient({
  space: "864mm222mwq5",
  accessToken: "1GmlIVJcFYIpDCbRGC2OuWW-d0QKIQwIUz0S3lnHG6I"
});

//特定のcontentmodelを取り出す
export const fetchEntries = content_type =>
  client.getEntries({
    content_type: content_type,
    order: "-fields.releaseDate"
  });

//特定のcontentを取り出す
export const fetchEntry = entryId => client.getEntry(entryId);

//特定のタグのコンテントを取り出す
export const fetchPostsByTagId = (content_type, tagId) =>
  client.getEntries({
    content_type: content_type,
    "fields.tags": tagId,
    order: "-fields.releaseDate"
  });
