import { SYS_FIND_KOOP_POOK } from "../sys/SYS.js";

export function IMPORT_RECHNER(input) {

    // VECTOR.EXP global
    const vector = window.vectorEXP;

    // RESPO CSV laden
    const respoList = window.RESPO_LIST || [];

    // SYS entscheidet KOOP + POOK
    const match = SYS_FIND_KOOP_POOK(respoList);

    // PIPE‑4 Verarbeitung
    const step1 = input;
    const step2 = {
        qi: vector.qi(input),
        iqq: vector.iqq(input),
        octa: vector.octa(input),
        pipe: `pipe${(input % 12) || 12}`
    };
    const step3 = match.selected;
    const step4 = {
        sys: `SYS-${match.selected.key}`,
        valid: match.koop && match.pook
    };

    return {
        PIPE4: {
            input: step1,
            vector: step2,
            respo: step3,
            sys: step4
        }
    };
}
