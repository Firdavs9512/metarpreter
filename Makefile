dev:
	cd frontend && npm run dev & ~/go/bin/air && fg

build:
	cd frontend && npm run build & go build main.go
