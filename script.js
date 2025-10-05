class StoplightGame {
    constructor() {

        this.gameMode = 'humanVsComputer';
        this.player1Choice = null;
        this.player2Choice = null;
        this.player1Score = 0;
        this.player2Score = 0;
        this.roundCount = 0;

        this.payoffMatrix = {
            'go': {
                'go': [-1, -1],
                'stop': [3, -1]
            },
            'stop': {
                'go': [-1, 3],
                'stop': [0, 0]
            }
        };

        this.initializeGame();
    }

    initializeGame() {

        document.getElementById('humanVsComputer').addEventListener('click', () => {
            this.setGameMode('humanVsComputer');
        });

        document.getElementById('humanVsHuman').addEventListener('click', () => {
            this.setGameMode('humanVsHuman');
        });

        document.querySelectorAll('.choice-btn:not(.p2)').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.makePlayer1Choice(e.target.dataset.choice);
            });
        });

        document.querySelectorAll('.choice-btn.p2').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.makePlayer2Choice(e.target.dataset.choice);
            });
        });

        document.getElementById('playRound').addEventListener('click', () => {
            this.playRound();
        });

        document.getElementById('resetGame').addEventListener('click', () => {
            this.resetGame();
        });

        this.displayNashEquilibriumAnalysis();
    }

    setGameMode(mode) {
        this.gameMode = mode;

        document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
        document.getElementById(mode).classList.add('active');

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

    makePlayer1Choice(choice) {
        this.player1Choice = choice;

        document.querySelectorAll('.choice-btn:not(.p2)').forEach(btn => {
            btn.classList.remove('selected');
        });
        document.querySelector(`[data-choice="${choice}"]:not(.p2)`).classList.add('selected');

        const choiceEmoji = this.getChoiceEmoji(choice);
        document.getElementById('player1Choice').textContent = `${choiceEmoji} ${this.capitalizeFirst(choice)}`;

        this.checkIfReadyToPlay();
    }

    makePlayer2Choice(choice) {
        if (this.gameMode !== 'humanVsHuman') return;

        this.player2Choice = choice;

        document.querySelectorAll('.choice-btn.p2').forEach(btn => {
            btn.classList.remove('selected');
        });
        document.querySelector(`[data-choice="${choice}"].p2`).classList.add('selected');

        const choiceEmoji = this.getChoiceEmoji(choice);
        document.getElementById('player2Choice').textContent = `${choiceEmoji} ${this.capitalizeFirst(choice)}`;

        this.checkIfReadyToPlay();
    }

    checkIfReadyToPlay() {
        const playButton = document.getElementById('playRound');

        if (this.gameMode === 'humanVsComputer') {

            playButton.disabled = !this.player1Choice;
        } else {

            playButton.disabled = !(this.player1Choice && this.player2Choice);
        }
    }

    getComputerChoice() {
        const choices = ['go', 'stop'];
        return choices[Math.floor(Math.random() * choices.length)];
    }

    playRound() {

        if (this.gameMode === 'humanVsComputer') {
            this.player2Choice = this.getComputerChoice();
            const choiceEmoji = this.getChoiceEmoji(this.player2Choice);
            document.getElementById('player2Choice').textContent = `${choiceEmoji} ${this.capitalizeFirst(this.player2Choice)}`;
        }

        const payoffs = this.payoffMatrix[this.player1Choice][this.player2Choice];
        const p1Payoff = payoffs[0];
        const p2Payoff = payoffs[1];

        this.player1Score += p1Payoff;
        this.player2Score += p2Payoff;
        this.roundCount++;

        this.displayResults(p1Payoff, p2Payoff);
        this.updateScoreboard();

        document.getElementById('playRound').disabled = true;
    }

    displayResults(p1Payoff, p2Payoff) {
        const resultsDiv = document.getElementById('results');
        resultsDiv.style.display = 'block';

        const p1Emoji = this.getChoiceEmoji(this.player1Choice);
        const p2Emoji = this.getChoiceEmoji(this.player2Choice);
        document.getElementById('p1Result').textContent = `${p1Emoji} ${this.capitalizeFirst(this.player1Choice)}`;
        document.getElementById('p2Result').textContent = `${p2Emoji} ${this.capitalizeFirst(this.player2Choice)}`;

        document.getElementById('p1Payoff').textContent = p1Payoff > 0 ? `+${p1Payoff}` : p1Payoff;
        document.getElementById('p2Payoff').textContent = p2Payoff > 0 ? `+${p2Payoff}` : p2Payoff;

        const nashAnalysis = this.analyzeNashEquilibrium(this.player1Choice, this.player2Choice);
        document.getElementById('nashAnalysis').innerHTML = nashAnalysis;
    }

    analyzeNashEquilibrium(p1Choice, p2Choice) {
        const currentPayoff = this.payoffMatrix[p1Choice][p2Choice];
        const p1Current = currentPayoff[0];
        const p2Current = currentPayoff[1];

        const allChoices = ['go', 'stop'];

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

    updateScoreboard() {
        document.getElementById('p1Score').textContent = this.player1Score;
        document.getElementById('p2Score').textContent = this.player2Score;
        document.getElementById('roundCount').textContent = this.roundCount;
    }

    resetRound() {
        this.player1Choice = null;
        this.player2Choice = null;

        document.querySelectorAll('.choice-btn').forEach(btn => btn.classList.remove('selected'));

        document.getElementById('player1Choice').textContent = 'Choose your action';
        document.getElementById('player2Choice').textContent = this.gameMode === 'humanVsHuman' ? 
            'Choose your action' : 'Waiting for your move...';

        document.getElementById('results').style.display = 'none';

        document.getElementById('playRound').disabled = true;
    }

    resetGame() {
        this.player1Score = 0;
        this.player2Score = 0;
        this.roundCount = 0;

        this.updateScoreboard();
        this.resetRound();
    }

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

                const p1Current = payoff[0];
                const p2Current = payoff[1];

                let p1CanImprove = false;
                let p2CanImprove = false;

                for (const altChoice of allChoices) {
                    if (altChoice !== p1Choice) {
                        const altPayoff = this.payoffMatrix[altChoice][p2Choice][0];
                        if (altPayoff > p1Current) {
                            p1CanImprove = true;
                            break;
                        }
                    }
                }

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

    getChoiceEmoji(choice) {
        const emojis = {
            'go': '🟢',
            'stop': '🔴'
        };
        return emojis[choice] || '❓';
    }

    capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new StoplightGame();
});