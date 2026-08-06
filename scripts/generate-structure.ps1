$folders = @(
    "solutions/qr-code-printing",
    "solutions/variable-data-printing",
    "solutions/anti-counterfeit",
    "solutions/rfid",
    "solutions/warehouse-rfid",
    "solutions/apparel-rfid",
    "solutions/production-traceability",
    "products/uv-printers/ct11",
    "products/uv-printers/ct21",
    "products/cij-inks/domino",
    "products/cij-inks/videojet",
    "products/cij-inks/hitachi",
    "products/tij-inks",
    "products/printheads/ricoh-gen5",
    "products/printheads/ricoh-gen6",
    "products/printheads/epson-i3200",
    "products/printheads/kodak-s5",
    "products/printheads/kodak-s10",
    "products/pad-printing/machines",
    "products/pad-printing/inks",
    "products/pad-printing/pads",
    "products/pad-printing/plates",
    "products/screen-printing",
    "services/qr-printing-service",
    "services/variable-data-service",
    "services/pad-printing-service",
    "services/uv-printing-service",
    "services/consulting",
    "industries/cosmetics",
    "industries/food",
    "industries/pharmaceuticals",
    "industries/electronics",
    "industries/garment",
    "industries/packaging",
    "case-studies",
    "blog/rfid",
    "blog/uv-printing",
    "blog/qr-code",
    "blog/pad-printing",
    "blog/cij",
    "blog/printheads",
    "about",
    "contact",
    "resources/download",
    "resources/catalog",
    "resources/msds",
    "resources/software"
)

$baseDir = "src/app"

foreach ($folder in $folders) {
    $targetPath = Join-Path $baseDir $folder
    if (-not (Test-Path $targetPath)) {
        New-Item -ItemType Directory -Force -Path $targetPath | Out-Null
    }

    # Phân tích Title từ Tên thư mục cuối
    $parts = $folder -split '/'
    $titleRaw = $parts[-1]
    # Replace dashes with spaces and title case
    $title = (CultureInfo.InvariantCulture.TextInfo.ToTitleCase($titleRaw.Replace("-", " ")))

    $pageContent = @"
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: '$title | VNPIS Industrial Solutions',
  description: 'Enterprise solutions for $title by VNPIS.',
};

export default function Page() {
  return (
    <LandingPage 
      title="$title" 
      category="VNPIS Solutions"
    />
  );
}
"@
    
    $filePath = Join-Path $targetPath "page.tsx"
    if (-not (Test-Path $filePath)) {
        Set-Content -Path $filePath -Value $pageContent -Encoding UTF8
    }
}

Write-Host "Đã tạo xong toàn bộ cây thư mục!"
