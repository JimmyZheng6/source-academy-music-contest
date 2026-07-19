// My contest entry
// ===== D Major =====

// Normal octave
const DO  = 62; // D4
const RE  = 64; // E4
const MI  = 66; // F#4
const FA  = 67; // G4
const SOL = 69; // A4
const LA  = 71; // B4
const TI  = 73; // C#5
const DO2 = 74; // D5

// High octave

const RE2  = 76; // E5
const MI2  = 78; // F#5
const FA2  = 79; // G5
const SOL2 = 81; // A5
const LA2  = 83; // B5
const TI2  = 85; // C#6
const DO3  = 86; // D6

// Low octave
const DO0  = 50; // D3
const RE0  = 52; // E3
const MI0  = 54; // F#3
const FA0  = 55; // G3
const SOL0 = 57; // A3
const LA0  = 59; // B3
const TI0  = 61; // C#4

// Bass octave (two octaves below the normal octave)
const DO_1  = 38; // D2
const RE_1  = 40; // E2
const MI_1  = 42; // F#2
const FA_1  = 43; // G2
const SOL_1 = 45; // A2
const LA_1  = 47; // B2
const TI_1  = 49; // C#3

// Duration constants
const S = 0.167;   // 1/16 note
const E = 0.333;   // 1/8 note
const Q = 0.667;   // 1/4 note
const H = 1.333;   // 1/2 note
const W = 2.667;   // Whole note

function sounds_contest_entry() {
    const right_hand=consecutively(list(
    violin(SOL, S),
    violin(DO2, S),
    violin(RE2, S),
    violin(MI2, S),
    
    violin(RE2, E),
    violin(DO2, S),
    violin(DO2, E),
    silence_sound(S+E+Q),
    violin(SOL, S),
    violin(DO2, S),
    violin(RE2, S),
    violin(MI2, S),
    
    violin(RE2, E),
    violin(DO2, S),
    violin(RE2, E),
    violin(MI2, E),
    violin(MI2, E),
    silence_sound(S+E),
    violin(SOL, S),
    violin(DO2, S),
    violin(RE2, S),
    violin(MI2, S),
     
    violin(RE2, E),
    violin(DO2, S),
    violin(DO2, E),
    silence_sound(S+E+Q),
    violin(SOL, S),
    violin(DO2, S),
    violin(RE2, S),
    violin(MI2, S),
    
    violin(RE2, E),
    violin(DO2, S),
    violin(RE2, E),
    violin(SOL2,E),
    violin(MI2, E),
    silence_sound(S+E),
    violin(MI2,E),
    violin(FA2,E),
    
    violin(SOL2,E),
    violin(SOL2,S),
    violin(SOL2,E+S),
    violin(SOL2,E),
    violin(SOL2,E),
    violin(MI2,S),
    violin(DO2,E+S),
    
    violin(MI2,S),
    violin(FA2,S),
    violin(SOL2,E),
    violin(SOL2,S),
    violin(SOL2,E+S),
    violin(SOL2,E),
    violin(SOL2,E),
    violin(MI2,S),
    violin(DO2,E+S),
    
    violin(DO2, S),
    violin(RE2, S),
    violin(MI2, E),
    violin(MI2, S),
    violin(MI2, E+S),
    violin(MI2, E),
    violin(MI2, Q),
    violin(LA2, E/3),
    violin(MI2, E/3),
    violin(RE2, E/3),
    
    violin(DO2, S),
    violin(LA, S),
    violin(DO2, Q)
    ));
    const left_hand=consecutively(list(
        silence_sound(Q),
        
        violin(LA_1,E),
        violin(MI0, E),
        violin(LA0, E),
        violin(MI0, E),
        violin(FA_1,E),
        violin(DO0, E),
        violin(FA0, E),
        violin(DO0, E),
        
        violin(SOL_1,E),
        violin(RE0,  E),
        violin(SOL0, E),
        violin(RE0,  E),
        violin(DO0,  E),
        violin(SOL0, E),
        violin(DO,   E),
        violin(SOL0, E),
        
        violin(LA_1,E),
        violin(MI0, E),
        violin(LA0, E),
        violin(MI0, E),
        violin(FA_1,E),
        violin(DO0, E),
        violin(FA0, E),
        violin(DO0, E),
        
        violin(SOL_1,E),
        violin(RE0,  E),
        violin(SOL0, E),
        violin(RE0,  E),
        violin(DO0,  E),
        violin(SOL0, E),
        violin(DO,   E),
        violin(SOL0, E),
        
        violin(SOL_1,E),
        violin(RE0,  E),
        violin(SOL0, E),
        violin(RE0,  E),
        violin(FA_1, E),
        violin(DO0,  E),
        violin(FA0,  E),
        violin(DO0,  E),
        
        violin(MI_1, E),
        violin(TI_1, E),
        violin(MI0,  E),
        violin(TI_1, E),
        violin(LA_1, E),
        violin(MI0,  E),
        violin(SOL0, E),
        violin(MI0,  E),
        
        violin(RE_1, E),
        violin(LA_1, E),
        violin(RE0,  E),
        violin(LA_1, E),
        violin(SOL_1,H)
        ));
    return simultaneously(list(left_hand,right_hand));
}

// Keep this play function call in your submission
play(sounds_contest_entry());
