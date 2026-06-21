# SAAZA Study Tools

Live site: **https://rcarney94.github.io/saaza-calculator**

Interactive study tools for MSAAZA course. Created by Ryan Carney, MSgt, 136CRF.

Last updated: June 20, 2026

## Tools

### Calculators
- **LZ Trig Calculator** — Obstruction height, straight-line distance, elevation difference, finding θ, two-angle structure height, LZ clearance pass/fail, and unit conversions
- **SPACI Calculator** — Scores semi-prepared airfield surface condition (Green/Amber/Red) for C-17 and C-130. Computes Total Deduct Value and q exactly with full work shown; final SPACI read from the authoritative TSPWG 3-260-03.02-19 curve and lookup tables (embedded, zoomable)
- **Drop Zone Size & PI Calculator** — Minimum DZ dimensions and Point of Impact placement via the MANFAS method, with every number sourced from DAFMAN 13-217 (Tables 3.1 & 3.2) and every adjustment shown. Supports CDS, Personnel, and Heavy Equipment for C-17 and C-130. Includes a **capacity mode** (the reverse): enter an actual DZ width and length and it reports the maximum CDS bundles / parachutists / HE platforms and the altitude ceiling the DZ supports, broken out by day/night and single/formation
- **DCP Calculator** — Dynamic Cone Penetrometer data reduction. Enter penetration readings (blows + depth) and it computes DCP index → CBR per interval (TSPWG Tables 2-3/2-4, verified equations), builds the depth-vs-CBR profile, groups layers, and flags the controlling (weakest) layer. Multi-hole survey support, persistent entries, import/export, and export to the official DCP Data Sheet format (TSPWG Figure 2-13). The controlling CBR is the value carried into the allowable-passes determination, which is read from the appropriate aircraft evaluation chart or computed in PCASE
- **Coordinate Converter** — Two-way conversion between Lat/Long (decimal), Degrees-Minutes-Seconds, UTM (zone/hemisphere/Easting/Northing), and MGRS. Enter any one format and all others populate instantly, including the degrees-decimal-minute format used on the survey form. Also converts azimuths between **True, Grid, and Magnetic north**: grid convergence is computed automatically from the position (pure geometry — no input, never drifts), and magnetic declination is entered by the user (from NOAA/map/DAGR, since it varies by location and over time). WGS 84 datum; Easting/Northing rounded to the nearest meter (standard). Includes open-in-maps links. Conversion math verified against known reference points
- **Gradient & Glideslope Calculator** — Six modes: (1) grade ↔ elevation ↔ angle — works from the field's angle + distance (clinometer + laser, slant or horizontal), or rise & run, giving decimal/percent grade, degrees, and the rise in feet and feet-inches; (2) the 20-ft line-level reduction table (rise in inches per segment → cumulative section grade); (3) a longitudinal profile checking both the ±3% cumulative and the ±1.5%-per-200-ft change limits; (4) a **transverse gradient** check (15-ft segments from centerline to edge, averaged, against the ±0.5–3% drainage/trafficability window); (5) a Zone A/B transverse drop check converting measured grade to the real elevation drop and checking the C-130 limits (Zone A 35′ / 2′9″, Zone B 25′ / 6′3″ cumulative; custom for other airframes); (6) glideslope obstacle clearance (run:rise ratio vs C-130 35:1 and C-17 20:1). Clinometer readings can be entered as percent or degrees throughout, and every tab has a tap-to-open field-technique guide. Math from SAAZA Unit 1; limits from DAFMAN 13-217 Table 4.2. Every result shows the work

### Search
- **Reference Search** — Search across 6 SAAZA publications simultaneously (1,986 pages indexed)
- **Quick Reference Search** — Search all course slides across 8 units (395 slides), expandable results with direct slide links
- **Glossary & Acronyms** — Every acronym and term used across the tools and course (ALZ/HLZ/DZ, DCP/CBR/SPACI, MGRS/MANFAS, the AF survey forms, publications, and unit/role acronyms) in one searchable, category-filterable list

