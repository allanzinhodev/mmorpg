---
title: "Antigravity Intelligence: Server Raw & Extinção de Versão"
date: "2026-06-17"
author: "Antigravity AI"
tags: ["Architecture", "C++", "Networking"]
---

# Antigravity Architecture Document

Este documento foi gerado pela inteligência artificial Antigravity para registrar as decisões arquiteturais fundamentais tomadas na criação deste MMO.

Ao clonar este repositório em uma nova máquina, entenda que este **não é um servidor de Tibia padrão**. Nós bifurcamos pesadamente a tecnologia base para criar a **Sertaria Engine**.

## 1. O Servidor Raw (Dados Limpos)
Foi decidido que o servidor C++ não utilizaria bases genéricas pesadas (como o TheForgottenServer ou TFS) e nem bibliotecas robustas de assincronicidade inicialmente.

**Objetivo**: Controle absoluto, consumo de memória na faixa de kilobytes e processamento de bytes primitivos.

**Implementação**:
- O motor de sockets (`sertaria/server/src/main.cpp`) foi construído do absoluto zero usando a biblioteca nativa do Windows `WinSock2`.
- O servidor roda em uma thread bruta escutando a porta TCP `7171`. Ele não criptografa e não descriptografa nada na camada de software inicial.

## 2. A Extinção do Versionamento (Client-side)
O OTClientV8 carrega um legado de compatibilidade com versões do Tibia que variam do 7.4 ao 12+. Para a **Sertaria**, manter isso ativo era um desperdício monstruoso de CPU e uma poluição arquitetural, já que usaremos apenas um formato fixo (baseado nativamente nas estruturas do 10.98).

**O que o Antigravity fez no código fonte C++:**
- Entramos nos parsers centrais do motor gráfico (`thingtype.cpp`, `itemtype.cpp`, `item.cpp`, `thingtypemanager.cpp`).
- Arrancamos cirurgicamente mais de 30 blocos condicionais do tipo `if(g_game.getClientVersion() >= 860)`.
- Fundimos o C++ para processar a leitura de `.spr` e `.dat` de maneira purificada. **A lógica do 10.98 foi tornada permanente**. O cliente não avalia mais as versões em tempo de renderização.

**O que o Antigravity fez no Lua:**
- A flag `GameLoginPacketEncryption` foi desligada. O client agora envia sockets não encriptados pela rede. Não há mais geração de chave RSA nem payload XTEA. (Perfeito para o nosso Servidor Raw).
- A versão do jogo (`G.clientVersion`) foi forçada para `1`.
- A estrutura de arquivos `data/things/1098` foi extinta. O cliente carrega diretamente de `data/graphics/sertaria.spr` e `.dat`.

## Setup Rápido (Nova Máquina)
1. Certifique-se de instalar as dependências de clonagem através do script `sertaria/scripts/setup_deps.ps1`.
2. Para compilar o servidor motor C++: Abra o `Developer Command Prompt` do Visual Studio, navegue até `sertaria/server/src/` e rode: `cl.exe /EHsc main.cpp ws2_32.lib`. Isso vai gerar o `sertaria_server.exe`.
3. Para compilar o cliente C++: Abra a solution `sertaria/client-cpp/vc17/otclient.sln` no Visual Studio 2026 e compile (precisará do `vcpkg` integrado e rodando `vcpkg install --triplet x86-windows-static`).
