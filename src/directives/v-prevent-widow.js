export default {
  mounted(el) {
    fixWidows(el);
  },
  updated(el) {
    fixWidows(el);
  },
};

function fixWidows(el) {
  if (!el) return;

  const prepositions = [
    'in', 'on', 'at', 'by', 'for', 'with', 'about', 'against',
    'between', 'into', 'through', 'during', 'before', 'after',
    'above', 'below', 'to', 'from', 'up', 'down', 'off', 'over', 'under',
    'again', 'further', 'then', 'once', 'of', 'and', 'but', 'or', 'nor'
  ];

  const walker = document.createTreeWalker(
    el,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );

  let node;
  while ((node = walker.nextNode())) {
    if (!node.nodeValue.trim()) continue;

    const sentences = node.nodeValue.split(/([.!?])/g);

    for (let i = 0; i < sentences.length; i += 2) {
      let sentence = sentences[i].trim();
      if (!sentence) continue;

      // Разбиваем на слова
      const words = sentence.split(/\s+/);
      const lastWordIndex = words.length - 1;

      if (lastWordIndex > 0) {
        // Если последний или предпоследний слово — предлог, объединяем с предыдущим
        if (prepositions.includes(words[lastWordIndex].toLowerCase())) {
          words[lastWordIndex - 1] += '\u00A0' + words[lastWordIndex];
          words.pop();
        } else if (prepositions.includes(words[lastWordIndex - 1].toLowerCase())) {
          words[lastWordIndex - 1] += '\u00A0' + words[lastWordIndex];
          words.pop();
        } else {
          // Иначе просто заменяем последний пробел на неразрывный
          words[lastWordIndex - 1] += '\u00A0' + words[lastWordIndex];
          words.pop();
        }
      }

      sentences[i] = words.join(' ');

      // Добавляем пробел после знака препинания, если его нет
      if (sentences[i + 1] && !/^\s/.test(sentences[i + 1])) {
        sentences[i + 1] += ' ';
      }
    }

    node.nodeValue = sentences.join('');
  }
}