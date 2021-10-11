./node_modules/.bin/jsdoc2md \
    -c config/jsdoc.json \
    -f lib/* \
    --no-cache \
    --plugin dmd-clear \
    --template doc/template.hbs \
    > README.md
