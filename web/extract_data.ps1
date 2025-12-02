$jsPath = "..\js\src\formulas"
$csPath = "..\cs\src\formulas"
$pyPath = "..\py\src\formulas"
$outputPath = ".\data.json"

$data = @{}

# Process JS (TypeScript)
Get-ChildItem "$jsPath\*.ts" | ForEach-Object {
    $content = Get-Content $_.FullName -TotalCount 1
    if ($content -match 'export default function (\w+)\s*\((.*)\)') {
        $name = $matches[1]
        $signature = $matches[2]
        
        if (-not $data.ContainsKey($name)) {
            $data[$name] = @{ name = $name }
        }
        $data[$name]["js"] = @{
            signature = $signature
            file      = $_.Name
        }
        
        # Generate simple example based on signature
        # This is a basic heuristic; for complex types it might need refinement
        $params = $signature -split ','
        $exampleArgs = $params | ForEach-Object {
            if ($_ -match 'number\[\]\[\]') { "[[1, 0], [0, 1]]" }
            elseif ($_ -match 'number\[\]') { "[1, 2, 3]" }
            elseif ($_ -match 'number') { "5" }
            else { "null" }
        }
        $data[$name]["example"] = "$name(" + ($exampleArgs -join ", ") + ")"
    }
}

# Process C#
Get-ChildItem "$csPath\*.cs" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    # Look for public static [Type] Calculate(...)
    if ($content -match 'public static \w+ Calculate\((.*)\)') {
        $signature = $matches[1]
        # Map filename to function name (camelCase)
        $name = $_.BaseName.Substring(0, 1).ToLower() + $_.BaseName.Substring(1)
        
        if ($data.ContainsKey($name)) {
            $data[$name]["cs"] = @{
                signature = "Calculate($signature)"
                file      = $_.Name
            }
        }
    }
}

# Process Python
Get-ChildItem "$pyPath\*.py" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    # Look for def function_name(...)
    if ($content -match 'def (\w+)\((.*)\)') {
        $pyName = $matches[1]
        $signature = $matches[2]
        
        # Try to match with existing JS name (camelCase vs snake_case)
        # Simple heuristic: remove underscores and compare case-insensitive
        $normalizedPyName = $pyName -replace '_', ''
        
        $matchedName = $null
        foreach ($key in $data.Keys) {
            if ($key.ToLower() -eq $normalizedPyName.ToLower()) {
                $matchedName = $key
                break
            }
        }

        if ($matchedName) {
            $data[$matchedName]["py"] = @{
                signature = "$pyName($signature)"
                file      = $_.Name
            }
        }
    }
}

# Convert to array and save
$data.Values | ConvertTo-Json -Depth 3 | Out-File $outputPath -Encoding utf8
Write-Host "Data extraction complete. Saved to $outputPath"
