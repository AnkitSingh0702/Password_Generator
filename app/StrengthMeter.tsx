import zxcvbn from "zxcvbn";
import { Input } from "../components/ui/input";

const colors: { [key: number]: string }
    = {
    0: "#e2e8f0",
    1: "#FF5733",
    2: "#FFC300",
    3: "#3498DB",
    4: "#2ECC71",
    5: "#27AE60",
};

const message: { [key: number]: string }
    = {
    0: "Too Weak!",
    1: "Weak!",
    2: "Acceptable!",
    3: "Good!",
    4: "Strong 💪",
    5: "Too Strong 💪💪",
};

const getColor = (score: number, index: number) => {
    if (score > index) {
        return colors[score];
    }
    return colors[0];
};

export default function StrengthMeter({ password }: { password: string }) {
    const passwordScore = password.length >= 16 ? 5 : zxcvbn(password).score;
    const passwordCrackTime = zxcvbn(password).crack_times_display.offline_slow_hashing_1e4_per_second;
    return (
        <>
            <div className="flex gap-1" >
                {[0, 1, 2, 3, 4].map((index) => (
                    <div
                        key={index}
                        className="h-1 w-full rounded-md"
                        style={{ backgroundColor: getColor(passwordScore, index) }}
                    />
                ))}
            </div>
            <div className="flex gap-2 items-center justify-between">
                <Input
                    type="number"
                    disabled
                    value={password.length}
                    style={{ color: colors[passwordScore] }}
                    className="text-center font-semibold"
                />
                <Input
                    type="text"
                    disabled
                    value={message[passwordScore]}
                    style={{ color: colors[passwordScore] }}
                    className="w-fit text-center font-semibold"
                />
            </div>
            {/* <div className="flex gap-2 items-center justify-between">
                <Input
                    type="text"
                    disabled
                    value={`It would take ${passwordCrackTime} to crack this password.`}
                    className="text-center font-semibold"
                />
            </div> */}
        </>
    )
}