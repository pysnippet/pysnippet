<p align="center">
    <img alt="" src="https://user-images.githubusercontent.com/46633744/175888700-bd690caf-312b-4340-824e-cc3808ae3b80.svg">
    The plugin allows demonstrating Python snippets at StackOverflow.
</p>

<div align="center">

![][stackoverflow-tag] [![][snippet-js-size]][snippet-js-cdn] [![][snippet-min-js-size]][snippet-min-js-cdn] [![][license-tag]][license-url]

[stackoverflow-tag]: https://img.shields.io/badge/StackOverflow-plugin-blue?logo=stack-overflow&logoColor=white
[snippet-js-size]: https://img.badgesize.io/https:/raw.githubusercontent.com/pysnippet/pysnippet/latest/snippet.js?label=snippet.js
[snippet-min-js-size]: https://img.badgesize.io/https:/raw.githubusercontent.com/pysnippet/pysnippet/latest/snippet.min.js?label=snippet.min.js
[snippet-js-cdn]: https://cdn.jsdelivr.net/gh/pysnippet/pysnippet@latest/snippet.js
[snippet-min-js-cdn]: https://cdn.jsdelivr.net/gh/pysnippet/pysnippet@latest/snippet.min.js
[license-tag]: https://img.shields.io/badge/License-Apache_2.0-blue.svg
[license-url]: https://opensource.org/licenses/Apache-2.0
</div>

---

Python is one of the most [popular tags](https://stackoverflow.com/tags?tab=popular) on StackOverflow. PySnippet is a JavaScript plugin that allows using Python snippets on StackOverflow, adding just one line of code. The plugin uses PyScript to run a python code in the browser. Using the PySnippet is effective if you want to show an output of simple things that primarily use neither OS nor drivers.

## ![](https://user-images.githubusercontent.com/46633744/175871148-93b50dba-a4c4-4225-a824-09f787c97e9e.svg) CDN

The sources have been published using the GitHub CDN of the <a href="https://www.jsdelivr.com/">jsdelivr</a>.
```text
https://cdn.jsdelivr.net/gh/pysnippet/pysnippet@latest/snippet.js
```
```text
https://cdn.jsdelivr.net/gh/pysnippet/pysnippet@latest/snippet.min.js
```

## ![](https://user-images.githubusercontent.com/46633744/175871486-2b21eeaa-7789-4ae0-afe9-0c6b516a5fa7.svg) Usage

 1. Add the plugin as an external library in the `HTML` section.
    ```html
    <script src="https://cdn.jsdelivr.net/gh/pysnippet/pysnippet@latest/snippet.js"></script>
    ```
 2. Paste your Python code into the `JavaScript` section.
 3. Make sure that you have unchecked all snippet options before saving.
    - [ ] Show console
    - [ ] Use BabelJS / ES2015
    - [ ] Hide snippet by default
