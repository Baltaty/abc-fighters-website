import { defineField, defineType } from "sanity";

export const pageLegale = defineType({
  name: "pageLegale",
  title: "Page légale",
  type: "document",
  fields: [
    defineField({ name: "type", title: "Type de page", type: "string", options: { list: [
      { title: "Politique de confidentialité", value: "confidentialite" },
      { title: "Mentions légales", value: "mentions-legales" },
    ]}, validation: (r) => r.required() }),
    defineField({ name: "contenu", title: "Contenu", type: "array", of: [{ type: "block" }], validation: (r) => r.required() }),
    defineField({ name: "updatedAt", title: "Mis à jour le", type: "datetime" }),
  ],
  preview: { select: { title: "type" } },
});
