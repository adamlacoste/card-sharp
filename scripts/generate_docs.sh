# for path in main.mjs lib/*; do
for path in $@; do
    echo "Generating documentation for $path..."
    doc_path="doc/${path%.mjs}.md"
    doc_dir_path="$(dirname $doc_path)"
    [ -d $doc_dir_path ] || mkdir -p $doc_dir_path
    ./node_modules/.bin/jsdoc2md -c config/jsdoc.json -f $path > $doc_path
done
echo "Done."
