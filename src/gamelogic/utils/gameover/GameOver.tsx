import { invoke } from "@tauri-apps/api/tauri";
import { dropBlockInterval } from "../dropblock/DropBlock";
import container from "../../../css/game.module.css";
import { gameOverModal } from "../../Main";
import GameStatus from "../../status";
import { handleKeyDown } from "../../Main";

const GameOver = () => {
    document.removeEventListener("keydown", handleKeyDown);
    clearInterval(dropBlockInterval);
    gameOverModal.current.classList.remove(container.hide);
    GameStatus.isOver = true;

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    const scoreData = {
        score: GameStatus.score,
        playdate: formattedDate,
        gamemode: "normal",
        uid: 0,
        purpose: "send"
    }
    console.log("gameover by frontend");
    invoke("gameover");
}

export default GameOver;