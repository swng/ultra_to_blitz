let actionLines = {
    CLEAR1: 1,
    CLEAR2: 2,
    CLEAR3: 3,
    CLEAR4: 4,
    TSPIN_MINI: 0,
    TSPIN: 0,
    TSPIN_MINI_SINGLE: 1,
    TSPIN_SINGLE: 1,
    TSPIN_DOUBLE: 2,
    TSPIN_TRIPLE: 3,
    PERFECT_CLEAR: 0,
    COMBO: 0,
    CLEAR5: 5, // wtf is this
};

let actionScores = {
    CLEAR1: 100,
    CLEAR2: 300,
    CLEAR3: 500,
    CLEAR4: 800,
    TSPIN_MINI: 100,
    TSPIN: 400,
    TSPIN_MINI_SINGLE: 200,
    TSPIN_SINGLE: 800,
    TSPIN_DOUBLE: 1200, // ummm ultra doesn't have mini double but blitz does :thinking:
    TSPIN_TRIPLE: 1600,
    PERFECT_CLEAR: 3500,
    COMBO: 0,
    CLEAR5: 800, // unsure about this
};

function level(lines) {
    const thresholds = [
        3, 8, 15, 24, 35, 48, 63, 80, 99, 120, 144, 170, 198, 228, 260, 294,
        330,
    ];
    for (let i = 0; i < thresholds.length; i++) {
        if (lines < thresholds[i]) {
            return i + 1;
        }
    }
    return 18;
}

