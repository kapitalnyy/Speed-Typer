const paragraphs = [
    "Their statesman was, in this instant, a notorious hardback. The foremost wingless pheasant is, in its essence, a cog. The jacket is a rinse. Yet, a tart is the alpaca of a convoy. Serpentine legions demonstrate how schoolyards might transform into fabrics. Viewed differently, they were adrift without the mortal sled that embodied their stewardess. Contrary to belief, the cockney refrigerator reveals itself as a squiggly cyclone to the observant. The primary eagle-like pouch.",
    "Writers frequently mistake the cabbage for a mythical cleric, though it often feels more akin to a charmed sausage. Chased expanses highlight how in-laws may become georges. Writers commonly misread the tiger as an arboraceous hypothesis, though it often resembles a diseased ravioli. Ignoring recent debate, their troupe was, at this point, a clustered outfit. The grasp of a jest transforms into a draped stool. The initial marinated pawn is.",
    "The uncertainty remains whether a swine of the seashore is assumed to be a solid aviator. Conventional wisdom suggests a dusky tone is simply a standard. Rarely does one describe a bordered leonine as anything but a radiant alloy. The quiver is a glove. Yet, the cabinet is an inlet. If that's unclear, few would call a corpulent azure anything but a conic bow. The untasted railway manifests as an offstage cane to the discerning.",    
    "In contemporary times, the first lanky cat is, by nature, an output. An emu is the origin of a grill. A pressed exhaust is a trigger of the psyche. A flute is a score when viewed rightly. A sanitary is the chime of a surface. Few identify a tanned Brazil nut as anything but an elite nursery. The unwilling creature arises from a prickly gas. A safeguarded privilege's honor brings with it the notion that the clear expert is a solution.",
    "A niece is an oboe from a unique angle. As we can surmise, some argue the melodic Myanmar to be scarcely primitive. Foods and untidy ribbons are rarely disconnected. The mischievous wardrobe emerges as a rigid llama to observers. A joint is the summit's hem. Certain spirited laundries are merely violets. A resin is a horn by perception. A generous flight is a spanner of ideas. Some claim the rasping.",
    "An infant is a slate from another perspective. Prior to fortifications, chokers were just procedures. Bundles are merry kinfolk. An amalgam is the credit of a tram. The warrior of the scarecrow is considered a relaxed washer. A postage stamp isn't simply a strolling fee without being an alligator. A knack is a weather bureau's admirer. Their fragrance was, at that point, a hidden sentiment. The rival of a rashers morphs into a structured cougar.",
    "A high-speed jam is a mental linkage. One seldom detaches poultry from radiant eras. A creation is a spigot when viewed distinctly. The diagrams may resemble galvanized women. A Deborah is a farm machine's cetacean. Cod are premier Pacifics. Some view the fibrous Norwegian as less than splashy. A flagged bell's eruption evokes the thought that the inked horn is a provision. Dynamics are agitated assessments.",
    "In the last decade, bustling egrets have been likened to quantities. Undeniably, a laid-back pelt is a thought-formed sculpture. Contrary to notions, few equate a glossy loiterer to anything other than an ungrateful skeleton. The hen is a camel. They drifted without the inflamed leek that defined their poultry. An interrogator is a tasseled blast. Forward shakers show us how mufflers might be uncertainties. Few compare a hoofless punch to a hog.",
    "A wheeze is a speech under scrutiny. A stylized mower's shelf suggests that the sniffly fiber is a prism. Their wellness was, at that juncture, an earthy journal. This notion might hold; or the sawfish may mimic therapeutic intervals. A goatfish is a balloon when viewed anew. Nevertheless, a sledge is the postman's squash. The rival of an alarm clock turns into a sockless trench coat. Their contortion was, at that juncture.",
    "Writers frequently mislabel the banner as an aimless arithmetic, but it feels closer to a frowsy ore. Seldom does one call a speckled oven anything but a stammering currant. They wandered without the irate belief that encapsulated their pamphlet. Those tides are but pedestrians. Few call a quartered colon anything but a curving scooter. Though it's presumed, the narrative would state.",
    "Perhaps a corrugated holder isn't unlike a brittle reptile. A sawfish is a demise's figure. Writers tend to misinterpret the haze as a puffed asphalt, though it aligns more with a crisscrossed wardrobe. Some theorize the musical cohabiter to be not quite youthful. Evidence shows the proportions could be dreaming cycles. Before epochs, reserves were merely defenders. Their broth was, at that instant.",
    "A trial's aim evolves into a verdant yield. Dibblers are mistaken as womenfolk. The old-style reprimand arises as a jumbled pasture to those who perceive. Few characterize a powdery shove as anything but literary fauna. Yet, they strayed without the spicy screen that bound their cap. Widely accepted is the idea of a half-uncle as a manufacturing center. Colors and bleak openings are rarely distinct. Remaining uncertain, whether.",
    "A vagabond is a twin feline from a viewpoint. The flitting jaw of an ape hints that the sunken rupture is a leaflet. Their glaze was, then, a coarse daisy. The shelter is a wanderer. Contrary to reason, they faltered without the released thread that shaped their relative. A xylophone isn't a jungle procedure without archaeology. A harbor's bloom evolves into.",
    "Chills might mimic backdrop turnips. Colleges seldom disjoin from tinted slabs. Contrary to thought, the matron of a bird turns into a strung molecule. A pulse could scarcely mean a clearer endorsement without resembling attire. The earliest joined solace is a hosiery in its aspect. By extension, navigators may allude to blushiest primates. Differently noted, a scattered cord is a guide.",
    "Their musician was, at this point, a well-read pamphelet. The first wingless dove is, in its own sense, a cog. The jacket is a drizzle. Nevertheless, a muffin is the camel of a journey. Sinous battalions illustrate how slides can resemble silks. Viewed from another angle, they were adrift without the dire sled that framed their hostess. Contary to expectations, the conkney refrigerator emerges as a spiraling whirlwind to the attentive. The initial eagle-like pouch.",
    "Artists sometimes mistake the cabbage for a mythical cantor, thought in truth it feels more like an unblemished sausage. Chased distances demonstrate how in-laws may behave like charlies. Artists sometimes confuse the tiger with a spiky theorem, thought it seems closer to a pocked pizza. Controversy aside, their choir was, in that moment, a clustered tuxedo. The bundle of humor morphs into a draped seat. The first bring domino is.",
    "Today, the initial wiry puppy is, in its essence, an entry. An emu serves as the initiator of a feast. A compact exhaust becomes a weapon of thought. A violin is a tier when viewed rightly. A sanitazed is the cymbal of a surface. Rarely is a drab Peru mistaken for a pretentious game room. The unbidden critter arises from a spiny element. A safeguarded edge's regard brings the idea that the vivd analyst is a patch",
    "A sibling is a flute in the proper view. Statistically speaking, some assert the melodic Myanmar is somewhat unfinished. Foods cannot be divorced from frowzy bows. The mischevous wardrobe presents itself as a fibrous alpaca to those who observe. A hip glue is a horn in certain views. A gratis journey is a spanner of thoughts. Many propose the raspy. some scrappy laundries are simply regarded as orchist. That's why someone just like none of your business would potentially sign up for clear sheet of metal.",
];
const typingText = document.querySelector(".typing-text p")
const inpField = document.querySelector(".wrapper .input-field")
const tryAgainBtn = document.querySelector(".content button")
const timeTag = document.querySelector(".time span b")
const mistakeTag = document.querySelector(".mistake span")
const wpmTag = document.querySelector(".wpm span")
const cpmTag = document.querySelector(".cpm span")

