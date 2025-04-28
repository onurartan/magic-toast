// @ts-nocheck

const purgeTwVars = () => {
  return {
    postcssPlugin: "purge-tw-vars",
    Once(root) {
      root.walkDecls((decl) => {
        if (
          decl.prop.startsWith("--tw-") &&
          !decl.prop.startsWith("--tw-toast_theme")
        ) {
          decl.remove();
        }
      });
    },
  };
};

purgeTwVars.postcss = true;

const patchTwVarUsages = () => {
  return {
    postcssPlugin: "patch-tw-var-usages",
    Declaration(decl) {
      if (decl.value && decl.value.includes("var(--tw-")) {
        decl.value = decl.value.replace(
          /var\(--tw-(?!toast_theme-)([^)\s]+)\)/g,
          "var(--tw-toast_theme-$1)"
        );
      }
    },
  };
};
patchTwVarUsages.postcss = true;

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),

    purgeTwVars(),
    patchTwVarUsages(),
  ],

  // plugins:  {
  //   tailwindcss: {},
  //   autoprefixer: {}
  // },
};
