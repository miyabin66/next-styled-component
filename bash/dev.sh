#!/bin/sh

IPS=$(ifconfig | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | grep -Eo '([0-9]*\.){3}[0-9]*' | grep -v '127.0.0.1')
# 2つ以上帰ってきた場合は先頭のIPを使用する
IP=(${IPS// / })
next dev --hostname ${IP[0]}