let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = mistakes = isTyping = 0;

function loadParagraph() {
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    paragraphs[ranIndex].split("").forEach(char => {
        console.log(char);
        let span = `<span>${char}</span>`
        typingText.innerHTML += span;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
    let characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if (charIndex < characters.length - 1 && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if (typedChar == null) {
            if (charIndex > 0) {
                charIndex--;
                if (characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if (characters[charIndex].innerText == typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0: wpm;

        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = charIndex - mistakes;
    } else {
        clearInterval(timer);
        inpField.value = "";
    }
}

function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpmTag.innerText = wpm;
    } else {
        clearInterval(timer);
        let finalWpm = Math.round(((charIndex - mistakes) / 5) / maxTime * 60);
        finalWpm = finalWpm < 0 || !finalWpm || finalWpm === Infinity ? 0 : finalWpm;
        console.log(`Final WPM: ${finalWpm}`);
        if (finalWpm > 35) {
            alert("You should go touch grass. Your wpm: "+ finalWpm);
        } else {
            alert("You're definitely not addicted to the computer. Your wpm: "+ finalWpm);
        }
    }
}

function resetGame() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    mistakeTag.innerText = 0;
    cpmTag.innerText = 0;
}

loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);


const q1 = document.getElementById("`")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "`") {
        if (q1) {
            q1.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "`") {
        if (q1) {
            q1.classList.remove("click");
        }
    }
});

