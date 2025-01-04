#!/bin/sh

# 项目路径
project_dir="/var/www/i-notes"
# 服务名
service_name="frontend"

cd "$project_dir"

docker-compose restart "$service_name"
