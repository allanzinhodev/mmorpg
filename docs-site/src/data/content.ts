export interface NavSection {
  title: string;
  items: NavItem[];
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  badge?: string;
  badgeClass?: string;
}

export const navigation: NavSection[] = [
  {
    title: 'Início',
    items: [
      { id: 'overview', label: 'Visão Geral', icon: '🏠' },
      { id: 'architecture', label: 'Arquitetura', icon: '🏗️', badge: 'Core', badgeClass: 'badge-core' },
      { id: 'roadmap', label: 'Roadmap', icon: '🗺️' },
    ]
  },
  {
    title: 'Servidor',
    items: [
      { id: 'gameloop', label: 'Game Loop', icon: '⚙️', badge: 'Server', badgeClass: 'badge-server' },
      { id: 'entities', label: 'Entidades', icon: '👤', badge: 'Server', badgeClass: 'badge-server' },
      { id: 'map-system', label: 'Sistema de Mapa', icon: '🗺️', badge: 'Server', badgeClass: 'badge-server' },
      { id: 'combat', label: 'Combate', icon: '⚔️', badge: 'Combat', badgeClass: 'badge-combat' },
      { id: 'items', label: 'Items & Inventário', icon: '🎒', badge: 'Server', badgeClass: 'badge-server' },
      { id: 'spells', label: 'Spells & Conditions', icon: '✨', badge: 'Combat', badgeClass: 'badge-combat' },
      { id: 'monsters', label: 'Monstros & AI', icon: '👾', badge: 'Server', badgeClass: 'badge-server' },
    ]
  },
  {
    title: 'Rede',
    items: [
      { id: 'protocol', label: 'Protocolo', icon: '📡', badge: 'Shared', badgeClass: 'badge-shared' },
      { id: 'messages', label: 'Mensagens', icon: '💬', badge: 'Shared', badgeClass: 'badge-shared' },
    ]
  },
  {
    title: 'Cliente',
    items: [
      { id: 'rendering', label: 'Rendering', icon: '🎨', badge: 'Client', badgeClass: 'badge-client' },
      { id: 'sprites', label: 'Sprites & Assets', icon: '🖼️', badge: 'Client', badgeClass: 'badge-client' },
      { id: 'ui-system', label: 'UI System', icon: '🖥️', badge: 'Client', badgeClass: 'badge-client' },
    ]
  },
  {
    title: 'Sistemas',
    items: [
      { id: 'progression', label: 'Progressão & XP', icon: '📈' },
      { id: 'social', label: 'Social & Chat', icon: '💬' },
      { id: 'economy', label: 'Economia', icon: '💰' },
      { id: 'world', label: 'Mundo (Luz, NPCs)', icon: '🌍' },
    ]
  },
  {
    title: 'Referência',
    items: [
      { id: 'constants', label: 'Constantes', icon: '📋' },
      { id: 'database', label: 'Database Schema', icon: '🗄️' },
      { id: 'tech-stack', label: 'Tech Stack', icon: '🔧' },
    ]
  },
];

export interface PageContent {
  title: string;
  breadcrumb: string;
  description: string;
  sections: ContentSection[];
}

export interface ContentSection {
  type: 'text' | 'code' | 'table' | 'cards' | 'diagram' | 'callout' | 'stats' | 'phases' | 'heading';
  title?: string;
  icon?: string;
  data: any;
}

