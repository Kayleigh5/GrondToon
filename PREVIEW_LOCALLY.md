# Preview the theme locally

### First setup:

Clone down the theme's repository

`cd` into the theme's directory

Create a file named `Gemfile` containing exactly:
```
source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins
```

In the same directory run:

`gem install bundler`

`bundle install`

### To serve:

`bundle exec jekyll serve`