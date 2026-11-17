Glowwing — best-game-01 working notes

Decision / implementation
- Original, no external assets: neon moth in a dark cave, canvas art and synthesized WebAudio only.
- Entry game: game/index.html plus vanilla ES modules in game/src/. Fixed-step 60 Hz simulation, separate render loop, seeded LCG enemy placement.
- Controls: WASD/arrows move, mouse aim, Space/right-click dash, E/left-click echo, 1–3 choose upgrade, Enter/click start and restart.
- Ten waves with a per-wave enemy quota, rising enemy rate/speed, upgrade choice after clearing wave 5, then wave 10 is the win condition. HUD score/HP/wave, lose/win screens and restart.
- Main deliverables: game/, main.ts, serve.ts, vendor/makefun-game.ts, screenshots/, dossier.json generated into output.

Self-checklist (current)
- Goal/theme: pass — Glowwing moth cave survival.
- Rules: pass — local static files, no external requests/assets; source split across requested modules.
- Controls: pass — keyboard, mouse, dash, echo, upgrades.
- Win/lose: pass — wave 10 win; zero HP game over; both end screens and restart path.
- Score: pass — kill points shown on HUD/end screen.
- Start: pass — title screen and Enter/click.
- Restart: pass — Enter/click from terminal states.
- HUD: pass — wave, score, HP, dash/echo cues.
- Sound: pass — synthesized oscillator loop/effects after user gesture.

Verification / caveats
- Initial `bundle --dry-run` attempted from /data/home/bestgame but command is unavailable (`bundle: command not found`). Continued with provided kit.
- `main.ts` was fully rewritten (not copied from the starter). `vendor/makefun-game.ts` remains the kit copy; do not edit it.
- Two runs of `MAKEFUN_OUTPUT_DIR=out node main.ts` succeeded and created `out/dossier.json` (schema `makefun/dossier/v1`, 3 images); the `out` folder was removed after testing.
- `LICENSE` was given the line `SPDX-License-Identifier: MIT`.
- Chromium headless on local serve produced actual JPEG captures: screenshots/1-title.jpg, 2-play.jpg, 3-end.jpg. Terminal screen captured from actual renderer with a temporary in-page test state; not a naturally completed run. Temporary debug hook has been removed from source. Do not claim naturally played win/lose screenshots.
- No git push, submission, or contact performed.
