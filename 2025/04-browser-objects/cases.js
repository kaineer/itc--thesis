const cases = (
[
  {
    "title": "Базовые объекты браузера",
    "html": "",
    "js": "const messages = [];\nmessages.push(\"typeof window: \" + typeof window);\nmessages.push(\"typeof document: \" + typeof document);\nmessages.push(\"typeof document.body: \" + typeof document.body);\nmessages.push(\"typeof navigator: \" + typeof navigator);\n\ndocument.querySelector(\"#root\").innerHTML = (\n  \"<div class='messages'>\" +\n  messages.join(\"<br>\") +\n  \"</div>\"\n);\n"
  },
  {
    "title": "querySelector",
    "html": "<ul>\n  <li>Первый элемент</li>\n  <li>Второй элемент</li>\n</ul>\n",
    "js": "const li = document.querySelector(\"#root li\");\nli.classList.add(\"marked\");\n"
  },
  {
    "title": "querySelectorAll",
    "html": "<ul>\n  <li>Первый элемент</li>\n  <li>Второй элемент</li>\n</ul>\n",
    "js": "const lis = document.querySelectorAll(\"#root li\");\nlis.forEach((li) => li.classList.add(\"marked\"));\n"
  },
  {
    "title": "children",
    "html": "<ul>\n  <li>Первый элемент</li>\n  <li>Второй элемент</li>\n</ul>\n",
    "js": "const ul = document.querySelector(\"#root ul\");\nconst lis = [...ul.children];\nlis.forEach((li) => li.classList.add(\"marked\"));\n"
  },
  {
    "title": "parentElement",
    "html": "<div class=\"container\">\n  <div class=\"item\"></div>\n</div>\n",
    "js": "const item = document.querySelector(\"#root .item\");\nconst container = item.parentElement;\ncontainer.classList.add(\"marked\");\n"
  },
  {
    "title": "closest()",
    "html": "<div class=\"container\">\n  <div class=\"item\">\n    <div class=\"target\"></div>\n  </div>\n</div>\n",
    "js": "const target = document.querySelector(\"#root .target\");\nconst container = target.closest(\".container\");\ncontainer.classList.add(\"marked\");\n"
  },
  {
    "title": "className",
    "html": "<div class=\"container\">\n  <div class=\"target another-class\">\n  </div>\n  <div class=\"messages\">\n  </div>\n</div>\n",
    "js": "const target = document.querySelector(\"#root .target\");\nconst message = document.querySelector(\"#root .messages\");\nmessage.innerHTML = target.className;\n"
  },
  {
    "title": "dataset",
    "html": "<div class=\"container\">\n  <div class=\"target\" data-index=\"341\">\n  </div>\n  <div class=\"messages\">\n  </div>\n</div>\n",
    "js": "const target = document.querySelector(\"#root .target\");\nconst message = document.querySelector(\"#root .messages\");\nmessage.innerHTML = target.dataset.index;\n"
  },
  {
    "title": "input properties",
    "html": "<div class=\"container\">\n  <div>\n    <input class=\"text\" type=\"text\">\n  </div>\n  <div>\n    <input class=\"checkbox\" type=\"checkbox\">\n  </div>\n  <div class=\"messages\">\n  </div>\n</div>\n",
    "js": "const text = document.querySelector(\"#root .text\");\nconst cb = document.querySelector(\"#root .checkbox\");\nconst message = document.querySelector(\"#root .messages\");\nmessage.innerHTML = (\n  \"Text: \" + text.value + \"<br>\" +\n  \"Checked: \" + cb.checked\n);\n"
  },
  {
    "title": "Добавление элементов",
    "html": "<ul>\n  <li>Первый элемент</li>\n</ul>\n",
    "js": "const ul = document.querySelector(\"#root ul\");\nconst li = document.createElement(\"li\");\nli.textContent = \"Второй элемент\";\nul.append(li);\n"
  },
  {
    "title": "Удаление элементов",
    "html": "<ul>\n  <li>Первый элемент</li>\n  <li class=\"target\">Второй элемент</li>\n</ul>\n",
    "js": "const ul = document.querySelector(\"#root ul\");\nconst target = ul.querySelector(\".target\");\ntarget.remove();\n"
  },
  {
    "title": "Анимация",
    "html": "<div class=\"container\">\n  <div class=\"item\"></div>\n</div>\n",
    "js": "const item = document.querySelector(\"#root .item\");\nitem.animate([\n  { transform: 'translateX(0px)' },\n  { transform: 'translateX(800px)' },\n], {\n  duration: 1000\n});\n"
  }
]
);
