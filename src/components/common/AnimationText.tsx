import React, { useEffect, useState } from "react";

interface ComponentProps {
    number: number | undefined;
    height: number | undefined;
}

const AnimationText: React.FC<ComponentProps> = ({ number, height = 20 }) => {
    const [letters, setLetters] = useState([0, 0, 0, 0]);
    useEffect(() => {
        if (number) {
            //   renterNum(number);
            let num = number.toString();
            num = num.padStart(4, "0");
            setLetters([
                parseInt(num[0]),
                parseInt(num[1]),
                parseInt(num[2]),
                parseInt(num[3]),
            ]);
        } else {
            setLetters([2, 0, 0, 0]);
        }
    }, [number]);

    return (
        <span className="flex gap-[2px] overflow-hidden" style={{ height }}>
            <div
                className="h-full transition duration-500 ease-out"
                style={{ transform: `translateY(-${height * letters[0]}px)` }}
                hidden={letters[0] == 0}
            >
                <div className="h-full flex items-center">0</div>
                <div className="h-full flex items-center">1</div>
                <div className="h-full flex items-center">2</div>
                <div className="h-full flex items-center">3</div>
                <div className="h-full flex items-center">4</div>
                <div className="h-full flex items-center">5</div>
                <div className="h-full flex items-center">6</div>
                <div className="h-full flex items-center">7</div>
                <div className="h-full flex items-center">8</div>
                <div className="h-full flex items-center">9</div>
            </div>
            <div
                className="h-full transition duration-500 ease-out"
                style={{ transform: `translateY(-${height * letters[1]}px)` }}
                hidden={letters[0] == 0 && letters[1] == 0}
            >
              <div className="h-full flex items-center">0</div>
              <div className="h-full flex items-center">1</div>
              <div className="h-full flex items-center">2</div>
              <div className="h-full flex items-center">3</div>
              <div className="h-full flex items-center">4</div>
              <div className="h-full flex items-center">5</div>
              <div className="h-full flex items-center">6</div>
              <div className="h-full flex items-center">7</div>
              <div className="h-full flex items-center">8</div>
              <div className="h-full flex items-center">9</div>
            </div>
            <div
                className="h-full transition duration-500 ease-out"
                style={{ transform: `translateY(-${height * letters[2]}px)` }}
                hidden={letters[0] == 0 && letters[1] == 0 && letters[2] == 0}
            >
              <div className="h-full flex items-center">0</div>
              <div className="h-full flex items-center">1</div>
              <div className="h-full flex items-center">2</div>
              <div className="h-full flex items-center">3</div>
              <div className="h-full flex items-center">4</div>
              <div className="h-full flex items-center">5</div>
              <div className="h-full flex items-center">6</div>
              <div className="h-full flex items-center">7</div>
              <div className="h-full flex items-center">8</div>
              <div className="h-full flex items-center">9</div>
            </div>
            <div
                className="h-full transition duration-500 ease-out"
                style={{ transform: `translateY(-${height * letters[3]}px)` }}
            >
              <div className="h-full flex items-center">0</div>
              <div className="h-full flex items-center">1</div>
              <div className="h-full flex items-center">2</div>
              <div className="h-full flex items-center">3</div>
              <div className="h-full flex items-center">4</div>
              <div className="h-full flex items-center">5</div>
              <div className="h-full flex items-center">6</div>
              <div className="h-full flex items-center">7</div>
              <div className="h-full flex items-center">8</div>
              <div className="h-full flex items-center">9</div>
            </div>
        </span>
    );
};

export default AnimationText;
