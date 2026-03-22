# Personal Webpage

## Local development

This repo expects Ruby `3.2.0` via `.ruby-version`.

Fastest option from this repo:

```bash
./bin/bootstrap
./bin/server
```

Then open `http://127.0.0.1:4000`.

To do a one-off verification build instead of serving:

```bash
./bin/build
```

If you prefer running Bundler directly, make sure your shell is using the repo Ruby first. The scripts above already force `rbenv` to use the version from `.ruby-version`.

## Docker

Build and run the site in Docker:

```bash
docker build -t personal-webpage .
docker run --rm -p 4000:4000 personal-webpage
```
