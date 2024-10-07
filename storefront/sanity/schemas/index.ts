import categories from "./documents/categories";
import collection from "./documents/collection";
import modularPage from "./documents/modular-page";
import product from "./documents/product";
import {cta} from "./objects/cta";
import {link} from "./objects/link";
import {ogImage} from "./objects/og-image";
import {lightPtBody, ptBody} from "./objects/pt-body";
import {sectionsBody} from "./objects/sections-body";
import {seo} from "./objects/seo";
import spot from "./objects/spot";
import sections from "./sections";
import {footer} from "./singletons/footer";
import home from "./singletons/home";
import {notFound} from "./singletons/not-found";
import {settings} from "./singletons/settings";

const schemas = [
  modularPage,
  seo,
  ogImage,
  cta,
  link,
  spot,
  settings,
  home,
  ptBody,
  lightPtBody,
  footer,
  notFound,
  ...sections,
  sectionsBody,
  product,
  collection,
  categories,
];

export default schemas;
