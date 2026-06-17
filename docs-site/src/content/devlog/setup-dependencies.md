---
slug: "setup-dependencies-script"
date: "2026-06-17"
title: "Automação: Clonando Dependências Open-Source"
phase: 1
status: "done"
tests: "passing"
---

Para manter o nosso repositório `sertaria` limpo, não comitamos os códigos-fonte dos projetos base (Tibia/OpenTibia). Em vez disso, usamos um script de automação para clonar os repositórios que estudamos ou usamos como ferramentas auxiliares.

## Script de Setup (PowerShell)

Criamos o script `scripts/setup_deps.ps1` no monorepo do Sertaria. Ao ser executado, ele clona os seguintes projetos na pasta pai (workspace):
1. **ForgottenServer 10.98** (Base lógica e arquitetural do servidor)
2. **OTClientV8** (Base do nosso cliente C++)
3. **ObjectBuilder** (Para extração de sprites e engenharia reversa do formato .spr/.dat)

**Código do Script:**
```powershell
$targetDir = "C:\Users\aradantas\mmo" # Diretório do Workspace

# 1. ForgottenServer 10.98
git clone https://github.com/otland/forgottenserver.git "$targetDir\forgottenserver-10.98"

# 2. OTClientV8
git clone https://github.com/OTCv8/otclientv8.git "$targetDir\otcv8"

# 3. ObjectBuilder
git clone https://github.com/ottools/ObjectBuilder.git "$targetDir\ObjectBuilder"
```

Para rodar a automação, basta executar no terminal:
```powershell
.\scripts\setup_deps.ps1
```
