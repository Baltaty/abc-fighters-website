import { defineField, defineType } from "sanity";

export const match = defineType({
  name: "match",
  title: "Match",
  type: "document",
  fields: [
    defineField({ name: "competition", title: "Compétition", type: "string", validation: (r) => r.required() }),
    defineField({ name: "date", title: "Date et heure", type: "datetime", validation: (r) => r.required() }),
    defineField({ name: "domicile", title: "Équipe domicile", type: "string", validation: (r) => r.required() }),
    defineField({ name: "exterieur", title: "Équipe extérieure", type: "string", validation: (r) => r.required() }),
    defineField({ name: "logoDomicile", title: "Logo domicile", type: "image" }),
    defineField({ name: "logoExterieur", title: "Logo extérieur", type: "image" }),
    defineField({ name: "lieu", title: "Lieu", type: "string" }),
    defineField({ name: "lienBilletterie", title: "Lien billetterie", type: "url" }),
    defineField({ name: "lienDiffusion", title: "Chaîne de diffusion", type: "object", fields: [
      defineField({ name: "label", title: "Nom", type: "string" }),
      defineField({ name: "href", title: "Lien", type: "url" }),
    ]}),
  ],
  orderings: [{ title: "Date (prochain)", name: "dateAsc", by: [{ field: "date", direction: "asc" }] }],
  preview: { select: { title: "domicile", subtitle: "date" } },
});
