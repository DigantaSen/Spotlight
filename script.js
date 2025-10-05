/**
 * STOPLIGHT GAME - NASH EQUILIBRIUM DEMONSTRATION (2-Choice Version)
 * 
 * This game illustrates Nash Equilibrium concepts through a two-player strategic game.
 * Each player chooses between Go (Green) or Stop (Red), and payoffs depend on both choices.
 * 
 * NASH EQUILIBRIUM CONCEPT:
 * A Nash Equilibrium is a strategy profile where no player can improve their payoff
 * by unilaterally changing their strategy, given the other player's strategy.
 * 
 * In this game, we analyze each possible outcome to determine if it represents
 * a Nash Equilibrium by checking if either player would benefit from changing
 * their choice while the other player keeps their choice fixed.
 */

class StoplightGame {
    constructor() {
        // Game state variables
        this.gameMode = 'humanVsComputer'; // 'humanVsComputer' or 'humanVsHuman'
        this.player1Choice = null;
        this.player2Choice = null;
        this.player1Score = 0;
        this.player2Score = 0;
        this.roundCount = 0;
        
        /**
         * PAYOFF MATRIX EXPLANATION (2-Choice Version):
         * The payoff matrix defines the rewards/penalties for each combination of choices.
         * Format: [Player1_Payoff, Player2_Payoff]
         * 
         * Strategic Analysis:
         * - Go vs Go: Both players collide, both get penalty (-1, -1)
         * - Go vs Stop: Aggressive player gets maximum benefit, stopping player penalty (3, -1)
         * - Stop vs Go: P1 penalty for being cautious, P2 maximum benefit (-1, 3)
         * - Stop vs Stop: Both players play it safe - no gain, no loss (0, 0)
         */
        this.payoffMatrix = {
            'go': {
                'go': [-1, -1],      // Both players collide - mutual penalty
                'stop': [3, -1]      // P1 gets maximum benefit, P2 penalty for being cautious
            },
            'stop': {
                'go': [-1, 3],       // P1 penalty for being cautious, P2 maximum benefit
                'stop': [0, 0]       // Both players play it safe - no gain, no loss
            }
        };
        
        this.initializeGame();
    }
    
