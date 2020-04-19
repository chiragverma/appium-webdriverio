#!/bin/bash
cp /mirror.json Desktop/mirror/packages/tage/config/default.json
cd desktop/mirror && yarn
cd packages/tage && yarn dev &
# start another shell and replacing the current
exec /bin/bash