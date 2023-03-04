#!/bin/bash
set -e

echo "starting deployment of github finder"

echo ""
echo "removing existing content from folder"
echo "sudo rm -r /data/caddy-data/github-finder.hetorus.nl/*"
sudo rm -rf /data/caddy-data/github-finder.hetorus.nl/*

echo ""
echo "copying build github finder to the server root"
echo "cp -r build/* /data/caddy-data/github-finder.hetorus.nl/"
cp -r build/* /data/caddy-data/github-finder.hetorus.nl/

echo ""
echo "finished deployment of github finder!"
