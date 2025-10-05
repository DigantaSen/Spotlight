# 🚦 Stoplight Game - Nash Equilibrium Demonstration# Stoplight Game - Nash Equilibrium Demonstration



[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge&logo=github)](https://digantasen.github.io/Spotlight/)## Overview

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)This is a two-player strategic game that demonstrates Nash Equilibrium concepts through interactive gameplay. Players choose between **Go**, **Caution**, or **Stop** actions, with payoffs determined by both players' simultaneous choices.

[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)## Game Features



**Student ID:** 2025201050  ### 🎮 Game Modes

**Course:** CS6.302 – Software System Development (Monsoon 2025)  - **Human vs Computer**: Play against an AI opponent with weighted random strategy

**Assignment:** Q4 - Game Theory & Nash Equilibrium- **Human vs Human**: Two human players can play locally



---### 🎯 Educational Value

- **Nash Equilibrium Analysis**: Real-time analysis of whether each outcome represents a Nash Equilibrium

## 📖 Overview- **Complete Game Theory Analysis**: Comprehensive breakdown of all 9 possible outcomes

- **Strategic Learning**: Understand optimal play and equilibrium concepts

An **interactive two-player strategic game** that demonstrates **Nash Equilibrium** concepts through engaging gameplay. Players choose between **Go**, **Caution**, or **Stop** actions in a traffic light scenario, with payoffs determined by both players' simultaneous choices. Perfect for learning game theory concepts interactively!

### 📊 Payoff Matrix

