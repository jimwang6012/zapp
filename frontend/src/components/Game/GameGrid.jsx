import { useState } from 'react';

import QuestionModule from "./QuestionModule";

const styles = {
    gridBox: `flex justify-center items-center h-44 w-full bg-secondary rounded-xl p-4`,
}

function GameGrid() {

    const [ lives, setLives ] = useState(3)

    function getLives() {
        setLives(lives - 1)
    }


    return (
        <div className="grid grid-cols-3 gap-4 h-full max-w-6xl mx-auto justify-items-center mt-10">
            <div className={styles.gridBox}><QuestionModule type="0" /></div>
            
            <div className={styles.gridBox}>2</div>
            
            <div className={styles.gridBox}>
                <QuestionModule type="3" correct={false} answer={3} lives={getLives} option1="option1" option2="option2" option3="option3" option4="option4" />
            </div>
            <div className={styles.gridBox}>
                <QuestionModule type="4" lives={lives} />
            </div>
            
            <div className={styles.gridBox}>Timer</div>
            <div className={styles.gridBox}>
            <QuestionModule type="2" />
            </div>
            <div className={styles.gridBox}>7</div>
            <div className={styles.gridBox}>8</div>
            <div className={styles.gridBox}>9</div>
        </div>
    );
}

export default GameGrid;