VERSION_FILE=./VERSION
VERSION=`cat $(VERSION_FILE)`
IMAGE_PATH="565715329048.dkr.ecr.ap-northeast-1.amazonaws.com/forx/web-upgrade"

image:
	echo $(VERSION)
	docker build -t $(IMAGE_PATH):$(VERSION) .

