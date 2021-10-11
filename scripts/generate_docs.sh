./node_modules/.bin/jsdoc2md \
    -c config/jsdoc.json \
    -f main.*js lib/* \
    --no-cache \
    --plugin dmd-clear \
    --template doc/template.hbs \
    > README.md
