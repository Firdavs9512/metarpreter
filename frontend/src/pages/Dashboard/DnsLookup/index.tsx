import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LoadingAnimation from "@/components/ui/loading-animation";
import { api } from "@/lib/api";
import { useState } from "react";
import { toast } from "sonner";

interface DnsRecord {
  name: string;
  type: string;
  host: string;
  ip?: string;
}

interface Response {
  error: string;
  message: string;
  records?: DnsRecord[];
}

export default function DnsLookupPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [domain, setDomain] = useState<string>("");
  const [records, setRecords] = useState<DnsRecord[]>([]);

  const handleScan = () => {
    if (!domain) {
      toast.error("Please enter a domain");
      return;
    }

    api
      .post<Response>("/dashboard/dns-lookup", { domain })
      .then((res) => {
        const data = res.data;

        if (data.error === "true" || !data.records) {
          toast.error(data.message || "Record is empty");
          return;
        }

        setRecords(data.records);
      })
      .catch(() => {
        toast.error("Error for scaning domain!");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold">DNS Lookup</h3>
      <div className="flex items-center gap-x-2 mt-5">
        <Input
          placeholder="Domain"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
        />
        <Button onClick={handleScan} disabled={loading}>
          Scan
        </Button>
      </div>

      {records.length > 0 && (
        <div className="grid grid-cols-12 gap-3 mt-5">
          {records.map((item, index) => (
            <div
              key={index}
              className="col-span-3 border border-muted-foreground rounded-md p-3"
            >
              <p>Name: {item.name}</p>
              <p>Type: {item.type}</p>
              <p>Host: {item.host}</p>
              <p>IP: {item.ip}</p>
            </div>
          ))}
        </div>
      )}

      {loading && (
        <div>
          <LoadingAnimation type="text" className="min-h-min" />
        </div>
      )}
    </div>
  );
}