document.getElementById("ultra").textContent = `0:01	CLEAR1	100
0:01	TSPIN	400
0:02	CLEAR1	100
0:02	CLEAR2	300
0:04	CLEAR2	300
0:04	CLEAR2	300
0:04	PERFECT_CLEAR	3000
0:04	COMBOx1	50
0:05	TSPIN_DOUBLE	1200
0:06	TSPIN_SINGLE	1200
0:07	CLEAR1	100
0:07	CLEAR2	300
0:07	PERFECT_CLEAR	3000
0:07	COMBOx1	50
0:08	TSPIN_SINGLE	800
0:10	TSPIN_DOUBLE	1800
0:10	CLEAR1	100
0:11	CLEAR2	300
0:11	CLEAR2	300
0:11	PERFECT_CLEAR	3000
0:11	COMBOx1	50
0:13	TSPIN_DOUBLE	1200
0:14	CLEAR2	300
0:15	CLEAR2	300
0:15	PERFECT_CLEAR	3000
0:15	COMBOx1	50
0:16	TSPIN_SINGLE	800
0:17	TSPIN_DOUBLE	1800
0:18	TSPIN_DOUBLE	1800
0:19	CLEAR3	500
0:19	PERFECT_CLEAR	3000
0:21	TSPIN_DOUBLE	1200
0:22	CLEAR1	100
0:22	CLEAR1	100
0:22	COMBOx1	50
0:23	CLEAR1	100
0:23	COMBOx2	100
0:23	CLEAR1	100
0:23	PERFECT_CLEAR	3000
0:23	COMBOx3	150
0:24	CLEAR1	100
0:24	TSPIN	400
0:24	CLEAR1	100
0:25	CLEAR2	300
0:25	PERFECT_CLEAR	3000
0:26	CLEAR1	100
0:27	CLEAR1	100
0:27	CLEAR2	300
0:27	PERFECT_CLEAR	3000
0:27	COMBOx1	50
0:29	TSPIN_DOUBLE	1200
0:30	CLEAR2	300
0:30	CLEAR2	300
0:30	PERFECT_CLEAR	3000
0:30	COMBOx1	50
0:31	CLEAR1	100
0:32	TSPIN	400
0:32	CLEAR1	100
0:33	CLEAR2	300
0:33	PERFECT_CLEAR	3000
0:33	COMBOx1	50
0:34	CLEAR4	800
0:34	PERFECT_CLEAR	3000
0:36	TSPIN_DOUBLE	1800
0:37	TSPIN_DOUBLE	1800
0:37	CLEAR2	300
0:37	PERFECT_CLEAR	3000
0:37	COMBOx1	50
0:39	TSPIN_SINGLE	800
0:40	TSPIN_DOUBLE	1800
0:41	TSPIN_SINGLE	1200
0:41	CLEAR1	100
0:41	COMBOx1	50
0:42	CLEAR2	300
0:42	COMBOx2	100
0:42	CLEAR1	100
0:42	PERFECT_CLEAR	3000
0:42	COMBOx3	150
0:44	TSPIN_DOUBLE	1200
0:45	TSPIN_DOUBLE	1800
0:45	CLEAR2	300
0:45	PERFECT_CLEAR	3000
0:45	COMBOx1	50
0:47	TSPIN_SINGLE	800
0:48	TSPIN_DOUBLE	1800
0:49	TSPIN_SINGLE	1200
0:49	COMBOx1	50
0:49	CLEAR4	1200
0:49	PERFECT_CLEAR	3000
0:51	TSPIN_DOUBLE	1800
0:52	CLEAR1	100
0:53	CLEAR1	100
0:53	CLEAR2	300
0:53	PERFECT_CLEAR	3000
0:53	COMBOx1	50
0:54	TSPIN_SINGLE	800
0:56	TSPIN_DOUBLE	1800
0:57	CLEAR1	100
0:57	TSPIN_DOUBLE	1200
0:57	COMBOx1	50
0:57	CLEAR2	300
0:57	PERFECT_CLEAR	3000
0:57	COMBOx2	100
0:59	TSPIN_DOUBLE	1200
0:60	TSPIN	400
0:60	CLEAR2	300
1:00	CLEAR1	100
1:00	CLEAR1	100
1:00	PERFECT_CLEAR	3000
1:00	COMBOx1	50
1:03	CLEAR4	800
1:04	CLEAR1	100
1:04	CLEAR1	100
1:04	COMBOx1	50
1:04	CLEAR1	100
1:04	CLEAR1	100
1:04	PERFECT_CLEAR	3000
1:04	COMBOx1	50
1:06	TSPIN_DOUBLE	1200
1:07	CLEAR2	300
1:08	CLEAR2	300
1:08	PERFECT_CLEAR	3000
1:08	COMBOx1	50
1:09	CLEAR1	100
1:09	TSPIN_SINGLE	800
1:09	CLEAR2	300
1:09	PERFECT_CLEAR	3000
1:12	CLEAR4	800
1:12	PERFECT_CLEAR	3000
1:13	TSPIN_DOUBLE	1800
1:14	CLEAR1	100
1:15	CLEAR1	100
1:15	CLEAR2	300
1:15	PERFECT_CLEAR	3000
1:16	TSPIN_SINGLE	800
1:18	TSPIN_DOUBLE	1800
1:18	TSPIN_SINGLE	1200
1:19	CLEAR4	1200
1:19	PERFECT_CLEAR	3000
1:21	TSPIN_DOUBLE	1800
1:24	CLEAR1	100
1:24	CLEAR1	100
1:25	CLEAR2	300
1:25	PERFECT_CLEAR	3000
1:25	COMBOx1	50
1:26	CLEAR1	100
1:27	TSPIN_SINGLE	800
1:27	CLEAR2	300
1:27	PERFECT_CLEAR	3000
1:29	CLEAR1	100
1:29	CLEAR1	100
1:29	CLEAR2	300
1:29	PERFECT_CLEAR	3000
1:29	COMBOx1	50
1:31	TSPIN_DOUBLE	1200
1:33	CLEAR4	1200
1:33	PERFECT_CLEAR	3000
1:34	CLEAR1	100
1:34	TSPIN	400
1:35	CLEAR1	100
1:35	CLEAR2	300
1:36	CLEAR1	100
1:37	CLEAR1	100
1:37	COMBOx1	50
1:37	CLEAR2	300
1:37	PERFECT_CLEAR	3000
1:37	COMBOx2	100
1:39	TSPIN_DOUBLE	1200
1:40	TSPIN_DOUBLE	1800
1:40	CLEAR1	100
1:40	COMBOx1	50
1:40	CLEAR1	100
1:40	PERFECT_CLEAR	3000
1:40	COMBOx2	100
1:41	CLEAR1	100
1:42	TSPIN	400
1:42	CLEAR2	300
1:42	CLEAR1	100
1:42	PERFECT_CLEAR	3000
1:42	COMBOx1	50
1:44	CLEAR2	300
1:45	CLEAR2	300
1:45	PERFECT_CLEAR	3000
1:45	COMBOx1	50
1:46	TSPIN_DOUBLE	1200
1:47	TSPIN_DOUBLE	1800
1:47	CLEAR1	100
1:47	COMBOx1	50
1:47	CLEAR1	100
1:47	PERFECT_CLEAR	3000
1:47	COMBOx2	100
1:49	CLEAR1	100
1:49	TSPIN	400
1:49	CLEAR1	100
1:49	CLEAR2	300
1:49	PERFECT_CLEAR	3000
1:49	COMBOx1	50
1:51	CLEAR1	100
1:51	CLEAR3	500
1:51	PERFECT_CLEAR	3000
1:53	TSPIN_DOUBLE	1200
1:54	TSPIN_DOUBLE	1800
1:54	CLEAR1	100
1:54	COMBOx1	50
1:54	CLEAR1	100
1:54	PERFECT_CLEAR	3000
1:54	COMBOx2	100
1:56	CLEAR1	100
1:56	TSPIN	400
1:56	CLEAR1	100
1:56	CLEAR2	300
1:56	PERFECT_CLEAR	3000
1:56	COMBOx1	50
1:59	CLEAR4	800
1:59	PERFECT_CLEAR	3000
1:60	TSPIN_DOUBLE	1800`;