**🎮 [Play Live Demo →](https://digantasen.github.io/Spotlight/)**```

           Player 2

---         Go  Caution  Stop

    Go   (-1,-1)  (2,0)   (3,-1)

## ✨ Game FeaturesP1  Caution (0,2)   (1,1)   (2,0)

    Stop  (-1,3)   (0,2)   (0,0)

### 🎮 Dual Game Modes```

| Mode | Description | Use Case |

|------|-------------|----------|## Key Nash Equilibrium Insights

| **Human vs Computer** | Play against AI with weighted random strategy | Practice & learning |

| **Human vs Human** | Local two-player mode | Teaching & demonstrations |### 🏆 Primary Nash Equilibrium

**Caution vs Caution (1,1)** - This is the main Nash Equilibrium where:

### 🎯 Educational Features- Both players receive positive payoffs

- **Real-Time Nash Equilibrium Analysis**: Instant feedback on equilibrium status- Neither player can improve by unilaterally changing strategy

- **Complete Game Theory Breakdown**: All 9 possible outcomes explained- Represents cooperative behavior with mutual benefit

- **Strategic Learning Tools**: Understand optimal play patterns

- **Visual Payoff Display**: Clear representation of outcomes### 📈 Strategic Analysis

- **Interactive Tutorial**: Learn by playing- **Go vs Go (-1,-1)**: Mutual aggression leads to collision/penalty

- **Mixed outcomes**: Asymmetric payoffs when players choose different strategies

### 📊 Payoff Matrix- **Stop vs Stop (0,0)**: Safe but non-optimal mutual caution



```## How to Play

                Player 2

           Go     Caution    Stop1. **Choose Game Mode**: Select Human vs Computer or Human vs Human

       ┌─────────────────────────┐2. **Make Your Choice**: Click on Go (🟢), Caution (🟡), or Stop (🔴)

    Go │ (-1,-1)  (2,0)   (3,-1) │3. **Play Round**: Click "Play Round" to see results

       │                         │4. **Analyze Results**: View payoffs and Nash Equilibrium analysis

P1 Cau │ (0,2)    (1,1)   (2,0)  │5. **Strategic Learning**: Use the complete analysis to understand optimal play

       │                         │

  Stop │ (-1,3)   (0,2)   (0,0)  │## Files Structure

       └─────────────────────────┘

``````

Q4/

**Legend:**├── stoplight.html    # Main game interface

- **(P1 payoff, P2 payoff)** - Simultaneous outcome├── style.css         # Modern, responsive styling

- **Negative values** = Penalty/Loss├── script.js         # Game logic and Nash equilibrium analysis

- **Positive values** = Reward/Gain└── README.md         # This documentation

- **Zero** = Neutral outcome```



---## Educational Objectives



## 🏆 Nash Equilibrium AnalysisThis game teaches:

- **Nash Equilibrium identification**

### Primary Nash Equilibrium: Caution vs Caution (1,1)- **Strategic thinking and game theory**

- **Payoff matrix analysis**

**Why is (Caution, Caution) an equilibrium?**- **Equilibrium stability concepts**

1. ✅ **Player 1 cannot improve**: - **Real-world applications of game theory**

   - Current: 1 (Caution)

   - If Go: 2 but risky## Technical Implementation

   - If Stop: 0 (worse)

   - **Pure JavaScript**: No external dependencies

2. ✅ **Player 2 cannot improve**:- **Responsive Design**: Works on desktop and mobile

   - Current: 1 (Caution)- **Interactive Analysis**: Real-time Nash equilibrium checking

   - If Go: 0 (worse)- **Comprehensive Comments**: Detailed explanations for educational purposes

   - If Stop: 0 (worse)

## Nash Equilibrium Theory

3. ✅ **Mutual stability**: Neither player has incentive to deviate

4. ✅ **Positive payoffs**: Both players benefit from cooperationA Nash Equilibrium occurs when no player can improve their payoff by unilaterally changing their strategy, given the other players' strategies. This game demonstrates:

5. ✅ **Predictable outcome**: Rational players will choose this

1. **Identification Method**: Check if either player can improve by changing strategy

### Strategic Outcome Analysis2. **Stability**: Why certain outcomes are stable

3. **Prediction**: How equilibrium concepts predict behavior

| Outcome | Player 1 | Player 2 | Nash Eq? | Interpretation |4. **Applications**: Real-world relevance in economics, politics, and daily life

|---------|----------|----------|----------|----------------|

| Go-Go | -1 | -1 | ❌ | Mutual aggression, both lose |---

| Go-Caution | 2 | 0 | ❌ | P1 exploits P2's caution |

| Go-Stop | 3 | -1 | ❌ | P1 maximum gain |**Created for Educational Purposes** - Demonstrating Game Theory and Nash Equilibrium concepts through interactive gameplay.
| Caution-Go | 0 | 2 | ❌ | P2 exploits P1's caution |
| **Caution-Caution** | **1** | **1** | ✅ | **Cooperative equilibrium** |
| Caution-Stop | 2 | 0 | ❌ | P1 benefits from caution |
| Stop-Go | -1 | 3 | ❌ | P2 maximum gain |
| Stop-Caution | 0 | 2 | ❌ | P2 benefits |
| Stop-Stop | 0 | 0 | ❌ | Mutual avoidance |

---

## 🎮 How to Play

### Step 1: Choose Game Mode
- **Human vs Computer**: Practice against AI
- **Human vs Human**: Play with a friend locally

### Step 2: Make Your Choice
- 🟢 **Go** - Aggressive strategy (higher risk/reward)
- 🟡 **Caution** - Balanced strategy (moderate payoff)
- 🔴 **Stop** - Defensive strategy (safe but lower payoff)

### Step 3: View Results
- See your choice and opponent's choice
- View payoffs for both players
- Read Nash Equilibrium analysis
- Understand why the outcome is/isn't stable

### Step 4: Learn & Strategize
- Study the complete game analysis
- Identify optimal strategies
- Play again to test your strategy!

---

## 📂 Project Structure

```
Q4/
├── index.html          # Main game interface (GitHub Pages)
├── stoplight.html      # Alternative entry point
├── style.css           # Modern, responsive styling
├── script.js           # Game logic & Nash equilibrium analysis
└── README.md           # Documentation (this file)
```

---

## 🚀 How to Run

### Option 1: Live Demo (Recommended)
Visit: **[Play Now →](https://digantasen.github.io/Spotlight/)**

### Option 2: Local Development
```bash
git clone https://github.com/DigantaSen/Spotlight.git
cd Spotlight
# Open index.html or use local server
python3 -m http.server 8080
```

---

## 🎓 Educational Objectives

### Nash Equilibrium Identification
- **Definition**: A state where no player can improve by changing strategy alone
- **Recognition**: Learn to identify stable vs unstable outcomes

### Strategic Thinking
- **Payoff Analysis**: Evaluate consequences of each choice
- **Best Response**: Determine optimal action given opponent's strategy

### Game Theory Applications
- Traffic Management
- Economic Competition
- Political Negotiations
- Evolutionary Biology

---

## 💡 What is Nash Equilibrium?

A **Nash Equilibrium** is a solution concept where:
1. **No Unilateral Improvement**: No player can increase their payoff by changing only their own strategy
2. **Mutual Best Responses**: Each player's strategy is optimal given others' strategies
3. **Stability**: The outcome is self-enforcing

---

## 🔧 Technical Implementation

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with flexbox/grid
- **Vanilla JavaScript** - Pure JS, no dependencies
- **Game Theory Algorithms** - Nash equilibrium computation

---

## 🌐 Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |

---

## 🎯 Academic Context

**Course:** CS6.302 – Software System Development  
**Institution:** IIIT Hyderabad  
**Semester:** Monsoon 2025  
**Assignment:** Q4 - Game Theory Implementation

### Requirements Met
✅ Two-player game implementation  
✅ Strategic decision-making mechanics  
✅ Nash equilibrium computation  
✅ Complete game analysis  
✅ User-friendly interface  
✅ Comprehensive documentation

---

## 👨‍💻 Author

**Student ID:** 2025201050  
**GitHub:** [DigantaSen](https://github.com/DigantaSen)  
**Repository:** [Spotlight](https://github.com/DigantaSen/Spotlight)

---

## 🔗 Links

- **Live Demo:** https://digantasen.github.io/Spotlight/
- **GitHub Repository:** https://github.com/DigantaSen/Spotlight
- **Course:** CS6.302 - Software System Development

---

**🎯 Ready to master game theory? [Start Playing Now! →](https://digantasen.github.io/Spotlight/)**
