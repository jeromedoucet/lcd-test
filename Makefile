MKFILE_PATH := $(abspath $(lastword $(MAKEFILE_LIST)))
WORKSPACE := $(patsubst %/,%,$(dir $(MKFILE_PATH)))

all:
	docker build -t lcd-test .
	docker run --rm -v $(WORKSPACE):/lcd-test -u `id -u $(USER)` lcd-test npm install

tu:
	docker run --rm -v $(WORKSPACE):/lcd-test -u `id -u $(USER)` lcd-test npm test