const n1 = document.getElementById("1")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "1") {
        if (n1) {
            n1.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "1") {
        if (n1) {
            n1.classList.remove("click");
        }
    }
});

const n2 = document.getElementById("2")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "2") {
        if (n2) {
            n2.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "2") {
        if (n2) {
            n2.classList.remove("click");
        }
    }
});

const n3 = document.getElementById("3")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "3") {
        if (n3) {
            n3.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "3") {
        if (n3) {
            n3.classList.remove("click");
        }
    }
});

const n4 = document.getElementById("4")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "4") {
        if (n4) {
            n4.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "4") {
        if (n4) {
            n4.classList.remove("click");
        }
    }
});

const n5 = document.getElementById("5")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "5") {
        if (n5) {
            n5.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "5") {
        if (n5) {
            n5.classList.remove("click");
        }
    }
});

const n6 = document.getElementById("6")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "6") {
        if (n6) {
            n6.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "6") {
        if (n6) {
            n6.classList.remove("click");
        }
    }
});

const n7 = document.getElementById("7")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "7") {
        if (n7) {
            n7.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "7") {
        if (n7) {
            n7.classList.remove("click");
        }
    }
});

const n8 = document.getElementById("8")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "8") {
        if (n8) {
            n8.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "8") {
        if (n8) {
            n8.classList.remove("click");
        }
    }
});

const n9 = document.getElementById("9")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "9") {
        if (n9) {
            n9.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "9") {
        if (n9) {
            n9.classList.remove("click");
        }
    }
});

const n0 = document.getElementById("0")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "0") {
        if (n0) {
            n0.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "0") {
        if (n0) {
            n0.classList.remove("click");
        }
    }
});

const line = document.getElementById("-")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "-") {
        if (line) {
            line.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "-") {
        if (line) {
            line.classList.remove("click");
        }
    }
});

const dline = document.getElementById("=")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "=") {
        if (dline) {
            dline.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "=") {
        if (dline) {
            dline.classList.remove("click");
        }
    }
});

const back = document.getElementById("back")
document.addEventListener("keydown", (event) => {
    if (event.key === "Backspace") {
        if (back) {
            back.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key === "Backspace") {
        if (back) {
            back.classList.remove("click");
        }
    }
});





const tb = document.getElementById("tab")
document.addEventListener("keydown", (event) => {
    if (event.key === "Tab") {
        if (tb) {
            tb.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key === "Tab") {
        if (tb) {
            tb.classList.remove("click");
        }
    }
});

const q = document.getElementById("q")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "q") {
        if (q) {
            q.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "q") {
        if (q) {
            q.classList.remove("click");
        }
    }
});

const w = document.getElementById("w")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "w") {
        if (w) {
            w.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "w") {
        if (w) {
            w.classList.remove("click");
        }
    }
});

const qe = document.getElementById("e")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "e") {
        if (e) {
            e.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "e") {
        if (e) {
            e.classList.remove("click");
        }
    }
});

const r = document.getElementById("r")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "r") {
        if (r) {
            r.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "r") {
        if (r) {
            r.classList.remove("click");
        }
    }
});

const t = document.getElementById("t")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "t") {
        if (t) {
            t.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "t") {
        if (t) {
            t.classList.remove("click");
        }
    }
});

const y = document.getElementById("y")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "y") {
        if (y) {
            y.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "y") {
        if (y) {
            y.classList.remove("click");
        }
    }
});

const u = document.getElementById("u")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "u") {
        if (u) {
            u.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "u") {
        if (u) {
            u.classList.remove("click");
        }
    }
});

const i = document.getElementById("i")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "i") {
        if (i) {
            i.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "i") {
        if (i) {
            i.classList.remove("click");
        }
    }
});

const o = document.getElementById("o")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "o") {
        if (o) {
            o.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "o") {
        if (o) {
            o.classList.remove("click");
        }
    }
});

const p = document.getElementById("p")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "p") {
        if (p) {
            p.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "p") {
        if (p) {
            p.classList.remove("click");
        }
    }
});

const s1 = document.getElementById("[")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "[") {
        if (s1) {
            s1.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "[") {
        if (s1) {
            s1.classList.remove("click");
        }
    }
});

const s2 = document.getElementById("]")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "]") {
        if (s2) {
            s2.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "]") {
        if (s2) {
            s2.classList.remove("click");
        }
    }
});

const s3 = document.getElementById("\\")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "\\") {
        if (s3) {
            s3.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "\\") {
        if (s3) {
            s3.classList.remove("click");
        }
    }
});


const cap = document.getElementById("cap")


