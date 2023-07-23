
# Adeptivity

A plugin for Adeptivity

# Installation

Be sure to intall [Adeptivity theme](https://github.com/meykiacs/adeptivity) first.

- Run `composer install`
- Run `npm install`
- Run `npm run build`
- Create a directory named `lectures` in the `wp-content/uploads` directory
- Copy the following files and directories to your plugin directory
  - `build/`
  - `fonts/`
  - `img/`
  - `includes/`
  - `src/`
  - `styles/`
  - `vendor/`
  - `adeptivity.php`
- Create a *Page* called *Dashboard* and put a `dashboard` block in its content area.
- Create a *Page* called *Login* and put an `auth` block in its content area.
- In Your Wordpress installation:
  - Go to *Settings>Permalinks* and set the *permalink structure* to **Post name**
  - Go to *Settings>Reading* and set *Your homepage displays* to **A static page**. Set Homepage to `Dashboard`. Set *Post page* to any other page.
  