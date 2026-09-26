import { useEffect, useRef } from "react"
import QRCode from "qrcode"

interface QRCodeComponentProps {
  value: string
  size?: number
  level?: "L" | "M" | "Q" | "H"
  includeMargin?: boolean
  className?: string
}

export function QRCodeComponent({
  value,
  size = 200,
  level = "H",
  includeMargin = true,
  className = ""
}: QRCodeComponentProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(
        canvasRef.current,
        value,
        {
          width: size,
          margin: includeMargin ? 2 : 0,
          errorCorrectionLevel: level,
          color: {
            dark: "#000000",
            light: "#FFFFFF"
          }
        },
        (error: any) => {
          if (error) console.error(error)
        }
      )
    }
  }, [value, size, level, includeMargin])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-label={`QR code for ${value}`}
    />
  )
}
