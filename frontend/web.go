package frontend

import (
	"embed"

	"github.com/labstack/echo/v4"
)

var (
	//go:embed all:dist
	dist embed.FS
	//go:embed all:dist/index.html
	indexHTML embed.FS

	distDirFS     = echo.MustSubFS(dist, "dist")
	distIndexHTML = echo.MustSubFS(indexHTML, "dist")
)

func RegisterHandlers(e *echo.Echo) {
	e.FileFS("/", "index.html", distIndexHTML)
	e.StaticFS("/*", distDirFS)

	// Serve index.html for all other routes to support client-side routing
}
