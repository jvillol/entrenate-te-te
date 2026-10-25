# Script para regenerar js\bundle.js a partir de los módulos fuente en js\
$files = @(
  "js\data\teams.js",
  "js\engine\tactics.js",
  "js\engine\leagueEngine.js",
  "js\engine\saveManager.js",
  "js\engine\matchEngine.js",
  "js\ui\saveSlotsModal.js",
  "js\ui\teamSelectView.js",
  "js\ui\tacticsView.js",
  "js\ui\squadView.js",
  "js\ui\standingsView.js",
  "js\ui\seasonEndView.js",
  "js\ui\matchView.js",
  "js\ui\hubView.js",
  "js\app.js"
)

$bundleParts = @()

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content -Path $file -Raw -Encoding UTF8
        # Eliminar importaciones multilínea y monolínea
        $content = [System.Text.RegularExpressions.Regex]::Replace($content, '(?s)\bimport\b[^;\n]*?\{[^}]*\}\s*from\s*["''].*?["''];?\s*', '')
        $content = [System.Text.RegularExpressions.Regex]::Replace($content, '(?m)^\s*import\s+[^;\n]+;?\s*$', '')
        # Eliminar export default
        $content = $content -replace '(?m)^\s*export\s+default\s+', ''
        # Eliminar export
        $content = $content -replace '(?m)^\s*export\s+', ''
        
        $header = "// =========================================================`r`n// ARCHIVO: $file`r`n// ========================================================="
        $bundleParts += $header
        $bundleParts += $content.Trim()
    }
}

$fullBundle = $bundleParts -join "`r`n`r`n"
[System.IO.File]::WriteAllText((Join-Path (Get-Location) "js\bundle.js"), $fullBundle, [System.Text.Encoding]::UTF8)
Write-Host "Bundle regenerado exitosamente: $((Get-Item 'js\bundle.js').Length) bytes"

