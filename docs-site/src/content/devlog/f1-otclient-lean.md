---
slug: "feat-lean-otclientv8"
date: "2026-06-17"
title: "OTClientV8 Enxuto (C++ / Windows)"
phase: 1
status: "done"
tests: "pending-build"
---

Para complementar nosso ecossistema e não depender apenas do Web Client, criamos um cliente Windows nativo a partir do OTClientV8 (`sertaria/client-cpp`).

Esse cliente passou por uma limpeza estrutural agressiva:
- Deletamos mais de 40 módulos Lua padrão do Tibia que são inúteis para o Sertaria atualmente (bot, market, inventory, VIP list, etc), mantendo estritamente o necessário para comunicação socket, interface base (`game_interface`) e assets (`game_things`).
- A interface de login (`entergame.otui`) foi recriada de forma minimalista, com o IP (`127.0.0.1:7171`) e a versão (`1098`) hardcoded diretamente no script LUA para pularmos o servidor de seleção e agilizarmos o desenvolvimento.
- O cliente lerá os arquivos brutos `Tibia.dat` e `Tibia.spr` do Tibia 10.98 diretamente do diretório `data/things/1098`.

O código está pronto e aguardando compilação pelo Visual Studio (`vc17/otclient.sln`).