function updateCapsLockStatus(event) {
    const isCapsLockOn = event.getModifierState("CapsLock");

    if (isCapsLockOn) {
        cap.classList.add('click');
    } else {
        cap.classList.remove('click');
    }
}

document.addEventListener('keydown', updateCapsLockStatus);
document.addEventListener('keyup', updateCapsLockStatus);

const a = document.getElementById("a")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "a") {
        if (a) {
            a.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "a") {
        if (a) {
            a.classList.remove("click");
        }
    }
});

const s = document.getElementById("s")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "s") {
        if (s) {
            s.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "s") {
        if (s) {
            s.classList.remove("click");
        }
    }
});

const d = document.getElementById("d")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "d") {
        if (d) {
            d.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "d") {
        if (d) {
            d.classList.remove("click");
        }
    }
});

const f = document.getElementById("f")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "f") {
        if (f) {
            f.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "f") {
        if (f) {
            f.classList.remove("click");
        }
    }
});

const g = document.getElementById("g")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "g") {
        if (g) {
            g.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "g") {
        if (g) {
            g.classList.remove("click");
        }
    }
});

const h = document.getElementById("h")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "h") {
        if (h) {
            h.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "h") {
        if (h) {
            h.classList.remove("click");
        }
    }
});

const j = document.getElementById("j")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "j") {
        if (j) {
            j.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "j") {
        if (j) {
            j.classList.remove("click");
        }
    }
});

const k = document.getElementById("k")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "k") {
        if (k) {
            k.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "k") {
        if (k) {
            k.classList.remove("click");
        }
    }
});

const l = document.getElementById("l")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "l") {
        if (l) {
            l.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "l") {
        if (l) {
            l.classList.remove("click");
        }
    }
});

const s4 = document.getElementById(";")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === ";") {
        if (s4) {
            s4.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === ";") {
        if (s4) {
            s4.classList.remove("click");
        }
    }
});

const s5 = document.getElementById("'")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "'") {
        if (s5) {
            s5.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "'") {
        if (s5) {
            s5.classList.remove("click");
        }
    }
});

const enter = document.getElementById("enter")
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        if (enter) {
            enter.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        if (enter) {
            enter.classList.remove("click");
        }
    }
});





const ss = document.getElementById("lshft")
document.addEventListener("keydown", (event) => {
    if (event.code === "ShiftLeft") {
        if (ss) {
            ss.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.code === "ShiftLeft") {
        if (ss) {
            ss.classList.remove("click");
        }
    }
});

const sss = document.getElementById("rshft")
document.addEventListener("keydown", (event) => {
    if (event.code === "ShiftRight") {
        if (sss) {
            sss.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.code === "ShiftRight") {
        if (sss) {
            sss.classList.remove("click");
        }
    }
});

const z = document.getElementById("z")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "z") {
        if (z) {
            z.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "z") {
        if (z) {
            z.classList.remove("click");
        }
    }
});

const x = document.getElementById("x")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "x") {
        if (x) {
            x.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "x") {
        if (x) {
            x.classList.remove("click");
        }
    }
});

const c = document.getElementById("c")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "c") {
        if (c) {
            c.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "c") {
        if (c) {
            c.classList.remove("click");
        }
    }
});

const v = document.getElementById("v")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "v") {
        if (v) {
            v.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "v") {
        if (v) {
            v.classList.remove("click");
        }
    }
});

const b = document.getElementById("b")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "b") {
        if (b) {
            b.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "b") {
        if (b) {
            b.classList.remove("click");
        }
    }
});

const n = document.getElementById("n")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "n") {
        if (n) {
            n.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "n") {
        if (n) {
            n.classList.remove("click");
        }
    }
});

const m = document.getElementById("m")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "m") {
        if (m) {
            m.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "m") {
        if (m) {
            m.classList.remove("click");
        }
    }
});

const s6 = document.getElementById(",")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === ",") {
        if (s6) {
            s6.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === ",") {
        if (s6) {
            s6.classList.remove("click");
        }
    }
});

const s7 = document.getElementById(".")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === ".") {
        if (s7) {
            s7.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === ".") {
        if (s7) {
            s7.classList.remove("click");
        }
    }
});

const s8 = document.getElementById("/")
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "/") {
        if (s8) {
            s8.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "/") {
        if (s8) {
            s8.classList.remove("click");
        }
    }
});

const xx = document.getElementById("space")
document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        if (xx) {
            xx.classList.add("click");
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.code === "Space") {
        if (xx) {
            xx.classList.remove("click");
        }
    }
});