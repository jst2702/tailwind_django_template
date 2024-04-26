# tailwind_django_template
Template (done on windows, but should work fine on linux)

Try installing this instead, honestly
https://pypi.org/project/pytailwindcss/

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

add `pytailwindcss` to your project
```
poetry add pytailwindcss
```
or
```
pip install pytailwindcss
```
create a `tailwind.config.js` file
```
tailwindcss init
```

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