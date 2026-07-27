export function SYS_FIND_KOOP_POOK(respoList) {

    const vector = window.vectorEXP;

    function scoreFor(respo) {

        const base = {
            "JA – Voll": 80,
            "Teilweise": 40,
            "Nein": 0
        }[respo["Connect‑Fähigkeit"]];

        const qi = vector.qi(respo.key.length);
        const iqq = vector.iqq(respo.key.length);
        const octa = vector.octa(respo.key.length);

        const pipeScore = {
            3: 10,
            6: 20,
            9: 30,
            12: 40
        }[(respo.key.length % 12) || 12];

        const orbitScore = qi * 5;
        const stationScore = (qi + 1) * 3;

        return base + pipeScore + orbitScore + stationScore;
    }

    const best = respoList.reduce((a, b) =>
        scoreFor(a) > scoreFor(b) ? a : b
    );

    return {
        koop: best.key === "RESPO_CORE",
        pook: best.key === "RESPO_CORE",
        selected: best,
        score: scoreFor(best),
        reason: "RESPO_CORE hat höchste SYS+VECTOR+PIPE+Orbit+Stationen Bewertung."
    };
}
