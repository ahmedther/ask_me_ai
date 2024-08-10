@echo off
echo Stopping all Docker containers...
for /f "tokens=*" %%i in ('docker ps -a -q') do docker stop %%i

echo Deleting all Docker containers...
for /f "tokens=*" %%i in ('docker ps -a -q') do docker rm %%i

echo Listing all Docker images...
docker images -a

echo Deleting all Docker images...
for /f "tokens=*" %%i in ('docker images -a -q') do docker rmi -f %%i

echo All Docker containers and images have been deleted.
