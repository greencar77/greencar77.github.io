let global_pylibs = {
    "values": {
        "builtin": [
            {
                "type": "class",
                "name": "str",
                "methods": [
                    {
                        "type": "method",
                        "name": "find"
                    },
                    {
                        "type": "method",
                        "name": "rfind"
                    },
                    {
                        "type": "method",
                        "name": "isalpha"
                    },
                    {
                        "type": "method",
                        "name": "join"
                    },
                    {
                        "type": "method",
                        "name": "replace"
                    },
                    {
                        "type": "method",
                        "name": "strip"
                    },
                    {
                        "type": "method",
                        "name": "split"
                    },
                    {
                        "type": "method",
                        "name": "splitlines"
                    },
                    {
                        "type": "method",
                        "name": "startswith"
                    },
                    {
                        "type": "method",
                        "name": "upper"
                    },
                    {
                        "type": "method",
                        "name": "lower"
                    },
                    {
                        "type": "method",
                        "name": "casefold"
                    },
                    {
                        "type": "method",
                        "name": "decode"
                    }
                ]
            },
            {
                "type": "class",
                "name": "list",
                "methods": [
                    {
                        "type": "method",
                        "name": "append"
                    },
                    {
                        "type": "method",
                        "name": "index"
                    }
                ]
            },
            {
                "type": "class",
                "name": "dict",
                "methods": [
                    {
                        "type": "method",
                        "name": "items"
                    },
                    {
                        "type": "method",
                        "name": "get"
                    }
                ]
            },
            {
                "type": "class",
                "name": "TextIOWrapper",
                "methods": [
                    {
                        "type": "method",
                        "name": "read"
                    },
                    {
                        "type": "method",
                        "name": "read"
                    },
                    {
                        "type": "method",
                        "name": "readline"
                    },
                    {
                        "type": "method",
                        "name": "readlines"
                    },
                    {
                        "type": "method",
                        "name": "write"
                    },
                    {
                        "type": "method",
                        "name": "tell"
                    },
                    {
                        "type": "method",
                        "name": "seek"
                    }
                ]
            },
            {
                "type": "method",
                "name": "file"
            }
        ],
        "object": [
            {
                "type": "method",
                "name": "__init__"
            },
            {
                "type": "method",
                "name": "__iter__"
            },
            {
                "type": "method",
                "name": "__next__"
            },
            {
                "type": "method",
                "name": "__repr__"
            },
            {
                "type": "method",
                "name": "__str__"
            },
            {
                "type": "method",
                "name": "__bytes__"
            },
            {
                "type": "method",
                "name": "__eq__"
            },
            {
                "type": "method",
                "name": "__abs__"
            },
            {
                "type": "method",
                "name": "__bool__"
            }
        ],
        "os": [
            {
                "type": "method",
                "name": "getcwd",
                "docUrl": "https://docs.python.org/3/library/os.html#os.getcwd"
            },
            {
                "type": "method",
                "name": "listdir",
                "docUrl": "https://docs.python.org/3/library/os.html#os.listdir"
            },
            {
                "type": "method",
                "name": "makedirs",
                "docUrl": "https://docs.python.org/3/library/os.html#os.makedirs"
            },
            {
                "type": "method",
                "name": "mkdir",
                "docUrl": "https://docs.python.org/3/library/os.html#os.mkdir"
            },
            {
                "type": "method",
                "name": "chdir",
                "docUrl": "https://docs.python.org/3/library/os.html#os.chdir"
            },
            {
                "type": "method",
                "name": "popen",
                "docUrl": "https://docs.python.org/3/library/os.html#os.popen"
            },
            {
                "type": "method",
                "name": "fchdir",
                "docUrl": "https://docs.python.org/3/library/os.html#os.fchdir"
            },
            {
                "type": "method",
                "name": "fspath",
                "docUrl": "https://docs.python.org/3/library/os.html#os.fspath"
            },
            {
                "type": "method",
                "name": "walk",
                "docUrl": "https://docs.python.org/3/library/os.html#os.walk"
            },
            {
                "type": "method",
                "name": "getenv",
                "docUrl": "https://docs.python.org/3/library/os.html#os.getenv"
            },
            {
                "type": "method",
                "name": "getgid",
                "docUrl": "https://docs.python.org/3/library/os.html#os.getgid"
            },
            {
                "type": "method",
                "name": "getgroups",
                "docUrl": "https://docs.python.org/3/library/os.html#os.getgroups"
            },
            {
                "type": "method",
                "name": "getpid",
                "docUrl": "https://docs.python.org/3/library/os.html#os.getpid"
            },
            {
                "type": "method",
                "name": "uname",
                "docUrl": "https://docs.python.org/3/library/os.html#os.uname"
            },
            {
                "type": "method",
                "name": "fdopen",
                "docUrl": "https://docs.python.org/3/library/os.html#os.fdopen"
            },
            {
                "type": "method",
                "name": "fchmod",
                "docUrl": "https://docs.python.org/3/library/os.html#os.fchmod"
            },
            {
                "type": "class",
                "name": "IOBase",
                "methods": [
                    {
                        "type": "method",
                        "name": "fileno"
                    }
                ]
            }
        ],
        "os.path": [
            {
                "type": "method",
                "name": "isfile",
                "docUrl": "https://docs.python.org/3/library/os.path.html#os.path.isfile"
            },
            {
                "type": "method",
                "name": "isdir",
                "docUrl": "https://docs.python.org/3/library/os.path.html#os.path.isdir"
            },
            {
                "type": "method",
                "name": "exists",
                "docUrl": "https://docs.python.org/3/library/os.path.html#os.path.exists"
            },
            {
                "type": "method",
                "name": "join",
                "docUrl": "https://docs.python.org/3/library/os.path.html#os.path.join"
            },
            {
                "type": "method",
                "name": "relpath",
                "docUrl": "https://docs.python.org/3/library/os.path.html#os.path.relpath"
            },
            {
                "type": "method",
                "name": "split",
                "docUrl": "https://docs.python.org/3/library/os.path.html#os.path.split"
            }
        ],
        "shutil": [
            {
                "type": "method",
                "name": "copyfile",
                "docUrl": "https://docs.python.org/3/library/shutil.html#shutil.copyfile"
            },
            {
                "type": "method",
                "name": "copytree",
                "docUrl": "https://docs.python.org/3/library/shutil.html#shutil.copytree"
            },
            {
                "type": "method",
                "name": "rmtree",
                "docUrl": "https://docs.python.org/3/library/shutil.html#shutil.rmtree"
            },
            {
                "type": "method",
                "name": "move",
                "docUrl": "https://docs.python.org/3/library/shutil.html#shutil.move"
            }
        ],
        "re": [
            {
                "type": "method",
                "name": "match"
            },
            {
                "type": "method",
                "name": "search"
            }
        ],
        "json": [
            {
                "type": "method",
                "name": "dump"
            },
            {
                "type": "method",
                "name": "dumps"
            },
            {
                "type": "method",
                "name": "load"
            },
            {
                "type": "method",
                "name": "loads"
            }
        ],
        "random": [
            {
                "type": "method",
                "name": "choice"
            }
        ],
        "datetime": [
            {
                "type": "method",
                "name": "now"
            }
        ],
        "string": [
            {
                "type": "method",
                "name": "Template"
            }
        ],
        "array": [],
        "struct": [],
        "csv": [
            {
                "type": "method",
                "name": "reader"
            },
            {
                "type": "method",
                "name": "writer"
            }
        ],
        "zipfile": [
            {
                "type": "class",
                "name": "ZipInfo",
                "methods": []
            },
            {
                "type": "class",
                "name": "ZipFile",
                "methods": []
            }
        ],
        "xml.etree.ElementTree": [
            {
                "type": "method",
                "name": "parse",
                "docUrl": "https://docs.python.org/3/library/xml.etree.elementtree.html#xml.etree.ElementTree.parse"
            },
            {
                "type": "class",
                "name": "ElementTree",
                "methods": [
                    {
                        "type": "method",
                        "name": "find",
                        "docUrl": "https://docs.python.org/3/library/xml.etree.elementtree.html#xml.etree.ElementTree.ElementTree.find"
                    },
                    {
                        "type": "method",
                        "name": "findall",
                        "docUrl": "https://docs.python.org/3/library/xml.etree.elementtree.html#xml.etree.ElementTree.ElementTree.findall"
                    },
                    {
                        "type": "method",
                        "name": "iter",
                        "docUrl": "https://docs.python.org/3/library/xml.etree.elementtree.html#xml.etree.ElementTree.ElementTree.iter"
                    },
                    {
                        "type": "method",
                        "name": "getroot",
                        "docUrl": "https://docs.python.org/3/library/xml.etree.elementtree.html#xml.etree.ElementTree.ElementTree.getroot"
                    }
                ],
                "docUrl": "https://docs.python.org/3/library/xml.etree.elementtree.html#xml.etree.ElementTree.ElementTree"
            },
            {
                "type": "class",
                "name": "Element",
                "methods": [
                    {
                        "type": "method",
                        "name": "findall",
                        "docUrl": "https://docs.python.org/3/library/xml.etree.elementtree.html#xml.etree.ElementTree.Element.findall"
                    },
                    {
                        "type": "method",
                        "name": "get",
                        "docUrl": "https://docs.python.org/3/library/xml.etree.elementtree.html#xml.etree.ElementTree.Element.get"
                    }
                ],
                "docUrl": "https://docs.python.org/3/library/xml.etree.elementtree.html#xml.etree.ElementTree.Element"
            }
        ],
        "xml.dom.minidom": [
            {
                "type": "method",
                "name": "parse"
            },
            {
                "type": "method",
                "name": "parseString"
            }
        ],
        "weasyprint": [
            {
                "type": "method",
                "name": "HTML"
            },
            {
                "type": "method",
                "name": "CSS"
            }
        ],
        "requests": [
            {
                "type": "method",
                "name": "get"
            },
            {
                "type": "method",
                "name": "post"
            }
        ],
        "bs4": [
            {
                "type": "class",
                "name": "BeautifulSoup",
                "methods": [
                    {
                        "type": "method",
                        "name": "prettify"
                    },
                    {
                        "type": "method",
                        "name": "find"
                    },
                    {
                        "type": "method",
                        "name": "find_all"
                    },
                    {
                        "type": "method",
                        "name": "get_text"
                    }
                ]
            },
            {
                "type": "class",
                "name": "Tag",
                "methods": [
                    {
                        "type": "method",
                        "name": "functools"
                    }
                ]
            }
        ],
        "http.cookies": [],
        "http.server": [
            {
                "type": "class",
                "name": "BaseHTTPRequestHandler",
                "methods": [
                    {
                        "type": "method",
                        "name": "send_response"
                    },
                    {
                        "type": "method",
                        "name": "save_request"
                    },
                    {
                        "type": "method",
                        "name": "send_header"
                    },
                    {
                        "type": "method",
                        "name": "end_headers"
                    },
                    {
                        "type": "method",
                        "name": "do_GET"
                    },
                    {
                        "type": "method",
                        "name": "do_POST"
                    }
                ]
            },
            {
                "type": "class",
                "name": "HTTPServer",
                "methods": [
                    {
                        "type": "method",
                        "name": "serve_forever"
                    }
                ]
            }
        ],
        "pathlib": [],
        "contextlib": [],
        "sys": [
            {
                "type": "method",
                "name": "stdout:a"
            }
        ],
        "pyperclip": [
            {
                "type": "method",
                "name": "copy"
            },
            {
                "type": "method",
                "name": "paste"
            }
        ],
        "numpy": [
            {
                "type": "method",
                "name": "int16",
                "docUrl": "https://numpy.org/devdocs/reference/generated/numpy.int16.html"
            },
            {
                "type": "class",
                "name": "ndarray",
                "methods": [
                    {
                        "type": "method",
                        "name": "ndim:a"
                    },
                    {
                        "type": "method",
                        "name": "shape:a"
                    },
                    {
                        "type": "method",
                        "name": "size:a"
                    },
                    {
                        "type": "method",
                        "name": "dtype:a"
                    },
                    {
                        "type": "method",
                        "name": "itemsize:a"
                    },
                    {
                        "type": "method",
                        "name": "data:a"
                    },
                    {
                        "type": "method",
                        "name": "reshape"
                    },
                    {
                        "type": "method",
                        "name": "sum"
                    },
                    {
                        "type": "method",
                        "name": "ravel"
                    }
                ]
            },
            {
                "type": "method",
                "name": "array",
                "docUrl": "https://numpy.org/devdocs/reference/generated/numpy.array.html"
            },
            {
                "type": "method",
                "name": "arange",
                "docUrl": "https://numpy.org/devdocs/reference/generated/numpy.arange.html"
            },
            {
                "type": "method",
                "name": "lindpace",
                "docUrl": "https://numpy.org/devdocs/reference/generated/numpy.lindpace.html"
            },
            {
                "type": "method",
                "name": "sin",
                "docUrl": "https://numpy.org/devdocs/reference/generated/numpy.sin.html"
            },
            {
                "type": "method",
                "name": "exp",
                "docUrl": "https://numpy.org/devdocs/reference/generated/numpy.exp.html"
            },
            {
                "type": "method",
                "name": "sqrt",
                "docUrl": "https://numpy.org/devdocs/reference/generated/numpy.sqrt.html"
            },
            {
                "type": "method",
                "name": "fromfunction",
                "docUrl": "https://numpy.org/devdocs/reference/generated/numpy.fromfunction.html"
            },
            {
                "type": "method",
                "name": "floor",
                "docUrl": "https://numpy.org/devdocs/reference/generated/numpy.floor.html"
            },
            {
                "type": "method",
                "name": "zeros",
                "docUrl": "https://numpy.org/devdocs/reference/generated/numpy.zeros.html"
            },
            {
                "type": "method",
                "name": "ones",
                "docUrl": "https://numpy.org/devdocs/reference/generated/numpy.ones.html"
            },
            {
                "type": "method",
                "name": "mean",
                "docUrl": "https://numpy.org/devdocs/reference/generated/numpy.mean.html"
            }
        ],
        "numpy.random": [
            {
                "type": "method",
                "name": "default_rng"
            },
            {
                "type": "method",
                "name": "rand"
            },
            {
                "type": "method",
                "name": "randint"
            },
            {
                "type": "class",
                "name": "Generator",
                "methods": [
                    {
                        "type": "method",
                        "name": "random"
                    }
                ]
            }
        ],
        "matplotlib.pyplot": [
            {
                "type": "method",
                "name": "subplots"
            },
            {
                "type": "method",
                "name": "fill_between"
            },
            {
                "type": "method",
                "name": "bar"
            },
            {
                "type": "method",
                "name": "setp"
            },
            {
                "type": "class",
                "name": "Figure",
                "methods": []
            },
            {
                "type": "class",
                "name": "Axes",
                "methods": [
                    {
                        "type": "method",
                        "name": "bar"
                    },
                    {
                        "type": "method",
                        "name": "barh"
                    },
                    {
                        "type": "method",
                        "name": "plot"
                    },
                    {
                        "type": "method",
                        "name": "set_title"
                    },
                    {
                        "type": "method",
                        "name": "grid"
                    },
                    {
                        "type": "method",
                        "name": "annotate"
                    },
                    {
                        "type": "method",
                        "name": "set_ylim"
                    },
                    {
                        "type": "method",
                        "name": "get_xticklabels"
                    },
                    {
                        "type": "method",
                        "name": "read_csv"
                    },
                    {
                        "type": "method",
                        "name": "to_datetime"
                    }
                ]
            }
        ],
        "pandas": [
            {
                "type": "class",
                "name": "DataFrame",
                "methods": [
                    {
                        "type": "method",
                        "name": "head",
                        "docUrl": "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.head.html"
                    },
                    {
                        "type": "method",
                        "name": "tail",
                        "docUrl": "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.tail.html"
                    },
                    {
                        "type": "method",
                        "name": "info",
                        "docUrl": "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.info.html"
                    },
                    {
                        "type": "method",
                        "name": "describe",
                        "docUrl": "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.describe.html"
                    },
                    {
                        "type": "method",
                        "name": "plot",
                        "docUrl": "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.plot.html"
                    },
                    {
                        "type": "method",
                        "name": "hist",
                        "docUrl": "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.hist.html"
                    },
                    {
                        "type": "method",
                        "name": "corr",
                        "docUrl": "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.corr.html"
                    },
                    {
                        "type": "method",
                        "name": "cov",
                        "docUrl": "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.cov.html"
                    },
                    {
                        "type": "method",
                        "name": "groupby",
                        "docUrl": "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.groupby.html"
                    }
                ]
            }
        ],
        "mysql.connector": [
            {
                "type": "method",
                "name": "connect"
            },
            {
                "type": "class",
                "name": "CMySQLConnection",
                "methods": [
                    {
                        "type": "method",
                        "name": "cursor"
                    },
                    {
                        "type": "method",
                        "name": "commit"
                    },
                    {
                        "type": "method",
                        "name": "close"
                    }
                ]
            },
            {
                "type": "class",
                "name": "CMySQLCursor",
                "methods": [
                    {
                        "type": "method",
                        "name": "lastrowid:a"
                    },
                    {
                        "type": "method",
                        "name": "execute"
                    },
                    {
                        "type": "method",
                        "name": "fetchone"
                    },
                    {
                        "type": "method",
                        "name": "fetchall"
                    },
                    {
                        "type": "method",
                        "name": "close"
                    }
                ]
            }
        ],
        "Ursina": []
    }
};