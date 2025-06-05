import React from 'react'

export default function Awards() {
    const rewards = [
        { id: 1, rewardAmount: 5000 },
        { id: 2, rewardAmount: 10000 },
        { id: 3, rewardAmount: 15000 },
        { id: 4, rewardAmount: 20000 },
        { id: 5, rewardAmount: 30000 },
        { id: 6, rewardAmount: 50000 },
        { id: 7, rewardAmount: 75000 },
        { id: 8, rewardAmount: 100000 },
        { id: 9, rewardAmount: 200000 },
        { id: 10, rewardAmount: 300000 },
        { id: 11, rewardAmount: 500000 },
        { id: 12, rewardAmount: 750000 },
        { id: 13, rewardAmount: 1000000 },
        { id: 14, rewardAmount: 1500000 }
    ].reverse();

    return (
        <>
            <div className='awardsMain'>
                <div className="awardsLists">
                    {
                        rewards.map((reward) => (
                            <div className='awardItem'>
                                <div className="serialNumbers">
                                    {reward.id}
                                </div>  Rs: {reward.rewardAmount} -/
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
