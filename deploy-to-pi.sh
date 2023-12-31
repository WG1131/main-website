#!/bin/bash

# switch to main and pull the newest version
git checkout main
git pull

# build the site
npm install
npm run build

# push created and necessary files to the pi
rsync -avzd ./.next next@pi.local:/home/next/main-website/
rsync -avzd ./node_modules next@pi.local:/home/next/main-website/
rsync -avzd ./package.json next@pi.local:/home/next/main-website/

# start server on the pi
ssh next@pi.local 'pm2 restart main-website'