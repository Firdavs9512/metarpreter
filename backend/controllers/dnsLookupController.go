package controllers

import (
	"net"
	"net/http"

	"github.com/labstack/echo/v4"
)

type DnsLookupController struct{}

type DnsRecord struct {
	Name string `json:"name"`
	Type string `json:"type"`
	Host string `json:"host"`
	Ip   string `json:"ip"`
}

type Response struct {
	Error   string      `json:"error"`
	Message string      `json:"message"`
	Records []DnsRecord `json:"records"`
}

type Request struct {
	Domain string `json:"domain"`
}

func (d *DnsLookupController) Lookup(c echo.Context) error {
	var req Request
	if err := c.Bind(&req); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{
			"error":   "true",
			"message": err.Error(),
		})
	}

	records := []DnsRecord{}

	// Perform the DNS lookup for IP addresses (IPv4 and IPv6)
	ips, err := net.LookupIP(req.Domain)
	if err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{
			"error":   "true",
			"message": err.Error(),
		})
	}

	for _, ip := range ips {
		recordType := "AAAA"
		if ip.To4() != nil {
			recordType = "A"
		}
		records = append(records, DnsRecord{
			Name: req.Domain,
			Type: recordType,
			Host: req.Domain,
			Ip:   ip.String(),
		})
	}

	// Lookup MX records
	mxRecords, err := net.LookupMX(req.Domain)
	if err == nil {
		for _, mx := range mxRecords {
			records = append(records, DnsRecord{
				Name: req.Domain,
				Type: "MX",
				Host: mx.Host,
				Ip:   "",
			})
		}
	}

	// Lookup CNAME records
	cname, err := net.LookupCNAME(req.Domain)
	if err == nil {
		records = append(records, DnsRecord{
			Name: req.Domain,
			Type: "CNAME",
			Host: cname,
			Ip:   "",
		})
	}

	// Lookup NS records and their IP addresses
	nsRecords, err := net.LookupNS(req.Domain)
	if err == nil {
		for _, ns := range nsRecords {
			records = append(records, DnsRecord{
				Name: req.Domain,
				Type: "NS",
				Host: ns.Host,
				Ip:   "",
			})

			// Lookup IP addresses for each NS record
			nsIPs, err := net.LookupIP(ns.Host)
			if err == nil {
				for _, ip := range nsIPs {
					recordType := "AAAA"
					if ip.To4() != nil {
						recordType = "A"
					}
					records = append(records, DnsRecord{
						Name: req.Domain,
						Type: recordType,
						Host: ns.Host,
						Ip:   ip.String(),
					})
				}
			}
		}
	}

	response := Response{
		Error:   "false",
		Message: "DNS lookup completed",
		Records: records,
	}

	return c.JSON(http.StatusOK, response)
}
