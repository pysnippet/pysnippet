const modules = /(?!^\s*(?:import|from)\s(?:string|re|difflib|textwrap|unicodedata|stringprep|readline|rlcompleter|struct|codecs|datetime|zoneinfo|calendar|collections|collections\\.abc|heapq|bisect|array|weakref|types|copy|pprint|reprlib|enum|graphlib|numbers|math|cmath|decimal|fractions|random|statistics|itertools|functools|operator|pathlib|os\\.path|fileinput|stat|filecmp|tempfile|glob|fnmatch|linecache|shutil|pickle|copyreg|shelve|marshal|dbm|sqlite3|zlib|gzip|bz2|lzma|zipfile|tarfile|csv|configparser|netrc|plistlib|hashlib|hmac|secrets|os|io|time|argparse|getopt|logging|logging\\.config|logging\\.handlers|getpass|curses|curses\\.textpad|curses\\.ascii|curses\\.panel|platform|errno|ctypes|threading|multiprocessing|multiprocessing\\.shared_memory|concurrent\\.futures|subprocess|sched|queue|contextvars|_thread|asyncio|socket|ssl|select|selectors|signal|mmap|email|json|mailbox|mimetypes|base64|binhex|binascii|quopri|html|html\\.parser|html\\.entities|xml\\.etree\\.ElementTree|xml\\.dom|xml\\.dom\\.minidom|xml\\.dom\\.pulldom|xml\\.sax|xml\\.sax\\.handler|xml\\.sax\\.saxutils|xml\\.sax\\.xmlreader|xml\\.parsers\\.expat|webbrowser|wsgiref|urllib|urllib\\.request|urllib\\.response|urllib\\.parse|urllib\\.error|urllib\\.robotparser|http|http\\.client|ftplib|poplib|imaplib|smtplib|uuid|socketserver|http\\.server|http\\.cookies|http\\.cookiejar|xmlrpc|xmlrpc\\.client|xmlrpc\\.server|ipaddress|wave|colorsys|gettext|locale|turtle|cmd|shlex|tkinter|tkinter\\.colorchooser|tkinter\\.font|tkinter\\.messagebox|tkinter\\.scrolledtext|tkinter\\.dnd|tkinter\\.ttk|tkinter\\.tix|typing|pydoc|doctest|unittest|unittest\\.mock|unittest\\.mock|test|test\\.support|test\\.support\\.socket_helper|test\\.support\\.script_helper|test\\.support\\.bytecode_helper|test\\.support\\.threading_helper|test\\.support\\.os_helper|test\\.support\\.import_helper|test\\.support\\.warnings_helper|bdb|faulthandler|pdb|timeit|trace|tracemalloc|distutils|ensurepip|venv|zipapp|sys|sysconfig|builtins|__main__|warnings|dataclasses|contextlib|abc|atexit|traceback|__future__|gc|inspect|site|code|codeop|zipimport|pkgutil|modulefinder|runpy|importlib|ast|symtable|token|keyword|tokenize|tabnanny|pyclbr|py_compile|compileall|dis|pickletools|msvcrt|winreg|winsound|posix|pwd|grp|termios|tty|pty|fcntl|resource|syslog|aifc|asynchat|asyncore|audioop|cgi|cgitb|chunk|crypt|imghdr|imp|mailcap|msilib|nis|nntplib|optparse|ossaudiodev|pipes|smtpd|sndhdr|spwd|sunau|telnetlib|uu|xdrlib)\b)^\s*(?:import|from)\s(\S+)/gm;

const elements = [
    ["py-env", {}],
    ["link", {type: "text/css", rel: "stylesheet", href: "https://pyscript.net/alpha/pyscript.css"}],
    ["script", {defer: "true", type: "text/javascript", src: "https://pyscript.net/alpha/pyscript.js"}],
];

for (let [tagName, attributes] of elements) {
    let element = document.createElement(tagName);
    Object.entries(attributes).forEach(args => element.setAttribute(...args));
    document.body.appendChild(element);
}

document.addEventListener("DOMContentLoaded", () => {
    const pyEnv = document.querySelector("py-env");
    const pyScript = document.createElement("py-script");
    pyScript.innerHTML = document.scripts[document.scripts.length - 1].innerText.trim();
    pyEnv.innerHTML = " - " + [...new Set([...pyScript.innerHTML.matchAll(modules)].map(m => m[1]))].join("\n - ");
    document.body.appendChild(pyScript);
});