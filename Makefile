dev:
	cd frontend && npm run dev & ~/go/bin/air && fg

build:
	echo "[+] Build react application" && cd frontend && npm run build && cd .. && echo "[+] Build golang application" && go build main.go
