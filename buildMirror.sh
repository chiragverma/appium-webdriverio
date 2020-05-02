#!/bin/bash
export PATH=/usr/local/bin:$PATH
cd /Users/chirag.verma/mirror && yarn
cd /Users/chirag.verma/mirror/packages/tage && yarn dev &
# start another shell and replacing the current
exec /bin/bash