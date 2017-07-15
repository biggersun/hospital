yarn run build

onlineDomain=""
offlineDomain=""

scp -P 789 -r dist/* frontend@$offlineDomain:/data/wwwroot/$1/$onlineDomain/frontend
