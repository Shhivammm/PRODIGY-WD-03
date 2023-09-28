let currentPlayer = 'X';
const cells = document.querySelectorAll('.cell');
const status = document.getElementById('status');

function makeMove(index) {
    if (cells[index].innerHTML === '' && !isGameWon()) {
        cells[index].innerHTML = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        updateStatus();
        checkGameResult();
    }
}

function updateStatus() {
    status.innerHTML = `Player ${currentPlayer}'s Turn`;
}

function checkGameResult() {
    if (isGameWon()) {
        status.innerHTML = `Player ${currentPlayer === 'X' ? 'O' : 'X'} wins!`;
    } else if ([...cells].every(cell => cell.innerHTML !== '')) {
        status.innerHTML = "It's a draw!";
    }
}

function isGameWon() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (cells[a].innerHTML && cells[a].innerHTML === cells[b].innerHTML && cells[b].innerHTML === cells[c].innerHTML) {
            return true;
        }
    }
    return false;
}

function resetBoard() {
    cells.forEach(cell => (cell.innerHTML = ''));
    currentPlayer = 'X';
    updateStatus();
}

updateStatus();
