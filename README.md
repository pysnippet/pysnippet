# PySnippet <img src="https://github.com/pysnippet.png" align="right" height="64" />

[![StackOverflow](https://img.shields.io/badge/StackOverflow-Preview-blue?logo=stack-overflow&logoColor=white)](https://meta.stackoverflow.com/questions/400919/is-it-possible-to-have-python-code-snippets-in-stack-overflow/418977#418977)
[![License](https://img.shields.io/badge/license-Apache_2.0-blue.svg)](https://github.com/pysnippet/pysnippet/blob/latest/LICENSE)
[![snippet.js](https://img.badgesize.io/https:/raw.githubusercontent.com/pysnippet/pysnippet/latest/snippet.js?label=snippet.js)](https://cdn.jsdelivr.net/gh/pysnippet/pysnippet@latest/snippet.js)
[![snippet.min.js](https://img.badgesize.io/https:/raw.githubusercontent.com/pysnippet/pysnippet/latest/snippet.min.js?label=snippet.min.js)](https://cdn.jsdelivr.net/gh/pysnippet/pysnippet@latest/snippet.min.js)

PySnippet is a JavaScript plugin that allows using Python snippets on StackOverflow, adding just one line of code. The
plugin uses PyScript to run a python code in the browser. Using the PySnippet is effective if you want to show an output
of simple things that primarily use neither OS nor drivers.

## ![](https://user-images.githubusercontent.com/44609997/206767057-f1080a93-cfec-4f43-bfb0-7ffe1dc135ec.svg) Open CDN

The CDN is powered by [jsdelivr](https://www.jsdelivr.com/?docs=gh).

```text
https://cdn.jsdelivr.net/gh/pysnippet/pysnippet@latest/snippet.js
```

```text
https://cdn.jsdelivr.net/gh/pysnippet/pysnippet@latest/snippet.min.js
```

## ![](https://user-images.githubusercontent.com/44609997/206767090-c8f31371-3fc2-4920-a621-e44a05139733.svg) Usage

1. Add the plugin as an external library in the `HTML` section.
   ```html
   <script src="https://cdn.jsdelivr.net/gh/pysnippet/pysnippet@latest/snippet.js"></script>
   ```
2. Paste your Python code into the `JavaScript` section.
3. Uncheck the "Show console" checkbox to hide the JavaScript console. The states of rest checkboxes do not matter and
   depend on your choice.
    - [ ] Show console
    - [ ] Use BabelJS / ES2015
    - [ ] Hide snippet by default

## License

Copyright (C) 2022 Artyom Vancyan. [Apache 2.0](https://github.com/pysnippet/pysnippet/blob/latest/LICENSE)
