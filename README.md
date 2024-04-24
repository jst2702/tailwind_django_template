# tailwind_django_template
Template (done on windows, but should work fine on linux)

## Getting started
Similar video instructions available here: https://www.youtube.com/watch?v=76n7sqZocSk

Create your poetry project
```
poetry new <project_name>
```
add django dependency
```
poetry add django
```
create a django project in the project folder
```
django-admin startproject <project_name> .
```
Run migration
```
python manage.py migrate
```
Run server
```
python manage.py runserver
```
Install project
```
poetry install
```

## Settings

Follow instructions provided here, after installing `django-tailwind`:
https://django-tailwind.readthedocs.io/en/latest/installation.html Up to **step 6**.

Install node if you don't have it (check with `npm` command).


Add your `npm.cmd` filepath to your `settings.py`<br>
You can find it with the command:
```
where npm
```
```
NPM_BIN_PATH = r"C:\Program Files\nodejs\npm.cmd"
```

Resume instructions from **Step 7-8** (we will not use the `base.html` file instead, opting for more elegance).

## Adding apps

This is django so lets show how to add another app. Call it `crm`
```
django-admin startapp crm
```
of `csp` if it's a content sharing platform, ect.

Add your app to the `settings.py`

Configure urls, views and routing.

Create a `crm/urls.py` file and add

Resume instruction from **Step 9**

```
poetry add django-browser-reload
```

## Startup the servers
Startup the tailwind server with 
```
python manage.py tailwind start
```

Startup your main server with 
```
python manage.py runserver
```

## For live reloads
```
poetry add django-livereload-server
``` 
Add `livereload` to `INSTALLED_APPS`<br>
Add `livereload.middleware.LiveReloadScript` to your `MIDDLEWARE`
```
python manage.py tailwind start
python manage.py livereload
python manage.py runserver
```
```
tailwind_django_template
├─ all-project-assets
│  │  ├─ bg-dots.svg
│  │  ├─ favicon-32x32.png
│  │  ├─ icon-arrow.svg
│  │  ├─ icon-close.svg
├─ crm
│  ├─ admin.py
│  ├─ apps.py
│  ├─ migrations
│  │  └─ __init__.py
│  ├─ models.py
│  ├─ templates
│  │  └─ crm
│  │     ├─ index.html
│  │     └─ signup.html
│  ├─ tests.py
│  ├─ urls.py
│  ├─ views.py
│  └─ __init__.py
├─ LICENSE
├─ manage.py
├─ poetry.lock
├─ pyproject.toml
├─ README.md
├─ tailwind_django_template
│  ├─ asgi.py
│  ├─ settings.py
│  ├─ urls.py
│  ├─ wsgi.py
│  └─ __init__.py
├─ tests
│  └─ __init__.py
└─ theme
   ├─ apps.py
   ├─ README.md
   ├─ static
   │  └─ css
   ├─ static_src
   │  ├─ .gitignore
   │  ├─ node_modules
   │  ├─ package-lock.json
   │  ├─ package.json
   │  ├─ postcss.config.js
   │  ├─ src
   │  │  └─ styles.css
   │  └─ tailwind.config.js
   ├─ templates
   │  └─ base.html
   └─ __init__.py

```