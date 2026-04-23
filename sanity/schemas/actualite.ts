import { defineField, defineType } from "sanity";

export const actualite = defineType({
  name: "actualite",
  title: "Actualité",
  type: "document",
  fields: [
    defineField({ name: "titre", title: "Titre", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "titre" }, validation: (r) => r.required() }),
    defineField({ name: "date", title: "Date", type: "datetime", validation: (r) => r.required() }),
    defineField({ name: "categorie", title: "Catégorie", type: "string", options: { list: ["Hommes", "Femmes", "Club", "Formation", "News"] } }),
    defineField({ name: "image", title: "Image principale", type: "image", options: { hotspot: true }, description: "Taille recommandée : 990 × 557 px minimum (ratio 16:9)" }),
    defineField({ name: "resume", title: "Résumé", type: "text", rows: 3 }),
    defineField({ name: "contenu", title: "Contenu", type: "array", of: [{ type: "block" }, { type: "image" }] }),
  ],
  orderings: [{ title: "Date (récent)", name: "dateDesc", by: [{ field: "date", direction: "desc" }] }],
  preview: { select: { title: "titre", subtitle: "date", media: "image" } },
});
