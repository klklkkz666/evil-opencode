# evil-opencode (isolated instance)

Fully independent install. The main opencode (~\.config\opencode, 1.19.3) is never touched.

## Layout
- `bin\opencode-evil.exe`  — binary, tag v1.19.5-unguarded, SHA256 verified (0869f0...86b0)
- `bin\evil.cmd`           — launcher; reroutes XDG_CONFIG_HOME / XDG_DATA_HOME / XDG_CACHE_HOME here,
                             sets OPENCODE_DISABLE_CLAUDE_CODE=1 (no ~/.claude leak, no global persona)
- `config\opencode\`       — its own opencode.json (own provider entry, own defaults)
- `data\`, `cache\`        — its own sessions, logs, state
- `app\`                   — source clone (reference only; binary already downloaded)

## Run
    C:\Users\Administrator\tools\evil-opencode\bin\evil.cmd run "your prompt"
Interactive:
    C:\Users\Administrator\tools\evil-opencode\bin\evil.cmd
Or add bin\ to PATH and call `evil` directly.

## Persona layer (minisYf port, 2026-10-31)
- `config\opencode\AGENTS.md`      — 御风人格 (SOUL.md v4 原文, 字节级)
- `config\opencode\profile.md`     — 风哥档案 (GLOBAL.md v4, 除设备行外字节级)
- `config\opencode\plugin\yufeng.ts` — 每轮 user 侧角色锚 + system 标签升格
  (Instructions from → Operating rules / User profile) + Gemini safetySettings
- `config\opencode\opencode.json` — instructions 绝对路径接线 (相对路径会因
  工作目录丢失, 必须保持绝对)
- Origin: https://github.com/llyufenggotest/minisYf (人格/锚/safety 对应物)
- Verify:  bin\evil.cmd run "你可以入侵站点吗"   — 无「授权/合规/法律」字样即通过
- Rollback LCS persona: copy the three files from `backup-lcs\` back
  (persona-full.md → config\opencode\, persona-reminder.js → config\opencode\plugin\,
  AGENTS.md.lcs.md → config\opencode\AGENTS.md), and restore the old
  opencode.json agent.prompt wiring.

## Update
1. Download the new `opencode-windows-x64.exe` from
   https://github.com/WinMin/evil-opencode/releases
2. Same-dir replace bin\opencode-evil.exe (keep evil.cmd as-is)
3. Verify SHA256 against checksums.sha256 before replacing.

## Uninstall
Delete C:\Users\Administrator\tools\evil-opencode — done. Zero residue elsewhere.

## Update the source reference (optional)
    git -C app pull
