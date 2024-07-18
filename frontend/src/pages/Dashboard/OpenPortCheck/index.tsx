import { Button } from "@/components/ui/button";
import Copy from "@/components/ui/copy";
import { Input } from "@/components/ui/input";
import LoadingAnimation from "@/components/ui/loading-animation";
import { useEffect, useState, useCallback } from "react";
import { toast } from "sonner";

const WEBSOCKET_URL = "ws://localhost:8080/ws";

export default function OpenPortCheck() {
  const [ports, setPorts] = useState<number[]>([]);
  const [ip, setIp] = useState<string>("");
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleScan = useCallback(() => {
    if (!ip) {
      toast.error("Please enter an IP address");
      return;
    }

    setLoading(true);
    ws?.send(JSON.stringify({ type: "ip", content: ip }));
  }, [ws, ip]);

  const handleCancel = useCallback(() => {
    ws?.send(JSON.stringify({ type: "cancel" }));
    setLoading(false);
  }, [ws]);

  useEffect(() => {
    const wsIns = new WebSocket(WEBSOCKET_URL);

    wsIns.onopen = () => {
      console.log("connected");
      setWs(wsIns);
    };

    wsIns.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "port") {
        setPorts((prev) => [...prev, data.content]);
      } else {
        setLoading(false);
        console.log(data);
      }
    };

    wsIns.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    wsIns.onclose = () => {
      console.log("disconnected");
      setWs(null);
    };

    return () => {
      wsIns.close();
    };
  }, []);

  return (
    <div>
      <h3 className="text-2xl font-semibold">Check Open Ports</h3>
      <div className="flex items-center gap-x-2 mt-5">
        <Input
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          placeholder="IP Address"
        />
        <Button onClick={handleScan} disabled={loading}>
          Scan
        </Button>
        <Button
          onClick={handleCancel}
          variant="destructive"
          disabled={!loading}
        >
          Cancel
        </Button>
      </div>

      {ports.length > 0 && (
        <div className="flex items-center gap-2 mt-3">
          <span>Open Ports: </span>
          <Copy copyText={ports.join(",")}>{ports.join(", ")}</Copy>
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
