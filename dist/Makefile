MKFILE_PATH := $(abspath $(lastword $(MAKEFILE_LIST)))
WORKSPACE := $(patsubst %/,%,$(dir $(MKFILE_PATH)))

all:
	docker build -f Dockerfile_build -t lcd-test-build .
	docker run --rm -v $(WORKSPACE):/lcd-test -u `id -u $(USER)` lcd-test-build npm install

tu:
	docker run --rm -v $(WORKSPACE):/lcd-test -u `id -u $(USER)` lcd-test-build npm test

install:
	docker build -t lcd-test .
