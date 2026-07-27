# IMPORT · iki1uc System

IMPORT ist das Einlass‑Modul des iki1uc‑Systems.  
Es übernimmt externe Werte, führt sie durch VECTOR.EXP, bewertet sie über SYS,  
und erzeugt eine vollständige PIPE‑12‑Analyse.

---

## 🔧 Struktur

IMPORT/
│
├── index.html              → Hauptansicht / PIPE12‑Output
├── PIPE.js                 → PIPE‑12 Engine (QI, IQQ, OCTA, Orbit‑C, Stationen)
├── SYS.js                  → KOOP/POOK‑Finder + Score‑System
├── SYS.mode                → PQ / PX / PR Anzeige
├── rechner.js              → Wrapper für PIPE12
├── respo-funktion-6.csv    → RESPO‑Definitionen
├── id.html                 → ID‑Modus (KOOP / NEUTRAL / POOK)
└── POdex.html              → JSON‑Output der PIPE12‑Analyse


---

## ⚙️ Funktionsweise

### 1) **VECTOR.EXP**
IMPORT lädt VECTOR‑Rohdaten (`vector_raw.json`)  
und erzeugt:



window.vectorEXP = new VECTOR_EXP(raw)


Damit stehen alle Achsen bereit:

- QI  
- IQQ  
- OCTA  
- PIPE‑3  
- PIPE‑6  
- PIPE‑9  
- PIPE‑12  
- Orbit‑C  
- Stationen  

---

### 2) **RESPO‑Liste**
Die Datei `respo-funktion-6.csv` definiert:

- RESPO_CORE  
- RESPO_SCAN9  
- RESPO_AXIS7  
- RESPO_LINE2  
- RESPO_GHOST  
- nc-check  

---

### 3) **SYS – KOOP/POOK + Score**
SYS bewertet jeden RESPO über:

- Connect‑Fähigkeit  
- QI  
- IQQ  
- OCTA  
- PIPE‑Score  
- Orbit‑Score  
- Stationen‑Score  

Ergebnis:


RESPO_CORE = KOOP + POOK


---

### 4) **PIPE‑12**
PIPE12 erzeugt:

step1  INPUT
step2  QI
step3  IQQ
step4  OCTA
step5  PIPE3
step6  PIPE6
step7  PIPE9
step8  PIPE12
step9  Orbit‑C
step10 Station
step11 RESPO
step12 SYS‑OUT (KOOP/POOK + Score)


---

## 📄 Beispiel‑Output

```json
{
  "PIPE12": {
    "step1": 42,
    "step2": 6,
    "step3": 0,
    "step4": 2,
    "step5": 0,
    "step6": 0,
    "step7": 6,
    "step8": 6,
    "step9": "⊗",
    "step10": "ORBIT",
    "step11": {
      "key": "RESPO_CORE",
      "func": "Hauptkern",
      "Connect‑Fähigkeit": "JA – Voll"
    },
    "step12": {
      "sys": "SYS-RESPO_CORE",
      "valid": true,
      "score": 137
    }
  }
}
🧩 ID‑Modus
IMPORT besitzt drei Identitäts‑Modi:

KOOP → Kooperation aktiv

NEUTRAL → stabil, keine Aktion

POOK → Prozess‑Abwicklung aktiv

Diese werden über id.html gesteuert.

✔ Status
IMPORT ist vollständig:

VECTOR‑kompatibel

SYS‑kompatibel

PIPE‑12‑fähig

Orbit‑C‑fähig

Stationen‑fähig

RESPO‑fähig

KOOP/POOK‑fähig


---

# ⭐ ID‑Modul (ID.js)  
**→ 1:1 kopieren → in `IMPORT/ID.js` speichern**

```js
export const ID_KOOP = {
    mode: "KOOP",
    info() {
        return `
ID: KOOP
Status: Aktiv
Funktion: Kooperation mit VECTOR.EXP
Rolle: RESPO_CORE → PIPE12 → SYS
        `;
    }
};

export const ID_NEUTRAL = {
    mode: "NEUTRAL",
    info() {
        return `
ID: NEUTRAL
Status: Stabil
Funktion: Achsen halten
Rolle: ANKER / PQ / PX / PR
        `;
    }
};

export const ID_POOK = {
    mode: "POOK",
    info() {
        return `
ID: POOK
Status: Prozess‑Abwicklung
Funktion: PIPE‑12 Durchlauf
Rolle: Orbit‑C / Stationen / NC‑Transit
        `;
    }
};

