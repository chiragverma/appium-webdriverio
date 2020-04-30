#!/bin/bash
cd desktop/mirror && yarn
cd packages/tage && yarn dev &
# start another shell and replacing the current
exec /bin/bash