function ultra_to_blitz() {
    let input = document.getElementById("ultra").value;
    let actions = input.split("\n");

    let score = 0;
    let currLevel = 1;
    let lines = 0;

    let b2b = false;

    for (action_full of actions) {
        let action = action_full.split("\t")[1];
        // console.log(action);
        let indLines = 0;

        indLines = actionLines[action];

        if (indLines == undefined) {
            indLines = 0;
        }

        lines += indLines;

        currLevel = level(lines);

        let indScore = 0;
        indScore = actionScores[action];
        if (indScore == undefined) {
            indScore = 0;
            if (action.includes("COMBO")) {
                combo = parseInt(action.substring(6));
                indScore = 50 * combo;
            }
        }

        if (action.includes("TSPIN") || action.includes("CLEAR4")) {
            if (b2b) indScore *= 1.5;
            b2b = true;
        } else {
            b2b = false;
        }

        score += indScore * currLevel;
        // console.log(indScore)
    }

    document.getElementById(
        "output_1"
    ).value = `Score: ${score}\nLevel: ${currLevel}`;
}

function loadFile() {
    const [file] = document.querySelector("input[type=file]").files;
    const reader = new FileReader();

    reader.addEventListener(
        "load",
        () => {
            // this will then display a text file
            // console.log(reader.result);
            let replay = JSON.parse(reader.result);

            let clears = replay["endcontext"]["clears"];

            let score = replay["endcontext"]["piecesplaced"] * 40; // assume everything is hard dropped from very top

            score += clears["singles"] * 100;
            score += clears["doubles"] * 300;
            score += clears["triples"] * 500;
            score += clears["quads"] * 800;
            score += clears["minitspins"] * 100;
            score += clears["realtspins"] * 400;
            score += clears["minitspinsingles"] * 200;
            score += clears["tspinsingles"] * 800;
            score += clears["minitspindoubles"] * 1200; // jstris counts mini tsds as normal tsds
            score += clears["tspindoubles"] * 1200;
            score += clears["tspintriples"] * 1600;
            score += clears["tspinquads"] * 1600;
            score += clears["allclear"] * 3000;

            document.getElementById(
                "output_2"
            ).value = `assuming no b2b: ${score}`;

            score = replay["endcontext"]["piecesplaced"] * 40;

            score += clears["singles"] * 100;
            score += clears["doubles"] * 300;
            score += clears["triples"] * 500;
            score += clears["quads"] * 800 * 1.5;
            score += clears["minitspins"] * 100 * 1.5;
            score += clears["realtspins"] * 400 * 1.5;
            score += clears["minitspinsingles"] * 200 * 1.5;
            score += clears["tspinsingles"] * 800 * 1.5;
            score += clears["minitspindoubles"] * 1200 * 1.5;
            score += clears["tspindoubles"] * 1200 * 1.5;
            score += clears["tspintriples"] * 1600 * 1.5;
            score += clears["tspinquads"] * 1600 * 1.5;
            score += clears["allclear"] * 3000;

            document.getElementById(
                "output_2"
            ).value += `\nassuming all b2b: ${score}`;
        },
        false
    );

    if (file) {
        if (file.type && file.type != "text/ttr") {
            console.log("File is not a ttr.", file.type, file);
            return;
        }
        reader.readAsText(file);
    }
}
