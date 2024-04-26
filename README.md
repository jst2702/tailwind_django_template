# tailwind_django_template
This is a basic template (done on windows, but should work fine on linux) with some page and app examples of using tailwind with django. It uses this library for tailwind integration https://pypi.org/project/pytailwindcss/.

## Getting started
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
Run server to make sure this works
```
python manage.py runserver
```
Install project
```
poetry install
```

## Add statics
Create your `static` folder<br>
Then add static refs to your `settings.py` file
```
STATIC_URL = 'static/'
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static'),  # Additional directory for static files
    # Add more directories if needed
]
```
## Add pytailwindcss
```
poetry add pytailwindcss
```
create a folder in `./static/css`. <br>
Within that folder run :
```
tailwindcss init
```
and create an `input.css` file, ie.
```
/* input.css */

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom layer for h1 */
h1 {
  @apply text-4xl font-bold text-blue-500;
}
```
Set the content field to something appropriate to your project file structure, ie.
```
content: [
   '../templates/**/*.html',
   '../../templates/**/*.html',
   '../../**/templates/**/*.html',
],
```

Look at code in `./crm/templates/*.html` files for how to use basic tailwind styling from the app.

## Adding apps

This is django so lets show how to add another app. Call it `crm`
```
django-admin startapp crm
```
or `csp` if it's a content sharing platform, ect.

Add your app to the `settings.py`

Configure urls, views and routing. Look at the code files below for examples:
* `./tailwind_django_template/urls.py`
* `./crm/urls.py`
* `./crm/views.py`

## For live reloads and refreshes
```
poetry add django-livereload-server
poetry add django-browser-reload
``` 
Add `livereload` to `INSTALLED_APPS`<br>
Add the following middleware
```
"django_browser_reload.middleware.BrowserReloadMiddleware",
"livereload.middleware.LiveReloadScript",
```
## Run servers
All commands
tailwind (from `static/css` folder)
```
tailwindcss -i input.css -o output.css --watch
```
livereload (from root)
```
python manage.py livereload
```
django server (from root)
```
python manage.py runserver
```