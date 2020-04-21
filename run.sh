#!/usr/bin/sh
now dev -t $ZEIT_TOKEN &
sleep 5
mocha --timeout 2
sleep 5
now dev -t $ZEIT_TOKEN