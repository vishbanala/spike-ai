export type Role = "outside" | "libero" | "setter" | "middle" | "opposite";

export interface PresetItem {
  question: string;
  presetAnswer: string;
}

export const PRESET_QA: Record<Role, PresetItem[]> = {
  outside: [
    {
      question: "When should I start my approach for a go ball or four ball?",
      presetAnswer:
        "For go ball/four ball, trace the ball as it goes over the net and onto your side. Release into your first step in the three-step approach as the setter makes contact with the ball, then speed up or slow down the last two steps as you notice the set you're given.",
    },
    {
      question: "Who should I watch to learn proper outside hitting technique?",
      presetAnswer:
        "Watch collegiate level players more than professional level players. Collegiate players tend to showcase fundamentals through mistake recovery more often than pros, and you'll learn to play more clearly by studying how they handle imperfect situations.",
    },
    {
      question: "Who should I be blocking and what plays should I look out for?",
      presetAnswer:
        "You should primarily be facing the ball, blocking the opposite hitter, as well as the middle blocker and setter. Watch out for quick oppo sets, setter dumps, slides ran by middle blocker, and fake 2 ball set to the outside hitter over the middle blocker.",
    },
    {
      question: "Where should my eyes be when approaching for a hit?",
      presetAnswer:
        "Your eyes should primarily be tracing the ball, while looking at your blockers through the corner of your eyes. Once you're up in the air, also look at the back row to avoid hitting directly at passers.",
    },
    {
      question: "What drills can I do to improve as an outside hitter?",
      presetAnswer:
        "Practice targeted hitting lines: place targets in deep corners, hard cross and line. Practice approach swings with a tennis ball, throwing it when swinging to simulate a real swing. Don't forget passing drills too.",
    },
    {
      question: "What plays should I be ready to run as an outside hitter?",
      presetAnswer:
        "Be ready for: go ball, four ball, 2 ball, shoot, 32 ball, and bic (backrow attack). Make sure you can run all of these sets so your setter has maximum flexibility.",
    },
  ],
  libero: [
    {
      question: "What should I look for when players are hitting?",
      presetAnswer:
        "Watch their shoulder and elbow first, the ball just confirms where it's going. A high elbow usually means line, dropped elbow often goes cross. Read their body position and arm swing, then start moving on their swing, not after contact.",
    },
    {
      question: "Where should I be positioned on defense?",
      presetAnswer:
        "Read the set, then the hitter. Stay low and balanced on the balls of your feet. Anticipate line on quick sets, cross on high balls. Position yourself based on your block, if they're taking away angle, shade more line. Always be ready to cover tips and adjust quickly.",
    },
    {
      question: "What drills can I do to improve as a libero?",
      presetAnswer:
        "Practice platform passing to targets, repetitive serve receive, defensive positioning drills with live hitting, and reading drills where you track hitters' shoulders. Work on butterfly drills for range and pancake digs for emergency plays.",
    },
    {
      question: "Who should I watch to learn proper libero technique?",
      presetAnswer:
        "Watch collegiate level players more than professional level players. Collegiate players tend to showcase fundamentals through mistake recovery more often than pros, giving you clearer examples of proper technique and decision-making.",
    },
  ],
  setter: [
    {
      question: "What plays should I be ready to run for each position?",
      presetAnswer:
        "For outside: go, four, shoot, 2, 32. For oppo: red, four, back 1, push 2. For middle: 1 (quick), 31, slide, push 1, back 1. For back row: A, B, C sets. Know these by heart so you can call them instantly.",
    },
    {
      question: "Who should I watch to learn proper setting technique?",
      presetAnswer:
        "Watch collegiate level players more than professional level players. They tend to showcase fundamentals through mistake recovery more often than pros, and you'll see clearer examples of proper hand position, footwork, and decision-making under pressure.",
    },
    {
      question: "How do I read the block to make better setting decisions?",
      presetAnswer:
        "As you're getting to the ball, scan the opponent's block formation. If their middle is late, set quick. If they're loading up outside, go middle or opposite. If they're showing a weak or mismatched blocker, attack that spot. Always know where their best blocker is.",
    },
    {
      question: "What types of dumps can I use to keep the defense honest?",
      presetAnswer:
        "Use the standing dump on perfect passes when the block is late. The jump set dump works when you're in system and they're not reading you. Roll shots to deep corners catch defenders cheating forward. Mix up your locations—never be predictable.",
    },
  ],
  middle: [
    {
      question: "When should I start my approach for a quick set?",
      presetAnswer:
        "Start your approach as the ball leaves the passer's platform. Three steps: right-left-right if you're right-handed. Be in the air as the setter touches the ball—trust that it'll be there. Stay tight to the net and explode upward.",
    },
    {
      question: "How do I read the setter to time my approach correctly?",
      presetAnswer:
        "Watch the setter's platform and body position as they move to the ball. A forward platform means they can push the ball—be ready earlier. If they're reaching back, you have slightly more time. Get in rhythm with your setter through reps.",
    },
    {
      question: "What plays should I look out for when blocking?",
      presetAnswer:
        "All attacks. As a middle blocker, you're responsible for closing on pins, taking away quick middle attacks, tracking setter dumps, reading slide attacks, and helping on opposite hits. Stay active and read the setter's hands to anticipate.",
    },
    {
      question: "How should I position myself based on the opponent's offense?",
      presetAnswer:
        "If they run a fast offense, stay more central and read the setter. If they're a pin-heavy team, shade slightly outside to help close blocks faster. Against a strong middle, stay tight. Adjust based on who's in the front row and what they've been running.",
    },
    {
      question: "What plays should I be ready to run as a middle?",
      presetAnswer:
        "Be ready for: 1 ball (quick), 31 (behind the setter), slide (lateral quick), push 1, and back 1. Practice all of these until they're automatic so your setter can run tempo and keep the defense guessing.",
    },
    {
      question: "Where should my eyes be when approaching for a hit?",
      presetAnswer:
        "Your eyes should primarily be tracing the ball while glancing at your blockers through your peripheral vision. Once you're in the air, also check the back row to avoid hitting directly at defenders. Find the holes.",
    },
    {
      question: "Who should I watch to learn proper middle blocking technique?",
      presetAnswer:
        "Watch collegiate level players more than professional level players. They showcase fundamentals through mistake recovery more often than pros, so you'll see clearer examples of footwork, timing, and reading the setter.",
    },
  ],
  opposite: [
    {
      question: "When should I start my approach for a red ball or five ball?",
      presetAnswer:
        "For red ball/five ball, trace the ball as it goes over the net and onto your side. Release into your first step in the three-step approach as the setter makes contact with the ball, then speed up or slow down the last two steps based on the set you're given.",
    },
    {
      question: "Who should I watch to learn proper opposite technique?",
      presetAnswer:
        "Watch collegiate level players more than professional level players. They showcase fundamentals through mistake recovery more often than pros, giving you clearer examples of decision-making, transition footwork, and shot selection.",
    },
    {
      question: "Who should I be blocking and what plays should I watch for?",
      presetAnswer:
        "You should primarily be blocking the opponent's outside hitter. Watch for high balls, go sets, and quick tempo plays to the outside. Also be alert for back row attacks, setter dumps, and any plays coming to your side of the court. Read the pass first.",
    },
    {
      question: "Where should my eyes be when approaching for a hit?",
      presetAnswer:
        "Your eyes should primarily be tracing the ball while looking at your blockers through the corner of your eyes. Once you're in the air, also scan the back row to avoid hitting directly at passers. Find the open court.",
    },
    {
      question: "What drills can I do to improve as an opposite hitter?",
      presetAnswer:
        "Practice targeted hitting lines—place targets in deep corners, hard cross and line. Practice approach swings with a tennis ball, throwing it when swinging to simulate a real swing. Work on passing drills and back row attack footwork too.",
    },
    {
      question: "What plays should I be ready to run as an opposite?",
      presetAnswer:
        "Be ready for: red (high right side), four ball, back 1, push 2, and back row attacks (pipe, D, C). Also practice setting in case the setter takes the first ball. Versatility at opposite is crucial for your team's offense.",
    },
  ],
};

export const ROLE_LABELS: Record<Role, string> = {
  outside: "Outside Hitter",
  libero: "Libero",
  setter: "Setter",
  middle: "Middle Blocker",
  opposite: "Opposite Hitter",
};