### Field Tools
- **Team Lead Checklist** — The 4-phase SAAZA process (Information Gathering, Preparation, Site Visit, Final Product Development) as an interactive checklist with notes and saved progress. A **Full / Hasty toggle** switches between the complete task list (≥ 12 hr) and the essential, flight-safety-critical subset for a compressed timeline (< 6 hr); progress, tab counts, and the printable output all follow the selected mode. A downloadable Excel version (`SAAZA_Team_Lead_Checklist.xlsx`) is also in the repo
- **Survey Field Guide** — A guided, step-by-step walkthrough for physically conducting a zone survey, useful to any surveyor (first survey or fiftieth) for keeping the whole job organized and delegated. Pick the survey type — **ALZ** (fixed-wing, AF 3822), **HLZ** (helicopter, AF 4303), or **DZ** (drop zone, AF 3823) — and the guide rebuilds the right crews for each (ALZ has a DCP team; HLZ and DZ don't, since they aren't load-bearing surveys). HLZ also includes an **optional ground-bearing spot-check** (one or two DCP tests, off by default) that you switch on when the surface looks soft — it folds into the time, equipment, and progress counts only when active, and can be baked into a shared locked plan if recon already shows soft ground. Enter your team size and the tool auto-builds the crews (Team Lead, DCP where relevant, survey/measure) and you can **add more teams** to split the work, **name members** (teams show their members' names), **move people** between teams, and **reassign individual tasks** to a specific team — full operational flexibility. A **per-team equipment table** lists exactly what each crew needs based on its assigned tasks (no second trip to the truck). Each step shows what to physically do, whether it's a two-person task, who's assigned, and **hyperlinked references — both the governing publication** (DAFMAN 13-217 chapters/sections, ETL 97-9, TSPWG, UFC 3-260-01) **and the relevant SAAZA class slide deck** (Units 1–5, plus 2.1/2.2 for DZ/HLZ), each **deep-linked to the specific slide** that teaches the task. Each task also links the **app tool to use** for it (and the exact tab — e.g. Gradient Calculator → Transverse/Grade/Glideslope tab; DCP → DCP Test Locations + DCP Calculator; DZ → DZ Calculator), and every team's tools are rolled up in a per-team "what each team needs" list. All links are **absolute URLs** so they work even from a shared/printed PDF. A **QR code + link** opens this same live guide on any teammate's phone, and a **"Lock & share my setup"** button (red until locked, green once locked) produces a read-only link/QR that opens the guide with the TL's exact teams already built — teammates can view and print it but **cannot change the teams** (only the TL edits). In the field, anyone can **focus** the guide to just one team's tasks, **check off** steps as they go (saved per device), and **collapse phases**; a rough **time-window estimate** shows how long the survey should take and shrinks as teams parallelize (a solo surveyor correctly sees the full serial time); a built-in **survey timer** (start / pause / reset, persists across reloads) runs live against that estimate and flags whether you're on track or over; a type-aware **photo checklist** (persists per device) tracks the required shots for each survey type with a running count; an inline **azimuth converter** (magnetic / grid / true, same convention as the Coordinate Converter) is on hand for obstacle shoots and approach axes; and each tool link opens the calculator **straight to the correct tab**. Includes Print / Save-as-PDF. Complements the Team Lead Checklist (process tracking) by covering on-the-ground execution. Each survey type also ends with a **cross-team support** step reflecting the multi-capable airman concept: when a team finishes its assigned tasks, it reinforces the other teams still working (on ALZ, the survey team backs up the DCP team and vice-versa; on HLZ/DZ, finished survey teams assist whoever still has work)
- **Equipment Checklist** — A pre-survey gear loadout list, distinct from the Team Lead Checklist. Pick the survey type (ALZ/HLZ/DZ, or All) and it shows exactly the gear that type needs — navigation & measurement, soil-bearing (DCP, ALZ only), documentation & forms, marking, and comms/power/safety. Check items off as you pack; state saves per device. Print / Save-as-PDF
- **Field Reference Card** — A one-page printable cheat sheet: ALZ/HLZ/DZ criteria and minimums, DCP rules, gradient & coordinate quick-reference, the form-per-type mapping, and the Talon Point submission routing. The pocket backup to the digital tools; prints to a single page
- **DCP Test Locations** — Where to place DCP readings on a landing zone, with a Full vs. Hasty survey toggle: an original top-down diagram of the test pattern (centerline, main-gear wheel paths, overruns, edges, turnarounds) plus written guidance and the test procedure (two-person operation, 36-in rods, 6-in plumb rule, record to 0.2 in / 5 mm on the DCP Data Sheet). Built from ETL 97-9 (Fig C.2) and TSPWG 3-260-03.02-19 — both Distribution Unlimited

### Flashcard Decks (279 cards total)
- **⭐ Mega Deck** — All 279 cards across all 8 units, filterable by unit
- **Unit 1 — Overview & Math** (57 cards)
- **Unit 2.1 — Drop Zone Criteria** (31 cards)
- **Unit 2.2 — Helicopter LZ Criteria** (21 cards)
- **Unit 2.3 — ALZ Fixed Wing Criteria** (23 cards)
- **Unit 3 — Soils & Distresses** (51 cards)
- **Units 3/5 — Survey Forms** (33 cards)
- **Unit 4 — SAAZA Process** (27 cards)
- **Unit 5 — SAAZA Completion** (32 cards)

### Reference Publications
- UFC 3-260-01 (2019, Change 3)
- TM 3-34.48-2 (2016)
- DAFMAN 13-217 (2021, Change 1: 2022)
- TSPWG 3-260-03.02-19 (2020)
- ETL 02-19 (2002) — Superseded by TSPWG
- ETL 97-9 (2002)

## Usage
All tools work directly in any mobile or desktop browser. No app installation required. Works offline once loaded.

On first open, the dashboard shows a one-time disclaimer (the user acknowledges that accuracy of survey products remains their responsibility); it appears once per browser and is dismissed with "Acknowledge & Continue." A small connectivity pill in the corner shows the device's online/offline state for situational awareness.

Every screen has a display-mode toggle (bottom-left): the **Default** view, a high-contrast **Sun** mode for daylight readability (larger text and touch targets), and a dimmed amber **NVG-considerate** mode for low-light/night use (lower your screen brightness as well). The choice persists across all tools, and the default is never changed automatically.

## File Structure
- Root: HTML tools, flashcard decks, and the Team Lead Checklist Excel file
- `/refs/`: Reference publication PDFs
- `/slides/`: Course slide PDFs (LibreOffice-converted for Quick Reference Search)
