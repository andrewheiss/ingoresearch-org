#!/usr/bin/env python3

# Site development flag
DEVELOPING_SITE = True

DELETE_OUTPUT_DIRECTORY = True


# ------------------
# Site information
# ------------------
AUTHOR = 'Andrew Heiss'
SITENAME = 'INGO Research'
DESCRIPTION = ''
SITEURL = ''

PATH = 'content'

TIMEZONE = 'America/New_York'
DEFAULT_DATE_FORMAT = '%Y-%m-%d'
DEFAULT_LANG = 'en'

TYPOGRIFY = True  # Nice typographic things
TYPOGRIFY_IGNORE_TAGS = ['h1']

GOOGLE_ANALYTICS = ''


# ---------------
# Site building
# ---------------
# Theme
THEME = 'theme'

# Folder where everything lives
PATH = 'content'

PAGE_URL = '{slug}/'
PAGE_SAVE_AS = '{slug}/index.html'

STATIC_PATHS = ['.htaccess', 'robots.txt', 'files']
READERS = {'html': None}  # Don't parse HTML files

MARKDOWN = {
    'extension_configs': {
        'markdown.extensions.smarty': {},
        'markdown.extensions.extra': {},
        'markdown.extensions.footnotes': {},
        'markdown.extensions.meta': {},
        'markdown.extensions.toc': {},
        'markdown.extensions.codehilite': {'css_class': 'codehilite'},
        'markdown.extensions.headerid': {'level': 2}
    },
    'output_format': 'html5',
}

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

PLUGINS = ['pelican_alias']

# ------------
# Site items
# ------------
MENUITEMS = [('Amicable Contempt', '/amicable-contempt/'),
             ('Data', '/data/'),
             ('About the primary researcher', 'https://www.andrewheiss.com')]

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True

# ---------------
# Jinja filters
# ---------------
import jinja2
import markdown
from bs4 import BeautifulSoup

def pure_table(html):
    soup = BeautifulSoup(html, 'html.parser')

    for table_tag in soup.find_all('table'):
        table_tag['class'] = table_tag.get('class', []) + ['pure-table']

    return jinja2.Markup(soup)


JINJA_FILTERS = {'pure_table': pure_table}
