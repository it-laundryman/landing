import type { Plugin } from "vite";
import { parse } from "@vue/compiler-sfc";

function fixWidows(text: string): string {
  if (!text) return text;

  // 1. Короткие слова (английские)
  const shortWords = /\b(?:a|an|the|in|on|at|to|of|is|it|by|or|as)\s/gi;
  text = text.replace(shortWords, match => match.trim() + "&nbsp;");

  // 2. "висячее слово" после точки
  const widowWord = /(\.\s)(\S+)\s/gi;
  text = text.replace(widowWord, (_m, before, word) => `${before}${word}&nbsp;`);

  return text;
}

export default function widowsPlugin(): Plugin {
  return {
    name: "vite-plugin-widows",
    enforce: "post",

    transformIndexHtml(html) {
      return fixWidows(html);
    },

    transform(code, id) {
      if (!id.endsWith(".vue")) return;

      const { descriptor } = parse(code);
      if (!descriptor.template) return code;

      const template = descriptor.template;
      const fixedContent = fixWidows(template.content);

      // безопасно заменяем template внутри <template>...</template>
      return code.replace(
        /<template(\s[^>]*)?>[\s\S]*?<\/template>/,
        `<template${template.attrs
          ? ' ' +
          Object.entries(template.attrs)
            .map(([k, v]) => (v === true ? k : k + '="' + v + '"'))
            .join(' ')
          : ''}>${fixedContent}</template>`
      );
    }
  };
}