export const pages: Record<string, PageContent> = {
  overview: {
    title: 'Nova MMO — Visão Geral',
    breadcrumb: 'Início',
    description: 'Documentação completa de engenharia para um MMO 2D isométrico customizado, construído do zero com base na inteligência arquitetural do Tibia.',
    sections: [
      {
        type: 'stats',
        data: [
          { value: '162', label: 'Server Files' },
          { value: '86', label: 'Client Files' },
          { value: '56', label: 'Client Modules' },
          { value: '12', label: 'Combat Types' },
          { value: '28+', label: 'Conditions' },
          { value: '10', label: 'Equipment Slots' },
        ]
      },
      {
        type: 'callout',
        data: {
          type: 'info',
          title: '🎯 Objetivo do Projeto',
          text: 'Criar um MMO 2D isométrico customizado e NOVO — não um clone do Tibia. Usamos a engenharia reversa dos projetos de referência (forgottenserver, otcv8, ObjectBuilder) como base de conhecimento para construir algo original com tech stack moderno.'
        }
      },
      {
        type: 'heading',
        data: { text: 'Projetos Analisados', icon: '🔍' }
      },
      {
        type: 'cards',
        data: [
          {
            icon: '⚙️',
            iconClass: 'purple',
            title: 'forgottenserver-10.98',
            subtitle: 'Servidor C++ • 162 arquivos',
            body: 'Servidor de jogo com Lua scripting, sistema de combate completo, A* pathfinding, QuadTree map, MySQL persistence, TCP com XTEA encryption.'
          },
          {
            icon: '🖥️',
            iconClass: 'green',
            title: 'otcv8',
            subtitle: 'Cliente C++ • 86 core + 56 modules',
            body: 'Cliente OpenGL com rendering isométrico, 56 módulos Lua (battle, inventory, minimap, chat...), sprite management, protocolo espelhado do server.'
          },
          {
            icon: '🎨',
            iconClass: 'amber',
            title: 'ObjectBuilder',
            subtitle: 'Editor ActionScript/Flash',
            body: 'Editor de sprites com formato OBD 2.0 (LZMA compression, ARGB 32-bit). Suporta Items, Outfits, Effects, Missiles com animações.'
          }
        ]
      },
      {
        type: 'heading',
        data: { text: 'Tech Stack Proposto', icon: '🚀' }
      },
      {
        type: 'diagram',
        data: [
          { layer: 'client', text: '🖥️ CLIENTE — HTML5 Canvas + TypeScript + WebSocket' },
          { layer: 'protocol', text: '📡 PROTOCOLO — WebSocket + JSON (→ binário futuro)' },
          { layer: 'server', text: '⚙️ SERVIDOR — Node.js + TypeScript + WebSocket' },
          { layer: 'db', text: '🗄️ DATABASE — SQLite (dev) → PostgreSQL (prod)' },
        ]
      },
      {
        type: 'callout',
        data: {
          type: 'success',
          title: '✅ Testável via Socket',
          text: 'Cada feature é testável via WebSocket direto (wscat, Postman, ou qualquer client WebSocket). O protocolo JSON permite inspeção e debug fáceis desde o primeiro dia.'
        }
      }
    ]
  },

  architecture: {
    title: 'Arquitetura do Sistema',
    breadcrumb: 'Início / Arquitetura',
    description: 'Visão geral da arquitetura cliente-servidor autoritativa e como os componentes se conectam.',
    sections: [
      {
        type: 'callout',
        data: {
          type: 'warning',
          title: '⚠️ Servidor Autoritativo',
          text: 'O servidor é a FONTE DE VERDADE para todo estado do jogo. O cliente envia intenções, recebe fatos, e renderiza. Nunca confie no cliente — toda validação acontece no servidor.'
        }
      },
      {
        type: 'heading',
        data: { text: 'Modelo Cliente-Servidor', icon: '🏛️' }
      },
      {
        type: 'text',
        data: 'O cliente funciona como um "terminal" que: 1) Envia intenções (quero andar norte, atacar criatura X); 2) Recebe fatos (você está em X,Y,Z, criatura Y perdeu 50 HP); 3) Renderiza o estado recebido. Validações no servidor incluem: distância para interação, line of sight, cooldowns, capacidade de carga, permissões de PvP.'
      },
      {
        type: 'heading',
        data: { text: 'Padrões Arquiteturais Extraídos', icon: '🧬' }
      },
      {
        type: 'table',
        data: {
          headers: ['Conceito', 'Tibia Original', 'Nossa Abordagem'],
          rows: [
            ['Hierarquia de Entidades', 'Thing → Creature → Player/Monster/NPC', 'Entity → Character → Player/Mob/NPC'],
            ['Mapa', 'QuadTree + Floor[16] + Tile[8×8]', 'Grid simples com chunks 32×32'],
            ['Protocolo', 'TCP + XTEA + checksums binários', 'WebSocket + JSON (migrar p/ binário depois)'],
            ['Game Loop', 'Scheduler + Dispatcher + Tasks (threads)', 'Event loop Node.js com setInterval ticks'],
            ['Scripting', 'Lua embutido (524KB de bindings!)', 'TypeScript nativo (server e client)'],
            ['Combat', 'CombatParams + AreaCombat + callbacks', 'Sistema de componentes com fórmulas config'],
            ['Conditions', '28+ types com bitmask', 'Sistema ECS de buffs/debuffs'],
            ['Skills', '7 combat skills + magic + level', 'Skills customizáveis via config'],
            ['Pathfinding', 'A* com priority queue + spectator cache', 'A* simplificado com cache'],
          ]
        }
      },
      {
        type: 'heading',
        data: { text: 'Coordenadas e Posição', icon: '📍' }
      },
      {
        type: 'code',
        data: {
          lang: 'typescript',
          file: 'shared/types.ts',
          code: `interface Position {
  x: number;  // 0-65535 (horizontal)
  y: number;  // 0-65535 (horizontal)
  z: number;  // 0-15 (floor level, 7 = ground)
}

enum Direction {
  NORTH = 0, EAST = 1, SOUTH = 2, WEST = 3,
  NORTHEAST = 4, SOUTHEAST = 5,
  SOUTHWEST = 6, NORTHWEST = 7,
}`
        }
      },
      {
        type: 'text',
        data: 'z=0 é o topo da montanha, z=7 é o nível do chão padrão, z=15 é o subsolo mais profundo. Cada floor shift equivale a um deslocamento visual diagonal no isométrico.'
      }
    ]
  },

  roadmap: {
    title: 'Roadmap de Desenvolvimento',
    breadcrumb: 'Início / Roadmap',
    description: 'Plano incremental de desenvolvimento — cada fase produz algo testável via socket e jogável no browser.',
    sections: [
      {
        type: 'phases',
        data: [
          { number: 1, status: 'current', title: 'Foundation — "Andar no Mapa"', description: 'Servidor WebSocket + mapa grid + player movement + Canvas rendering. Resultado: abrir browser, ver mapa, andar com WASD, ver outros players.' },
          { number: 2, status: 'pending', title: 'Combat — "Bater e Morrer"', description: 'Sistema de combate, monstros com AI, spells com área/target, conditions (poison, fire, haste...), loot drops.' },
          { number: 3, status: 'pending', title: 'Items & Inventário — "Pegar e Equipar"', description: 'Items com 26+ atributos, inventory com 10 slots, container system (backpacks), ground items (pickup/drop).' },
          { number: 4, status: 'pending', title: 'Social — "Chat e Party"', description: 'Chat com channels, private messages, party system com shared XP, VIP list, guild system.' },
          { number: 5, status: 'pending', title: 'World — "Casas, NPCs e Quests"', description: 'NPC system com diálogos e comércio, quest system com storage values, housing, market/trading.' },
          { number: 6, status: 'pending', title: 'Polish — "Sprites e UI"', description: 'Sprite system real com PNG atlas, outfit compositor, efeitos visuais, light system, minimap, UI panels.' },
        ]
      },
      {
        type: 'callout',
        data: {
          type: 'success',
          title: '🧪 Teste via Socket em Cada Fase',
          text: 'Cada fase é 100% testável via WebSocket. Use wscat, Postman ou qualquer client WebSocket para enviar JSON e verificar respostas. Exemplo: {"type":"login","name":"Test"}'
        }
      }
    ]
  },

  gameloop: {
    title: 'Game Loop',
    breadcrumb: 'Servidor / Game Loop',
    description: 'O coração do servidor — um loop tick-based que processa toda a lógica do jogo em ordem determinística.',
    sections: [
      {
        type: 'text',
        data: 'O servidor roda em ticks de ~50ms (20 ticks/segundo). Cada tick processa mensagens de rede, AI, movimentos, condições, ataques, pathfinding e envia atualizações aos clientes.'
      },
      {
        type: 'code',
        data: {
          lang: 'typescript',
          file: 'server/src/core/GameLoop.ts',
          code: `// Cada tick (50ms):
1. Processar mensagens de rede recebidas
2. Atualizar AI dos monstros
   └─ Think interval = 1000ms
   └─ Staggered entre 10 buckets de 100ms
3. Executar movimentos pendentes
4. Processar conditions/buffs
   └─ Tick damage, regeneração
5. Executar ataques automáticos
6. Processar decays de items
   └─ 4 buckets, interval 250ms
7. Atualizar pathfinding
8. Atualizar luz do mundo (interval 10s)
9. Atualizar hora do mundo (interval 2.5s)
   └─ 1h real = 1 dia no jogo
10. Enviar delta updates aos clientes`
        }
      },
      {
        type: 'heading',
        data: { text: 'Constantes de Timing', icon: '⏱️' }
      },
      {
        type: 'table',
        data: {
          headers: ['Constante', 'Valor', 'Descrição'],
          rows: [
            ['GAME_TICK', '50ms', '20 ticks por segundo'],
            ['MOVE_CREATURE_INTERVAL', '1000ms', 'Base walk speed'],
            ['CREATURE_THINK_INTERVAL', '1000ms', 'AI think frequency'],
            ['LIGHT_INTERVAL', '10000ms', 'World light update'],
            ['WORLD_TIME_INTERVAL', '2500ms', 'Game time update'],
            ['DECAY_INTERVAL', '250ms', 'Item decay check (4 buckets)'],
            ['ATTACK_INTERVAL_BASE', '2000ms', 'Auto-attack base interval'],
          ]
        }
      }
    ]
  },

  entities: {
    title: 'Sistema de Entidades',
    breadcrumb: 'Servidor / Entidades',
    description: 'Hierarquia de entidades do jogo — de Thing (base abstrata) a Player, Monster e NPC.',
    sections: [
      {
        type: 'heading',
        data: { text: 'Hierarquia', icon: '🌳' }
      },
      {
        type: 'code',
        data: {
          lang: 'text',
          file: 'Hierarquia de Entidades',
          code: `Thing (base abstrata)
├── Item
│   ├── Container (backpack, chest)
│   │   ├── DepotChest
│   │   ├── Inbox
│   │   └── StoreInbox
│   ├── Teleport
│   ├── MagicField
│   └── BedItem
└── Creature
    ├── Player   (jogador humano)
    ├── Monster  (monstro/hostile)
    └── Npc      (NPC amigável)`
        }
      },
      {
        type: 'heading',
        data: { text: 'Creature — Atributos Base', icon: '👤' }
      },
      {
        type: 'code',
        data: {
          lang: 'typescript',
          file: 'server/src/entities/Creature.ts',
          code: `interface Creature {
  id: number;              // Único globalmente
  name: string;
  position: Position;
  direction: Direction;    // N/E/S/W
  
  health: number;          // HP atual
  healthMax: number;       // HP máximo
  baseSpeed: number;       // Velocidade base (220 padrão)
  varSpeed: number;        // Modificador (haste/paralyze)
  // Speed efetiva = baseSpeed + varSpeed
  
  outfit: Outfit;          // Visual (lookType, cores, addons, mount)
  skull: SkullType;        // none, white, yellow, red, black
  
  attackedCreature: Creature | null;
  followCreature: Creature | null;
  master: Creature | null; // Para summons
  summons: Creature[];
  conditions: Condition[];
}`
        }
      },
      {
        type: 'heading',
        data: { text: 'Player — Atributos Específicos', icon: '🧙' }
      },
      {
        type: 'code',
        data: {
          lang: 'typescript',
          file: 'server/src/entities/Player.ts',
          code: `interface Player extends Creature {
  accountId: number;
  level: number;
  experience: number;
  vocation: Vocation;
  
  mana: number;           manaMax: number;
  soul: number;           // 0-200
  stamina: number;        // Minutos (max 2520 = 42h)
  capacity: number;       // Peso que pode carregar
  magicLevel: number;
  
  // 7 skills de combate
  skills: Record<SkillType, { level: number; tries: number }>;
  // FIST, CLUB, SWORD, AXE, DISTANCE, SHIELDING, FISHING
  
  // 10 equipment slots
  inventory: Record<Slot, Item | null>;
  // HEAD, NECKLACE, BACKPACK, ARMOR, RIGHT, LEFT,
  // LEGS, FEET, RING, AMMO
  
  // Modos de combate
  fightMode: 'offensive' | 'balanced' | 'defensive';
  chaseMode: boolean;
  secureMode: boolean;  // Anti-PK
}`
        }
      },
      {
        type: 'heading',
        data: { text: 'Vocações (Classes)', icon: '📜' }
      },
      {
        type: 'table',
        data: {
          headers: ['ID', 'Vocação', 'HP/lvl', 'Mana/lvl', 'Cap/lvl', 'Foco'],
          rows: [
            ['0', 'None (Rookie)', '5', '5', '10', 'Exploração'],
            ['1', 'Sorcerer', '5', '30', '10', 'Magic ofensiva'],
            ['2', 'Druid', '5', '30', '10', 'Healing + Support'],
            ['3', 'Paladin', '10', '15', '20', 'Distance + Holy'],
            ['4', 'Knight', '15', '5', '25', 'Melee + Defense'],
            ['5-8', 'Promoções', '++', '++', '++', 'Versões melhoradas'],
          ]
        }
      }
    ]
  },

  'map-system': {
    title: 'Sistema de Mapa',
    breadcrumb: 'Servidor / Mapa',
    description: 'Como o mundo é organizado internamente — tiles, chunks, spectators e pathfinding.',
    sections: [
      {
        type: 'heading',
        data: { text: 'Tile — Unidade Básica', icon: '🧱' }
      },
      {
        type: 'code',
        data: {
          lang: 'typescript',
          file: 'server/src/core/Tile.ts',
          code: `interface Tile {
  position: Position;
  ground: Item | null;        // Chão (grama, pedra, água)
  items: Item[];              // Stack de items
  creatures: Creature[];      // Criaturas presentes
  flags: TileFlags;           // PROTECTION_ZONE, NO_PVP, etc
}

// Stacking Order (Z-order de renderização):
// 1. Ground        (chão base)
// 2. Borders       (bordas de terreno)
// 3. Bottom items  (tapetes, splashes)
// 4. Common items  (items normais)
// 5. Creatures     (criaturas)
// 6. Top items     (telhados, "always on top")`
        }
      },
      {
        type: 'heading',
        data: { text: 'Viewport & Spectators', icon: '👁️' }
      },
      {
        type: 'text',
        data: 'O cliente vê uma janela de 17×13 tiles (8 tiles em cada direção horizontal + 6 vertical + tile central). Para cada ação (movimento, fala, efeito), o servidor notifica todos os jogadores cujo viewport inclui aquela posição — os "spectators".'
      },
      {
        type: 'stats',
        data: [
          { value: '17×13', label: 'Viewport (tiles)' },
          { value: '16', label: 'Z-Levels (floors)' },
          { value: '7', label: 'Ground Level' },
          { value: '32×32', label: 'Chunk Size' },
        ]
      },
      {
        type: 'heading',
        data: { text: 'Pathfinding (A*)', icon: '🧭' }
      },
      {
        type: 'table',
        data: {
          headers: ['Parâmetro', 'Valor', 'Descrição'],
          rows: [
            ['Walk cost (reto)', '10', 'Custo de mover N/E/S/W'],
            ['Walk cost (diagonal)', '25', 'Custo de mover NE/SE/SW/NW'],
            ['fullPathSearch', 'true', 'Busca completa vs parcial'],
            ['clearSight', 'true', 'Requer line of sight'],
            ['allowDiagonal', 'true', 'Permite movimentos diagonais'],
          ]
        }
      }
    ]
  },

  combat: {
    title: 'Sistema de Combate',
    breadcrumb: 'Servidor / Combate',
    description: 'Mecânicas de combate completas — 12 tipos de dano, fórmulas, defesa, e fluxo de ataque.',
    sections: [
      {
        type: 'heading',
        data: { text: '12 Tipos de Dano', icon: '⚡' }
      },
      {
        type: 'table',
        data: {
          headers: ['Bit', 'Tipo', 'Descrição', 'Elemento'],
          rows: [
            ['1 << 0', 'PHYSICAL', 'Dano melee e distance', '🗡️'],
            ['1 << 1', 'ENERGY', 'Raios e eletricidade', '⚡'],
            ['1 << 2', 'EARTH', 'Veneno e terra', '🌿'],
            ['1 << 3', 'FIRE', 'Fogo', '🔥'],
            ['1 << 5', 'LIFEDRAIN', 'Dreno de vida', '💀'],
            ['1 << 6', 'MANADRAIN', 'Dreno de mana', '💧'],
            ['1 << 7', 'HEALING', 'Cura', '💚'],
            ['1 << 8', 'DROWN', 'Afogamento', '🌊'],
            ['1 << 9', 'ICE', 'Gelo', '❄️'],
            ['1 << 10', 'HOLY', 'Sagrado', '✨'],
            ['1 << 11', 'DEATH', 'Morte/escuridão', '☠️'],
          ]
        }
      },
      {
        type: 'heading',
        data: { text: 'Fluxo de Combate', icon: '🔄' }
      },
      {
        type: 'code',
        data: {
          lang: 'text',
          file: 'Combat Flow',
          code: `1. Atacante inicia ataque (auto-attack ou spell)
2. Server valida: distância, LOS, cooldowns, PvP rules
3. Calcula dano bruto (fórmula skill/level/weapon)
4. Aplica resistências/imunidades do alvo
5. Aplica defesa (shield → BLOCK_DEFENSE)
6. Aplica armadura (armor → BLOCK_ARMOR)
7. Dano final = max(0, damage - defense - armor)
8. Aplica dano ao alvo
9. Verifica morte
10. Distribui XP (baseado em damage dealt)
11. Gera loot (se monstro morreu)
12. Envia efeitos visuais a spectators`
        }
      },
      {
        type: 'heading',
        data: { text: 'Fórmulas de Dano', icon: '📐' }
      },
      {
        type: 'code',
        data: {
          lang: 'typescript',
          file: 'server/src/combat/CombatEngine.ts',
          code: `// MELEE (auto-attack):
maxDamage = (skill * weaponAttack * attackFactor) / divisor
// attackFactor: offensive=1.0, balanced=0.75, defensive=0.5

// SPELL (magic):
// Formula LEVELMAGIC:
min = (level/5 + magicLevel) * minMult + minBonus
max = (level/5 + magicLevel) * maxMult + maxBonus

// DEFESA:
blockedByShield = random(defense * 0.25, defense)
blockedByArmor = random(armor * 0.5 * defMult, armor * defMult)`
        }
      }
    ]
  },

  items: {
    title: 'Items & Inventário',
    breadcrumb: 'Servidor / Items',
    description: 'Sistema de items com 26+ atributos, stacking, containers e equipment slots.',
    sections: [
      {
        type: 'heading',
        data: { text: 'Equipment Slots', icon: '🛡️' }
      },
      {
        type: 'code',
        data: {
          lang: 'text',
          file: 'Equipment Layout',
          code: `         ┌─────────┐
         │  HEAD   │  ← Slot 1 (helmet)
         ├─────────┤
         │NECKLACE │  ← Slot 2
    ┌────┼─────────┼────┐
    │BACK│  ARMOR  │    │
    │PACK│         │    │  Slots 3-4
    ├────┼────┬────┼────┤
    │LEFT│    │RIGH│    │
    │HAND│    │T   │    │  Slots 5-6
    ├────┼────┴────┼────┤
         │  LEGS  │        ← Slot 7
         ├────────┤
         │  FEET  │        ← Slot 8
         ├────────┤
         │  RING  │        ← Slot 9
         ├────────┤
         │  AMMO  │        ← Slot 10
         └────────┘`
        }
      },
      {
        type: 'heading',
        data: { text: 'Atributos de Item (26+ tipos)', icon: '📊' }
      },
      {
        type: 'table',
        data: {
          headers: ['Atributo', 'Bit', 'Tipo', 'Exemplo'],
          rows: [
            ['ACTION_ID', '1 << 0', 'uint16', 'Trigger de script'],
            ['UNIQUE_ID', '1 << 1', 'uint16', 'ID único global'],
            ['WEIGHT', '1 << 9', 'uint32', '1500 (= 15.00 oz)'],
            ['ATTACK', '1 << 10', 'int32', '52 (weapon attack)'],
            ['DEFENSE', '1 << 11', 'int32', '37 (shield defense)'],
            ['ARMOR', '1 << 13', 'int32', '12 (armor value)'],
            ['HIT_CHANCE', '1 << 14', 'int8', '95 (%)'],
            ['CHARGES', '1 << 20', 'uint16', '500 (rune charges)'],
            ['DURATION', '1 << 17', 'uint32', '3600 (seconds)'],
            ['ATTACK_SPEED', '1 << 26', 'uint32', '1500 (ms)'],
          ]
        }
      },
      {
        type: 'heading',
        data: { text: 'Flags de Item Type', icon: '🏷️' }
      },
      {
        type: 'text',
        data: 'Cada tipo de item tem propriedades estáticas: stackable (max 100), moveable, pickupable, walkable, blockSolid, blockProjectile, isContainer, isDoor, alwaysOnTop, isGroundTile, entre outros.'
      }
    ]
  },

  spells: {
    title: 'Spells & Conditions',
    breadcrumb: 'Servidor / Spells',
    description: 'Sistema de magias (instant, rune, conjure) e condições (28+ tipos de buffs/debuffs).',
    sections: [
      {
        type: 'heading',
        data: { text: 'Tipos de Spell', icon: '🪄' }
      },
      {
        type: 'cards',
        data: [
          { icon: '⚡', iconClass: 'purple', title: 'Instant Spells', subtitle: 'Ativadas por palavras', body: 'Palavras mágicas como "exura" (heal), "exori gran" (ataque forte). Requerem mana, level e vocação.' },
          { icon: '📜', iconClass: 'amber', title: 'Rune Spells', subtitle: 'Requerem rune item', body: 'Usam runas consumíveis. Podem ser target (single) ou area (explosão). Ex: "adori vita vis" (sudden death rune).' },
          { icon: '🔮', iconClass: 'cyan', title: 'Conjure Spells', subtitle: 'Criam items', body: 'Criam runas ou outros items. Ex: "adori gran mort" cria uma runa de Sudden Death com N charges.' },
        ]
      },
      {
        type: 'heading',
        data: { text: 'Propriedades de Spell', icon: '📋' }
      },
      {
        type: 'code',
        data: {
          lang: 'typescript',
          file: 'server/src/combat/SpellSystem.ts',
          code: `interface Spell {
  name: string;           // "Exura Gran"
  words: string;          // "exura gran"
  group: SpellGroup;      // ATTACK | HEALING | SUPPORT | SPECIAL
  cooldown: number;       // ms
  groupCooldown: number;  // ms (shared in group)
  level: number;          // Min level required
  magicLevel: number;     // Min magic level
  mana: number;           // Mana cost
  soul: number;           // Soul cost
  premium: boolean;
  vocations: number[];    // Allowed vocations
  needTarget: boolean;
  needWeapon: boolean;
  range: number;
  area: AreaCombat | null;
  combatType: CombatType;
  effect: MagicEffect;
  shootEffect: ShootEffect;
}`
        }
      },
      {
        type: 'heading',
        data: { text: 'Conditions (28+ tipos)', icon: '🔰' }
      },
      {
        type: 'table',
        data: {
          headers: ['Condition', 'Bit', 'Efeito'],
          rows: [
            ['POISON', '1 << 0', 'Dano periódico de veneno'],
            ['FIRE', '1 << 1', 'Dano periódico de fogo'],
            ['ENERGY', '1 << 2', 'Dano periódico de energia'],
            ['BLEEDING', '1 << 3', 'Sangramento contínuo'],
            ['HASTE', '1 << 4', '+speed (correr mais rápido)'],
            ['PARALYZE', '1 << 5', '-speed (andar devagar)'],
            ['INVISIBLE', '1 << 7', 'Invisibilidade'],
            ['MANASHIELD', '1 << 9', 'Dano vai para mana'],
            ['INFIGHT', '1 << 10', 'Em combate (PZ locked)'],
            ['DRUNK', '1 << 11', 'Walk aleatório'],
            ['REGENERATION', '1 << 13', 'Regen HP/mana passivo'],
            ['ROOT', '1 << 28', 'Preso no lugar'],
          ]
        }
      }
    ]
  },

  monsters: {
    title: 'Monstros & AI',
    breadcrumb: 'Servidor / Monstros',
    description: 'Definição de monstros, sistema de loot e algoritmo de inteligência artificial.',
    sections: [
      {
        type: 'heading',
        data: { text: 'Definição de Monstro', icon: '👾' }
      },
      {
        type: 'code',
        data: {
          lang: 'typescript',
          file: 'server/src/data/MobDefinitions.ts',
          code: `interface MonsterType {
  name: string;
  race: 'blood' | 'venom' | 'undead' | 'fire' | 'energy';
  experience: number;
  speed: number;
  health: number;
  
  attack: number;
  defense: number;
  armor: number;
  
  // AI behavior
  targetDistance: number;     // 1=melee, 4+=ranged
  runOnHealth: number;       // Foge quando HP <= N
  canPushItems: boolean;
  staticAttackChance: number; // % usar ataque especial
  
  // Imunidades (bitmask)
  damageImmunities: number;
  conditionImmunities: number;
  
  attacks: MonsterAttack[];
  defenses: MonsterDefense[];
  lootTable: LootEntry[];
  voices: { text: string; interval: number }[];
}`
        }
      },
      {
        type: 'heading',
        data: { text: 'AI Loop (Think Cycle)', icon: '🧠' }
      },
      {
        type: 'code',
        data: {
          lang: 'text',
          file: 'Monster AI Algorithm',
          code: `Cada 1 segundo (think interval):

1. SEM ALVO?
   → Procura jogadores no alcance visual
   → Seleciona alvo (mais perto ou mais fraco)

2. COM ALVO?
   → targetDistance > 1: manter distância (ranged)
   → targetDistance = 1: perseguir (melee)
   → health ≤ runOnHealth: FUGIR

3. ATAQUE:
   → Pode atacar? (distância + cooldown)
   → Roll: usar ataque especial vs melee?
   
4. DEFESA:
   → Health baixo? → auto-heal se disponível

5. MOVIMENTO:
   → Pathfind direção ao alvo (ou fuga)
   → Sem alvo? → idle walk aleatório`
        }
      }
    ]
  },

  protocol: {
    title: 'Protocolo de Rede',
    breadcrumb: 'Rede / Protocolo',
    description: 'Especificação do protocolo WebSocket JSON — formato de mensagens entre cliente e servidor.',
    sections: [
      {
        type: 'callout',
        data: {
          type: 'info',
          title: '📡 JSON Primeiro, Binário Depois',
          text: 'Usamos WebSocket + JSON para prototipação rápida. É legível, testável com qualquer WebSocket client (wscat, Postman), e facilita debugging. Migração para protocolo binário quando performance importar.'
        }
      },
      {
        type: 'heading',
        data: { text: 'Client → Server', icon: '📤' }
      },
      {
        type: 'code',
        data: {
          lang: 'json',
          file: 'Mensagens do Cliente',
          code: `// Login
{"type": "login", "name": "Player1", "password": "hash"}

// Movimento
{"type": "move", "direction": 0}  // 0=N, 1=E, 2=S, 3=W

// Auto-walk (path)
{"type": "autoWalk", "path": [0, 0, 1, 1, 2]}

// Atacar
{"type": "attack", "targetId": 12345}

// Usar item
{"type": "useItem", "position": {"x":100,"y":200,"z":7},
 "stackPos": 1, "itemId": 2120}

// Falar (e lançar spell)
{"type": "say", "text": "exura gran"}

// Virar
{"type": "turn", "direction": 2}`
        }
      },
      {
        type: 'heading',
        data: { text: 'Server → Client', icon: '📥' }
      },
      {
        type: 'code',
        data: {
          lang: 'json',
          file: 'Mensagens do Servidor',
          code: `// Mapa completo (ao logar)
{"type": "mapDescription", "position": {"x":100,"y":200,"z":7},
 "width": 18, "height": 14, "tiles": [...]}

// Criatura apareceu
{"type": "creatureAppear", "creature": {
  "id": 1, "name": "Player1",
  "position": {"x":100,"y":200,"z":7},
  "outfit": {"lookType": 128, "head": 78, "body": 69},
  "health": 100, "healthMax": 150, "speed": 220
}}

// Criatura moveu
{"type": "creatureMove", "creatureId": 1,
 "oldPos": {"x":100,"y":200,"z":7},
 "newPos": {"x":100,"y":199,"z":7}}

// Player stats
{"type": "playerStats", "health": 145, "healthMax": 150,
 "mana": 200, "manaMax": 300, "level": 8,
 "experience": 4200, "magicLevel": 12}

// Efeito mágico
{"type": "magicEffect", "position": {"x":100,"y":200,"z":7},
 "effectId": 12}`
        }
      },
      {
        type: 'heading',
        data: { text: 'Opcodes Originais (Referência)', icon: '🔢' }
      },
      {
        type: 'table',
        data: {
          headers: ['Opcode', 'Nome', 'Direção'],
          rows: [
            ['0x0A', 'Self Appear (login)', 'S→C'],
            ['0x64', 'Map Description (full)', 'S→C'],
            ['0x65-0x68', 'Map Move (N/E/S/W)', 'S→C'],
            ['0x6B', 'Add Tile Thing', 'S→C'],
            ['0x6D', 'Remove Tile Thing', 'S→C'],
            ['0x6E', 'Move Creature', 'S→C'],
            ['0x78', 'Inventory Set Slot', 'S→C'],
            ['0x82', 'World Light', 'S→C'],
            ['0xA0', 'Player Stats', 'S→C'],
            ['0xA1', 'Player Skills', 'S→C'],
            ['0xB4', 'Creature Say', 'S→C'],
          ]
        }
      }
    ]
  },

  messages: {
    title: 'Catálogo de Mensagens',
    breadcrumb: 'Rede / Mensagens',
    description: 'Lista completa de todos os tipos de mensagens do protocolo WebSocket.',
    sections: [
      {
        type: 'heading',
        data: { text: 'Client → Server (Ações)', icon: '🎮' }
      },
      {
        type: 'table',
        data: {
          headers: ['type', 'Dados', 'Descrição'],
          rows: [
            ['login', 'name, password', 'Autenticação'],
            ['logout', '—', 'Desconectar'],
            ['move', 'direction (0-3)', 'Mover 1 tile'],
            ['autoWalk', 'path: Direction[]', 'Auto-walk por caminho'],
            ['stop', '—', 'Parar movimento'],
            ['turn', 'direction', 'Virar sem mover'],
            ['attack', 'targetId', 'Atacar criatura'],
            ['follow', 'targetId', 'Seguir criatura'],
            ['cancelAttack', '—', 'Parar ataque/follow'],
            ['say', 'text, channelId?, type?', 'Falar/spell'],
            ['useItem', 'position, stackPos, itemId', 'Usar item'],
            ['moveItem', 'from, to, count', 'Mover item'],
            ['equipItem', 'itemId', 'Equipar item'],
            ['setFightMode', 'mode, chase, secure', 'Modo combate'],
          ]
        }
      },
      {
        type: 'heading',
        data: { text: 'Server → Client (Updates)', icon: '📡' }
      },
      {
        type: 'table',
        data: {
          headers: ['type', 'Dados', 'Descrição'],
          rows: [
            ['loginSuccess', 'playerId, position', 'Login OK'],
            ['loginError', 'message', 'Login falhou'],
            ['mapDescription', 'position, tiles', 'Mapa completo'],
            ['mapSlice', 'direction, tiles', 'Mapa parcial (move)'],
            ['creatureAppear', 'creature{...}', 'Nova criatura visível'],
            ['creatureMove', 'id, oldPos, newPos', 'Criatura se moveu'],
            ['creatureRemove', 'id', 'Criatura saiu do viewport'],
            ['creatureSay', 'id, text, type', 'Criatura falou'],
            ['creatureHealth', 'id, health, healthMax', 'HP mudou'],
            ['magicEffect', 'position, effectId', 'Efeito visual'],
            ['distanceEffect', 'from, to, effectId', 'Projétil'],
            ['playerStats', 'health, mana, level...', 'Stats atualizados'],
            ['playerSkills', 'skills{...}', 'Skills atualizados'],
            ['textMessage', 'type, text', 'Mensagem de sistema'],
          ]
        }
      }
    ]
  },

  rendering: {
    title: 'Sistema de Rendering',
    breadcrumb: 'Cliente / Rendering',
    description: 'Como o cliente renderiza o mundo isométrico — viewport, z-ordering, animações e luz.',
    sections: [
      {
        type: 'heading',
        data: { text: 'Viewport', icon: '🖼️' }
      },
      {
        type: 'text',
        data: 'O cliente renderiza uma janela de 17×13 tiles centrada no player (18×14 com buffer). Cada tile tem 32×32 pixels. O rendering segue a ordem de stacking (ground → borders → bottom items → common items → creatures → top items).'
      },
      {
        type: 'stats',
        data: [
          { value: '32px', label: 'Tile Size' },
          { value: '17×13', label: 'Viewport' },
          { value: '60fps', label: 'Target FPS' },
          { value: '16', label: 'Z-Layers' },
        ]
      },
      {
        type: 'heading',
        data: { text: 'Outfit System (Personagens)', icon: '👕' }
      },
      {
        type: 'code',
        data: {
          lang: 'typescript',
          file: 'client/src/rendering/OutfitCompositor.ts',
          code: `interface Outfit {
  lookType: number;   // ID do modelo base
  lookHead: number;   // Cor do head (0-132, palette index)
  lookBody: number;   // Cor do body
  lookLegs: number;   // Cor das legs
  lookFeet: number;   // Cor dos feet
  lookAddons: number; // Bitmask: 0=none, 1=addon1, 2=addon2, 3=both
  lookMount: number;  // ID da montaria
}

// Rendering funciona por camadas coloríveis:
// 1. Template base (pixels cinza = "colorizable")
// 2. Para cada parte, pixels são recoloridos
//    com a cor selecionada da paleta`
        }
      },
      {
        type: 'heading',
        data: { text: 'Sistema de Luz', icon: '💡' }
      },
      {
        type: 'code',
        data: {
          lang: 'text',
          file: 'Light Cycle',
          code: `Ciclo Dia/Noite (1h real = 1 dia no jogo):
  06:00 → Sunrise     (luz: 40 → 250)
  08:00 → Full day    (luz: 250)
  18:00 → Sunset      (luz: 250 → 40)
  20:00 → Full night  (luz: 40)

Per-tile/creature light:
  LightInfo = { level: 0-255, color: palette_index }
  Padrão: color=215 (warm white)`
        }
      }
    ]
  },

  sprites: {
    title: 'Sprites & Assets',
    breadcrumb: 'Cliente / Sprites',
    description: 'Formato OBD 2.0, categorias de sprites, e como criar assets para o jogo.',
    sections: [
      {
        type: 'heading',
        data: { text: 'Formato OBD 2.0 (ObjectBuilder)', icon: '🎨' }
      },
      {
        type: 'code',
        data: {
          lang: 'text',
          file: 'OBD 2.0 Structure',
          code: `Header:
  [1 byte] Version major
  [1 byte] Version minor
  [2 bytes] Client version
  [1 byte] Category (1=Item, 2=Outfit, 3=Effect, 4=Missile)

Texture Patterns:
  [1 byte] Width (em tiles)
  [1 byte] Height
  [1 byte] Layers, Pattern X, Pattern Y, Pattern Z
  [1 byte] Frames (animação)
  
  Se frames > 1:
    [1 byte]  Animation type
    [4 bytes] Frame strategy
    Per frame: [4+4 bytes] Min/Max duration (ms)
  
  Per sprite:
    [4 bytes]  Sprite ID
    [4096 bytes] ARGB 32-bit (32×32 = 1024px × 4B)

Compression: LZMA`
        }
      },
      {
        type: 'heading',
        data: { text: 'Categorias de Assets', icon: '📦' }
      },
      {
        type: 'cards',
        data: [
          { icon: '📦', iconClass: 'purple', title: 'Items', subtitle: 'Category 1', body: 'Armas, armaduras, poções, decoração, terreno. Flags: stackable, walkable, blockSolid, container, etc.' },
          { icon: '👤', iconClass: 'green', title: 'Outfits', subtitle: 'Category 2', body: 'Modelos de personagem/criatura com camadas coloríveis (head/body/legs/feet) e addons.' },
          { icon: '✨', iconClass: 'amber', title: 'Effects', subtitle: 'Category 3', body: 'Efeitos mágicos (explosões, curas, teleports). Animados com múltiplos frames.' },
          { icon: '🎯', iconClass: 'red', title: 'Missiles', subtitle: 'Category 4', body: 'Projéteis (flechas, bolas de fogo, raios). Animação direcional com patterns.' },
        ]
      },
      {
        type: 'callout',
        data: {
          type: 'info',
          title: '💡 Nossa Abordagem',
          text: 'Em vez do formato binário OBD, usaremos PNG sprite sheets + JSON atlas. Mais fácil de editar, version control e tooling. Placeholder sprites com retângulos coloridos no início.'
        }
      }
    ]
  },

  'ui-system': {
    title: 'UI System',
    breadcrumb: 'Cliente / UI',
    description: 'Sistema de interface do usuário — painéis, inventário, chat, battle list e mais.',
    sections: [
      {
        type: 'heading',
        data: { text: 'Módulos de UI (do otcv8)', icon: '🖥️' }
      },
      {
        type: 'text',
        data: 'O otcv8 tem 56 módulos de UI escritos em Lua + OTML (markup customizado). Cada módulo é autocontido com sua lógica, layout e estilos. Na nossa abordagem, usaremos HTML/CSS/JS com React components.'
      },
      {
        type: 'cards',
        title: 'Principais Painéis',
        data: [
          { icon: '❤️', iconClass: 'red', title: 'Health/Mana Bar', subtitle: 'game_healthinfo', body: 'Barras de HP e Mana do player local. Atualiza em tempo real.' },
          { icon: '🎒', iconClass: 'amber', title: 'Inventory', subtitle: 'game_inventory', body: '10 slots de equipamento + containers abertos (backpacks).' },
          { icon: '⚔️', iconClass: 'purple', title: 'Battle List', subtitle: 'game_battle', body: 'Lista de criaturas próximas com HP bars. Click para atacar/seguir.' },
          { icon: '📊', iconClass: 'green', title: 'Skills Panel', subtitle: 'game_skills', body: 'Nível e progresso de todas as skills do personagem.' },
          { icon: '💬', iconClass: 'cyan', title: 'Console/Chat', subtitle: 'game_console', body: 'Chat com abas de channels. Say, whisper, yell, private, trade.' },
          { icon: '🗺️', iconClass: 'rose', title: 'Minimap', subtitle: 'game_minimap', body: 'Minimapa com marcadores, zoom e fullscreen. Auto-mapping.' },
        ]
      }
    ]
  },

  progression: {
    title: 'Progressão & Experiência',
    breadcrumb: 'Sistemas / Progressão',
    description: 'Fórmulas de XP, skill advancement, death penalty e stages.',
    sections: [
      {
        type: 'heading',
        data: { text: 'Fórmula de XP por Level', icon: '📈' }
      },
      {
        type: 'code',
        data: {
          lang: 'typescript',
          file: 'shared/formulas.ts',
          code: `// XP necessário para atingir level N:
function xpForLevel(n: number): number {
  return Math.floor((50/3) * (n*n*n - 6*n*n + 17*n - 12));
}

// Exemplos:
// Level 1:   0 XP
// Level 2:   100 XP
// Level 8:   4,200 XP
// Level 20:  29,200 XP
// Level 50:  378,000 XP
// Level 100: 15,694,800 XP
// Level 200: 126,834,800 XP`
        }
      },
      {
        type: 'heading',
        data: { text: 'Experience Stages', icon: '🎚️' }
      },
      {
        type: 'table',
        data: {
          headers: ['Level Range', 'Multiplicador', 'XP Efetivo'],
          rows: [
            ['1 — 8', '7x', 'Leveling rápido para rookies'],
            ['9 — 20', '6x', 'Início do mid-game'],
            ['21 — 50', '5x', 'Mid-game'],
            ['51 — 100', '4x', 'Late-game'],
            ['101+', '3x', 'End-game'],
          ]
        }
      },
      {
        type: 'heading',
        data: { text: 'Death Penalty', icon: '💀' }
      },
      {
        type: 'text',
        data: 'Na morte, o jogador perde uma % de XP (configurável), uma % de skill tries, e pode perder items do inventário (exceto depot). Blessings reduzem a penalidade. O jogador reaparece no templo da sua town.'
      }
    ]
  },

  social: {
    title: 'Sistemas Sociais',
    breadcrumb: 'Sistemas / Social',
    description: 'Chat, party, guild e sistemas de interação entre jogadores.',
    sections: [
      {
        type: 'heading',
        data: { text: 'Chat Channels', icon: '💬' }
      },
      {
        type: 'table',
        data: {
          headers: ['Tipo', 'Alcance', 'Notas'],
          rows: [
            ['Say', '~8 tiles', 'Fala normal local'],
            ['Whisper', '~2 tiles', 'Sussurro (só perto)'],
            ['Yell', '~30 tiles', 'Grito (level mínimo 2)'],
            ['Private', 'Global', 'Mensagem direta para player'],
            ['Channel', 'Global', 'Channels: Game, Trade, Help, custom'],
          ]
        }
      },
      {
        type: 'heading',
        data: { text: 'Party System', icon: '👥' }
      },
      {
        type: 'text',
        data: 'Líder convida membros. Shared XP quando todos estão perto, mesmo floor, e diferença de level não excede 2/3 do maior level. Bônus: +20% base + 5% por membro.'
      },
      {
        type: 'heading',
        data: { text: 'Guild System', icon: '🏰' }
      },
      {
        type: 'text',
        data: 'Hierarquia de 3 ranks padrão: Leader, Vice-Leader, Member. Guild wars, MOTD (message of the day), convites e expulsões.'
      }
    ]
  },

  economy: {
    title: 'Sistema Econômico',
    breadcrumb: 'Sistemas / Economia',
    description: 'Moedas, NPC trade, market (leilão) e trading entre players.',
    sections: [
      {
        type: 'heading',
        data: { text: 'Sistema de Moedas', icon: '💰' }
      },
      {
        type: 'table',
        data: {
          headers: ['Item', 'Valor', 'Stack Max'],
          rows: [
            ['Gold Coin', '1 gold', '100'],
            ['Platinum Coin', '100 gold', '100'],
            ['Crystal Coin', '10,000 gold', '100'],
            ['Bank Balance', 'Ilimitado', 'N/A'],
          ]
        }
      },
      {
        type: 'heading',
        data: { text: 'Market (Leilão)', icon: '🏪' }
      },
      {
        type: 'text',
        data: 'Sistema de ofertas de compra e venda com preço e quantidade. Duração configurável (30 dias padrão). Pode ser anônimo. Estados: Active → Accepted/Cancelled/Expired.'
      }
    ]
  },

  world: {
    title: 'Mundo (Luz, NPCs, Housing)',
    breadcrumb: 'Sistemas / Mundo',
    description: 'Ciclo dia/noite, NPCs com diálogos, quests com storage values, e housing.',
    sections: [
      {
        type: 'heading',
        data: { text: 'Ciclo Dia/Noite', icon: '🌅' }
      },
      {
        type: 'table',
        data: {
          headers: ['Horário Game', 'Evento', 'Luz'],
          rows: [
            ['06:00 (360min)', 'Sunrise começa', '40 → 250'],
            ['08:00 (480min)', 'Dia pleno', '250'],
            ['18:00 (1080min)', 'Sunset começa', '250 → 40'],
            ['20:00 (1200min)', 'Noite plena', '40'],
          ]
        }
      },
      {
        type: 'text',
        data: 'Conversão: 1 hora real = 1 dia no jogo. 2.5 segundos real = 1 minuto no jogo.'
      },
      {
        type: 'heading',
        data: { text: 'NPCs e Quests', icon: '📋' }
      },
      {
        type: 'text',
        data: 'NPCs usam diálogos baseados em keywords. Quests são rastreadas via storage values — pares chave-valor por jogador (ex: storage[10001]=0 não começou, =1 em progresso, =3 completou).'
      },
      {
        type: 'heading',
        data: { text: 'Housing', icon: '🏠' }
      },
      {
        type: 'text',
        data: 'Casas são áreas definidas no mapa com proprietário, personalização (items, doors), aluguel periódico, sub-owners, guest lists e bid system para compra.'
      }
    ]
  },

  constants: {
    title: 'Constantes do Jogo',
    breadcrumb: 'Referência / Constantes',
    description: 'Todas as constantes fundamentais do jogo organizadas por categoria.',
    sections: [
      {
        type: 'heading',
        data: { text: 'Tiles & Viewport', icon: '🧱' }
      },
      {
        type: 'table',
        data: {
          headers: ['Constante', 'Valor', 'Descrição'],
          rows: [
            ['TILE_SIZE', '32', 'Pixels por tile'],
            ['ITEM_STACK_SIZE', '100', 'Max items empilhados'],
            ['MAX_STACKPOS', '10', 'Max coisas visíveis no tile'],
            ['VIEWPORT_X', '8', 'Tiles em cada lado (horizontal)'],
            ['VIEWPORT_Y', '6', 'Tiles em cada lado (vertical)'],
            ['MAP_MAX_LAYERS', '16', 'Z-levels (0-15)'],
            ['GROUND_LEVEL', '7', 'Z padrão (chão)'],
          ]
        }
      },
      {
        type: 'heading',
        data: { text: 'Timing', icon: '⏱️' }
      },
      {
        type: 'table',
        data: {
          headers: ['Constante', 'Valor', 'Descrição'],
          rows: [
            ['GAME_TICK_MS', '50', '20 ticks/segundo'],
            ['CREATURE_THINK_MS', '1000', 'AI think frequency'],
            ['MOVE_INTERVAL_MS', '1000', 'Base walk interval'],
            ['WALK_COST_NORMAL', '10', 'Custo walk reto'],
            ['WALK_COST_DIAGONAL', '25', 'Custo walk diagonal'],
            ['PZ_LOCK_DURATION', '60000', 'ms em combate'],
            ['ATTACK_INTERVAL_BASE', '2000', 'ms entre auto-attacks'],
          ]
        }
      },
      {
        type: 'heading',
        data: { text: 'Player', icon: '👤' }
      },
      {
        type: 'table',
        data: {
          headers: ['Constante', 'Valor', 'Descrição'],
          rows: [
            ['MAX_PLAYER_NAME_LENGTH', '25', 'Caracteres no nome'],
            ['STAMINA_MAX', '2520', 'Minutos (42 horas)'],
            ['SOUL_MAX', '200', 'Soul points máximo'],
            ['DEFAULT_SPEED', '220', 'Velocidade base padrão'],
          ]
        }
      },
      {
        type: 'heading',
        data: { text: 'Network', icon: '🌐' }
      },
      {
        type: 'table',
        data: {
          headers: ['Constante', 'Valor', 'Descrição'],
          rows: [
            ['LOGIN_PORT', '7171', 'Porta de login'],
            ['GAME_PORT', '7172', 'Porta do jogo'],
            ['MAX_PACKETS_PER_SECOND', '25', 'Rate limit'],
            ['CONNECTION_TIMEOUT', '30', 'Segundos'],
            ['TIME_BETWEEN_ACTIONS', '200', 'ms (exhaust items)'],
            ['TIME_BETWEEN_EX_ACTIONS', '1000', 'ms (exhaust spells)'],
          ]
        }
      }
    ]
  },

  database: {
    title: 'Database Schema',
    breadcrumb: 'Referência / Database',
    description: 'Estrutura de banco de dados extraída do schema.sql original.',
    sections: [
      {
        type: 'heading',
        data: { text: 'Tabelas Principais', icon: '🗄️' }
      },
      {
        type: 'table',
        data: {
          headers: ['Tabela', 'Descrição', 'Relações'],
          rows: [
            ['accounts', 'Contas de usuário', 'PK: id'],
            ['players', 'Personagens', 'FK: account_id → accounts'],
            ['player_items', 'Inventário', 'FK: player_id → players'],
            ['player_spells', 'Spells aprendidas', 'FK: player_id → players'],
            ['player_storage', 'Quest/storage values', 'FK: player_id → players'],
            ['player_deaths', 'Histórico de mortes', 'FK: player_id → players'],
            ['guilds', 'Guildas', 'FK: ownerid → players'],
            ['guild_membership', 'Membros', 'FK: player_id, guild_id'],
            ['houses', 'Casas', 'FK: owner → players'],
            ['market_offers', 'Ofertas de market', 'FK: player_id → players'],
            ['towns', 'Cidades (spawn points)', 'PK: id'],
          ]
        }
      },
      {
        type: 'heading',
        data: { text: 'Players Table (detalhada)', icon: '👤' }
      },
      {
        type: 'code',
        data: {
          lang: 'sql',
          file: 'schema.sql',
          code: `CREATE TABLE players (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL,
  account_id INT NOT NULL,
  level INT DEFAULT 1,
  vocation INT DEFAULT 0,
  health INT DEFAULT 150,
  healthmax INT DEFAULT 150,
  experience BIGINT DEFAULT 0,
  mana INT DEFAULT 0,
  manamax INT DEFAULT 0,
  maglevel INT DEFAULT 0,
  soul INT DEFAULT 0,
  town_id INT DEFAULT 1,
  posx INT, posy INT, posz INT,
  cap INT DEFAULT 400,
  stamina SMALLINT DEFAULT 2520,
  -- 7 skills with level + tries
  skill_fist INT DEFAULT 10,
  skill_club INT DEFAULT 10,
  skill_sword INT DEFAULT 10,
  skill_axe INT DEFAULT 10,
  skill_dist INT DEFAULT 10,
  skill_shielding INT DEFAULT 10,
  skill_fishing INT DEFAULT 10,
  FOREIGN KEY (account_id) REFERENCES accounts(id)
);`
        }
      }
    ]
  },

  'tech-stack': {
    title: 'Tech Stack',
    breadcrumb: 'Referência / Tech Stack',
    description: 'Tecnologias escolhidas e justificativas de cada decisão.',
    sections: [
      {
        type: 'heading',
        data: { text: 'Comparativo: Original vs Novo', icon: '🔄' }
      },
      {
        type: 'table',
        data: {
          headers: ['Componente', 'Tibia Original', 'Nova MMO', 'Justificativa'],
          rows: [
            ['Linguagem Server', 'C++ (complexo)', 'TypeScript/Node.js', 'Prototipação rápida, type-safe'],
            ['Linguagem Client', 'C++ + Lua', 'TypeScript + React', 'Ecossistema web, hot reload'],
            ['Rendering', 'OpenGL (nativo)', 'HTML5 Canvas 2D', 'Zero install, cross-platform'],
            ['Protocolo', 'TCP + XTEA binário', 'WebSocket + JSON', 'Debug fácil, testável'],
            ['Database', 'MySQL', 'SQLite → PostgreSQL', 'Zero setup para dev'],
            ['Scripting', 'Lua embutido', 'TypeScript nativo', 'Um só idioma, tipado'],
            ['Map Format', 'OTBM binário', 'JSON + chunks', 'Editável, versionável'],
            ['Sprites', 'DAT/SPR binário', 'PNG + JSON atlas', 'Ferramentas padrão'],
            ['Build', 'CMake + vcpkg', 'Vite + npm', 'Ecossistema moderno'],
            ['UI Framework', 'OTML custom', 'React + CSS', 'Componentizável'],
          ]
        }
      },
      {
        type: 'callout',
        data: {
          type: 'info',
          title: '🎯 Filosofia',
          text: 'Escolhemos tecnologias que maximizam velocidade de desenvolvimento e testabilidade. Performance pode ser otimizada depois (binary protocol, WebGL, workers). O importante agora é ter algo jogável rápido.'
        }
      }
    ]
  },
};
