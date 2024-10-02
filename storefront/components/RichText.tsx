import type {
  PortableTextComponents,
  PortableTextProps,
} from "@portabletext/react";
import type {
  ArbitraryTypedObject,
  PortableTextBlock,
} from "@portabletext/types";

import {PortableText} from "@portabletext/react";

import ImageBlock from "./pt.blocks/Image";

export const RichText = ({
  value = [],
}: PortableTextProps<ArbitraryTypedObject | PortableTextBlock>) => {
  return (
    <div className="space-y-4">
      <PortableText value={value} />
    </div>
  );
};

export const BlogRichText = ({
  value = [],
}: PortableTextProps<ArbitraryTypedObject | PortableTextBlock>) => {
  const components: PortableTextComponents = {
    types: {
      imageBlock: ({value}) => <ImageBlock data={value.image} />,
    },
  };

  return (
    <div className="space-y-4">
      <PortableText components={components} value={value} />
    </div>
  );
};