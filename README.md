# ingoresearch.org

This repository contains the code for generating [ingoresearch.org](https://ingoresearch.org).

## Pelican

The site is generated with [Pelican](http://docs.getpelican.com/en/stable/), a static site generator written in Python. It's easiest to run with a virtual environment:

```
cd path-to-this-directory
virtualenv -p python3 pelican
source pelican/bin/activate
pip3 install -r requirements.txt
```

Once the virtual environment is running, you can use the Makefile to generate the site. Here are the most common options:

- `make devserver`: Generate the site and serve locally at http://localhost:8000
- `make html`: Generate the site without serving it
- `make rsync_upload`: Generate the site and upload it to a remote server via ssh and rsync. Configure the server destination in the Makefile

To stop the virtual environment, run `deactivate`. To restart it, run `source pelican/bin/activate` from this directory.
