import { useEffect, useState } from "react";

const User = () => {
    const reqBody = {
        purpose: "pick",
        uid: 0
    }
    const [scores, setScores] = useState(null);
    // useEffect(() => {
    //     reqBody.uid = JSON.parse(sessionStorage.getItem("logUser"))[0].uid
    // }, [])
    return (
        <>
            <h4>user</h4>
            {
                scores !== null ? 
                <table>
                    <thead>
                        <tr>
                            <th>gamemode</th>
                            <th>score</th>
                            <th>date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                            scores.map((data: any, idx: number) => {
                               return (
                                <tr key={idx}>
                                    <td>{data.gamemode}</td>
                                    <td>{data.score}</td>
                                    <td>{data.playdate}</td>
                                </tr>
                               )
                            })
                        } */}
                    </tbody>
                </table>
                : null
            }
        </>
    )
}

export default User;