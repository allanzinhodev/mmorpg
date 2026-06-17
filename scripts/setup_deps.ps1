$ErrorActionPreference = "Stop"

$workspace = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$targetDir = Split-Path -Parent $workspace # Assuming mmo folder

Write-Host "Iniciando o download das dependências open-source para o desenvolvimento do Sertaria MMO..." -ForegroundColor Cyan

# 1. ForgottenServer 10.98
$fsPath = Join-Path $targetDir "forgottenserver-10.98"
if (-not (Test-Path $fsPath)) {
    Write-Host "Clonando OTX/ForgottenServer 10.98..." -ForegroundColor Yellow
    git clone https://github.com/otland/forgottenserver.git $fsPath
    # Nota: Aqui o ideal é dar checkout numa branch/tag específica ou no fork usado
} else {
    Write-Host "ForgottenServer já existe." -ForegroundColor Green
}

# 2. OTClientV8
$otcPath = Join-Path $targetDir "otcv8"
if (-not (Test-Path $otcPath)) {
    Write-Host "Clonando OTClientV8..." -ForegroundColor Yellow
    git clone https://github.com/OTCv8/otclientv8.git $otcPath
} else {
    Write-Host "OTClientV8 já existe." -ForegroundColor Green
}

# 3. ObjectBuilder
$obPath = Join-Path $targetDir "ObjectBuilder"
if (-not (Test-Path $obPath)) {
    Write-Host "Clonando ObjectBuilder..." -ForegroundColor Yellow
    git clone https://github.com/ottools/ObjectBuilder.git $obPath
} else {
    Write-Host "ObjectBuilder já existe." -ForegroundColor Green
}

Write-Host "Todas as dependências foram baixadas com sucesso!" -ForegroundColor Green