    /**
     * Initialize game event listeners and UI elements
     */
    initializeGame() {
        // Mode selection buttons
        document.getElementById('humanVsComputer').addEventListener('click', () => {
            this.setGameMode('humanVsComputer');
        });
        
        document.getElementById('humanVsHuman').addEventListener('click', () => {
            this.setGameMode('humanVsHuman');
        });
        
        // Player 1 choice buttons
        document.querySelectorAll('.choice-btn:not(.p2)').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.makePlayer1Choice(e.target.dataset.choice);
            });
        });
        
        // Player 2 choice buttons (for human vs human mode)
        document.querySelectorAll('.choice-btn.p2').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.makePlayer2Choice(e.target.dataset.choice);
            });
        });
        
        // Game control buttons
        document.getElementById('playRound').addEventListener('click', () => {
            this.playRound();
        });
        
        document.getElementById('resetGame').addEventListener('click', () => {
            this.resetGame();
        });
        
        // Initialize Nash equilibrium analysis
        this.displayNashEquilibriumAnalysis();
    }
    
    /**
     * Set the game mode and update UI accordingly
     * @param {string} mode - 'humanVsComputer' or 'humanVsHuman'
     */
    setGameMode(mode) {
        this.gameMode = mode;
        
        // Update mode button styling
        document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
        document.getElementById(mode).classList.add('active');
        
        // Update Player 2 section based on mode
        const player2Title = document.getElementById('player2Title');
        const player2Choices = document.getElementById('player2Choices');
        
        if (mode === 'humanVsHuman') {
            player2Title.textContent = 'Player 2';
            player2Choices.style.display = 'block';
        } else {
            player2Title.textContent = 'Computer';
            player2Choices.style.display = 'none';
        }
        
        this.resetRound();
    }
    
    /**
     * Handle Player 1's choice selection
     * @param {string} choice - 'go' or 'stop'
     */
    makePlayer1Choice(choice) {
        this.player1Choice = choice;
        
        // Update UI to show selection
        document.querySelectorAll('.choice-btn:not(.p2)').forEach(btn => {
            btn.classList.remove('selected');
        });
        document.querySelector(`[data-choice="${choice}"]:not(.p2)`).classList.add('selected');
        
        // Update choice display
        const choiceEmoji = this.getChoiceEmoji(choice);
        document.getElementById('player1Choice').textContent = `${choiceEmoji} ${this.capitalizeFirst(choice)}`;
        
        this.checkIfReadyToPlay();
    }
    
    /**
     * Handle Player 2's choice selection (human vs human mode)
     * @param {string} choice - 'go' or 'stop'
     */
    makePlayer2Choice(choice) {
        if (this.gameMode !== 'humanVsHuman') return;
        
        this.player2Choice = choice;
        
        // Update UI to show selection
        document.querySelectorAll('.choice-btn.p2').forEach(btn => {
            btn.classList.remove('selected');
        });
        document.querySelector(`[data-choice="${choice}"].p2`).classList.add('selected');
        
        // Update choice display
        const choiceEmoji = this.getChoiceEmoji(choice);
        document.getElementById('player2Choice').textContent = `${choiceEmoji} ${this.capitalizeFirst(choice)}`;
        
        this.checkIfReadyToPlay();
    }
    
    /**
     * Check if both players have made choices and enable play button
     */
    checkIfReadyToPlay() {
        const playButton = document.getElementById('playRound');
        
        if (this.gameMode === 'humanVsComputer') {
            // Only need Player 1's choice
            playButton.disabled = !this.player1Choice;
        } else {
            // Need both players' choices
            playButton.disabled = !(this.player1Choice && this.player2Choice);
        }
    }
    
    /**
     * Generate computer's choice using a simple random strategy
     * @returns {string} Computer's choice ('go' or 'stop')
     */
    getComputerChoice() {
        const choices = ['go', 'stop'];
        return choices[Math.floor(Math.random() * choices.length)];
    }
    
    /**
     * Play a round of the game
     */
    playRound() {
        // Get Player 2's choice (either from human or computer)
        if (this.gameMode === 'humanVsComputer') {
            this.player2Choice = this.getComputerChoice();
            const choiceEmoji = this.getChoiceEmoji(this.player2Choice);
            document.getElementById('player2Choice').textContent = `${choiceEmoji} ${this.capitalizeFirst(this.player2Choice)}`;
        }
        
        // Calculate payoffs
        const payoffs = this.payoffMatrix[this.player1Choice][this.player2Choice];
        const p1Payoff = payoffs[0];
        const p2Payoff = payoffs[1];
        
        // Update scores
        this.player1Score += p1Payoff;
        this.player2Score += p2Payoff;
        this.roundCount++;
        
        // Display results
        this.displayResults(p1Payoff, p2Payoff);
        this.updateScoreboard();
        
        // Disable play button until new choices are made
        document.getElementById('playRound').disabled = true;
    }
    
    /**
     * Display round results with Nash equilibrium analysis
     * @param {number} p1Payoff - Player 1's payoff
     * @param {number} p2Payoff - Player 2's payoff
     */
    displayResults(p1Payoff, p2Payoff) {
        const resultsDiv = document.getElementById('results');
        resultsDiv.style.display = 'block';
        
        // Show choices
        const p1Emoji = this.getChoiceEmoji(this.player1Choice);
        const p2Emoji = this.getChoiceEmoji(this.player2Choice);
        document.getElementById('p1Result').textContent = `${p1Emoji} ${this.capitalizeFirst(this.player1Choice)}`;
        document.getElementById('p2Result').textContent = `${p2Emoji} ${this.capitalizeFirst(this.player2Choice)}`;
        
        // Show payoffs
        document.getElementById('p1Payoff').textContent = p1Payoff > 0 ? `+${p1Payoff}` : p1Payoff;
        document.getElementById('p2Payoff').textContent = p2Payoff > 0 ? `+${p2Payoff}` : p2Payoff;
        
        // Nash equilibrium analysis
        const nashAnalysis = this.analyzeNashEquilibrium(this.player1Choice, this.player2Choice);
        document.getElementById('nashAnalysis').innerHTML = nashAnalysis;
    }
    
    /**
     * Analyze if the current outcome is a Nash Equilibrium
     * @param {string} p1Choice - Player 1's choice
     * @param {string} p2Choice - Player 2's choice
     * @returns {string} HTML analysis text
     */
    analyzeNashEquilibrium(p1Choice, p2Choice) {
        const currentPayoff = this.payoffMatrix[p1Choice][p2Choice];
        const p1Current = currentPayoff[0];
        const p2Current = currentPayoff[1];
        
        // Check all alternative strategies for both players
        const allChoices = ['go', 'stop'];
        
        // Can Player 1 improve by changing?
        let p1CanImprove = false;
        let p1BetterChoice = null;
        let p1BetterPayoff = null;
        
        for (const altChoice of allChoices) {
            if (altChoice !== p1Choice) {
                const altPayoff = this.payoffMatrix[altChoice][p2Choice][0];
                if (altPayoff > p1Current) {
                    p1CanImprove = true;
                    p1BetterChoice = altChoice;
                    p1BetterPayoff = altPayoff;
                    break;
                }
            }
        }
        
        // Can Player 2 improve by changing?
        let p2CanImprove = false;
        let p2BetterChoice = null;
        let p2BetterPayoff = null;
        
        for (const altChoice of allChoices) {
            if (altChoice !== p2Choice) {
                const altPayoff = this.payoffMatrix[p1Choice][altChoice][1];
                if (altPayoff > p2Current) {
                    p2CanImprove = true;
                    p2BetterChoice = altChoice;
                    p2BetterPayoff = altPayoff;
                    break;
                }
            }
        }
        
        // Determine if this is a Nash Equilibrium
        const isNashEquilibrium = !p1CanImprove && !p2CanImprove;
        
        let analysisHTML = '<div class="nash-result">';
        
        if (isNashEquilibrium) {
            analysisHTML += '<div class="equilibrium-yes">✅ <strong>This IS a Nash Equilibrium!</strong></div>';
            analysisHTML += '<p>Neither player can improve their payoff by unilaterally changing their strategy.</p>';
        } else {
            analysisHTML += '<div class="equilibrium-no">❌ <strong>This is NOT a Nash Equilibrium</strong></div>';
            
            if (p1CanImprove) {
                analysisHTML += `<p>🔄 Player 1 could improve from ${p1Current} to ${p1BetterPayoff} by switching to <strong>${this.capitalizeFirst(p1BetterChoice)}</strong></p>`;
            }
            
            if (p2CanImprove) {
                analysisHTML += `<p>🔄 Player 2 could improve from ${p2Current} to ${p2BetterPayoff} by switching to <strong>${this.capitalizeFirst(p2BetterChoice)}</strong></p>`;
            }
        }
        
        analysisHTML += '</div>';
        return analysisHTML;
    }
    
    /**
     * Update the scoreboard display
     */
    updateScoreboard() {
        document.getElementById('p1Score').textContent = this.player1Score;
        document.getElementById('p2Score').textContent = this.player2Score;
        document.getElementById('roundCount').textContent = this.roundCount;
    }
    
    /**
     * Reset the current round
     */
    resetRound() {
        this.player1Choice = null;
        this.player2Choice = null;
        
        // Clear choice buttons
        document.querySelectorAll('.choice-btn').forEach(btn => btn.classList.remove('selected'));
        
        // Reset choice displays
        document.getElementById('player1Choice').textContent = 'Choose your action';
        document.getElementById('player2Choice').textContent = this.gameMode === 'humanVsHuman' ? 
            'Choose your action' : 'Waiting for your move...';
        
        // Hide results
        document.getElementById('results').style.display = 'none';
        
        // Disable play button
        document.getElementById('playRound').disabled = true;
    }
    
    /**
     * Reset the entire game
     */
    resetGame() {
        this.player1Score = 0;
        this.player2Score = 0;
        this.roundCount = 0;
        
        this.updateScoreboard();
        this.resetRound();
    }
    
    /**
     * Display complete Nash Equilibrium analysis for all possible outcomes
     */
    displayNashEquilibriumAnalysis() {
        const analysisDiv = document.getElementById('equilibriumAnalysis');
        
        let html = '<div class="full-analysis">';
        html += '<h4>Complete Game Analysis (All Outcomes)</h4>';
        html += '<div class="analysis-grid">';
        
        const allChoices = ['go', 'stop'];
        
        for (const p1Choice of allChoices) {
            for (const p2Choice of allChoices) {
                const payoff = this.payoffMatrix[p1Choice][p2Choice];
                const p1Emoji = this.getChoiceEmoji(p1Choice);
                const p2Emoji = this.getChoiceEmoji(p2Choice);
                
                // Check if this outcome is a Nash Equilibrium
                const p1Current = payoff[0];
                const p2Current = payoff[1];
                
                let p1CanImprove = false;
                let p2CanImprove = false;
                
                // Check if Player 1 can improve
                for (const altChoice of allChoices) {
                    if (altChoice !== p1Choice) {
                        const altPayoff = this.payoffMatrix[altChoice][p2Choice][0];
                        if (altPayoff > p1Current) {
                            p1CanImprove = true;
                            break;
                        }
                    }
                }
                
                // Check if Player 2 can improve
                for (const altChoice of allChoices) {
                    if (altChoice !== p2Choice) {
                        const altPayoff = this.payoffMatrix[p1Choice][altChoice][1];
                        if (altPayoff > p2Current) {
                            p2CanImprove = true;
                            break;
                        }
                    }
                }
                
                const isNash = !p1CanImprove && !p2CanImprove;
                
                html += `<div class="outcome-analysis ${isNash ? 'nash-eq' : ''}">`;
                html += `<div class="outcome-title">${p1Emoji} ${this.capitalizeFirst(p1Choice)} vs ${p2Emoji} ${this.capitalizeFirst(p2Choice)}</div>`;
                html += `<div class="outcome-payoff">Payoffs: (${payoff[0]}, ${payoff[1]})</div>`;
                html += `<div class="outcome-status">${isNash ? '✅ Nash Equilibrium' : '❌ Not Equilibrium'}</div>`;
                html += '</div>';
            }
        }
        
        html += '</div></div>';
        analysisDiv.innerHTML = html;
    }
    
    /**
     * Get emoji representation for a choice
     * @param {string} choice - 'go' or 'stop'
     * @returns {string} Corresponding emoji
     */
    getChoiceEmoji(choice) {
        const emojis = {
            'go': '🟢',
            'stop': '🔴'
        };
        return emojis[choice] || '❓';
    }
    
    /**
     * Capitalize first letter of a string
     * @param {string} str - Input string
     * @returns {string} Capitalized string
     */
    capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new StoplightGame();
});
