import { defineField, defineType } from "sanity";

export const categorie = defineType({
  name: "categorie",
  title: "Catégorie",
  type: "document",
  fields: [
    defineField({ name: "titre", title: "Titre", type: "string", validation: (r) => r.required() }),
  ],
  preview: { select: { title: "titre" } },
});
