# Stoplight Game - Nash Equilibrium Demonstration

## Overview
This is a two-player strategic game that demonstrates Nash Equilibrium concepts through interactive gameplay. Players choose between **Go**, **Caution**, or **Stop** actions, with payoffs determined by both players' simultaneous choices.

## Game Features

### 🎮 Game Modes
- **Human vs Computer**: Play against an AI opponent with weighted random strategy
- **Human vs Human**: Two human players can play locally

### 🎯 Educational Value
- **Nash Equilibrium Analysis**: Real-time analysis of whether each outcome represents a Nash Equilibrium
- **Complete Game Theory Analysis**: Comprehensive breakdown of all 9 possible outcomes
- **Strategic Learning**: Understand optimal play and equilibrium concepts

### 📊 Payoff Matrix
```
           Player 2
         Go  Caution  Stop
    Go   (-1,-1)  (2,0)   (3,-1)
P1  Caution (0,2)   (1,1)   (2,0)
    Stop  (-1,3)   (0,2)   (0,0)
```

## Key Nash Equilibrium Insights

### 🏆 Primary Nash Equilibrium
**Caution vs Caution (1,1)** - This is the main Nash Equilibrium where:
- Both players receive positive payoffs
- Neither player can improve by unilaterally changing strategy
- Represents cooperative behavior with mutual benefit

### 📈 Strategic Analysis
- **Go vs Go (-1,-1)**: Mutual aggression leads to collision/penalty
- **Mixed outcomes**: Asymmetric payoffs when players choose different strategies
- **Stop vs Stop (0,0)**: Safe but non-optimal mutual caution

## How to Play

1. **Choose Game Mode**: Select Human vs Computer or Human vs Human
2. **Make Your Choice**: Click on Go (🟢), Caution (🟡), or Stop (🔴)
3. **Play Round**: Click "Play Round" to see results
4. **Analyze Results**: View payoffs and Nash Equilibrium analysis
5. **Strategic Learning**: Use the complete analysis to understand optimal play

## Files Structure

```
Q4/
├── stoplight.html    # Main game interface
├── style.css         # Modern, responsive styling
├── script.js         # Game logic and Nash equilibrium analysis
└── README.md         # This documentation
```

## Educational Objectives

This game teaches:
- **Nash Equilibrium identification**
- **Strategic thinking and game theory**
- **Payoff matrix analysis**
- **Equilibrium stability concepts**
- **Real-world applications of game theory**

## Technical Implementation

- **Pure JavaScript**: No external dependencies
- **Responsive Design**: Works on desktop and mobile
- **Interactive Analysis**: Real-time Nash equilibrium checking
- **Comprehensive Comments**: Detailed explanations for educational purposes

## Nash Equilibrium Theory

A Nash Equilibrium occurs when no player can improve their payoff by unilaterally changing their strategy, given the other players' strategies. This game demonstrates:

1. **Identification Method**: Check if either player can improve by changing strategy
2. **Stability**: Why certain outcomes are stable
3. **Prediction**: How equilibrium concepts predict behavior
4. **Applications**: Real-world relevance in economics, politics, and daily life

---

**Created for Educational Purposes** - Demonstrating Game Theory and Nash Equilibrium concepts through interactive gameplay.