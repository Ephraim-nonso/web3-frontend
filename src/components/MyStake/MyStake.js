import clsx from "clsx";
import { utils } from "ethers";
import React from "react";
import Card from "./Card/Card";
import Styles from "./MyStake.module.css";

const MyStake = ({
  withdrawInput,
  stakeInput,
  checkBalInput,
  onChangeInput,
  onClickStake,
  onClickWithdraw,
  onCheckDetails,
  userDetails,
  rewardAmount,
  stakeAmount,
  connected,
}) => {
  const { amount, address, time, valid } = userDetails;

  return (
    <div className={Styles.root}>
      <h2 className={Styles.heading}>My stake</h2>

      <div className={Styles.stake_body}>
        <div className={Styles.card_container}>
          <Card cardKey="Total Staked" cardValue={stakeAmount} />
          <Card cardKey="Total Reward" cardValue={rewardAmount} />
        </div>
        <div className={Styles.container}>
          <form onSubmit={onClickStake} className={Styles.form}>
            <input
              type="number"
              placeholder="Amount to stake"
              className={Styles.input}
              value={stakeInput}
              onChange={onChangeInput}
              id="stake"
            />
            <button
              type="submit"
              className={clsx({
                [Styles.stake_btn]: true,
                [Styles.btn_diabled]: !connected,
              })}
              disabled={!connected}
            >
              Stake
            </button>
          </form>

          <form onSubmit={onClickWithdraw} className={Styles.form}>
            <input
              type="number"
              placeholder="Amount to unstake"
              className={Styles.input}
              value={withdrawInput}
              onChange={onChangeInput}
              id="unstake"
            />
            <button
              type="submit"
              className={clsx({
                [Styles.unstake_btn]: true,
                [Styles.btn_diabled]: !connected,
              })}
              disabled={!connected}
            >
              Unstake
            </button>
          </form>

          <form onSubmit={onCheckDetails} className={Styles.form}>
            <input
              type="text"
              placeholder="Check balance"
              className={Styles.input}
              value={checkBalInput}
              onChange={onChangeInput}
              id="check"
            />
            <button
              type="submit"
              className={clsx({
                [Styles.check_btn]: true,
              })}
              disabled={!connected}
            >
              Check
            </button>
          </form>
        </div>
        <div>
          <div className={Styles.display_user}>
            {address}
            <h1> {amount}</h1>
            {time}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyStake;
