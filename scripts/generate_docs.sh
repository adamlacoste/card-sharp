for path in $@; do
    doc_path="doc/${path%.mjs}.md"
    doc_dir_path="$(dirname $doc_path)"
    [ -d $doc_dir_path ] || mkdir -p $doc_dir_path
    ./node_modules/.bin/jsdoc2md -c config/jsdoc.json --plugin @godaddy/dmd -f $path > $doc_path
done
