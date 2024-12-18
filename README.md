# Readme

This repository contains the source code for [https://opcodeexplained.com](https://opcodeexplained.com).

## Contribute

If you see a page on the website you think could use some help, please consider opening an issue or pull request! Bitcoin Script is a complex system and attempting to build a small encyclopedia for it is no small affair. This project aims to be a strong reference that developers can rely on, and comments that help us further this goal are welcome.

## Local development

This website uses the [VitePress] static site generator to build the site from markdown content to a mobile-friendly, searchable, and accessible website. 

You can build the website locally like so:
```shell
git clone https://github.com/thunderbiscuit/opcodeexplained.com
cd ./opcodeexplained.com/
npm install
npm run docs:dev
```

[VitePress]: https://vitepress.dev/
