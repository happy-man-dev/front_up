VERSION_FILE=./VERSION
VERSION=`cat $(VERSION_FILE)`
IMAGE_PATH="565715329048.dkr.ecr.ap-northeast-1.amazonaws.com/forx/web-upgrade"

image-uat:
	echo $(VERSION)
	docker build --build-arg BUILD_CMD=build:uat -t $(IMAGE_PATH):$(VERSION)-uat .

image-prod:
	echo $(VERSION)
	docker build --build-arg BUILD_CMD=build:prod -t $(IMAGE_PATH):$(VERSION) .

