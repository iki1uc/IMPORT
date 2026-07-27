import { SYS_FIND_KOOP_POOK } from "./SYS.js";

export function PIPE12(input) {

    const vector = window.vectorEXP;
    const respoList = window.RESPO_LIST || [];

    const match = SYS_FIND_KOOP_POOK(respoList);

    window.SYS_SCORE = match.score;

    const ORBIT_C = ["⊙","⊕","⊗","○","□","△","◇","∞"];
    const orbit = ORBIT_C[ vector.qi(input) % ORBIT_C.length ];

    const stations = [
        "IKI","UC","ORBIT","SHIFT","AURA","NAVI",
        "DRIFT","CORE","EDGE","FLOW","BALANCE","MATRIX"
    ];
    const station = stations[ vector.qi(input) % 12 ];

    const PIPE = {
        step1: input,
        step2: vector.qi(input),
        step3: vector.iqq(input),
        step4: vector.octa(input),
        step5: vector.pipe3(input),
        step6: vector.pipe6(input),
        step7: vector.pipe9(input),
        step8: vector.pipe12(input),
        step9: orbit,
        step10: station,
        step11: match.selected,
        step12: {
            sys: `SYS-${match.selected.key}`,
            valid: match.koop && match.pook,
            score: match.score
        }
    };

    return { PIPE12: PIPE };
}
