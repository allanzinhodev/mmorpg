---
slug: "feat-binary-parsers-socket"
date: "2026-06-17"
title: "F1.1: Parsers Binários Otimizados e Socket"
phase: 1
status: "done"
tests: "passing"
---

A fundação de rede do Sertaria foi implementada! Ao invés de trafegar strings JSON pesadas via WebSocket, construímos um `BinaryReader` e `BinaryWriter` customizados para lidar diretamente com `ArrayBuffers`.

O parser principal da fundação `CREATURE_MOVE` (0x64) foi implementado de acordo com a nossa fonte da verdade (`shared/protocol.json`). Ele recebe os campos compactos `creatureId`, posições de origem (`fromX/Y/Z`) e posições de destino (`toX/Y/Z`). Tudo validado via testes automatizados com Jest.

Essa é a primeira e mais importante fundação para o cliente web ter uma comunicação tão rápida e leve quanto o cliente C++ nativo.
