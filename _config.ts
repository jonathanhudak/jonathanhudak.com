import lume from "lume/mod.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
import jsx from "lume/plugins/jsx.ts";
import mdx from "lume/plugins/mdx.ts";
import pug from "lume/plugins/pug.ts";
import metas from "lume/plugins/metas.ts";

const site = lume({
  src: "./src",
});

site.use(lightningcss());
site.use(jsx());
site.use(mdx());
site.use(pug());
site.use(metas());

export default site;
