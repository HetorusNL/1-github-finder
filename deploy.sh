#!/bin/bash

# magic options for bash to make scripts safer
set -Eeuxo pipefail

echo "starting deployment of github finder"

# modify me for your own setup!
# be sure to not ruin your filesystem with rsync nuking it all :)
echo ""
echo "forcefully copying the built files to the destination"
rsync -avz --stats --delete --rsync-path="sudo rsync" build/ raptor:/docker/volumes/caddy/srv/github-finder.hetorus.nl/

echo ""
echo "finished deployment of github finder!"
