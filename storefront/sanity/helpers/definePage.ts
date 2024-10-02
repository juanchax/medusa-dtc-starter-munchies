import type {DocumentDefinition} from "sanity";

import {ComposeIcon} from "@sanity/icons";
import {definePathname} from "@tinloof/sanity-studio";
import {uniqBy} from "lodash";
import {defineField} from "sanity";

import type {SchemaDefinition} from "./defineSchema";

import {seoField} from "../shared/seoField";
import defineSchema from "./defineSchema";

type PageDefinition = Omit<DocumentDefinition, "options"> & {
  options?: SchemaDefinition["options"] & {
    disableIndexableStatus?: boolean;
    hidePathnameField?: boolean;
    hideSeo?: boolean;
  };
};

export default function definePage(schema: PageDefinition) {
  const groups = uniqBy(
    [
      {
        default: true,
        icon: ComposeIcon,
        name: "content",
        title: "Content",
      },
      ...(schema.groups || []),
    ],
    "name",
  );

  return defineSchema({
    ...schema,
    fields: [
      defineField({
        ...definePathname(),
        group: "settings",
        hidden: schema.options?.hidePathnameField,
        readOnly: schema.options?.disableCreation,
      }),
      defineField({
        description:
          "This title is only used internally in Sanity, it won't be displayed on the website.",
        group: "settings",
        hidden: schema.options?.hideInternalTitle,
        name: "internalTitle",
        title: "Internal title",
        type: "string",
      }),
      defineField({
        description:
          "Won't show up in Google if set to false, but accessible through URL.",
        group: "settings",
        hidden: schema.options?.disableIndexableStatus,
        initialValue: true,
        name: "indexable",
        type: "boolean",
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        ...seoField,
        group: "settings",
        hidden: schema.options?.hideSeo,
      }),
      ...schema.fields,
    ].filter(Boolean),
    groups,
    options: {
      ...(schema.options ?? {}),
      localized: true,
    },
    preview: {
      select: {
        subtitle: "pathname.current",
        title: "internalTitle",
      },
      ...schema.preview,
    },
  });
}