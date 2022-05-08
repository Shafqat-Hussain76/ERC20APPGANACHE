import React, { useState } from "react";
const { ethers, Contract } = require("ethers");
import MYERC20 from "../artifacts/contracts/MYERC20.sol/MYERC20.json";
const contAdd = "0x27f1610EB1B0FB84563e3880d465C41a3Cd679dB";//ganache 

const Display = ()=>{
    const provider = new ethers.providers.JsonRpcProvider("HTTP://127.0.0.1:7545");
    const contract = new ethers.Contract(contAdd, MYERC20.abi, provider);
    let [balance, setBalance] = useState("");
    let [addrs, setAddrs] = useState('');
    let [decimals, seDecimals] = useState("");
    let [symbol, setSymbol] = useState("");
    let [name, setName] = useState("One");
    let [totalsupply, setTotalsupply] = useState("");
    const Balhand = async ()=>{
        let va = await contract.balanceOf(addrs);
        setBalance(va.toString());
    }
    const dechand = async ()=>{
        let va = await contract.decimals();
        seDecimals(va.toString());
    }
    const symhand = async ()=>{
        let va = await contract.symbol();
        setSymbol(va);
    }
    const namhand = async ()=>{
        let va = await contract.name();
        setName(va);
    }
    const totsupp = async ()=>{
        let va = await contract.totalSupply();
        setTotalsupply(va.toString());
    }
    return(
        <>
        <h2>BALANCE is:- { balance } WEI</h2> 
        <input value={ addrs } placeholder="Set" onChange={(e)=>setAddrs(e.target.value)}/> <br /><br />
        <button onClick={ Balhand }>click to update balance</button><br />
        <h2>DECIMALS:- { decimals } </h2> 
        <button onClick={ dechand }>click to update decimals</button><br />
        <h2>SYMBOL:- { symbol }</h2> 
        <button onClick={symhand}>click to update symbol</button><br />
        <h2>NAME:- { name } </h2> 
        <button onClick={namhand}>click to update name</button><br />
        <h2>TOTAL SUPPLY:- { totalsupply } </h2> 
        <button onClick={totsupp}>click to update total Supply</button><br />

        </>
    )
}
export default Display;
