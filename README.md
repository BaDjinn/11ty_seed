# 11ty_seed
The bare minimum to start and deploy "something" on netlify.

Souces from:
- https://11ty.rocks/posts/create-your-first-basic-11ty-website/
- https://www.netlify.com/blog/2020/04/09/lets-learn-eleventy-boost-your-jamstack-skills-with-11ty/#11ty-can-do-more

# On Netlify
We're going to use Netlify to build everything.
(Included the netlify.toml for the same purpose.)

- ./Site Configuration/Build&Deploy/Continuous deployment/Build Settings:

| Settings: | Status: |
|:-|:-|
| Base directory | / |
| Package directory | Not set |
| Build command | npx @11ty/eleventy |
| Publish directory | _site |
| Functions directory | netlify/functions |
| Deploy log visibility | Logs are public |
| Build status | Active |
